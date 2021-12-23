const { assignment, identifier, block, functionType } = require('../../../../../app/types');
var recast = require('recast');
var chai = require('chai');
var expect = chai.expect;


describe('assignment.statement:builder', function() {


    it('builder valido', function(){
        let testNameFunctionBuilder = identifier().name('test_name_function');
        let testParamBuilder = identifier().name('test_param');
        let testNameBuilder = identifier().name('test_name');
        let testValueBuilder = identifier().name('test_value');
        let assignmentBuilder = assignment.statement().nameBuilder(testNameBuilder).valueBuilder(testValueBuilder);
        let blockBuilder = block.statement().addItem(assignmentBuilder);
        
        let resultadoConfig = functionType.expression().name(testNameFunctionBuilder).addParam(testParamBuilder).block(blockBuilder).build();


        let resultadoSyntaxTree = resultadoConfig.syntaxTree();
        let resultadoSyntaxTreeString = recast.print(resultadoSyntaxTree).code;

        let expected = 'function test_name_function(test_param) {\n' +
                        '    test_name = test_value;\n' +
                        '}';

        expect(resultadoSyntaxTreeString).to.be.eq(expected)

    });

});