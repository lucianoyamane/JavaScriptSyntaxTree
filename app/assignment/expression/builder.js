const { AssigmentExpressionConfig } = require("./config");
const { Builder } = require('../../../api/builder');

class AssignmentExpressionBuilder extends Builder {


    type(value) {
        this._type = value;
        return this;
    }

    nameBuilder(builder) {
        this._nameBuilder = builder;
        return this;
    }

    valueBuilder(builder) {
        this._valueBuilder = builder;
        return this;
    }

    get typeValue() {
        return this._type;
    }

    get nameSyntaxTree() {
        return this.extractSyntaxTree(this._nameBuilder);
    }

    get valueSyntaxTree() {
        return this.extractSyntaxTree(this._valueBuilder);
    }

    build() {
        return new AssigmentExpressionConfig(this);
    }
}

module.exports.builder = () => {
    return new AssignmentExpressionBuilder();
};