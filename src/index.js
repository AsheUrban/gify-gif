import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import magicGif from "./js/gify";

function clearFields() {
  $("#q").val("");
}

$(document).ready(function() {
  $("form#gif").submit(function(event) {
    event.preventDefault();
    const search = $("#q").val();
    clearFields();

    let promise = magicGif.getGif(search);

    promise.then(function(response) {
      const body = JSON.parse(response);
        for (let i=0; i<10; i++) {
        $(".showGif").html(`<img src="${body.data[i].images.original.url}"/>`);
      }
    })
  });



  $("#popular").click(function(event) {
    event.preventDefault();
    const trending = $("#popular").val();

    let promise = magicGif.getTrendingGif(trending);

    promise.then(function(response) {
      const body = JSON.parse(response);
        for (let i=0; i<10; i++) {
          $(".showGif").html(`<img src="${body.data[i].images.original.url}"/>`);
      }
    });
  });

  $("#random").click(function(event) {
    event.preventDefault();
    const random = $("#random").val();

    let promise = magicGif.getRandomGif(random);
    
    promise.then(function(response) {
      const body = JSON.parse(response);
        for (let i=0; i<10; i++) {
          $(".showGif").html(`<img src="${body.data[i].images.original.url}"/>`);
      }
    });
  });

    // function logReset() {
    // }

});
