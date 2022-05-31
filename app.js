// Using jQuery because it's already included in the start code:
const $searchInput =  $("#searchBar");
const $gifArea = $(".randomImages")

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
  console.log(response.data.data[randomNum]);

  const $newGIF = $(`<li><img src="${randomImg}" /> </li>`)
  $gifArea.append($newGIF)
})



// async function getGIF() {
//   const auth = { params: { 
//       'api_key': 'k2IplipIBli43X5EdY4NNy6dP5CiqKe0',
//     }
//   }
//   const response = await axios.get("http://api.giphy.com/v1/gifs/random", auth);
  
//   console.log(response);
// }

