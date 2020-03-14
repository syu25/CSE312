# CSE312 website

## How to run 

In your terminal, cd into the project directory. You should be able to run “docker build -t <imagename> . ” and it should build your image successfully

Then run “docker container run --publish <localport>:8000 --detach <imagename>” 
Now in your browser you should be able to type in the url bar “localhost:<localport>” and the app should load.

