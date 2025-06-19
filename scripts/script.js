const pageLinks = document.querySelectorAll("#header-menu a");

// Highlights current page in navbar

document.addEventListener("DOMContentLoaded", function () {
    const urlArr = window.location.href.split('/');

    const currPage = urlArr[urlArr.length - 1];

    pageLinks.forEach((link) => {
        if (link.id === currPage) {
            link.classList.toggle('current-nav');
        }
    })

});



