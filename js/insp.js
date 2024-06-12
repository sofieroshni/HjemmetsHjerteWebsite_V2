const scrollBtn =document.getElementById("scrollBtn");

function scrollDownFunction() {
    window.scrollBy({
      top: 500, // Scroll down 200px
      behavior: 'smooth' // Smooth scroll
    });
}
 
  scrollBtn.addEventListener("click", scrollDownFunction);

