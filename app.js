var libOneWords = ['noun', 'adj', 'name of person'];
var libTwoWords = ['noun', 'verb'];


var locStore = [];
var selectedLib = 0;
var wordCount = 0;
var typeOfWordCounter = 0;

$(document).ready(function(){
 console.log('jQuery loaded');

 // write to local storage from input when button save clicked
 $('.btn-submit').on('click', function(){
   locStore.push($('.text-entry').val())
   localStorage.setItem('inputFieldValue', locStore);
   var myItemInStorage = localStorage.getItem('inputFieldValue');
   typeOfWordCounter++;
   var lib;
   if(selectedLib === 1){
     lib = libOneWords;
   } else if(selectedLib === 2){
     lib = libTwoWords;
   }
  
  $(".text-entry").attr("placeholder", lib[typeOfWordCounter]);

   $('.mad-lib-' + selectedLib + '-' + wordCount).text(locStore[locStore.length-1]);
   wordCount++;
   $('.storage').text(locStore[locStore.length-1])
 });

 // delete from local storage when delete button clicked
 $('.btn-delete').on('click', function(){
   localStorage.removeItem('inputFieldValue');
   //locStore = [];
   for(var i = 1; i < 3; i++){
     for(var j = 0; j < 100; j++){
       $('.mad-lib-' + i +  "-" + j).text('___');
     }
   }
 });

 $('.lib1').on('click', function(){
   selectedLib = 1;
   wordCount = 0;
   typeOfWordCounter = 0;
   $('.enter-word').css("display", "block");
   $(".text-entry").attr("placeholder",libOneWords[typeOfWordCounter]);
   $('.list-display-field_1').css("display", "block");
   $('.list-display-field_2').css("display", "none");
   $('.list-display-field_3').css("display", "none");
   $('.lib1').css("color","#1abc9c");
   $('.lib2').css("color","#f4f4f4");
 })

 $('.lib2').on('click', function(){
   selectedLib = 2;
   wordCount = 0;
   typeOfWordCounter = 0;
   $('.word-type').text(libTwoWords[typeOfWordCounter]);
   $('.enter-word').css("display", "block");
    $(".text-entry").attr("placeholder", libTwoWords[typeOfWordCounter]);
   $('.list-display-field_2').css("display", "block");
   $('.list-display-field_1').css("display", "none");
   $('.list-display-field_3').css("display", "none");
   $('.lib1').css("color","#f4f4f4");
   $('.lib2').css("color","#1abc9c");
 })

});
