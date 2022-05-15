const express=require('express');
const hbs=require('hbs');
const app=express();

// registering path for partial files
hbs.registerPartials(__dirname+'/views/partials');

// app configuration
app.set('view engine','hbs');

//middlewares

//app.routes
app.get('/suggestions',home);
app.get('/lookup',home);
app.get('/wordOfTheDay',home)
app.get('/pronounciation',home)

// app port
app.listen(4174);