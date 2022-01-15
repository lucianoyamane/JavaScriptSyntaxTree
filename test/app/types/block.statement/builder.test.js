const { assignment, identifier, block } = require('../../../../app/types');
var recast = require('recast');
var chai = require('chai');
var expect = chai.expect;


describe('block.statement:builder', function() {


    it('builder valido', function(){
        let identifierOneBuilder = identifier().name('identifier_one');
        let identifierTwoBuilder = identifier().name('identifier_two');
        let assignmentBuilder = assignment.statement().nameBuilder(identifierOneBuilder).valueBuilder(identifierTwoBuilder);
        let blockStatementConfig = block.statement().addItem(assignmentBuilder).build();


        let resultSyntaxTree = blockStatementConfig.syntaxTree();
        let resultSyntaxTreeString = recast.print(resultSyntaxTree).code;

        let expected = '{\n' +
                        '    identifier_one = identifier_two;\n' +
                        '}';

        expect(resultSyntaxTreeString).to.be.eq(expected)

    });

});