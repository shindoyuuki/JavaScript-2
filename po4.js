
function update(_v){  /*input tag を更新する関数*/
    document.querySelector('input').value = _v /*value(値)*  +=は「追加」。 = は「上書き」「更新」の意味になります。
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 なので、+= '1'と書くと、[ボタン]がクリックされるたびに1の文字が追加され、= ''と書くと、valueがクリアされ、表示内容が空っぽになります。*/
    }
        
function append(_v){ /*数字ボタンが押されたので数字を後ろに追加する*/
    document.querySelector('input').value += _v /*+=にすることで、数字を入力した時に横に並んで表示される*/
    }

function calc(){ /*「＝」ボタンが押されたので計算する*/
      const v = document.querySelector( 'input' ).value /*まずはinputに出てくる値を指定*/
　　　const f = new Function( 'return ' + v )
      update( f().toString() )

}
    
    /*
    ・querySelector()」とは？＜＜document.querySelectorAll( CSSセレクタ )＞＞
      JavaScriptには以前から「getElementById()」とか「getElemetnsByClassName()」などHTML要素を取得できるメソッドはありました。
　　　しかし、「querySelector()」を使うとid属性値・class属性値などを意識せずにjQuery感覚でHTML要素をセレクタ指定することができます。
    
    ・エラーコードの出し方
      ////////////////////////
      try {
       ...
　　　} catch( _error ) {
       ...
　　　}
　　  ////////////////////////
　　  
　　  ・const f = new Function( 'return ' + v )この行で関数 f を作っています。
　　　　標準ビルトインオブジェクトの Function を使って、'input'タグに書かれている文字列を実行する関数 f を作成しています。
　　　　一般的に、こんなふうに文字列を関数にして実行してしまうのは、「なにを実行されるかわからない」という危険性を持つので避けるべきコードです。特に、サーバー側で動かすようなプログラムでは、脆弱性に直結するので、絶対に使わないでください。
　　　　update( f().toString() )この行で作った関数 f を実行して、実行結果を文字列に変えてtoString()、さらに 'input'タグを更新update()しています。
　　　　この２行で、電卓アプリの心臓部はできています。Function は便利で強力な反面、理解して使わないと脆弱性にもなりえるという「諸刃の刃」なんですね。
    */