class Builder {

    build() {
    }

    extractSyntaxTree(builder) {
        if (!builder) {
            return undefined;
        }
        return builder.build().syntaxTree();
    }

    extractArraySyntaxTree(builderArray) {
        let syntaxTreeArray = [];
        builderArray.forEach(builder => syntaxTreeArray.push(this.extractSyntaxTree(builder)));
        return syntaxTreeArray;
    }
}

module.exports.Builder = Builder;