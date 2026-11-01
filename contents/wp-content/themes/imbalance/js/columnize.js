    //jQuery.noConflict();
    jQuery(document).ready(function($){
        if (window.innerWidth > 640) {   // スマホ幅では列分割せずDOM順のまま（mobile.cssが1列表示にする）
            jQuery('.mcol').makeacolumnlists({cols: 3, colWidth: 305, equalHeight: 'ul', startN: 1});
            jQuery('.mcol2').makeacolumnlists({cols: 3, colWidth: 293, equalHeight: 'ul', startN: 1});
        }
    });
