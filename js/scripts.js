const schemeSVG = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total")
const menubutton=document.querySelector(".m-menu")
const menu=document.querySelector(".menu")
let cost = 800;
let totalPrice = 0;
schemeSVG.addEventListener("click", (event) => {
    if(!event.target.classList.contains("booked"))
    {
        event.target.classList.toggle("active");
        let totalSeats = schemeSVG.querySelectorAll(".active").length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
    }
});
menubutton.addEventListener('click',()=>{
    console.log('кликнули по меню')
    menu.classList.toggle("is-open");
})

