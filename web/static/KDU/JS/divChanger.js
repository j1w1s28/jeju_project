function mapChanger(divWidth) {
    var w = document.documentElement.clientWidth;
    try {
        if (w > divWidth) {
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
            document.querySelector('#baseDiv').style.marginLeft = 0;
            //메인DIV 폭보다 화면이 작을 때 header
            document.querySelector('.tabs').style.marginLeft = (divWidth - document.querySelector('.tabs').clientWidth) / 2 + 'px';
            //메인DIV 폭보다 화면이 작을 때 logo
            document.querySelector('#logo').style.marginLeft = 0;
        }
    } catch (error) {
        // console.log(error);
    }
}