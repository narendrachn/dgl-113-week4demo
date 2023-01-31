"use strict";
/**
 * This JS file covers
 * 1. use of event object
 * 2. use evtObj.target to change the clicked element appearance
 * 3. event handling delegation
 **/

// add event listener to the buttons and the section element
let button1 = document.getElementById("button1");
button1.addEventListener("click", showEvtTarget);
let button2 = document.getElementById("button2");
button2.addEventListener("click", setTargetProperty);

let sect1 = document.getElementById("section1");
sect1.addEventListener("click", ehDelegation);

/**
 * This function will show the info of the element the event directly occurred on
 * @param {*} e: the event object, which will be used in the function
 */
function showEvtTarget(e) {
  alert(
    "The element you clicked on is " +
      e.target.tagName +
      "; Event target id is " +
      e.target.id
  );
}

/**
 * this function uses evt obj's target element to change the appearance of the element that
 * the event directly occurred on.
 * @param {*} e: the event object, which will be used in the function
 */
function setTargetProperty(e) {
  alert("setTargetProperty: add a class to event target element.");
  e.target.classList.add( "setFont" );
}

/**
 * this function a higher level element to handle an event occurred on its child or great child elements.
 * @param {*} e: the event object, which will be used in the function
 */
function ehDelegation(e) {
  alert(`This is from an event handler on section1 but the event is occurred on ${e.target.tagName}.\n
  I am adding a class, setBackColor, to the target.`);
  e.target.className = "setBackColor";
}
