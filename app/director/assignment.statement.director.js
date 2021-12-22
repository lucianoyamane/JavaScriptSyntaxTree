const { builder } = require('../assignment/statement');
const { builder:builderIdentifier } = require('../identifier');
const { Director } = require('./director')

class AssignmentStatementDirector extends Director {

    constructor() {
        super();
        this._mainBuilder = builder();
    }

    name(value) {
        this._name = value;
        return this;
    }

    value(value) {
        this._value = value;
        return this;
    }

    __builderName() {
        if (!this._name) {
            throw new Error('name null');
        }
        return builderIdentifier().name(this._name);
    }

    __builderValue() {
        return builderIdentifier().name(this._value || 'null');
    }

    toCode() {
        let assignmentConfig = builder()
                                    .nameBuilder(this.__builderName())
                                    .valueBuilder(this.__builderValue())
                                    .build();
        return assignmentConfig.syntaxTree();
    }

}

module.exports.director = () => { return new AssignmentStatementDirector() }