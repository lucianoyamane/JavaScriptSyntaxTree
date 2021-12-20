var types = require("ast-types");
var b = types.builders;

class AssigmentExpressionConfig {

    constructor(builder) {
        this._type = builder.typeValue || "=";
        this._nameSyntaxTree = builder.nameSyntaxTree;
        this._valueSyntaxTree = builder.valueSyntaxTree;
    }



    syntaxTree() {
        return b.assignmentExpression(this._type, this._nameSyntaxTree, this._valueSyntaxTree);
    }

}

module.exports.AssigmentExpressionConfig = AssigmentExpressionConfig;