$(document).ready(function () {
    $('body').append(`<input id='name' type="text">`)
    $('body').append("<button >Add Human</button>")
    $('button').click(function () {
        $("ul").append('<li>' + $("input").val() + '</li>')
    })
    const removeName = function () {
        $("li").remove();
    };
      $("li").click(function(){
        removeName($(this));
      })


});