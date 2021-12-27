const { functionType, identifier, block } = require('../types');
const { Director } = require('./director')

class FunctionExpressionDirector extends Director {

    constructor() {
        super(functionType.expression());
        this._paramsBuilder = [];
    }

    name(value) {
        this._nameBuilder = identifier().name(value);
        return this;
    }

    addParam(name) {
        this._paramsBuilder.push(identifier().name(name));
        return this;
    }

    toCode() {
        if (this._nameBuilder) {
            this.mainBuilder.name(this._nameBuilder);
        }
        this._paramsBuilder.forEach(builder => this.mainBuilder.addParam(builder));
        this.mainBuilder.block(block.statement());
        let functionConfig = this.mainBuilder.build();

        return functionConfig.syntaxTree();
    }

}

module.exports.director = () => { return new FunctionExpressionDirector() }