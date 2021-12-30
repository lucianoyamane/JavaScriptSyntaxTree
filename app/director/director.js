var recast = require('recast');

class Director {

    constructor(key, builder, higherBuilder) {
        this._key = key;
        this._mainBuilder = builder;
        this._higherBuilder = higherBuilder;
    }

    get mainBuilder() {
        return this._mainBuilder;
    }

    get key() {
        return this._key;
    }

    configBuilder() {

    }

    toBuilder() {
        this.configBuilder();
        return this.mainBuilder;
    }

    toCode() {
        this.configBuilder();
        let config = this.mainBuilder.build();
        return config.syntaxTree();
    }

    toString(){
        return recast.print(this.toCode()).code;
    }

    end() {
        if (this._higherBuilder) {
            return this._higherBuilder;
        }
        return this;
    }

}

module.exports.Director = Director;