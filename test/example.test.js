// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, sub, multi, divide } from '../calculations.js';

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

test('sub function', (expect) => {
    const input1 = 6;
    const input2 = 4;
    const expected = 2;

    const actual = sub(input1, input2);

    expect.equal(actual, expected, 'should subtract 4 from 6');

});

test('multi function', (expect) => {
    const input1 = 2;
    const input2 = 3;
    const expected = 6;

    const actual = multi(input1, input2);

    expect.equal(actual, expected, 'should multiply 2 by 3');
});

test('divide function', (expect) => {
    const input1 = 10;
    const input2 = 5;
    const expected = 2;

    const actual = divide(input1, input2);

    expect.equal(actual, expected, 'should divide 10 by 5');
});