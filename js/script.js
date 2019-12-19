function myFunction() {
  var x = document.getElementById("panel");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
         }
  }
  function myFunction_one() {
    var x = document.getElementById("panel_one");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
  }
  function myFunction_two() {
    var x = document.getElementById("panel_tw");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction_three() {
    var x = document.getElementById("panel_t");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  $(document).ready(function(){
      $('.carousel').carousel({
      interval: 2000
      });
  });
  const element =  document.querySelector('.logo-nav')
  element.classList.add('animated', 'heartBeat')