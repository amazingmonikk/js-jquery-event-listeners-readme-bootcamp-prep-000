//define functions here
function getIt() {
$(document).ready(function(){
  $('p').on('click', function(){
    alert("Hey!");
    });
  });
}

function frameIt() {
$(document).ready(function(){ 
  $('image.tasty').on('load', function(){
  
    });
  });  
}


function pressIt() {
 $(document).ready(function(){ 
   $('form').on('keydown', function(key){
     if(key.which == 71) {
       alert('g was pressed');
     }
   });
 });  
}


function 