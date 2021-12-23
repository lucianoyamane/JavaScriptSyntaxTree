const { identifier } = require('../../../../app/types');
var recast = require('recast');
var chai = require('chai');
var expect = chai.expect;


describe('identifier:builder', function() {


    it('builder valido', function(){
        let configTeste = identifier().name('teste').build();
        let resultadoSyntaxTree = configTeste.syntaxTree();
        let resultadoSyntaxTreeString = recast.print(resultadoSyntaxTree).code;

        expect(resultadoSyntaxTreeString).to.be.eq('teste')

    });

});