# Change Log

All notable changes to the "watermelon" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [2.0.10]

- Updated the repo URL, which pointed to the organization
- Updated the tags that identify the package

## [2.0.9]

- Added auth state setting on auth changes
- Changed hover button color, removed GitHub logo

## [2.0.8]

- Added GitHub Hover response
- Added Slack Hover response
- Added Jira Hover response

## [2.0.7]

- Update description

## [2.0.6]

- EXPERIMENTAL: Allows login from Gitpod[gitpod.io] to use the extension
- Adds logging of variables to debug web login
- Added GitHub PR commenting
- Added Slack thread commenting

## [2.0.5]

- We don't send code to our server anymore
- Fixed looping login bug
- Fixed Jira ticket being undefined
- Added Jira ticket commenting

## [2.0.3]

- Hover telemetry event gets measured with a 2 second time-out

## [2.0.2]

- Gitlab now displays MR comments
- GitHub now displays PR comments
- Jira now displays Ticket comments
- [ALPHA] Bitbucket support
- Added a panel to run Watermelon with some info
- Added loading state and logged out state

## [2.0.1]

- Fixed Gitlab MR mapping
- Removed dependency on vscode.git
- Removed octokit

## [2.0.0]

- Moved UI to use treeview
- Added Gitlab and Bitbucket as sources for git services
- Code context summary with GPT

---

## [1.8.0]

- Solved critical bug when clicking "Get code context"
- Removed daily summary to focus on context

## [1.7.2]

- Fixes an error preventing the app from opening

## [1.7.1]

- Fixes error on Loading UI
- Now the button "Get Code Context" will always show up at the top
- Fixes the Commit Table not showing up

## [1.7.0]

- Allows using Slack: get most relevant thread and replies, and add to it
- If the GitHub PR body is empty, will display the same message as the web UI
- Fixes an error that prevented displaying GitHub PR comments
- Removes the dependency on Octokit to handle GitHub Requests
- Will now track all link clicked on the webview
- Allows commenting on Jira Tickets
- Allows commenting on GitHub Pull Requests
- Will now load Context before Daily Summary
- Improves the UI with plural titles

## [1.6.3]

- The user will be prompted to buy Jira in case they haven't already done so
- We now use Watermelon Backend to pipe GitHub requests

## [1.6.2]

- Fixes to the Most Relevant Jira Ticket process
- Improves Jira visuals
- Displays all relevant Jira Tickets
- Allows clicking on the title to view the Jira ticket
- Shows the Ticket description in the Most Relevant Ticket

## [1.6.1]

- Get code context button now retrieves the most relevant Jira ticket, if the user is authenticated with Jira
- Daily summary now shows currently open Jira tickets that are assigned to the user
- New loading animation
- Allows the user to deactivate telemetry through settings
- Fixes stacking of elements in the extension

## [1.6.0]

- Watermelon is now an authentication provider, to allow us to connect to all your services
- Made improvements to request less scripts from the internet, improving performance and security

## [1.5.3]

- Will allow the user to use some features without logging into GitHub

## [1.5.2]

- Will show the user a prompt to talk to the CTO every third use
- The hover link will look more like a button

## [1.5.1]

- Allows the user to see more than one commit and PR when requested

## [1.5.0]

- Commit messages now allow markdown, including lists
- Added a Draft PR indicator
- Sidebar UI reorganized to show a single commit and a single PR in a single view

## [1.4.6]

- New `watermelon.recommend` command, to recommend a watermelon to everyone on the repo
- New `watermelon.login` command, to login using GitHub from your keyboard
- We now track every time the `watermelon.show` command is called
- You can now email the committer from the hover
- Changed how the buttons on the webview work to match commands

## [1.4.5]

- Better daily summary UI

## [1.4.4]

- Will now show three different walkthroughs to understand how to use the extension
- [BETA] New way to experience the extension on web

## [1.4.3]

- Skipped, sorry!

## [1.4.2]

- Loads the webview's event listeners only when done

## [1.4.1]

- Adds a safeguard to getting repo info when starting

## [1.4.0]

- Gave the UI a facelift using Primer
- Added icons to the hover to make it more clear
- Will now execute initial actions when you log in
- Added a section to sponsor us from the sidebar
- Will now show comment author profile pic for each comment

## [1.3.7]

- Will not ask immediately for login, only on getting Pull Requests
- Fixes to git url parsing, possibly fixing issues on some edge cases
- Telemetry reporter now respects user settings

## [1.3.6]

- Added Commit info on the hover
- Registered `Show` first to prevent further errors

## [1.3.5]

- Will now track GitHub Username
- General bugfixes

## [1.3.4]

- Number of file changes on hover now changes per file

## [1.3.3]

- Small speed improvements
- Fixes to a race condition with daily summary
- Removes "get docs"

## [1.3.2]

- Added non-deployed changes from 1.3.1
- Added keybindings to allow direct usage
- Webview now saves state across uses

## [1.3.1]

- Added a newsletter section
- Commit history table (blame) is now sorted by commit date, newest first
- We now track every time the hover opens
- Added right click to get blame
- Moved all scripts to webview footer, making it faster to load
- Extended instructions on how to use
- Added Daily Summary section
- Added "Get docs" function

## [1.3.0]

- Added a hover to activate the extension
- _BETA_ Launched browser version for vscode web (and github.dev)
- Will now _not_ bundle our internal docs
- Added button inside the context box to get the relevant docs for each file

## [1.2.4]

- You may reveal the extension with the `Show watermelon` command
- Now, the "see more" button for code blocks sits _outside_ the code block
- Improved activity bar text, click to show on startup, click to get PRs on selection
- Will now display an error when the origin of the repo isn't GitHub
- Will now show session on footer
- Will now show extension version on footer
- Will now show logged in user in header
- Added internal commands for selecting text

## [1.2.3]

- Promoted "View PRs" from Beta to stable
- "Git blame" now referred to as "Commit History" for clarity
- Now you can click on the commit id to view on github on the blame table
- Added right click to get blame
- Changed "Start Watermelon" command with "Get Pull Requests with Watermelon"
- Instructions will now show up in every screen
- Removed Create Repo Docs feature
- Now works on SSH cloned repos

## [1.2.2]

- New Telemetry
- Activate from the counter on the bottom bar
- Improvements to DX on deploy

## [1.2.1]

- Fixes to DX

## [1.2.0]

- Allow private repo access (requires logging in again)
- Added scope to allow private repos

## [1.1.10]

- Hotfix on octokit

## [1.1.9]

- Hotfix on octokit

## [1.1.8]

- Hotfix on octokit

## [1.1.7]

- Changed analytics to match all buttons

## [1.1.6]

- Fixed docs creation
- Fixed button reuse
- Improved visibility of titles
- Added titles to make clearer the UI
- Removed code explanation
- Added `git blame` table
- Added some documentation with our own product 🍉
- A lot of developer improvements for maintainers (Welcome to contribute!)

## [1.1.5]

- Added imgur as an image source to CSP
- Added Pr Status indicator to titles
- Added Codecov as an image source to CSP
- Moved functions out of the main file to help with size and DX
- Explain code block
- Added "create repo docs" button that replaces "get help from author"

## [1.1.4]

- Added GitHub as an image source to CSP
- Added webflow to image CSP
- Will now log the extension version to the console on startup
- The get help button now shows the top committer name instead of "on Slack"
- Fixed an error where the command would break even when results were fetched
- Fixed some instances of the get help on Slack button not working
- Will select the whole file if no selection is made
- Added CSS to PR header
- Added a wildcard allow to watermelon.tools in CSP
- Allow all of GitHub as a source for images
- Fixed case where empty PR body or empty comment would break the app
- Fixed bug that retrieved PRs from unrelated repositories
- Added Connect-src to CSP
- Added PR author image
- Improved fonts on light themes
- Controlled dark theme colors

## [1.1.3]

- Fixed some instances of the "Get help on Slack" running search
- Added command to the context menu (right click to use)
- Added tooltips to guide the user
- Added brand color when hovering links
- Improved error prompt when running without highlighting lines of code

## [1.1.1]

- Fixed some instances of broken markdown
- Fixed CSP
- Added linking to user tags
- Added linking to issues
- Made commit authors a link to their profile
- Made PR authors a link to their profile
- Dates now are more human readable
- Font color improvements for light themes
- Added text to explain command on error

## [1.1.0]

- Added a timeout of 4 seconds for failed executions
- Added Sentry to track errors
- Various speed improvements
- Added Slack help button

## [1.0.0]

- Fixed loading UI

---

## [0.0.16]

- Improved comments UI
- Added PR description
- Removed bot comments
- Sort PRs per amount of comments
- Added syntax highlighting to long form code
- Removed "watermelon.signin" command declaration as it is not needed
- Clamp long code blocks, allow declamp with button

## [0.0.14]

- Added search button
- Improvements to README

## [0.0.11]

- PR titles are now links to the PR on GitHub
- Changed Markdown parser to MarkedJS
- General bugfixes

## [0.0.9]

- Added analytics to invocation through `watermelon.start`
- Will now stop users abusing the app

## [0.0.7]

- Urgent fix: the sidebar never loaded

## [0.0.5]

- Now the user has to login, which allows viewing private repos
- Removed local terminal dependency, uses only VSCode API
- Shows an error panel when there are no results
- _BETA_ Adds sidebar panel
- Visual improvements
- Added helper text to explain usage
- Now fetches PR titles (instead of showing "summary")
- Several other improvements
-

## [0.0.4]

- Basic GitHub integration works for public GitHub repositories
- We now support UNIX and Windows

## [0.0.3]

- Modified README to explain better

## [0.0.2]

- Added logo

## [0.0.1]

- Initial release
