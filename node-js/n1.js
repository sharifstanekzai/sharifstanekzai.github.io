var http=require('http');
var n2=require('./n2');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/thml'});
    res.write('N1 Output: Hello Node World!');
    res.write(`\nN2 output: Date & Time: ${n2.myDate()}`);
    res.write(`\nN3 output: ${req.url}`),
    res.end(/*'\nNode lecture'*/); //can't execute this function twice will throw error
})
.listen(8080);