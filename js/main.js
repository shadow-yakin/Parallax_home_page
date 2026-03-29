document.addEventListener('DOMContentLoaded', () => {
    const arrowsBox = document.querySelector('.arrows-box');

    if (arrowsBox) {
        arrowsBox.addEventListener('click', (e) => {
            e.preventDefault();

            const start = window.pageYOffset;
            const target = window.innerHeight * 5; // 500vh
            const duration = 5000;
            const startTime = performance.now();

            const animateScroll = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = 1 - Math.pow(1 - progress, 3);

                window.scrollTo(0, start + (target - start) * easedProgress);
                if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                }
            };
            requestAnimationFrame(animateScroll);
        });
    }
});
