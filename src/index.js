import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dinosaur from './dinosaur.js';

$(document).ready(function() {
  $('#dinosaur-form').submit(function(event) {
    event.preventDefault();
    //let input = $('input').val();
    $('.input').html("");
    let paragraphs = 3;
    let words = 3;
    let promise = Dinosaur.getDinoWords(paragraphs, words);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.result').html("<p>");

      let p = Math.floor(Math.random() * paragraphs);
      let w = Math.floor(Math.random() * words);

      for (let i = 0; i < paragraphs; i++) {
        for (let g = 0; g < words; g++) {
          if (i === p && g === w) {
            $('.result').append(`<span id="target"> ${body[i][g]} </span>`);
          } else {
            $('.result').append(body[i][g] + " ");
          }
        }
        $('.result').append("</p><p>");
      }
      $('.result').append("</p>");
    }, function(error) {
      $('.result').html(error);
    });
  });  
});
