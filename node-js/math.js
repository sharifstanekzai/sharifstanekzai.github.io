const express=require('express');
const http=require('http');
const url=require('url');

const webApp=express();
webApp.get('/',(req,res)=>{
    res.sendFile(__dirname+'/calculator.html');
});
webApp.get('/math',(req,res)=>{
    var resultString=``;
    var queryString=url.parse(req.url,true).query;
    var op1=parseInt(queryString.first);
    var op2=parseInt(queryString.second);
    switch(queryString.operation){
        case 'add':{
            resultString+=`${op1} + ${op2} = ${op1 + op2}`;
        }
        break;
        case 'subtract':{
            resultString+=`${op1} - ${op2} = ${op1 - op2}`;
        }
        break;
        case 'multiply':{
            resultString+=`${op1} + ${op2} = ${op1 * op2}`;
        }
        break;
        case 'divide':{
            resultString+=`${op1} &divide; ${op2} = ${op1 / op2}`;
        }
        break;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<!DOCTYPE html>
    <html>
    <head><meta charset=\"utf-8\"/>
    <title>Calculator</title>
    </head>
    <body>
    <a href='../'>Back</a>
    <p>${resultString}</p>
    </body>
    </html> ` );
    res.end();
});
webApp.listen(8080);