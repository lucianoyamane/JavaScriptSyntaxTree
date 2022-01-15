var recast = require('recast');
var chai = require('chai');
var expect = chai.expect;

const { visit } = require('ast-types');


describe('fetures:test', function() {


    it('toCode test', function(){
        const code = [
            "function add(a, b) {",
            "  return a +",
            "    // Weird formatting, huh?",
            "    b;",
            "}"
          ].join("\n");
          
          const ast = recast.parse(code);


          expect(ast).to.be.not.null;

    });

    it('change code', function(){
        const code = [
            "function newValue(fooObject) {",
            "  fooObject.fooAttribute = 'value';",
            "}"
          ].join("\n");
          
          const ast = recast.parse(code);

          visit(ast, {
              visitMemberExpression(path) {
                var node = path.node;
                if (node.property && node.property.name == 'fooAttribute') {
                    node.property.name = 'ipsumAttribute';
                }
                this.traverse(path);
              }
          });

          let expected = "function newValue(fooObject) {\n  fooObject.ipsumAttribute = 'value';\n}";
          expect(recast.print(ast).code).to.be.eql(expected);

    });

});