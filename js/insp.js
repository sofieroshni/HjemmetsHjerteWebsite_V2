const scrollBtn =document.getElementById("scrollBtn");
const BtnHenrik = document.getElementById("whiteBtnHenrik");


function scrollDownFunction() {
    window.scrollBy({
      top: 600, // Scroll down 200px
      behavior: 'smooth' // Smooth scroll
    });
}
 
  scrollBtn.addEventListener("click", scrollDownFunction);

