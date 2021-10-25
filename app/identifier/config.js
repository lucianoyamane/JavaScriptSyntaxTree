var types = require("ast-types");
var b = types.builders;

class IdentifierConfig {

    constructor(builder) {
        this._name = builder.nameBuilder;
    }

    syntaxTree() {
        return b.identifier(this._name);
    }

}

module.exports.IdentifierConfig = IdentifierConfig;