<!-- Instructor: $ cd w01/d01/samples/ && source setup.sh -->
# WDI 1.3 - Afternoon - Your Terminal
## Interacting with your computer: via text

| **Section**      	| **Timing** | **Summary**                                                             |
|------------------	|------------|-------------------------------------------------------------------------|
| Objectives       	| 5 min    	| Introduce material  |
| Opening         	| 5 min    	| Role and Importance of the terminal |
| I Do            	| 10 min   	| Simple terminal commands |
| We Do           	| 5 min    	| Simple Terminal Commands |
| I Do      			| 10 min   	| Creating, removing files and folders |
| We Do				| 5 min    	| Making files and folders |
| You Do				| 10 min   	| Create file/folder structure for personal course repo |
| I Do					| 10 min   	| Moving and copying files with `mv` and  `cp` |
| You Do (LAB)		and| 15 min   	| Create collection of files, directories to manage Spice Girls' lyrics |


##1.Lesson - 1 hour 15 min

### Learning Objectives (5 min )

- Describe the role and importance of the terminal
- Navigate through directories in the terminal
- Create, copy, move, and remove files via the terminal
- Open files and directories in sublime

#### Connection to Long Term Learning Goals

Developers use a text-based interaction with computers.  At times, using a mouse may not even be an option.  Using a text based interaction is not only required for development but often, far more efficient once the developer becomes familiar with the terminal.

<hr>


##### “Fist to Five” PreCheck: Terminal Use


- 5 fingers means 100% understanding & comfortable
- 0 fingers means 0% understanding & comfortable


___________________________________________________________________________________


## Opening: Role and Importance of the Terminal  - 5 minutes
<br>

*Introduce* Computer Interfaces;
<br>
*Provide context* for “interaction” with a computer describe the following real-world examples:

  - Stone age: Punch Cards - no computer screen at all
  - 60s-80s: Terminal/ Command Line
    - This is how everybody interacted with the computer!
  - 80s-present: Graphical User Interface (GUI)
  - 90s-present: Web Browsers

<br />
**Question**: Why do you think web developers use the terminal?

**Student Answers**:

- it is easier for us to make and modify tools for ourselves if we don't have to provide a GUI
- using the mouse in general takes time, we can be more efficient
- you can do powerful things on the command line that you can't do in a GUI (which you will learn about later on in this course)



## I Do: Simple Terminal Commands & Shortcut Keys - 10 minutes
### Shortcut Keys - time to form new good habits.
######*For you windows user replace all instances of 'CMD' with 'CTRL'*
| Keys       				| Plain English         |
|----------------------|-----------------------|
| CMD + N					| New Window		       |
| CMD + T					| New Tab		           |
| CMD + W 				| Close Tab / Window    |
| CMD + Q					| Quit			           |
| CMD + O 				| Open		              |
| CMD + S					| Save		              |
| CMD + X 				| Cut		              |
| CMD + C 				| Copy                  |
| CMD + V					| Paste                 |
| CMD + Space				| Spotlight  		        |
| CMD + Shift + Arrow	| Select Text 	        |
| CMD + Shirt +T			| Open closed tab (browser)

##### Students: *close laptops for demo*

If we were IN **finder**:
 
 - We should know what directory we are in
 - We should see what files and directories are in that current directory

**Question**: How do we do this in the terminal, and what should it look like?

<!-- Student Answer:
  1. `pwd` is like asking the computer "where am I?"
    - directory structures are laid out like `directory/subdirectory/subdirectory`
  2. `ls`  is like asking the computer "what stuff is in this directory?"
-->

#### Exploring your home directory `cd && ls`
- TAB AUTO COMPLETE
- Use the `cd` command to go to your home folder.
 <br />
**Question**: “What do you see?”
- Use the `ls -a` command see what is in your home directory.
<br />
**Question**: “What do you see?  Choose a directory.”
- Use the `cd [directory]` command to go into any folder that you spot.
In the above command, replace  [directory] with the directory name you intend to move to.
- Use the `ls` command to see what files and directories exist there.
- Use the `cd` command to go to your home folder.

<br />
## We Do:  Simple Terminal Commands - 5 min

#### Directions
Lets open up a terminal and `pwd`, `ls`

`pwd` and `ls` are “commands”

- To “execute” a command we type the command and hit enter
- From this point on, instead of describing a command by saying “typing [command] and hitting enter”, simply describe the command itself.
- For example, “pwd” asks for the current working directory.”

*Display your terminal on half your screen and the finder window on the other half*

Perform several tasks that demonstrates a terminal command changing something in the finder window
For example:

```bash
$ pwd
/Users/u_name/ga_stuff
or
/home/u_name/ga_stuff

$ ls
.  ..  example.txt
```



#### CFU:

**Question:** How do we navigate directories?
 
 - Go to your home dir.
 - Go into a child dir, ...any one.
 - Go back up to the parent directory
 - `ls -a`

<!--
**Student Answer:**

  1.  `cd` by itself… takes you to your home directory
    - **Instructor**: This is your user directory where all your personal files are
    - **Instructor**: If there are multiple users on your computer they would all have their own home directories
  2. `cd directory` moves our current location to the directory
  3. `cd ..` moves our current location to the parent directory (what is one directory “up”?)
  4. `cd ../..` moves our current location two directories “up”
-->
--
##### PAUSE FOR ANSWERS
--
<br/>
<br/>

## I Do:  Making directories and files & rimraf - 10 min

**Question**: What if we want to create files and folders?

  - `mkdir dirName` creates a new directory with the name “directoryName”
  - `mkdir myProject` creates a new directory with the name “myProject”
This new directory will be created within the current parent directory.
For example, within your home directory, if I type “mkdir NewDirectory”, you’ll notice a new directory named NewDirectory in your home directory.
- `touch fileName.txt` creates a new file with the name “fileName.txt”
- `touch myFile.txt` creates a new file with the name “myFile.txt”
- This new file will be created within the current directory.

***Example:***

```bash
$ touch example.txt
$ mkdir exDir
$ mv example exDir/
$ cp exDir/example example.txt.bak
$ mv example.txt.bak example.txt
```
 
**CFU:**

 - Change directories into the `exDir` directory we just created.
 - Identify the syntax to create a backup text file
 - Create an example directory
 - Move the backup file into the example directory.

<!--
**Student Answer**:

```bash
$ touch example.txt
$ cp example.txt example.txt.bak
$ mkdir exDir
$ mv example.txt.bak exDir/
```
-->
<br/>
--
##### PAUSE FOR ANSWERS
--
<br/>
<br/>

**Question**: What if we want to remove files and folders?

<!-- setup_1
$ touch junkFile.txt && mkdir junkDirectory && touch junkDirectory/innerJunkFile.txt; clear; ls;
-->

  - `rm junkFile.txt` removes the file “junkFile.txt”
  - `rmdir junkDirectory` attempts to remove the directory `junkDirectory`, however it must be empty
  - `rm -r junkDirectory` removes the file “innerJunkFile.txt” and the directory junkDirectory
  - `mkdir` `rm` and `touch` can be used to create more than one file/directory at the same time. **Example:**
  
	```bash
	$ mkdir directory01 directory02 directory03
	$ touch file01 file02 file03
	$ rm file01 file03
	$ cd ../
	$ rm -rf samples
	```
<br/>
<br/>
<br/>


## We Do: Making files and folders - 5 min

  1. `mkdir films` to make a directory
  2. `cd films` to go into that directory
  3. `ls` to see where you are
    - directory is empty, nothing there
  4. `touch casablanca.txt` to make a file
  5. `subl casablanca` to open that file
    - add some text just to try it out, for example the text ‘Hello File!!’
  6. `touch jaws.txt titanic.txt twilight.txt` to make more movies!
  7. `subl .` to open the whole directory
    - add some text to the other files
  8. Close Submlime, make sure everything is saved
  9. `rm casablanca.txt jaws.txt` to remove a couple movies

**Tip:** You can use the up and down arrows to go through your command history<br />
**Tip:** use command `history` to look back also



## You Do: Create the folder structure - 10 min
**weekly/daily : wXX/dXX**

#### Directions to students:
We are going to be working on a lot of projects throughout this course. It would be good if we had folders for each day.

  - Create 12 folders for each week of the course. (e.g. `w01`, `w02`, etc.)
  - In each week folder, create 5 day folders (e.g. `d01`, `d02`, etc.)

#### CFU: What is a solution with minimal amount of typing?

```bash
$ mkdir w01 w02 w03 w04 w05 w06 w07 w08 w09 w10 w11 w12
$ cd w01
$ mkdir d01 d02 d03 d04 d05
$ cd ../w02
```

## I Do:  Moving and Copying files (`mv` and `cp`)
**Question**: What if we wanted to move the folder "films" into todays week and day folder

```bash
$ cd
$ mv films w01/d01/films
```

*You can give `folder/subfolder/file` paths to `mkdir`, `touch`, `cd` etc.*

**Question**: How would we copy a folder?

 - `cp file new-file` create a copy of the “file” and calls it “new-file”
 - `cp -r directory new-directory` create a copy of the entire “directory” and calls it “ new-directory”
- The `-r` means “recursive” which just means copy each file and directory within

## Lab: Spice Girls Exercise - 15 minutes
#### Directions part 1:
While building web application, we seek to efficiently organizing/modify our files and directories.  Using your terminal to navigate and modify files will become second nature.  We need to practice!  Let’s spice up our life with a collection of files and directories for managing the Spice Girls’ lyrics.

 1. make a directory `spice_girls` to hold spice girls albums and songs
 2. in `spice_girls` make the directories `spice` `spiceworld` `forever`
 3. put the lyrics to "wannabe" and "denying" into their respective album folders
 4. in the `spice_girls` folder make the directory `greatest_hits`
  - Hint: make sure you aren't in one of the album folders already when you make `greatest_hits`

#### CFU:
 1. Should have created: `spice/wannabe`, `spiceworld/denying`, `greatest_hits/wannabe`
 2. **Bonus**: What would have been a solution with minimal typing?


#### Directions part 2:

  1. make a copy of the whole directory `spice_girls` into `spice_girls_backup`
  2. remove the folder `spice_girls_backup`

#### CFU:
What commands did you use to remove the spice girlss?

```bash
  $ cp -R spice_girls spice_girls_backup
  $ rm -rf spice_girls
```

###### BONUS: `apt-get install tree`