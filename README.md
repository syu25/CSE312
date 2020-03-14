# CSE312 website
Social Media Website. Current plans still TBD

## End Goal
Users should be able to create an account 
Users should be able to share multimedia between users
Users should be able to vote and comment on other user's content
Users should be abel to friend or follow another user
Users shouls be able to communicate to another user

## How to run 

In your terminal, cd into the project directory. You should be able to run “docker build -t <imagename> . ” and it should build your image successfully

Then run “docker container run --publish <localport>:8000 --detach <imagename>” 
Now in your browser you should be able to type in the url bar “localhost:<localport>” and the app should load.

