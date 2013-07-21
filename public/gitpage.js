function add_aspiring() {
  $('#title-page-description').text('Aspiring Full Stack Web Developer');
}

function remove_aspiring() {
  $('#title-page-description').text('Full Stack Web Developer');
}


$(function(){
  $('.section1-text').on('hover', $('#title-page-description'), add_aspiring);
  $('.section1-text').on('mouseout', $('#title-page-description'), remove_aspiring);

});