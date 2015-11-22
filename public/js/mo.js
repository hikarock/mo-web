var pusher = new Pusher('712e8c937a3771ff8ffa');
var channel = pusher.subscribe('mo-multicast');
channel.bind('someone_transfer', function(data) {
  var width = $(window).width();
  var height = $(window).height() + 150;
  var left = getRandomInt(0, width - 75);
  $('.coin').animate({
    'top': height,
    'left': left
  }, 1500, function() {
    $('.coin').css('top', '-150');
  });
});
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
