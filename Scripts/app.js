/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";

    var mainContentH1 = $('#mainContent h1')[0];

    var mainContentH1JS = document.querySelectorAll('#mainContent h1')[1];
    
    console.log(mainContentH1);
    console.log(mainContentH1JS);

})();

