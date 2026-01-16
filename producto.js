const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const thumbs = document.querySelectorAll('.thumb');
let index = 0;

function showSlide(i) {
  index = (i + images.length) % images.length;
  slide.style.transform = `translateX(-${index * 100}%)`;

  thumbs.forEach((t, idx) =>
    t.classList.toggle('active', idx === index)
  );
}

document.querySelector('.next-btn').onclick = () => showSlide(index + 1);
document.querySelector('.prev-btn').onclick = () => showSlide(index - 1);

thumbs.forEach((thumb, i) => {
  thumb.onclick = () => showSlide(i);
});

setInterval(() => showSlide(index + 1), 3000);
