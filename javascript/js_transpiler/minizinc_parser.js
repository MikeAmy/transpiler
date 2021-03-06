/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var minizinc_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,8],$V2=[1,9],$V3=[1,5],$V4=[1,7],$V5=[1,10],$V6=[1,27],$V7=[1,31],$V8=[1,23],$V9=[1,24],$Va=[1,28],$Vb=[1,29],$Vc=[1,30],$Vd=[1,26],$Ve=[5,7,8,9,17,19,21],$Vf=[1,37],$Vg=[1,38],$Vh=[1,39],$Vi=[1,40],$Vj=[1,41],$Vk=[1,42],$Vl=[1,43],$Vm=[1,44],$Vn=[1,45],$Vo=[1,46],$Vp=[1,47],$Vq=[1,48],$Vr=[1,49],$Vs=[1,50],$Vt=[1,51],$Vu=[1,52],$Vv=[2,46],$Vw=[1,54],$Vx=[13,16,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,44,45,46,47,51,53,57,59,60,62,64],$Vy=[1,57],$Vz=[2,35],$VA=[13,16,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,44,45,46,47,48,51,53,57,59,60,62,64],$VB=[1,68],$VC=[51,53],$VD=[13,16,23,25,26,27,44,45,46,47,51,53,57,59,60,62,64],$VE=[13,16,23,25,26,27,28,29,30,31,32,33,34,35,44,45,46,47,51,53,57,59,60,62,64],$VF=[13,16,23,25,26,27,28,29,30,31,32,33,34,35,36,37,44,45,46,47,51,53,57,59,60,62,64],$VG=[9,11,20,24,37,49,52,54,63],$VH=[1,126],$VI=[1,128];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement_":6,"function":7,"var":8,"IDENTIFIER":9,":":10,"(":11,"parameters":12,")":13,"=":14,"e":15,";":16,"predicate":17,"statement_with_semicolon":18,"include":19,"STRING_LITERAL":20,"constraint":21,"if_statement":22,"<->":23,"forall":24,"in":25,"<-":26,"->":27,"\\\\/":28,"/\\\\":29,"==":30,"!=":31,"<=":32,"<":33,">=":34,">":35,"+":36,"-":37,"*":38,"/":39,"div":40,"args":41,"parentheses_expr":42,"set_operator":43,"union":44,"intersection":45,"subset":46,"superset":47,"..":48,"[":49,"exprs":50,"]":51,"{":52,"}":53,"NUMBER":54,"type":55,"parameter":56,",":57,"elif":58,"elseif":59,"then":60,"else_statement":61,"else":62,"if":63,"endif":64,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"function",8:"var",9:"IDENTIFIER",10:":",11:"(",13:")",14:"=",16:";",17:"predicate",19:"include",20:"STRING_LITERAL",21:"constraint",23:"<->",24:"forall",25:"in",26:"<-",27:"->",28:"\\\\/",29:"/\\\\",30:"==",31:"!=",32:"<=",33:"<",34:">=",35:">",36:"+",37:"-",38:"*",39:"/",40:"div",44:"union",45:"intersection",46:"subset",47:"superset",48:"..",49:"[",51:"]",52:"{",53:"}",54:"NUMBER",57:",",59:"elseif",60:"then",62:"else",63:"if",64:"endif"},
productions_: [0,[3,2],[4,2],[4,1],[6,11],[6,10],[6,8],[6,2],[18,2],[18,4],[18,3],[18,6],[18,5],[18,2],[18,4],[15,1],[15,3],[15,9],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,2],[15,4],[15,1],[43,1],[43,1],[43,1],[43,1],[42,3],[42,5],[42,3],[42,3],[42,5],[42,1],[42,1],[42,1],[55,1],[56,4],[12,3],[12,1],[50,3],[50,1],[41,3],[41,1],[58,5],[58,1],[61,2],[22,6]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 51:
this.$ =
 [$$[$0]];
break;
case 4: case 5:
this.$ = ["function","public",$$[$0-8],$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 6:
this.$ = ["predicate",$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 7:
this.$ = ["semicolon",$$[$0-1]]
break;
case 8:
this.$ = ["import",$$[$0].substring(1,$$[$0].length-5)];
break;
case 9:
this.$ = ["initialize_empty_vars",$$[$0-2],[$$[$0]]];
break;
case 10:
this.$ = ["initialize_empty_vars",$$[$0-2],[$$[$0]]]
break;
case 11: case 12:
this.$ = ["initialize_var",$$[$0-4],$$[$0-2],$$[$0]];
break;
case 13:
this.$ = ["function_call","constraint",[$$[$0]]];
break;
case 14:
this.$ = ["function_call","constraint",[["logic_equals",$$[$0-2],$$[$0]]]];
break;
case 16:
this.$ = ['iff',$$[$0-2],$$[$0]];
break;
case 17:
this.$ = ["foreach","Object",$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 18:
this.$ = ['implies',$$[$0],$$[$0-2]];
break;
case 19:
this.$ = ['implies',$$[$0-2],$$[$0]];
break;
case 20:
this.$ = ["||",$$[$0-2],$$[$0]];
break;
case 21:
this.$ = ["&&",$$[$0-2],$$[$0]];
break;
case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 32:
this.$ = ["/",$$[$0-2],$$[$0]];
break;
case 33:
this.$ = ["-",$$[$0]];
break;
case 34:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 35: case 58:
this.$ = $$[$0];
break;
case 40:
this.$ = $$[$0-1]
break;
case 41:
this.$ = ["inclusive_range",$$[$0-3],$$[$0-1]]
break;
case 42:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 43:
this.$ = ["initialize_set","Object",$$[$0-1]];
break;
case 44:
this.$ = [$$[$0-2],$$[$0-3],$$[$0-1]];
break;
case 45: case 47:
this.$ = yytext;
break;
case 49:
this.$ = [$$[$0-2],$$[$0]];
break;
case 50: case 52: case 54:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 53: case 55:
this.$ = [$$[$0]];
break;
case 56:
this.$ = ["ternary_operator",$$[$0-3],$$[$0-1],$$[$0]]
break;
case 59:
this.$ = ["ternary_operator",$$[$0-4],$$[$0-2],$$[$0-1]];
break;
}
},
table: [{3:1,4:2,6:3,7:$V0,8:$V1,9:$V2,17:$V3,18:6,19:$V4,21:$V5},{1:[3]},{5:[1,11]},{4:12,5:[2,3],6:3,7:$V0,8:$V1,9:$V2,17:$V3,18:6,19:$V4,21:$V5},{8:[1,13],9:[1,14]},{9:[1,15]},{16:[1,16]},{20:[1,17]},{9:[1,18]},{10:[1,19]},{9:[1,21],11:$V6,15:20,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{1:[2,1]},{5:[2,2]},{9:[1,32]},{10:[1,33]},{11:[1,34]},o($Ve,[2,7]),{16:[2,8]},{10:[1,35]},{9:[1,36]},{16:[2,13],23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu},o([16,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],$Vv,{11:$Vw,14:[1,53]}),o($Vx,[2,15]),{11:[1,55]},{9:$Vy,11:$V6,15:56,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},o($Vx,$Vz),{9:$Vy,11:$V6,15:58,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:59,20:$V7,22:22,24:$V8,37:$V9,42:60,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:62,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,50:61,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:62,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,50:63,52:$Vb,54:$Vc,63:$Vd},o($VA,[2,45]),o($VA,[2,47]),{10:[1,64]},{9:[1,65]},{8:$VB,12:66,56:67},{9:[1,69]},{14:[1,70],16:[2,10]},{9:$Vy,11:$V6,15:71,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:72,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:73,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:74,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:75,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:76,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:77,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:78,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:79,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:80,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:81,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:82,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:83,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:84,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:85,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:86,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:87,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:89,20:$V7,22:22,24:$V8,37:$V9,41:88,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:90,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},o($Vx,[2,33]),o($VA,$Vv,{11:$Vw}),{23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,60:[1,91]},{13:[1,92],23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,43:93,44:[1,94],45:[1,95],46:[1,96],47:[1,97]},o([13,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,44,45,46,47],$Vz,{48:[1,98]}),{51:[1,99]},o($VC,[2,53],{23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,57:[1,100]}),{53:[1,101]},{9:[1,102]},{11:[1,103]},{13:[1,104]},{13:[2,51],57:[1,105]},{9:[1,106]},{14:[1,107],16:[2,9]},{9:$Vy,11:$V6,15:108,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},o($VD,[2,16],{28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o($VD,[2,18],{28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o($VD,[2,19],{28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o([13,16,23,25,26,27,28,44,45,46,47,51,53,57,59,60,62,64],[2,20],{29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o([13,16,23,25,26,27,28,29,44,45,46,47,51,53,57,59,60,62,64],[2,21],{30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o($VE,[2,22],{36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o($VE,[2,23],{36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o($VE,[2,24],{36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o($VE,[2,25],{36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o($VE,[2,26],{36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o($VE,[2,27],{36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu}),o($VF,[2,28],{38:$Vs,39:$Vt,40:$Vu}),o($VF,[2,29],{38:$Vs,39:$Vt,40:$Vu}),o($Vx,[2,30]),o($Vx,[2,31]),o($Vx,[2,32]),{16:[2,14],23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu},{13:[1,109]},{13:[2,55],23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,57:[1,110]},{23:$Vf,25:[1,111],26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu},{9:$Vy,11:$V6,15:112,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},o($VA,[2,40]),{9:$Vy,11:$V6,15:113,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},o($VG,[2,36]),o($VG,[2,37]),o($VG,[2,38]),o($VG,[2,39]),{9:[1,115],11:$V6,20:$V7,42:114,49:$Va,52:$Vb,54:$Vc},o($VA,[2,42]),{9:$Vy,11:$V6,15:62,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,50:116,52:$Vb,54:$Vc,63:$Vd},o($VA,[2,43]),{11:[1,117]},{8:$VB,12:118,56:67},{14:[1,119]},{8:$VB,12:120,56:67},{10:[1,121]},{9:$Vy,11:$V6,15:122,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{16:[2,12],23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu},o($Vx,[2,34]),{9:$Vy,11:$V6,15:89,20:$V7,22:22,24:$V8,37:$V9,41:123,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:124,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,58:125,59:$VH,61:127,62:$VI},{13:[1,129],23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu},{13:[1,130]},{13:$Vv},o($VC,[2,52]),{8:$VB,12:131,56:67},{13:[1,132]},{9:$Vy,11:$V6,15:133,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{13:[2,50]},{9:[1,134]},{16:[2,11],23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu},{13:[2,54]},{13:[1,135],23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu},{64:[1,136]},{9:$Vy,11:$V6,15:137,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{64:[2,57]},{9:$Vy,11:$V6,15:138,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},o($VA,[2,44]),o($VA,[2,41]),{13:[1,139]},{14:[1,140]},{16:[1,141],23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu},o([13,57],[2,49]),{11:[1,142]},o($Vx,[2,59]),{23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,60:[1,143]},{23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,64:[2,58]},{14:[1,144]},{9:$Vy,11:$V6,15:145,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},o($Ve,[2,6]),{9:$Vy,11:$V6,15:146,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:147,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{9:$Vy,11:$V6,15:148,20:$V7,22:22,24:$V8,37:$V9,42:25,49:$Va,52:$Vb,54:$Vc,63:$Vd},{16:[1,149],23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu},{13:[1,150],23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu},{23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu,58:151,59:$VH,61:127,62:$VI},{16:[1,152],23:$Vf,26:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,39:$Vt,40:$Vu},o($Ve,[2,5]),o($Vx,[2,17]),{64:[2,56]},o($Ve,[2,4])],
defaultActions: {11:[2,1],12:[2,2],17:[2,8],115:[2,46],120:[2,50],123:[2,54],127:[2,57],151:[2,56]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 54
break;
case 2:return 20
break;
case 3:return 17
break;
case 4:return "function"
break;
case 5:return 19
break;
case 6:return "var"
break;
case 7:return 40
break;
case 8:return "if"
break;
case 9:return "endif"
break;
case 10:return "elseif"
break;
case 11:return "else"
break;
case 12:return "then"
break;
case 13:return "return"
break;
case 14:return "constraint"
break;
case 15:return "forall"
break;
case 16:return "union"
break;
case 17:return "intersect"
break;
case 18:return "superset"
break;
case 19:return "subset"
break;
case 20:return 57
break;
case 21:return 16
break;
case 22:return 48
break;
case 23:return '.'
break;
case 24:return 10
break;
case 25:return 29
break;
case 26:return 28
break;
case 27:return '|'
break;
case 28:return 23
break;
case 29:return 26
break;
case 30:return 27
break;
case 31:return 34
break;
case 32:return 35
break;
case 33:return 32
break;
case 34:return 33
break;
case 35:return 31
break;
case 36:return 30
break;
case 37:return 14
break;
case 38:return '*='
break;
case 39:return 38
break;
case 40:return '/='
break;
case 41:return 39
break;
case 42:return '-='
break;
case 43:return '--'
break;
case 44:return 37
break;
case 45:return '++'
break;
case 46:return '+='
break;
case 47:return 36
break;
case 48:return '^'
break;
case 49:return 52
break;
case 50:return 53
break;
case 51:return '!!'
break;
case 52:return 49
break;
case 53:return 51
break;
case 54:return 11
break;
case 55:return 13
break;
case 56:return 9
break;
case 57:return 5
break;
case 58:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:predicate\b)/,/^(?:function\b)/,/^(?:include\b)/,/^(?:var\b)/,/^(?:div\b)/,/^(?:if\b)/,/^(?:endif\b)/,/^(?:elseif\b)/,/^(?:else\b)/,/^(?:then\b)/,/^(?:return\b)/,/^(?:constraint\b)/,/^(?:forall\b)/,/^(?:union\b)/,/^(?:intersect\b)/,/^(?:superset\b)/,/^(?:subset\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.\.)/,/^(?:\.)/,/^(?::)/,/^(?:\/\\)/,/^(?:\\\/)/,/^(?:\|)/,/^(?:<->)/,/^(?:<-)/,/^(?:->)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:!=)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:!!)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = minizinc_parser;
exports.Parser = minizinc_parser.Parser;
exports.parse = function () { return minizinc_parser.parse.apply(minizinc_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}