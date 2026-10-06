/* ELUCENIA per-tool fixed module bundle. Preserve all original and method-code notices. */
(function(){"use strict";const factories={"tool-code/criterios-de-light/calculator.js":function(module,exports,require){
/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"criterios-de-light","title":"Critérios de Light","fields":[["pt_pl","Proteína no líquido pleural","num",{"min":0.1,"max":10,"step":0.1,"unit":"g/dL","ph":"3,5"}],["pt_sr","Proteína sérica","num",{"min":1,"max":12,"step":0.1,"unit":"g/dL","ph":"7,0"}],["dhl_pl","DHL no líquido pleural","num",{"min":10,"max":20000,"unit":"U/L","ph":"250"}],["dhl_sr","DHL sérica","num",{"min":10,"max":5000,"unit":"U/L","ph":"200"}],["dhl_lsn","Limite superior da normalidade da DHL sérica (do laboratório)","num",{"min":100,"max":1000,"unit":"U/L","ph":"250"}],["alb_pl","Albumina no líquido pleural","num",{"min":0.1,"max":6,"step":0.1,"unit":"g/dL","ph":"1,5","opt":true}],["alb_sr","Albumina sérica","num",{"min":0.5,"max":6,"step":0.1,"unit":"g/dL","ph":"3,5","opt":true}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var o=e.br;
a.def("criterios-de-light",function(a){
function lightExactGreater(left, leftScale, right, rightScale) {
  if (!Number.isFinite(left) || !Number.isFinite(right) || left < 0 || right < 0) {
    throw new Error('Light comparison requires finite nonnegative operands');
  }
  function decimalParts(value) {
    // The API has already decoded a Number. Use its shortest round-trip decimal
    // spelling, retaining decimal equality instead of comparing binary64 bits.
    var match = /^(\d+)(?:\.(\d+))?(?:e([+-]?\d+))?$/.exec(value.toString());
    if (!match) throw new Error('Unsupported Light decimal operand');
    return {
      coefficient: BigInt(match[1] + (match[2] || '')),
      exponent: Number(match[3] || 0) - (match[2] || '').length
    };
  }
  var a = decimalParts(left), b = decimalParts(right);
  var exponent = Math.min(a.exponent, b.exponent);
  var leftInteger = a.coefficient * BigInt(leftScale) * 10n ** BigInt(a.exponent - exponent);
  var rightInteger = b.coefficient * BigInt(rightScale) * 10n ** BigInt(b.exponent - exponent);
  return leftInteger > rightInteger;
}
var e=a.pt_pl/a.pt_sr,r=a.dhl_pl/a.dhl_sr,i=2*a.dhl_lsn/3,t=[lightExactGreater(a.pt_pl,2,a.pt_sr,1),lightExactGreater(a.dhl_pl,5,a.dhl_sr,3),lightExactGreater(a.dhl_pl,3,a.dhl_lsn,2)],n=t.filter(Boolean).length,s=n>0,d=[["Proteína pleural/sérica",o(e,2)+(t[0]?" (&gt; 0,5)":" (≤ 0,5)")],["DHL pleural/sérica",o(r,2)+(t[1]?" (&gt; 0,6)":" (≤ 0,6)")],["DHL pleural × 2/3 do limite superior",o(a.dhl_pl,0)+" vs "+o(i,0)+" U/L"+(t[2]?" (acima)":" (abaixo)")]],l="",c=null;return null!=a.alb_pl&&null!=a.alb_sr&&(c=a.alb_sr-a.alb_pl,d.push(["Gradiente de albumina (soro − pleura)",o(c,1)+" g/dL"]),s&&c>1.2&&(l="Exsudato pelos critérios de Light, mas gradiente de albumina &gt; 1,2 g/dL: sugere transudato (comum em quem usa diurético).")),!l&&s&&1===n&&(l="Só um critério positivo: se o contexto clínico sugere transudato (IC em uso de diurético), use o gradiente de albumina ou de proteína (&gt; 3,1 g/dL = transudato)."),{main:[s?"Exsudato":"Transudato",""],label:"Critérios de Light",level:s?"mid":"low",verdict:s?n+" de 3 critérios positivos: exsudato":"Nenhum critério positivo: transudato",rows:d,note:l,raw:{rp:e,rd:r,exs:s,n:n,flags:t}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},...(typeof r.level==='string'?{level:r.level}:{}),...(typeof r.verdict==='string'?{verdict:r.verdict}:{}),...(Array.isArray(r.rows)?{rows:r.rows}:{}),...(typeof r.note==='string'&&r.note?{note:r.note}:{}),clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);

}},deps={"tool-code/criterios-de-light/calculator.js":{}},cache={};function load(id){if(cache[id])return cache[id].exports;if(!Object.hasOwn(factories,id))throw Error("Unknown fixed module");const m={exports:{}};cache[id]=m;factories[id](m,m.exports,r=>{const target=deps[id]?.[r];if(!target)throw Error("Unsupported fixed import "+r);return load(target);});return m.exports;}globalThis.EluceniaTool=load("tool-code/criterios-de-light/calculator.js");})();
