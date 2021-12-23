const { assignment, identifier } = require('../../../../../app/types');

var recast = require('recast');
var chai = require('chai');
var expect = chai.expect;


describe('assignment.statement:builder', function() {


    it('builder valid', function(){
        let testeNameBuilder = identifier().name('test_name');
        let testeValueBuilder = identifier().name('test_value');
        let resultConfig = assignment.statement().nameBuilder(testeNameBuilder).valueBuilder(testeValueBuilder).build();
        let resultSyntaxTree = resultConfig.syntaxTree();
        let resultSyntaxTreeString = recast.print(resultSyntaxTree).code;

        expect(resultSyntaxTreeString).to.be.eq('test_name = test_value;')

    });

    it('builder valid type', function(){
        let testeNameBuilder = identifier().name('test_name');
        let testeValueBuilder = identifier().name('test_value');
        let resultConfig = assignment.statement().type('+=').nameBuilder(testeNameBuilder).valueBuilder(testeValueBuilder).build();
        let resultSyntaxTree = resultConfig.syntaxTree();
        let resultSyntaxTreeString = recast.print(resultSyntaxTree).code;

        expect(resultSyntaxTreeString).to.be.eq('test_name += test_value;')

    });

});