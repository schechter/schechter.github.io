function add_aspiring() {
  $('#title-page-description').text('Aspiring Full Stack Web Developer');
}

function remove_aspiring() {
  $('#title-page-description').text('Full Stack Web Developer');
}

function show_number (){
  var num_div = $('<div>');
  num_div.addClass('my_number')
  num_div.text('209-366-3563');
  $('#social-links').append(num_div);
}

function hide_number(){
  console.log('here')
  $('.my_number').hide()
}

$(function(){
  $('.section1-text').on('hover', $('#title-page-description'), add_aspiring);
  $('.section1-text').on('mouseout', $('#title-page-description'), remove_aspiring);
  $('#social-links').on('hover', '.phone-icon', show_number)
  $('#social-links').on('mouseout', '.phone-icon', hide_number)
});