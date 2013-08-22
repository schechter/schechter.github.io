function add_aspiring() {
  $('#title-page-description').text('Aspiring Full Stack Web Developer');
}

function remove_aspiring() {
  $('#title-page-description').text('Full Stack Web Developer');
}

function show_number (){
  var num_div = $('<div>');
  num_div.addClass('my_number');
  num_div.text('209-366-3563');
  $('#social-links').append(num_div);
}

function hide_number(){
  $('.my_number').hide();
}


function show_uelerkey(){
  if($('.my-euler-key').size() === 0) {
    var key_div = $('<div>');
    key_div.addClass('my_euler-key');
    key_div.text('My Friend Key' + '\n' +'35073569505731_fe2fcbb8a2bbfee7c9e8e3def448a70b');
    $('#social-links').append(key_div);
  }
}

function hide_uelerkey(){
  setTimeout(function(){
  $('.my_euler-key').remove();
  },500);
}

function show_tech (e){
  var tech_text = e.target.id;
  $('#logo-show').text(tech_text);
}

function hide_tech (){
   $('#logo-show').text('');
}

function show_project_links(){
  var links = $(this).parent().find('.project-links');
  links.removeClass('hidden');
  setTimeout(function(){
    links.addClass('hidden');
  }, 8000);
}


$(function(){
  $('.section1-text').on('hover', '#title-page-description', add_aspiring);
  $('.section1-text').on('mouseout', '#title-page-description', remove_aspiring);
  $('#social-links').on('hover', '.phone-icon', show_number);
  $('#social-links').on('mouseout', '.phone-icon', hide_number);
  $('#social-links').on('mouseenter', '.projecteuler-icon', show_uelerkey);
  $('#social-links').on('mouseout', '.projecteuler-icon', hide_uelerkey);
  $('#techs').on('hover', 'img', show_tech);
  $('#techs').on('mouseout', 'img', hide_tech);
  $('#section3-photo-holder').on('mouseover', '.app-screen-shots', show_project_links);
});