import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('should add correctly',() => {
    const operandA = 1;
    const operandB = 1;

    const actualValue =  sum(operandA, operandB);

    //Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
});

test('should throw an error if string passed on numA parameter', () => {
    const potentialErrorToBeThrow = () => {
        const operandA = '6';
        const operandB = 9;

        //action
        sum(operandA, operandB);

        //asert

        assert.throws(potentialErrorToBeThrow, Error);
    }
});
