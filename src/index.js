import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

$(document).ready(function() {
  $("#stringQuery").click(function() {
    const search = $("#q").val();
    $("#q").val("");

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${search}&limit=25&offset=0&rating=g&lang=en`;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        showGif(response);
      }
    }

    request.open("GET", url, true);
    request.send();
  });

  $("#popular").click(function(event) {
    event.preventDefault();
    let request = new XMLHttpRequest();
    const trending = `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=10`;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200){
        let response = JSON.parse(this.responseText);
        showGif(response);
      }
    }
    request.open("GET", trending, true);
    request.send();
  });

  $("#random").click(function(event) {
    event.preventDefault();
    let request = new XMLHttpRequest();
    const random = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}`;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200){
        let response = JSON.parse(this.responseText);
        showGif(response);
      }
    }
    request.open("GET", random, true);
    request.send();
  });

    function showGif(response) {
      $(".showGif").html(`<img class="m-3 rounded mx-auto my-auto d-block" src="${response.data[1].images.original.url}" />`);
    }

    function logReset() {
    }
});
