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
            document.querySelector('.tabs').style.marginLeft = 'auto';
            //logo 중앙정렬
            document.querySelector('#logo').style.marginLeft = CustomMargin;
            document.querySelector('#logo').style.marginRight = CustomMargin;
        } else {
            //메인 DIV 보다 화면이 작을 때
            document.querySelector('#baseDiv').style.marginLeft = lmargin + 'px';
            //메인DIV 폭보다 화면이 작을 때 header
            document.querySelector('.tabs').style.marginLeft = lmargin + ((divWidth - document.querySelector('.tabs').clientWidth) / 2) + 'px';
            //메인DIV 폭보다 화면이 작을 때 logo
            document.querySelector('#logo').style.marginLeft = lmargin + 'px';
        }
    } catch (error) {
        // console.log(error);
    }
}