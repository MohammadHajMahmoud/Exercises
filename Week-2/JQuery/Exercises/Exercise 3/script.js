$(document).ready(function(){
    $("body").append(`<div class="box"></div>`)
    $("body").append(`<div class="box"></div>`)
    const changeColor =function(){
        $(".box").css("backgroundColor","#8e44ad")
    }
    $(".box").hover(function(){
        changeColor();
        $(this).css("backgroundColor","red")
    })
})