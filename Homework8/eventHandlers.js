var interval;
var index=0;
var initialText;
var timeOut=250;
function startAnimation(){
    let selectedAnimation=$('#animation').val();
    let frames=ANIMATIONS[selectedAnimation].split("=====\n");
     if(interval){
        resetInterval();
     }
    if(initialText==undefined)
    initialText=$('#screen').val();
    interval=setInterval(() => {
        console.log(frames[index]);
       $('#screen').val(frames[index]);
       index =index<frames.length-1?index+1:0;
    }, timeOut);
}
function stopAnimation(){
    resetInterval();
    resetInitialText();
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
    if(interval){
        startAnimation();
    }
};