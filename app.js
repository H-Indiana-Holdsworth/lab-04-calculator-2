// import functions and grab DOM elements
import { add } from './calculations.js';
import { sub } from './calculations.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-btn');
const addOutput = document.getElementById('add-output');

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-btn');
const subOutput = document.getElementById('sub-output');
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

addButton.addEventListener('click', () => {
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const result = add(value1, value2);
    addOutput.textContent = result;
});

subButton.addEventListener('click', () => {
    const value1 = Number(subInput1.value);
    const value2 = Number(subInput2.value);
    const result = sub(value1, value2);
    subOutput.textContent = result;
});