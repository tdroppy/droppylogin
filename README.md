# droppylogin
As stated in the "about" section for this repository, this is a project I am building to learn express, more specifically:

===============================================================================================

Express-sessions

Passport (to be implemented)

More Express

Bcrypt

===============================================================================================

As of right now, to install and run this on your machine you will need to have javascript set up, cmd/terminal, and a web
browser.

===============================================================================================

Step 1: Clone/download the repository and put the folder wherever

Step 2: cd into folder specifically called "droppylogin"

Step 3: (installing dependancies) with npm, please execute the following commands

  -npm i cookie-parser dotenv ejs express express-sessions
  
  -(if you want nodemon) npm i --save-dev nodemon
  
  -to run using nodemon type 'npm run devStart' (i wouldnt recommend this in some cases as registering a user writes to db.json
     making nodemon to restart the server, this CURRENTLY removes all cookies as sessions is currently using memory
     
Step 4: run 'node server.js' or 'npm run devStart' (refer to above message)

Step 5: go to localhost:8080 in your browser

===============================================================================================

Current ideas in mind:

Style and add functionality to homepage (after login/register)

Implement Passport and Bcrypt for a more secure/functional login system

Implemment MongoDB as to store sessions information on something other than memory

Fix my odd CSS code (CSS is my arch nemesis)

Optimize/clean/fix code
