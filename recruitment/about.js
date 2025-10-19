// AboutAA CAROUSEL FUNCTION
$(document).ready(function () {
    function switchImages() {
        var windowWidth = $(window).width();
        $('.carousel-item').each(function () {
            var $desktopImage = $(this).find('source[media="(min-width: 992px)"]');
            var $mobileImage = $(this).find('img');
            if (windowWidth >= 992) {
                $desktopImage.show();
                $mobileImage.hide();
            } else {
                $desktopImage.hide();
                $mobileImage.show();
            }
        });
    }

    $(window).on('resize', switchImages);
    switchImages();
});

// DOT INDICATOR
const carouselItems = document.querySelectorAll('.carousel-item');
const dotContainer = document.getElementById('dotContainer');

carouselItems.forEach((item, index) => {
    const button = document.createElement('button');
    button.classList.add('inactive');
    button.setAttribute('data-bs-target', '#aboutCarousel');
    button.setAttribute('data-bs-slide-to', index);
    button.addEventListener('click', function () {
        setActiveDot(index);
    });
    dotContainer.appendChild(button);
});

function setActiveDot(index) {
    const dots = dotContainer.querySelectorAll('button');
    dots.forEach((dot, idx) => {
        dot.classList.remove('active');
        dot.classList.add('inactive');
        if (idx === index) {
            dot.classList.add('active');
            dot.classList.remove('inactive');
        }
    });
}

// Update active dot on slide change
$('#aboutCarousel').on('slide.bs.carousel', function (event) {
    setActiveDot(event.to);
});


