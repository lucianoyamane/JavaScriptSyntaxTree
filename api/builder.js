class Builder {

    build() {
    }

    extractSyntaxTree(builder) {
        return builder.build().syntaxTree();
    }
}

module.exports.Builder = Builder;