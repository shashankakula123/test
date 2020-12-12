var startingnum=10;
var mainlist=document.getElementById('countdown');
var textWrapper=document.getElementById('text-wrapper');
function getRandomColor(){
      return 'rgb('+parseInt(Math.random() * 256)+ ','+ parseInt( Math.random() * 256 )+ ','+parseInt( Math.random() * 256 )+ ')';
}
 function getrandomAngle(){
       return parseInt(Math.random() * 361) + 'deg';
 }
window.setInterval(function(){


      if(startingnum>=0){
      
           
          mainlist.innerHTML=startingnum;
          mainlist.style.color = getRandomColor();
          textWrapper.style.background= 'linear-gradient('+ getrandomAngle() +', black,transparent)';
 console.log(startingnum--);


      }
     

},1000);