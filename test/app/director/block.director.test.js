const { block, assignment, function_expression } = require('../../../app/director');


var chai = require('chai');
var expect = chai.expect;


describe('block:director', function() {

    it('add test', function(){
        let blockTest = block().add(assignment().name('test_name').value('test_value'));
        let codeResult = blockTest.toString();

        let expected = '{\n' +
            '    test_name = test_value;\n' +
            '}';

        expect(codeResult).to.be.eq(expected)
    })

    it('assignment test', function(){
        let blockTest = block().assignment().name('test_name').value('test_value').end();
        let codeResult = blockTest.toString();

        let expected = '{\n' +
            '    test_name = test_value;\n' +
            '}';

        expect(codeResult).to.be.eq(expected)
    })

    it('error test', function(){

        expect(function() {block().add(function_expression())}).to.throw('invalid.director');
    })

})