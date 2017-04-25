$(function(){
  var wh = $(window).height();
  console.log(wh);

  // スクリーンの高さを取得
  $('.top').css("height",wh);

  // フリッキーマスター
  $('.main-gallery').flickity();
});
