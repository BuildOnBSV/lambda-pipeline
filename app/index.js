'use strict';

const greeter = require('./models/greeter')

exports.handler = async (event) => {

    // TODO implement
    var greeting = greeter.sayHello('Andrew')
    console.log(greeting)
    return {

        statusCode: 200,

        body: JSON.stringify(greeting),

    };

};