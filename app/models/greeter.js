'use strict';

module.exports.sayHello = name => {
    if (name != undefined && name != '' && name != null) {
        return `Hello ${name}!`
    } else {
        return `No name given.`
    }
}