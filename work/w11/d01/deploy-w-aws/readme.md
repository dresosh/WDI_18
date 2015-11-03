# Deploying with AWS

### Objectives:
###### Students will be able to...
- Set up a private key pair
- Open up the firewall with a Security Group
- Create an Ubuntu 14.04 EC2 instance
- Use SSH communication to connect to an EC2 instance
- Use apt-get to install packages
	- NodeJS
	- Git
	- MongoDB
	- WGET
- Deploying a node app on an EC2 Instance
- _Bonus: Hooking up a domain_

## Build Along

First, log into your AWS console, this should work for most cases:

`https://us-west-2.console.aws.amazon.com/console/home?region=us-west-2#`

Now find the `EC2` link, and expand the `Network & Security` accodrian. Go to `Security Groups` and click the bright blue button `Create Security Group`

- Add a name & description and leave the default VPC.
- Go to whatismyip.com, and grab that IP
- Back in the console in the pop-up window click `Add Rule` button
- Set the inbound rules:
	 
| Type | Protocol | Port Range |   Source   |
|------|----------|------------|------------|
| SSH  |   TCP    |     22     |    MyIP    |
| HTTP |   TCP    |     80     |  Anywhere  |

- Set the outbound rules:

| Type 		 | Protocol | Port Range |   Source   |
|-------------|----------|------------|------------|
| Custom TCP  |   TCP    |    9418    |  Anywhere  |
| HTTP 		 |   TCP    |     80     |  Anywhere  |
| HTTPS		 |   TCP    |    443     |  Anywhere  |

- Click the `Create` button

Lets add ourselves a `Key-Pair`. This will allow us to uniquely connect to our instances after we create them.

- In the `Network & Security` accordion
- Select `Key Pairs`
- Click `Create Key Pair` BigBlueButton
	- Give it a name
	- Click `Create`... it should download instantly
 

Time to setup a server so we can remote in and bring in one of our projects.

- Open the instances accordian on the left rail
- Click `instances` link
- Click 'Launch Instance`
	- Select: **Ubuntu Server 14.04 LTS (HVM)**
	- Select: **t2.micro**
	- Click: **Next: Configure Instance Details**
	- Click: **Next: Add Storage**
	- 8 GB should be good for now
	- Click: **Next: Tag Instance**
	- Click: **Next: Configure Security Group**
	- Select: **Select an existing security group** option
	- Find and select the named security group we just made
	- Click: **Review and Launch**
	- Click: **Launch**
	- Select the **Key Pair** we named previously
	- Check the box agreeing to give amazon your life
	- Click **Launch Instances**

Wait a minute...
	
- Watch for the instances to say `running` in the **Instances State** field
- Grab the public IP or memorize it...

Now lets go somewhere a little more familiar... our terminal

## Terminal~along
First thing... never ever share that *.pem file with anyone... ever. Don't ever put it in a repository, not even if you .gitignore it, just don't do it.

Lets `SSH` into our newly created EC2 Instance

In you command prompt / terminal, you don't have to go anywhere, you can SSH from any folder because you're exiting your local machine. First we need to change the permissions on the *.pem file so we can use it to SSH in.

Step 1 - Type the following:

```bash
$ chmod 400 ~/Downloads/*.pem
$ SSH -i ~/Downloads/*.pem ubuntu@$IP
```

$IP stands for the IP of your server we just memorized

Now you should be in your server and your terminal should have changed to look something like this:

```bash
ubuntu@ip-172-21-12-51:~$
```

Cool so we're in our HOME directory in our instance in the cloud

## Build along - Terminal

First lets update `apt-get`

Time to install `wget`, `git`, `node`, `mongodb`,
upgrade everything in the `apt-get` package manager,
and we'll have to follow a couple prompts, try to always 'Use the maintainers version of the package'.
Then `wget` nvm, and update to current node version... `4.2.1`

```bash
$ sudo apt-get update
$ sudo apt-get install -y wget git nodejs mongodb
$ sudo apt-get upgrade -y
# These two lines Setup so you can use port '80'
$ sudo apt-get install libcap2-bin
$ sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\``
# Making the DB folder and setting permissions
$ sudo mkdir -p /data/db/
$ sudo chown `id -u` /data/db
# Getting NVM
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
# Install the most update version of node
$ nvm install 4.2.1
$ nvm use 4.2.1
```

Cool everything should be ready... Lets go clone a repository we want to launch on our instance... Project 3 for example.

```bash
$ mongod &
[pid]
$ git clone git@github.com:userName/repository.git
$ cd repository
$ npm install
```

Now before we use this we need to change the port that our server:

```bash
$ vim server.js
```
- press `i` ( this stands for insert )
- navigate to the port and set it to `80`
- press `ESC`, then type `:wq` and press `enter` 


```bash
$ node server.js
```

Lets check it out, open a browser, and go to the address:
`http://yourInstanceIP`