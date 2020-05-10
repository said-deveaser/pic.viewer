const onPageEnd = (handler) => {
    let body = document.querySelector('body');
    if ((window.pageYOffset + window.innerHeight) > (body.scrollHeight - 1)) {
        handler();
    }
}

export default onPageEnd;
