const { AssigmentStatementConfig } = require("./config");
const { Builder } = require('../../../api/builder');

class AssignmentStatementBuilder extends Builder{


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
        return this._nameBuilder.build().syntaxTree();
    }

    get valueSyntaxTree() {
        return this._valueBuilder.build().syntaxTree();
    }

    build() {
        return new AssigmentStatementConfig(this);
    }
}

module.exports.builder = () => {
    return new AssignmentStatementBuilder();
};