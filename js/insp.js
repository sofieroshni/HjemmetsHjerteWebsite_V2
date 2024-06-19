const scrollBtn =document.getElementById("scrollBtn");
const BtnHenrik = document.getElementById("whiteBtnHenrik");
const CardOne = document.getElementById("HenrikChairCard")
const closeTheCard = document.getElementById("closeBtnCardFirst")


function scrollDownFunction() {
    window.scrollBy({
      top: 600, // Scroll down 200px
      behavior: 'smooth' // Smooth scroll
    });
}
 
  scrollBtn.addEventListener("click", scrollDownFunction);

  function showCard() {
    CardOne.style.display = "flex";
  }
  function closeCard() {
    CardOne.style.display = "none";
  }
  BtnHenrik.addEventListener("click", showCard);
  closeTheCard.addEventListener("click", closeCard);

