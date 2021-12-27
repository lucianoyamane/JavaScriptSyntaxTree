var recast = require('recast');

class Director {

    constructor(builder) {
        this._mainBuilder = builder;
    }

    get mainBuilder() {
        return this._mainBuilder;
    }

    toCode(){}

    toString(){
        return recast.print(this.toCode()).code;
    }

}

module.exports.Director = Director;