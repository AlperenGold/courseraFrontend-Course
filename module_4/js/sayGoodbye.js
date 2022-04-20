(function (window){
    var sayBye = {};
    var sayWord = "Good Bye";
    
    sayBye.speak = function (names) {
      console.log(sayWord + " " + names);
    }
     
     window.sayBye = sayBye;
    })(window);