// Using jQuery because it's already included in the start code:
const $searchInput = $("#searchBar");
const $gifArea = $("#gif-area")

$("form").on("submit", async function(evt) {
  evt.preventDefault();
  const searchTerm = $searchInput.val();
  $("#searchBar").val("")

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", { params: {
    'api_key': 'k2IplipIBli43X5EdY4NNy6dP5CiqKe0',
    'q': searchTerm,
  }})

  const resultsLength = response.data.data.length;
  const randomNum = Math.floor(Math.random() * resultsLength);
  const randomImg = response.data.data[randomNum].images.original.url

  const $newGIF = $(`<div class="col-md-4 p-3 gifImg"><img src="${randomImg}" class="mh-100 mw-100"> </div>`)
  $gifArea.append($newGIF)
})

$("#removeAllBtn").on("click", function(evt) {
  $gifArea.empty();
})



