const posts = [];
function render (posts){
    $("#wishes").empty();
    for(let post of posts){
        $("#wishes").append(`<div>${post.name}:${post.text}</div>`)
    }
}
$('button').click(function(){
    let post = {};
    post.name = $("#name").val();
    post.text = $("#birthday").val();
    $("#name").empty();
    $("#birthday").empty();
    posts.push(post)
    
    render(posts)
})