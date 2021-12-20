const { builder } = require('../../../app/assignment.statement/builder');
const { builder:identifierBuilder } = require('../../../app/identifier/builder');
var recast = require('recast');
var chai = require('chai');
var expect = chai.expect;


describe('assignment.statement:builder', function() {


    it('builder valido', function(){
        let testeNameBuilder = identifierBuilder().name('teste_name');
        let testeValueBuilder = identifierBuilder().name('teste_value');
        let resultadoConfig = builder().nameBuilder(testeNameBuilder).valueBuilder(testeValueBuilder).build();
        let resultadoSyntaxTree = resultadoConfig.syntaxTree();
        let resultadoSyntaxTreeString = recast.print(resultadoSyntaxTree).code;

        expect(resultadoSyntaxTreeString).to.be.eq('teste_name = teste_value;')

    });

    it('builder valido type informado', function(){
        let testeNameBuilder = identifierBuilder().name('teste_name');
        let testeValueBuilder = identifierBuilder().name('teste_value');
        let resultadoConfig = builder().type('+=').nameBuilder(testeNameBuilder).valueBuilder(testeValueBuilder).build();
        let resultadoSyntaxTree = resultadoConfig.syntaxTree();
        let resultadoSyntaxTreeString = recast.print(resultadoSyntaxTree).code;

        expect(resultadoSyntaxTreeString).to.be.eq('teste_name += teste_value;')

    });

});