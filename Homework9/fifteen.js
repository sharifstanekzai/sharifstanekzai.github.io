var counterMoves={
    left:'right',
    right:'left',
    up:'down',
    down:'up'
}
var empty={
    top:null,
    bottom:null,
    left:null,
    right:null
};
var $puzzleArray=[[],[],[],[]];

$(document).ready(function(){
    createPuzzle();
    $('#puzzlearea div').on('click',function(){
        move($(this));
    });
    $('#shufflebutton').on('click',shuffle);
});

function createPuzzle(){
    let left=0;
    var top=0;
    $('#puzzlearea div')
    .each(function() {
        $(this).addClass('puzzlepiece');
        $(this).css('font-size','40pt');
        $(this).css('background-position',-left+'px'+' '+-top+'px');
        $(this).css('left',left+'px');
        $(this).css('top',top+'px');

        // adding elements to 2D array
        $puzzleArray[top/100][left/100]=$(this);

        left+=left===300?-300:100;
        top+=left===0?100:0;

    });
empty.top=$('#puzzlearea div')[11];
empty.left=$('#puzzlearea div').last();

console.log($puzzleArray);
}
function move(el){
    const isInArray=(element)=>{
        console.log('Array Element: '+element);
        console.log('Clicked Element: '+el);
        return element==el;}

   console.log($puzzleArray.forEach((e)=>{
       e.findIndex(isInArray);
   }));
}
function blockAdjacent(){

}
function unlockAdjacent(){

}

function shuffle(){
   for(var i=0;i<1000;i++){
       move();
   }
}