const { Config } = require('../../../api/config');

class AssigmentStatementConfig extends Config{

    constructor(builder) {
        super();
        this._type = builder.typeValue || "=";
        this._nameSyntaxTree = builder.nameSyntaxTree;
        this._valueSyntaxTree = builder.valueSyntaxTree;
    }



    syntaxTree() {
        return this.ast.assignmentStatement(this._type, this._nameSyntaxTree, this._valueSyntaxTree);
    }

}

module.exports.AssigmentStatementConfig = AssigmentStatementConfig;