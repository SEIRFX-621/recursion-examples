"use strict";

const travelBigObjectRecursion = (obj) => {
    // you code goes here.
    // what will your base case be?
    // what will your recursive statement be?
}

const bigObject = {
    name: 'top',
    a1: {
        name: 'a1',
        b1: {
            name: 'b1'
        },
        b2: {
            name: 'b2',
            c1: {
                name: 'c1'
            }
        }
    },
    a2: {
        name: 'a2'
    },
    a3: {
        name: 'a3',
        b1: {
            name: 'b1',
            c1: {
                name: 'c1',
                d1: {
                    name: 'd1'
                },
                d2: {
                    name: 'd2'
                },
                d3: {
                    name: 'd3'
                }
            },
            c2: {
                name: 'c2'
            }
        }
    }
}

travelBigObjectRecursion(bigObject);