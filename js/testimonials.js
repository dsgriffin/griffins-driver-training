document.addEventListener("DOMContentLoaded", function() {
    var slideshow = document.getElementById("testimonial-slideshow");
    if (!slideshow) {
        return;
    }

    var slides = Array.prototype.slice.call(
        slideshow.querySelectorAll(".testimonial-slide")
    );

    if (!slides.length) {
        return;
    }

    var activeIndex = 0;

    function syncSlideshowHeight() {
        var activeSlide = slides[activeIndex];
        if (activeSlide) {
            slideshow.style.height = activeSlide.offsetHeight + "px";
        }
    }

    function showSlide(nextIndex) {
        slides[activeIndex].style.display = "none";
        activeIndex = nextIndex;
        slides[activeIndex].style.display = "flex";
        syncSlideshowHeight();
    }

    slides.forEach(function(slide, index) {
        slide.style.display = index === 0 ? "flex" : "none";
    });

    syncSlideshowHeight();
    window.addEventListener("resize", syncSlideshowHeight);

    if (slides.length > 1) {
        window.setInterval(function() {
            var nextIndex = (activeIndex + 1) % slides.length;
            showSlide(nextIndex);
        }, 10000);
    }
});
