let subMenu = document.getElementById("mySubMenu");
let cartasTag = document.getElementById("cartas-menu");

cartasTag.addEventListener('mouseover',function(){
    subMenu.style.display = "block";
})

cartasTag.addEventListener('mouseout',function(){
    subMenu.style.display = "none";
})