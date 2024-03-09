function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  
  

  console.log(window.innerWidth);         // actual screen width
  console.log(window.innerHeight);        // actual screen height
  console.log(window.screen.width);        // reported screen width
  console.log(window.screen.height);       // reported screen height
  console.log(window.devicePixelRatio);   // device pixel ratio

//navbar
