function openRegistration() {
    var x = document.getElementById("register-form");
    if (x.style.width === "0px") {
     x.style.boxShadow ="-7px 9px 7px 5px #000000"; 
      x.style.width = "40%";
    } else {
      x.style.width = "0px";
      x.style.boxShadow ="none";
    }
}
function openProducts() {
    var x = document.getElementById("article-container");
    if (x.style.height === "0px") {
    
      x.style.height = "110px";
    } else {
      x.style.height = "0px";
    
    }
}