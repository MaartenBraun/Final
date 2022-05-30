const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    document.body.style.backgroundColor="darkkhaki";
    document.getElementById("P1").innerHTML= "darkkhaki";
  }
}

hamburger.addEventListener("mouseover", toggleMenu);


menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
  ) 
  
  const achterEen = document.getElementById('aqua');
  const achterTwee = document.getElementById('groen');
  const achterDrie = document.getElementById('blauw');
  const achterVier = document.getElementById('geel');
  
  
  document.addEventListener("keydown" ,function(event) {
    if(event.key==1) {
      document.body.style.backgroundColor= "aqua";
      document.getElementById("P1").innerHTML= "aquamarine";
      }
      else if(event.key==2) {
        document.body.style.backgroundColor= "lightseagreen";
        document.getElementById("P1").innerHTML= "lightseagreen";
      }
      else if(event.key==3) {
        document.body.style.backgroundColor= "cadetblue";
        document.getElementById("P1").innerHTML= "cadetblue";
      }
      else if (event.key==4) {
        document.body.style.backgroundColor= "lavenderblush";
        document.getElementById("P1").innerHTML= "lavenderblush";
      }
    });
    
    achterEen.addEventListener("click" ,function onClick(event) {
      document.body.style.backgroundColor= "aqua" ;
      document.getElementById("P1").innerHTML = "aquamarine";
    });
    
    achterTwee.addEventListener("click", function onClick(event) {
      document.body.style.backgroundColor= "lightseagreen";
      document.getElementById("P1").innerHTML = "lightseagreen";
    });
    achterDrie.addEventListener("click", function onClick(event) {
      document.body.style.backgroundColor= "cadetblue" ;
      document.getElementById("P1").innerHTML= "cadetblue";
    });
    achterVier.addEventListener("click", function onClick(event) {
      document.body.style.backgroundColor= "lavenderblush";
      document.getElementById("P1").innerHTML= "lavenderblush";
    });
    
    document.addEventListener("keydown", toggleMenu);
    