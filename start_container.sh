# Runs in interactive shell mode, exposing main port, grabbing env variables from env file,
# and sets up volume mapping so code changes on here will reflect in the container
docker run -it -p 3000:3000 --env-file .env -v $(pwd):/usr/src/app smartbrain