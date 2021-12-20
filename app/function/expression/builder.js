const { FunctionExpressionConfig } = require("./config");
const { Builder } = require('../../../api/builder');

class FunctionExpressionBuilder extends Builder {

    constructor() {
        super();
        this._paramsBuilder = [];
    }


    name(builder) {
        this._nameBuilder = builder;
        return this;
    }

    addParam(builder) {
        this._paramsBuilder.push(builder);
        return this;
    }

    block(builder) {
        this._blockBuilder = builder;
        return this;
    }


    get nameSyntaxTree() {
        return this.extractSyntaxTree(this._nameBuilder);
    }

    get paramArraySyntaxTree() {
        return this.extractArraySyntaxTree(this._paramsBuilder);
    }

    get blockSyntaxTree() {
        return this.extractSyntaxTree(this._blockBuilder);
    }

    build() {
        return new FunctionExpressionConfig(this);
    }
}

module.exports.builder = () => {
    return new FunctionExpressionBuilder();
};