// settimeout and throttling

function sayHi() {
    var greeting = 'hi...';
    console.log(greeting);
  }
  
  // says Hi immediately
  sayHi();
  
  function sayHiLater() {
    var greeting = 'hi Lucky...';
    setTimeout(function () {
      console.log(greeting);
    }, 5000);
  }
  
  // say hi after 5 seconds
  sayHiLater();
  
  // throttling
  function sayHiEveryFiveSecond() {
    var greeting = 'hi hello...';
    setInterval(function () {
      console.log(greeting);
    }, 1000);
  }
  sayHiEveryFiveSecond();