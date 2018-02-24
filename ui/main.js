console.log('Loaded!');

//change the text of var element div
var element=document.getElementById('mittal');
element.innerHTML='New value';

var img= document.getElementById('myimage');

var marginLeft= 0;
 function moveRight(){
     marginLeft=marginLeft +1;
     img.style.marginLeft=marginLeft +'px';
 }

img.onclick =function(){
    var interval= setInterval(moveRight,50);
}