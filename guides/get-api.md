
# How to make a simple API equipped with GET endpoints (NodeJS & Express) 

Hello! This guide is a way to learn how to create your own simple API to make GET requests to.

Warning: This is by no means the way to learn how to make a GOOD API. This is just a way to learn how to make a GET endpoint API. There will be other guides about other methods soon.


## Installation

To start making your API, create a new folder, and enter it by running the below command:

```bash
  mkdir get-api && cd get-api
```
Then, create a new npm project by running the command:

```bash
npm init -y
```

If you want to edit the details, you can do so in the newly created `package.json`

To install the needed packages to start creating the API, run the below command:

```bash
npm install express
```

This will install all needed packages to start creating your new GET api!

To test/run your code, run in the main directory `node .` if your main files name is `index.js`
## 1. Creating the webserver

This step is crucial, because to use the API, you want to be able to actually connect to it.
Start by creating a new file, which you can call whatever you want, but I will be naming it `index.js`

Start by requiring all needed packages, and initiating a new app

```javascript
const express = require('express');
const app = express();

app.use(bodyParser.json());

app.listen('3000', function() {
    console.log(`Server is listening on port 3000...`);
});
```

When you run this, express will create a new webserver which you can visit at `localhost:3000`. 

There wont be much there, because we still havent started working on it, but soon we will be able to visit a few endpoints, and see our API come to life!
## 2. Adding a new endpoint

Now we can continue into the actually fun things, like adding endpoints. 
Here we will show how to create a random number generator, but you can actually do
alot more if you want to. 

The first step is to add an endpoint to your index code, and you can do so by adding above the `app.listen`
this piece of code:

```js
app.get('/randomnumber', function(req, res) {
    res.send('Pretend this is a random number')
})
```

Now when you go to your webapp, in this case `localhost:3000/randomnumber`, on your browser you will be greeted with some text.
If I have ever learnt anything in maths class, the text is not a number.
If we want to add an actual random number, we need to add some code into it so that we can
generate a number.

For now I will add a hard cap of 100 to the number that can be generated, but you can go haywire!
To add the generator functionality of the endpoint, add this code above the line that contains `res.send`:
```js
const randomnum = Math.floor((Math.random() * 100) + 1);
 ```
Now we have a random number variable, that we can send over to the user! In the line `res.send`, change the content in the brackets to look like this:
```js
res.send(`Here is a random number: ${randomnum}`);
```
Now instead of sending text, it will actually send a randomly generated number!

But, here comes an issue. If we were to try and access this api with some code, it will return
`Here is a random number: 73`
and thats all. This isnt that good because it would be hard to try decifer this with code. So we will transform the output into JSON format!

Start by creating a new JSON with the below code:
```js
const response = {
    "randomnumber": randomnum
}
```

Add this between the number generator function and the `res.send` line, then edit the `res.send` line to look like this:
```js
res.send(response)
```

Now if we were to visit the webapp on our browser, it will return in a json format, which is easy to read and use with code! 

To create more endpoints, you can easily add them by using the same code near the top of this step.
## End

Now you know how to create a simple api with GET endpoints! 

[Sourcecode](https://gist.github.com/somerandomcloud/0906ed906f2a8471dc1d4d378b158b5c)

If you have any feedback, please reach out to me on Discord via my tag `ICodeInAssembly#7117`

If you want to contribute and add some things that I have maybe missed, you can create a pull request.

To donate, message`ICodeInAssembly#7117` on Discord
## Author

- [@somerandomcloud](https://www.github.com/somerandomcloud)

  