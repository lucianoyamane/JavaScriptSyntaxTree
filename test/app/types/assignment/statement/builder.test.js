const { builder } = require('../../../../../app/types/assignment/statement');
const { builder:identifierBuilder } = require('../../../../../app/types/identifier');
var recast = require('recast');
var chai = require('chai');
var expect = chai.expect;


describe('assignment.statement:builder', function() {


    it('builder valid', function(){
        let testeNameBuilder = identifierBuilder().name('test_name');
        let testeValueBuilder = identifierBuilder().name('test_value');
        let resultConfig = builder().nameBuilder(testeNameBuilder).valueBuilder(testeValueBuilder).build();
        let resultSyntaxTree = resultConfig.syntaxTree();
        let resultSyntaxTreeString = recast.print(resultSyntaxTree).code;

        expect(resultSyntaxTreeString).to.be.eq('test_name = test_value;')

    });

    it('builder valid type', function(){
        let testeNameBuilder = identifierBuilder().name('test_name');
        let testeValueBuilder = identifierBuilder().name('test_value');
        let resultConfig = builder().type('+=').nameBuilder(testeNameBuilder).valueBuilder(testeValueBuilder).build();
        let resultSyntaxTree = resultConfig.syntaxTree();
        let resultSyntaxTreeString = recast.print(resultSyntaxTree).code;

        expect(resultSyntaxTreeString).to.be.eq('test_name += test_value;')

    });

});