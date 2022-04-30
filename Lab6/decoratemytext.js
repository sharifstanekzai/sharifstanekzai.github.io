window.onload=function(){

    //alert('Hello World!');
    let btn=document.getElementById('btnDecoration');
    btn.onclick=decorate;
    let cb=document.getElementById('bling');
    cb.onchange=bling;

    let btnLatin=document.getElementById('btnPigLatin');
    btnLatin.onclick=pigLatin;
    let btnMalkovich=document.getElementById('btnMalkovich');
    btnMalkovich.onclick=malkovich;
}
function decorate(){
    //alert('Hello World!');
    //let txt=document.getElementById('text');
    //txt.style.fontSize='24pt';
    //let size=(parseInt(txt.style.fontSize==""?12:txt.style.fontSize)+2);
    //txt.style.fontSize=size+'pt';
    let i=setInterval(increaseSize,500);
}
function increaseSize(){
    let txt=document.getElementById('text');
    let size=(parseInt(txt.style.fontSize==""?12:txt.style.fontSize)+2);
    txt.style.fontSize=size+'pt';
}
function bling(){
    //alert('Hello World!');
    let txt=document.getElementById('text');
    if(document.getElementById('bling').checked){
    //txt.style.fontWeight='bold';
    //txt.style.color='green';
    //txt.style.textDecoration='underline';
    txt.setAttribute('class','bling')
    }
    else{
        // let size=(parseInt(txt.style.fontSize==""?12:txt.style.fontSize));
        // txt.removeAttribute('style');
        // txt.style.fontSize=size+'pt';
        txt.removeAttribute('class');
    }
}

function pigLatin(){
    let vowel=['a','e','i','o','u'];
    let txt=document.getElementById('text');
    let arr=txt.value.split(' ');
    let latinString="";
    for(let a of arr){
        if(!vowel.includes( a.charAt(0))){
            latinString += a.substring(1)+a.charAt(0)+'ay ';
         }
         else{
             latinString += a.length>1 ?a+'ay ':a+' ';
         }
    }
    
    txt.value=latinString.trim();
}
function malkovich(){
    let txt=document.getElementById('text');
    let malkovichString="";

    let arr=txt.value.split(' ');
    for(let a of arr){
        malkovichString+= a.length>=5?"Malkovich ":a+" ";
    }
    txt.value=malkovichString.trim();
}