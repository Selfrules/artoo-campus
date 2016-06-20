console.log('Hello Word from a ' + process.env.NODE_ENV + ' enviroment');

var myModule = require("./exercises/myModule")({robot: ' C3P8 !'});

console.log(myModule.sayHello(' Super Mario'));

/*var http = require('http');

var server = http.createServer(function (req, res){
   res.write('<h1>Hello world from my first server</h1>');
   res.end();
});

server.listen (8080, '0.0.0.0', function () {
  console.log('My Server is up and running') 
});
*/


var app = express();

app.get('/', function (req, res){
   //console.log(req);
   //res.send('<h1>Hello world from my second server</h1>');
   res.redirect('/users');
});



app.get('/reverse/:string/?uppercase', function (req, res){
   var input = req.params.string;
   var output = input.split('').reverse('').join('')
   if (req.query.uppercase !== 'false') output = output.toUpperCase();
   if (req.query.spaced) output.split('').join(' ');
   res.send(output);
});

var users = require('./exercises/users');

app.use('/users', users);

app.listen('8080', function (){
   console.log('My server is up and running')
})