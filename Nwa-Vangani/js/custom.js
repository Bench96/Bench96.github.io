window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        document.getElementById('custom-logo-image').style.width = '30px';
    } else {
        document.getElementById('custom-logo-image').style.width = '150px';
    }
}
