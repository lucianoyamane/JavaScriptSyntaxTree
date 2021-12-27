const { assignment, identifier } = require('../types');
const { Director } = require('./director')

class AssignmentStatementDirector extends Director {

    constructor() {
        super(assignment.statement());
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
        return identifier().name(this._name);
    }

    __builderValue() {
        return identifier().name(this._value || 'null');
    }

    toCode() {
        let assignmentConfig = this.mainBuilder
                                    .nameBuilder(this.__builderName())
                                    .valueBuilder(this.__builderValue())
                                    .build();
        return assignmentConfig.syntaxTree();
    }

}

module.exports.director = () => { return new AssignmentStatementDirector() }