## Tools for Class

#### Lesson Objectives

- Explain what the command line is and why we use it.
- List the Advantages of a Command Line Interface.
- List the Disadvantages of a Command Line Interface.
- Access the Unix Shell via the Terminal.
- Alter or update a Unix Shell via the .bash_profile or .bashrc files.
- Navigate and search your OS via hotkeys (Mac's Spotlight or Ubuntu's Dash)
- Use a window manager with hotkeys (Spectacle on Mac or by default in Ubuntu)
- Use Sublime Text to open and edit files and folders
- Use Sublime Text to create or delete files and folders
- Manage settings and packages in Sublime Text

Let's do setup!

- **Screenshots**
  - [mac2imgur](https://github.com/mileswd/mac2imgur)
- **Spectacle** (or other window management software)
- **Terminal / Bash**:
  - how to set your Terminal profile, and
  - how to set up your `bash` profile.
- **Sublime Text**:
  - opening up directories, and
  - updating preferences and packages.
- **Google Chrome**:
  - developer tools.
- **Git & GitHub**:
  - navigating GitHub,
  - forking the repo, and
  - cloning the repo.

## Reading and writing Markdown

#### Lesson Objectives

- Navigate the class repo and find/create files in the correct places.
- Read and write simple Markdown, including paragraphs, lists, headings, links
  and images.

## Getting Started in the Terminal

#### Lesson Objectives

- **Filesystem navigation**
  - See the path of the current directory.
  - Explain the difference between and Absolute path and a Relative path.
  - Identify the following characters and explain their meaning in relation to your filesystem: '.', '..', '~', '/'.
  - See the contents in the current directory (including hidden files).
  - Change directories.
  - List some visual cues for orientating yourself in the terminal.
- **File management**
  - Create new files and directories
  - Copy files and directories
  - Move files and directories
  - Delete files and directories
- **Debugging**
  - Recall where to find additional information on a command.
  - Exit an ongoing process in the terminal.
  - List the three standard streams that exist between a computer and its environment.

## Lab #1 !!!

Create your own Terminal cheatsheet and add all of the above commands in to it.

- Go to your own fork of the class repo.
- Create a new file in `resources/cheatsheets` on GitHub and name it `bash.md`.
- Add the above lesson objectives as commands to it, using the backtick to denote
  code blocks.
- Save the file.
- Use `git pull origin master` in your local copy of your fork of the repo to
  download your work.

Now, create a new file called `mac.md` or `ubuntu.md` locally, in the directory
`resources/cheatsheets`, and use Sublime Text to make changes to it.

Use `git add . && git commit -m "update mac cheatsheet" && git push origin master`
to copy your changes up to your GitHub version of your fork.