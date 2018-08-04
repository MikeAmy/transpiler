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
var go_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,13],$V1=[1,8],$V2=[1,10],$V3=[1,12],$V4=[1,14],$V5=[1,18],$V6=[5,21,25,33,37,38,78],$V7=[5,21,24,25,33,37,38,78],$V8=[1,33],$V9=[1,26],$Va=[1,32],$Vb=[1,29],$Vc=[1,34],$Vd=[1,35],$Ve=[1,38],$Vf=[2,76],$Vg=[1,49],$Vh=[1,60],$Vi=[1,61],$Vj=[1,62],$Vk=[1,63],$Vl=[1,64],$Vm=[1,65],$Vn=[1,66],$Vo=[1,67],$Vp=[1,68],$Vq=[1,69],$Vr=[1,70],$Vs=[2,73],$Vt=[1,73],$Vu=[5,21,23,24,25,28,33,36,37,38,54,55,56,57,58,59,60,61,62,63,64,68,78],$Vv=[5,21,23,24,25,28,33,36,37,38,50,54,55,56,57,58,59,60,61,62,63,64,68,74,78],$Vw=[1,89],$Vx=[2,92],$Vy=[1,96],$Vz=[1,128],$VA=[2,80],$VB=[36,68],$VC=[28,29],$VD=[21,25,33,37,38,78],$VE=[21,24,25,33,37,38,78],$VF=[5,21,23,24,25,28,33,36,37,38,54,55,56,57,58,59,68,78],$VG=[5,21,23,24,25,28,33,36,37,38,54,55,56,57,58,59,60,61,68,78],$VH=[1,154],$VI=[1,169],$VJ=[5,21,24,25,28,33,37,38,78];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"top_level_statements":4,"EOF":5,"statements_":6,"statements_with_vars":7,"initialize_vars":8,"statements_without_vars":9,"statement":10,"initialize_var1":11,"initialize_var":12,"statements":13,"struct_statements":14,"access_modifier":15,"public":16,"private":17,"top_level_statement":18,"statement_with_semicolon":19,"type":20,"IDENTIFIER":21,"struct":22,"{":23,"}":24,"for":25,"e":26,"_":27,",":28,":=":29,"range":30,"dot_expr":31,"if_statement":32,"func":33,"(":34,"parameters":35,")":36,"return":37,"var":38,"identifiers":39,"parallel_assignment":40,"access_array":41,"=":42,"++":43,"--":44,"+=":45,"-=":46,"*=":47,"/=":48,"function_call":49,".":50,"parallel_lhs":51,"parallel_rhs":52,"initialize_var_":53,"||":54,"&&":55,"<=":56,"<":57,">=":58,">":59,"+":60,"-":61,"*":62,"/":63,"%":64,"parentheses_expr":65,"[":66,"access_arr":67,"]":68,"exprs":69,"function":70,"NUMBER":71,"STRING_LITERAL":72,"parameter":73,"][":74,"types":75,"elif":76,"else":77,"if":78,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",16:"public",17:"private",21:"IDENTIFIER",22:"struct",23:"{",24:"}",25:"for",27:"_",28:",",29:":=",30:"range",33:"func",34:"(",36:")",37:"return",38:"var",42:"=",43:"++",44:"--",45:"+=",46:"-=",47:"*=",48:"/=",50:".",54:"||",55:"&&",56:"<=",57:"<",58:">=",59:">",60:"+",61:"-",62:"*",63:"/",64:"%",66:"[",68:"]",70:"function",71:"NUMBER",72:"STRING_LITERAL",74:"][",77:"else",78:"if"},
productions_: [0,[3,2],[6,1],[6,2],[9,2],[9,1],[7,2],[7,1],[8,2],[8,1],[13,1],[14,1],[15,1],[15,1],[18,1],[18,1],[4,2],[4,1],[10,1],[10,6],[10,5],[10,10],[10,10],[10,1],[10,9],[19,2],[19,3],[19,2],[19,1],[19,3],[19,3],[19,2],[19,2],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,1],[40,3],[51,3],[51,3],[52,3],[52,3],[11,1],[12,1],[53,4],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,2],[26,1],[31,3],[31,1],[41,4],[49,3],[49,4],[65,7],[65,1],[65,1],[65,2],[65,3],[65,3],[65,1],[65,1],[65,1],[20,3],[20,1],[73,2],[35,3],[35,1],[35,0],[67,3],[67,1],[69,3],[69,1],[75,3],[75,1],[76,7],[76,4],[32,6],[32,5],[39,3],[39,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 3:
this.$ = [["lexically_scoped_vars",$$[$0-1],["statements",$$[$0]]]]
break;
case 4:
this.$ = $$[$0-1].concat($$[$01]);
break;
case 5: case 9: case 17: case 62: case 79: case 82:
this.$ =
 [$$[$0]];
break;
case 6:
this.$ = $$[$0-1].concat([["semicolon",$$[$0]]]);
break;
case 8: case 16:
this.$ = $$[$0-1].concat([$$[$0]]);
break;
case 10:
this.$ = ["statements",$$[$0]]
break;
case 11:
this.$ = ["struct_statements",$$[$0]]
break;
case 15:
this.$ = ["semicolon",$$[$0]]
break;
case 18:
this.$ = ["semicolon",$$[$0]];
break;
case 19:
this.$ = ["struct",$$[$0-5],$$[$0-1]]
break;
case 20:
this.$ = ["while",$$[$0-3],$$[$0-1]];
break;
case 21:
this.$ = ["foreach","Object",$$[$0-6],$$[$0-3],$$[$0-1]];
break;
case 22:
this.$ = ["foreach_with_index","Object",$$[$0-8],$$[$0-6],$$[$0-3],$$[$0-1]];
break;
case 24:
this.$ = ["function","public",$$[$0-3],$$[$0-7],$$[$0-5],$$[$0-1]];
break;
case 25:
this.$ = ["return",$$[$0]];
break;
case 26:
this.$ = ["initialize_var","Object",$$[$0-2],$$[$0]];
break;
case 27:
this.$ = ["initialize_empty_vars","Object",$$[$0]];
break;
case 29: case 30:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 31: case 32:
this.$ = [$$[$0],$$[$0-1]];
break;
case 33: case 34: case 35: case 36: case 48: case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: case 58:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 37: case 38:
this.$ = [".",[$$[$0-2]].concat($$[$0])]
break;
case 40:
this.$ = ["parallel_assignment",["parallel_lhs",$$[$0-2]],["parallel_rhs",$$[$0]]]
break;
case 41: case 43:
this.$ = [$$[$0-2].concat([$$[$0]])];
break;
case 42: case 44:
this.$ = [$$[$0-2],$$[$0]]
break;
case 45:
this.$ = ["initialize_var"].concat($$[$0]);
break;
case 46:
this.$ = ["lexically_scoped_var"].concat($$[$0]);
break;
case 47:
this.$ = ["Object",$$[$0-2],$$[$0]];
break;
case 59:
this.$ = ["-",$$[$0]];
break;
case 60:
this.$ = [".", $$[$0]];
break;
case 61: case 78: case 81: case 83: case 85: case 91:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 63:
this.$ = ["access_array",$$[$0-3],$$[$0-1]];
break;
case 64:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 65:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 66:
this.$ = ["anonymous_function","Object",$$[$0-4],$$[$0-1]]
break;
case 69:
this.$ = ["initializer_list","Object",[]];
break;
case 70:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 71:
this.$ = $$[$0-1];
break;
case 72: case 73: case 74:
this.$ = yytext;
break;
case 75:
this.$ = [$$[$0-2],"[]"];
break;
case 77:
this.$ = [$$[$0], $$[$0-1]];
break;
case 80:
this.$ = []
break;
case 84: case 86: case 92:
this.$ = [$$[$0]];
break;
case 87:
this.$ = ["elif",$$[$0-4],$$[$0-2],$$[$0]]
break;
case 88:
this.$ = ["else",$$[$0-1]];
break;
case 89:
this.$ = ["if",$$[$0-4],$$[$0-2],$$[$0]];
break;
case 90:
this.$ = ["if",$$[$0-3],$$[$0-1]];
break;
}
},
table: [{3:1,4:2,10:4,11:5,18:3,19:6,20:7,21:$V0,25:$V1,32:9,33:$V2,37:$V3,38:$V4,40:15,41:16,49:17,51:19,53:11,78:$V5},{1:[3]},{5:[1,20],10:4,11:5,18:21,19:6,20:7,21:$V0,25:$V1,32:9,33:$V2,37:$V3,38:$V4,40:15,41:16,49:17,51:19,53:11,78:$V5},o($V6,[2,17]),o($V6,[2,14]),o($V6,[2,15]),o($V7,[2,18]),{21:[1,22]},{21:[1,25],26:23,27:[1,24],31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},o($V7,[2,23]),{21:[1,36]},o($V7,[2,45]),{21:$Ve,26:37,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Vf,28:[1,50],29:[1,39],34:$Vg,42:[1,40],43:[1,41],44:[1,42],45:[1,43],46:[1,44],47:[1,45],48:[1,46],50:[1,47],66:[1,48]},{21:[1,52],39:51},o($V7,[2,28]),{42:[1,53]},o($V7,[2,39],{50:[1,54]}),{21:$Ve,26:55,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{28:[1,57],29:[1,56]},{1:[2,1]},o($V6,[2,16]),{22:[1,58]},{23:[1,59],54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr},{28:[1,71]},o([23,50,54,55,56,57,58,59,60,61,62,63,64],$Vs,{28:[1,72],34:$Vg,66:$Vt}),{21:$Ve,26:74,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},o($Vu,[2,60]),o($Vu,[2,62],{50:[1,75]}),{34:[1,76]},o($Vv,[2,67]),o($Vv,[2,68]),{21:$Ve,26:79,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,68:[1,77],69:78,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:80,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},o($Vv,[2,72]),o($Vv,[2,74]),{34:[1,81]},o($V7,[2,25],{54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o($Vv,$Vs,{34:$Vg,66:$Vt}),{21:$Ve,26:82,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:83,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},o($V7,[2,31]),o($V7,[2,32]),{21:$Ve,26:84,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:85,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:86,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:87,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,31:88,34:$V8,41:30,49:31,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,34:$V8,41:30,49:31,65:91,66:$Va,67:90,68:$Vw,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:79,31:27,34:$V8,36:[1,92],41:30,49:31,61:$V9,65:28,66:$Va,69:93,70:$Vb,71:$Vc,72:$Vd},{21:[1,94]},o($V7,[2,27]),o($V7,$Vx,{28:$Vy,42:[1,95]}),{21:$Ve,26:97,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,31:98,34:$V8,41:30,49:31,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{23:[1,99],54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr},{21:$Ve,26:101,31:27,34:$V8,41:30,49:31,52:100,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:[1,102]},{23:[1,103]},{6:105,7:106,8:107,9:108,10:110,12:109,13:104,19:6,20:7,21:$V0,25:$V1,32:9,33:$V2,37:$V3,38:$V4,40:15,41:16,49:17,51:19,53:111,78:$V5},{21:$Ve,26:112,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:113,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:114,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:115,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:116,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:117,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:118,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:119,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:120,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:121,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:122,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:[1,123]},{21:[1,124]},{21:$Ve,34:$V8,41:30,49:31,65:91,66:$Va,67:90,70:$Vb,71:$Vc,72:$Vd},o($Vu,[2,59]),{21:$Ve,31:125,34:$V8,41:30,49:31,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Vz,35:126,36:$VA,73:127},o($Vv,[2,69]),{68:[1,129]},o($VB,[2,84],{28:[1,130],54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),{36:[1,131],54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr},{21:$Vz,35:132,36:$VA,73:127},o($V7,[2,26],{54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o($V7,[2,30],{54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o($V7,[2,33],{54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o($V7,[2,34],{54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o($V7,[2,35],{54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o($V7,[2,36],{54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o($V7,[2,38]),o([21,23,28,36],[2,75]),{68:[1,133]},{68:[2,82],74:[1,134]},o($Vv,[2,64]),{36:[1,135]},o($VC,[2,42]),{21:$Ve,26:136,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:[1,138],39:137},o($V7,[2,29],{54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o($V7,[2,37]),{6:105,7:106,8:107,9:108,10:110,12:109,13:139,19:6,20:7,21:$V0,25:$V1,32:9,33:$V2,37:$V3,38:$V4,40:15,41:16,49:17,51:19,53:111,78:$V5},o($V7,[2,40],{28:[1,140]}),{28:[1,141],54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr},o($VC,[2,41]),{6:143,7:106,8:107,9:108,10:110,12:109,14:142,19:6,20:7,21:$V0,25:$V1,32:9,33:$V2,37:$V3,38:$V4,40:15,41:16,49:17,51:19,53:111,78:$V5},{24:[1,144]},{24:[2,10]},{24:[2,2]},{7:145,9:108,10:110,12:146,19:6,20:7,21:$V0,25:$V1,32:9,33:$V2,37:$V3,38:$V4,40:15,41:16,49:17,51:19,53:111,78:$V5},{10:148,11:147,19:6,20:7,21:$V0,24:[2,7],25:$V1,32:9,33:$V2,37:$V3,38:$V4,40:15,41:16,49:17,51:19,53:11,78:$V5},o($VD,[2,9]),o($VE,[2,5]),o($VD,[2,46]),o([5,21,23,24,25,28,33,36,37,38,54,68,78],[2,48],{55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o([5,21,23,24,25,28,33,36,37,38,54,55,68,78],[2,49],{56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o($VF,[2,50],{60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o($VF,[2,51],{60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o($VF,[2,52],{60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o($VF,[2,53],{60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o($VG,[2,54],{62:$Vp,63:$Vq,64:$Vr}),o($VG,[2,55],{62:$Vp,63:$Vq,64:$Vr}),o($Vu,[2,56]),o($Vu,[2,57]),o($Vu,[2,58]),{29:[1,149]},{29:[1,150]},o($Vu,[2,61]),{36:[1,151]},{28:[1,152],36:[2,79]},{20:153,21:$VH},o($Vv,[2,70]),{21:$Ve,26:79,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,69:155,70:$Vb,71:$Vc,72:$Vd},o($Vv,[2,71]),{36:[1,156]},o([5,21,23,24,25,28,33,36,37,38,42,50,54,55,56,57,58,59,60,61,62,63,64,68,74,78],[2,63]),{21:$Ve,34:$V8,41:30,49:31,65:91,66:$Va,67:157,70:$Vb,71:$Vc,72:$Vd},o($Vv,[2,65]),o($V7,[2,47],{54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o($V7,[2,91]),o($V7,$Vx,{28:$Vy}),{24:[1,158]},{21:$Ve,26:159,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,26:160,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{24:[1,161]},{24:[2,11]},o($V7,[2,20]),{24:[2,3]},o($VD,[2,8]),{24:[2,6]},o($VE,[2,4]),{30:[1,162]},{30:[1,163]},{23:[1,164]},{21:$Vz,35:165,36:$VA,73:127},o([28,36],[2,77]),o([23,28,36],$Vf,{66:[1,166]}),o($VB,[2,83]),{20:167,21:$VH},{68:[2,81]},o($V7,[2,90],{76:168,77:$VI}),o($VJ,[2,43],{54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o($VJ,[2,44],{54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr}),o($V7,[2,19]),{21:$Ve,31:170,34:$V8,41:30,49:31,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{21:$Ve,31:171,34:$V8,41:30,49:31,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{6:105,7:106,8:107,9:108,10:110,12:109,13:172,19:6,20:7,21:$V0,25:$V1,32:9,33:$V2,37:$V3,38:$V4,40:15,41:16,49:17,51:19,53:111,78:$V5},{36:[2,78]},{68:$Vw},{23:[1,173]},o($V7,[2,89]),{23:[1,175],78:[1,174]},{23:[1,176]},{23:[1,177]},{24:[1,178]},{6:105,7:106,8:107,9:108,10:110,12:109,13:179,19:6,20:7,21:$V0,25:$V1,32:9,33:$V2,37:$V3,38:$V4,40:15,41:16,49:17,51:19,53:111,78:$V5},{21:$Ve,26:180,31:27,34:$V8,41:30,49:31,61:$V9,65:28,66:$Va,70:$Vb,71:$Vc,72:$Vd},{6:105,7:106,8:107,9:108,10:110,12:109,13:181,19:6,20:7,21:$V0,25:$V1,32:9,33:$V2,37:$V3,38:$V4,40:15,41:16,49:17,51:19,53:111,78:$V5},{6:105,7:106,8:107,9:108,10:110,12:109,13:182,19:6,20:7,21:$V0,25:$V1,32:9,33:$V2,37:$V3,38:$V4,40:15,41:16,49:17,51:19,53:111,78:$V5},{6:105,7:106,8:107,9:108,10:110,12:109,13:183,19:6,20:7,21:$V0,25:$V1,32:9,33:$V2,37:$V3,38:$V4,40:15,41:16,49:17,51:19,53:111,78:$V5},o($Vv,[2,66]),{24:[1,184]},{23:[1,185],54:$Vh,55:$Vi,56:$Vj,57:$Vk,58:$Vl,59:$Vm,60:$Vn,61:$Vo,62:$Vp,63:$Vq,64:$Vr},{24:[1,186]},{24:[1,187]},{24:[1,188]},o($V7,[2,24]),{6:105,7:106,8:107,9:108,10:110,12:109,13:189,19:6,20:7,21:$V0,25:$V1,32:9,33:$V2,37:$V3,38:$V4,40:15,41:16,49:17,51:19,53:111,78:$V5},o($V7,[2,88]),o($V7,[2,21]),o($V7,[2,22]),{24:[1,190]},{76:191,77:$VI},o($V7,[2,87])],
defaultActions: {20:[2,1],105:[2,10],106:[2,2],143:[2,11],145:[2,3],147:[2,6],157:[2,81],165:[2,78]},
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
case 1:return 71
break;
case 2:return 72
break;
case 3:return "$"
break;
case 4:return 29
break;
case 5:return "func"
break;
case 6:return 'type'
break;
case 7:return "range"
break;
case 8:return "struct"
break;
case 9:return "public"
break;
case 10:return "extends"
break;
case 11:return "implements"
break;
case 12:return "private"
break;
case 13:return "static"
break;
case 14:return 78
break;
case 15:return 77
break;
case 16:return 37
break;
case 17:return 'while'
break;
case 18:return 25
break;
case 19:return 38
break;
case 20:return 'of'
break;
case 21:return 28
break;
case 22:return ';'
break;
case 23:return 50
break;
case 24:return ':'
break;
case 25:return 55
break;
case 26:return 54
break;
case 27:return 58
break;
case 28:return 59
break;
case 29:return 56
break;
case 30:return 57
break;
case 31:return '=='
break;
case 32:return 42
break;
case 33:return 47
break;
case 34:return 62
break;
case 35:return 48
break;
case 36:return 63
break;
case 37:return 64
break;
case 38:return 46
break;
case 39:return 44
break;
case 40:return 61
break;
case 41:return 43
break;
case 42:return 45
break;
case 43:return 60
break;
case 44:return '^'
break;
case 45:return 23
break;
case 46:return 24
break;
case 47:return 74
break;
case 48:return 66
break;
case 49:return 68
break;
case 50:return 34
break;
case 51:return 36
break;
case 52:return 27
break;
case 53:return 21
break;
case 54:return 5
break;
case 55:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:\$)/,/^(?::=)/,/^(?:func\b)/,/^(?:type\b)/,/^(?:range\b)/,/^(?:struct\b)/,/^(?:public\b)/,/^(?:extends\b)/,/^(?:implements\b)/,/^(?:private\b)/,/^(?:static\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:while\b)/,/^(?:for\b)/,/^(?:var\b)/,/^(?:of\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?::)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:%)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\]\[)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:_\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],"inclusive":true}}
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
exports.parser = go_parser;
exports.Parser = go_parser.Parser;
exports.parse = function () { return go_parser.parse.apply(go_parser, arguments); };
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