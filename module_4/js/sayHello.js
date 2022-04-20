(function (window) {  
    var sayHello = {};
    var sayWord = "Hello";
    
    sayHello.speak = function (names) {
      console.log(sayWord + " " + names);
    }
        window.sayHello = sayHello;
    })(window);