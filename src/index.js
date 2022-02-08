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
    let paragraphs = 10;
    let words = 10;
    let promise = Dinosaur.getDinoWords(paragraphs, words);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.result').html("<p>");
      for (let i = 0; i < paragraphs; i++) {
        for (let g = 0; g < words; g++) {
          $('.result').append(body[i][g] + " ");
        }
        $('.result').append("</p><p>");
      }
      $('.result').append("</p>");
    }, function(error) {
      $('.result').html(error);
    });
  });  
});
