// 要先等页面加载完才加载js代码
window.addEventListener('load',function(){
    var spec_preview = document.querySelector('.spec-preview');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');

    // 当我们鼠标经过图片时，显示和隐藏mask和big
    spec_preview.addEventListener('mouseover' , function(){
        mask.style.display = 'block';
        big.style.display = 'block';
    } )

    // 鼠标离开
    spec_preview.addEventListener('mouseout' , function(){
        mask.style.display = 'none';
        big.style.display = 'none';
    } )

    // 鼠标移动事件(黄色盒子随着鼠标的移动而移动)
    // 这里我们要记住，我们需要的是鼠标在图片框内的坐标而不是页面内的坐标
    spec_preview.addEventListener('mousemove',function(e){
        // 计算鼠标在盒子内的坐标 
        var top = e.pageY - this.offsetTop;
        var left = e.pageX - this.offsetLeft;
        console.log(top,left);

        var maskX = left - mask.offsetWidth/2;
        var maskY = top - mask.offsetHeight/2;
        var maskMaxX = spec_preview.offsetWidth - mask.offsetWidth;
        var maskMaxY = spec_preview.offsetHeight - mask.offsetHeight;

         // 限制放大镜的移动
        if(maskX <= 0){
            maskX = 0;
        }
        //记住鼠标的移动offset只有top和left，所以我们想要限制鼠标的移动就只能重这两个方面下手
        else if(maskX >= maskMaxX)
        {
            maskX = maskMaxX;
        }
        if(maskY <= 0 )
        {
            maskY = 0;
        }
        else if(maskY >= maskMaxY )
        {
            maskY = maskMaxY;
        }
        
        // 鼠标默认坐标为左上角，要想鼠标居中则需要将位置向上和向左挪50%
        mask.style.top = maskY + 'px';
        mask.style.left = maskX + 'px';

        // 大图片的移动(即跟随黄色mask的移动进而的放大功能)
        // 比例关系：大图片的移动距离 = mask移动距离 * 大图片移动的最大距离/mask的最大移动距离
        // 获取大图
        var bigimg = document.querySelector('.bigimg');
        // 大图片的最大移动距离 = 大图片的移动距离 - big盒子的距离
        var bigmax = bigimg.offsetWidth - big.offsetWidth;
        // 大图片的移动距离根据公式有：
        var bigx = maskX * bigmax / maskMaxX; 
        var bigy = maskY * bigmax / maskMaxY;

        bigimg.style.top = bigy +'px';
        bigimg.style.left = bigx +'px';
    })
})