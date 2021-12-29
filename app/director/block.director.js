const { block } = require('../types');
const { Director } = require('./director');
const { director: assignmentDirector } = require('./assignment.statement.director')

class BlockDirector extends Director {

    constructor(higherBuilder) {
        super(block.statement(),higherBuilder);
        this._directors = [];
    }

    add(director) {
        this._directors.push(director);
        return this;
    }

    assignment() {
        let assignmentDirectorItem = assignmentDirector(this);
        this._directors.push(assignmentDirectorItem);
        return assignmentDirectorItem;
    }

    configBuilder() {
        this._directors.forEach(director => this.mainBuilder.addItem(director.toBuilder()));
    }

}

module.exports.director = (higherBuilder) => { return new BlockDirector(higherBuilder) }