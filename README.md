# solid-node

## Start Application
```
// install dependencies
yarn

// if you don't have mongodb installed, type the next command to install with docker:
docker run --name mongodb -p 27017:27017 -d -t mongo

// start mongo
docker start mongodb
```
## Clear Jest Cache
```js
yarn jest --clearCache
```

## Update project dependencies

```js
yarn add -D npm-check
```

### Then, run:

```js
yarn npm-check -s -u
```

### Select the dependendies and update
