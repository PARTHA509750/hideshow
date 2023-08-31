$ (function () {
//JQUERY CODE

//HIDE WORK
   $('.hide').click( function (){
    $('.box').slideUp(2000)
   } )

//SHOW WORK
   $('.show').click( function(){
    $('.box').slideDown(1000)
   } )

//TOGGLE WORK
   $('.toggle').click( function (){
    $('.box').fadeToggle(3000)
   } )
})