// IMPORT MODULES under test here:
// import example from '../src/example.js';

import (isYesOrNo) from '../yes-or-no.js'

const test = QUnit.test;

test('should return true if string contains a y', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'yea'

    //Act 
    // Call the function you're testing and set the result to a const
    const myStuff = isYesorNo(userAnswer)

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(myStuff, true);
});
