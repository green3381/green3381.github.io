$(function () {


//  ***** ページ全体のhtmlの場所を取得して、変数にする共通設定 *****

    const toTop = $('#toTop');
    // ID、toTopを取得
    
    // トップに戻るボタンを、最初は隠しておく cssで、display:none

//  ***** トップに戻るアニメーション設定 ***** 
    toTop.on('click', function () {
        //スマホとPC、両方に使用されるイベントなので、併記しておく
        $('html,body').animate({ scrollTop: 0 }, 500);
        // scrollTopは、Elementオブジェクトのプロパティで、Elementの一番上からのスクロール量をピクセル単位で設定や取得

    });


//  ***** スクロール量を取得し、トップに戻るボタンを出し入れする　設定 ***** 
    $(window).on('scroll', function () {
        // windowのイベント機能のスクロールがされたとき

        const scl = $(this).scrollTop();
        // $(this)、つまりwindowがスクロールしているイベント本体のスクロール量を可変的に取得
        // console.log(scl);
        // console.log()で、スクロール量の可変値を確認
        // もし、スクロール量がある特定に値を超えた場合には、トップに戻るボタンをフェードイン
        // それ以外は、フェードアウトのif文の条件式
            if(scl > 300){
                toTop.fadeIn();
            }else{
                toTop.fadeOut();
            }
    });


//  ***** スムーズスクロールの -- offset().top --  設定 *****  
    // navタグのaタグの場所を取得
    const nav_menu = $('nav a');

    nav_menu.on('click', function () {
        // nav_menuをクリックしたとき、個々のaタグの属性、hrefの属性値を取得
        const href = $(this).attr('href');
        // 取得した属性値の表示されたトップの位置をピクセル単位で取得
        let target = $(href).offset().top;
        // 取得した値を、コンソールで確認 --> 変数宣言をletにしたのは、PCとスマホのときのスムーズスクロールの止める位置を調整するときに、
        // targetの値を再代入をしているから
        // console.log(target);
        // nav_menuをクリックしたとき、windowの幅を取得
        const wh = $(window).width();
        // 取得した幅により、PCとスマホのときのスムーズスクロールの止める位置を調整する
        // このときの値は、適宜調整
        if (wh >= 768) {
            target = target - 70;

            burger.toggleClass('active');
            // あまり意味がないが、もしPCの環境でスマホの状態を確認した際に起きる問題を回避するための設定
        }else{
            target = target - 8;

            nav.toggleClass('drawer');
            // nav_menuをクリックしたとき、navを開いているときは閉じてあげる

        }


        // html、またはbodyのスクロールトップから、取得した値までアニメーションする
        $('html,body').animate({ scrollTop: target }, 700, 'swing');

        burger.toggleClass('active');
        // nav_menuをクリックしたら、バーガーメニューをもとの状態に戻す（もし、クラスakutiveがあったなら取り除く）

        // aタグのクリックしたときの本来の動き（リンクする）を無効にするため  
        return false;
        
    });



//  ***** スマホのさいにバーガーメニューをクリックするたびに、ナビゲーションの出し入れを、スライドトグルさせる設定 *****   

    const nav = $('nav.sp');
    // スマホのさいに、ナビゲーションの出し入れさせるnavの場所を取得

    const burger = $('#burger');
    // スマホのさいに表示させる、ハンバーガーメニューの場所を取得

    burger.on('click', function () {
        nav.toggleClass('drawer');
        $(this).toggleClass('active');
 
      })



//  navそのものをクリックしたとき自身もクローズする  設定 *****  

    nav.on('click', function () {
        
        $(this).toggleClass('drawer');
        // $(this).slideToggle(300);
        // navそのものをクリックしたとき自身もクローズする
        burger.toggleClass('active');
        // nav自身をクリックしたら、バーガーメニューをもとの状態に戻す（もし、クラスakutiveがあったなら取り除く）

    });



});