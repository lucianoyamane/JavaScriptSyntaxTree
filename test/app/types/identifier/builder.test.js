const { builder } = require('../../../../app/types/identifier');
var recast = require('recast');
var chai = require('chai');
var expect = chai.expect;


describe('identifier:builder', function() {


    it('builder valido', function(){
        let configTeste = builder().name('teste').build();
        let resultadoSyntaxTree = configTeste.syntaxTree();
        let resultadoSyntaxTreeString = recast.print(resultadoSyntaxTree).code;

        expect(resultadoSyntaxTreeString).to.be.eq('teste')

    });

});