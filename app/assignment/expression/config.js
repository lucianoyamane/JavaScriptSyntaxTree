const { Config } = require('../../../api/config');

class AssigmentExpressionConfig extends Config{

    constructor(builder) {
        super();
        this._type = builder.typeValue || "=";
        this._nameSyntaxTree = builder.nameSyntaxTree;
        this._valueSyntaxTree = builder.valueSyntaxTree;
    }



    syntaxTree() {
        return this.ast.assignmentExpression(this._type, this._nameSyntaxTree, this._valueSyntaxTree);
    }

}

module.exports.AssigmentExpressionConfig = AssigmentExpressionConfig;