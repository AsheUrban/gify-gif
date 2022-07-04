import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import magicGif from "./js/gify";

function clearFields() {
  $("#q").val("");
  $(".showGif").val("");
}

$(document).ready(function() {
  $("#searchQuery").click(function(event) {
    event.preventDefault();
    const search = $("#q").val();
    clearFields();
    let promise = magicGif.getGif(search);
    promise.then((response) => {
      const body = JSON.parse(response);
      let index = Math.floor(Math.random() * 15);
      $(".showGif").html(`<img src="${body.data[index].images.original.url}"/img>`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
  });
});


  $("#popular").click(function(event) {
    event.preventDefault();
    clearFields();
    let promise = magicGif.getTrendingGif();
    promise.then((response) => {
      const body = JSON.parse(response);
      $(".showGif").html(`<img src="${body.data[Math.floor(Math.random() * 20)].images.original.url}"/img>`);
    }, function(error) {
      $(".showErrors").text(`There was an error processing your request: ${error}`);
    });
  });

  $("#random").click(function(event) {
    event.preventDefault();
    clearFields();
    let promise = magicGif.getRandomGif();
    promise.then((response) => {
      const body = JSON.parse(response);
      $(".showGif").html(`<img src="${body.data.images.original.url}"/img>`);
    }, function(error) {
      $(".showErrors").text(`There was an error processing your request: ${error}`);
    });
  });
});
