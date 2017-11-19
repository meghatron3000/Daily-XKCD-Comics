
const urlForJSON = "https://xkcd.com/info.0.json";

$.ajax({
    url: urlForJSON,
    method: 'GET',
    crossDomain: true
}).then((responseData) => {
  window.console&&console.log(responseData);
  $('#image').attr('src', responseData.img);
  let width = $("#image").width();  
  let height = $("#image").height();
  console.log(height);
  console.log(width);
  if(width > height){
    $("#image").addClass('gWidth');
  }
  else{
    $("#image").addClass('gHeight');
  }
}).fail((err) => {
  console(err);
});

let arr = ['bg0.png', 'bg1.png', 'bg2.png']
let random = arr[(Math.floor(Math.random() * 3))];
let imgBack = 'url(../images/' + random + ')  no-repeat center center fixed';
$('#main').css({
  'background': imgBack,
  'background-size': 'cover'
});




