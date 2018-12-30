$(function(){

    let currentField, nextField, prevField
   
   
   
    let screewidth = innerWidth
   
   
   
    $('.next').click(function(){
        currentField = $(this).parent().parent()
        nextField = $(this).parent().parent().next()
        currentField.hide(400)
        nextField.show(400)
        console.log(nextField)
    })
   
    $('.previous').click(function(){
        currentField = $(this).parent().parent()
        prevField = $(this).parent().parent().prev()
        currentField.hide(400)
        prevField.show(400)
        console.log(nextField)
    })
   
   
   })
   