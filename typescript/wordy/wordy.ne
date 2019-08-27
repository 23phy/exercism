@{%
  const plus      = (a, b) => parseInt(a) + parseInt(b);
  const minus     = (a, b) => parseInt(a) - parseInt(b);
  const multiply  = (a, b) => parseInt(a) * parseInt(b);
  const divide    = (a, b) => parseInt(a) / parseInt(b);
  const cube      = (a)    => Math.pow(parseInt(a), 3);
  const raisedTo  = (a, b) => Math.pow(parseInt(a), parseInt(b));
%}

start ->
    "What is" _ Expression "?" {% d => d[2] %}

Expression ->
    Integer                                                     {% d => parseInt(d[0]) %}
  | Expression _ "plus"          _ Expression                   {% d => plus(d[0], d[4]) %}
  | Expression _ "minus"         _ Expression                   {% d => minus(d[0], d[4]) %}
  | Expression _ "multiplied by" _ Expression                   {% d => multiply(d[0], d[4]) %}
  | Expression _ "divided by"    _ Expression                   {% d => divide(d[0], d[4]) %}
  | Expression _ "raised to the" _ Expression [a-z]:* _ "power" {% d => raisedTo(d[0], d[4]) %}
  | Expression _ "cubed"                                        {% d => cube(d[0]) %}

Integer ->
    null
  | "-" Integer   {% d => d.join('') %}
  | [0-9] Integer {% d => d.join('') %}

_ -> " "  {% d => d[0] %}
