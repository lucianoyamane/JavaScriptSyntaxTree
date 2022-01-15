const { assignment, identifier } = require('../../../../../app/types');

var recast = require('recast');
var chai = require('chai');
var expect = chai.expect;


describe('assignment.expression:builder', function() {


    it('builder valid', function(){
        let testeNameBuilder = identifier().name('test_name');
        let testeValueBuilder = identifier().name('test_value');
        let resultConfig = assignment.expression().nameBuilder(testeNameBuilder).valueBuilder(testeValueBuilder).build();
        let resultSyntaxTree = resultConfig.syntaxTree();
        let resultSyntaxTreeString = recast.print(resultSyntaxTree).code;

        expect(resultSyntaxTreeString).to.be.eq('test_name = test_value');

    });

    it('builder configurable', function(){
        let testeNameBuilder = identifier().name('test_name');
        let testeValueBuilder = identifier().name('test_value');

        let resultBuilder = assignment.expression().nameBuilder(testeNameBuilder).valueBuilder(testeValueBuilder);
        testeNameBuilder.name('test_new_name');

        
        let resultConfig = resultBuilder.build();
        let resultSyntaxTree = resultConfig.syntaxTree();
        let resultSyntaxTreeString = recast.print(resultSyntaxTree).code;

        expect(resultSyntaxTreeString).to.be.eq('test_new_name = test_value');

    });

    it('builder valido type', function(){
        let testeNameBuilder = identifier().name('test_name');
        let testeValueBuilder = identifier().name('test_value');
        let resultConfig = assignment.expression().type('+=').nameBuilder(testeNameBuilder).valueBuilder(testeValueBuilder).build();
        let resultSyntaxTree = resultConfig.syntaxTree();
        let resultSyntaxTreeString = recast.print(resultSyntaxTree).code;

        expect(resultSyntaxTreeString).to.be.eq('test_name += test_value')

    });

});