'use strict';

const greeter = require('../models/greeter')
console.log(greeter)
describe('sayHello', () => {
    test('Undefined name greet', () => {
        const greet = greeter.sayHello();
        expect(greet).toBe('No name given.');
    })
})