$(function(){
    $("#navigation").load("./component/page1.html"); 
    $("#overview").load("./component/page2.html"); 
    $("#profile").load("./component/page3.html"); 
    $("#queAns").load("./component/page4.html");
    $("#calProgg").load("./component/page5.html");
})

window.onresize = function() {
   if(screen.width < 430) {
       document.getElementById('profile').style.display = 'none';
   } else {
       document.getElementById('profile').style.display = 'block';
   }
}