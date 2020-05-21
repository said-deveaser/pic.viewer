
/*
* check if window before end of page on 1(one) px
*/
const onPageEnd = (handler) => {
    let body = document.querySelector('body');
    if ((window.pageYOffset + window.innerHeight) > (body.scrollHeight - 1)) {
        handler();
    }
}

export default onPageEnd;
