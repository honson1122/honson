document.querySelectorAll('.slider').forEach(slider => {
  let scrollAmount = 0;
  const slideInterval = setInterval(() => {
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    } else {
      scrollAmount += 300;
    }
    slider.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, 3000);
});
