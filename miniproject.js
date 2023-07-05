function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


  var heart = document.getElementsByClassName('btn2')[0];
  var heartImg = document.getElementsByClassName('heart')[0];
  var time = document.getElementsByClassName('btn1')[0];
  var realTime = document.getElementById("txt");

  heart.addEventListener("click", function(){
      
       heartImg.style.display="block";
       realTime.style.display="none";

      }
     
  );

  time.addEventListener("click", function()
    {
        realTime.style.display="block";
        heartImg.style.display="none";
    }
    
  );



  // var black = document.getElementById('black');
  // var blue = document.getElementById('blue');
  // var pink = document.getElementById('pink');
  // var purple = document.getElementById('purple');
  
  var image1 = document.getElementById('img1');
  var black = document.getElementById('img2');
  var blue = document.getElementById('img3');
  var pink = document.getElementById('img4');
  var purple = document.getElementById('img5');
  
  var buttons = document.querySelectorAll('.colorbuttons');

  // const buttonPressed = e => {
  //   console.log(e.target.id); 
  // }
  

  const buttonPressed = e => {
    var getButtonName = eval(e.target.id);
    var buttons = document.querySelectorAll('.mainimg');
    for (li of buttons) {
      li.style.display = "none";
    }
    getButtonName.style.display = "block";
  };
  
  var buttons = document.querySelectorAll('.colorbuttons');
  for (let li of buttons) {
    li.addEventListener("click", buttonPressed);
  }
  



  // black.addEventListener('click',function(){
  //   img2.style.display = "block";
  //   img1.style.display= "none";
  //   img3.style.display= "none";
  //   img4.style.display= "none";
  //   img5.style.display= "none";
    
  // });

  // blue.addEventListener('click',function(){
  //   img3.style.display = "block";
  //   img1.style.display= "none";
  //   img2.style.display= "none";
  //   img4.style.display= "none";
  //   img5.style.display= "none";
  // });

  // pink.addEventListener('click',function(){
  //   img4.style.display = "block";
  //   img1.style.display= "none";
  //   img2.style.display= "none";
  //   img3.style.display= "none";
  //   img5.style.display= "none";
  // });

  // purple.addEventListener('click',function(){
  //   img5.style.display = "block";
  //   img1.style.display= "none";
  //   img2.style.display= "none";
  //   img3.style.display= "none";
  //   img4.style.display= "none";
  // });