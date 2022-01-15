const { identifier } = require('../../../../app/types');
var recast = require('recast');
var chai = require('chai');
var expect = chai.expect;


describe('identifier:builder', function() {


    it('builder valido', function(){
        let configTeste = identifier().name('teste').build();
        let resultSyntaxTree = configTeste.syntaxTree();
        let resultSyntaxTreeString = recast.print(resultSyntaxTree).code;

        expect(resultSyntaxTreeString).to.be.eq('teste')

    });

});