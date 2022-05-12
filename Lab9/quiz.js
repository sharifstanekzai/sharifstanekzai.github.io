const express=require('express');
const session=require('express-session');
const bodyParser=require('body-parser');
const s=require('./Series');


const app=express();
//setting view engine
app.set('view engine','pug');

app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:'Jack Sparrow'}));

// Routs
app.get('/',(req,res)=>{
    req.session.questionIndex=0;
    req.session.correctAnswers=0;
    res.render('quiz',{
        sequence:s.Series.questions[0],
        correctAnswers: 0
    });
});
app.post('/',(req,res)=>{   
    if(req.session){
        // reading question index from sesssion
        var questionIndex=parseInt(req.session.questionIndex);
        var answer=parseInt(req.body.answer);
        // verifying the current answer is correct
        if( answer === parseInt(s.Series.answers[questionIndex])){
            // reading correct answer count from session
            var ca=parseInt(req.session.correctAnswers);
            // updating the correcft answer count in session
            req.session.correctAnswers = ++ca;
        }
        // questions
        req.session.questionIndex=++questionIndex;
    res.render('quiz',{
        sequence:s.Series.questions[questionIndex],
        correctAnswers: req.session.correctAnswers
    });
    }
});
app.listen(8080);