$(function(){
  var wh = $(window).height();
  console.log(wh);

  // スクリーンの高さを取得
  $('.top').css("height",wh);

  // フリッキーマスター
  $('.main-gallery').flickity();

});


$(function(){

  $(window).scroll(function(){
    // スクロールの座標
    var scrollPos = $(this).scrollTop();
    console.log("scrollPos:" + scrollPos);

    if(scrollPos >= 0){
      $('#fadeLogo').addClass('fadeIn');
      console.log("addClass");
    }
    if(scrollPos >= 500){
      $('#fadeLead').addClass('fadeIn');
      console.log("addClass");
    }
    if(scrollPos >= 900){
      $('#fadeMain').addClass('fadeIn');
      console.log("addClass");
    }
  });
});
