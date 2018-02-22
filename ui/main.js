console.log('Loaded!');

//change the text of var element div
var element=document.getElementById('mittal');
element.innerHTML='New value';

var img= document.getElementById('my image');
img.onclick= function(){
    img.style.marginLeft= "180";
}