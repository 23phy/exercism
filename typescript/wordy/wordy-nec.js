// Generated automatically by nearley, version 2.18.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

  const plus      = (a, b) => parseInt(a) + parseInt(b);
  const minus     = (a, b) => parseInt(a) - parseInt(b);
  const multiply  = (a, b) => parseInt(a) * parseInt(b);
  const divide    = (a, b) => parseInt(a) / parseInt(b);
  const cube      = (a)    => Math.pow(parseInt(a), 3);
  const raisedTo  = (a, b) => Math.pow(parseInt(a), parseInt(b));
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "start$string$1", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "start", "symbols": ["start$string$1", "_", "Expression", {"literal":"?"}], "postprocess": d => d[2]},
    {"name": "Expression", "symbols": ["Integer"], "postprocess": d => parseInt(d[0])},
    {"name": "Expression$string$1", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Expression", "symbols": ["Expression", "_", "Expression$string$1", "_", "Expression"], "postprocess": d => plus(d[0], d[4])},
    {"name": "Expression$string$2", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Expression", "symbols": ["Expression", "_", "Expression$string$2", "_", "Expression"], "postprocess": d => minus(d[0], d[4])},
    {"name": "Expression$string$3", "symbols": [{"literal":"m"}, {"literal":"u"}, {"literal":"l"}, {"literal":"t"}, {"literal":"i"}, {"literal":"p"}, {"literal":"l"}, {"literal":"i"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"b"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Expression", "symbols": ["Expression", "_", "Expression$string$3", "_", "Expression"], "postprocess": d => multiply(d[0], d[4])},
    {"name": "Expression$string$4", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"v"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"b"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Expression", "symbols": ["Expression", "_", "Expression$string$4", "_", "Expression"], "postprocess": d => divide(d[0], d[4])},
    {"name": "Expression$string$5", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Expression$ebnf$1", "symbols": []},
    {"name": "Expression$ebnf$1", "symbols": ["Expression$ebnf$1", /[a-z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Expression$string$6", "symbols": [{"literal":"p"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Expression", "symbols": ["Expression", "_", "Expression$string$5", "_", "Expression", "Expression$ebnf$1", "_", "Expression$string$6"], "postprocess": d => raisedTo(d[0], d[4])},
    {"name": "Expression$string$7", "symbols": [{"literal":"c"}, {"literal":"u"}, {"literal":"b"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Expression", "symbols": ["Expression", "_", "Expression$string$7"], "postprocess": d => cube(d[0])},
    {"name": "Integer", "symbols": []},
    {"name": "Integer", "symbols": [{"literal":"-"}, "Integer"], "postprocess": d => d.join('')},
    {"name": "Integer", "symbols": [/[0-9]/, "Integer"], "postprocess": d => d.join('')},
    {"name": "_", "symbols": [{"literal":" "}], "postprocess": d => d[0]}
]
  , ParserStart: "start"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
