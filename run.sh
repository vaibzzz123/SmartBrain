[ "$NODE_ENV" == "development" ] && yarn start || (yarn build && yarn global add serve && serve -s build)