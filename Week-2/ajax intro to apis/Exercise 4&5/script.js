function getRandomInt(max=10) {
  return Math.floor(Math.random() * max);
}
const fetch = function (input) {
  $.ajax({
    method: "GET",
    url: `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=gtY426FXOASZ0MwV6KQ0RPdj8whuJHIX&limit=10`,
    success: function (data) {
      $(".con").empty();
      $(".con").append(`<iframe src="${data.data[ getRandomInt()].embed_url}"></iframe>`);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};
$("#btn").click(function () {
  fetch($("#input").val());
});
