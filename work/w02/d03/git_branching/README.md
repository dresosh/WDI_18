

#Git Branches and Github Pages Deployment

This markdown is accompanied by [slides](https://presentations.generalassemb.ly/fd5a4eace8f620013f6a#/)


####SWBAT:

* Understand how to create, merge and delete branches on local and remote repositories
	* Branch
	* Checkout
	* Merge
	* Deleting a branch
	* Git diff
	* Pushing branches to github
	* Creating a Pull Request 
* Deploy using Github Pages




---

###List all available branches:

`$ git branch`


---

###Create a new branch named navbar:
(always try to name your branches after the feature you are trying to implement) 

`$ git branch navbar`


---

###Checkout to another branch:

`$ git checkout navbar`

###Create and checkout a new branch in one command:

`$ git checkout -b footer`

---

###Deleting a branch

Take a sec to google how to delete a branch

`$ git branch -d navbar`


---

### Cool? Easy? 
####There's a catch! - a lightly illogical and nasty one.

NB: You must **always** stage and commit all changes to a branch before checking out to a new branch; else git will see these changes as global and automatically merge them across branches. This is a disaster! 

**You must always stage and commit all changes to a branch before checking out** EVEN if you dont want to keep them

**ESPECIALLY** if you don't want to keep them

---

One more note on checkouts : 

We can also checkout to any previous commit. This will put us in a state known as detached head. 

LAB: Take a sec to google this and figure out why being in this state is not ideal....

Instead we can use a workflow that only merges good code to master and that stashes crappy code (on branches) that we end up not needing.

Makes sense?


---

###Git diff

`$ git diff` is a command we can use to compare two branches. This command takes one argument - the name of the branch to be compared - with the branch currently checked out. 



---

###Merging a branch 
There are two main ways to merge code. 

1. using the git merge command, locally
2. submitting a pull request

Let's take a moment to discuss these options

---

1. local merges are useful if working on your own. They are quicker (fewer steps) but less transparent. If you are the only person working on a project, there is very little chance of a merge conflict. 

2. PRs are key to **team** workflow or contributing to a repo that you do not have write access over. 



### Merging locally
 

To merge a branch you first need to know which branch you are currently on. How do we do that?

`$ git branch`

Then you need to choose the branch you want to merge in.

This is an example workflow:

`$ git checkout master`


`$ git merge navbar`


###Pushing a branch to github

`$ git push origin navbar`

This is going to tee us up for a Pull Request. (The other manner of merging, we discussed earlier)

Once we have pushed this branch to github, submitting a PR is fairly straight forward. Just follow the big green buttons until they turn purple and "hey presto" your PR is submitted. 

Merge conflicts will need to be resolved locally.


---

###Merge conflicts

They are not evil - just a fact of life. The most common kind is know as an edit collision. This occurs when the same line of the same file has been altered differently across two branches and git no longer knows which one to use. 

Its all about probability

---

#Github Pages

###In class lab

Now you have had some good practise at branching and merging - its time to deploy using github pages. 

This will be achieved by following the appropriate [documentation](https://pages.github.com/) 

Its super easy and basically all that needs to happen is the creation of a new branch called `gh-pages` and push it to github. Providing there is an index.html in your root directory, of your gh-pages branch you can then navigate to `http://username.github.io/repository` to view the rendered html. You can also point a new domain name to this URL hence giving you a fully deployed project, with custom URL. 

---













