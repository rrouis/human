<script src="https://code.jquery.com/jquery-3.1.1.js" charset="utf-8"></script>
<script type="text/javascript">

  jQuery(function($){

    // スクリーンの高さを取得
    var wh = $(window).height();
    console.log(wh);

    $('.top').css("height",wh);

  });
</script>
