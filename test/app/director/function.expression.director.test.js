const { function_expression, block } = require('../../../app/director');


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

    it('add block', function(){
        let blockTest = block().assignment().name('test_name').value('test_value').end();
        let codeResult = function_expression().block(blockTest).toString();

        let expected = 'function() {\n' +
            '    test_name = test_value;\n' +
            '}';

        expect(codeResult).to.be.eq(expected)
    })


    it('add block nested', function(){
        let codeResult = function_expression()
                            .block()
                                .assignment()
                                    .name('test_name')
                                    .value('test_value')
                                .end()
                            .end()
                        .toString();

        let expected = 'function() {\n' +
            '    test_name = test_value;\n' +
            '}';

        expect(codeResult).to.be.eq(expected)
    })

})