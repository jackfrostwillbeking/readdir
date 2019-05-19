(function($){

    //下記はHTML=DOMの読み込みが終わったらfunction()の中の処理(=なにかしらの処理)を実行するという記述です。
    $(document).ready(function(){
    
      var thumbs = $(".thumb img");//変数thumbsへCssのthumb imgクラスを代入
      var top_images = $(".top img");//変数top_imagesへCssのtop imgクラスを代入
    
     //「hover」の引数に渡された関数が、マウスカーソルが合わせられた時に実行する関数となります。
     // 要素を隠すには、「hide」メソッドを使用します。
     //「複数の要素内から ●番目の要素を選択」という形にするためには、「eq」メソッドを使用します。
     //ある要素内での順番を取得するには「index」メソッドを使用します。
     //イベントが起こった要素は「this」という名前で操作することができます。
     //要素を表示するには、「show」メソッドを使用します。
    
      thumbs.hover(function(){
        top_images.hide().eq(thumbs.index($(this))).show();
      });
    
    });
    
    })(jQuery);