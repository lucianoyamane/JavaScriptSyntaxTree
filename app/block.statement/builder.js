const { BlockStatementConfig } = require("./config");
const { Builder } = require('../../api/builder');

class BlockStatementBuilder extends Builder {

    constructor() {
        super();
        this._arrayBuilder = [];
    }


    addItem(builder) {
        this._arrayBuilder.push(builder);
        return this;
    }


    get arraySyntaxTree() {
        return this.extractArraySyntaxTree(this._arrayBuilder);
    }


    build() {
        return new BlockStatementConfig(this);
    }
}

module.exports.builder = () => {
    return new BlockStatementBuilder();
};