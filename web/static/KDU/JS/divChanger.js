function mapChanger(divWidth) {
    var w = document.documentElement.clientWidth;
    var lmargin = 20;
    var custom = divWidth + (lmargin * 2);
    try {
        if (w > custom) {
            var CustomMargin = (w - divWidth) / 2 + 'px';

            //메인 DIV 중앙정렬
            document.querySelector('#baseDiv').style.marginLeft = CustomMargin;
            document.querySelector('#baseDiv').style.marginRight = CustomMargin;
            //header 중앙정렬
            document.querySelector('#headerBody').style.marginLeft = CustomMargin;
            document.querySelector('#headerBody').style.marginRight = CustomMargin;
            //modal 중앙정렬
            document.querySelector('.modal').style.left = '50%';
        } else {
            //메인 DIV 보다 화면이 작을 때
            document.querySelector('#baseDiv').style.marginLeft = lmargin + 'px';
            //메인DIV 폭보다 화면이 작을 때 header
            document.querySelector('#headerBody').style.marginLeft = lmargin + 'px';
            //modal 중앙정렬
            document.querySelector('.modal').style.left = '720px';
        }
    } catch (error) {
        // console.log(error);
    }
}