const { builder } = require('../../../app/block.statement/builder');
const { builder:builderIdentifier } = require('../../../app/identifier/builder');
const { builder:builderAssignment } = require('../../../app/assignment/statement/builder');
var recast = require('recast');
var chai = require('chai');
var expect = chai.expect;


describe('block.statement:builder', function() {


    it('builder valido', function(){
        let identifierOneBuilder = builderIdentifier().name('identifier_one');
        let identifierTwoBuilder = builderIdentifier().name('identifier_two');
        let assignmentBuilder = builderAssignment().nameBuilder(identifierOneBuilder).valueBuilder(identifierTwoBuilder);
        let blockStatementConfig = builder().addItem(assignmentBuilder).build();


        let resultadoSyntaxTree = blockStatementConfig.syntaxTree();
        let resultadoSyntaxTreeString = recast.print(resultadoSyntaxTree).code;

        let expected = '{\n' +
                        '    identifier_one = identifier_two;\n' +
                        '}';

        expect(resultadoSyntaxTreeString).to.be.eq(expected)

    });

});