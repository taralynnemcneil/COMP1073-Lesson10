/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";

    var mainContentH1 = $('#mainContent h1')[0];
    
    var welcome = $('#welcome').text();

    var mainContentH1JS = document.querySelectorAll('#mainContent h1')[1];
    
    //console.log(mainContentH1.textContent);
    //console.log(mainContentH1JS);
    //console.log(welcome);

    /* ---- this is the way of doing it with pure vanilla JS
    
    var form1JS = document.getElementById('form1');
    form1JS.style.width = "50%";
    ------------------------------------------------------ */
    
    // this is the same way to do it but shorter using JQUERY
    $('#form1').css('width', '50%');
    
    // targeting specific attributes (in this case the Placeholder)
    $('#form1 input').attr('placeholder', 'Enter your username');
    
    
})();

