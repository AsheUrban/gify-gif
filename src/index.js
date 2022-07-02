import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#stringQuery').click(function() {
    const search = $('#q').val();
    $('#q').val("");

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${search}&limit=25&offset=0&rating=g&lang=en`;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        showGif(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function showGif(response) {
      $('.showGif').html(`<img class="m-3 rounded mx-auto my-auto d-block" src="${response.data[0].images.original.url}" />`);
    }

    function logReset() {
    }

  });
});