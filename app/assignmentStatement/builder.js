
class AssignmentStatementBuilder {


    type(type) {
        this._type = type;
    }

    nameSyntaxTree(nameSyntaxTree) {
        this._nameSyntaxTree = nameSyntaxTree;
    }

    argSyntaxTree(argSyntaxTree) {
        this._argSyntaxTree = argSyntaxTree;
    }

    get type() {
        return this._type;
    }

    get nameSyntaxTree() {
        return this._nameSyntaxTree;
    }

    get argSyntaxTree() {
        return this._argSyntaxTree;
    }

}

module.exports.AssignmentStatementBuilder = AssignmentStatementBuilder;