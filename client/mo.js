if (Meteor.isClient) {
  setInterval(function() {
    var width = $('body').width();
    var height = $('body').height() + 150;
    var left = getRandomInt(0, width - 75);
    $('.coin').animate({
      'top': height,
      'left': left
    }, 1500, function() {
      $('.coin').css('top', '-150');
    });
  }, 1000);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
