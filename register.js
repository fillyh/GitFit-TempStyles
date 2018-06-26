  function registerBox(){
  document.getElementById('stepOneBtn').addEventListener('click' , function(e){
    let stepOne = document.getElementById("stepOne");
    let stepTwo = document.getElementById("stepTwo");
    stepOne.style.display = "none";
    stepTwo.style.display = "block";
    event.preventDefault();
  });

  }
  registerBox();
