// Scroll to top on "Back to Top" click
document.getElementById('BackToTop').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

slide.classList.remove('active');
if (i === index) slide.classList.add('active');

$(document).ready(function () {
  $(".nav-cart").click(function () {
    alert("Your Cart is Empty. Add items to your cart!");
  });
});


