function openNav() {
    document.getElementById("register-form").style.width = "40%";
  }
  
  function closeNav() {
    document.getElementById("register-form").style.width = "0";
  }
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