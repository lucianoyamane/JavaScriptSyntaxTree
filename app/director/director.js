var recast = require('recast');

class Director {

    toCode(){}

    toString(){
        return recast.print(this.toCode()).code;
    }

}

module.exports.Director = Director;