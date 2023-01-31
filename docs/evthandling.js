"use strict";
/**
 * this JS file covers
 * 1. basic event handling - Multiple way to enable element to respond to event;
 * 2. Even propagation
 * .
 *  */
//use onEvent as an element's property
let button2 = document.getElementById("button2"); // get hold of the button element
button2.onclick = evtHandler1; //  assign the function name but no () to the onclick property
// This function serves as the event handler, assigned to the element's onclick property
function evtHandler1() {
  alert(
    "Attaching an event handling function as an element property. \n The format is eleName.onEvtName = functionName; with no()"
  );
}
// Using addEventlistener(); This option allows multiple handlers for the same event
let button3 = document.getElementById("button3");
button3.addEventListener("click", evtHandler2);
button3.addEventListener("click", evtHandler3);

function evtHandler2() {
  alert("This event handler adds a class to the navbar to change its background color.");
  document.querySelector("nav").classList.add( "setBackColor" );
}

function evtHandler3() {
  alert("This event handler adds a class to 'header h1' to change its font.");
  document.querySelector("header h1").classList.add( "setFont" );
}