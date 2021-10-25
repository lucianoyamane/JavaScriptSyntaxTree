const { IdentifierConfig } = require("./config");

class IdentifierBuilder {

    name(name) {
        this._name = name;
        return this;
    }

    get nameBuilder() {
        return this._name;
    }

    build() {
        return new IdentifierConfig(this);
    }

}

module.exports.builder = function() {
    return new IdentifierBuilder(); 
}