"use strinct";
$(document).ready(function(){
    $('#start').click(startAnimation);
    $('#stop').click(stopAnimation);
    $('#size').change(changeSize);
    $('#speed').change(changeSpeed);
});
var interval;
var index=0; // used to control the active frame
var initialText;
var timeOut=250;
function startAnimation(e){
    let selectedAnimation=$('#animation').val();
    let frames=ANIMATIONS[selectedAnimation].split("=====\n"); //splitting the animation string into array
    if(initialText) initialText=$('#screen').val();
    interval=setInterval(() => {
       $('#screen').val(frames[index]);
       index =index<frames.length-1?index+1:0;
    }, timeOut);
    if(e) toggleControls(); // this will not execute when the speed is changed
}
function stopAnimation(){
    resetInterval();
    resetInitialText();
    toggleControls();
}
function resetInterval(){
    clearInterval(interval);
    interval=undefined;
}
function resetInitialText(){
    $('#screen').val(initialText);
    initialText=undefined; //setting it back to undefined so that next time new text is read from the textarea
};
function changeSize(){
    $('#screen').css('font-size',$('#size').val());
};
function changeSpeed(e){
    timeOut=$(e.target).is(':checked')?50:250;
    if(interval){  // if animation is in progress speed will be affected
        resetInterval(); //the active frame remains the same only interval is reset and the animation resume from the active frame in new interval
        startAnimation();
    }
}
function toggleControls(){
    let s=document.getElementById("start");
    let p=document.getElementById("stop");
    let a=document.getElementById("animation");
    s.disabled=!s.disabled;
    p.disabled=!p.disabled;
    a.disabled=!a.disabled;
}