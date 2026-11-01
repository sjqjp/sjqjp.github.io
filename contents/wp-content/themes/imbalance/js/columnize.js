    //jQuery.noConflict();
    jQuery(document).ready(function($){
        if (window.innerWidth > 640) {   // スマホ幅では列分割せずDOM順のまま（mobile.cssが1列表示にする）
            jQuery('.mcol').makeacolumnlists({cols: 3, colWidth: 305, equalHeight: 'ul', startN: 1});
            jQuery('.mcol2').makeacolumnlists({cols: 3, colWidth: 293, equalHeight: 'ul', startN: 1});
        } else {
            // スマホ: ハンバーガーメニュー（HTMLは変更せずJSでボタンを生やし、mobile.cssが見た目を担当）
            var menu = document.getElementById('menu');
            var top = document.getElementById('top');
            if (menu && top) {
                document.body.className += ' sjq-mobile-nav';
                var btn = document.createElement('button');
                btn.id = 'sjq-burger';
                btn.setAttribute('aria-label', 'menu');
                btn.innerHTML = '<span></span><span></span><span></span>';
                top.appendChild(btn);
                btn.addEventListener('click', function(){
                    document.body.classList.toggle('sjq-nav-open');
                });
            }
        }
    });
