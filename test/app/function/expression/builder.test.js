const { builder } = require('../../../../app/function/expression/builder');
const { builder:builderIdentifier } = require('../../../../app/identifier/builder');
const { builder:builderAssignment } = require('../../../../app/assignment/statement/builder');
const { builder:builderBlockStatement } = require('../../../../app/block.statement/builder');
var recast = require('recast');
var chai = require('chai');
var expect = chai.expect;


describe('assignment.statement:builder', function() {


    it('builder valido', function(){
        let testNameFunctionBuilder = builderIdentifier().name('test_name_function');
        let testParamBuilder = builderIdentifier().name('test_param');
        let testNameBuilder = builderIdentifier().name('test_name');
        let testValueBuilder = builderIdentifier().name('test_value');
        let assignmentBuilder = builderAssignment().nameBuilder(testNameBuilder).valueBuilder(testValueBuilder);
        let blockBuilder = builderBlockStatement().addItem(assignmentBuilder);
        
        let resultadoConfig = builder().name(testNameFunctionBuilder).addParam(testParamBuilder).block(blockBuilder).build();


        let resultadoSyntaxTree = resultadoConfig.syntaxTree();
        let resultadoSyntaxTreeString = recast.print(resultadoSyntaxTree).code;

        let expected = 'function test_name_function(test_param) {\n' +
                        '    test_name = test_value;\n' +
                        '}';

        expect(resultadoSyntaxTreeString).to.be.eq(expected)

    });

});