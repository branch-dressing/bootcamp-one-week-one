// IMPORT MODULES under test here:
// import example from '../src/example.js';

import isYesOrNo from '../isYes.js';

const test = QUnit.test;

test('should return false if string contains a n', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'nope';

    //Act 
    // Call the function you're testing and set the result to a const
    const myStuff = isYesOrNo(userAnswer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(myStuff, false);
});
