var show = 0;    // show or hide menu 
window.onload = function () {
      displaynone();
}
function displayrules () {    
      document.getElementById("about").style.display = "none";
      document.getElementById("rules").style.display = "block";
}
function displayabout () {    
      document.getElementById("rules").style.display = "none";
      document.getElementById("about").style.display = "block";
}
function displaynone () {    
      document.getElementById("about").style.display = "none";
      document.getElementById("rules").style.display = "none";   
}
function togglemenu () {    
     if (show==0) {
     document.getElementById("singleimg").src = "img/capJScol.png";
     document.getElementsByClassName("menuelem")[0].style.display = "inline";
     document.getElementsByClassName("menuelem")[1].style.display = "inline";
     document.getElementsByClassName("menuelem")[2].style.display = "inline";
     show = 1;
     } else {
     document.getElementById("singleimg").src = "img/capJSbw.png";
     document.getElementsByClassName("menuelem")[0].style.display = "none";
     document.getElementsByClassName("menuelem")[1].style.display = "none";
     document.getElementsByClassName("menuelem")[2].style.display = "none";
     show = 0;
     }
    displaynone();
}