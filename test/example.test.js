// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add } from '../calculations.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('add function', (expect) => {
    //Arrange
    const input1 = 3;
    const input2 = 2;
    const expected = 5;

    //Act
    const actual = add(input1, input2);

    // Assert
    expect.equal(actual, expected);
});

test('add function', (expect) => {
    //Arrange
    const input1 = 4;
    const input2 = 5;
    const expected = 9;

    //Act
    const actual = add(input1, input2);

    // Assert
    expect.equal(actual, expected, 'should add 4 and 5');
});