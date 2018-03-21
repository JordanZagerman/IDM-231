$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  console.log(scrollTop);
  $('.header-bg-virgo').css('top',(scrollTop * 1)+ 'px');
});
            