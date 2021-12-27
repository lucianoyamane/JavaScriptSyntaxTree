const { function_expression } = require('../../../app/director');


var chai = require('chai');
var expect = chai.expect;


describe('function.expression:director', function() {

    it('basic', function(){
        let codeResult = function_expression().toString();
        expect(codeResult).to.be.eq('function() {}')
    })
    
    it('name param', function(){
        let codeResult = function_expression().name('test_name').addParam('param_1').toString();
        expect(codeResult).to.be.eq('function test_name(param_1) {}')
    })

})