const { Config } = require('../../../../api/config');

class FunctionExpressionConfig extends Config{

    constructor(builder) {
        super();
        this._nameSyntaxTree = builder.nameSyntaxTree;
        this._paramArraySyntaxtTree = builder.paramArraySyntaxTree;
        this._blockSyntaxTree = builder.blockSyntaxTree;
    }

    syntaxTree() {
        return this.ast.functionExpression(this._nameSyntaxTree, this._paramArraySyntaxtTree, this._blockSyntaxTree);
    }

}

module.exports.FunctionExpressionConfig = FunctionExpressionConfig;