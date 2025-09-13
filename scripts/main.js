/*Counter*/
const counters = document.querySelectorAll('.counter');
const speed = 100; 

const startCounting = (counter) => {
  const target = +counter.getAttribute('data-target');
  const updateCount = () => {
    const count = +counter.innerText;
    const increment = target / speed;
    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
};
// trigger only when visible
const options = {
  threshold: 0.5
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting(entry.target);
      observer.unobserve(entry.target); // run once
    }
  });
}, options);
counters.forEach(counter => {
  observer.observe(counter);
});



