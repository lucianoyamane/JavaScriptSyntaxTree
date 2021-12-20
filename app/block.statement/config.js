const { Config } = require('../../api/config');

class BlockStatementConfig extends Config{

    constructor(builder) {
        super();
        this._arraySyntaxTree = builder.arraySyntaxTree;
    }

    syntaxTree() {
        return this.ast.blockStatement(this._arraySyntaxTree);
    }

}

module.exports.BlockStatementConfig = BlockStatementConfig;