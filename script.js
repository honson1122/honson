document.querySelectorAll('.slider').forEach(slider => {
  let scrollAmount = 0;
  const slideStep = 320;
  const slideInterval = 3000;

  setInterval(() => {
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: slideStep, behavior: 'smooth' });
    }
  }, slideInterval);
});
