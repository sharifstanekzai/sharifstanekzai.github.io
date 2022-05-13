var empty={
    top:300,
    left:300
};
var helper=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
$(document).ready(function(){
    createPuzzle();
    $('#puzzlearea div').on('click',function(){
        move($(this));
    });
    $('#shufflebutton').on('click',shuffle);
});
function createPuzzle(  ){
    let left=0;
    let top=0;
    $('#puzzlearea div')
    .addClass('puzzlepiece')
    .css('font-size','40pt')
        .each(function() {
        $(this).css('background-position',-left+'px'+' '+-top+'px');
        $(this).css('left',left+'px');
        $(this).css('top',top+'px');
        left+=left===300?-300:100;
        top+=left===0?100:0;
    });
}
function move(el){
    let elementProperties={
        top:parseInt($(el).css('top')),
        left:parseInt($(el).css('left'))
    }
    if(elementProperties.top===empty.top || elementProperties.left===empty.left){
        let temp=empty;
        empty=elementProperties;
        $(el).css('left',temp.left+'px');
        $(el).css('top',temp.top+'px');
    }
}
function shuffle(){
    let pieces=$('#puzzlearea div');
    let left=0;
    let top=0;
    let shuffledPieces=new Set();
    while(helper.length>0){
        let len=helper.length;
        let index=Math.floor(Math.random()*len);
        let piece=pieces[helper[index]];
        $(piece).css('left',left+'px');
        $(piece).css('top',top+'px');
        if(piece===undefined){
            empty.top=top;
            empty.left=left;
        }
        left+=left===300?-300:100;
        top+=left===0?100:0;
        shuffledPieces.add(piece);
        delete helper[index];
        helper=helper.filter(e=>e!=undefined);
    }
    helper=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    console.log('Shuffled Empty: '+JSON.stringify(empty));
}