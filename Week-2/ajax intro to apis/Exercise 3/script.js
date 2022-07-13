const fetch = function(queryType,queryValue){
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            data.items.forEach(item=>{console.log("title: "+item.volumeInfo.title),
            console.log("author: "+item.volumeInfo.authors),
            item.volumeInfo.industryIdentifiers.forEach(d=>console.log("isbn: "+d.identifier))});
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    }); 
}
fetch("isbn", 9789814561778)