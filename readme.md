# Simple nodejs crud with express/docker

## First time creating you should run:

```bash
npm init -y

npm install express

npm install -D nodemon

npm install mongoose "mongo ORM for database"

npm install require-dir "ajuda path de diretorios"

npm install mongoose-paginate "mongoose pagination"

npm install cors "cross-domina access"

touch .gitignore "create new .gitignore file, add node_modules folder inside of it"
```

add "dev": "nodemon index.js" in package.json scripts.

```bash
install docker and run the following to pull mongodb image

docker pull mongo

docker run --name mongodb -p 27017:27017 -d mongo

docker ps "return running images"
```





## Clone already configure project from GIT

Use the package manager NPM.

```bash
npm install
```

## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)