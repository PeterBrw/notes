// 025. Creating a Node Server

// Core Modules

http // helping us to launch a server, send request

https // lauunch a SSL server

fs // file system 

path // helps us with constucting paths, paths to files on a file system that work on any operating system

os // operating system relevant information


const http = require('http'); // it will look for a global module not for a local file(./something it will look for a local file or /something also it will look for a local file),with require we fetch the data from the 'http' module


const http = require('http'); // import 'http' module

const server = http.createServer((req, res) => { // here we are creating a server that send 'request' (res) and send back 'response'(res)
  console.log(req);
});

server.listen(3000);  // on port 3000 the server starts o process that node.js will listen for incoming requests




// 026. The Node Lifecycle Event Loop

// Event Loop(in some way is that thing that listen for requests) - Keeps on running as long as there are event listeners registerd

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  process.exit(); // this exit the 'event loop' or the server, but usually we will not do this, this exit in the hard way the 'event loop'
});

server.listen(3000);




// 028. Understanding Requests

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers); // it will log the req.url, the req.method and the req.headers, in this way we can read data from the request
  // process.exit();
});

server.listen(3000); 




// 029. Sending Responses


const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit();
  res.setHeader('Content-Type', 'text/html');  // here we set the header in this way the browser will know what kind of response we have
  res.write('<html>') 
  res.write('<head><title>First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
  res.write('</html>')
  res.end(); // here we end our response, after this we cannot 'write' anything for the response 
});

server.listen(3000);




// 030. Request Response Headers

`https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers`  // READ IT 




// 031. Routing Requests

const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url; // here we are assign the value of 'url' to url constant
  if(url === '/') { // if somebody it will enter to main page, it will get a response with what is below
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body><h1><form action="/message" method="POST"><input type="text"  name="message"><button type="submit">Send</button></form></h1></body>') // the 'action=/message' it will take us to '/message' when we press submit button
    res.write('</html>')
    return res.end(); // here we return res.end(); cause we don't want the code below to be executed for the '/' mainpage
  }
  res.setHeader('Content-Type', 'text/html'); // on any other url, we will response with what is below
  res.write('<html>')
  res.write('<head><title>First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
  res.write('</html>')
  res.end();
});

server.listen(3000);




// 032. Redirect Requests

const http = require('http');
const fs = require('fs'); // fetching the fs module for file system

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if(url === '/') {
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body><h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></h1></body>')
    res.write('</html>')
    return res.end();
  }
  if(url === '/message' && method === 'POST') { // if path is /message and method is POST it will do what is below 
    fs.writeFileSync('message.txt', 'DUMMY'); // will create a 'message.txt' with 'DUMMY' text in it
    res.statusCode = 302; 
    res.setHeader('Location', '/'); // it will set the header to the 'Location' where he wants you to be redirected '/' (in this case)
    return res.end(); // here we return res.end(); cause we don't want the code below to be executed 
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
  res.write('</html>')
  res.end();
});

server.listen(3000);




// 033. Parsing Request Bodies

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if(url === '/') {
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body><h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></h1></body>')
    res.write('</html>')
    return res.end();
  } 
  if(url === '/message' && method === 'POST') { // for this path 'message' and the method 'POST'
    const body = [];
    req.on('data', (chunk) => { // when a request in 'on' we will 'chunk' the data
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => { // after the request in finish
      const parsedBody = Buffer.concat(body).toString(); // after the data came we will make a new buffer contatenate that body to it, and after that transform it into string
      const message = parsedBody.split('=')[1]; // we will split it after '='
      fs.writeFileSync('message.txt', message); // and we will write the parset body to 'message.txt
    });
    res.statusCode = 302; // 302 means Redirection 
    res.setHeader('Location', '/'); // it will set the header to the 'Location' where he wants you to be redirected '/' (in this case)
    return res.end(); // here we return res.end(); cause we don't want the code below to be executed 
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
  res.write('</html>')
  res.end();
});

server.listen(3000);




// 034. Understanding Event Driven Code Execution

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if(url === '/') {
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body><h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></h1></body>')
    res.write('</html>')
    return res.end();
  }
  if(url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
      
    });
    return req.on('end', () => {  // to exacute the code below, from this block, not that one from the block below this block we 'return' this function
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
      res.statusCode = 302;  // and to be better we moved these 3 lines of code here in this block cause is the right way to do it(cause this is async code, so this code will be execute in some way in the 'future', not right away)
      res.setHeader('Location', '/');
      return res.end()  
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
  res.write('</html>')
  res.end();
});

server.listen(3000);




// 035. Blocking and Non-Blocking Code


const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if(url === '/') {
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body><h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></h1></body>')
    res.write('</html>')
    return res.end();
  }
  if(url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
      
    });
    return req.on('end', () => { // 'end' it's an event listener which tell us when the data finish to arrive, and this anonymous (arrow) function it will execute just after the data finish to came or all data arrive which means it will execute what it's inside the function
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => { // if this was outside this function the message will not be written cause this lines will be executed before all data arrive, cause of that we write here and this lines will be executed after all the data will arrive
        res.statusCode = 302; 
        res.setHeader('Location', '/');
        return res.end() 
      }); 
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
  res.write('</html>')
  res.end();
});

server.listen(3000);




// 036. Node.js - Looking Behind the Scenes

// Look up for EVENT LOOP

// LOOK up for WORKER POOL0

// Single thread == single process




// 037. Using the Node Module System

// !!! We CANNOT manipulate modules externally !!!, we just can READ from outside the modules


module.exports = requestHandler; // single export in one file

module.exports = {
  handler: requestHandler,   // multiple export in one file
  someText: 'Some hard coded text'
}

module.exports.handler = requestHandler;
module.exports.someText = 'Some hard coded text'; // these two lines are exactly as the example above

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';


// app.js 

const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000);


// routes.js

const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if(url === '/') {
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body><h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></h1></body>')
    res.write('</html>')
    return res.end();
  }
  if(url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
      
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end() 
      }); 
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
  res.write('</html>')
  res.end();
}; 


exports = requestHandler;




// 038. Wrap up




 // 041. Understanding NPM Scripts

 // This is the package.json file which was created when we did 'npm init' with our project

 {
  "name": "nodejs",
  "version": "1.0.0",
  "description": "Complete Node.js Guide",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js", // just for 'start' we can use 'npm start' and it will start our application
    "start-server": "node app.js" // even if it should do the same thing for this command we should use 'npm run star-server'
  },
  "author": "",
  "license": "ISC"
}




// 042. Installing 3rd Party Packages

npm init // it will initialize our application so we will can bring node modules and personalize some commands as we can see above in the last lecture

npm install <module_name> --save // this will install the module as a production dependency and will upload the package.json on "dependencies" about the module

npm install <module_name> --save-dev // it will install that module in a developement(during development way, which means the module will be install just where the application it is in computer, and it will upload the package.json on 'devDependencies' about that module

npm install -g <module_name> // it will install that module globally on our machine(the npm official page recomand this )

npm install // it will install all the dependencies from 'package.json'





// 044. Using Nodemon for Autorestarts

{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js",
    "start-server": "node app.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^1.18.7" // 'nodemon' it's a utility tool that comes through this packege
  }
}

// if we use in the terminal
nodemon app.js // it will not work because it's looking for 'nodemon' globally, but if we are using
npm start //(check package.json above) it will look for 'nodemon' locally

// The good thing about local dependencies is that you can share projects without the node_modules folder (where they are stored) and you can run npm install in a project to then re-create that node_modules folder. This allows you to share only your source code, hence reducing the size of the shared project vastly.




// 046. Understanding different Error Types

// Types of Errors

// Syntax Errors - something that it's write wrong


// Runtime Errors


// Logical Errors




// 047. Finding Fixing Syntax Errors




// 048. Dealing with Runtime Errors




// 049. Logical Errors

// All the time when you wanna have something to debug, just came to see how he did!




// 050. Using the Debugger

// All the time when you wanna have something to debug, just came to see how he did!




// 051. Restarting the Debugger Automatically After Editing

// All the time when you wanna have something to debug, just came to see how he did!

// What are you doing in the Debug Console will not affect the actual code.

// launch.json

{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [

    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/NodeJS/app.js", // where program starts
      "restart": true, // if can be restarted
      "runtimeExecutable": "nodemon", // nodemon in case we want to change something and the application will restart by itself
      "console":"integratedTerminal" // it will use terminal for output
    }
  ]
}




// 052. Debugging Node.js in Visual Studio Code

// https://code.visualstudio.com/docs/nodejs/nodejs-debugging




// 053. Changing Variables in the Debug Console




// 057. What is Express.js

// Express.js is a framework(which is doing the heavy lifting for us)
// https://stackoverflow.com/questions/12616153/what-is-express-js




// 058 Installing Express.js

// npm install --save express  (it has --save flag cause this is a production tool. should be install on all machine that runs this code)


const http = require('http');

const express = require('express'); // it exports a function

const app = express();  // we executed as a function and this will initialize a new object which will store and manage a lot of things for us behind the scenes

const server = http.createServer(app); // 'app' here can be a valid request to create aserver

server.listen(3000);




// 059 Adding Middleware

const http = require('http');

const express = require('express'); 

const app = express();  

app.use((req, res, next) => {  // here is a middleware
  console.log('In the middleware');
  next(); // Allows the request to continue to the next middleware in line(in our case the middleware next below)
});

app.use((req, res, next) => {
  console.log('In another middleware');
});

const server = http.createServer(app); 

server.listen(3000);

// Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

// Middleware functions can perform the following tasks:

// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.

// If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.




// 060. How Middleware Works

const http = require('http');

const express = require('express'); 

const app = express();  

app.use((req, res, next) => {
  console.log('In the middleware');
  next();

app.use((req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from Express!</h1>'); // res.'send' allows us to send a response. here it will send 'Hello from Express' as HTML, it will have a default Header Content-Type: text/html, but we can overwrite that if we want
}); 

const server = http.createServer(app); 

server.listen(3000);




// 061. Express.js - Looking Behind the Scenes

// const http = require('http'); // we also don't need this line

const express = require('express'); 

const app = express();  

app.use((req, res, next) => {
  console.log('In the middleware');
  next(); 
});

app.use((req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from Express!</h1>'); 
}); 

app.listen(3000); // we use app.listen() (which creates the server for us and listen to port '3000' in our case) instead of the lines below
// const server = http.createServer(app); 

// server.listen(3000);


// https://github.com/expressjs/express




// 062. Handling Different Routes

// app.use(); app.use([path,] callback [, callback...])

// https://expressjs.com/en/4x/api.html#app.use

// the middlewares are executed from the top of the bottom

const express = require('express'); 

const app = express();  

app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next(); // this midlleware will be executed for all routes
}); 

app.use('/add-product', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>The "Add Product" Page</h1>');  // if we send a response we cannot send(); to the next middleware cause we 'cannot set headers after they are sent to the client'
}); 

app.use('/', (req, res, next) => { // we put '/'(slash) route here cause all the routes actually starts with '/' which means it will return this middleware, because of that we put it at the bottom of the middlewares
  console.log('In another middleware');
  res.send('<h1>Hello from Express!</h1>'); 
}); 

app.listen(3000);

// we put '/'(slash) route here cause all the routes actually starts with '/' which means it will return this middleware, because of that we put it at the bottom of the middlewares




// 063. Parsing Incoming Requests

// npm install --save body-parser    installing body-parser for production

const express = require('express');
const bodyParser = require('body-parser'); // require body-parser

const app = express();  

app.use(bodyParser.urlencoded({extended: false})); // this will parse body send through a form(it will not parse files or JSON and so on), it should be at the beginning of the middlewares, it call a next(); in the end, but we cannot see it, but before that it parse the body to the middleware it's useful(I guess, in our situation for '/product' middleware)

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');  
}); 

app.use('/product', (req, res, next) => {  // this is the middleware in case that we parsing something throug form it will be executed the code below
  console.log(req.body); // here we console.log the request body which was parsed or at the first middleware
  res.redirect('/');
});
// the code above will be executed even for GET request

app.use('/', (req, res, next) => { 
  res.send('<h1>Hello from Express!</h1>'); 
}); 

app.listen(3000);






// 064. Limiting MIddleware Execution to POST Requests

const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();  

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');  
}); 

app.post('/product', (req, res, next) => { // cause we add 'app.post' this middleware will be executed just for 'POST' method
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => { 
  res.send('<h1>Hello from Express!</h1>'); 
}); 

app.listen(3000);




// 065. Using Express Router

// app.js

const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();  

const adminRoutes = require('./routes/admin.js'); // here we are require 'admin.js'
const shopRoutes = require('./routes/shop.js'); // here we are require 'shop.js'

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes); // here we executing the (middleware(s)) from adminRoutes
app.use(shopRoutes); // here we executing the (middleware(s)) from shopRoutes, here doesn't matter the order of the middlewares because they will be executed just for specific methods(see the middlewares that are inside of these from '.routes/..')

app.listen(3000);


// admin.js

const express = require('express');

const router = express.Router(); // here we are using 'express.Router' which help us to route our app

router.get('/add-product', (req, res, next) => { // this middleware will work just for the 'GET' methods for '/add-product' path, and we are using router(express.Router)
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');  
}); 

router.post('/product', (req, res, next) => { // this middleware will work just for the 'POST' methods for '/product' path, and we are using router(express.Router)
  console.log(req.body);
  res.redirect('/');
});


module.exports = router; // here we are exporting the admin 'router'


// shop.js

const express = require('express');
 
const router = express.Router(); // here we are using 'express.Router' which help us to route our app

router.get('/', (req, res, next) => { // this middleware will work just for the 'GET' methods for '/' path
  res.send('<h1>Hello from Express!</h1>'); 
}); 

module.exports = router; // here we are exporting the shop 'router'

// if we are accessing a route that isn't define it will tell us that it 'Cannot GET /ourpath'




// 066. Adding a 404 Error Page

const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();  

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => { // this middleware will work for all path except the paths define above, and will all methods
  res.status(404).send('<h1>Page not found</h1>'); // here '404' statusCode will be set and it will return '<h1>Page not found</h1>', we set this middleware at the bottom of the middlewares cause the executin is from the top to bottom
});

app.listen(3000);




// 067. Filtering Paths

// app.js

const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();  

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes); // 'adminRoutes' middlewares will be executed just for paths which began with '/admin' and all the paths from 'adminRoutes' will began with '/admin' even in there they do not began with '/admin'
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);


// admin.js

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => { // this actually began with '/admin/add-product'
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    );  
}); 

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => { // this actually began with '/admin/add-product'
res.send(
  console.log(req.body);
  res.redirect('/');
});


module.exports = router;

// /admin/add-product => GET is different than /admin/add-product => POST, are two different paths




// 068. Creating HTML Pages

// shop.html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Add Product</title>
// </head>
// <body>
//   <header>
//     <nav>
//       <ul>
//         <li><a href="/">Shop</a></li>
//         <li><a href="/add-product">Add Product</a></li>
//       </ul>
//     </nav>
//   </header>

//   <main>
//     <h1>My Products</h1>
//     <p>List of all the products...</p>
//   </main>
// </body>
// </html>


// add-product.js

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Add Product</title>
// </head>
// <body>
//   <header>
//     <nav>
//       <ul>
//         <li><a href="/">Shop</a></li>
//         <li><a href="/add-product">Add Product</a></li>
//       </ul>
//     </nav>
//   </header>

//   <main>
//     <form action="/add-product" method="POST">
//       <input type="text" name="titile">
//       <button type="submit">Add Product</button>
//     </form>
//   </main>
// </body>
// </html>

// shop.html and add-product.html are in folder /views of the project, in the main directory, /views(it will be the View from MVC(Model View Controller))

// admin.js and shop.js are in folder /routes of the project, in the main directory



// 069. Serving HTML Pages

// admin.js

const path = require('path'); // we require 'path' which is a core module an will makes paths for us for every OS

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); // here we are serving HTML with sendFile(), __dirname is the path to our current file(in this case 'admin.js') created with 'path', (it's an absolute path) which will 'join' '../', 'views', 'add-product.html' and the path created by 'path' it will be something like this '/home/petru/Desktop/Node/NodeJS/views/product.html'
}); 
}); 

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;


// shop.js

const path = require('path'); // we require 'path' which is a core module an will makes paths for us for every OS

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => { 
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); // here we are serving HTML with sendFile(), __dirname is the path to our current file(in this case 'shop.js') created with 'path', (it's an absolute path) which will 'join' '../', 'views', 'shop.html' and the path created by 'path' it will be something like this '/home/petru/Desktop/Node/NodeJS/views/shop.html'
}); 

module.exports = router;


// 070. Returning a 404 Page

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();  

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); // this will serve 404 file from 'views/404.html'
});

app.listen(3000);




// 071. Using a Helper Function for Navigation

// path.js

const path = require('path');
 
module.exports = path.dirname(process.mainModule.filename); // these create an absolute path to the 'dirname'(this is just a path)  which is in the same root as the file which  starts the application, in this case 'app.js'


// admin.js

const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js') // require the '../util/path.js'

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html')); // use the rootDir from '/util/path.js'
}); 

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;


// shop.js

const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js') // require the '../util/path.js'
s
const router = express.Router();

router.get('/', (req, res, next) => { 
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));  // use the rootDir from '/util/path.js'
}); 

module.exports = router;




// 072. Styling our Pages




// 073. Serving Files Statically

// We need to serve file statically not handle by express.Router or other middleware

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();  

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))); // here with express.static are serving static files which are in the 'public' folder, and the our HTML pages can take the CSS from there, it will serve to browser and it will behave like it's on the same folder

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);


// <link rel="stylesheet" href="/css/main.css"> we can see here how it takes the CSS from the static folder which was served in the browser




// 077. Sharing Data Across Requests

// admin.js

const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js')

const router = express.Router();

const products = []; // a new array

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}); 

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title}); // here we are pushing to our array the 'req.body.title'
  res.redirect('/');
});

exports.routes = router;
exports.products = products;


// shop.js

const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js')
const adminData = require('./admin'); // we are require all the exports from './admin' even 'products'

const router = express.Router();

router.get('/', (req, res, next) => { 
  console.log('shop.js', adminData.products); // here we are console.log 'products' form adminData(./admin) 
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}); 

module.exports = router;


// these kind of sharing data across request and all users isn't good cause everytime we access the '/' path it will console.log our 'products', even we refresh the page it will dislay again, how many time we access that path('/'), that many times will console.log it(2 access it will log it twice)

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();  

const adminData = require('./routes/admin.js'); // we change the adminRoute to adminData or something like that
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);




// 078. Templating Engines - An Overview

// the HTML will be generated dinamyc by the back-end(template-engine) where you can insert your data into templates, and the user will get the final HTML with everything on it

// EJS 

// Pug(Jade) for example will compile pug templates to HTML in the end
// Indentation matters in PUG

// Handlebars




// 079. Installing Implementing Pug

npm install --save ejs express-handlebars // here we installed in a production way ejs, pug and express-handlerbars

// app.set() allows us to set any value globally on our express application and these can een be keys and expression that express doesn't understand and express it will ignore them, but we can read them with 'app.get()', in this way we can share data across our application     //" 'view engine' allows us to tell express for every dinamyc template that we are trying to render, use engine that we are registering here   // 'views' allows us to tell express where to find these dynamic views" 
 

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();  

app.set('view engine', 'pug'); // we are setting that the 'view engine' to use 'pug' /// telling express to use 'pug' as template engine to expresss
app.set('views', 'views'); // here we are setting the 'views' to look in the folder 'views' for our views or for our templates /// telling express where he can find our templates 

const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);


// shop.js

const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js')
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => { 
  // console.log('shop.js', adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  // instead to serve HTML file as above, it will render pug template as below
  res.render('shop'); // this is provided by express which will use the default template engine(in our case pug), it will render shop(shop.pug) from views, knows where is, it cause went we set the pug as the 'view engine' we set where to look for views: app.set('view engine', 'pug'); app.set('views', 'views'); these are from app.js
  
}); 

module.exports = router;




// 080. Output Dynamic Content

each product in prods 

// shop.js

const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js')
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {prods: products, docTitle: 'Shop'}); // {prods: products} we are injecting our 'products' from './admin' as 'prods' to 'shop.pug' and this way we can work with it, docTitle it will have value 'Shop' in the 'shop.pug', in this way we can pass any value we vant and as many values we want(I guess)
}); 

module.exports = router;


// shop.pug

<!DOCTYPE html>
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        meta(http-equiv="X-UA-Compatible", content="ie=edge")
        title #{docTitle} // in this way we are reading the data which was injected in our pug
        link(rel="stylesheet", href="/css/main.css")
        link(rel="stylesheet", href="/css/product.css")
    body
        header.main-header
            nav.main-header__nav
                ul.main-header__item-list
                    li.main-header__item
                        a.active(href="/") Shop
                    li.main-header__item
                        a(href="/admin/add-product") Add Product
        main
          if prods.length > 0 // here we are checking if our array 'prods' has any values, if has we are rendering code below, if not what we hane on 'else'
            .grid
              each product in prods // we are looking for each product in the 'prods' array, and it will execute what it's below for each product
                article.card.product-item
                  header.card__header 
                    h1.product__title #{product.title} // here we are reading the data which was injected in our pug from prods.title array
                  div.card__image
                    img(src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8NDQ0NDQ0NDQ0NDQ0NDw8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8QFSsdFR0uLSsrKy0rKy0tKy0tKysrMCstLS0rLS0rLSstKy0rLS0rLTctLS0tLTctKy0tLTc3K//AABEIALsBDQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBQYHBAj/xABJEAACAQIBBA0JBQYEBwAAAAAAAQIDEQQFEiExBgcTQVFSU3GBkZLB0SIyVGGCk6Gx0hQVFnLCF0SDorLhYmOj8CMkNEJDc8P/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACkRAQEAAgEDAwMDBQAAAAAAAAABAhESAzFRMkFhInGxIYHBIzNCkfD/2gAMAwEAAhEDEQA/AOjoZCoY0CggQQCG64UVx06bD2OXNrRk1woOcuFdYqQbDnU0bOXCHOXCLYlhzq6PnLhJnLhQtiWHOmj39YSpoDXBo5hz+DS4hRukl6+caNdPQ9D+BqZyppaQjZU663tPNqLbIi0hTurfAviS74fkZ5xdLiFOnhfWSz4X1sc/hdLgFNvW+tgs+F9bHP4NLiFGnhfWC74WOaaXgKc+XD8EDdJcPwHOHFcKVKvZpSsk9F9WktuamUpZoGBhYDSFYGMwAKhkKhkAUCcrJ9XXoNO2zst4jB4ajLCVdxnVxG5ykowlLMzJPRnJ20pFmw+WIlRoVcViquJqV4wrPPsowTWcoqKS638DnlnpudP6eW23Q1dY6FhqHRiJUCKQ1pNmuG4gUXRs9yXAiWGjYisIGTRskkVSiWyEJYsquKk5NOTcVGNo6LJ3enh4OoujEEV5T/LH5ssMYtVEgihR00xswRQ2GjY2A0QA0bBoDIwDRsGhWhgMmleXFrRfgkmeZ4iVKTa0xb0x3uf1M9uJXksx+LV9Pqv8Dnf0u41OzC4rZ7CjXhQr4DF0t0qRpxqt0pU3nOyaadn8zcTme2HG2EjVWujiKdRc9pLvOk0J50VJapJNczR26eVu9r1MZJLIdijMDOjkrQwEEDmu3LVVsDSbspVK83v2SUFf+Y2/INFQp4eC0qFGnG+q9qdjRNt95+LwdFNJ7hNpvUnOpZN9k6Nk+NmlxY6OhWOGfd6L+mGP7/llIjAQTUcKBCERpBCkAYA2AEAEAwisBJCoZiolDR85/lXzZYJHzn+VfNjmMWqBAkubZQKAQoYDIQBWAZisgAGEjJViqqtD5mY+utC5kZKSMfUXkrp+ZitRqOzyjnZPrrfi6UuhVI3+Fzb9jmI3XB4Wpx8LQl0umjX9lNPOwWLW/wDZ6slzxi33GQ2v6udkzBvi0czsSlHuL0+9dM/7c+7YWAIDu4EQRUEDk+z+DrZbw9JabUsLB6baN0nJ/BnTcD5z5u9HLsuPddkmbrUK2ES9inCfzudTyetfs95wrv1O2P2j3hAE1HECEIaQQoCGKgohEQACsYVhSMCCxUQWR85/lXzYzFjr9lfMZmMWqFwEIbZEZChRUFBAghSsVjMSRBAEISrCs8VRaH6pNHtZ5Kq87nv1mK1GJyjSz6dWHHp1I9cWjxbVVXOyZTW/CrXjzXm5fqMrNaTA7VMs2jjKHI4+quhwiv0sYep079O/efy3lgCA7uCpBAggciwEt12RVprVDFYqL/h05w+cTq+T1ofOjlGwWq6mVcVNebOWLqvfemto/qOs4BeT0v5I4+P+93frerXjX4j1BAE04IQBDQKHEQwQUQBAIxWEDAVioMhUSqujr9nvIwR1+z3hZjFaBCEOiChhUS4QyCBMICsSQ7EkFKmERDGasBnlrLTLoZ6meatrf5GZqvDPWa3tfPMxuV6O8sRSqL2pVb/pNkqa/wDfCazsXeZlvKFPlsPSrJflzF+tkx9UdMfTlPj+Y38UIDs4qha9TNhKW9CMpdSuMjG7Ja+54HGVFrhhMQ1z7m7Ak25rtU0/+LXnraoQjd6/Kkn+k63gfMXT8zmW1fRShiJK+c3Si+LmrOtb4/A6dhPMXN82cvDv1r9eT0EAE04IQBDQZBAiBBIQjAFwNkYLgLICJJgQVdHX7PeRsEdfs95GYxWoEAbm2UCC5EASEBcAiSDcWQUgwgyJRGUVta9aaL2U1v8At5zFaY6r4mr4V5myCD3q+AnHnabf/wAzaK+vpNUyo8zLOS6nH3anz+RJW/nJ7x06fvPiuiChQDu4qka/s/q5uTMW72zqcafbnGPeZ9Gp7aFS2TpRvbdMRh489pZ/6TOXat9Obzx+7EbWdO2GrS42Jt0KEfFnRsP5q/LH5Gi7AKThgabatn1KlTnV7J9SN8p6uhIwud+qnCAhXMQEIaQyIAIBRGREYCsW4WKwBMWLCxUFXx19DIwQ19DI2YxWiQBDbIjICIASMBGwALIIrAQZCMZEqiU19S9TTLSqv5rM1pj8VrfOahsv8jE5KrcTHU4X4FKcL/CJuGL1s07bD0YWlW36GKpVV0X/ALGK69L1R0ZEFpyuk956Qs9DgqRo+2zUthcPDjYnO6I05fUbujnG25V8rB0/8OJm+uml3mM+1dehP6kZzYbC2Cwy4abfQ5NpfE3KJq+xqnm4bCQetYegnzuMb/M2dEvesW7MEVBKyIRQlDEAghBIAgEZXIsYkgqtgRJATILoPT0MIsXpXMwmcVpiACbQUQhAggZCAARjNiNhSMZCMZGaCV1dT5h7iy3yNMfid71xXyNV2eUs/J9ZcV05fzpG04jVHmt8TBbJIZ2CxMdf/Bm+pX7jFbwuspWy5Fr7phsPU5TD0Z9cE+89jMHsJrZ+TsG+DD04dhZv6TOHeOeU1bFCZy/bRqqWNoU3e0MPBu2u06s729doHTzk+z21TKsYa9GFo259P6yZfrqOvR9VviV0bJsLbnFaoxgkuBJf2MymYvBef/vgZk0zEc6dBEQ6KyZEBciZQ6IKmNcAkAQCMSQzEYCSEHkIRVkXpXMxyqL0rmY6ZIU4UKE0hgi3CBGxWwsVgBsRjMVgKyEIRUuBsDA2RXhxHm8zkviYvHwzqNWHGp1I9cWZXEapfnfyMfLfM1Y821lVzsm0VxKmIjp/90pL4SRtTNK2rZWw2IpcjjasFzZkP7m6XOuPaHU9dee5yrKEFVy7PTqxdF6P8uEF+k6pc5Pkas55ZqS4+Jxun/CpSa+CM5+2m+j/AJX4dQwPndfyMhcx2B1vmfcZC5I506YyZUmMmVD3DcS4bhD3DcRMNwHuG4lyXAZsVsDYjYVJFbZJSK2yC2L0rmfcWJlEHpXMyxSJFXJkuVpjJmkPcNxLkuA1wNi3BcAtgYGwNgFisjYtwCxWRsVsivNiVol0MxknpMniN/8ALfqZiqj0mVjFbX0s3EZTo8GKjVt6puf0o3e5oWxOWZlbKEOUpUai9drfWb3c6Y9l6vq/1+HnvvnJthF6mPlVte0K021qUpP+7OnZSr7nQrVOTo1Z9mDfccx2A4mlRdepWq06aUaUFKpOMU7Xb1kzutNdOfTl+zqWDlZNvQkrt7yRdLKFBa69Fc9SC7zn+XdleFzYxo4tSd/LVKeanG2pvUzWK2X4OTaxMkt5Os9Bjd9oxp2ZZSw/pFH3kPEZZSocvS7cTiUst09/E39ub7yqWWqO/Wv0TY3l4NR3L7zocvT7SA8r4Za8RS7RwmWWsPx5PmpvvQv35h+Co/ZSLvI1HdnlzCLXiaXaB+IMH6VR7Rwd7IKO9TqvqXeB7IaXJVeteI+o1HevxBg/S6PaCsvYP0uh20cEWyGnyFTrQfxBD0ep1ofUad8WWMK9WKw7/iw8SyOMpS82rSl+WcX3nAPv6Po9X4BWWov93q9cfEbq8L4fQDfBpKpSOExy/uelRr09emM7PRbgfrPbT2a16fmYup7dWNVdTuTZwrtUJ6V0likciobZtSMGpyozqW8l7lUS9d7WXUip7YWIqa6+bfepblH+pJklXhXZose5w2rsrq1M5KrjpyV72nNpW16FJJ9B5llqbvn0sVU1a1b5ydze04V3l1YrXKK52kJLF0lrq01zzj4nBnliPotbpzPEn3sr2+x1r80PEbOF8O7PH0eXo+8h4ivKFDl6PvIeJwuOV09WEq2/h+JFlqPotX/T8Rs4Xw7n9vo8vS95HxB9uo8tS7cfE4d99xvb7LUvq10/EP36l+7Vf9PxGzhfDt/26jy1Ltx8QPHUeWpduPicSWyBej1eun4jrZHwUK3XT8Rs4Xw7S8dR5al24+Irx9HlqXbj4nGVsoa/8Vbrp+Iy2WS5Kr0un4k2vC+HYJYiE35E4TtGSeZJStwXtzGNqvScyjsxnHTGNaL06VKmn13PVh9n0lZVKMprjOUIyt16SLwy8NlyZLMy5blsDLpalH6Wb9c5LkjL0MVlfBVKcJQajWpTTcZZy3ObVrdJ1dM3h2TqzVn2ePFUI1ac6U75lSE6cknZ5sk0/gzUntc4PlMUvbhq7JuKIbslYmVnatLntaYKWupie1B/pKv2XYLlcT2ofSb0FE1Dlb7tFW1fguVxPah9JFtYYHlMR2ofSb2SxdROV8tFW1lgeUxHah9Iy2tMDx8R2qf0m7hQ1DlfLSltaYHj4jtQ+kZbW2C4+I7UPpN0GQ1DlfLS/wBm2B42I7UPpD+zfBcfEduP0m6EQ1Dll5aZ+zfBcfEduPgH9m2C4+I7cfA3Qg1DlfLS1tbYDfliGt9borP4Fq2t8l8hUfrdapf5m4EGocr5amtrvJVv+k6d1rX/AKiyO1/ktX/5TX/m1mlo3vKNoINJyvlrC2A5NvdYdresqtVL5jrYNk70Z9NWr9RsxGNRd3y1lbB8m+ir3lX6hlsKyav3SPbqeJsbANQ3fLX1sMyd6HT7U/EK2HZO9Co/zPvM+yA3WDWxPJ9rfYqHZuT8KZP9Bw/u0ZtgYN1hvwvk/wBBw3uoh/DGA9BwvuoeBl2AG6xS2OYFfuWF9zT8A/h/BehYX3NPwMoAJtjvuTCb2Ew3uafgBZGwu9hcP7mn4GQIB5sPgKNN50KNKD4YQjF9aR67gAB//9k=", alt="A Book")  
                  div.card__content   
                    h2.product__price $19.99
                    p.product__description A very interesting book about so many even more interesting things!
                  .card__actions
                    button.btn Add to Cart  
          else 
            h1 No products // we are rendering this one if there aren't any elements in the array prods




// 082. Converting HTML Files to Pug            




// 083. Adding a Layout

// we can create a layout, so that we don't have to create the entire page for every our pug file

// that why we created 'main-layout.pug' in views/layout which will be our main layout which will extend to the others 'pug' files

// views/layouts/main-layout.pug

<!DOCTYPE html>
html(lang='en')
  head
    meta(charset='UTF-8')
    meta(name='viewport', content='width=device-width, initial-scale=1.0')
    meta(http-equiv='X-UA-Compatible', content='ie=edge')
    title Page Not Found
    link(rel='stylesheet', href='/css/main.css')
    block styles // here we can add code lines when we will extend this layout
  body
    header.main-header
      nav.main-header__nav
        ul.main-header__item-list
          li.main-header__item
            a(href='/') Shop
          li.main-header__item
            a(href='/admin/add-product') Add Product
    block content
     // here we can add code lines when we will extend this layout

// 404.pug

extends layouts/main-layout.pug // here we are bringing the code from 'layouts/main-layout.pug'

block content
  h1 Page Not Found!


// add-product.pug

extends layouts/main-layout.pug

block styles  // we add some code lines to styles
  link(rel="stylesheet", href="/css/forms.css")
  link(rel="stylesheet", href="/css/product.css")

block content // an here we add some lines of code to block content
  main
    form.product-form(action='/admin/add-product', method='POST')
      .form-control
        label(for='title') Title
        input(type='text', name='title')#title
      button.btn(type='submit') Add Product




// 084. Finishing the Pug Template

// views/layouts/main-layout.pug

<!DOCTYPE html>
html(lang='en')
  head
    meta(charset='UTF-8')
    meta(name='viewport', content='width=device-width, initial-scale=1.0')
    meta(http-equiv='X-UA-Compatible', content='ie=edge')
    title #{pageTitle} // adding dymamiclly pageTitle
    link(rel='stylesheet', href='/css/main.css')
    block styles
  body
    header.main-header
      nav.main-header__nav
        ul.main-header__item-list
          li.main-header__item
            a(href='/', class=(path === '/' ? 'active' : '')) Shop // here we're are doing a ternary if path is '/' than the class will be 'active' if not it will be an empty string, 'path' it will be injected through res.render() as an element in 'shop.js' in this case
          li.main-header__item 
            a(href='/admin/add-product', class=(path === '/admin/add-product' ? 'active' : '')) Add Product // here we're are doing a ternary if path is '/admin/add-product' than the class will be 'active' if not it will be an empty string, 'path' it will be injected through res.render() as an element in 'add-product.js' in this case
    block content


// shop.js

const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js')
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'}); // injecting pageTitle and the path in the shop.pug 
}); 

module.exports = router;


// admin.js

const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js')

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'}); // injecting pageTitle and path to 'add-product.pug'
}); 

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title});
  res.redirect('/');
});

exports.routes = router;
exports.products = products;


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();  

app.set('view engine', 'pug'); 
app.set('views', 'views'); 

const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'}); // injecting pageTitle for '404.pug'
});

app.listen(3000);




// 085. Working with Handlebars

// 'pug' it's a built-in engine(in express I guess), handlebars isn't built-in engine

// you don't have to change the way you enter data in the templates, is the same for every template

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser'); 
const expressHbs = require('express-handlebars'); // here we are requiere 'express-handlebars

const app = express();  

app.engine('hbs', expressHbs()); // here we name the engine as the first argument and as a second argument we tell express from where to take this engine
app.set('view engine', 'hbs'); // we are setting that the 'view engine' to use 'handlebars' /// telling express to use 'handlebars' as template engine to expresss
app.set('views', 'views'); // here we are setting the 'views' to look in the folder 'views' for our views or for our templates /// telling express where he can find our templates 

const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);


// 404.hbs

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>{{ pageTitle }}</title> <!-- in this way we are injecting data to 'handlebars' templates
//     <link rel="stylesheet" href="/css/main.css">
// </head>

// <body>
//     <header class="main-header">
//         <nav class="main-header__nav">
//             <ul class="main-header__item-list">
//                 <li class="main-header__item"><a href="/">Shop</a></li>
//                 <li class="main-header__item"><a href="/admin/add-product">Add Product</a></li>
//             </ul>
//         </nav>
//     </header>
//     <h1>Page Not Found!</h1>
// </body>

// </html>




// 086. Converting our Project to Handlebars

// In handlebars we can't run any logic, we just can output single properties

// shop.js

const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js')
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0}); // we cannot do logic in the 'handlebars' pages, but we can inject the result as here hasProduct: products.length > 0
}); 

module.exports = router;




// shop.hbs

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>{{ pageTitle }}</title>
//     <link rel="stylesheet" href="/css/main.css">
//     <link rel="stylesheet" href="/css/product.css">
// </head>

// <body>
//   <header class="main-header">
//     <nav class="main-header__nav">
//       <ul class="main-header__item-list">
//         <li class="main-header__item"><a class="active" href="/">Shop</a></li>
//         <li class="main-header__item"><a href="/admin/add-product">Add Product</a></li>
//       </ul>
//     </nav>
//   </header>

//   <main>
//     {{#if hasProducts }} // here we are saying if on the result of hasProducts
//       <div class="grid">
//         {{#each prods}} // looping on each element from array 'prods' which was injected
//           <article class="card product-item">
//             <header class="card__header">
//               <h1 class="product__title">{{ this.title }}</h1> // here we accessing the title of the current element with {{ this.title }}
//             </header>
//             <div class="card__image">
//               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8NDQ0NDQ0NDQ0NDQ0NDw8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8QFSsdFR0uLSsrKy0rKy0tKy0tKysrMCstLS0rLS0rLSstKy0rLS0rLTctLS0tLTctKy0tLTc3K//AABEIALsBDQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBQYHBAj/xABJEAACAQIBBA0JBQYEBwAAAAAAAQIDEQQFEiExBgcTQVFSU3GBkZLB0SIyVGGCk6Gx0hQVFnLCF0SDorLhYmOj8CMkNEJDc8P/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACkRAQEAAgEDAwMDBQAAAAAAAAABAhESAzFRMkFhInGxIYHBIzNCkfD/2gAMAwEAAhEDEQA/AOjoZCoY0CggQQCG64UVx06bD2OXNrRk1woOcuFdYqQbDnU0bOXCHOXCLYlhzq6PnLhJnLhQtiWHOmj39YSpoDXBo5hz+DS4hRukl6+caNdPQ9D+BqZyppaQjZU663tPNqLbIi0hTurfAviS74fkZ5xdLiFOnhfWSz4X1sc/hdLgFNvW+tgs+F9bHP4NLiFGnhfWC74WOaaXgKc+XD8EDdJcPwHOHFcKVKvZpSsk9F9WktuamUpZoGBhYDSFYGMwAKhkKhkAUCcrJ9XXoNO2zst4jB4ajLCVdxnVxG5ykowlLMzJPRnJ20pFmw+WIlRoVcViquJqV4wrPPsowTWcoqKS638DnlnpudP6eW23Q1dY6FhqHRiJUCKQ1pNmuG4gUXRs9yXAiWGjYisIGTRskkVSiWyEJYsquKk5NOTcVGNo6LJ3enh4OoujEEV5T/LH5ssMYtVEgihR00xswRQ2GjY2A0QA0bBoDIwDRsGhWhgMmleXFrRfgkmeZ4iVKTa0xb0x3uf1M9uJXksx+LV9Pqv8Dnf0u41OzC4rZ7CjXhQr4DF0t0qRpxqt0pU3nOyaadn8zcTme2HG2EjVWujiKdRc9pLvOk0J50VJapJNczR26eVu9r1MZJLIdijMDOjkrQwEEDmu3LVVsDSbspVK83v2SUFf+Y2/INFQp4eC0qFGnG+q9qdjRNt95+LwdFNJ7hNpvUnOpZN9k6Nk+NmlxY6OhWOGfd6L+mGP7/llIjAQTUcKBCERpBCkAYA2AEAEAwisBJCoZiolDR85/lXzZYJHzn+VfNjmMWqBAkubZQKAQoYDIQBWAZisgAGEjJViqqtD5mY+utC5kZKSMfUXkrp+ZitRqOzyjnZPrrfi6UuhVI3+Fzb9jmI3XB4Wpx8LQl0umjX9lNPOwWLW/wDZ6slzxi33GQ2v6udkzBvi0czsSlHuL0+9dM/7c+7YWAIDu4EQRUEDk+z+DrZbw9JabUsLB6baN0nJ/BnTcD5z5u9HLsuPddkmbrUK2ES9inCfzudTyetfs95wrv1O2P2j3hAE1HECEIaQQoCGKgohEQACsYVhSMCCxUQWR85/lXzYzFjr9lfMZmMWqFwEIbZEZChRUFBAghSsVjMSRBAEISrCs8VRaH6pNHtZ5Kq87nv1mK1GJyjSz6dWHHp1I9cWjxbVVXOyZTW/CrXjzXm5fqMrNaTA7VMs2jjKHI4+quhwiv0sYep079O/efy3lgCA7uCpBAggciwEt12RVprVDFYqL/h05w+cTq+T1ofOjlGwWq6mVcVNebOWLqvfemto/qOs4BeT0v5I4+P+93frerXjX4j1BAE04IQBDQKHEQwQUQBAIxWEDAVioMhUSqujr9nvIwR1+z3hZjFaBCEOiChhUS4QyCBMICsSQ7EkFKmERDGasBnlrLTLoZ6meatrf5GZqvDPWa3tfPMxuV6O8sRSqL2pVb/pNkqa/wDfCazsXeZlvKFPlsPSrJflzF+tkx9UdMfTlPj+Y38UIDs4qha9TNhKW9CMpdSuMjG7Ja+54HGVFrhhMQ1z7m7Ak25rtU0/+LXnraoQjd6/Kkn+k63gfMXT8zmW1fRShiJK+c3Si+LmrOtb4/A6dhPMXN82cvDv1r9eT0EAE04IQBDQZBAiBBIQjAFwNkYLgLICJJgQVdHX7PeRsEdfs95GYxWoEAbm2UCC5EASEBcAiSDcWQUgwgyJRGUVta9aaL2U1v8At5zFaY6r4mr4V5myCD3q+AnHnabf/wAzaK+vpNUyo8zLOS6nH3anz+RJW/nJ7x06fvPiuiChQDu4qka/s/q5uTMW72zqcafbnGPeZ9Gp7aFS2TpRvbdMRh489pZ/6TOXat9Obzx+7EbWdO2GrS42Jt0KEfFnRsP5q/LH5Gi7AKThgabatn1KlTnV7J9SN8p6uhIwud+qnCAhXMQEIaQyIAIBRGREYCsW4WKwBMWLCxUFXx19DIwQ19DI2YxWiQBDbIjICIASMBGwALIIrAQZCMZEqiU19S9TTLSqv5rM1pj8VrfOahsv8jE5KrcTHU4X4FKcL/CJuGL1s07bD0YWlW36GKpVV0X/ALGK69L1R0ZEFpyuk956Qs9DgqRo+2zUthcPDjYnO6I05fUbujnG25V8rB0/8OJm+uml3mM+1dehP6kZzYbC2Cwy4abfQ5NpfE3KJq+xqnm4bCQetYegnzuMb/M2dEvesW7MEVBKyIRQlDEAghBIAgEZXIsYkgqtgRJATILoPT0MIsXpXMwmcVpiACbQUQhAggZCAARjNiNhSMZCMZGaCV1dT5h7iy3yNMfid71xXyNV2eUs/J9ZcV05fzpG04jVHmt8TBbJIZ2CxMdf/Bm+pX7jFbwuspWy5Fr7phsPU5TD0Z9cE+89jMHsJrZ+TsG+DD04dhZv6TOHeOeU1bFCZy/bRqqWNoU3e0MPBu2u06s729doHTzk+z21TKsYa9GFo259P6yZfrqOvR9VviV0bJsLbnFaoxgkuBJf2MymYvBef/vgZk0zEc6dBEQ6KyZEBciZQ6IKmNcAkAQCMSQzEYCSEHkIRVkXpXMxyqL0rmY6ZIU4UKE0hgi3CBGxWwsVgBsRjMVgKyEIRUuBsDA2RXhxHm8zkviYvHwzqNWHGp1I9cWZXEapfnfyMfLfM1Y821lVzsm0VxKmIjp/90pL4SRtTNK2rZWw2IpcjjasFzZkP7m6XOuPaHU9dee5yrKEFVy7PTqxdF6P8uEF+k6pc5Pkas55ZqS4+Jxun/CpSa+CM5+2m+j/AJX4dQwPndfyMhcx2B1vmfcZC5I506YyZUmMmVD3DcS4bhD3DcRMNwHuG4lyXAZsVsDYjYVJFbZJSK2yC2L0rmfcWJlEHpXMyxSJFXJkuVpjJmkPcNxLkuA1wNi3BcAtgYGwNgFisjYtwCxWRsVsivNiVol0MxknpMniN/8ALfqZiqj0mVjFbX0s3EZTo8GKjVt6puf0o3e5oWxOWZlbKEOUpUai9drfWb3c6Y9l6vq/1+HnvvnJthF6mPlVte0K021qUpP+7OnZSr7nQrVOTo1Z9mDfccx2A4mlRdepWq06aUaUFKpOMU7Xb1kzutNdOfTl+zqWDlZNvQkrt7yRdLKFBa69Fc9SC7zn+XdleFzYxo4tSd/LVKeanG2pvUzWK2X4OTaxMkt5Os9Bjd9oxp2ZZSw/pFH3kPEZZSocvS7cTiUst09/E39ub7yqWWqO/Wv0TY3l4NR3L7zocvT7SA8r4Za8RS7RwmWWsPx5PmpvvQv35h+Co/ZSLvI1HdnlzCLXiaXaB+IMH6VR7Rwd7IKO9TqvqXeB7IaXJVeteI+o1HevxBg/S6PaCsvYP0uh20cEWyGnyFTrQfxBD0ep1ofUad8WWMK9WKw7/iw8SyOMpS82rSl+WcX3nAPv6Po9X4BWWov93q9cfEbq8L4fQDfBpKpSOExy/uelRr09emM7PRbgfrPbT2a16fmYup7dWNVdTuTZwrtUJ6V0likciobZtSMGpyozqW8l7lUS9d7WXUip7YWIqa6+bfepblH+pJklXhXZose5w2rsrq1M5KrjpyV72nNpW16FJJ9B5llqbvn0sVU1a1b5ydze04V3l1YrXKK52kJLF0lrq01zzj4nBnliPotbpzPEn3sr2+x1r80PEbOF8O7PH0eXo+8h4ivKFDl6PvIeJwuOV09WEq2/h+JFlqPotX/T8Rs4Xw7n9vo8vS95HxB9uo8tS7cfE4d99xvb7LUvq10/EP36l+7Vf9PxGzhfDt/26jy1Ltx8QPHUeWpduPicSWyBej1eun4jrZHwUK3XT8Rs4Xw7S8dR5al24+Irx9HlqXbj4nGVsoa/8Vbrp+Iy2WS5Kr0un4k2vC+HYJYiE35E4TtGSeZJStwXtzGNqvScyjsxnHTGNaL06VKmn13PVh9n0lZVKMprjOUIyt16SLwy8NlyZLMy5blsDLpalH6Wb9c5LkjL0MVlfBVKcJQajWpTTcZZy3ObVrdJ1dM3h2TqzVn2ePFUI1ac6U75lSE6cknZ5sk0/gzUntc4PlMUvbhq7JuKIbslYmVnatLntaYKWupie1B/pKv2XYLlcT2ofSb0FE1Dlb7tFW1fguVxPah9JFtYYHlMR2ofSb2SxdROV8tFW1lgeUxHah9Iy2tMDx8R2qf0m7hQ1DlfLSltaYHj4jtQ+kZbW2C4+I7UPpN0GQ1DlfLS/wBm2B42I7UPpD+zfBcfEduP0m6EQ1Dll5aZ+zfBcfEduPgH9m2C4+I7cfA3Qg1DlfLS1tbYDfliGt9borP4Fq2t8l8hUfrdapf5m4EGocr5amtrvJVv+k6d1rX/AKiyO1/ktX/5TX/m1mlo3vKNoINJyvlrC2A5NvdYdresqtVL5jrYNk70Z9NWr9RsxGNRd3y1lbB8m+ir3lX6hlsKyav3SPbqeJsbANQ3fLX1sMyd6HT7U/EK2HZO9Co/zPvM+yA3WDWxPJ9rfYqHZuT8KZP9Bw/u0ZtgYN1hvwvk/wBBw3uoh/DGA9BwvuoeBl2AG6xS2OYFfuWF9zT8A/h/BehYX3NPwMoAJtjvuTCb2Ew3uafgBZGwu9hcP7mn4GQIB5sPgKNN50KNKD4YQjF9aR67gAB//9k=" alt="A Book">
//             </div>
//             <div class="card__content">
//               <h2 class="product__price">$19.99</h2>
//               <p class="product__description">A very interesting book about so many even more interesting things!</p>
//             </div>
//             <div class="card__actions">
//               <button class="btn">Add to Cart</button>
//             </div>
//           </article>
//           {{/each}} // here we are closing the /each loop
//       </div>
//       {{ else }} // else clause
//       <h1>No Products Found!</h1> 
//     {{/if}}  // here we are closing the /if statement  
//   </main>
// </body>

// </html>




// 087. Adding the Layout to Handlebars

// Handlebars will use layout by default, but you can set to not do this with 'layout: false' as variable injection in the template


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser'); 
const expressHbs = require('express-handlebars'); 

const app = express();  

app.engine(
  'hbs', 
  expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})); // here we tell express where is the layout director, which is the defatult layout and the extension name of the layout 'hbs' in our case, in this way 'handlebars' is working
app.set('view engine', 'hbs'); 
app.set('views', 'views');

const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);


// /views/layouts/main-layout.hbs

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>{{ pageTitle }} </title>
//     <link rel="stylesheet" href="/css/main.css">
//     {{#if formsCSS}} // if we have this element to inject in the template it will put the link in the template
//       <link rel="stylesheet" href="/css/forms.css">
//     {{/if}}
//     {{#if productCSS}} // if we have this element to inject in the template it will put the link in the template
//       <link rel="stylesheet" href="/css/product.css">
//     {{/if}}
// </head>

// <body>
//     <header class="main-header">
//         <nav class="main-header__nav">
//             <ul class="main-header__item-list">
//                 <li class="main-header__item"><a class="{{#if activeShop }}active{{/if}}" href="/">Shop</a></li> // here we put the class just if there is that 'variable to inject'
//                 <li class="main-header__item"><a class="{{#if activeAddProduct }}active{{/if}}" href="/admin/add-product">Add Product</a></li> // here we put the class just if there is that 'variable to inject'
//             </ul>
//         </nav>
//     </header>
//     {{{ body }}} // here will be placed our templates
// </body>

// </html>


// shop.js

const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js')
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/', 
    hasProducts: products.length > 0, // here we inject the elements and give them a boolean value which 'handlebars will understand
    activeShop: true,
    productCSS: true
  }); 
}); 

module.exports = router;




// 088. Working with EJS

// EJS doesn't support layouts(but there is something that allows you to reuse some certain building blocks)

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();  

app.set('view engine', 'ejs');  // express just can look for ejs as we did with pug(supported out of the box)
app.set('views', 'views');

const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);


// shop.ejs

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title><%= pageTitle %></title> // like this we are injecting data to 'ejs' tempates
//     <link rel="stylesheet" href="/css/main.css">
//     <link rel="stylesheet" href="/css/product.css">
// </head>

// <body>
//     <header class="main-header">
//         <nav class="main-header__nav">
//             <ul class="main-header__item-list">
//                 <li class="main-header__item"><a class="active" href="/">Shop</a></li>
//                 <li class="main-header__item"><a href="/admin/add-product">Add Product</a></li>
//             </ul>
//         </nav>
//     </header>

//     <main> 
//       <% if(prods.length > 0) { %>  // and we can write Vanilla JS in 'ejs'
//         <div class="grid">
//           <% for(let product of prods) { %> // and we can write Vanilla JS in 'ejs'
//             <article class="card product-item">
//                 <header class="card__header">
//                     <h1 class="product__title"><%= product.title %></h1> // and we can write Vanilla JS in 'ejs'
//                 </header>
//                 <div class="card__image">
//                     <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8NDQ0NDQ0NDQ0NDQ0NDw8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8QFSsdFR0uLSsrKy0rKy0tKy0tKysrMCstLS0rLS0rLSstKy0rLS0rLTctLS0tLTctKy0tLTc3K//AABEIALsBDQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBQYHBAj/xABJEAACAQIBBA0JBQYEBwAAAAAAAQIDEQQFEiExBgcTQVFSU3GBkZLB0SIyVGGCk6Gx0hQVFnLCF0SDorLhYmOj8CMkNEJDc8P/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACkRAQEAAgEDAwMDBQAAAAAAAAABAhESAzFRMkFhInGxIYHBIzNCkfD/2gAMAwEAAhEDEQA/AOjoZCoY0CggQQCG64UVx06bD2OXNrRk1woOcuFdYqQbDnU0bOXCHOXCLYlhzq6PnLhJnLhQtiWHOmj39YSpoDXBo5hz+DS4hRukl6+caNdPQ9D+BqZyppaQjZU663tPNqLbIi0hTurfAviS74fkZ5xdLiFOnhfWSz4X1sc/hdLgFNvW+tgs+F9bHP4NLiFGnhfWC74WOaaXgKc+XD8EDdJcPwHOHFcKVKvZpSsk9F9WktuamUpZoGBhYDSFYGMwAKhkKhkAUCcrJ9XXoNO2zst4jB4ajLCVdxnVxG5ykowlLMzJPRnJ20pFmw+WIlRoVcViquJqV4wrPPsowTWcoqKS638DnlnpudP6eW23Q1dY6FhqHRiJUCKQ1pNmuG4gUXRs9yXAiWGjYisIGTRskkVSiWyEJYsquKk5NOTcVGNo6LJ3enh4OoujEEV5T/LH5ssMYtVEgihR00xswRQ2GjY2A0QA0bBoDIwDRsGhWhgMmleXFrRfgkmeZ4iVKTa0xb0x3uf1M9uJXksx+LV9Pqv8Dnf0u41OzC4rZ7CjXhQr4DF0t0qRpxqt0pU3nOyaadn8zcTme2HG2EjVWujiKdRc9pLvOk0J50VJapJNczR26eVu9r1MZJLIdijMDOjkrQwEEDmu3LVVsDSbspVK83v2SUFf+Y2/INFQp4eC0qFGnG+q9qdjRNt95+LwdFNJ7hNpvUnOpZN9k6Nk+NmlxY6OhWOGfd6L+mGP7/llIjAQTUcKBCERpBCkAYA2AEAEAwisBJCoZiolDR85/lXzZYJHzn+VfNjmMWqBAkubZQKAQoYDIQBWAZisgAGEjJViqqtD5mY+utC5kZKSMfUXkrp+ZitRqOzyjnZPrrfi6UuhVI3+Fzb9jmI3XB4Wpx8LQl0umjX9lNPOwWLW/wDZ6slzxi33GQ2v6udkzBvi0czsSlHuL0+9dM/7c+7YWAIDu4EQRUEDk+z+DrZbw9JabUsLB6baN0nJ/BnTcD5z5u9HLsuPddkmbrUK2ES9inCfzudTyetfs95wrv1O2P2j3hAE1HECEIaQQoCGKgohEQACsYVhSMCCxUQWR85/lXzYzFjr9lfMZmMWqFwEIbZEZChRUFBAghSsVjMSRBAEISrCs8VRaH6pNHtZ5Kq87nv1mK1GJyjSz6dWHHp1I9cWjxbVVXOyZTW/CrXjzXm5fqMrNaTA7VMs2jjKHI4+quhwiv0sYep079O/efy3lgCA7uCpBAggciwEt12RVprVDFYqL/h05w+cTq+T1ofOjlGwWq6mVcVNebOWLqvfemto/qOs4BeT0v5I4+P+93frerXjX4j1BAE04IQBDQKHEQwQUQBAIxWEDAVioMhUSqujr9nvIwR1+z3hZjFaBCEOiChhUS4QyCBMICsSQ7EkFKmERDGasBnlrLTLoZ6meatrf5GZqvDPWa3tfPMxuV6O8sRSqL2pVb/pNkqa/wDfCazsXeZlvKFPlsPSrJflzF+tkx9UdMfTlPj+Y38UIDs4qha9TNhKW9CMpdSuMjG7Ja+54HGVFrhhMQ1z7m7Ak25rtU0/+LXnraoQjd6/Kkn+k63gfMXT8zmW1fRShiJK+c3Si+LmrOtb4/A6dhPMXN82cvDv1r9eT0EAE04IQBDQZBAiBBIQjAFwNkYLgLICJJgQVdHX7PeRsEdfs95GYxWoEAbm2UCC5EASEBcAiSDcWQUgwgyJRGUVta9aaL2U1v8At5zFaY6r4mr4V5myCD3q+AnHnabf/wAzaK+vpNUyo8zLOS6nH3anz+RJW/nJ7x06fvPiuiChQDu4qka/s/q5uTMW72zqcafbnGPeZ9Gp7aFS2TpRvbdMRh489pZ/6TOXat9Obzx+7EbWdO2GrS42Jt0KEfFnRsP5q/LH5Gi7AKThgabatn1KlTnV7J9SN8p6uhIwud+qnCAhXMQEIaQyIAIBRGREYCsW4WKwBMWLCxUFXx19DIwQ19DI2YxWiQBDbIjICIASMBGwALIIrAQZCMZEqiU19S9TTLSqv5rM1pj8VrfOahsv8jE5KrcTHU4X4FKcL/CJuGL1s07bD0YWlW36GKpVV0X/ALGK69L1R0ZEFpyuk956Qs9DgqRo+2zUthcPDjYnO6I05fUbujnG25V8rB0/8OJm+uml3mM+1dehP6kZzYbC2Cwy4abfQ5NpfE3KJq+xqnm4bCQetYegnzuMb/M2dEvesW7MEVBKyIRQlDEAghBIAgEZXIsYkgqtgRJATILoPT0MIsXpXMwmcVpiACbQUQhAggZCAARjNiNhSMZCMZGaCV1dT5h7iy3yNMfid71xXyNV2eUs/J9ZcV05fzpG04jVHmt8TBbJIZ2CxMdf/Bm+pX7jFbwuspWy5Fr7phsPU5TD0Z9cE+89jMHsJrZ+TsG+DD04dhZv6TOHeOeU1bFCZy/bRqqWNoU3e0MPBu2u06s729doHTzk+z21TKsYa9GFo259P6yZfrqOvR9VviV0bJsLbnFaoxgkuBJf2MymYvBef/vgZk0zEc6dBEQ6KyZEBciZQ6IKmNcAkAQCMSQzEYCSEHkIRVkXpXMxyqL0rmY6ZIU4UKE0hgi3CBGxWwsVgBsRjMVgKyEIRUuBsDA2RXhxHm8zkviYvHwzqNWHGp1I9cWZXEapfnfyMfLfM1Y821lVzsm0VxKmIjp/90pL4SRtTNK2rZWw2IpcjjasFzZkP7m6XOuPaHU9dee5yrKEFVy7PTqxdF6P8uEF+k6pc5Pkas55ZqS4+Jxun/CpSa+CM5+2m+j/AJX4dQwPndfyMhcx2B1vmfcZC5I506YyZUmMmVD3DcS4bhD3DcRMNwHuG4lyXAZsVsDYjYVJFbZJSK2yC2L0rmfcWJlEHpXMyxSJFXJkuVpjJmkPcNxLkuA1wNi3BcAtgYGwNgFisjYtwCxWRsVsivNiVol0MxknpMniN/8ALfqZiqj0mVjFbX0s3EZTo8GKjVt6puf0o3e5oWxOWZlbKEOUpUai9drfWb3c6Y9l6vq/1+HnvvnJthF6mPlVte0K021qUpP+7OnZSr7nQrVOTo1Z9mDfccx2A4mlRdepWq06aUaUFKpOMU7Xb1kzutNdOfTl+zqWDlZNvQkrt7yRdLKFBa69Fc9SC7zn+XdleFzYxo4tSd/LVKeanG2pvUzWK2X4OTaxMkt5Os9Bjd9oxp2ZZSw/pFH3kPEZZSocvS7cTiUst09/E39ub7yqWWqO/Wv0TY3l4NR3L7zocvT7SA8r4Za8RS7RwmWWsPx5PmpvvQv35h+Co/ZSLvI1HdnlzCLXiaXaB+IMH6VR7Rwd7IKO9TqvqXeB7IaXJVeteI+o1HevxBg/S6PaCsvYP0uh20cEWyGnyFTrQfxBD0ep1ofUad8WWMK9WKw7/iw8SyOMpS82rSl+WcX3nAPv6Po9X4BWWov93q9cfEbq8L4fQDfBpKpSOExy/uelRr09emM7PRbgfrPbT2a16fmYup7dWNVdTuTZwrtUJ6V0likciobZtSMGpyozqW8l7lUS9d7WXUip7YWIqa6+bfepblH+pJklXhXZose5w2rsrq1M5KrjpyV72nNpW16FJJ9B5llqbvn0sVU1a1b5ydze04V3l1YrXKK52kJLF0lrq01zzj4nBnliPotbpzPEn3sr2+x1r80PEbOF8O7PH0eXo+8h4ivKFDl6PvIeJwuOV09WEq2/h+JFlqPotX/T8Rs4Xw7n9vo8vS95HxB9uo8tS7cfE4d99xvb7LUvq10/EP36l+7Vf9PxGzhfDt/26jy1Ltx8QPHUeWpduPicSWyBej1eun4jrZHwUK3XT8Rs4Xw7S8dR5al24+Irx9HlqXbj4nGVsoa/8Vbrp+Iy2WS5Kr0un4k2vC+HYJYiE35E4TtGSeZJStwXtzGNqvScyjsxnHTGNaL06VKmn13PVh9n0lZVKMprjOUIyt16SLwy8NlyZLMy5blsDLpalH6Wb9c5LkjL0MVlfBVKcJQajWpTTcZZy3ObVrdJ1dM3h2TqzVn2ePFUI1ac6U75lSE6cknZ5sk0/gzUntc4PlMUvbhq7JuKIbslYmVnatLntaYKWupie1B/pKv2XYLlcT2ofSb0FE1Dlb7tFW1fguVxPah9JFtYYHlMR2ofSb2SxdROV8tFW1lgeUxHah9Iy2tMDx8R2qf0m7hQ1DlfLSltaYHj4jtQ+kZbW2C4+I7UPpN0GQ1DlfLS/wBm2B42I7UPpD+zfBcfEduP0m6EQ1Dll5aZ+zfBcfEduPgH9m2C4+I7cfA3Qg1DlfLS1tbYDfliGt9borP4Fq2t8l8hUfrdapf5m4EGocr5amtrvJVv+k6d1rX/AKiyO1/ktX/5TX/m1mlo3vKNoINJyvlrC2A5NvdYdresqtVL5jrYNk70Z9NWr9RsxGNRd3y1lbB8m+ir3lX6hlsKyav3SPbqeJsbANQ3fLX1sMyd6HT7U/EK2HZO9Co/zPvM+yA3WDWxPJ9rfYqHZuT8KZP9Bw/u0ZtgYN1hvwvk/wBBw3uoh/DGA9BwvuoeBl2AG6xS2OYFfuWF9zT8A/h/BehYX3NPwMoAJtjvuTCb2Ew3uafgBZGwu9hcP7mn4GQIB5sPgKNN50KNKD4YQjF9aR67gAB//9k=" alt="A Book">
//                 </div>
//                 <div class="card__content">
//                     <h2 class="product__price">$19.99</h2>
//                     <p class="product__description">A very interesting book about so many even more interesting things!</p>
//                 </div>
//                 <div class="card__actions">
//                     <button class="btn">Add to Cart</button>
//                 </div>
//             </article>
//           <% } %>  // here we are closing the for loop 
//         </div>
//       <% } else { %> // and here we are closing the if clause and  open the else one
//         <h1>No Products Found!</h1>
//         <% } %>   // closing the else clause
//     </main>
// </body>

// </html>




// 089. Working on the Layout with Partials

// ejs doesn't have layouts, just partials

// <%- include('includes/head.ejs') %> this render as HTML
// <%= %> render as TEXT




// 093. What is the MVC?

// Separation of concerns, separate parts of your code do different things and you know which part stands for what

// MVC Modes Views Controllers

// we already got Views in our project

// MODELS - are basically objects or part of your code that is responsible for representing your data in your code and allow you to work with your data(saving data, fetching data, to or from a file or even it's just in memory, all of these are handle by MODELS)


// VIEWS are responsible for what users see in the end and are responsible to render the correct content in our HTML document and send that back to the user and it's decoupled(decuplat) from your application code 


// CONTROLLERS connecting your MODELS and your VIEWS, contains the 'in-between' logic, controllers are split across Middleware Functions




// 094. Adding Controllers

// we have a folder with Views and they are fine, we will leave like that

// we made another folder /controllers in the root folder

// /controllers/products.js

const products = []; // here we have products array

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product', 
    path: '/admin/add-product', 
    formsCSS: true, 
    productCSS: true, 
    activeAddProduct: true
  });
}

exports.postAddProduct = (req, res, next) => {
  products.push({title: req.body.title});
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/', 
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  }); 
};


// /controllers/error.js for 404 'Not Found Page'

exports.get404 = (req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found',/* path: '*' */ });
};

// admin.js

const path = require('path');

const express = require('express');

const productsController = require('../controllers/products') // require 'products' from controller

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct); // to this middleware we are executing the getAddProduct 'controller' from productController

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct); // to this middleware we are executing the postAddProduct 'controller' from productController

module.exports = router;


// shop.js

const path = require('path');

const express = require('express');

const productsController = require('../controllers/products')// require 'products' from controller

const router = express.Router();

router.get('/', productsController.getProducts); // to this middleware we are executing the getProducts 'controller' from productController 

module.exports = router;


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser'); 

const errorController = require('./controllers/error'); // require error 'controller from controllers folder 

const app = express();  

app.set('view engine', 'ejs'); 
app.set('views', 'views');

const adminRoutes = require('./routes/admin.js');  // here we are importing just routes from admin.js
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404); // here we are executing ge404 controller from errorController

app.listen(3000);




// 096. Adding a Product Model

// /model.product.js

const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    products.push(this); // this refer to this object
  }

  static fetchAll() {  // static means that this method it will be called on the class not on an instance of the class
    return products;;
  }
}


// // controller/products.js

const Product = require('../models/product'); // require the product model which is as class

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product', 
    path: '/admin/add-product', 
    formsCSS: true, 
    productCSS: true, 
    activeAddProduct: true
  });
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title); // create a new product with our class from /models/product.js
  product.save(); // add the product created in the 'products' from /models/product.js 
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll(); // assign all the products from /model/product.js to 'products' with fetchAll() method of the class Product
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/', 
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  }); 
};




// 097. Storing Data in Files Via Model

// /models/product.js

const fs = require('fs'); // here we are require 'fs' to work with files
const path = require('path'); // require path

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
    ); // declare a const with the path to file /data/products.json where will store the data
    fs.readFile(p, (err, fileContent) => { // read from that file
      let products = [];  
      if(!err) { // if there isn't any erro
        products = JSON.parse(fileContent); // we will parse the data from that file to 'products'
      } 
      products.push(this); // after that we will push the to products actuall instance 'this'
      fs.writeFile(p, JSON.stringify(products), (err) => { // here we are writing back to 'p' the products which data from actual instance
        console.log(err);
      });
    });
  }

  static fetchAll() {  
    const p = path.join(path.dirname(process.mainModule.filename), 
    'data', 
    'products.json' 
    ); // declare a const with the path to file /data/products.json where will store the data
    fs.readFile(p, (err, fileContent) => {
      if(err) {
        return []; // if there is no data will return an empty array
      }
      return JSON.parse(fileContent); // if there is data will parse the data from 'p'
    });
  }
}




// 098. Fetching Data from File Via the Model

// /models/product.js

const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if(!err) {
        products = JSON.parse(fileContent);
      } 
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {  // passing a callback function
    const p = path.join(path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      if(err) {
        cb([]); // put in the callback the empty array for this case
      }
      cb(JSON.parse(fileContent)); // put in the callback the response for this case
    });
  }
}

// controller/products.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product', 
    path: '/admin/add-product', 
    formsCSS: true, 
    productCSS: true, 
    activeAddProduct: true
  });
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => { // here we are doing a callback array function for fetchAll products
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/', 
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    }); 
  });
};




// 099. Refactoring the File Storage Code

const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename), 
  'data', 
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if(err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile(products => { // here as well we are putting an call back fumction which will return an empty array or the array from our file (where we store the data)
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {  
    getProductsFromFile(cb);
  }
};




// 104. Working on the Navigation

exports.get404 = (req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found', path: '404'});
}; // path: '404' is refering to all the paths that are not defined in our application




// 106. Storing Product Data




// 107. Dispaying Product Data

<input type="number" name="price" id="price" step="0.01"></input> // step="0.01" allows us to use decimal in an input type number form  




// 108. Editing Deleting Products

<form action="/admin/delete-product" method="POST">
  <button class="btn" type="submit">Delete</button>
</form> // here we want to use this button to delete something, so because of that we wrap it in a form with method="POST"





// 109. Adding Another Item




// 114. Adding the Product ID to the Path

// views/shop/product-list.ejs

{/* <article class="card product-item">
    <header class="card__header">
        <h1 class="product__title">
            <%= product.title %>
        </h1>
    </header>
    <div class="card__image">
        <img src="<%= product.imageUrl %>" alt="<%= product.title %>">
    </div>
    <div class="card__content">
        <h2 class="product__price">$
            <%= product.price %>
        </h2>
        <p class="product__description">
            <%= product.description %>
        </p>
    </div>
    <div class="card__actions">
        <a href="/products/<%= product.id %>" class="btn">Details</a> // here we add to the 'Details' button the href to the '/products/<%= product.id %>' which means that we are passing the id of that product in the URL
        <form action="/add-to-cart" method="POST">
            <button class="btn">Add to Cart</button>
        </form>
    </div>
</article> */}

// models/product.js

const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename), 
  'data', 
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if(err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString(); // here we are giving it an random id to the Product when we save it(we are using Math.random just for now)
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {  
    getProductsFromFile(cb);
  }
};




// 115. Extracting Dynamic Params

// routes/shop.js

const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct); // it can be anything after the '/products/":anything"' because we have ':'(colon) and we name that after colon in the URL productId so we can extract information which is send through URL, /products/:productId helps us to read information from URL (/products/123245, in this case the 'productId' is '123245')

// the order of the routes does matter here cause if we have somthing like router.get('/products/delete') this it will never be executed cause of the middleware above this one, so we have to be aware of these rules

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;


// controllers/shop.js

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => { 
  const prodId = req.params.productId; // this is the middleware which help us to get information which is send through the URL, in this case we are assign the information 'productId' to prodId through 'req.params.productId'
  console.log(prodId); // we console log it just for testing
  res.redirect('/');
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};




// 116. Loading Product Detail Data

// models/product.js

const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename), 
  'data', 
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if(err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {  
    getProductsFromFile(cb);
  }

  static findById(id, cb) { // we are creating a method that is looking for the product which has the id which is giving 
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id)
      cb(product); // and return that product with givin id 
    });
  }
};


// controllers/shop.js

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => { 
    console.log(product); // here we are console log the product with the id which was send through the URL(or request here)
  });
  res.redirect('/');
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};




// 117. Rendering the Product Detail View

// views/shop/product-detail.ejs

/* <%- include('../includes/head.ejs') %>
  </head>

  <body>
    <%- include('../includes/navigation.ejs') %>
    <main class="centered">
      <h1><%= product.title %></h1>
      <hr>
      <div>
        <img src="<%= product.imageUrl %>" alt="<%= product.title %>">
      </div>
      <h2><%= product.price %></h2>
      <p><%= product.description %></p>
      <form action="/cart" method="POST">
        <button class="btn" type="submit">Add to Cart</button>
      </form>
    </main>
    <%- include('../includes/end.ejs') %> 
*/

// controllers/shop.js

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-detail', { // here we are rendering the 'shop/product-detail' with everything from Product.findById which fetch the product with the id which was send through URL 
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};




// 118. Passing Data with POST Requests

// <input> elements of type "hidden" let web developers include data that cannot be seen or modified by users when a form is submitted. For example, the ID of the content that is currently being ordered or edited, or a unique security token. Hidden inputs are completely invisible in the rendered page, and there is no way to make it visible in the page's content.

{/* <form action="/cart" method="post">
  <button class="btn" type="submit">Add to Cart</button>
  <input type="hidden" name="productId" value="<%= product.id %>">
</form> */}

// controllers/shop.js

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId; // this is the middleware that allows us to passing data through POST requests, in this case we will send the 'productId'
  console.log(prodId);
  res.redirect('/cart')
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};


// routes/shop.js

const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart); // for 'cart' post method will execute this middleware, check above

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;


// <% for (let product of prods) { %>
//   <article class="card product-item">
//       <header class="card__header">
//           <h1 class="product__title">
//               <%= product.title %>
//           </h1>
//       </header>
//       <div class="card__image">
//           <img src="<%= product.imageUrl %>" alt="<%= product.title %>">
//       </div>
//       <div class="card__content">
//           <h2 class="product__price">$
//               <%= product.price %>
//           </h2>
//           <p class="product__description">
//               <%= product.description %>
//           </p>
//       </div>
//       <div class="card__actions">
//           <a href="/products/<%= product.id %>" class="btn">Details</a>
//           <%- include('../includes/add-to-cart.ejs', {product: product}) %> if you have an include in a for loop or in loop you can access the local variable by default, 'product of prods' so you have to pass {prodduct: product} in (so product in the loop is pass in the product in the include)
//       </div>
//   </article>
//   <% } %>




// 119. Adding a Cart Model

const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 }; // declare the cart on 'zero'
      if (!err) { // if there is data in our 'cart.json' the cart will be the data from 'cart.json'
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        prod => prod.id === id
      ); // here we are looking for the existing products
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      // Add new product/ increase quantity
      if (existingProduct) { // we are updating the product here
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else { // if there isn't any existingProduct will just update the product in card.products
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice; // cause productPrice is string we did a + before it to be convert it in a string
      fs.writeFile(p, JSON.stringify(cart), err => {
        console.log(err);
      });
    });
  }
};


// controllers/shop.js

const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price); // here we are updating 'cart.json' if we are adding any product to Cart
  });
  res.redirect('/cart')
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};




// 120. Using Query Params

// routes/admin.js

const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct); 

// /admin/products => GET
router.get('/products', adminController.getProducts); 

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct); // for any link as /admin/edit-product/:productId will be execute adminController.getEditProduct middleware executed

module.exports = router;


// controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', { // here me modify the path, is now 'admin/edit-product' cause we have the same view as EditProduct
    pageTitle: 'Add Product', 
    path: '/admin/add-product'
  });
}

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit; // if we have the 'edit' query param in the 'URL' we will alocate to editMode like this 'http://localhost:3000/admin/edit-product/123245?edit=true', (if there is 'true', we will have it like string, not like a boolean)
  if(!editMode) {
    return res.redirect('/');
  }
  res.render('admin/edit-product', { // and we will render /admin/edit-product view if there is an edit query param in the 'URL'
    pageTitle: 'Edit Product', 
    path: '/admin/edit-product', // check the video if we want but I think is useless
    editing: editMode
  });
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    }); 
  });
};




// 121. Pre-Populating the Edit Product Page with Data

// controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product', 
    path: '/admin/add-product',
    editing: false // here we are adding this property to be everything ok
  });
}

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => { // here we will get the product 
    if(!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product', 
      path: '/admin/edit-product',
      editing: editMode,
      product: product // which will pass here to populate the form editing 
    });
  });
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    }); 
  });
};


// views/admin/edit-product

// <%- include('../includes/head.ejs') %></div>
//     <link rel="stylesheet" href="/css/forms.css">
//     <link rel="stylesheet" href="/css/product.css">
// </head>

// <body>
//    <%- include('../includes/navigation.ejs') %>

//     <main>
//         <form class="product-form" action="/admin/<% if (editing) { %>edit-product<% } else { %>add-product<% } %>" method="POST">
//             <div class="form-control">
//                 <label for="title">Title</label>
//                 <input type="text" name="title" id="title" value="<% if (editing) { %><%= product.title %><% } %>"> // with value we are populating the input
//             </div>
//             <div class="form-control">
//                 <label for="imageUrl">Image URL</label>
//                 <input type="text" name="imageUrl" id="imageUrl" value="<% if (editing) { %><%= product.imageUrl %><% } %>"> // with value we are populating the input
//             </div>
//             <div class="form-control">
//                 <label for="price">Price</label>
//                 <input type="number" name="price" id="price" step="0.01" value="<% if (editing) { %><%= product.price %><% } %>"> // with value we are populating the input
//             </div>
//             <div class="form-control">
//                 <label for="description">Description</label>
//                 <textarea name="description" id="description" rows="5"><% if (editing) { %><%= product.description %><% } %></textarea> // with value we are populating the input
//             </div>

//             <button class="btn" type="submit"><% if (editing) { %>Update Product<% } else { %>Add Product<% } %></button> // here if we are in editing mode it will display Update Products
//         </form>
//     </main>
// <%- include('../includes/end.ejs') %>




// 122. Linking to the Edit Page

// views/admin/edit-product.ejs

// <%- include('../includes/head.ejs') %>
//     <link rel="stylesheet" href="/css/product.css">
//     </head>

//     <body>
//         <%- include('../includes/navigation.ejs') %>

//             <main>
//                 <% if (prods.length > 0) { %>
//                     <div class="grid">
//                         <% for (let product of prods) { %>
//                             <article class="card product-item">
//                                 <header class="card__header">
//                                     <h1 class="product__title">
//                                         <%= product.title %>
//                                     </h1>
//                                 </header>
//                                 <div class="card__image">
//                                     <img src="<%= product.imageUrl %>" alt="<%= product.title %>">
//                                 </div>
//                                 <div class="card__content">
//                                     <h2 class="product__price">$
//                                         <%= product.price %>
//                                     </h2>
//                                     <p class="product__description">
//                                         <%= product.description %>
//                                     </p>
//                                 </div>
//                                 <div class="card__actions">
//                                     <a href="/admin/edit-product/<%= product.id %>?edit=true" class="btn">Edit</a> // here we add the product.id to path and edit=true, so when we edit, it will populate the form with the data that we enter before
//                                     <form action="/admin/delete-product" method="POST">
//                                         <button class="btn" type="submit">Delete</button>
//                                     </form>

//                                 </div>
//                             </article>
//                             <% } %>
//                     </div>
//                     <% } else { %>
//                         <h1>No Products Found!</h1>
//                         <% } %>
//             </main>
//             <%- include('../includes/end.ejs') %>




// 123. Editing the Product Data

// views/admin/edit-product.ejs

// <%- include('../includes/head.ejs') %></div>
//     <link rel="stylesheet" href="/css/forms.css">
//     <link rel="stylesheet" href="/css/product.css">
// </head>

// <body>
//    <%- include('../includes/navigation.ejs') %>

//     <main>
//         <form class="product-form" action="/admin/<% if (editing) { %>edit-product<% } else { %>add-product<% } %>" method="POST">
//             <div class="form-control">
//                 <label for="title">Title</label>
//                 <input type="text" name="title" id="title" value="<% if (editing) { %><%= product.title %><% } %>">
//             </div>
//             <div class="form-control">
//                 <label for="imageUrl">Image URL</label>
//                 <input type="text" name="imageUrl" id="imageUrl" value="<% if (editing) { %><%= product.imageUrl %><% } %>">
//             </div>
//             <div class="form-control">
//                 <label for="price">Price</label>
//                 <input type="number" name="price" id="price" step="0.01" value="<% if (editing) { %><%= product.price %><% } %>">
//             </div>
//             <div class="form-control">
//                 <label for="description">Description</label>
//                 <textarea name="description" id="description" rows="5"><% if (editing) { %><%= product.description %><% } %></textarea>
//             </div>
//             <% if(editing) { %>
//                 <input type="hidden" id="<=% product.id %>" name="productId"> // here we are sending the id through input hidden
//             <% } %>

//             <button class="btn" type="submit"><% if (editing) { %>Update Product<% } else { %>Add Product<% } %></button>
//         </form>
//     </main>
// <%- include('../includes/end.ejs') %>


// models/product.js

const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id; // here we are adding an id if we want to update the id
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      if (this.id) { // here we are looking to see if there already is an id an if is it we we updated as below
        const existingProductIndex = products.findIndex(
          prod => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => { // and after that we are write it to file
          console.log(err);
        });
      } else { 
        this.id = Math.random().toString(); // if there isn't an id it well be generate one
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    });
  }
};


// controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price); // here we are adding as a first argument 'null' for id
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId; 
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  );
  updatedProduct.save(); // here we save the updatedProduct
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};




// 124. Adding the Product-Delete Functionality

// views/admin/edit-product.ejs

// <%- include('../includes/head.ejs') %>
//     <link rel="stylesheet" href="/css/product.css">
//     </head>

//     <body>
//         <%- include('../includes/navigation.ejs') %>

//             <main>
//                 <% if (prods.length > 0) { %>
//                     <div class="grid">
//                         <% for (let product of prods) { %>
//                             <article class="card product-item">
//                                 <header class="card__header">
//                                     <h1 class="product__title">
//                                         <%= product.title %>
//                                     </h1>
//                                 </header>
//                                 <div class="card__image">
//                                     <img src="<%= product.imageUrl %>" alt="<%= product.title %>">
//                                 </div>
//                                 <div class="card__content">
//                                     <h2 class="product__price">$
//                                         <%= product.price %>
//                                     </h2>
//                                     <p class="product__description">
//                                         <%= product.description %>
//                                     </p>
//                                 </div>
//                                 <div class="card__actions">
//                                     <a href="/admin/edit-product/<%= product.id %>?edit=true" class="btn">Edit</a>
//                                     <form action="/admin/delete-product" method="POST">
//                                         <input type="hidden" value="product.id" name="productId"> // here we are sending the product.id as the prodId through input hidden cause we want to delete this iten.
//                                         <button class="btn" type="submit">Delete</button>
//                                     </form>

//                                 </div>
//                             </article>
//                             <% } %>
//                     </div>
//                     <% } else { %>
//                         <h1>No Products Found!</h1>
//                         <% } %>
//             </main>
//             <%- include('../includes/end.ejs') %>


// controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId; 
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  );
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.postDeleteProduct = (req, res, next) => { // here is the controllers for delete post products
  const prodId = req.body.productId; // here we are taking from the request the productId which was send through input hidden
}


// models/product.js

const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          prod => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => { 
          console.log(err);
        });
      } else { 
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
    });
  }

  static deleteById(id) { // here we are deleting the product with the which was send through the input hidden
    getProductsFromFile(products => { // getting all the products
      const updatedProducts = products.filter(prod => prod.id !== id); // here we are filtering all the products and return all of them expect the one with that id 
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {  // and we are writing the updatedProducts to file(somehow database)
        if(!err) {
          
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    });
  }
};




// 125. Deleteing Cart Items

// models/product.js

const fs = require('fs');
const path = require('path');

const Cart = require('./cart'); // here we are importing the cart

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          prod => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
    });
  }

  static deleteById(id) {
    getProductsFromFile(products => {
      const product = products.find(prod => prod.id === id); // here we get the product with the which was pass in  from the products("database")
      const updatedProducts = products.filter(prod => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        if (!err) {  // if there isn't any error we'll also delete that prodduct from Cart
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    });
  }
};


// models/cart.js

const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        prod => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      // Add new product/ increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), err => {
        console.log(err);
      });
    });
  }

  static deleteProduct(id, productPrice) { // here we are creating a method to delete an item from Cart
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return; // this means there was a error and we did find a cart
      }
      const updatedCart = { ...JSON.parse(fileContent) }; // the updatedCart is equal with the old cart
      const product = updatedCart.products.find(prod => prod.id === id);  // here we are looking to match our id with the product from the cart
      const productQty = product.qty; // we assing the product quantity to productQty
      updatedCart.products = updatedCart.products.filter( // here we are filtering to return all the products without that id 
        prod => prod.id !== id
      );
      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * productQty; // updating the price


      fs.writeFile(p, JSON.stringify(updatedCart), err => { // and write back to the file the updatedCart without the product which was delete
        console.log(err);
      });
    });
  }

  static getCart(cb) {
    fs.readFile(p, (err, fileContent) => {
      const cart = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(cart);
      }
    });
  }
};


// controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  );
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);  // here we are deleting the product with id which was pass in
  res.redirect('/admin/products');
};




// 126. Displaying Cart Item on the Cart Page

// models/cart.js

const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        prod => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      // Add new product/ increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), err => {
        console.log(err);
      });
    });
  }

  static deleteProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return; 
      }
      const updatedCart = { ...JSON.parse(fileContent) }; 
      const product = updatedCart.products.find(prod => prod.id === id); 
      const productQty = product.qty; 
      updatedCart.products = updatedCart.products.filter( 
        prod => prod.id !== id
      );
      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * productQty; 


      fs.writeFile(p, JSON.stringify(updatedCart), err => { 
        console.log(err);
      });
    });
  }

  static getCart(cb) { // here we will add all the products to card
    fs.readFile(p, (err, fileContent) => {
      const cart = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(cart);
      }
    });
  }
};


// controllers/shop.js

const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {   // here we are bringing all the products, from 'database' and the logic is below
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};




// 127. Deleting Cart Items

// views/shop/cart

// <%- include('../includes/head.ejs') %>
//     </head>

//     <body>
//         <%- include('../includes/navigation.ejs') %>
//         <main>
//             <% if (products.length > 0) { %>
//                 <ul>
//                     <% products.forEach(p => { %>
//                         <li>
//                             <p><%= p.productData.title %> (<%= p.qty %>)</p>
//                             <form action="/cart-delete-item" method="POST">
//                                 <input type="hidden" value="<%= p.productData.id %>" name="productId"> // here we are sending the productId to backend
//                                 <button class="btn" type="submit">Delete</button>
//                             </form>
//                         </li>
//                     <% }) %>
//                 </ul>
//             <% } else { %>
//                 <h1>No Products in Cart!</h1>
//             <% } %>
//         </main>
//         <%- include('../includes/end.ejs') %>

// controllers/shop.js

const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {  
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => { // here we are deleting cart products, the logic is below
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};




// 128. Fixing a Delete Product bug

// models/cart.js

const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        prod => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      // Add new product/ increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), err => {
        console.log(err);
      });
    });
  }

  static deleteProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return; 
      }
      const updatedCart = { ...JSON.parse(fileContent) }; 
      const product = updatedCart.products.find(prod => prod.id === id); 
      if(!product) {
        return; // if the product doesn't exist we don't do anything anymore
      }
      const productQty = product.qty; 
      updatedCart.products = updatedCart.products.filter( 
        prod => prod.id !== id
      );
      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * productQty; 


      fs.writeFile(p, JSON.stringify(updatedCart), err => { 
        console.log(err);
      });
    });
  }

  static getCart(cb) { // here we will add all the products to card
    fs.readFile(p, (err, fileContent) => {
      const cart = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(cart);
      }
    });
  }
};




// 132. Choosing a Database

// SQL  vs NoSQL

// A database is quicker to access than a file(we don't have to read the entire file to just find a piece of information)

// SQL => MySQL

// NoSQL => MongoDB

// What's SQL?

// SQL things in tables with fields

/* Core SQL Database Characteristics

Data Schema(strong one in which for each table we clearly define how the data should look like, which field do we have, which type of data does each field store(number, string, text, boolean) a strictly define schema, and all the data in the table has to fit the schema for this table)

Data Relations (we relate different tables with basically three important kinds of relations: ) // tables are conected
        One-to-One
        One-to-Many
        Many-to-Many

SQL => Structured Query Language

Queries are crucial, that are simply commands we use to intereact with the database
exemple:
  SELECT * FROM users WHERE age > 28 ( it will select all the users from 'users' which age are greater than 28 )  */




// 133. NoSQL Introduction 

/* In NoSQL 'tables' are called collections and in the collections we have documents(where we store data, I think) and NoSQL doesn't have a strict schema (you can store multiple documents with different structures in the same collection), in NoSQL we got no real relations instead we are going for duplicate data(see video again if you want)


NoSQL Characteristics

No Data Schema(No strong data schema, we can have mixed data in the same collection )

No Data Relations */




// 134. Comparing SQL and NoSQL

/* Horizontal vs Vertical Scaling

Horizontal Scaling - add more servers (and merge data into one database)(this somehow how can go infinitely)

Vertical Scaling - improve server capacity / hardware (you cannot go infinitely)


SQL - data uses schemas, relations, data is distributed across multiple tables(horizontal scaling is difficult / impossible; vertical scaling is possible)  limitations for lots of (thousands) read & write queries per second 

NoSQL - schema less, no (or very few relations), data is typically merged / nested in a few collections, both horizontal and vertical scaling is possible, great performance for mass read & write requests */




// 136. Connecting our App to the SQL Database

// to use SQL or to interact with SQL we have to install mysql2 packega

npm install --save mysql2  // production dependencies, allow us to write SQL code and execute SQL code in node and interact with a database 


// /util/database.js 

const mysql = require('mysql2'); // here we are requiring mysql module in order to connect to the database

const pool = mysql.createPool({ // here we are creating a 'pool' which allow us to reach out whenever to it(database) we have a query to run and then we get a new connection from that pool which manages multiple connections(not just a single connection int this case I think we should use 'mysql.createConnection) 
  host: 'localhost', // name of the host
  user: 'root', // user
  database: 'node-complete', // the name of the database
  password: 'password' // password to database
});

module.exports = pool.promise();  // here we exported as a promis and we will use .then().catch() in order to use it because it is a promise with the information above we are able to connect our node application to database




// 137. Basic SQL Creating a Table

// In Order to create a table in MySQL watch 137 video from the course

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

db.execute('SELECT * FROM products').then().catch();  // we are executing a query to our database cause our 'pool' to our database it's a promise, here we have to use .then().catch() in order to retrive data from database // '*' means everything and this will 'SELECT' (everything in this case) FROM 'products' (database)
.then(result => {

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);



// 138. Retriving Data

// I just get some errors but I fix it with
/* I found this solution after I got an error message while trying to connect to the database. Has anyone else had the same problem?



Execute the following query in MYSQL Workbench

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

Try connecting using node after you do so. */

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

db.execute('SELECT * FROM products') // '*' means everything and this will 'SELECT' (everything in this case) FROM 'products' (database)
.then(result => {
  console.log(result[0], result[1]); // here we are logging to the console, the first 'row' from our database(which we injected there as dummy data), and second which is some metadata
})
.catch(err => {
  console.log(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);




// 139. Fetching Products

// /models/product.js

const db = require('../util/database') // here we are 'require' the 'pool' to our database

const Cart = require('./cart'); 

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
   
  }

  static deleteById(id) {
    
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products'); // here we are selecting all the products form our database, we don't use any 'callback' cause we are using 'promises'
  }

  static findById(id) {
    
  }
};


// /controllers/shop.js

const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
  .then(([rows, fieldData]) => { // here we are 'fetching' from database the 'products' which in this case are the 'rows', we are using an 'array' cause the result it's an nested array, and the first element is what we need(I think the second element contain 'metadata') and we don't need that element it's there just to see how to extract elements of an array in an 'argument list'(140 video 01:50)
    res.render('shop/index', {
      prods: rows, // a row it's a product
      pageTitle: 'Shop',
      path: '/'
    });
  })
  .catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {  
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};




// 140. Fetching Products - Time to practice


// /controllers/shop.js

const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => { // here we are fetching data from the database as we did in the previous lesson(see 139)
      res.render('shop/product-list', {
        prods: rows,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
  .then(([rows, fieldData]) => {
    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/'
    });
  })
  .catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {  
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};




// 141. Inserting Data Into the Database


// /models/product.js

const db = require('../util/database')

const Cart = require('./cart'); 

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute( // here are saving to the database
      'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.imageUrl, this.description] // 'INSERT INTO' products means that we want to add or to insert data to the 'products' database(in this case) (title, price, imageUrl, description) this are what we want to insert VALUES (what we gonna insert in it )(?, ?, ?, ?)(this are for security reasons to not face the issue of SQL injection ) [this.title, this.price, this.imageUrl, this.description] this are the values we are actually inserting to the database
    );
  } 

  static deleteById(id) {
    
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    
  }
};


// /controllers/admin.js


const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product
    .save() // cause we are using an promise here we have to use then and catch
    .then(() => {
      res.redirect('/'); // actually here we are not doing anything just 'redirecting' inside the arrow function from 'then' 
    })
    .catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  );
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId); 
  res.redirect('/admin/products');
};




// 142. Fetching a Single Product with the where Conditon


// /models/product.js

const db = require('../util/database')

const Cart = require('./cart'); 

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.imageUrl, this.description]
    );
  } 

  static deleteById(id) {
    
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]); // here we are selecting from the database the 'id' we want with WHERE 
  }
};


// /controllers/shop.js

const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/product-list', {
        prods: rows,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
  .then(([product]) => { // here we are getting the product
    res.render('shop/product-detail', {
      product: product[0], // we need the first element of the nested array
      pageTitle: product.title,
      path: '/products'
    });
  })
  .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
  .then(([rows, fieldData]) => {
    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/'
    });
  })
  .catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {  
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};




// 146. What is Sequelize

// 3rd party library An Object-Relational Mapping Library(all the SQL code behind the scenes for us and maps it into javascript object with convenience methods which we can call to execute that behind the scenes SQL code so that we never have to write SQL code on our own)




// 147. Connecting to the Database

// npm install --save sequelize    - install sequelize for production
// sequelize package needs mysql2 package in order to work


// /util/database.js

const Sequelize = require('sequelize'); // require 'sequelize'

const sequelize = new Sequelize('node-complete', 'root', 'password', { // first 'node-complete' is the name of the database, 'root' it's the user 'password' is the password to access the database 
  dialect: 'mysql',  // this will let sequelize know that we are working with 'mysql'
  host: 'localhost' // and here this is the host, 'localhost in this case'
}); // this is an new instance of 'Sequelize' which helps us to connect the app to the database

module.exports = sequelize;




// 148. Define a Model

// /models/product.js 

const Sequelize = require('sequelize'); 

const sequelize = require('../util/database'); // require the 'sequelize pool'
 
const Product = sequelize.define('product', { // here we are defining a 'model' with the name 'product'
  id: { // firs field of the row
    type: Sequelize.INTEGER, // type int
    autoIncrement: true, // it will increment by itself
    allowNull: false, // will not allow to be null 
    primaryKey: true // primary key of the table
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE, // type Double(huge number with '0.33943' for example on the negative axis and the pozitive axis)
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;




// 149. Syncing JS Definitions to the Database


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database'); // here we bring the pool from that path

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize  // here sequelize is creating 'the table' if not exist with the "pattern" which we create in '/models/product.js' or in case there is one it will connect our application to that 'table'
.sync()
.then(result => { 
  // console.log(result);
  app.listen(3000); // application it will start just after is checking if there's a table in our database as we define in the 'model/product.js' or after is creating the table in the database
})
.catch(err => {
  console.log(err)
});




// 150. Inserting Data Creating a Product


// /controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({ // .create create a new element based on the 'model' from 'models/product.js' and imediatly it will save it into database
    title: title, // give the title: title and so on
    price: price,
    imageUrl: imageUrl,
    description: description
  })
  .then(result => {
    // console.log(result);
    console.log('Created Product');
  })
  .catch(err => {
    console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  );
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId); 
  res.redirect('/admin/products');
};




// 152. Retriving Data Finding Products

const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products => { // 'findAll' will fetch all the 'rows'(elements) from database
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  }).catch(err => {
    console.log(err);
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
  .then(([product]) => {
    res.render('shop/product-detail', {
      product: product[0],
      pageTitle: product.title,
      path: '/products'
    });
  })
  .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll().then(products => { // 'findAll' will fetch all the 'rows'(elements) from database
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  }).catch(err => {
    console.log(err);
  });
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {  
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};




// 153. Getting a Single Product with the where condition


// /controller/shop.js

const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  }).catch(err => {
    console.log(err);
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  
  Product.findById(prodId) // we also have 'findById' on sequelize, aand we do it almost as we did it before, check below
  .then(product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  })
  .catch(err => console.log(err));
  // Product.findAll({where: {id: prodId}}) or we can do it like this but we have to use 'where' and id:(prodId)
  // .then(products => {
  //   res.render('shop/product-detail', {
  //     product: products[0], // it will return an array with a single element and we have to return 'products[0]' or actually to inject in the view
  //     pageTitle: products[0].title,
  //     path: '/products'
  //   });
  // })
  // .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  }).catch(err => {
    console.log(err);
  });
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {  
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};




// 154. Fetching Admin Products


// /controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description
  })
  .then(result => {
    // console.log(result);
    console.log('Created Product');
  })
  .catch(err => {
    console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  );
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.findAll() // here we are using 'findAll' to bring all the elements from the database on the Admin Products Page
  .then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId); 
  res.redirect('/admin/products');
};




// 155. Updating Products

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description
  })
  .then(result => {
    // console.log(result);
    console.log('Created Product');
  })
  .catch(err => {
    console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId) // here we are we are using '.findByPk' to find the id we want
  .then(product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  })
  .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId)
  .then(product => {
    product.title = updatedTitle;
    product.price = updatedPrice;
    product.description = updatedDesc;
    product.imageUrl = updatedImageUrl;
    return product.save(); // sequelize has a method 'save' with which it will save data to the database (we will do it with return)
  })
  .then(result => { // and this then will handle any succes for the 'product.save()' promise
    console.log('UPDATED PRODUCT');
    res.redirect('/admin/products'); // we move this here cause this is async code
  })
  .catch(err => console.log(err)); // this catch block will catch 'errors' for the first promise and for the second promise (SEE Promises chaining)
  
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId); 
  res.redirect('/admin/products');
};




// 156. Deleting Products


// /controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description
  })
  .then(result => {
    // console.log(result);
    console.log('Created Product');
    res.redirect('/admin/products'); // after we are creating an element(product) we redirect to '/admin/products/'
  })
  .catch(err => {
    console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId) 
  .then(product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  })
  .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId)
  .then(product => {
    product.title = updatedTitle;
    product.price = updatedPrice;
    product.description = updatedDesc;
    product.imageUrl = updatedImageUrl;
    return product.save(); 
  })
  .then(result => { 
    console.log('UPDATED PRODUCT');
    res.redirect('/admin/products'); 
  })
  .catch(err => console.log(err)); 
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId) // finding the id of the product we wanna delete
  .then(product => { // get that product or 'element'
    return product.destroy(); //  delete that 'element' with '.destroy()'
  })
  .then(result => {
    console.log('DESTROYED PRODUCT');
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};




// 157. Creating a User Model


// /model/user.js

const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', { // define an 'user' model
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING
});

module.exports = User;




// 157. Adding a One-To-Many Relationship


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'}); // this means that a created 'Product' belongs to a 'User' which create that 'Product', what is it as an object is refering to "onwnership" if a 'User' will be deleted, his 'Product' also will be deleted, so this will create in the 'products' table a new key in each element, which will be in this case (userId)
User.hasMany(Product); // this means that a 'User' can have multiple 'Product'(s) or a lot of them, this line(or statement) is doing the same what the line(statement) above is doing(Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});) so this means that this line(statement) is OPTIONAL     with both of them we have define both directions


sequelize
.sync({ force: true })  // this will overwrite our tables(I guess)
.then(result => {
  // console.log(result);
  app.listen(3000);
})
.catch(err => {
  console.log(err)
});




// 159. Creating Managing a Dummy User

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findByPk(1)
  .then(user => {
    req.user = user; // we assign the 'sequelize' user from database to req.user (request) which is (1 in our case)
    next(); // here we are calling next to go to the next middleware
  })
  .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'}); 
User.hasMany(Product); 


sequelize // first off all the app will execute the code below, whaen it's starting the app
// .sync({ force: true })  
.sync()  
.then(result => {
  return User.findByPk(1); // here we are look to see if there is an 'User' with id 1
  // console.log(result);
})
.then(user => {
  if(!user) { // if there isn't any user, we will create one 
    return User.create({name: 'Max', email: 'test@test.com' });
  }
  return user;
})
.then(user => {
  // console.log(user);
  app.listen(3000);
})
.catch(err => {
  console.log(err)
});




// 160. Using Magic Association Methods

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user // here we are using sequelize to associate one to many(one 'User' to many 'Product'(s)) and we are taking this from the req.user which we set up already and do the code below(you can see what exactly we change in the code from previous video), and this automatic will assign the created 'Product'(s) to user '1'(or with id 1)
    .createProduct({
      title: title,
      price: price,
      imageUrl: imageUrl,
      description: description
    })
    .then(result => {
    // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products'); 
    })
    .catch(err => {
      console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId) 
  .then(product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  })
  .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId)
  .then(product => {
    product.title = updatedTitle;
    product.price = updatedPrice;
    product.description = updatedDesc;
    product.imageUrl = updatedImageUrl;
    return product.save(); 
  })
  .then(result => { 
    console.log('UPDATED PRODUCT');
    res.redirect('/admin/products'); 
  })
  .catch(err => console.log(err)); 
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId) 
  .then(product => { 
    return product.destroy(); 
  })
  .then(result => {
    console.log('DESTROYED PRODUCT');
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};




// 161. Fetching Related Products

// /controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user
    .createProduct({
      title: title,
      price: price,
      imageUrl: imageUrl,
      description: description
    })
    .then(result => {
    // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products'); 
    })
    .catch(err => {
      console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  req.user
    .getProducts({where: {id: prodId}}) // here as well we want to edit the product just for the 'user' which was set up in the req.user, and it will return just the products which were created by the 'user', the sequelize give us the options to use "get'Products'" cause a 'Product'(s)' belongs to a 'User' and here is the magic of the sequelize
    // Product.findByPk(prodId) 
    .then(products => {
      const product = products[0]; // here we are getting the first element from that array(which was 'product' till now)
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId)
  .then(product => {
    product.title = updatedTitle;
    product.price = updatedPrice;
    product.description = updatedDesc;
    product.imageUrl = updatedImageUrl;
    return product.save(); 
  })
  .then(result => { 
    console.log('UPDATED PRODUCT');
    res.redirect('/admin/products'); 
  })
  .catch(err => console.log(err)); 
};

exports.getProducts = (req, res, next) => {
  req.user.getProducts() // here as well will get the products which were created by 'user' which has id(1)
    .then(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId) 
  .then(product => { 
    return product.destroy(); 
  })
  .then(result => {
    console.log('DESTROYED PRODUCT');
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};




// 162. One-To-Many Many-To-Many Relations

// /models/cart.js

const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Cart = sequelize.define('cart', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true 
  }
});

module.exports = Cart;


// /models/cart-item.js

const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const CartItem = sequelize.define('cartItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true 
  }, 
  quantity: Sequelize.INTEGER
});

module.exports = CartItem;


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findByPk(1)
  .then(user => {
    req.user = user;
    next(); 
  })
  .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'}); 
User.hasMany(Product); 
User.hasOne(Cart); // a 'User' has just one 'Cart'
Cart.belongsTo(User); // this is optional in this case
Cart.belongsToMany(Product, { through: CartItem }); // a 'Cart' belongs to many 'Products' through 'CartItem'
Product.belongsToMany(Cart, { through: CartItem }); // a 'Product' belongs to many 'Cart' through 'CartItem'

sequelize 
.sync({ force: true })  // this will overwrite the database
// .sync()  
.then(result => {
  return User.findByPk(1); 
  // console.log(result);
})
.then(user => {
  if(!user) { 
    return User.create({name: 'Max', email: 'test@test.com' });
  }
  return user;
})
.then(user => {
  // console.log(user);
  app.listen(3000);
})
.catch(err => {
  console.log(err)
});




// 163. Creating Fetching a Cart

// /controllers/shop.js

const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  }).catch(err => {
    console.log(err);
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({where: {id: prodId}})
  // .then(products => {
  //   res.render('shop/product-detail', {
  //     product: products[0],
  //     pageTitle: products[0].title,
  //     path: '/products'
  //   });
  // })
  // .catch(err => console.log(err));
  Product.findById(prodId)
  .then(product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  })
  .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  }).catch(err => {
    console.log(err);
  });
};

exports.getCart = (req, res, next) => {
  req.user.getCart() // here we are get the 'Cart' for our 'dummy user' 
  .then(cart => {
    return cart.getProducts() // through 'CartItem' we get the 'Products'
    .then(products => {
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products // we assign the products we get to 'product' to render in the view
      });
    })
    .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findByPk(1)
  .then(user => {
    req.user = user;
    next(); 
  })
  .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'}); 
User.hasMany(Product); 
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize 
// .sync({ force: true })  
.sync()  
.then(result => {
  return User.findByPk(1); 
  // console.log(result);
})
.then(user => {
  if(!user) { 
    return User.create({name: 'Max', email: 'test@test.com' });
  }
  return user;
})
.then(user => {
  // console.log(user);
  return user.createCart(); // here we creater a 'cart' for this 'user'
})
.then(cart => {
  app.listen(3000);
})
.catch(err => {
  console.log(err)
});




// 164. Adding New Products to the Cart

const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  }).catch(err => {
    console.log(err);
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({where: {id: prodId}})
  // .then(products => {
  //   res.render('shop/product-detail', {
  //     product: products[0],
  //     pageTitle: products[0].title,
  //     path: '/products'
  //   });
  // })
  // .catch(err => console.log(err));
  Product.findById(prodId)
  .then(product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  })
  .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  }).catch(err => {
    console.log(err);
  });
};

exports.getCart = (req, res, next) => {
  req.user.getCart()
  .then(cart => {
    return cart.getProducts()
    .then(products => {
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchCart;
  req.user
    .getCart()
    .then(cart => {
      fetchCart = cart;
      return cart.getProducts({ where: { id: prodId } }); // get the products from the 'cart' with 'prodId'
    })
    .then(products => {
      let product;
      if(products.length > 0) {
        product = products[0];
      } 
      let newQuantity = 1;
      if(product) {
        // ...
      }
      return Product.findByPk(prodId)
      .then(product => {
        return fetchCart.addProduct(product, { through: { quantity: newQuantity } }); // we add to cart that product with the 'newQuantity'
      })
      .catch(err => console.log(err));
    })
    .then(() => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};




// 165 Adding Existing Products Retriving Cart Items

// /controllers/shop.js

const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findByPk(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(cart => {
      return cart
        .getProducts()
        .then(products => {
          res.render('shop/cart', {
            path: '/cart',
            pageTitle: 'Your Cart',
            products: products
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }

      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findByPk(prodId);
    })
    .then(product => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity }
      });
    })
    .then(() => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

// watch again the video if you want




// 166. Deleting Related Items Deleting Cart Products

// /controlleres/shop.js

const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findByPk(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(cart => {
      return cart
        .getProducts()
        .then(products => {
          res.render('shop/cart', {
            path: '/cart',
            pageTitle: 'Your Cart',
            products: products
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }

      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findByPk(prodId);
    })
    .then(product => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity }
      });
    })
    .then(() => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
  .getCart() // get the cart
    .then(cart => {
      return cart.getProducts({ where: { id: prodId }}); // get the product with our id
    })
    .then(products => {
      const product = products[0]; // proper product
      return product.cartItem.destroy(); // destroy product
    })
    .then(result => {
      res.redirect('/cart'); // redirect
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};




//  167. Adding an Order Model

// /models/order.js

const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true 
  }
});

module.exports = Order;


// /models/order-item.js

const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const OrderItem = sequelize.define('orderItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true 
  }, 
  quantity: Sequelize.INTEGER
});

module.exports = OrderItem;


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findByPk(1)
  .then(user => {
    req.user = user;
    next(); 
  })
  .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'}); 
User.hasMany(Product); 
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });


sequelize 
// .sync({ force: true })  
.sync()  
.then(result => {
  return User.findByPk(1); 
  // console.log(result);
})
.then(user => {
  if(!user) { 
    return User.create({name: 'Max', email: 'test@test.com' });
  }
  return user;
})
.then(user => {
  // console.log(user);
  return user.createCart();
})
.then(cart => {
  app.listen(3000);
})
.catch(err => {
  console.log(err)
});




// 168. Storing Cartitems as Orderitems

// /routes/shop.js

const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.post('/create-order', shopController.postOrder); // add route for .postOrder

router.get('/orders', shopController.getOrders);

module.exports = router;


// /controllers/shops.js

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(cart => {
      return cart
        .getProducts()
        .then(products => {
          res.render('shop/cart', {
            path: '/cart',
            pageTitle: 'Your Cart',
            products: products
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }

      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findById(prodId);
    })
    .then(product => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity }
      });
    })
    .then(() => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then(cart => {
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      const product = products[0];
      return product.cartItem.destroy();
    })
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  req.user
    .getCart()
    .then(cart => { 
      return cart.getProducts(); // getting 'products' from 'cart' 
    })
    .then(products => {
      return req.user
        .createOrder() // create an order
        .then(order => {
          return order.addProducts( // add products to order as below
            products.map(product => {
              product.orderItem = { quantity: product.cartItem.quantity };
              return product;
            })
          );
        })
        .catch(err => console.log(err));
    })
    .then(result => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders({include: ['products']})
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => console.log(err));
};




// 169. Resetting the Cart Fetching and Output Orders

// controllers/shop.js

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(cart => {
      return cart
        .getProducts()
        .then(products => {
          res.render('shop/cart', {
            path: '/cart',
            pageTitle: 'Your Cart',
            products: products
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }

      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findById(prodId);
    })
    .then(product => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity }
      });
    })
    .then(() => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then(cart => {
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      const product = products[0];
      return product.cartItem.destroy();
    })
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts();
    })
    .then(products => {
      return req.user
        .createOrder()
        .then(order => {
          return order.addProducts(
            products.map(product => {
              product.orderItem = { quantity: product.cartItem.quantity };
              return product;
            })
          );
        })
        .catch(err => console.log(err));
    })
    .then(result => {
      return fetchedCart.setProducts(null); // here we are setting (cartItems) to null
    })
    .then(result => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders({include: ['products']})//see video for what in the parentesis // getOrders(from user in this case, our user, it's a magic from sequelize due to our relations which we set up )
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders // retrive orders
      });
    })
    .catch(err => console.log(err));
};




// 173. What is MongoDB

// It has collections(not tables as in MySQL), and store the data in the database in JSON format(BSON binary JSON behind the scenes, we will use bassicly JSON)




// 174. Relations in NOSQL

// You embed data in other documents like duplicate data 
/* Relations can be: nested/embedded 
                     references */
// Rewatch the video if you wanna see more about

// No Data Schema
// Fewer Data Relations

// MongoDB is very quickly and very flexible, that's why is so popular




// 176. Installing the MongoDB Driver

// npm install --save mongodb (installing mongodb driver )

// /util/database.js

const mongodb = require('mongodb'); // require mongodb
const MongoClient = mongodb.MongoClient; // mongoclient

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/test?retryWrites=true' // the like from database with user and password
  )
  .then(client => {
    console.log('Connected!');
    callback(client);
  })
  .catch(err => {
    console.log(err);
  });
};

module.exports = mongoConnect;


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// const adminRoutes = require('./routes/admin'); comment this routes because they are using sequelize here
// const shopRoutes = require('./routes/shop');  comment this routes because they are using sequelize here

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  // User.findByPk(1)
  // .then(user => {
  //   req.user = user;
  //   next(); 
  // })
  // .catch(err => console.log(err));
});

// app.use('/admin', adminRoutes); comment this routes because they are using sequelize here
// app.use(shopRoutes); comment this routes because they are using sequelize here

app.use(errorController.get404);

mongoConnect((client) => { // connecting to database
  console.log(client);
  app.listen(3000); // starting the application
});




// 177. Creating the Database Connection

// Nothing much




// 178. Finishing the Database Connection

// If there isn't a database when we try to connect to 'it', it will be created automatic, on the fly(I guess)

// /util/database.js

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop?retryWrites=true'
  )
  .then(client => {
    console.log('Connected!');
    _db = client.db();
    callback();
  })
  .catch(err => {
    console.log(err);
    throw err; 
  });
};

const getDb = () => {
  if(_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect; // connecting and then storing the connection to database and this keep on running (this is starting the connection to the database(which means that if we use this one everytime it will create a new connection for every use, which we don't want)
exports.getDb = getDb; // return access to that connect the database if it exists and mongodb it provides sufficent connections for multiple simultaneous interactions with the database(this simple allow us to access the database without creating a new connection everytime we are using the database)


// /models/product.js

const getDb = require('../util/database').getDb; // connecting to the database and get access to database(we can use it to interact with it)

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {

  }
}

// const Product = sequelize.define('product', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.DOUBLE,
//     allowNull: false
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// module.exports = Product;


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  // User.findByPk(1)
  // .then(user => {
  //   req.user = user;
  //   next(); 
  // })
  // .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
// app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => { // we already 'make the connection' to the database, here we are just starting the app
  app.listen(3000);
});




// 179. Using the Database Connection

// /models/product.js

const getDb = require('../util/database').getDb; 

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb(); // this will use the connection to database
    db.collection('products'). // this will create a collection 'products' if not exist one already
      insertOne(this) // and here it will insert to that collection 'this' object
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Product;


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect; // we will use this to connect our app to the database

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  // User.findByPk(1)
  // .then(user => {
  //   req.user = user;
  //   next(); 
  // })
  // .catch(err => console.log(err));
  next();  
});

app.use('/admin', adminRoutes);
// app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => { 
  app.listen(3000);
});




// 180. Creating Products

// app.js

const getDb = require('../util/database').getDb; 

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db.collection('products'). // here we will return the db.collection
      insertOne(this) 
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Product;


// /controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, price, description, imageUrl); // instantiate a new product
  product.save() // and after that save it
    .then(result => {
    // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products'); 
    })
    .catch(err => {
      console.log(err);
  });
};

// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect('/');
//   }
//   const prodId = req.params.productId;
//   req.user
//     .getProducts({where: {id: prodId}})
//     // Product.findByPk(prodId) 
//     .then(products => {
//       const product = products[0];
//       if (!product) {
//         return res.redirect('/');
//       }
//       res.render('admin/edit-product', {
//         pageTitle: 'Edit Product',
//         path: '/admin/edit-product',
//         editing: editMode,
//         product: product
//       });
//     })
//     .catch(err => console.log(err));
// };

// exports.postEditProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedPrice = req.body.price;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedDesc = req.body.description;
//   Product.findByPk(prodId)
//   .then(product => {
//     product.title = updatedTitle;
//     product.price = updatedPrice;
//     product.description = updatedDesc;
//     product.imageUrl = updatedImageUrl;
//     return product.save(); 
//   })
//   .then(result => { 
//     console.log('UPDATED PRODUCT');
//     res.redirect('/admin/products'); 
//   })
//   .catch(err => console.log(err)); 
// };

// exports.getProducts = (req, res, next) => {
//   req.user.getProducts()
//     .then(products => {
//       res.render('admin/products', {
//         prods: products,
//         pageTitle: 'Admin Products',
//         path: '/admin/products'
//       });
//     })
//     .catch(err => console.log(err));
// };

// exports.postDeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.findByPk(prodId) 
//   .then(product => { 
//     return product.destroy(); 
//   })
//   .then(result => {
//     console.log('DESTROYED PRODUCT');
//     res.redirect('/admin/products');
//   })
//   .catch(err => console.log(err));
// };




// 181. Understanding the MongoDB Compass

// download the mongodbcompass and set up the connection to the database




// 182. Fetching All Products

static fetchAll() {
  return db.colletcion('products').find({title: 'A book'}); // this will find in the 'products' collection all the 'documents' with the 'title: 'A Book'', mongo has this method .find();
} 


// /models/product.js

const getDb = require('../util/database').getDb; 

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db.collection('products').
      insertOne(this) 
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('products')
      .find() 
      .toArray()
      .then(products => {
        console.log(products);
        return products; // returning the 'products' from database
      })
      .catch(err => {
        console.log(err);
      }); // this 'find()' it will return all the documents from the collection 'products', and it will not return a 'promise' it will return 'cursor;(an object provided by mongodb), all '.toArray()' it will turn all documents into JS array(we should use this just if we know that there are maximum 100 documents in our collection, otherwise is good to use 'pagination'(we will use it later in the course))
  } 
}

module.exports = Product;


// /controllers/shop.js

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll() // the method we defined to fetch the products from database
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(cart => {
      return cart
        .getProducts()
        .then(products => {
          res.render('shop/cart', {
            path: '/cart',
            pageTitle: 'Your Cart',
            products: products
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }

      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findById(prodId);
    })
    .then(product => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity }
      });
    })
    .then(() => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then(cart => {
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      const product = products[0];
      return product.cartItem.destroy();
    })
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts();
    })
    .then(products => {
      return req.user
        .createOrder()
        .then(order => {
          return order.addProducts(
            products.map(product => {
              product.orderItem = { quantity: product.cartItem.quantity };
              return product;
            })
          );
        })
        .catch(err => console.log(err));
    })
    .then(result => {
      return fetchedCart.setProducts(null);
    })
    .then(result => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders({include: ['products']})
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders 
      });
    })
    .catch(err => console.log(err));
};




// 183. Fetching a Single Product

// /models/product.js

const mongodb = require('mongodb');
const getDb = require('../util/database').getDb; 

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db.collection('products').
      insertOne(this) 
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('products')
      .find()
      .toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
      }); 
  } 
 
  static findById(prodId) { // trying to find a single product by id 
    const db = getDb();
    return db
      .collection('products') // in the collection 'products'
      .find({_id: new mongodb.ObjectId(prodId) }) // in mongodb the id is stored as '_id', in mongodb as well we don't have js objects, that's why we have to translate that to js in some way 'new mongodb.ObjectId(prodId)' just if we are doing this it will fetch that id that we want
      .next() // the find also will return a cursor as a lecture before(for all fetch product) so here we have to use .next() in order to go to the other document
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Product;




// 184. Making the Edit - Delete Buttons Work Again




// 185. Working on the Product Model to Edit our Product

// /models/product.js

const mongodb = require('mongodb');
const getDb = require('../util/database').getDb; 

class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id;
  }

  save() {
    const db = getDb();
    let dbOp; // db operation(s)!?
    if(this._id) {
      // Update the product
      dbOp = db.collection('products').updataOne({_id: new mongodb.ObjectId(this.id)}, {$set: this}); // here it will overwrite all the other fields, just 'id' not
    } else {
      dbOp = db
      .collection('products').insertOne(this)
    }
    return dbOp
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('products')
      .find()
      .toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
      }); 
  } 
 
  static findById(prodId) { 
    const db = getDb();
    return db
      .collection('products') 
      .find({_id: new mongodb.ObjectId(prodId) })
      .next()
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Product;




// 186. Finishing the Upadate Product Code

// /controllers/admin.js

const mongodb = require('mongodb'); // require mongodb
const Product = require('../models/product');

const ObjectId = mongodb.ObjectId; // using for the id 

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, price, description, imageUrl);
  product.
    save()
    .then(result => {
    // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products'); 
    })
    .catch(err => {
      console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    // Product.findByPk(prodId) 
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  
  const product = new Product(
    updatedTitle, 
    updatedPrice, 
    updatedDesc, 
    updatedImageUrl, 
    new ObjectId(prodId)  // it will be the same id
    );
  product
    .save()
    .then(result => { 
      console.log('UPDATED PRODUCT');
      res.redirect('/admin/products'); 
    })
    .catch(err => console.log(err)); 
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()  
    .then(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

// exports.postDeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.findByPk(prodId) 
//   .then(product => { 
//     return product.destroy(); 
//   })
//   .then(result => {
//     console.log('DESTROYED PRODUCT');
//     res.redirect('/admin/products');
//   })
//   .catch(err => console.log(err));
// };




// 187. One Note About Updating Products

// /models/product.js

const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = new mongodb.ObjectId(id); // just here we are using the mongodb.Objectid
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      // Update the product
      dbOp = db
        .collection('products')
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection('products').insertOne(this);
    }
    return dbOp
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('products')
      .find()
      .toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection('products')
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Product;


// /controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, price, description, imageUrl);
  product.
    save()
    .then(result => {
    // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products'); 
    })
    .catch(err => {
      console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    // Product.findByPk(prodId) 
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  
  const product = new Product(
    updatedTitle, 
    updatedPrice, 
    updatedDesc, 
    updatedImageUrl, 
    prodId // here id is just normal without mongodb.ObjectId cause we alredy did that in /models/product.js
    );
  product
    .save()
    .then(result => { 
      console.log('UPDATED PRODUCT');
      res.redirect('/admin/products'); 
    })
    .catch(err => console.log(err)); 
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()  
    .then(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

// exports.postDeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.findByPk(prodId) 
//   .then(product => { 
//     return product.destroy(); 
//   })
//   .then(result => {
//     console.log('DESTROYED PRODUCT');
//     res.redirect('/admin/products');
//   })
//   .catch(err => console.log(err));
// };




// 188. Deleting Products

// models/product.js

const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = new mongodb.ObjectId(id); // just here we are using the mongodb.Objectid
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      // Update the product
      dbOp = db
        .collection('products')
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection('products').insertOne(this);
    }
    return dbOp
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('products')
      .find()
      .toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection('products')
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static deleteById(prodId) { // delete the element by id
    const db = getDb();
    return db
      .collection('products') 
      .deleteOne({_id: new mongodb.ObjectId(prodId)}) // here we have to use mongodb.ObjectId to delete our id
      .then(result => {
        console.log('Deleted');
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Product;


// /controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, price, description, imageUrl);
  product.
    save()
    .then(result => {
    // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products'); 
    })
    .catch(err => {
      console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    // Product.findByPk(prodId) 
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  
  const product = new Product(
    updatedTitle, 
    updatedPrice, 
    updatedDesc, 
    updatedImageUrl, 
    prodId
    );
  product
    .save()
    .then(result => { 
      console.log('UPDATED PRODUCT');
      res.redirect('/admin/products'); 
    })
    .catch(err => console.log(err)); 
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()  
    .then(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId) // here we just call Product.deleteById(with our id)
  .then(() => {
    console.log('DESTROYED PRODUCT');
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};




// 189. Fixing the Add Product Functionality

// /models/product.js

const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id ? new mongodb.ObjectId(id) : null; // this is the change
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      // Update the product
      dbOp = db
        .collection('products')
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection('products').insertOne(this);
    }
    return dbOp
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('products')
      .find()
      .toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection('products')
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static deleteById(prodId) {
    const db = getDb();
    return db
      .collection('products')
      .deleteOne({_id: new mongodb.ObjectId(prodId)})
      .then(result => {
        console.log('Deleted');
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Product;




// 190. Creating New Users

// /models/user.js

const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new Object(userId) });
  }
}

module.exports = User;


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect; 
const User = require('./models/user'); // require the 'user' model

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById("5c384fdd8cb36a173893c1d1") // we already know that we have a user cause we created and stored to our database, with that id
  .then(user => {
    req.user = user; // here we save that user to request
    next(); 
  })
  .catch(err => console.log(err));
  next();  
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000);
});




// 191. Storing the User in our Database

// /models/user.js

const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) })
      .then(user => {
        console.log(user);
        return user; // here we are returning the user
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = User;


// /controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(
    title, 
    price, 
    description, 
    imageUrl, 
    null, // null for the prodId(cause it will be generated by the database)
    req.user._id // this is the userId which we take it from req.user
    ); 
  product.
    save()
    .then(result => {
    // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products'); 
    })
    .catch(err => {
      console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    // Product.findByPk(prodId) 
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  
  const product = new Product(
    updatedTitle, 
    updatedPrice, 
    updatedDesc, 
    updatedImageUrl, 
    prodId
    );
  product
    .save()
    .then(result => { 
      console.log('UPDATED PRODUCT');
      res.redirect('/admin/products'); 
    })
    .catch(err => console.log(err)); 
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()  
    .then(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId)
  .then(() => {
    console.log('DESTROYED PRODUCT');
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect; 
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById("5c384fdd8cb36a173893c1d1")
  .then(user => {
    req.user = user;
    next();  // here we are using just one next for this midlleware
  })
  .catch(err => console.log(err)); 
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000);
});




// 192. Working on Cart Items Orders

// we can embedd 'documents' in our element, so in this case we don't need 'cart'(s) to hold our information about each user's 'cards' so we can delete from /models, cart.js and cart-item.js

// /models/user.js

const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart, id) { // we will have a 'cart' for each user
    this.name = username;
    this.email = email;
    this.cart = cart; // {items: []}
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  addToCart(product) {
    // const cartProduct = this.cart.items.findIndex(cp => {
    //   return cp._id === product._id; // here we are looking to see if the product we want to add it's already in the cart
    // });
    const updatedCart = {items: [{ ...product, quantity: 1 }] };
    const db = getDb();
    return db
    .collection('users')
    .updateOne(
        { _id: new ObjectId(this._id) }, 
        { $set: {cart: updatedCart} }
      );
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) })
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = User;




// 193. Adding the Add to Cart Functionality

// /controllers/shop.js

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll() // the method we defined to fetch the products from database
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(cart => {
      return cart
        .getProducts()
        .then(products => {
          res.render('shop/cart', {
            path: '/cart',
            pageTitle: 'Your Cart',
            products: products
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId; 
  Product.findById(prodId).then(product => { 
    return req.user.addToCart(product) // here we are finding the product with that id and adding to user from request to the cart
  }).then(result => {
    console.log(result);
  });
  // let fetchedCart;
  // let newQuantity = 1;
  // req.user
  //   .getCart()
  //   .then(cart => {
  //     fetchedCart = cart;
  //     return cart.getProducts({ where: { id: prodId } });
  //   })
  //   .then(products => {
  //     let product;
  //     if (products.length > 0) {
  //       product = products[0];
  //     }

  //     if (product) {
  //       const oldQuantity = product.cartItem.quantity;
  //       newQuantity = oldQuantity + 1;
  //       return product;
  //     }
  //     return Product.findById(prodId);
  //   })
  //   .then(product => {
  //     return fetchedCart.addProduct(product, {
  //       through: { quantity: newQuantity }
  //     });
  //   })
  //   .then(() => {
  //     res.redirect('/cart');
  //   })
  //   .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then(cart => {
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      const product = products[0];
      return product.cartItem.destroy();
    })
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts();
    })
    .then(products => {
      return req.user
        .createOrder()
        .then(order => {
          return order.addProducts(
            products.map(product => {
              product.orderItem = { quantity: product.cartItem.quantity };
              return product;
            })
          );
        })
        .catch(err => console.log(err));
    })
    .then(result => {
      return fetchedCart.setProducts(null);
    })
    .then(result => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders({include: ['products']})
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders 
      });
    })
    .catch(err => console.log(err));
};


// /models/user.js

const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart, id) { // we will have a 'cart' for each user
    this.name = username;
    this.email = email;
    this.cart = cart; // {items: []}
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  addToCart(product) {
    // const cartProduct = this.cart.items.findIndex(cp => {
    //   return cp._id === product._id; // here we are looking to see if the product we want to add it's already in the cart
    // });
    const updatedCart = {
      items: [{ productId: new ObjectId(product._id), quantity: 1 }] // here we are add to the cart just the product._id
    };
    const db = getDb();
    return db
    .collection('users')
    .updateOne(
        { _id: new ObjectId(this._id) }, 
        { $set: {cart: updatedCart} }
      );
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) })
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = User;


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect; 
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById("5c384fdd8cb36a173893c1d1")
  .then(user => {
    req.user = new User(user.name, user.email, user.cart, user._id); // in this way we will can work with all the user properties(earlier we just stored here just an 'object' from the database with that id but we couldn't work with it's properties)
    next(); 
  })
  .catch(err => console.log(err)); 
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000);
});




// 194. Storing Multiple Products in the Cart

// /models/user.js

const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart, id) {
    this.name = username;
    this.email = email;
    this.cart = cart; // {items: []}
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  addToCart(product) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.productId.toString() === product._id.toString();
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];

    if (cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
      updatedCartItems.push({
        productId: new ObjectId(product._id),
        quantity: newQuantity
      });
    }
    const updatedCart = {
      items: updatedCartItems
    };
    const db = getDb();
    return db
      .collection('users')
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) })
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = User;

// Reread this lesson!!!




// 195. Displaying the Cart Items

// /models/user.js

const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart, id) {
    this.name = username;
    this.email = email;
    this.cart = cart; // {items: []}
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  addToCart(product) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.productId.toString() === product._id.toString();
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];

    if (cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
      updatedCartItems.push({
        productId: new ObjectId(product._id),
        quantity: newQuantity
      });
    }
    const updatedCart = {
      items: updatedCartItems
    };
    const db = getDb();
    return db
      .collection('users')
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }

  getCart() { // add getCart method
    const db = getDb();
    const productIds = this.cart.items.map(i => {
      return i.productId;
    });
    return db
      .collection('products')
      .find({_id: {$in: productIds}})
      .toArray()
      .then(products => {
        return products.map(p => {
          return {...p,
             quantity: this.cart.items.find(i => {
              return i.productId.toString() === p._id.toString();
            }).quantity
          };
        });
      });
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) })
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = User;


// /controllers/shop.js

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll() // the method we defined to fetch the products from database
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()// here we get the cart already populated with information
    .then(products => {
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId; 
  Product.findById(prodId).then(product => { 
    return req.user.addToCart(product);
  }).then(result => {
    console.log(result);
  });
  // let fetchedCart;
  // let newQuantity = 1;
  // req.user
  //   .getCart()
  //   .then(cart => {
  //     fetchedCart = cart;
  //     return cart.getProducts({ where: { id: prodId } });
  //   })
  //   .then(products => {
  //     let product;
  //     if (products.length > 0) {
  //       product = products[0];
  //     }

  //     if (product) {
  //       const oldQuantity = product.cartItem.quantity;
  //       newQuantity = oldQuantity + 1;
  //       return product;
  //     }
  //     return Product.findById(prodId);
  //   })
  //   .then(product => {
  //     return fetchedCart.addProduct(product, {
  //       through: { quantity: newQuantity }
  //     });
  //   })
  //   .then(() => {
  //     res.redirect('/cart');
  //   })
  //   .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then(cart => {
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      const product = products[0];
      return product.cartItem.destroy();
    })
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts();
    })
    .then(products => {
      return req.user
        .createOrder()
        .then(order => {
          return order.addProducts(
            products.map(product => {
              product.orderItem = { quantity: product.cartItem.quantity };
              return product;
            })
          );
        })
        .catch(err => console.log(err));
    })
    .then(result => {
      return fetchedCart.setProducts(null);
    })
    .then(result => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders({include: ['products']})
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders 
      });
    })
    .catch(err => console.log(err));
};




// 196. Fixing a Bug

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll() // the method we defined to fetch the products from database
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(products => {
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId; 
  Product.findById(prodId).then(product => { 
    return req.user.addToCart(product);
  }).then(result => {
    console.log(result);
    res.redirect('/cart'); // redirect to '/cart' when you add something into Cart
  });
  // let fetchedCart;
  // let newQuantity = 1;
  // req.user
  //   .getCart()
  //   .then(cart => {
  //     fetchedCart = cart;
  //     return cart.getProducts({ where: { id: prodId } });
  //   })
  //   .then(products => {
  //     let product;
  //     if (products.length > 0) {
  //       product = products[0];
  //     }

  //     if (product) {
  //       const oldQuantity = product.cartItem.quantity;
  //       newQuantity = oldQuantity + 1;
  //       return product;
  //     }
  //     return Product.findById(prodId);
  //   })
  //   .then(product => {
  //     return fetchedCart.addProduct(product, {
  //       through: { quantity: newQuantity }
  //     });
  //   })
  //   .then(() => {
  //     res.redirect('/cart');
  //   })
  //   .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then(cart => {
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      const product = products[0];
      return product.cartItem.destroy();
    })
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts();
    })
    .then(products => {
      return req.user
        .createOrder()
        .then(order => {
          return order.addProducts(
            products.map(product => {
              product.orderItem = { quantity: product.cartItem.quantity };
              return product;
            })
          );
        })
        .catch(err => console.log(err));
    })
    .then(result => {
      return fetchedCart.setProducts(null);
    })
    .then(result => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders({include: ['products']})
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders 
      });
    })
    .catch(err => console.log(err));
};




// 197. Deleting Cart Items

// /models/user.js

const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart, id) {
    this.name = username;
    this.email = email;
    this.cart = cart; // {items: []}
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  addToCart(product) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.productId.toString() === product._id.toString();
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];

    if (cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
      updatedCartItems.push({
        productId: new ObjectId(product._id),
        quantity: newQuantity
      });
    }
    const updatedCart = {
      items: updatedCartItems
    };
    const db = getDb();
    return db
      .collection('users')
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }

  getCart() {
    const db = getDb();
    const productIds = this.cart.items.map(i => {
      return i.productId;
    });
    return db
      .collection('products')
      .find({ _id: { $in: productIds } })
      .toArray()
      .then(products => {
        return products.map(p => {
          return {
            ...p,
            quantity: this.cart.items.find(i => {
              return i.productId.toString() === p._id.toString();
            }).quantity
          };
        });
      });
  }

  deleteItemFromCart(productId) {
    const updatedCartItems = this.cart.items.filter(item => {
      return item.productId.toString() !== productId.toString(); // select all the items which has no that id 
    });
    const db = getDb();
    return db 
      .collection('users')
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: {items: updatedCartItems} } } // update the database without that item
      );
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) })
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = User;




// 198. Adding an Order

// /models/user.js

const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart, id) {
    this.name = username;
    this.email = email;
    this.cart = cart; // {items: []}
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  addToCart(product) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.productId.toString() === product._id.toString();
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];

    if (cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
      updatedCartItems.push({
        productId: new ObjectId(product._id),
        quantity: newQuantity
      });
    }
    const updatedCart = {
      items: updatedCartItems
    };
    const db = getDb();
    return db
      .collection('users')
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }

  getCart() {
    const db = getDb();
    const productIds = this.cart.items.map(i => {
      return i.productId;
    });
    return db
      .collection('products')
      .find({ _id: { $in: productIds } })
      .toArray()
      .then(products => {
        return products.map(p => {
          return {
            ...p,
            quantity: this.cart.items.find(i => {
              return i.productId.toString() === p._id.toString();
            }).quantity
          };
        });
      });
  }

  deleteItemFromCart(productId) {
    const updatedCartItems = this.cart.items.filter(item => {
      return item.productId.toString() !== productId.toString(); 
    });
    const db = getDb();
    return db 
      .collection('users')
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: {items: updatedCartItems} } } 
      );
  }

  addOrder() {
    const db = getDb();
    return db.collection('orders').insertOne(this.cart).then(result => { // here we are inserting the cart into this 'order' method and creating a new collection 'orders'
      this.cart = {items: []}; // empty the cart
      return db 
      .collection('users')
      .updateOne( // updating the database with the cart empty
        { _id: new ObjectId(this._id) },
        { $set: { cart: {items: []} } }  
      );
    });   
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) })
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = User;


// /controllers/shop.js

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(products => {
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .deleteItemFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .addOrder()
    .then(result => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders({ include: ['products'] })
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => console.log(err));
};




// 199. Adding Relation Order Data

const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart, id) {
    this.name = username;
    this.email = email;
    this.cart = cart; // {items: []}
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  addToCart(product) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.productId.toString() === product._id.toString();
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];

    if (cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
      updatedCartItems.push({
        productId: new ObjectId(product._id),
        quantity: newQuantity
      });
    }
    const updatedCart = {
      items: updatedCartItems
    };
    const db = getDb();
    return db
      .collection('users')
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }

  getCart() {
    const db = getDb();
    const productIds = this.cart.items.map(i => {
      return i.productId;
    });
    return db
      .collection('products')
      .find({ _id: { $in: productIds } })
      .toArray()
      .then(products => {
        return products.map(p => {
          return {
            ...p,
            quantity: this.cart.items.find(i => {
              return i.productId.toString() === p._id.toString();
            }).quantity
          };
        });
      });
  }

  deleteItemFromCart(productId) {
    const updatedCartItems = this.cart.items.filter(item => {
      return item.productId.toString() !== productId.toString();
    });
    const db = getDb();
    return db
      .collection('users')
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: { items: updatedCartItems } } }
      );
  }

  addOrder() {
    const db = getDb();
    return this.getCart()
      .then(products => {
        const order = {
          items: products,
          user: {
            _id: new ObjectId(this._id),
            name: this.name
          }
        };
        return db.collection('orders').insertOne(order);
      })
      .then(result => {
        this.cart = { items: [] };
        return db
          .collection('users')
          .updateOne(
            { _id: new ObjectId(this._id) },
            { $set: { cart: { items: [] } } }
          );
      });
  }

  getOrders() {
    const db = getDB();
    // return db.collection('orders').
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) })
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = User;




// 200. Getting Orders

// /models/user.js

const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart, id) {
    this.name = username;
    this.email = email;
    this.cart = cart; // {items: []}
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  addToCart(product) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.productId.toString() === product._id.toString();
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];

    if (cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
      updatedCartItems.push({
        productId: new ObjectId(product._id),
        quantity: newQuantity
      });
    }
    const updatedCart = {
      items: updatedCartItems
    };
    const db = getDb();
    return db
      .collection('users')
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }

  getCart() {
    const db = getDb();
    const productIds = this.cart.items.map(i => {
      return i.productId;
    });
    return db
      .collection('products')
      .find({ _id: { $in: productIds } })
      .toArray()
      .then(products => {
        return products.map(p => {
          return {
            ...p,
            quantity: this.cart.items.find(i => {
              return i.productId.toString() === p._id.toString();
            }).quantity
          };
        });
      });
  }

  deleteItemFromCart(productId) {
    const updatedCartItems = this.cart.items.filter(item => {
      return item.productId.toString() !== productId.toString();
    });
    const db = getDb();
    return db
      .collection('users')
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: { items: updatedCartItems } } }
      );
  }

  addOrder() {
    const db = getDb();
    return this.getCart()
      .then(products => {
        const order = {
          items: products,
          user: {
            _id: new ObjectId(this._id),
            name: this.name
          }
        };
        return db.collection('orders').insertOne(order);
      })
      .then(result => {
        this.cart = { items: [] };
        return db
          .collection('users')
          .updateOne(
            { _id: new ObjectId(this._id) },
            { $set: { cart: { items: [] } } }
          );
      });
  }

  getOrders() {
    const db = getDb();
    return db
      .collection('orders')
      .find({'user._id': new ObjectId(this._id)}) // return all the orders for this user
      .toArray();
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) })
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = User;




// 201. Removing Deleted Items From the Cart




// 207. Connecting to the MongoDB Server with Mongoose

// npm install --save mongoose  // download the mongoose 

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5baa2528563f16379fc8a610')
    .then(user => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose // with this we connecting to our database, mongoose will manage behind the scenes the connection with our database
  .connect(
    'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/test?retryWrites=true'
  )
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });



// 208. Creating the Product Schema

// /models/product.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({ // here to input an object, how your data you want to look like, and you define Schema with simple key-value pairs
  title: {   // Schema for an object that has title of type  String
    type: String,
    required: true // this for every object to have a title
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
}); // we don't add id or _id because this will be added automatically as an object ID




// 209. Saving Data Through Mongoose

// /models/product.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({ 
  title: {  
    type: String,
    required: true 
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
}); 

module.exports = mongoose.model('Product', productSchema) // model is important for mongoose, behind the scenes to connect a schema, a blueprint with a name bsically. this model is what we'll work with in our code, mongoose will create a collection as 'products' from name model 'Product'


// /controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title, 
    price: price, 
    description: description,
    imageUrl: imageUrl
  }); 
  product.
    save() // our model which we created in /models/product.js has a method 'save()' (from mongoose(provided by mongoose)), this is not define by us  
    .then(result => {
    // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products'); 
    })
    .catch(err => {
      console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    // Product.findByPk(prodId) 
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  
  const product = new Product(
    updatedTitle, 
    updatedPrice, 
    updatedDesc, 
    updatedImageUrl, 
    prodId
    );
  product
    .save()
    .then(result => { 
      console.log('UPDATED PRODUCT');
      res.redirect('/admin/products'); 
    })
    .catch(err => console.log(err)); 
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()  
    .then(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId)
  .then(() => {
    console.log('DESTROYED PRODUCT');
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
// const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   User.findById('5baa2528563f16379fc8a610')
//     .then(user => {
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch(err => console.log(err));
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose 
  .connect(
    'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop?retryWrites=true' // mongoose will create the database as 'shop' how we name it after .mongodb.net/"shop"?retry.., with this link we are connecting to our database
  )
  .then(result => {
    app.listen(3000); // as a result we are starting our application
  })
  .catch(err => {
    console.log(err);
  });




// 210. Fetching All Products

// /controllers/shop.js

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.find() // here we are using 'find()' which will bring our 'products' from the database (find() it's a buit in method of mongoose)
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.find() // here we are using 'find()' which will bring our 'products' from the database (find() it's a buit in method of mongoose)
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(products => {
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .deleteItemFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .addOrder()
    .then(result => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders()
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => console.log(err));
};




// 211 Fetching a Single Product

// /controllers/shop.js

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId) // here findById it's defined by mongoose
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(products => {
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .deleteItemFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .addOrder()
    .then(result => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders()
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => console.log(err));
};




// 212. Updating Products

// /controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title, 
    price: price, 
    description: description,
    imageUrl: imageUrl
  }); 
  product.
    save() 
    .then(result => {
    // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products'); 
    })
    .catch(err => {
      console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId) // findById() buit in method of mongoose
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  
  Product.findById(prodId) // here we are bringing that 'product' from database
    .then(product => {
      product.title = updatedTitle; // we are updating the product with everything we want
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      product.save() // and after that we are just saving the product in the database with the '.save()' (buit-in mongoose method)
    })
    .then(result => { 
      console.log('UPDATED PRODUCT');
      res.redirect('/admin/products'); 
    })
    .catch(err => console.log(err)); 
};

exports.getProducts = (req, res, next) => {
  Product.find() // find it's a method from mongoose
    .then(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId)
  .then(() => {
    console.log('DESTROYED PRODUCT');
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};




// 213. Deteting Products

// /controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title, 
    price: price, 
    description: description,
    imageUrl: imageUrl
  }); 
  product.
    save() 
    .then(result => {
    // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products'); 
    })
    .catch(err => {
      console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  
  Product.findById(prodId) 
    .then(product => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      product.save() 
    })
    .then(result => { 
      console.log('UPDATED PRODUCT');
      res.redirect('/admin/products'); 
    })
    .catch(err => console.log(err)); 
};

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndRemove(prodId) // built-in method of mongoose that should remove a document
  .then(() => {
    console.log('DESTROYED PRODUCT');
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};




// 214. Adding and Using a User Model

// /models/user.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({ // here we are creating a userSchema 'model'
  name: { 
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true
  },
  cart: { // here we are embedded a 'collection' cart which has items
    items: [
      {
        productId: { type: Schema.Types.ObjectId, required: true }, // type: Schema.Types.ObjectId means that the product id will hold an ID of a product in our case
        quantity: { type: Number, required: true } 
      }
    ]
  }
});

module.exports = mongoose.model('User', userSchema); // this will create a collection in the database 'users' cause of 'User'




// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5c3db72f04b84d2068ef4f14') // here we are looking in the database for the user with that id
    .then(user => {
      req.user = user ; // here we are assing to any request, our user which was found in the database, here 'user' is a full mongoose model
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose 
  .connect(
    'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop?retryWrites=true' 
  )
  .then(result => {
    User.findOne().then(user => { // findOne() with no arguments will give me the first item it finds, in this case the first User
      if(!user) { // it will be create a user, if the is none in the database
        const user = new User({ // before we are starting the app, we are creating an user through our User Model(we are creating manually this user, in some way behind the scenes)
          name: 'Max',
          email: 'max@test.com',
          cart: {
            items: [] // at the beggining the cart items of this user is empty
          }
        });
        user.save(); // here we are saving the user(all of this stuff is done when we are starting the server)
      }
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });




// 215. Using Relations in Mongoose

// /models/product.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({ 
  title: {  
    type: String,
    required: true 
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  userId: {  // here we are adding a userId
    type: Schema.Types.ObjectId, // this ObjectId could be the ObjectId of any object
    ref: 'User', // here we are refering to the 'User' model, and here we've got a relation set up
    required: true
  }
}); 

module.exports = mongoose.model('Product', productSchema) 


// /models/user.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({ 
  name: { 
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true
  },
  cart: { 
    items: [
      {
        productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true }, // ref: means that we are refering to the 'Product' model
        quantity: { type: Number, required: true } 
      }
    ]
  }
});

module.exports = mongoose.model('User', userSchema); 


// /controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title, 
    price: price, 
    description: description,
    imageUrl: imageUrl,
    userId: req.user // here we are assinging the userId to the new product to be the 'user._id' which we set in the request (req.user._id) but here we can assign just req.user cause mongoose will pick the '_id' from that object
  }); 
  product.
    save() 
    .then(result => {
    // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products'); 
    })
    .catch(err => {
      console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  
  Product.findById(prodId) 
    .then(product => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      product.save() 
    })
    .then(result => { 
      console.log('UPDATED PRODUCT');
      res.redirect('/admin/products'); 
    })
    .catch(err => console.log(err)); 
};

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndRemove(prodId) 
  .then(() => {
    console.log('DESTROYED PRODUCT');
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};




// 216. One Important Thing About Fetching Relations

// Rewatch if you want



// 217. Working on the Shopping Card

// /models/user.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({ 
  name: { 
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true
  },
  cart: { 
    items: [
      {
        productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true }, 
        quantity: { type: Number, required: true } 
      }
    ]
  }
});
 
userSchema.methods.addToCart = function(product) { // userSchema.methods allow us to add our methods to Schema
  const cartProductIndex = this.cart.items.findIndex(cp => {
    return cp.productId.toString() === product._id.toString();
  });
  let newQuantity = 1;
  const updatedCartItems = [...this.cart.items];

  if (cartProductIndex >= 0) {
    newQuantity = this.cart.items[cartProductIndex].quantity + 1;
    updatedCartItems[cartProductIndex].quantity = newQuantity;
  } else {
    updatedCartItems.push({
      productId: product._id,
      quantity: newQuantity
    });
  }
  const updatedCart = {
    items: updatedCartItems
  };
  this.cart = updatedCart;
  return this.save(); // here we are saving to the database
}

module.exports = mongoose.model('User', userSchema); 




// 218. Loading the Cart

// /controllers/shop.js

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId) // here findById it's defined by mongoose
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.productId') // here we are populating with data from (user.cart.items.productId)
    .execPopulate() // cause the '.populate' does not return a promise we have to do '.execPopulate()'
    .then(user => {
      const products = user.cart.items; 
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .deleteItemFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .addOrder()
    .then(result => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders()
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => console.log(err));
};




// 219. Deleting Cart Items

// /models/user.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: { type: Number, required: true }
      }
    ]
  }
});

userSchema.methods.addToCart = function(product) {
  const cartProductIndex = this.cart.items.findIndex(cp => {
    return cp.productId.toString() === product._id.toString();
  });
  let newQuantity = 1;
  const updatedCartItems = [...this.cart.items];

  if (cartProductIndex >= 0) {
    newQuantity = this.cart.items[cartProductIndex].quantity + 1;
    updatedCartItems[cartProductIndex].quantity = newQuantity;
  } else {
    updatedCartItems.push({
      productId: product._id,
      quantity: newQuantity
    });
  }
  const updatedCart = {
    items: updatedCartItems
  };
  this.cart = updatedCart;
  return this.save();
};

userSchema.methods.removeFromCart = function(productId) { // 
  const updatedCartItems = this.cart.items.filter(item => {
    return item.productId.toString() !== productId.toString(); // creating a new array without the element we want to delete
  });
  this.cart.items = updatedCartItems; // assing that array to actual cart
  return this.save(); // save to the database
}

module.exports = mongoose.model('User', userSchema);




// 220. Creating Getting Orders

// /models/order.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [
    {
    product: { type: Object, require: true },
    quantity: { type: Number, require: true }
   }
  ],
  user: {
    name: {
      type: String,
      required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}
});

module.exports = mongoose.model('Order', orderSchema)


// /controllers/shop.js

const Product = require('../models/product');
const Order = require('../models/order'); // require 'Order' model

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId) 
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.productId') 
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  req.user 
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: i.productId }
      });
      const order = new Order({
        user: {
          name: req.user.name,
          userId: req.user // mongoose will pick the ID from 'req.user' by itself
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders()
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => console.log(err));
};




// 221. Storing All Order Related Data

// /controllers/shop.js

const Product = require('../models/product');
const Order = require('../models/order');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId) 
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.productId') 
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  req.user 
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      console.log(user.cart.items);
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: { ...i.productId._doc } } // rewatch again
      });
      const order = new Order({
        user: {
          name: req.user.name,
          userId: req.user
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders()
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => console.log(err));
};




// 222. Clearing the Cart After Storing an Order

// /models/user.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: { type: Number, required: true }
      }
    ]
  }
});

userSchema.methods.addToCart = function(product) {
  const cartProductIndex = this.cart.items.findIndex(cp => {
    return cp.productId.toString() === product._id.toString();
  });
  let newQuantity = 1;
  const updatedCartItems = [...this.cart.items];

  if (cartProductIndex >= 0) {
    newQuantity = this.cart.items[cartProductIndex].quantity + 1;
    updatedCartItems[cartProductIndex].quantity = newQuantity;
  } else {
    updatedCartItems.push({
      productId: product._id,
      quantity: newQuantity
    });
  }
  const updatedCart = {
    items: updatedCartItems
  };
  this.cart = updatedCart;
  return this.save();
};

userSchema.methods.removeFromCart = function(productId) {
  const updatedCartItems = this.cart.items.filter(item => {
    return item.productId.toString() !== productId.toString();
  });
  this.cart.items = updatedCartItems;
  return this.save();
};

userSchema.methods.clearCart = function() { // removing the cart 
  this.cart = { items: [] };
  return this.save();
};

module.exports = mongoose.model('User', userSchema);

module.exports = mongoose.model('User', userSchema);


// controllers/shop.js

const Product = require('../models/product');
const Order = require('../models/order');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId) 
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.productId') 
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: { ...i.productId._doc } };
      });
      const order = new Order({
        user: {
          name: req.user.name,
          userId: req.user
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      return req.user.clearCart(); // after ordering we have to clear the cart
    })
    .then(() => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders()
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => console.log(err));
};




// 223. Getting Displaying the Orders

// /controllers/shop.js

const Product = require('../models/product');
const Order = require('../models/order');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: { ...i.productId._doc } };
      });
      const order = new Order({
        user: {
          name: req.user.name,
          userId: req.user
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      return req.user.clearCart();
    })
    .then(() => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  Order.find({ 'user.userId': req.user._id }) // taking the 
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => console.log(err));
};

// Rewatch the last 2 or three videos




// 227. What is a Cookie?

// Cookies are stored on the client-side!

// Cookies are information about a user, for example when someone is logging on a page the server send some data related to that user in the browser so when he's doing new request to the server to stay logged in on the page with he's credentials 




// 230. Adding the Request Driven Login Solution

// /controllers/auth.js

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: req.isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  req.isLoggedIn = true; // here we want to say that user is logged in ( if we don't set 'true' by default it will define as 'false'), but it will be alive just for one request(the POST requst in this case), it will not work for any else request
  res.redirect('/');
};




// 231. Setting a Cookie

// With the cookie we can store data in the browser for a single user customize for that user

// /cotrollers/auth.js

exports.getLogin = (req, res, next) => {
  const isLoggedIn = req
  .get('Cookie')
  .split(';')[0]
  .trim()
  .split('=')[1]; // here we get from the cookie which is in the request(any request), the value 'true' in our case 
  console.log(isLoggedIn)
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader('Set-Cookie', 'loggedIn=true'); // here we are setting a cookie which will be stored in the browser, usually the cookies are set as key-value in our case 'loggedIn=true', after we set up the cookie and it will be stored in the browswer, the browser it will send that cookie with any request to the server
  res.redirect('/');
};




// 232. Manipulating Cookies

// Sensitive data should not be stored in the browser because the users can manipulate them.
// We can manipulate our cookies from the browser or in the browser.




// 233. Configuring Cookies

// Cookies are also used to track user, we can send cookies to another page as well, this a common instrument in tracking


// /controlleres/auth.js

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req
  // // .get('Cookie')
  // // .split(';')[0]
  // // .trim()
  // // .split('=')[1] === 'true'; 
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader('Set-Cookie', 'loggedIn=true; HttpOnly'); // if we don't an expire date for our cookie, it will expire when we close our browser, "Max-Age=10" it will keep the cookie created just for 10 seconds(this 10), "Secure" as an argument for a cookie which we are setting up means that this cookie will be set up just for an HTTPS protocol, "HttpOnly" will create the cookie just for HTTP protocol(I guess) and we can't acces this cookie value from JavaScript from the browser(this an important security mechanism because it protects us against cross-site scripting attacts)
  res.redirect('/');
}; 




// 234. What is a Session?

// Session is a construct that contain information(sensivie data or the credentials) about user which will be stored in the backend(database in the end) and a client should tell the server to which session he is belonging and we will use a cookie where we will store the ID of the session in an encrypted way 




// 235. Initializing th Session Middleware

// npm install --save express-session -- this third package will help us with managing sessions

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session'); // importing express-session

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'my secret', resave: false, saveUninitialized: false}));  // 'secret' is used for singing the hash which secretly stores our ID in the cookie, usually or in production should be a long string, 'resave: false' means that the session will not be saved on every request which is done (and every response that is send), 'savedUnitialized: false' ensures that no session gets saved for a request where it doesn't need to be saved(cause nothing was change about it *!?) also you can  set a cookie but you can go with the default settings as well(this session is written in memory)

app.use((req, res, next) => {
  User.findById('5c3db72f04b84d2068ef4f14') 
    .then(user => {
      req.user = user ; 
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);  

app.use(errorController.get404);

mongoose 
  .connect(
    'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop?retryWrites=true' 
  )
  .then(result => {
    User.findOne().then(user => { 
      if(!user) { 
        const user = new User({ 
          name: 'Max',
          email: 'max@test.com',
          cart: {
            items: [] 
          }
        });
        user.save(); 
      }
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });




// 236. Using the Session Middleware  

// /controllers/auth.js

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req
  // // .get('Cookie')
  // // .split(';')[0]
  // // .trim()
  // // .split('=')[1] === 'true'; 
  console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true; // this will create a session cookie(which will expire when you'll close the browser) and this will identify our user(single user in this case) if you work from another browser you'll be see as a new user and you'll cannot access this session
  res.redirect('/');
}; 

// this session cookie is saved across requests but not across users




// 237. Using MongoDB to Store Sessions

// npm install --save connect-mongodb-session    this package will help us to store sessions into the database


const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session); // importing connect-mongodb-session which will give us a function and we will pass the session(express-session which imported a line above) as argument to that function

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI = 'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop'; // the connection URI to our mongo database

const app = express();

const store = new MongoDBStore({ // here we are connecting our sessions to the database
  uri: MONGODB_URI, // the connection URI to our mongo database
  collection: 'sessions' // creating a collection 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret', 
    resave: false, 
    saveUninitialized: false, 
    store: store // 'store: store' means that all the sessions will be stored in our databese which was define in 'store' variable above
  })
); 

app.use((req, res, next) => {
  User.findById('5c3db72f04b84d2068ef4f14') 
    .then(user => {
      req.user = user ; 
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);  

app.use(errorController.get404);

mongoose 
  .connect(
    MONGODB_URI // the connection URI to our mongo database 
  )
  .then(result => {
    User.findOne().then(user => { 
      if(!user) { 
        const user = new User({ 
          name: 'Max',
          email: 'max@test.com',
          cart: {
            items: [] 
          }
        });
        user.save(); 
      }
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });




// 238. Sessions Cookies - A Short Summary

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session); 

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI = 'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop'; 

const app = express();

const store = new MongoDBStore({ 
  uri: MONGODB_URI, 
  collection: 'sessions' 
});

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret', 
    resave: false, 
    saveUninitialized: false, 
    store: store // this middleware will automatically set a cookie for us and automatically reads the cookie for us as well
  })
); 

app.use((req, res, next) => {
  User.findById('5c3db72f04b84d2068ef4f14') 
    .then(user => {
      req.user = user ; 
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);  

app.use(errorController.get404);

mongoose 
  .connect(
    MONGODB_URI 
  )
  .then(result => {
    User.findOne().then(user => { 
      if(!user) { 
        const user = new User({ 
          name: 'Max',
          email: 'max@test.com',
          cart: {
            items: [] 
          }
        });
        user.save(); 
      }
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });






// Assignment 

// /controllers/auth.js

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req
  // // .get('Cookie')
  // // .split(';')[0]
  // // .trim()
  // // .split('=')[1] === 'true'; 
  console.log(req.session.isLoggedIn); 
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('5c3db72f04b84d2068ef4f14') 
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user; // here we are assing the user to the session not any to the request, this will be the 'user' middleware isn't in the app.js anymore 
      res.redirect('/');
    })
    .catch(err => console.log(err));
  
}; 




exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    userId: req.session.user // here we are asking for req.session.user, not for req.user anymore
  });
  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err);
    });
};




// 239. Deleting a Cookie  

// /controllers/auth.js

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req
  // // .get('Cookie')
  // // .split(';')[0]
  // // .trim()
  // // .split('=')[1] === 'true'; 
  console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('5c3db72f04b84d2068ef4f14') 
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user; 
      res.redirect('/');
    })
    .catch(err => console.log(err)); 
}; 

exports.postLogout = (req, res, next) => {
 req.session.destroy((err) => {  // this will destroy the session(destroy is from the session packege that we are using)
  console.log(err); // here we are conosle any error that can occur
  res.redirect('/');
 });
}; 




// 240. Fixing Some Minor Bugs

// Without a valid session, the middlewares which used information from the session will not work



// 241. Making Add to Cart Work Again

// with the session we are not fetching the user model as we did before when the mongoose gave us the user model in every req(request), the session is giving us just the information about the user, not the user model 
// and to solve this problem we we'll do almost we did before 

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop'

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

app.use((req, res, next) => {
  if(!req.session.user){ // if there is no 'user' it will execute the next middleware(it will not give us an error if there is not a session)
    return next();
  }
  User.findById(req.session.user._id) // here the id of the user we are taking it from session
    .then(user => {
      req.user = user; // here we're getting a mongoose user(with all the methods that user model has)
      next();
    })
    .catch(err => console.log(err)); 
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Max',
          email: 'max@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });


// /controllers/shop.js

exports.getCart = (req, res, next) => {
  req.user // here we are using the 'user' from 'req.user' because we are executing some methods on the 'user mode', and we are doing this everywhere we need to implement this
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products,
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

// /controllers/admin.js

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    userId: req.user // and here as well
  });
  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err);
    });
};


// 242. Two Tiny Improvments

// /controllers/auth.js

exports.postLogin = (req, res, next) => {
  User.findById('5bab316ce0a7c75f783cb8a8')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err => { // here we are saving the session in the database and just after that we are redirecting
        console.log(err);
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};


// 247. What is Authentication




// 248. How is Authentication Implemented

// we are creating a session after the user is authenticated for that user



// 249. Our Updated Project Status




// 250. Implementing an Authentication Flow

// /controllers/auth.js

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('5c3db72f04b84d2068ef4f14')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;   
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword; // in this way we are extracting data which was sent through a form to our server
  User.findOne({email: email}) // here we are looking in our database to see if there is already an user with that email
    .then(userDoc => {
      if(userDoc) { // if there is a user with that email 
         return res.redirect('/sigup'); // we will just redirect to '/signup'
      } 
      const user = new User({ // if there isn't a user with that mail, we are creating one
        email: email,
        password: password,
        cart: { items: [] } // creating the cart for the user with 'array items' empty(by default)
      });
      return user.save(); // here we are saving the new user to the database
    })
    .then(result => {
      res.redirect('/login'); // after the user was created successful we are redirecting to the login page
    })
    .catch(err => {
    console.log(err)
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop'

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

app.use((req, res, next) => {
  if(!req.session.user){ 
    return next();
  }
  User.findById(req.session.user._id) 
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err)); 
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then(result => { // here we don't need the dummy user anymore cause we can create one
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });




// 251. Encrypting Passwords

// npm install --save bcryptjs a package which help us encrypt the passwords

// /controllers/auth.js

const bcrypt = require('bcryptjs'); // here we are importing bcryptjs

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('5c3db72f04b84d2068ef4f14')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;   
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword; 
  User.findOne({email: email}) 
    .then(userDoc => {
      if(userDoc) {  
        return res.redirect('/signup'); 
      }
      return bcrypt.hash(password, 12) // here we are encrypting the user 'password' second argument means how many times it will hash the 'password'(12 it's a highly secure), this is doing in the asyng mode and it will return a promise
    })
    .then(hashedPassword => { // were the password is already hashed and here we have to create the user
      const user = new User({ 
        email: email,
        password: hashedPassword, // and we are saving the password hashed into the database and we can't decrypt this
        cart: { items: [] } 
      });
      return user.save(); 
    })
    .then(result => {
      res.redirect('/login'); 
      
    })
    .catch(err => {
    console.log(err)
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};




// 252. Adding a Tiny Code Improvment

const bcrypt = require('bcryptjs'); 

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('5c3db72f04b84d2068ef4f14')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;   
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword; 
  User.findOne({email: email}) 
    .then(userDoc => {
      if(userDoc) {  
        return res.redirect('/signup'); 
      }
      return bcrypt.hash(password, 12)
      .then(hashedPassword => { // nested promise cause if we changing below, it will not work properly
        const user = new User({ 
          email: email,
          password: hashedPassword, 
          cart: { items: [] } 
        });
        return user.save(); 
      }) 
    })
    .then(result => {
      res.redirect('/login'); 
    })
    .catch(err => {
    console.log(err)
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};




// 253. Adding the Signin Functionality

// here we are comparing the 'password' from frontend with the 'user.password' from database which is hashed by brcrypt with an algoritm

// /controllers/auth.js

const bcrypt = require('bcryptjs'); 

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email: email})
    .then(user => {
      if(!user) {
        return res.redirect('login');
      }
      bcrypt
        .compare(password, user.password) // here we are comparing the 'password' from frontend with the 'user.password' from database which is hashed by brcrypt with an algoritm
        .then(doMatch => { // this will give us true or false
          if(doMatch) { // here we are retriving the answer
            req.session.isLoggedIn = true; // creating the session with the loggedIn
            req.session.user = user; // and storing the 'user' in the session
            return req.session.save(err => { //save the session
              console.log(err);
              return res.redirect('/'); // return to the home page
            });  
          }
          res.redirect('/login'); // if there the password which the user entered is not the same with that from database we redirect to /login
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login'); // we redirect even if we have an error
        }); 
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;   
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword; 
  User.findOne({email: email}) 
    .then(userDoc => {
      if(userDoc) {  
        return res.redirect('/signup'); 
      }
      return bcrypt
      .hash(password, 12)
      .then(hashedPassword => { 
        const user = new User({ 
          email: email,
          password: hashedPassword, 
          cart: { items: [] } 
        });
        return user.save(); 
      }) 
    })
    .then(result => {
      res.redirect('/login'); 
    })
    .catch(err => {
    console.log(err)
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};




// 254. Working on Route Protection

// /controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  if(!req.session.isLoggedIn) { // here we are checking in the request session if there is not a login 'user'

    return res.redirect('/login'); // if there is no user logged in we are redirecting to to 'login' page, but this is not a scalable way because we to do it for every controller action
  }
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
    isAuthenticated: req.session.isLoggedIn
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    userId: req.user
  });
  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product,
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  Product.findById(prodId)
    .then(product => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save();
    })
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.find()
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then(products => {
      console.log(products);
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products',
        isAuthenticated: req.session.isLoggedIn 
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndRemove(prodId)
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};




// 255. Using Middleware to Protect Routes

// /middleware/is-auth.js

module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
      return res.redirect('/login'); // here we are checking to see if there the user is logged in through a middleware (we are doing this checking in the request session)
  }
  next();
}

// /routes/admin.js

const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth'); // importing our authentication middleware we created above

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct); // funnel the request through the auth middleware first and after that to our controller

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts); // this happens from left to right to any route

// /admin/add-product => POST
router.post('/add-product', isAuth, adminController.postAddProduct);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post('/edit-product', isAuth, adminController.postEditProduct);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;




// 256. Understanding CSRF Attacks




// 257. Using a CSRF Token

// npm install --save csurf which allow us to create a CSRF token that we can embedd into our form pages for the request that does something on the backend that changes the user state(like anything sensitive that we want to protect against)

// On the front we are including such a token in our views then on the server this package will check if the incoming request does have that valid token

// for any non-GET request this package will look for the existence of a csrf token in your views, in the request body

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf'); // require the 'csurf' that generate csrf tokens

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop'

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
const csrfProtection = csrf(); // intialize the session of csrf and this is a middleware(i guess)

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(csrfProtection); // and here we are using that csrf middleware for each request

app.use((req, res, next) => {
  if(!req.session.user){ 
    return next();
  }
  User.findById(req.session.user._id) 
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err)); 
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then(result => { 
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });


// /controllers/shop.js

const Product = require('../models/product');
const Order = require('../models/order');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        isAuthenticated: req.session.isLoggedIn,
        csrfToken: req.csrfToken() // this will generate a csrfToken, and we will use this on the views
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products,
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: { ...i.productId._doc } };
      });
      const order = new Order({
        user: {
          name: req.user.name,
          userId: req.user
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      return req.user.clearCart();
    })
    .then(() => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  Order.find({ 'user.userId': req.user._id })
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders,
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};


// view/includes/navigation.ejs

{/* <div class="backdrop"></div>
<header class="main-header">
    <button id="side-menu-toggle">Menu</button>
    <nav class="main-header__nav">
        <ul class="main-header__item-list">
            <li class="main-header__item">
                <a class="<%= path === '/' ? 'active' : '' %>" href="/">Shop</a>
            </li>
            <li class="main-header__item">
                <a class="<%= path === '/products' ? 'active' : '' %>" href="/products">Products</a>
            </li>
            <% if (isAuthenticated) { %>
                <li class="main-header__item">
                    <a class="<%= path === '/cart' ? 'active' : '' %>" href="/cart">Cart</a>
                </li>
                <li class="main-header__item">
                    <a class="<%= path === '/orders' ? 'active' : '' %>" href="/orders">Orders</a>
                </li>
                <li class="main-header__item">
                    <a class="<%= path === '/admin/add-product' ? 'active' : '' %>" href="/admin/add-product">Add Product
                    </a>
                </li>
                <li class="main-header__item">
                    <a class="<%= path === '/admin/products' ? 'active' : '' %>" href="/admin/products">Admin Products
                    </a>
                </li>
            <% } %>
        </ul>
        <ul class="main-header__item-list">
            <% if (!isAuthenticated) { %>
                <li class="main-header__item">
                    <a class="<%= path === '/login' ? 'active' : '' %>" href="/login">Login</a>
                </li>
                <li class="main-header__item">
                    <a class="<%= path === '/signup' ? 'active' : '' %>" href="/signup">Signup</a>
                </li>
            <% } else { %>
                <li class="main-header__item">
                    <form action="/logout" method="post">
                        <input type="hidden" name="_csrf" value="<%= csrfToken %>">
                        <button type="submit">Logout</button>
                    </form>
                </li>
            <% } %>
        </ul>
    </nav>
</header>

<nav class="mobile-nav">
    <ul class="mobile-nav__item-list">
        <li class="mobile-nav__item">
            <a class="<%= path === '/' ? 'active' : '' %>" href="/">Shop</a>
        </li>
        <li class="mobile-nav__item">
            <a class="<%= path === '/products' ? 'active' : '' %>" href="/products">Products</a>
        </li>
        <% if (isAuthenticated) { %>
            <li class="mobile-nav__item">
                <a class="<%= path === '/cart' ? 'active' : '' %>" href="/cart">Cart</a>
            </li>
            <li class="mobile-nav__item">
                <a class="<%= path === '/orders' ? 'active' : '' %>" href="/orders">Orders</a>
            </li>
            <li class="mobile-nav__item">
                <a class="<%= path === '/admin/add-product' ? 'active' : '' %>" href="/admin/add-product">Add Product
                </a>
            </li>
            <li class="mobile-nav__item">
                <a class="<%= path === '/admin/products' ? 'active' : '' %>" href="/admin/products">Admin Products
                </a>
            </li>
        <% } %>
        <% if (!isAuthenticated) { %>
            <li class="mobile-nav__item">
                <a class="<%= path === '/login' ? 'active' : '' %>" href="/login">Login</a>
            </li>
            <li class="mobile-nav__item">
                <a class="<%= path === '/signup' ? 'active' : '' %>" href="/signup">Signup</a>
            </li>
        <% } else { %>
            <li class="mobile-nav__item">
                <form action="/logout" method="post">
                    <input type="hidden" name="_csrf" value="<%= csrfToken %>"> <!-- here we are sending the csrf toke in the hidden input to the server and the name of the input should always be '_csrf' cause the package will always look for this name-->
                    <button type="submit">Logout</button>
                </form>
            </li>
        <% } %>
    </ul>
</nav> */}

// we can add csrf protection for every page, not every one individual as we did above for a single page


// 258. Adding a CSRF Protection

// we can add csrf protection for every page, not every one individual as we did above for a single page, we can do this by telling express that should do things for every request

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf'); 

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop'

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
const csrfProtection = csrf(); 

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(csrfProtection); 

app.use((req, res, next) => {
  if(!req.session.user){ 
    return next();
  }
  User.findById(req.session.user._id) 
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err)); 
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn; // this allow us to set local variables that are passed into the views and they only exist in the views which are render and here we puth req.session.isLoggedIn
  res.locals.csrfToken = req.csrfToken(); // and here we assing the req.csrfToken() (this means that the token it will be the same with that one which is generated by the backend) this is the same token
  next(); // the '_csrf' Token should be send with every POST request from the views
 <input type="hidden" name="_csrf" value="<%= csrfToken %>">
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then(result => { 
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });




// 259. Fixing the Order Button



// 260. Providing User Feedback

// npm install --save connect-flash 
// The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user. The flash is typically used in combination with redirects, ensuring that the message is available to the next page that is to be rendered.

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash'); // importing connect-flash 

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop'

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
const csrfProtection = csrf(); 

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(csrfProtection); // we have to inialize it after we set the session (so this is the good place for both initizations)
app.use(flash()); // initialize flash (connect-flash) we have to inialize it after we set the session

app.use((req, res, next) => {
  if(!req.session.user){ 
    return next();
  }
  User.findById(req.session.user._id) 
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err)); 
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn; 
  res.locals.csrfToken = req.csrfToken(); 
  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then(result => { 
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });



// /controllers/auth.js

const bcrypt = require('bcryptjs'); 

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: req.flash('error') // here we are rendering the errorMessage from the session just accessing the req.flash('error') just the key of that message
  });
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup'
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email: email})
    .then(user => {
      if(!user) {
        req.flash('error', 'Invalid email or password'); // here we creating a message with key 'error' and message 'Invalid email or password' which are stored in a session(this is for post login in case that email which user enter it doesn't exist in our database)
        return res.redirect('login');
      }
      bcrypt
        .compare(password, user.password) 
        .then(doMatch => {
          if(doMatch) { 
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              return res.redirect('/');
            });  
          }
          res.redirect('/login'); 
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        }); 
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;   
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword; 
  User.findOne({email: email}) 
    .then(userDoc => {
      if(userDoc) {  
        return res.redirect('/signup'); 
      }
      return bcrypt
      .hash(password, 12)
      .then(hashedPassword => { 
        const user = new User({ 
          email: email,
          password: hashedPassword, 
          cart: { items: [] } 
        });
        return user.save(); 
      }) 
    })
    .then(result => {
      res.redirect('/login'); 
    })
    .catch(err => {
    console.log(err)
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};


<% if(errorMessage) { %> // in case that there is an error message we will display that, if not we will not
   <div><%= errorMessage %></div>
<% } %>



// 261. Optional Styling Error Messages




// 262. Finishig the Flash Messages

// /controllers/auth.js

const bcrypt = require('bcryptjs'); 

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  let message = req.flash('error'); // here we are getting the 'error' message from 'flash' session which will return an array
  if(message.length > 0) { // if the length of the array is bigger than 0
    mesasge = message[0]; // message is equal with the first element of that array
  } else {
    message = null; // if not the message will be equal with null
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message // here we will pass our message
  });
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup'
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email: email})
    .then(user => {
      if(!user) {
        req.flash('error', 'Invalid email or password'); 
        return res.redirect('login');
      }
      bcrypt
        .compare(password, user.password) 
        .then(doMatch => {
          if(doMatch) { 
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              return res.redirect('/');
            });  
          }
          res.redirect('/login'); 
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        }); 
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;   
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword; 
  User.findOne({email: email}) 
    .then(userDoc => {
      if(userDoc) {  
        return res.redirect('/signup'); 
      }
      return bcrypt
      .hash(password, 12)
      .then(hashedPassword => { 
        const user = new User({ 
          email: email,
          password: hashedPassword, 
          cart: { items: [] } 
        });
        return user.save(); 
      }) 
    })
    .then(result => {
      res.redirect('/login'); 
    })
    .catch(err => {
    console.log(err)
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};




// 263. Adding Additional Flash Messages




// 268. Using SendGrid

// every node server using a email service for it's mails or anyway something like that

// npm install --save nodemailer it's a package that send mails from inside nodejs

// npm install nodemailer-sendgrid-transport help us to integrate SendGrid into our server




// 269. Using Nodemailer to Send an Email

// /controllers/auth.js

const bcrypt = require('bcryptjs'); 
const nodemailer = require('nodemailer'); // require nodemailer
const sendgridTransport = require('nodemailer-sendgrid-transport'); // importing sendgrid transport

const transporter = nodemailer.createTransport(sendgridTransport({ // here we are creating an 'transporter' which will send the mail for us
  auth: { // author(i guess)
    api_key: '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' // our api_key from sendgrid
  }
}));

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  let message = req.flash('error'); 
  if(message.length > 0) { 
    mesasge = message[0]; 
  } else {
    message = null; 
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message 
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error'); 
  if(message.length > 0) { 
    mesasge = message[0]; 
  } else {
    message = null; 
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup', 
    errorMessage: message
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email: email})
    .then(user => {
      if(!user) {
        req.flash('error', 'Invalid email or password'); 
        return res.redirect('login');
      }
      bcrypt
        .compare(password, user.password) 
        .then(doMatch => {
          if(doMatch) { 
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              return res.redirect('/');
            });  
          }
          req.flash('error', 'Invalid email or password');
          res.redirect('/login'); 
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        }); 
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({ email: email })
    .then(userDoc => {
      if (userDoc) {
        req.flash(
          'error',
          'E-Mail exists already, please pick a different one.'
        );
        return res.redirect('/signup');
      }
      return bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
          const user = new User({
            email: email,
            password: hashedPassword,
            cart: { items: [] }
          });
          return user.save();
        })
        .then(result => {
          res.redirect('/login');
          return transporter.sendMail({ // here we set our mail to be send
            to: email, // to who we send the mail
            from: 'shop@node-complete.com', // from and so on and forth
            subject: 'Signup succeeded!',
            html: '<h1>You successfully signed up!</h1>'
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};




// 270. Potential Limitation for Large Scale Apps




// 273. Resseting Passwords

// /controllers/auth.js

const bcrypt = require('bcryptjs'); 
const nodemailer = require('nodemailer'); 
const sendgridTransport = require('nodemailer-sendgrid-transport'); 

const transporter = nodemailer.createTransport(sendgridTransport({ 
  auth: { 
    api_key: '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' 
  }
}));

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  let message = req.flash('error'); 
  if(message.length > 0) { 
    mesasge = message[0]; 
  } else {
    message = null; 
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message 
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error'); 
  if(message.length > 0) { 
    mesasge = message[0]; 
  } else {
    message = null; 
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup', 
    errorMessage: message
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email: email})
    .then(user => {
      if(!user) {
        req.flash('error', 'Invalid email or password'); 
        return res.redirect('login');
      }
      bcrypt
        .compare(password, user.password) 
        .then(doMatch => {
          if(doMatch) { 
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              return res.redirect('/');
            });  
          }
          req.flash('error', 'Invalid email or password');
          res.redirect('/login'); 
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        }); 
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({ email: email })
    .then(userDoc => {
      if (userDoc) {
        req.flash(
          'error',
          'E-Mail exists already, please pick a different one.'
        );
        return res.redirect('/signup');
      }
      return bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
          const user = new User({
            email: email,
            password: hashedPassword,
            cart: { items: [] }
          });
          return user.save();
        })
        .then(result => {
          res.redirect('/login');
          return transporter.sendMail({
            to: email, 
            from: 'shop@node-complete.com', 
            subject: 'Signup succeeded!',
            html: '<h1>You successfully signed up!</h1>'
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

exports.getReset = (req, res, next) => { // for resetting the password
  let message = req.flash('error'); 
  if(message.length > 0) { 
    mesasge = message[0]; 
  } else {
    message = null; 
  }
  res.render('auth/reset', {
    path: '/reset',
    pageTitle: 'Reset Password', 
    errorMessage: message
  });
}

// we also add a route and a view for this controller 


// 274. Implementing the Token Logic

// /models/user.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  resetToken: String, // the token for resetting password both of them should not be required cause we don't use them just sometimes
  resetTokenExpiration: Date, // the date when the token will expire
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: { type: Number, required: true }
      }
    ]
  }
});

userSchema.methods.addToCart = function(product) {
  const cartProductIndex = this.cart.items.findIndex(cp => {
    return cp.productId.toString() === product._id.toString();
  });
  let newQuantity = 1;
  const updatedCartItems = [...this.cart.items];

  if (cartProductIndex >= 0) {
    newQuantity = this.cart.items[cartProductIndex].quantity + 1;
    updatedCartItems[cartProductIndex].quantity = newQuantity;
  } else {
    updatedCartItems.push({
      productId: product._id,
      quantity: newQuantity
    });
  }
  const updatedCart = {
    items: updatedCartItems
  };
  this.cart = updatedCart;
  return this.save();
};

userSchema.methods.removeFromCart = function(productId) {
  const updatedCartItems = this.cart.items.filter(item => {
    return item.productId.toString() !== productId.toString();
  });
  this.cart.items = updatedCartItems;
  return this.save();
};

userSchema.methods.clearCart = function() { 
  this.cart = { items: [] };
  return this.save();
};

module.exports = mongoose.model('User', userSchema);


// /controllers/auth.js

const crypto = require('crypto'); // module supports cryptography, it's a node built-in module(help us to create tokens)

const bcrypt = require('bcryptjs'); 
const nodemailer = require('nodemailer'); 
const sendgridTransport = require('nodemailer-sendgrid-transport'); 

const transporter = nodemailer.createTransport(sendgridTransport({ 
  auth: { 
    api_key: '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' 
  }
}));

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  let message = req.flash('error'); 
  if(message.length > 0) { 
    mesasge = message[0]; 
  } else {
    message = null; 
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message 
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error'); 
  if(message.length > 0) { 
    mesasge = message[0]; 
  } else {
    message = null; 
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup', 
    errorMessage: message
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email: email})
    .then(user => {
      if(!user) {
        req.flash('error', 'Invalid email or password'); 
        return res.redirect('login');
      }
      bcrypt
        .compare(password, user.password) 
        .then(doMatch => {
          if(doMatch) { 
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              return res.redirect('/');
            });  
          }
          req.flash('error', 'Invalid email or password');
          res.redirect('/login'); 
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        }); 
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({ email: email })
    .then(userDoc => {
      if (userDoc) {
        req.flash(
          'error',
          'E-Mail exists already, please pick a different one.'
        );
        return res.redirect('/signup');
      }
      return bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
          const user = new User({
            email: email,
            password: hashedPassword,
            cart: { items: [] }
          });
          return user.save();
        })
        .then(result => {
          res.redirect('/login');
          return transporter.sendMail({
            to: email, 
            from: 'shop@node-complete.com', 
            subject: 'Signup succeeded!',
            html: '<h1>You successfully signed up!</h1>'
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

exports.getReset = (req, res, next) => {
  let message = req.flash('error'); 
  if(message.length > 0) { 
    mesasge = message[0]; 
  } else {
    message = null; 
  }
  res.render('auth/reset', {
    path: '/reset',
    pageTitle: 'Reset Password', 
    errorMessage: message
  });
}

exports.postReset = (req, res, next) => {
  crypto.randomBytes(32, (err, buffer) => { // this will generate random bytes 32 in this case
    if(err) {
      console.log(err);
      return res.redirect('/reset');
    }
    const token = buffer.toString('hex'); // this token will contain that buffer which is converted to string (ASCII) from an hexadecimal
    User.findOne({email: req.body.email})  // finding in the database the user which have the email we want to change
      .then(user => {
        if(!user) { // if there we don't have a user with that mail we flash the message bellow
          req.flash('error', 'No account with that email found.');
          return res.redirect('/reset');
        }
        user.resetToken = token; // token which was generated we add to the find user
        user.resetTokenExpiration = Date.now() + 3600000; // one hour in milliseconds add to the user...
        return user.save(); // saving into the database
      })
      .then(result => {
        res.redirect('/');
        transporter.sendMail({
          to: req.body.email, // after it was save in the database the token and so on we are sending an email with our token
          from: 'shop@node-complete.com', 
          subject: 'Password reset',
          html: `
            <p>You requested a password reset</p>
            <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password</p>
          `
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
}




// 275. Creating the Token 

// adding the post route for reset and sending a mail to a user to see if the token is generating properly


// 276. Creating the Reset Password Form

// /controllers/auth.js

const crypto = require('crypto');

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const User = require('../models/user');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        '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'
    }
  })
);

exports.getLogin = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    errorMessage: message
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        req.flash('error', 'Invalid email or password.');
        return res.redirect('/login');
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              res.redirect('/');
            });
          }
          req.flash('error', 'Invalid email or password.');
          res.redirect('/login');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({ email: email })
    .then(userDoc => {
      if (userDoc) {
        req.flash(
          'error',
          'E-Mail exists already, please pick a different one.'
        );
        return res.redirect('/signup');
      }
      return bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
          const user = new User({
            email: email,
            password: hashedPassword,
            cart: { items: [] }
          });
          return user.save();
        })
        .then(result => {
          res.redirect('/login');
          return transporter.sendMail({
            to: email,
            from: 'shop@node-complete.com',
            subject: 'Signup succeeded!',
            html: '<h1>You successfully signed up!</h1>'
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

exports.getReset = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/reset', {
    path: '/reset',
    pageTitle: 'Reset Password',
    errorMessage: message
  });
};

exports.postReset = (req, res, next) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
      return res.redirect('/reset');
    }
    const token = buffer.toString('hex');
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          req.flash('error', 'No account with that email found.');
          return res.redirect('/reset');
        }
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        return user.save();
      })
      .then(result => {
        res.redirect('/');
        transporter.sendMail({
          to: req.body.email,
          from: 'shop@node-complete.com',
          subject: 'Password reset',
          html: `
            <p>You requested a password reset</p>
            <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</p>
          `
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};

exports.getNewPassword = (req, res, next) => {
  const token = req.params.token; // take the tokem from the params request
  User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } })
    .then(user => { // find the user with the right token in the database and see if the token hasn't expire yet 
      let message = req.flash('error');
      if (message.length > 0) {
        message = message[0];
      } else {
        message = null;
      }
      res.render('auth/new-password', {
        path: '/new-password',
        pageTitle: 'New Password',
        errorMessage = message,
        userId: user._id.toString() // giving to the view the user id converted to string to not be a mongdb object id
      });
    })
    .catch(err => {
      console.log(err)
    });
}




// 277. Adding Logic to Update the Password

const crypto = require('crypto');

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const User = require('../models/user');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        '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'
    }
  })
);

exports.getLogin = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    errorMessage: message
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        req.flash('error', 'Invalid email or password.');
        return res.redirect('/login');
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              res.redirect('/');
            });
          }
          req.flash('error', 'Invalid email or password.');
          res.redirect('/login');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({ email: email })
    .then(userDoc => {
      if (userDoc) {
        req.flash(
          'error',
          'E-Mail exists already, please pick a different one.'
        );
        return res.redirect('/signup');
      }
      return bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
          const user = new User({
            email: email,
            password: hashedPassword,
            cart: { items: [] }
          });
          return user.save();
        })
        .then(result => {
          res.redirect('/login');
          return transporter.sendMail({
            to: email,
            from: 'shop@node-complete.com',
            subject: 'Signup succeeded!',
            html: '<h1>You successfully signed up!</h1>'
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

exports.getReset = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/reset', {
    path: '/reset',
    pageTitle: 'Reset Password',
    errorMessage: message
  });
};

exports.postReset = (req, res, next) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
      return res.redirect('/reset');
    }
    const token = buffer.toString('hex');
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          req.flash('error', 'No account with that email found.');
          return res.redirect('/reset');
        }
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        return user.save();
      })
      .then(result => {
        res.redirect('/');
        transporter.sendMail({
          to: req.body.email,
          from: 'shop@node-complete.com',
          subject: 'Password reset',
          html: `
            <p>You requested a password reset</p>
            <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</p>
          `
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};

exports.getNewPassword = (req, res, next) => {
  const token = req.params.token;
  User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } })
    .then(user => {
      let message = req.flash('error');
      if (message.length > 0) {
        message = message[0];
      } else {
        message = null;
      }
      res.render('auth/new-password', {
        path: '/new-password',
        pageTitle: 'New Password',
        errorMessage: message,
        userId: user._id.toString(),
        passwordToken: token
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postNewPassword = (req, res, next) => {
  const newPassword = req.body.password; // get the password from req.body
  const userId = req.body.userId; // userId as well
  const passwordToken = req.body.passwordToken; // passwordToken also
  let resetUser;

  User.findOne({ // we are finding the user in the database after we have below 3 lines
    resetToken: passwordToken,
    resetTokenExpiration: { $gt: Date.now() },
    _id: userId
  })
    .then(user => {
      resetUser = user;
      return bcrypt.hash(newPassword, 12); // here we are encrypting the new password
    })
    .then(hashedPassword => {
      resetUser.password = hashedPassword; // the new password of the user will be the encrypted one
      resetUser.resetToken = undefined; // set the token to undefined
      resetUser.resetTokenExpiration = undefined; // set the token expiration to undefined cause we don't need them now
      return resetUser.save(); // and here we are saving eveything in the database
    })
    .then(result => {
      res.redirect('/login');
    })
    .catch(err => {
      console.log(err);
    });
};




// 278. Why we Need Authorization

// not every user has the right to do everything, authorization means that we are restricting  the permissions of a loggedin user, (he will cannot delete products which are not created by him)


// 279. Adding Authorization

// /controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    userId: req.user
  });
  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  Product.findById(prodId)
    .then(product => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save();
    })
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.find({userId: req.user._id}) // here in the admin Products we get just the product which were created by that user, products with his id (good mark, second round***=)))
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then(products => {
      console.log(products);
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndRemove(prodId)
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};




// 280. Adding Protection to Post Actions

// /controllers/admin.js

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    userId: req.user
  });
  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  Product.findById(prodId)
    .then(product => {
      if(product.userId.toString() !== req.user._id.toString()) { // if the product id isn't the same with of id of the user which is currently log in or admin, than it will not be able to edit that product(we are converting them to string in order to work, cause product.userId is a mongo object Id)
        return res.redirect('/');
      }
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save().then(result => {
        console.log('UPDATED PRODUCT!');
        res.redirect('/admin/products');
      });
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.find({ userId: req.user._id })
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then(products => {
      console.log(products);
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteOne({ _id: prodId, userId: req.user._id }) // and here we are deleting one product which has the same id (userid)with the prodID(userId) and the user which is currently log in is the user which create that product
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};




// 281. Why Editing Fails




// 286. How to Validate 




// 287. Setup Basic Validation

// npm install --save express-validator  -  express-validator is a set of express.js middlewares that wraps validator.js validator and sanitizer functions

// You want to validate on the post routes, when a user sends data cause if you don't do any validation on the server side, even if you have "frontend validation", the user can disable that and can save data that you don't want in your database


// /routes/auth.js

const express = require('express');
const { check } = require('express-validator/check'); // importing the express-validator/check which is a subpackega, but we need this subpackage for our validation, which will give us an object, 'check' from this package is looking for everything in the request (like params, query params, forms inputs, cookie(i think) and so on)

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', authController.postLogin);

router.post('/signup', check('email').isEmail(), authController.postSignup); // this 'check' function is looking for an input field named 'email' to see if we entered a valid mail(field name is the same as the name from the input form name)

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;


// /controllers/auth.js

const crypto = require('crypto');

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const { validationResult } = require('express-validator/check'); // here we are importing from 'express-validator/check' the 'validationResult' which will validate our inputs which we set it on routes
 
const User = require('../models/user');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        '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'
    }
  })
);

exports.getLogin = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    errorMessage: message
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        req.flash('error', 'Invalid email or password.');
        return res.redirect('/login');
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              res.redirect('/');
            });
          }
          req.flash('error', 'Invalid email or password.');
          res.redirect('/login');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const errors = validationResult(req); // here we are extracting the 'errors' from validationResult of the request
  if(!errors.isEmpty()) { // if the errors aren't empty we are doint next
    console.log(errors.array()); // if we have any errors we will render the same page
    return res.status(422).render('auth/signup', { // 422 UNPROCESSABLE ENTITY
      path: '/signup',
      pageTitle: 'Signup',
      errorMessage: errors.array() // giving the errors.array() to errorMessage(the array of objects with errors)
    });
  }
  User.findOne({ email: email })
    .then(userDoc => {
      if (userDoc) {
        req.flash(
          'error',
          'E-Mail exists already, please pick a different one.'
        );
        return res.redirect('/signup');
      }
      return bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
          const user = new User({
            email: email,
            password: hashedPassword,
            cart: { items: [] }
          });
          return user.save();
        })
        .then(result => {
          res.redirect('/login');
          return transporter.sendMail({
            to: email,
            from: 'shop@node-complete.com',
            subject: 'Signup succeeded!',
            html: '<h1>You successfully signed up!</h1>'
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

exports.getReset = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/reset', {
    path: '/reset',
    pageTitle: 'Reset Password',
    errorMessage: message
  });
};

exports.postReset = (req, res, next) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
      return res.redirect('/reset');
    }
    const token = buffer.toString('hex');
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          req.flash('error', 'No account with that email found.');
          return res.redirect('/reset');
        }
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        return user.save();
      })
      .then(result => {
        res.redirect('/');
        transporter.sendMail({
          to: req.body.email,
          from: 'shop@node-complete.com',
          subject: 'Password reset',
          html: `
            <p>You requested a password reset</p>
            <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</p>
          `
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};

exports.getNewPassword = (req, res, next) => {
  const token = req.params.token;
  User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } })
    .then(user => {
      let message = req.flash('error');
      if (message.length > 0) {
        message = message[0];
      } else {
        message = null;
      }
      res.render('auth/new-password', {
        path: '/new-password',
        pageTitle: 'New Password',
        errorMessage: message,
        userId: user._id.toString(),
        passwordToken: token
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postNewPassword = (req, res, next) => {
  const newPassword = req.body.password;
  const userId = req.body.userId;
  const passwordToken = req.body.passwordToken;
  let resetUser;

  User.findOne({
    resetToken: passwordToken,
    resetTokenExpiration: { $gt: Date.now() },
    _id: userId
  })
    .then(user => {
      resetUser = user;
      return bcrypt.hash(newPassword, 12);
    })
    .then(hashedPassword => {
      resetUser.password = hashedPassword;
      resetUser.resetToken = undefined;
      resetUser.resetTokenExpiration = undefined;
      return resetUser.save();
    })
    .then(result => {
      res.redirect('/login');
    })
    .catch(err => {
      console.log(err);
    });
};




// 288. Using Validation Error Messages

// /controllers/auth.js

const crypto = require('crypto');

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const { validationResult } = require('express-validator/check'); 
 
const User = require('../models/user');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        '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'
    }
  })
);

exports.getLogin = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    errorMessage: message
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        req.flash('error', 'Invalid email or password.');
        return res.redirect('/login');
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              res.redirect('/');
            });
          }
          req.flash('error', 'Invalid email or password.');
          res.redirect('/login');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const errors = validationResult(req); 
  if(!errors.isEmpty()) { 
    console.log(errors.array());
    return res.status(422).render('auth/signup', { 
      path: '/signup',
      pageTitle: 'Signup',
      errorMessage: errors.array()[0].msg // we are displaying the first element of the errors array, cause there we are finding our error, and .msg indicates exactly which was our error, we can customize this message in order of the error we are making(we are customize this in the routes)
    });
  }
  User.findOne({ email: email })
    .then(userDoc => {
      if (userDoc) {
        req.flash(
          'error',
          'E-Mail exists already, please pick a different one.'
        );
        return res.redirect('/signup');
      }
      return bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
          const user = new User({
            email: email,
            password: hashedPassword,
            cart: { items: [] }
          });
          return user.save();
        })
        .then(result => {
          res.redirect('/login');
          return transporter.sendMail({
            to: email,
            from: 'shop@node-complete.com',
            subject: 'Signup succeeded!',
            html: '<h1>You successfully signed up!</h1>'
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

exports.getReset = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/reset', {
    path: '/reset',
    pageTitle: 'Reset Password',
    errorMessage: message
  });
};

exports.postReset = (req, res, next) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
      return res.redirect('/reset');
    }
    const token = buffer.toString('hex');
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          req.flash('error', 'No account with that email found.');
          return res.redirect('/reset');
        }
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        return user.save();
      })
      .then(result => {
        res.redirect('/');
        transporter.sendMail({
          to: req.body.email,
          from: 'shop@node-complete.com',
          subject: 'Password reset',
          html: `
            <p>You requested a password reset</p>
            <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</p>
          `
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};

exports.getNewPassword = (req, res, next) => {
  const token = req.params.token;
  User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } })
    .then(user => {
      let message = req.flash('error');
      if (message.length > 0) {
        message = message[0];
      } else {
        message = null;
      }
      res.render('auth/new-password', {
        path: '/new-password',
        pageTitle: 'New Password',
        errorMessage: message,
        userId: user._id.toString(),
        passwordToken: token
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postNewPassword = (req, res, next) => {
  const newPassword = req.body.password;
  const userId = req.body.userId;
  const passwordToken = req.body.passwordToken;
  let resetUser;

  User.findOne({
    resetToken: passwordToken,
    resetTokenExpiration: { $gt: Date.now() },
    _id: userId
  })
    .then(user => {
      resetUser = user;
      return bcrypt.hash(newPassword, 12);
    })
    .then(hashedPassword => {
      resetUser.password = hashedPassword;
      resetUser.resetToken = undefined;
      resetUser.resetTokenExpiration = undefined;
      return resetUser.save();
    })
    .then(result => {
      res.redirect('/login');
    })
    .catch(err => {
      console.log(err);
    });
};


// /routes/auth.js

const express = require('express');
const { check } = require('express-validator/check');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', authController.postLogin);

router.post(
  '/signup',
  check('email')
    .isEmail() // isEmail() it's a built-in validator which will validate our mail in the form
    .withMessage('Please enter a valid email.'), // this will customize the message of the error for mail in this case    
  authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;




// 289. Built-In Custom Validators

// /routes/auth.js


const express = require('express');
const { check } = require('express-validator/check');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', authController.postLogin);

router.post(
  '/signup',
  check('email')
    .isEmail()
    .withMessage('Please enter a valid email.')
    .custom((value, { req }) => { // value is which value the user enter, // extracting the request(or from request)
      if (value === 'test@test.com') { // in this way we can create or own validators
        throw new Error('This email address if forbidden.');  // if the user enter the value which we don't want we will throw an error
      }
      return true; // if not we will return just true
    }),
  authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;




// 290. More Validators

// /routes/auth.js

const express = require('express');
const { check, body } = require('express-validator/check'); // here with 'body' 'express-validator' is checking for errors just in the 'request body'

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', authController.postLogin);

router.post(
  '/signup',
  [
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => { 
        if (value === 'test@test.com') { 
          throw new Error('This email address if forbidden.');
        }
        return true;
      }), 
    body(
      'password', // look for the 'password' in the body of the request
       'Please enter a password with only numbers and text and at least 5 characters.' // default error message for this (password validator), easier than '.withMessage()' to custom or error message
      ) 
      .isLength({ min: 5 }) // minim length of the 'password' to be 5 characters
      .isAlphanumeric()   // in production we should use something more complex than this(this is just for sake of example)
  ],
  authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;




// 291. Checking for Field Equality

// /routes/auth.js

const express = require('express');
const { check, body } = require('express-validator/check');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', authController.postLogin);

router.post(
  '/signup',
  [
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => { 
        if (value === 'test@test.com') { 
          throw new Error('This email address if forbidden.');
        }
        return true;
      }), 
    body(
      'password', 
       'Please enter a password with only numbers and text and at least 5 characters.' 
      ) 
      .isLength({ min: 5 }) 
      .isAlphanumeric(),
    body('confirmPassword').custom((value, { req }) => {
      if(value !== req.body.password) { // here we are checking to see if the 'confirmPassword isn't the save with the password, and if isn't we are throwing an error
        throw new Error('Passwords have to match!');
      } 
      return true; // if the password are equal we are returning true
    })      
  ],
  authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;




// 292. Adding Async Validation

// /routes/auth.js

const express = require('express');
const { check, body } = require('express-validator/check');

const authController = require('../controllers/auth');
const User = require('../models/user'); // importin 'User' model

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', authController.postLogin);

router.post(
  '/signup',
  [
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        // if (value === 'test@test.com') {
        //   throw new Error('This email address if forbidden.');
        // }
        // return true;
        return User.findOne({ email: value }).then(userDoc => { // looking in the database for the email that the 'user' enter here is 'value' of the email form input
          if (userDoc) { // if that email exists
            return Promise.reject( // we are 'reject' ing with with Promise.reject() and this we be add to error array
              'E-Mail exists already, please pick a different one.'
            );
          }
        });
      }),
    body(
      'password',
      'Please enter a password with only numbers and text and at least 5 characters.'
    )
      .isLength({ min: 5 })
      .isAlphanumeric(),
    body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords have to match!');
      }
      return true;
    })
  ],
  authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;

// and we restructed the code from /controllers/auth.js

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render('auth/signup', {
      path: '/signup',
      pageTitle: 'Signup',
      errorMessage: errors.array()[0].msg
    });
  }
   // here we are not looking to see if the email the user enter is already in the database, because we already did it in the 'routes/auth.js'
  bcrypt
    .hash(password, 12)
    .then(hashedPassword => {
      const user = new User({
        email: email,
        password: hashedPassword,
        cart: { items: [] }
      });
      return user.save();
    })
    .then(result => {
      res.redirect('/login');
      return transporter.sendMail({
        to: email,
        from: 'shop@node-complete.com',
        subject: 'Signup succeeded!',
        html: '<h1>You successfully signed up!</h1>'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// Assignment Understanding Validaion

// /routes/auth.js

const express = require('express');
const { check, body } = require('express-validator/check');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post(
  '/login',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email address.'),
    body('password', 'Password has to be valid.')
      .isLength({ min: 5 }) // we have to be carefull cause if in the signup the limit is higher, the user which signup will never login
      .isAlphanumeric()
  ],
  authController.postLogin
);

router.post(
  '/signup',
  [
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        // if (value === 'test@test.com') {
        //   throw new Error('This email address if forbidden.');
        // }
        // return true;
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject(
              'E-Mail exists already, please pick a different one.'
            );
          }
        });
      }),
    body(
      'password',
      'Please enter a password with only numbers and text and at least 5 characters.'
    )
      .isLength({ min: 5 })
      .isAlphanumeric(),
    body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords have to match!');
      }
      return true;
    })
  ],
  authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;



// 293. Keeping User Input

// /controllers/auth.js

const crypto = require('crypto');

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const { validationResult } = require('express-validator/check');

const User = require('../models/user');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        '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'
    }
  })
);

exports.getLogin = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    errorMessage: message,
    oldInput: {
      email: '', // this shold be the old data, but because we just entered the sign up page an there are no data to show, all of this will be empty 
      password: '',
      confirmPassword: ''
    }
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).render('auth/login', {
      path: '/login',
      pageTitle: 'Login',
      errorMessage: errors.array()[0].msg
    });
  }

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        req.flash('error', 'Invalid email or password.');
        return res.redirect('/login');
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              res.redirect('/');
            });
          }
          req.flash('error', 'Invalid email or password.');
          res.redirect('/login');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render('auth/signup', {
      path: '/signup',
      pageTitle: 'Signup',
      errorMessage: errors.array()[0].msg,
      oldInput: { // here we reassing the value that we send and wasn't correct, but we repopulate the fields when we 'redirect'
        email: email,
        password: password,
        confirmPassword: req.body.confirmPassword
      }
    });
  }

  bcrypt
    .hash(password, 12)
    .then(hashedPassword => {
      const user = new User({
        email: email,
        password: hashedPassword,
        cart: { items: [] }
      });
      return user.save();
    })
    .then(result => {
      res.redirect('/login');
      // return transporter.sendMail({
      //   to: email,
      //   from: 'shop@node-complete.com',
      //   subject: 'Signup succeeded!',
      //   html: '<h1>You successfully signed up!</h1>'
      // });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

exports.getReset = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/reset', {
    path: '/reset',
    pageTitle: 'Reset Password',
    errorMessage: message
  });
};

exports.postReset = (req, res, next) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
      return res.redirect('/reset');
    }
    const token = buffer.toString('hex');
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          req.flash('error', 'No account with that email found.');
          return res.redirect('/reset');
        }
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        return user.save();
      })
      .then(result => {
        res.redirect('/');
        transporter.sendMail({
          to: req.body.email,
          from: 'shop@node-complete.com',
          subject: 'Password reset',
          html: `
            <p>You requested a password reset</p>
            <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</p>
          `
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};

exports.getNewPassword = (req, res, next) => {
  const token = req.params.token;
  User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } })
    .then(user => {
      let message = req.flash('error');
      if (message.length > 0) {
        message = message[0];
      } else {
        message = null;
      }
      res.render('auth/new-password', {
        path: '/new-password',
        pageTitle: 'New Password',
        errorMessage: message,
        userId: user._id.toString(),
        passwordToken: token
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postNewPassword = (req, res, next) => {
  const newPassword = req.body.password;
  const userId = req.body.userId;
  const passwordToken = req.body.passwordToken;
  let resetUser;

  User.findOne({
    resetToken: passwordToken,
    resetTokenExpiration: { $gt: Date.now() },
    _id: userId
  })
    .then(user => {
      resetUser = user;
      return bcrypt.hash(newPassword, 12);
    })
    .then(hashedPassword => {
      resetUser.password = hashedPassword;
      resetUser.resetToken = undefined;
      resetUser.resetTokenExpiration = undefined;
      return resetUser.save();
    })
    .then(result => {
      res.redirect('/login');
    })
    .catch(err => {
      console.log(err);
    });
};




// 294. Adding Conditional CSS Classes

// /controllers/auth.js

const crypto = require('crypto');

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const { validationResult } = require('express-validator/check');

const User = require('../models/user');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        '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'
    }
  })
);

exports.getLogin = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    errorMessage: message,
    oldInput: {
      email: '', 
      password: '',
      confirmPassword: ''
    },
    validationErrors: [] // we are assign this property empty cause there is no errors at the beggining
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).render('auth/login', {
      path: '/login',
      pageTitle: 'Login',
      errorMessage: errors.array()[0].msg
    });
  }

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        req.flash('error', 'Invalid email or password.');
        return res.redirect('/login');
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              res.redirect('/');
            });
          }
          req.flash('error', 'Invalid email or password.');
          res.redirect('/login');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render('auth/signup', {
      path: '/signup',
      pageTitle: 'Signup',
      errorMessage: errors.array()[0].msg,
      oldInput: { 
        email: email,
        password: password,
        confirmPassword: req.body.confirmPassword
      },
      validationErrors: errors.array() // we are giving the errors array as value for our validationErrors which will help us to make red the 'inputs' in the views if there are any errors
    });
  }

  bcrypt
    .hash(password, 12)
    .then(hashedPassword => {
      const user = new User({
        email: email,
        password: hashedPassword,
        cart: { items: [] }
      });
      return user.save();
    })
    .then(result => {
      res.redirect('/login');
      // return transporter.sendMail({
      //   to: email,
      //   from: 'shop@node-complete.com',
      //   subject: 'Signup succeeded!',
      //   html: '<h1>You successfully signed up!</h1>'
      // });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

exports.getReset = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/reset', {
    path: '/reset',
    pageTitle: 'Reset Password',
    errorMessage: message
  });
};

exports.postReset = (req, res, next) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
      return res.redirect('/reset');
    }
    const token = buffer.toString('hex');
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          req.flash('error', 'No account with that email found.');
          return res.redirect('/reset');
        }
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        return user.save();
      })
      .then(result => {
        res.redirect('/');
        transporter.sendMail({
          to: req.body.email,
          from: 'shop@node-complete.com',
          subject: 'Password reset',
          html: `
            <p>You requested a password reset</p>
            <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</p>
          `
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};

exports.getNewPassword = (req, res, next) => {
  const token = req.params.token;
  User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } })
    .then(user => {
      let message = req.flash('error');
      if (message.length > 0) {
        message = message[0];
      } else {
        message = null;
      }
      res.render('auth/new-password', {
        path: '/new-password',
        pageTitle: 'New Password',
        errorMessage: message,
        userId: user._id.toString(),
        passwordToken: token
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postNewPassword = (req, res, next) => {
  const newPassword = req.body.password;
  const userId = req.body.userId;
  const passwordToken = req.body.passwordToken;
  let resetUser;

  User.findOne({
    resetToken: passwordToken,
    resetTokenExpiration: { $gt: Date.now() },
    _id: userId
  })
    .then(user => {
      resetUser = user;
      return bcrypt.hash(newPassword, 12);
    })
    .then(hashedPassword => {
      resetUser.password = hashedPassword;
      resetUser.resetToken = undefined;
      resetUser.resetTokenExpiration = undefined;
      return resetUser.save();
    })
    .then(result => {
      res.redirect('/login');
    })
    .catch(err => {
      console.log(err);
    });
};

// signup page html

<%- include('../includes/head.ejs') %>
    <link rel="stylesheet" href="/css/forms.css">
    <link rel="stylesheet" href="/css/auth.css">
</head>

{/* <body>
   <%- include('../includes/navigation.ejs') %>

    <main>
        <% if (errorMessage) { %>
            <div class="user-message user-message--error"><%= errorMessage %></div>
        <% } %>
        <form class="login-form" action="/signup" method="POST" novalidate>
            <div class="form-control">
                <label for="email">E-Mail</label>
                <input 
                    class="<%= validationErrors.find(e => e.param === 'email') ? 'invalid' : '' %>" // here we checking to see if there are any errors, and if there are we will add the invalid class, which will make the input border red
                    type="email" 
                    name="email" 
                    id="email" 
                    value="<%= oldInput.email %>">
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input 
                    class="<%= validationErrors.find(e => e.param === 'password') ? 'invalid' : '' %>"
                    type="password" 
                    name="password" 
                    id="password" 
                    value="<%= oldInput.password %>">
            </div>
            <div class="form-control">
                <label for="confirmPassword">Confirm Password</label>
                <input 
                    class="<%= validationErrors.find(e => e.param === 'confirmPassword') ? 'invalid' : '' %>"
                    type="password" 
                    name="confirmPassword" 
                    id="confirmPassword" 
                    value="<%= oldInput.confirmPassword %>">
            </div>
            <input type="hidden" name="_csrf" value="<%= csrfToken %>">
            <button class="btn" type="submit">Signup</button>
        </form>
    </main>
<%- include('../includes/end.ejs') %>< */}




// 295. Add Validation to Login

const crypto = require('crypto');

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const { validationResult } = require('express-validator/check');

const User = require('../models/user');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        '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'
    }
  })
);

exports.getLogin = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message,
    oldInput: {
      email: '',
      password: ''
    },
    validationErrors: []
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    errorMessage: message,
    oldInput: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationErrors: []
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).render('auth/login', { 
      path: '/login',
      pageTitle: 'Login',
      errorMessage: errors.array()[0].msg,
      oldInput: {
        email: email, // here we are sending the inputs in order to repopulate the inputs
        password: password
      },
      validationErrors: errors.array() // here we are sending the errors array
    });
  }

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.status(422).render('auth/login', { // here we are not using 'flash errors' inseated we are using validation as we did to signup page a lecture before
          path: '/login',
          pageTitle: 'Login',
          errorMessage: 'Invalid email or password.', // here we are setting the message we want to display
          oldInput: { // here we are givin the old values of input in order to 'repopulate the inputs
            email: email,
            password: password
          },
          validationErrors: [] // here the validation errors is empty cause we already set the message
        });
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              res.redirect('/');
            });
          }
          return res.status(422).render('auth/login', {
            path: '/login',
            pageTitle: 'Login',
            errorMessage: 'Invalid email or password.',
            oldInput: {
              email: email,
              password: password
            },
            validationErrors: []
          });
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render('auth/signup', {
      path: '/signup',
      pageTitle: 'Signup',
      errorMessage: errors.array()[0].msg,
      oldInput: {
        email: email,
        password: password,
        confirmPassword: req.body.confirmPassword
      },
      validationErrors: errors.array()
    });
  }

  bcrypt
    .hash(password, 12)
    .then(hashedPassword => {
      const user = new User({
        email: email,
        password: hashedPassword,
        cart: { items: [] }
      });
      return user.save();
    })
    .then(result => {
      res.redirect('/login');
      // return transporter.sendMail({
      //   to: email,
      //   from: 'shop@node-complete.com',
      //   subject: 'Signup succeeded!',
      //   html: '<h1>You successfully signed up!</h1>'
      // });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

exports.getReset = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/reset', {
    path: '/reset',
    pageTitle: 'Reset Password',
    errorMessage: message
  });
};

exports.postReset = (req, res, next) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
      return res.redirect('/reset');
    }
    const token = buffer.toString('hex');
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          req.flash('error', 'No account with that email found.');
          return res.redirect('/reset');
        }
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        return user.save();
      })
      .then(result => {
        res.redirect('/');
        transporter.sendMail({
          to: req.body.email,
          from: 'shop@node-complete.com',
          subject: 'Password reset',
          html: `
            <p>You requested a password reset</p>
            <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</p>
          `
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};

exports.getNewPassword = (req, res, next) => {
  const token = req.params.token;
  User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } })
    .then(user => {
      let message = req.flash('error');
      if (message.length > 0) {
        message = message[0];
      } else {
        message = null;
      }
      res.render('auth/new-password', {
        path: '/new-password',
        pageTitle: 'New Password',
        errorMessage: message,
        userId: user._id.toString(),
        passwordToken: token
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postNewPassword = (req, res, next) => {
  const newPassword = req.body.password;
  const userId = req.body.userId;
  const passwordToken = req.body.passwordToken;
  let resetUser;

  User.findOne({
    resetToken: passwordToken,
    resetTokenExpiration: { $gt: Date.now() },
    _id: userId
  })
    .then(user => {
      resetUser = user;
      return bcrypt.hash(newPassword, 12);
    })
    .then(hashedPassword => {
      resetUser.password = hashedPassword;
      resetUser.resetToken = undefined;
      resetUser.resetTokenExpiration = undefined;
      return resetUser.save();
    })
    .then(result => {
      res.redirect('/login');
    })
    .catch(err => {
      console.log(err);
    });
};

// /routes/auth.js

const express = require('express');
const { check, body } = require('express-validator/check');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post(
  '/login',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email address.')
      .normalizeEmail(), // this will normalize the mail, it will tranform all the characters to lowercase
    body('password', 'Password has to be valid.')
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim()
  ],
  authController.postLogin
);

router.post(
  '/signup',
  [
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        // if (value === 'test@test.com') {
        //   throw new Error('This email address if forbidden.');
        // }
        // return true;
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject(
              'E-Mail exists already, please pick a different one.'
            );
          }
        });
      })
      .normalizeEmail(),
    body(
      'password',
      'Please enter a password with only numbers and text and at least 5 characters.'
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body('confirmPassword')
      .trim()
      .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords have to match!');
      }
      return true;
    })
  ],
  authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;




// 296. Sanitazing Data

// /routes/auth.js

const express = require('express');
const { check, body } = require('express-validator/check');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post(
  '/login',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email address.')
      .normalizeEmail(), // this will make the email lowercase()
    body('password', 'Password has to be valid.')
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim() // here we are trim the password which the user entered
  ],
  authController.postLogin
);

router.post(
  '/signup',
  [
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        // if (value === 'test@test.com') {
        //   throw new Error('This email address if forbidden.');
        // }
        // return true;
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject(
              'E-Mail exists already, please pick a different one.'
            );
          }
        });
      })
      .normalizeEmail(),
    body(
      'password',
      'Please enter a password with only numbers and text and at least 5 characters.'
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body('confirmPassword')
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
          throw new Error('Passwords have to match!');
      }
      return true;
    })
  ],
  authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;




// 297. Validating Product Addition




// 298. Validating Product Editing

// /routes/admin.js

const path = require('path');

const express = require('express');
const { body } = require('express-validator/check');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post(
  '/add-product',
  [
    body('title')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('imageUrl').isURL(),
    body('price').isFloat(),
    body('description')
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth,
  adminController.postAddProduct
);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post(
  '/edit-product',
  [
    body('title')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('imageUrl').isURL(),
    body('price').isFloat(),
    body('description')
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth,
  adminController.postEditProduct
);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;


// /controllers/admin.js

const { validationResult } = require('express-validator/check');

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
    hasError: false,
    errorMessage: null,
    validationErrors: []
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/edit-product',
      editing: false,
      hasError: true,
      product: {
        title: title,
        imageUrl: imageUrl,
        price: price,
        description: description
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    userId: req.user
  });
  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product,
        hasError: false,
        errorMessage: null,
        validationErrors: []
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: true,
      hasError: true,
      product: {
        title: updatedTitle,
        imageUrl: updatedImageUrl,
        price: updatedPrice,
        description: updatedDesc,
        _id: prodId
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

  Product.findById(prodId)
    .then(product => {
      if (product.userId.toString() !== req.user._id.toString()) {
        return res.redirect('/');
      }
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save().then(result => {
        console.log('UPDATED PRODUCT!');
        res.redirect('/admin/products');
      });
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.find({ userId: req.user._id })
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then(products => {
      console.log(products);
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteOne({ _id: prodId, userId: req.user._id })
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};




// 300.




// 303. Analyzing the Error Handling in the Current Project




// 304. Errors - Some Theory

// If we don't handle our errors from the application, the application will just crash  

// error-playground.js

const sum = (a, b) => {
  if (a && b) {
    return a + b;
  }
  throw new Error('Invalid arguments');
};

try {
  console.log(sum(1));
} catch (error) {
  console.log('Error occurred!');
//   console.log(error);
}

// console.log(sum(1));
console.log('This works!');



// 305. Throwing Errors in Code

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
  'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      if(!user) { // this  in case that user was delete from the databese
        return next();
      }
      req.user = user;
      next();
    })
    .catch(err => {
      throw new Error(err); // if we have some tehnical issue(connecting to our database in this case) we are throwing an error, express give us a way to handle this errors, that's why we are doing it like this
    });
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });




// 306. Returning Error Pages  

// /controllers/admin.js

const mongoose = require('mongoose');

const { validationResult } = require('express-validator/check');

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
    hasError: false,
    errorMessage: null,
    validationErrors: []
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false,
      hasError: true,
      product: {
        title: title,
        imageUrl: imageUrl,
        price: price,
        description: description
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

  const product = new Product({
    _id: new mongoose.Types.ObjectId('5c4ad9963b8f0c27b867d18f'), // here we are setting the id of the new product that we will create with an id of an existing product in the database to simulate an err(technical error i guess)
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    userId: req.user
  });
  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => { // we are doing everything to handle the error in this catch block cause this is an async error
      // return res.status(500).render('admin/edit-product', {
      //   pageTitle: 'Add Product',
      //   path: '/admin/add-product',
      //   editing: false,
      //   hasError: true,
      //   product: {
      //     title: title,
      //     imageUrl: imageUrl,
      //     price: price,
      //     description: description
      //   },
      //   errorMessage: 'Database operation failed, please try again.',
      //   validationErrors: []
      // });
      res.redirect('/500'); // in case that we want to create an object with an id that already exists for another product in the database we redirect to '/500'
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product,
        hasError: false,
        errorMessage: null,
        validationErrors: []
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: true,
      hasError: true,
      product: {
        title: updatedTitle,
        imageUrl: updatedImageUrl,
        price: updatedPrice,
        description: updatedDesc,
        _id: prodId
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

  Product.findById(prodId)
    .then(product => {
      if (product.userId.toString() !== req.user._id.toString()) {
        return res.redirect('/');
      }
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save().then(result => {
        console.log('UPDATED PRODUCT!');
        res.redirect('/admin/products');
      });
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.find({ userId: req.user._id })
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then(products => {
      console.log(products);
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteOne({ _id: prodId, userId: req.user._id })
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};


// /controllers/error.js

exports.get404 = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: '/404',
    isAuthenticated: req.session.isLoggedIn
  });
};

exports.get500 = (req, res, next) => {
  res.status(500).render('500', { // here we set the status of 500
    pageTitle: 'Error',
    path: '/500',
    isAuthenticated: req.session.isLoggedIn
  });
};




// 307. Using the Express.js Error Handling Middleware

// /controllers/admin.js

const mongoose = require('mongoose');

const { validationResult } = require('express-validator/check');

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
    hasError: false,
    errorMessage: null,
    validationErrors: []
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false,
      hasError: true,
      product: {
        title: title,
        imageUrl: imageUrl,
        price: price,
        description: description
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

  const product = new Product({
    _id: new mongoose.Types.ObjectId('5c4ad9963b8f0c27b867d18f'),
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    userId: req.user
  });
  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      // return res.status(500).render('admin/edit-product', {
      //   pageTitle: 'Add Product',
      //   path: '/admin/add-product',
      //   editing: false,
      //   hasError: true,
      //   product: {
      //     title: title,
      //     imageUrl: imageUrl,
      //     price: price,
      //     description: description
      //   },
      //   errorMessage: 'Database operation failed, please try again.',
      //   validationErrors: []
      // });
      // res.redirect('/500');
      const error = new Error(err); // creating an 'error' with the 'err' from 'catch' block
      error.httpStatusCode = 500; // setting status 500
      return next(error); // in case of an error express will know this and will skip all the middlewares till the 'error middleware'
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product,
        hasError: false,
        errorMessage: null,
        validationErrors: []
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: true,
      hasError: true,
      product: {
        title: updatedTitle,
        imageUrl: updatedImageUrl,
        price: updatedPrice,
        description: updatedDesc,
        _id: prodId
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

  Product.findById(prodId)
    .then(product => {
      if (product.userId.toString() !== req.user._id.toString()) {
        return res.redirect('/');
      }
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save().then(result => {
        console.log('UPDATED PRODUCT!');
        res.redirect('/admin/products');
      });
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.find({ userId: req.user._id })
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then(products => {
      console.log(products);
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteOne({ _id: prodId, userId: req.user._id })
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};


// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
  'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      if (!user) {
        return next();
      }
      req.user = user;
      next();
    })
    .catch(err => {
      throw new Error(err);
    });
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.get('/500', errorController.get500);

app.use(errorController.get404);

app.use((error, req, res, next) => { // this an error middleware which will handle errors, in case that there are some errors, express will skip all the other middlewares in between and it will reach this 'error' middleware
  res.redirect('/500');
});

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });




// 308. Updating the App




// 309. Using the Error Handling Middleware Correctly

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
  'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use((req, res, next) => {
  // throw new Error('Sync Dummy')
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      if (!user) {
        return next();
      }
      req.user = user;
      next();
    })
    .catch(err => {
      next(new Error(err)); // inside the promise of callbacks we have to use next with errors
    });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.get('/500', errorController.get500);

app.use(errorController.get404);

app.use((error, req, res, next) => { 
  // res.redirect('/500');
  res.status(500).render('500', {
    pageTitle: 'Error',
    path: '/500',
    isAuthenticated: req.session.isLoggedIn
  });
});

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });




// 310. Status Code  




// 315. Adding a File Picker to the Frontend




// 316. Handling Multipart Form Data

// npm install --save multer  // parsing incoming request, like files, it's able to handle file requests or requests with mixed data

// /views/admin/edit-product.ejs

// <%- include('../includes/head.ejs') %>
//     <link rel="stylesheet" href="/css/forms.css">
//     <link rel="stylesheet" href="/css/product.css">
// </head>

// <body>
//    <%- include('../includes/navigation.ejs') %>

//     <main>
//         <% if (errorMessage) { %>
//             <div class="user-message user-message--error"><%= errorMessage %></div>
//         <% } %>
//         <form class="product-form" action="/admin/<% if (editing) { %>edit-product<% } else { %>add-product<% } %>" method="POST" enctype="multipart/form-data"> // this means that we will have file to upload or somethng like that
//             <div class="form-control">
//                 <label for="title">Title</label>
//                 <input 
//                     class="<%= validationErrors.find(e => e.param === 'title') ? 'invalid' : '' %>"
//                     type="text" 
//                     name="title" 
//                     id="title" 
//                     value="<% if (editing || hasError) { %><%= product.title %><% } %>">
//             </div>
//             <!-- <div class="form-control">
//                 <label for="imageUrl">Image URL</label>
//                 <input 
//                     class="<%= validationErrors.find(e => e.param === 'imageUrl') ? 'invalid' : '' %>"
//                     type="text" 
//                     name="imageUrl" 
//                     id="imageUrl" 
//                     value="<% if (editing || hasError) { %><%= product.imageUrl %><% } %>">
//             </div> -->
//             <div class="form-control">
//                 <label for="image">Image</label>
//                 <input 
//                     type="file" 
//                     name="image" 
//                     id="image " >
//             </div>
//             <div class="form-control">
//                 <label for="price">Price</label>
//                 <input 
//                     class="<%= validationErrors.find(e => e.param === 'price') ? 'invalid' : '' %>"
//                     type="number" 
//                     name="price" 
//                     id="price" 
//                     step="0.01" 
//                     value="<% if (editing || hasError) { %><%= product.price %><% } %>">
//             </div>
//             <div class="form-control">
//                 <label for="description">Description</label>
//                 <textarea 
//                     class="<%= validationErrors.find(e => e.param === 'description') ? 'invalid' : '' %>"
//                     name="description" 
//                     id="description" 
//                     rows="5"><% if (editing || hasError) { %><%= product.description %><% } %></textarea>
//             </div>
//             <% if (editing) { %>
//                 <input type="hidden" value="<%= product._id %>" name="productId">
//             <% } %>

//             <input type="hidden" name="_csrf" value="<%= csrfToken %>">
//             <button class="btn" type="submit"><% if (editing) { %>Update Product<% } else { %>Add Product<% } %></button>
//         </form>
//     </main>
// <%- include('../includes/end.ejs') %>




// 317. Handling File Uploads with Multer

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');
const multer = require('multer'); // require multer

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
  'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({dest: 'images'}).single('image')); // executing multer middleware for every incoming request, '.single('image')' means that will parse just one 'file' with the name 'image', '{dest: 'images}' this means that the multer will transform the 'image' which we are uploading from the 'buffer' to actually a 'binary image' in the folder 'images'(from the root directory of the project)
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use((req, res, next) => {
  // throw new Error('Sync Dummy')
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      if (!user) {
        return next();
      }
      req.user = user;
      next();
    })
    .catch(err => {
      next(new Error(err)); 
    });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.get('/500', errorController.get500);

app.use(errorController.get404);

app.use((error, req, res, next) => { 
  // res.redirect('/500');
  res.status(500).render('500', {
    pageTitle: 'Error',
    path: '/500',
    isAuthenticated: req.session.isLoggedIn
  });
});

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });


// /controllers/admin.js

const mongoose = require('mongoose');

const { validationResult } = require('express-validator/check');

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
    hasError: false,
    errorMessage: null,
    validationErrors: []
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.file; // here we are looking for the image in the 'request.file'
  const price = req.body.price;
  const description = req.body.description;
  console.log(imageUrl);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false,
      hasError: true,
      product: {
        title: title,
        imageUrl: imageUrl,
        price: price,
        description: description
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

  const product = new Product({
    // _id: new mongoose.Types.ObjectId('5c4ad9963b8f0c27b867d18f'),
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    userId: req.user
  });
  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      // return res.status(500).render('admin/edit-product', {
      //   pageTitle: 'Add Product',
      //   path: '/admin/add-product',
      //   editing: false,
      //   hasError: true,
      //   product: {
      //     title: title,
      //     imageUrl: imageUrl,
      //     price: price,
      //     description: description
      //   },
      //   errorMessage: 'Database operation failed, please try again.',
      //   validationErrors: []
      // });
      // res.redirect('/500');
      const error = new Error(err); 
      error.httpStatusCode = 500;
      return next(error); 
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product,
        hasError: false,
        errorMessage: null,
        validationErrors: []
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: true,
      hasError: true,
      product: {
        title: updatedTitle,
        imageUrl: updatedImageUrl,
        price: updatedPrice,
        description: updatedDesc,
        _id: prodId
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

  Product.findById(prodId)
    .then(product => {
      if (product.userId.toString() !== req.user._id.toString()) {
        return res.redirect('/');
      }
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save().then(result => {
        console.log('UPDATED PRODUCT!');
        res.redirect('/admin/products');
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getProducts = (req, res, next) => {
  Product.find({ userId: req.user._id })
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then(products => {
      console.log(products);
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteOne({ _id: prodId, userId: req.user._id })
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};




// 318. Configuring Multer to Adjust Filename Pathmongodb

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');
const multer = require('multer'); 

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
  'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
const csrfProtection = csrf();

const fileStorage = multer.diskStorage({ // here we are we setting where the file will be stored and their name
  destination: (req, file, cb) => {
    cb(null, 'images'); // where this the file we are uploaing will be stored(this is the folder name )
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname); // how files will be named(dateNow) and original name
  } 
});

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ storage: fileStorage }).single('image')); // and here we are just telling the 'storage' to be  what we already define as 'fileStorega' above 
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use((req, res, next) => {
  // throw new Error('Sync Dummy')
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      if (!user) {
        return next();
      }
      req.user = user;
      next();
    })
    .catch(err => {
      next(new Error(err)); 
    });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.get('/500', errorController.get500);

app.use(errorController.get404);

app.use((error, req, res, next) => { 
  // res.redirect('/500');
  res.status(500).render('500', {
    pageTitle: 'Error',
    path: '/500',
    isAuthenticated: req.session.isLoggedIn
  });
});

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });




// 319. Filtering Files by Mimetype  

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');
const multer = require('multer'); 

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
  'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
const csrfProtection = csrf();

const fileStorage = multer.diskStorage({ 
  destination: (req, file, cb) => {
    cb(null, 'images'); 
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname); 
  } 
});

const fileFilter = (req, file, cb) => {
  if(
    file.minetype === 'image/png' || 
    file.minetype === 'image/jpg' || 
    file.minetype === 'image/jpeg'   // here we define what kind of file we are allowing our app to upload
    ) {
    cb(null, true); // in case it has the extensions that we want it will upload 
  } else {
    cb(null, false); // if not it will not upload
  }
}

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));   // fileFilter: fileFilter   is our function which filter the types of file which we are uploading
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use((req, res, next) => {
  // throw new Error('Sync Dummy')
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      if (!user) {
        return next();
      }
      req.user = user;
      next();
    })
    .catch(err => {
      next(new Error(err)); 
    });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.get('/500', errorController.get500);

app.use(errorController.get404);

app.use((error, req, res, next) => { 
  // res.redirect('/500');
  res.status(500).render('500', {
    pageTitle: 'Error',
    path: '/500',
    isAuthenticated: req.session.isLoggedIn
  });
});

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });




// 320. Storing File Data in the Database

// Files should not be stored in the database, are too big, it's too inefficient to store them in a database, so we we'll store them in the file system(but of course you need to store something in a database, like the path to the file)

// /controllers/admin.js

const mongoose = require('mongoose');

const { validationResult } = require('express-validator/check');

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
    hasError: false,
    errorMessage: null,
    validationErrors: []
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const image = req.file;
  const price = req.body.price;
  const description = req.body.description;
  if (!image) { // if there is no image(picture) we will executte the code below
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false,
      hasError: true,
      product: {
        title: title,
        price: price,
        description: description
      },
      errorMessage: 'Attached file is not an image.',
      validationErrors: []
    });
  }
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false,
      hasError: true,
      product: {
        title: title,
        imageUrl: imageUrl,
        price: price,
        description: description
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

  const imageUrl = image.path; // this is the path to the image in the file system

  const product = new Product({
    // _id: new mongoose.Types.ObjectId('5c4ad9963b8f0c27b867d18f'),
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl, // here we are storing the imageUrl(which is path image) in the database
    userId: req.user
  });
  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      // return res.status(500).render('admin/edit-product', {
      //   pageTitle: 'Add Product',
      //   path: '/admin/add-product',
      //   editing: false,
      //   hasError: true,
      //   product: {
      //     title: title,
      //     imageUrl: imageUrl,
      //     price: price,
      //     description: description
      //   },
      //   errorMessage: 'Database operation failed, please try again.',
      //   validationErrors: []
      // });
      // res.redirect('/500');
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product,
        hasError: false,
        errorMessage: null,
        validationErrors: []
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const image = req.file; // if we want to edit a product here we will work with the file
  const updatedDesc = req.body.description;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: true,
      hasError: true,
      product: {
        title: updatedTitle,
        price: updatedPrice,
        description: updatedDesc,
        _id: prodId
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

  Product.findById(prodId)
    .then(product => {
      if (product.userId.toString() !== req.user._id.toString()) {
        return res.redirect('/');
      }
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      if(image) { // if there is an image(which was upload as a new image) we are setting the product image to 'image.path'(and in this case we will overwrite the image)
        product.imageUrl = image.path; 
      }
      return product.save().then(result => {
        console.log('UPDATED PRODUCT!');
        res.redirect('/admin/products');
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getProducts = (req, res, next) => {
  Product.find({ userId: req.user._id })
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then(products => {
      console.log(products);
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteOne({ _id: prodId, userId: req.user._id })
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};




// 322. Serving Images Statically

// app.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');
const multer = require('multer');

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
  'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/shop';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
const csrfProtection = csrf();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images'))); // here we are serving the images staticlly, so if someone want to access '/images' we will serve 'images' folder (in our case the products for images will access this folder)
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use((req, res, next) => {
  // throw new Error('Sync Dummy');
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      if (!user) {
        return next();
      }
      req.user = user;
      next();
    })
    .catch(err => {
      next(new Error(err));
    });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.get('/500', errorController.get500);

app.use(errorController.get404);

app.use((error, req, res, next) => {
  // res.status(error.httpStatusCode).render(...);
  // res.redirect('/500');
  res.status(500).render('500', {
    pageTitle: 'Error!',
    path: '/500',
    isAuthenticated: req.session.isLoggedIn
  });
});

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });




// 323. Downloading Files with Authentication

// /controllers/shop.js

exports.getInvoice = (req, res, next) => {
  const orderId = req.params.orderId;
  const invoiceName = 'invoice-' + orderId + '.pdf';
  const invoicePath = path.join('data', 'invoices', invoiceName);
  fs.readFile(invoicePath, (err, data) => { // with this we are able to download the incoive
    if(err) {
     return next(err);
    }
    res.send(data);
  });
};

// /routes/shop.js

router.get('/orders/:orderId', isAuth, shopController.getInvoice);




// 324. Setting File Type Headers

// /controllers/shop.js

const fs = require('fs'); // importing fs
const path = require('path'); // importing path

const Product = require('../models/product');
const Order = require('../models/order');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getIndex = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postOrder = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: { ...i.productId._doc } };
      });
      const order = new Order({
        user: {
          email: req.user.email,
          userId: req.user
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      return req.user.clearCart();
    })
    .then(() => {
      res.redirect('/orders');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getOrders = (req, res, next) => {
  Order.find({ 'user.userId': req.user._id })
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getInvoice = (req, res, next) => {
  const orderId = req.params.orderId;
  const invoiceName = 'invoice-' + orderId + '.pdf';
  const invoicePath = path.join('data', 'invoices', invoiceName);
  fs.readFile(invoicePath, (err, data) => {
    if(err) {
     return next(err);
    }
    res.setHeader('Content-Type', 'application/pdf');// here we are setting a header and we are telling that this is an 'pdf' and if we set this we can open the pdf in the browser
    res.setHeader('Content-Disposition', 'inline; filename="' + invoiceName +'"'); // this will set how the users will download the invoice, 'inline' it will open the pdf in a new tab, but if we use 'attachment' this will download the pdf, fileName is how our pdf will be named when we download it
    res.send(data);
  });
};




// 325. Restricting File Access

const fs = require('fs'); 
const path = require('path'); 

const Product = require('../models/product');
const Order = require('../models/order');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getIndex = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postOrder = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: { ...i.productId._doc } };
      });
      const order = new Order({
        user: {
          email: req.user.email,
          userId: req.user
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      return req.user.clearCart();
    })
    .then(() => {
      res.redirect('/orders');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getOrders = (req, res, next) => {
  Order.find({ 'user.userId': req.user._id })
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getInvoice = (req, res, next) => {
  const orderId = req.params.orderId; 
  Order.findById(orderId).then(order => { // here we are looking for the order with that id 
    if (!order) { // if it doesn't exist it will throw an err
      return next(new Error('No order found.'));
    }
    if(order.user.userId.toString() !== req.user._id.toString()) { // if the user which made that order isn't the user which is actually loggin, it will throw an err
      return next(new Error('Unauthorized'));
    } // if everything is ok, it will work
    const invoiceName = 'invoice-' + orderId + '.pdf';
    const invoicePath = path.join('data', 'invoices', invoiceName);
    fs.readFile(invoicePath, (err, data) => {
      if(err) {
      return next(err);
      }
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'inline; filename="' + invoiceName +'"'); 
      res.send(data);
    });
  }).catch(err => next(err));
};




// 326. Streaming Data vs Preloading Data

const fs = require('fs'); 
const path = require('path'); 

const Product = require('../models/product');
const Order = require('../models/order');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getIndex = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postOrder = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: { ...i.productId._doc } };
      });
      const order = new Order({
        user: {
          email: req.user.email,
          userId: req.user
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      return req.user.clearCart();
    })
    .then(() => {
      res.redirect('/orders');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getOrders = (req, res, next) => {
  Order.find({ 'user.userId': req.user._id })
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getInvoice = (req, res, next) => {
  const orderId = req.params.orderId; 
  Order.findById(orderId).then(order => { 
    if (!order) { 
      return next(new Error('No order found.'));
    }
    if(order.user.userId.toString() !== req.user._id.toString()) { 
      return next(new Error('Unauthorized'));
    } 
    const invoiceName = 'invoice-' + orderId + '.pdf';
    const invoicePath = path.join('data', 'invoices', invoiceName);
    // fs.readFile(invoicePath, (err, data) => {
    //   if(err) {
    //   return next(err);
    //   }
    //   res.setHeader('Content-Type', 'application/pdf');
    //   res.setHeader(
    //     'Content-Disposition', 
    //     'inline; filename="' + invoiceName +'"'
    //     ); 
    //   res.send(data);
    // }); // in this way the the file it's read entirely in the memory, this is OK for small files, but if the file is large it will take a lot of time(because of this, this is not the best approach) it is better if we are streaming it
    const file = fs.createReadStream(invoicePath); // here we are creating a Read Stream from 'invoicePath'
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition', 
      'inline; filename="' + invoiceName +'"'
    ); 
    file.pipe(res); // here we are piping the file to the 'res'(response), the data will be downloaded by the browser step by step and this is very good even for the large files cause the browser does not have to preload them in the memory
  })
  .catch(err => next(err));
};




// 327. Using PDFKit for .pdf Generation

// npm install --save pdfkit // this package helps us to create pdf files on the fly

const fs = require('fs'); 
const path = require('path'); 

const PDFDocument = require('pdfkit'); // importing pdfkit

const Product = require('../models/product');
const Order = require('../models/order');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getIndex = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postOrder = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: { ...i.productId._doc } };
      });
      const order = new Order({
        user: {
          email: req.user.email,
          userId: req.user
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      return req.user.clearCart();
    })
    .then(() => {
      res.redirect('/orders');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getOrders = (req, res, next) => {
  Order.find({ 'user.userId': req.user._id })
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getInvoice = (req, res, next) => {
  const orderId = req.params.orderId; 
  Order.findById(orderId)
    .then(order => { 
      if (!order) { 
        return next(new Error('No order found.'));
      }
      if(order.user.userId.toString() !== req.user._id.toString()) { 
        return next(new Error('Unauthorized'));
      } 
      const invoiceName = 'invoice-' + orderId + '.pdf';
      const invoicePath = path.join('data', 'invoices', invoiceName);

      const pdfDoc = new PDFDocument();
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition', 
        'inline; filename="' + invoiceName +'"'
      ); 
      pdfDoc.pipe(fs.createWriteStream(invoicePath)); // here we are creating a writing stream into invoicePath
      pdfDoc.pipe(res); // here we are piping the pdfDoc to response 

      pdfDoc.text('Hello World!'); // allow us to add a single line of text to the PDF document

      pdfDoc.end(); // here we are closing writing in the pdf document
      // fs.readFile(invoicePath, (err, data) => {
      //   if(err) {
      //   return next(err);
      //   }
      //   res.setHeader('Content-Type', 'application/pdf');
      //   res.setHeader(
      //     'Content-Disposition', 
      //     'inline; filename="' + invoiceName +'"'
      //     ); 
      //   res.send(data);
      // }); 
      // const file = fs.createReadStream(invoicePath); 
      
      // file.pipe(res); 
  })
  .catch(err => next(err));
};




// 328. Generating .pdf Files with Order Data

// /controllers/shop.js

const fs = require('fs'); 
const path = require('path'); 

const PDFDocument = require('pdfkit'); 

const Product = require('../models/product');
const Order = require('../models/order');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getIndex = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postOrder = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: { ...i.productId._doc } };
      });
      const order = new Order({
        user: {
          email: req.user.email,
          userId: req.user
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      return req.user.clearCart();
    })
    .then(() => {
      res.redirect('/orders');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getOrders = (req, res, next) => {
  Order.find({ 'user.userId': req.user._id })
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getInvoice = (req, res, next) => {
  const orderId = req.params.orderId; 
  Order.findById(orderId)
    .then(order => { 
      if (!order) { 
        return next(new Error('No order found.'));
      }
      if(order.user.userId.toString() !== req.user._id.toString()) { 
        return next(new Error('Unauthorized'));
      } 
      const invoiceName = 'invoice-' + orderId + '.pdf';
      const invoicePath = path.join('data', 'invoices', invoiceName);

      const pdfDoc = new PDFDocument();
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition', 
        'inline; filename="' + invoiceName +'"'
      ); 
      pdfDoc.pipe(fs.createWriteStream(invoicePath)); 
      pdfDoc.pipe(res); 

      pdfDoc.fontSize(26).text('Invoice', { // font size for this row will be 26
        underline: true
      }); 
      pdfDoc.text('------------------------');
      let totalPrice = 0;
      order.products.forEach(prod => { // looping through products from this order
        totalPrice += prod.quantity * prod.product.price;
        pdfDoc
          .fontSize(14)
          .text(
            prod.product.title + 
            ' - ' + 
            prod.quantity + 
            ' x ' + 
            '$' + 
            prod.product.price
          ); 
      });
      pdfDoc.text('---');
      pdfDoc.fontSize(20).text('Total Price: $' + totalPrice);

      pdfDoc.end(); 
      // fs.readFile(invoicePath, (err, data) => {
      //   if(err) {
      //   return next(err);
      //   }
      //   res.setHeader('Content-Type', 'application/pdf');
      //   res.setHeader(
      //     'Content-Disposition', 
      //     'inline; filename="' + invoiceName +'"'
      //     ); 
      //   res.send(data);
      // }); 
      // const file = fs.createReadStream(invoicePath); 
      
      // file.pipe(res); 
  })
  .catch(err => next(err));
};




// 329. Deleting Files

// /util/file.js

const fs = require('fs');

const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => { // this will delete file from the 'filePath'
        if (err) {
            throw (err);
        }
    });
}

exports.deleteFile = deleteFile;


// /controllers/admin.js

const mongoose = require('mongoose');

const fileHelper = require('../util/file'); // importing it from 'util' folder

const { validationResult } = require('express-validator/check');

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
    hasError: false,
    errorMessage: null,
    validationErrors: []
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const image = req.file;
  const price = req.body.price;
  const description = req.body.description;
  if (!image) { 
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false,
      hasError: true,
      product: {
        title: title,
        price: price,
        description: description
      },
      errorMessage: 'Attached file is not an image.',
      validationErrors: []
    });
  }
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false,
      hasError: true,
      product: {
        title: title,
        imageUrl: imageUrl,
        price: price,
        description: description
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

  const imageUrl = image.path; 

  const product = new Product({
    // _id: new mongoose.Types.ObjectId('5c4ad9963b8f0c27b867d18f'),
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl, 
    userId: req.user
  });
  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      // return res.status(500).render('admin/edit-product', {
      //   pageTitle: 'Add Product',
      //   path: '/admin/add-product',
      //   editing: false,
      //   hasError: true,
      //   product: {
      //     title: title,
      //     imageUrl: imageUrl,
      //     price: price,
      //     description: description
      //   },
      //   errorMessage: 'Database operation failed, please try again.',
      //   validationErrors: []
      // });
      // res.redirect('/500');
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product,
        hasError: false,
        errorMessage: null,
        validationErrors: []
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const image = req.file; 
  const updatedDesc = req.body.description;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: true,
      hasError: true,
      product: {
        title: updatedTitle,
        price: updatedPrice,
        description: updatedDesc,
        _id: prodId
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

  Product.findById(prodId)
    .then(product => {
      if (product.userId.toString() !== req.user._id.toString()) {
        return res.redirect('/');
      }
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      if(image) { 
        fileHelper.deteleFile(product.imageUrl); // here we are deleting the old image as we can see(i guess)
        product.imageUrl = image.path; 
      }
      return product.save().then(result => {
        console.log('UPDATED PRODUCT!');
        res.redirect('/admin/products');
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getProducts = (req, res, next) => {
  Product.find({ userId: req.user._id })
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then(products => {
      console.log(products);
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return next(new Error('Product not found.'));
      }
      fileHelper.deleteFile(product.imageUrl); // here as well we are deleting the image from file system
      return Product.deleteOne({ _id: prodId, userId: req.user._id });
    })
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};




// 334. Adding Pagination Links




// 335. Retrieving a Chunk of Data

// /controllers/shop.js

const fs = require('fs'); 
const path = require('path'); 

const PDFDocument = require('pdfkit'); 

const Product = require('../models/product');
const Order = require('../models/order');

const ITEMS_PER_PAGE = 2; // items that will display on the page

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getIndex = (req, res, next) => {
  const page = req.query.page; // store the query of the page which is take from the url from views
  Product.find()
    .skip((page - 1) * ITEMS_PER_PAGE) // this will skip this amount of products
    .limit(ITEMS_PER_PAGE) // this will limit to this amount of products
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postOrder = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: { ...i.productId._doc } };
      });
      const order = new Order({
        user: {
          email: req.user.email,
          userId: req.user
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      return req.user.clearCart();
    })
    .then(() => {
      res.redirect('/orders');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getOrders = (req, res, next) => {
  Order.find({ 'user.userId': req.user._id })
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getInvoice = (req, res, next) => {
  const orderId = req.params.orderId; 
  Order.findById(orderId)
    .then(order => { 
      if (!order) { 
        return next(new Error('No order found.'));
      }
      if(order.user.userId.toString() !== req.user._id.toString()) { 
        return next(new Error('Unauthorized'));
      } 
      const invoiceName = 'invoice-' + orderId + '.pdf';
      const invoicePath = path.join('data', 'invoices', invoiceName);

      const pdfDoc = new PDFDocument();
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition', 
        'inline; filename="' + invoiceName +'"'
      ); 
      pdfDoc.pipe(fs.createWriteStream(invoicePath)); 
      pdfDoc.pipe(res); 

      pdfDoc.fontSize(26).text('Invoice', { 
        underline: true
      }); 
      pdfDoc.text('------------------------');
      let totalPrice = 0;
      order.products.forEach(prod => { 
        totalPrice += prod.quantity * prod.product.price;
        pdfDoc
          .fontSize(14)
          .text(
            prod.product.title + 
            ' - ' + 
            prod.quantity + 
            ' x ' + 
            '$' + 
            prod.product.price
          ); 
      });
      pdfDoc.text('---');
      pdfDoc.fontSize(20).text('Total Price: $' + totalPrice);

      pdfDoc.end(); 
      // fs.readFile(invoicePath, (err, data) => {
      //   if(err) {
      //   return next(err);
      //   }
      //   res.setHeader('Content-Type', 'application/pdf');
      //   res.setHeader(
      //     'Content-Disposition', 
      //     'inline; filename="' + invoiceName +'"'
      //     ); 
      //   res.send(data);
      // }); 
      // const file = fs.createReadStream(invoicePath); 
      
      // file.pipe(res); 
  })
  .catch(err => next(err));
};




// 337. Preparing Pagination Data on the Server

// /controllers/shop.js

const fs = require('fs'); 
const path = require('path'); 

const PDFDocument = require('pdfkit'); 

const Product = require('../models/product');
const Order = require('../models/order');

const ITEMS_PER_PAGE = 2; 

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getIndex = (req, res, next) => {
  const page = req.query.page; 
  let totalItems;

  Product.find()
    .countDocuments() // count all the documents
    .then(numProducts => {
      totalItems = numProducts; // here we have total items
      return Product.find()
        .skip((page - 1) * ITEMS_PER_PAGE) 
        .limit(ITEMS_PER_PAGE);
  })
  .then(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      totalItems: totalItems,
      hasNextPage: ITEMS_PER_PAGE * page < totalItems, // we are looking to see if we have a next page
      hasPreviousPage: page > 1, // if we have a previous page
      nextPage: page + 1, 
      previousPage: page - 1,
      lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE) // here we are looking to see which is the last page
    });
  })
  .catch(err => {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postOrder = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: { ...i.productId._doc } };
      });
      const order = new Order({
        user: {
          email: req.user.email,
          userId: req.user
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      return req.user.clearCart();
    })
    .then(() => {
      res.redirect('/orders');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getOrders = (req, res, next) => {
  Order.find({ 'user.userId': req.user._id })
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getInvoice = (req, res, next) => {
  const orderId = req.params.orderId; 
  Order.findById(orderId)
    .then(order => { 
      if (!order) { 
        return next(new Error('No order found.'));
      }
      if(order.user.userId.toString() !== req.user._id.toString()) { 
        return next(new Error('Unauthorized'));
      } 
      const invoiceName = 'invoice-' + orderId + '.pdf';
      const invoicePath = path.join('data', 'invoices', invoiceName);

      const pdfDoc = new PDFDocument();
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition', 
        'inline; filename="' + invoiceName +'"'
      ); 
      pdfDoc.pipe(fs.createWriteStream(invoicePath)); 
      pdfDoc.pipe(res); 

      pdfDoc.fontSize(26).text('Invoice', { 
        underline: true
      }); 
      pdfDoc.text('------------------------');
      let totalPrice = 0;
      order.products.forEach(prod => { 
        totalPrice += prod.quantity * prod.product.price;
        pdfDoc
          .fontSize(14)
          .text(
            prod.product.title + 
            ' - ' + 
            prod.quantity + 
            ' x ' + 
            '$' + 
            prod.product.price
          ); 
      });
      pdfDoc.text('---');
      pdfDoc.fontSize(20).text('Total Price: $' + totalPrice);

      pdfDoc.end(); 
      // fs.readFile(invoicePath, (err, data) => {
      //   if(err) {
      //   return next(err);
      //   }
      //   res.setHeader('Content-Type', 'application/pdf');
      //   res.setHeader(
      //     'Content-Disposition', 
      //     'inline; filename="' + invoiceName +'"'
      //     ); 
      //   res.send(data);
      // }); 
      // const file = fs.createReadStream(invoicePath); 
      
      // file.pipe(res); 
  })
  .catch(err => next(err));
};




// 338. Adding Dynamic Pagination Buttons

// /controllers/shop.js

exports.getIndex = (req, res, next) => {
  const page = +req.query.page || 1; // if we accessing for example localhost without any query params there
  let totalItems;

  Product.find()
    .countDocuments() 
    .then(numProducts => {
      totalItems = numProducts; 
      return Product.find()
        .skip((page - 1) * ITEMS_PER_PAGE) 
        .limit(ITEMS_PER_PAGE);
  })
  .then(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      currentPage: page,
      hasNextPage: ITEMS_PER_PAGE * page < totalItems, 
      hasPreviousPage: page > 1, 
      nextPage: page + 1, 
      previousPage: page - 1,
      lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE) 
    });
  })
  .catch(err => {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
};




// 339. Re-Using the Pagination Logic Controls




// 343. What aer Asynchronous Requests




// 344. Adding Client Side JS Code

// /views/admin/products.ejs

// <%- include('../includes/head.ejs') %>
//     <link rel="stylesheet" href="/css/product.css">
//     </head>

//     <body>
//         <%- include('../includes/navigation.ejs') %>

//             <main>
//                 <% if (prods.length > 0) { %>
//                     <div class="grid">
//                         <% for (let product of prods) { %>
//                             <article class="card product-item">
//                                 <header class="card__header">
//                                     <h1 class="product__title">
//                                         <%= product.title %>
//                                     </h1>
//                                 </header>
//                                 <div class="card__image">
//                                     <img src="/<%= product.imageUrl %>" alt="<%= product.title %>">
//                                 </div>
//                                 <div class="card__content">
//                                     <h2 class="product__price">$
//                                         <%= product.price %>
//                                     </h2>
//                                     <p class="product__description">
//                                         <%= product.description %>
//                                     </p>
//                                 </div>
//                                 <div class="card__actions">
//                                     <a href="/admin/edit-product/<%= product._id %>?edit=true" class="btn">Edit</a>
//                                     <input type="hidden" value="<%= product._id %>" name="productId">
//                                     <input type="hidden" name="_csrf" value="<%= csrfToken %>"> 
//                                     <button class="btn" type="button" onclick="deleteProduct(this)">Delete</button> // here on click it will happen what is on the deleteProduct() function (this will return that button and will help us to read other values from the DOM)
//                                 </div>
//                             </article>
//                             <% } %>
//                     </div>
//                     <% } else { %>
//                         <h1>No Products Found!</h1>
//                         <% } %>
//             </main>
//             <%- include('../includes/end.ejs') %>
//             <script src="/js/admin.js"></script> // imporing js script in the static way


// /public/js/admin.js

const deleteProduct = (btn) => {
  const proId = btn.parentNode.querySelector('[name=productId]').value; // we are reaching the parentNode of this button, which was clicked and after that we are looking to see which child of that parentNode has that attribute and after that we are storing his value in this variable
  const csrf = btn.parentNode.querySelector('[name=_csrf]').value;
};




// 346. Sending Handling Background Requests

// /routes/admin.js

const path = require('path');

const express = require('express');
const { body } = require('express-validator/check');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post(
  '/add-product',
  [
    body('title')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('price').isFloat(),
    body('description')
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth,
  adminController.postAddProduct
);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post(
  '/edit-product',
  [
    body('title')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('price').isFloat(),
    body('description')
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth,
  adminController.postEditProduct
);

router.delete('/product/:productId', isAuth, adminController.deleteProduct); // here we are using the delete method to delete the product with that id which we will send throug the views

module.exports = router;


// /controllers/admin.js

exports.deleteProduct = (req, res, next) => {
  const prodId = req.params.productId; // extracting the id from params
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return next(new Error('Product not found.'));
      }
      fileHelper.deleteFile(product.imageUrl); 
      return Product.deleteOne({ _id: prodId, userId: req.user._id });
    })
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.status(200).json({ message: 'Success!' }); // sending a JSON response if worked with status code
    })
    .catch(err => {
      res.status(500).json({ message: 'Deleting product failed!' }); // and also if not work as well JSON with status code
    });
};


// /public/js/admin.js

const deleteProduct = (btn) => {
  const prodId = btn.parentNode.querySelector('[name=productId]').value;
  const csrf = btn.parentNode.querySelector('[name=_csrf]').value;

  fetch('/admin/product/' + prodId, { // with fetch we can send data as well
    method: 'DELETE', // this is the method
    headers: { 
      'csrf-token': csrf // in the header we are sending the csrf-token
    }
  })
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};




// 347. Manipulating the DOM

// /public/js/admin.js

const deleteProduct = (btn) => {
  const prodId = btn.parentNode.querySelector('[name=productId]').value;
  const csrf = btn.parentNode.querySelector('[name=_csrf]').value;

  const productElement = btn.closest('article'); // from the btn(which we are pressing to delete an item ) it will look for the 'closest' element which is an 'article'

  fetch('/admin/product/' + prodId, {
    method: 'DELETE', 
    headers: { 
      'csrf-token': csrf 
    }
  })
    .then(result => {
      return result.json();
    })
    .then(data => {
      console.log(data);
      productElement.parentNode.removeChild(productElement); 
    })
    .catch(err => {
      console.log(err);
    });
};




// 350. How Payments Work




// 351. Adding a Checkout Page

// /routes/shop.js

router.get('/checkout', isAuth, shopController.getCheckout);

// /controllers/shop.js

exports.getCheckout = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      let total = 0;
      products.forEach(p => {
        total += p.quantity * p.productId.price;
      });
      res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout',
        products: products, 
        totalSum: total
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};




// 452. Using Stripe in Your App

// npm install --save stripe   // this install stripe which will help us to handle money in some way

// we used stripe just to see how it's working, if you wanna see and learn more rewatch the videos




// 355. What are REST APIs and why do we use Them

// REST Representational State Transfer - Transfer Data instead of User Interfaces so it will not render HTML pages it will render data and we leave that data to the Frontend like an mobile app or single page application or like Google API or something like that

// Only the response(and the request data) changes, NOT the general server-side logic! with an API




// 356. Accessing Data with REST APIs

// We we'll transfer data in JSON format (can be easily converted to JavaScript)




// 357. Understanding the Routing HTTP Methods

// the method (GET and POST here) and the path it's an endpoint of the API

// When we are working with the browser, only and not with JS in the browser, but just with forms and links the we only have GET and POST methods available, these are the two methodds the browser natively knows or the browser HTML knows.


// Asynchronous requests JS or building mobile apps has more HTTP methods

// GET - get a resource from the server

// POST - post a resource to the server(create or append resource)


// PUT - put a resourse onto the server(create or overwrite a resourse)

// PATCH - update parts of an existing resource on the server

// DELETE - delete a resource on the server

// --OPTIONAL--   - determine whether a follow-up request is allowed(sent automatically by the browser)




// 358. REST APIs - The Core Principles




// 359. Creating our REST API Project Implementing the Route Setup

// we install express and nodemon and body-parser




// 360. Sending Requests Responses and Working with Postman

// /controllers/feed.js

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: 'First Post', content: 'This is the first post!' }]
  }); // this will be converted in the JSON format and send back to the client who send the request also we set the status to 200 which means that everything is OK(200 meand success or something like that)( all the time when we use APIs we need to set the status cause the client has to know which user interface to render based on our response(especially error codes are super important to pass back to the client so the client just have a look at status code and find out which interface to render))
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db(here will be some code)
  res.status(201).json({ // 201 status code is better to say "SUCCESS a resource was created"
    message: 'Post created successfully!',
    post: { id: new Date().toISOString(), title: title, content: content }
  });
}

// For APIs we use JSON data for requests and for responses

// in order to test some API (post method for example) we are using POSTMAN


// /routes/feed.js

const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedController.getPosts);

// POST /feed/post
router.post('/post', feedController.createPost);

module.exports = router

// app.js
const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); // x-form-urlencoded <form>
app.use(bodyParser.json()); // this is able to parse json data from incoming request (this is good for application/json)

app.use('/feed', feedRoutes);

app.listen(8080);




// 361. REST APIs Clients CORS Errors

// CORS Cors-Origin Resource Sharing
// if we have the client and the server on the same host but on different ports, and we wanna fetch something from the server there will be a CORS ERROR (security reasons) 
// app.js

const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); // x-form-urlencoded <form>
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // will allow request from anyone
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUTH, PATCH, DELETE'); // will allow these methods to our API
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // and it will allow to set headers(these ones)
  next();
});

app.use('/feed', feedRoutes);

app.listen(8080);


// https://codepen.io/peterbrw/pen/LqLvqg?editors=1010    here we are making some requests to our API




// 362. Sending POST Requests

// https://codepen.io/peterbrw/pen/LqLvqg?editors=1010

const getButton = document.getElementById('get');
const postButton = document.getElementById('post');

getButton.addEventListener('click', () => {
  fetch('http://localhost:8080/feed/posts')
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err));
});

postButton.addEventListener('click', () =>{
  fetch('http://localhost:8080/feed/post', {
    method: 'POST',
    body: JSON.stringify({ // here we are stringify the data we want to send
      title: 'A Codepen Post',
      content: 'Created via Codepen'
    }),
    headers: { // here we are setting the header with the content-type in order for our API to understand what we are sending 
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err));
});




// 369. Fetching Lists of Posts

// /controllers/feed.js  restjs

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '1',
        title: 'First Post', 
        content: 'This is the first post!', 
        imageUrl: 'images/duck.jpg',
        creator: {
          name: 'Maximilian'
        },
        createdAt: new Date() // just creating some dummy data to be fetch from the frontend react application
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db(here will be some code)
  res.status(201).json({ 
    message: 'Post created successfully!',
    post: { id: new Date().toISOString(), title: title, content: content }
  });
}




// 370. Adding a Create Post Endpoint

// /controllers/feed.js  restjs

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '1',
        title: 'First Post', 
        content: 'This is the first post!', 
        imageUrl: 'images/duck.jpg',
        creator: {
          name: 'Maximilian'
        },
        createdAt: new Date()
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db(here will be some code)
  res.status(201).json({ 
    message: 'Post created successfully!',
    post: {
      _id: new Date().toISOString(), 
      title: title, 
      content: content, 
      creator: { name: 'Maximilian' }, // here we are embedded some data in order for frontend to work or to simulate something
      createdAt: new Date()
    }
  });
}




// 371. Adding Server Side Validation

// npm install --save express-validator   helps us with validation

// /routes/feed.js restjs

const express = require('express');
const { body } = require('express-validator/check'); // using this to validate

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedController.getPosts);

// POST /feed/post
router.post(
  '/post', 
  [
    body('title') // here we are setting the rules of validation for 'title'
      .trim() // trimming 
      .isLength({ min: 5 }), // minimum length
    body('content') // here we are setting the rules of validation for 'content'
      .trim()
      .isLength({ min: 5 })
  ], 
  feedController.createPost
);

module.exports = router


// /controllers/feed.js restjs

const { validationResult } = require('express-validator/check'); // importing the validator

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '1',
        title: 'First Post', 
        content: 'This is the first post!', 
        imageUrl: 'images/duck.jpg',
        creator: {
          name: 'Maximilian'
        },
        createdAt: new Date()
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req); // using the validation result on the request will extract any errors that validation package gather
  if(!errors.isEmpty()) { // if there are errors
    return res 
      .status(422)  // setting this status 
      .json({ // returning in the json format
        message: 'Validation failed, entered data is incorrect.', // this message
        errors: errors.array() // and all the errors
      });
  }
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db(here will be some code)
  res.status(201).json({ 
    message: 'Post created successfully!',
    post: {
      _id: new Date().toISOString(), 
      title: title, 
      content: content, 
      creator: { name: 'Maximilian' },
      createdAt: new Date()
    }
  });
}




// 372. Setting Up a Post Model

// app.js restjs

mongoose.connect(
  'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/messages?retryWrites=true' // connecting to the database 'messages'(i think it will create one for us)
  ).then(result => {
    app.listen(8080);
  }).catch(err => console.log(err));


// /models/post.js restjs

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      tye: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    creator: {
      type: Object,
      required: String
    }
  },
  { timestamps: true } // with this mongoose will automatically add timestamps when a new version is added to the database, when a new object is added to the database, so we will get an automatically created and updated timestamp 
);

module.exports = mongoose.model('Post', postSchema);




// 373. Storing Posts in the Database

// /controllers/feed.js

const { validationResult } = require('express-validator/check');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '1',
        title: 'First Post',
        content: 'This is the first post!',
        imageUrl: 'images/duck.jpg',
        creator: {
          name: 'Maximilian'
        },
        createdAt: new Date()
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Validation failed, entered data is incorrect.',
      errors: errors.array()
    });
  }
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
    imageUrl: 'images/duck.jpg',
    creator: { name: 'Maximilian' }
  });
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: result // result here should be the 'created post'
      });
    })
    .catch(err => {
      console.log(err);
    });
};




// 373. Static Images Error Handling

// /controllers/feed.js reactjs

const { validationResult } = require('express-validator/check');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '1',
        title: 'First Post',
        content: 'This is the first post!',
        imageUrl: 'images/duck.jpg',
        creator: {
          name: 'Maximilian'
        },
        createdAt: new Date()
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) { 
    const error = new Error('Validation failed, entered data is incorrect.'); // here we are setting the error 
    error.statusCode = 422; // our property 'statusCode' to that error
    throw error; // and after that we are just thrwing the created error
  }
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
    imageUrl: 'images/duck.jpg',
    creator: { name: 'Maximilian' }
  });
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: result 
      });
    })
    .catch(err => {
      if(!err.statusCode) {
        err.statusCode = 500;
      }
      next(err); // giving the error to the error middleware
    });
};


// app.js reactjs

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); // x-form-urlencoded <form>
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images'))); // serving images statically

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUTH, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
  next();
});

app.use('/feed', feedRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500; // if it's undefined it will take 500
  const message = error.message; // this property exists by default
  res.status(status).json({ message: message });
});

mongoose.connect(
  'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/messages?retryWrites=true'
  ).then(result => {
    app.listen(8080);
  }).catch(err => console.log(err));




// 375. Fetching a Single Post

// /controllers/feed.js restjs

const { validationResult } = require('express-validator/check');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  Post.find()
    .then(posts => {
      res
        .status(200)
        .json({ message: 'Fetched posts successfully.', posts: posts });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
    imageUrl: 'images/duck.jpg',
    creator: { name: 'Maximilian' }
  });
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: result
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getPost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then(post => {
      if (!post) { // this in case that post we are looking for is 'undefined'
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: 'Post fetched.', post: post }); // if we are finding the 'post' that we are looking for we are giving a response 'res' with status code 200, and the actually post: post in the json format (here the message is optional)
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};


// /routes/feed.js reactjs

const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedController.getPosts);

// POST /feed/post
router.post(
  '/post',
  [
    body('title')
      .trim()
      .isLength({ min: 7 }),
    body('content')
      .trim()
      .isLength({ min: 5 })
  ],
  feedController.createPost
);

router.get('/post/:postId', feedController.getPost); // route for a single post

module.exports = router;




// 377. Uploading Images

// npm install --save multer

// app.js reactjs

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer'); // importing multer

const feedRoutes = require('./routes/feed');

const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images'); // define where the images will be saved
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname); // define how the images will be named
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' || // here we are filtering the type of the images will upload
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/feed', feedRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

mongoose
  .connect(
    'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/messages?retryWrites=true'
  )
  .then(result => {
    app.listen(8080);
  })
  .catch(err => console.log(err));


// /controllers/feed.js

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  if(!req.file) {
    const error = new Error('No image provided.');
    error.statusCode = 422;
    throw error;
  }
  const imageUrl = req.file.path;
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
    imageUrl: imageUrl,
    creator: { name: 'Maximilian' }
  });
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: result
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};




// 378. Updating Posts

// /controllers/feed.js reactjs

exports.updatePost = (req, res, next) => {
  const postId = req.params.postId;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  const title = req.body.title;
  const content = req.body.content;
  let imageUrl = req.body.image;
  if (req.file) {
    imageUrl = req.file.path;
  }
  if (!imageUrl) {
    const error = new Error('No file picked.');
    error.statusCode = 422;
    throw error;
  }
  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      if (imageUrl !== post.imageUrl) {
        clearImage(post.imageUrl);
      }
      post.title = title;
      post.imageUrl = imageUrl;
      post.content = content;
      return post.save();
    })
    .then(result => {
      res.status(200).json({ message: 'Post updated!', post: result });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

const clearImage = filePath => {
  filePath = path.join(__dirname, '..', filePath);
  fs.unlink(filePath, err => console.log(err));
};




// 379. Deleting Posts

// /controllers/feed.js react.js

exports.deletePost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      // Check logged in user
      clearImage(post.imageUrl);
      return Post.findByIdAndRemove(postId);
    })
    .then(result => {
      console.log(result);
      res.status(200).json({ message: 'Deleted post.' });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};




// 380. Adding Pagination

// /controllers/feed.js reactjs

exports.getPosts = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 2;
  let totalItems;
  Post.find()
    .countDocuments()
    .then(count => {
      totalItems = count;
      return Post.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);  
    })
    .then(posts => {
      res
        .status(200)
        .json({
           message: 'Fetched posts successfully.', 
           posts: posts, 
           totalItems: totalItems 
        });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};




// 381. Adding a User Model




// 382. Adding User Signup Validation





// 383. Signing Users Up

// npm install --save bcryptjs // allow us to hash a password in a secure way

// /controllers/auth.js reactjs

const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    const error = new Error('Validaion failed.');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  bcrypt
    .hash(password, 12)
    .then(hassedPw => {
      const user = new User({
        email: email,
        password: hassedPw,
        name: name
      });
      return user.save();
    })
    .then(result =>{
      res.status(201).json({ message: 'User created!', userId: result._id });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
  })
};


// /routes/auth.js reactjs

const express = require('express');
const { body } = require('express-validator/check');

const User = require('../models/user');
const authController = require('../controllers/auth');

const router = express.Router();

router.put(
  '/signup', 
  [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email.')
    .custom((value, { req }) => {
      return User.findOne({email: value}).then(userDoc => {
        if(userDoc) {
          return Promise.reject('E-Mail address already exists!');
        }
      });
    })
    .normalizeEmail(),
  body('password')
    .trim()
    .isLength({ min: 5 }),
  body('name')
    .trim()
    .not()
    .isEmpty()
  ], 
  authController.signup
);

module.exports = router;




// 384. How Does Authentication Work

// We don't store session on the server for an API or anything related to the client instead the server generates a token for a user and it will send it in the browser and that token it will be stored in the browser and it will be send with every request from that user

// JWT - JSON Web Token (is created by server an contain JSON Data and a Signature(this signature  is created by server actually and it can be verified just by the server via a secret key))




// 385. Starting with User Login

// /controllers/auth.js reactjs

exports.login = (req,res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  User.findOne({email: email})
    .then(user => {
      if(!user) {
        const error = new Error('A user with this email could not be found.');
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then(isEqual => {
      if(!isEqual){
        const error = new Error('Wrong password');
        error.status = 401;
        throw error;
      }
      
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};




// 386. Logging In Creating JSON Web Tokens(JWTs)

// npm install --save jsonwebtoken // allow us to work with jwt tokens

// /controllers/auth.js reactjs

const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // importin jsonwebtoken

const User = require('../models/user');

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    const error = new Error('Validaion failed.');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  bcrypt
    .hash(password, 12)
    .then(hassedPw => {
      const user = new User({
        email: email,
        password: hassedPw,
        name: name
      });
      return user.save();
    })
    .then(result =>{
      res.status(201).json({ message: 'User created!', userId: result._id });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
  })
};

exports.login = (req,res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  User.findOne({email: email})
    .then(user => {
      if(!user) {
        const error = new Error('A user with this email could not be found.');
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then(isEqual => {
      if(!isEqual){
        const error = new Error('Wrong password');
        error.status = 401;
        throw error;
      }
      const token = jwt.sign( // this creates a new signature, passwords are not good to be stored in the token because this will be stored in the browser
      { 
        email: loadedUser.email, 
        userId: loadedUser._id.toString() 
      }, 
      'somesupersecretsecret', // 'somesupersecretsecret' is the private key
      { expiresIn: '1h'} // this means that the token will expire in one hour and it's becoming invalid
      ); 
      res.status(200).json({ token: token, userId: loadedUser._id.toString() });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};




// 387. Using Validating the Token

// /middleware/is-auth.js

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeaher = req.get('Authorization');
  if(!authHeaher) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }
  const token = req.get('Authorization').split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'somesupersecretsecret');
  } catch(err) {
    err.statusCode = 500;
    throw err;
  }
  if(!decodedToken) {
    const error = new Error('Not Authenticated.');
    error.statusCode = 401;
    throw error;
  }
  req.userId = decodedToken.userId;
  next();
};




// 388. Adding Auth Middleware to All Routes




// 389. Connecting Posts Users




// 390. Adding Authorization Checks




// 391. Clearing Post-User Relations

// /controllers/feed.js react.js

const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator/check');

const Post = require('../models/post');
const User = require('../models/user');

exports.getPosts = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 2;
  let totalItems;
  Post.find()
    .countDocuments()
    .then(count => {
      totalItems = count;
      return Post.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then(posts => {
      res.status(200).json({
        message: 'Fetched posts successfully.',
        posts: posts,
        totalItems: totalItems
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  if (!req.file) {
    const error = new Error('No image provided.');
    error.statusCode = 422;
    throw error;
  }
  const imageUrl = req.file.path;
  const title = req.body.title;
  const content = req.body.content;
  let creator;
  const post = new Post({
    title: title,
    content: content,
    imageUrl: imageUrl,
    creator: req.userId
  });
  post
    .save()
    .then(result => {
      return User.findById(req.userId);
    })
    .then(user => {
      creator = user;
      user.posts.push(post);
      return user.save();
    })
    .then(result => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: post,
        creator: { _id: creator._id, name: creator.name }
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getPost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: 'Post fetched.', post: post });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updatePost = (req, res, next) => {
  const postId = req.params.postId;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  const title = req.body.title;
  const content = req.body.content;
  let imageUrl = req.body.image;
  if (req.file) {
    imageUrl = req.file.path;
  }
  if (!imageUrl) {
    const error = new Error('No file picked.');
    error.statusCode = 422;
    throw error;
  }
  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      if (post.creator.toString() !== req.userId) {
        const error = new Error('Not authorized!');
        error.statusCode = 403;
        throw error;
      }
      if (imageUrl !== post.imageUrl) {
        clearImage(post.imageUrl);
      }
      post.title = title;
      post.imageUrl = imageUrl;
      post.content = content;
      return post.save();
    })
    .then(result => {
      res.status(200).json({ message: 'Post updated!', post: result });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deletePost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      if (post.creator.toString() !== req.userId) {
        const error = new Error('Not authorized!');
        error.statusCode = 403;
        throw error;
      }
      // Check logged in user
      clearImage(post.imageUrl);
      return Post.findByIdAndRemove(postId);
    })
    .then(result => {
      return User.findById(req.userId);
    })
    .then(user => {
      user.posts.pull(postId);
      return user.save();
    })
    .then(result => {
      res.status(200).json({ message: 'Deleted post.' });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

const clearImage = filePath => {
  filePath = path.join(__dirname, '..', filePath);
  fs.unlink(filePath, err => console.log(err));
};




// 395 What is Async Await All About




// 396. Transforming Then Cath to Async Await

// /controllers/feed.js reactjs

exports.getPosts = async (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 2;
  let totalItems;
  try {
    const totalItems = await Post.find().countDocuments()
    const posts = await Post.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    res.status(200).json({
      message: 'Fetched posts successfully.',
      posts: posts,
      totalItems: totalItems
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
     next(err);
  }




// 402. Websocket Solutions - An Overview




// 403. Setting Up Socket.io on the Server

// npm install --save socket.io  // installing socket.io

// websocket are like http protocols but different channels, and http requests(which are set by default by the browser) are not interfering with these websocket requests or inverse

// app.js reactjs

mongoose
  .connect(
    'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/messages?retryWrites=true'
  )
  .then(result => {
    const server = app.listen(8080); // this is now the server and the port on which is listening for requests 
    const io = require('socket.io')(server); // here we are building up the websockets of 'socket.io' on the http protocols of the server
    io.on('connection', socket => { // this is an event listener to wait for new connections , socket it's a function where we get the client (socket it's actually the client ) and this is the connection from the server to the client, and this function will be executed for every new client that connects, not only one time but as many time it's required, as many clients are connecting
      console.log('Client connected');
    });
  })
  .catch(err => console.log(err));




// 404. Establishing a Connection From the Client

// npm install --save socket.io-client // help us to connect to through websocket to the server 

// /Feed/Feed.js  front api

import React, { Component, Fragment } from 'react';
import openSocket from 'socket.io-client' // importing 'socket.io-client'

import Post from '../../components/Feed/Post/Post';
import Button from '../../components/Button/Button';
import FeedEdit from '../../components/Feed/FeedEdit/FeedEdit';
import Input from '../../components/Form/Input/Input';
import Paginator from '../../components/Paginator/Paginator';
import Loader from '../../components/Loader/Loader';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import './Feed.css';

class Feed extends Component {
  state = {
    isEditing: false,
    posts: [],
    totalPosts: 0,
    editPost: null,
    status: '',
    postPage: 1,
    postsLoading: true,
    editLoading: false
  };

  componentDidMount() {
    fetch('http://localhost:8080/auth/status', {
      headers: {
        Authorization: 'Bearer ' + this.props.token
      }
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Failed to fetch user status.');
        }
        return res.json();
      })
      .then(resData => {
        this.setState({ status: resData.status });
      })
      .catch(this.catchError);

    this.loadPosts();
    openSocket('http://localhost:8080'); // now connectiong to the server on which we start the connection and this function will do all the heavy lifting behind the scenes and when we will connecting we will see in the client console 'Client connected' because we console log that
  }




// 405. Identifying Realtime Potential




// 406. Sharing IO Instance Across Files

// socket.js reactjs

let io;

module.exports = {
  init: httpServer => { // httpServer is the argument of the init function
    io = require('socket.io')(httpServer); // this establish a connection on websockets with the argument function(httpServer)
    return io;
  },
  getIO: () => {
    if(!io) { // if the isn't o socket 'io' throw the error
      throw new Error('Socket.io not initialized!');
    }
    return io; // if there's a socket return it
  }
};


// app.js reactjs


mongoose
  .connect(
    'mongodb+srv://maximilian:maximilian@cluster0-5pzzp.mongodb.net/messages?retryWrites=true'
  )
  .then(result => {
    const server = app.listen(8080); 
    const io = require('./socket').init(server);  // here we are using the 'socket' from './socket.js' and the property(method) init, which will initialize the 'socket'
    io.on('connection', socket => { 
      console.log('Client connected');
    });
  })
  .catch(err => console.log(err));




// 407. Synchronizing POST Additions

// /controllers/feed.js reactjs

const io = require('../socket');

//.............................

exports.createPost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  if (!req.file) {
    const error = new Error('No image provided.');
    error.statusCode = 422;
    throw error;
  }
  const imageUrl = req.file.path;
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
    imageUrl: imageUrl,
    creator: req.userId
  });
  try {
    await post.save();
    const user = await User.findById(req.userId);
    user.posts.push(post);
    await user.save();
    io.getIO().emit('posts', { action: 'create', post: post }); // we are getting thee 'socket' connection and after we create a post we 'emit' to all existng users through 'post' channel,  on  "action: 'create", the 'post' which was created
    res.status(201).json({
      message: 'Post created successfully!',
      post: post,
      creator: { _id: user._id, name: user.name }
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


// Feed.js front api

componentDidMount() {
  fetch('http://localhost:8080/auth/status', {
    headers: {
      Authorization: 'Bearer ' + this.props.token
    }
  })
    .then(res => {
      if (res.status !== 200) {
        throw new Error('Failed to fetch user status.');
      }
      return res.json();
    })
    .then(resData => {
      this.setState({ status: resData.status });
    })
    .catch(this.catchError);

  this.loadPosts();
  const socket = openSocket('http://localhost:8080'); 
  socket.on('posts', data => { // here we are listening on channel 'posts' for events
    if (data.action === 'create') { // if the data.action is correct
      this.addPost(data.post); // we are doing this with the post which was created
    }
  });
}




// 408. Fixing a Bug - The Missing Username

// /controllers/feed.js reactjs

io.getIO().emit('posts', {
  action: 'create',
  post: { ...post._doc, creator: { _id: req.userId, name: user.name } }
});




// 409. Updating Posts On All Connected Clients

// /controllers/feed.js reactjs

exports.updatePost = async (req, res, next) => {
  const postId = req.params.postId;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  const title = req.body.title;
  const content = req.body.content;
  let imageUrl = req.body.image;
  if (req.file) {
    imageUrl = req.file.path;
  }
  if (!imageUrl) {
    const error = new Error('No file picked.');
    error.statusCode = 422;
    throw error;
  }
  try {
    const post = await Post.findById(postId).populate('creator'); // populate with the creator 
    if (!post) {
      const error = new Error('Could not find post.');
      error.statusCode = 404;
      throw error;
    }
    if (post.creator._id.toString() !== req.userId) {
      const error = new Error('Not authorized!');
      error.statusCode = 403;
      throw error;
    }
    if (imageUrl !== post.imageUrl) {
      clearImage(post.imageUrl);
    }
    post.title = title;
    post.imageUrl = imageUrl;
    post.content = content;
    const result = await post.save();
    io.getIO().emit('posts', { action: 'update', post: result }) // emit to all users on the channel 'post' with the 'action: update'(which we created cause want, it's not provided by socket.io) that we update a post
    res.status(200).json({ message: 'Post updated!', post: result });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


// Feed.js front api

componentDidMount() {
  fetch('http://localhost:8080/auth/status', {
    headers: {
      Authorization: 'Bearer ' + this.props.token
    }
  })
    .then(res => {
      if (res.status !== 200) {
        throw new Error('Failed to fetch user status.');
      }
      return res.json();
    })
    .then(resData => {
      this.setState({ status: resData.status });
    })
    .catch(this.catchError);

  this.loadPosts();
  const socket = openSocket('http://localhost:8080'); 
  socket.on('posts', data => {
    if (data.action === 'create') {
      this.addPost(data.post);
    } else if(data.action === 'update') { // on the channel 'post' we are listening to the event to see if the data.action is 'update' and if it is we are doing what is below
      this.updatedPosts(data.post);
    }
  })




// 410. Sorting Correctly

// /controllers/feed.js reactjs

const posts = await Post.find()
      .populate('creator')
      .sort({createdAt: -1}) // sorting in an descending way
      .skip((currentPage - 1) * perPage)
      .limit(perPage);




// 411. Deleting Posts Across Clients

// /controllers/feed.js reactjs

exports.deletePost = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const post = await Post.findById(postId);

    if (!post) {
      const error = new Error('Could not find post.');
      error.statusCode = 404;
      throw error;
    }
    if (post.creator.toString() !== req.userId) {
      const error = new Error('Not authorized!');
      error.statusCode = 403;
      throw error;
    }
    // Check logged in user
    clearImage(post.imageUrl);
    await Post.findByIdAndRemove(postId);

    const user = await User.findById(req.userId);
    user.posts.pull(postId);
    await user.save();
    io.getIO().emit('posts', { action: 'delete', post: postId }); ////
    res.status(200).json({ message: 'Deleted post.' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


// Feed.js front api

const socket = openSocket('http://localhost:8080');
    socket.on('posts', data => {
      if (data.action === 'create') {
        this.addPost(data.post);
      } else if (data.action === 'update') {
        this.updatePost(data.post);
      } else if (data.action === 'delete') {
        this.loadPosts();
      }
    });
