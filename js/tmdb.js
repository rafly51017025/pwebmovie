const key ='eb4033b2978b5f39ec845ce9124d3bf6'; //sesuai API Key Anda
const endpoint_url = 'https://api.themoviedb.org/3';

function getListMovie() {
  fetch(endpoint_url + "/movie/now_playing?api_key=" + key + "&language=en-US&page=1")
  .then(status)
  .then(json)
  .then(function(data) {

    var moviesHTML = "";
    data.result.forEach(function(movie) {
      moviesHTML +=`
      <div class="col m3 s6">
        <div class="card">
        <a href="./movie.html?id=${movie.id}">
        <div class="card-image waves-effect waves-block waves-light">
        <img src="https://image.tmdb.org/t/p"`
    })
  })
}
