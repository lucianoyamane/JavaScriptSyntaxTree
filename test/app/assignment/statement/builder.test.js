const { builder } = require('../../../../app/assignment/statement/builder');
const { builder:identifierBuilder } = require('../../../../app/identifier/builder');
var recast = require('recast');
var chai = require('chai');
var expect = chai.expect;


describe('assignment.statement:builder', function() {


    it('builder valid', function(){
        let testeNameBuilder = identifierBuilder().name('test_name');
        let testeValueBuilder = identifierBuilder().name('test_value');
        let resultadoConfig = builder().nameBuilder(testeNameBuilder).valueBuilder(testeValueBuilder).build();
        let resultadoSyntaxTree = resultadoConfig.syntaxTree();
        let resultadoSyntaxTreeString = recast.print(resultadoSyntaxTree).code;

        expect(resultadoSyntaxTreeString).to.be.eq('test_name = test_value;')

    });

    it('builder valid type', function(){
        let testeNameBuilder = identifierBuilder().name('test_name');
        let testeValueBuilder = identifierBuilder().name('test_value');
        let resultadoConfig = builder().type('+=').nameBuilder(testeNameBuilder).valueBuilder(testeValueBuilder).build();
        let resultadoSyntaxTree = resultadoConfig.syntaxTree();
        let resultadoSyntaxTreeString = recast.print(resultadoSyntaxTree).code;

        expect(resultadoSyntaxTreeString).to.be.eq('test_name += test_value;')

    });

});