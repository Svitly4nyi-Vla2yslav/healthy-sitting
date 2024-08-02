import{g as C,r as m}from"./index-f4768723.js";import{P as n}from"./index-e87d6bac.js";var p={};p.match=N;p.parse=M;var D=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,k=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,I=/^(?:(min|max)-)?(.+)/,S=/(em|rem|px|cm|mm|in|pt|pc)?$/,_=/(dpi|dpcm|dppx)?$/;function N(e,t){return M(e).some(function(r){var a=r.inverse,s=r.type==="all"||t.type===r.type;if(s&&a||!(s||a))return!1;var i=r.expressions.every(function(c){var l=c.feature,h=c.modifier,o=c.value,f=t[l];if(!f)return!1;switch(l){case"orientation":case"scan":return f.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=b(o),f=b(f);break;case"resolution":o=x(o),f=x(f);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=y(o),f=y(f);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,f=parseInt(f,10)||0;break}switch(h){case"min":return f>=o;case"max":return f<=o;default:return f===o}});return i&&!a||!i&&a})}function M(e){return e.split(",").map(function(t){t=t.trim();var r=t.match(D),a=r[1],s=r[2],i=r[3]||"",c={};return c.inverse=!!a&&a.toLowerCase()==="not",c.type=s?s.toLowerCase():"all",i=i.match(/\([^\)]+\)/g)||[],c.expressions=i.map(function(l){var h=l.match(k),o=h[1].toLowerCase().match(I);return{modifier:o[1],feature:o[2],value:h[2]}}),c})}function y(e){var t=Number(e),r;return t||(r=e.match(/^(\d+)\s*\/\s*(\d+)$/),t=r[1]/r[2]),t}function x(e){var t=parseFloat(e),r=String(e).match(_)[1];switch(r){case"dpcm":return t/2.54;case"dppx":return t*96;default:return t}}function b(e){var t=parseFloat(e),r=String(e).match(S)[1];switch(r){case"em":return t*16;case"rem":return t*16;case"cm":return t*96/2.54;case"mm":return t*96/2.54/10;case"in":return t*96;case"pt":return t*72;case"pc":return t*72/12;default:return t}}var Q=p.match,g=typeof window<"u"?window.matchMedia:null;function U(e,t,r){var a=this,s;g&&!r&&(s=g.call(window,e)),s?(this.matches=s.matches,this.media=s.media,s.addListener(l)):(this.matches=Q(e,t),this.media=e),this.addListener=i,this.removeListener=c,this.dispose=h;function i(o){s&&s.addListener(o)}function c(o){s&&s.removeListener(o)}function l(o){a.matches=o.matches,a.media=o.media}function h(){s&&s.removeListener(l)}}function $(e,t,r){return new U(e,t,r)}var H=$;const P=C(H);var T=/[A-Z]/g,q=/^ms-/,d={};function A(e){return"-"+e.toLowerCase()}function E(e){if(d.hasOwnProperty(e))return d[e];var t=e.replace(T,A);return d[e]=q.test(t)?"-"+t:t}function W(e,t){if(e===t)return!0;if(!e||!t)return!1;const r=Object.keys(e),a=Object.keys(t),s=r.length;if(a.length!==s)return!1;for(let i=0;i<s;i++){const c=r[i];if(e[c]!==t[c]||!Object.prototype.hasOwnProperty.call(t,c))return!1}return!0}const u=n.oneOfType([n.string,n.number]),v={all:n.bool,grid:n.bool,aural:n.bool,braille:n.bool,handheld:n.bool,print:n.bool,projection:n.bool,screen:n.bool,tty:n.bool,tv:n.bool,embossed:n.bool},L={orientation:n.oneOf(["portrait","landscape"]),scan:n.oneOf(["progressive","interlace"]),aspectRatio:n.string,deviceAspectRatio:n.string,height:u,deviceHeight:u,width:u,deviceWidth:u,color:n.bool,colorIndex:n.bool,monochrome:n.bool,resolution:u,type:Object.keys(v)},{type:ne,...F}=L,R={minAspectRatio:n.string,maxAspectRatio:n.string,minDeviceAspectRatio:n.string,maxDeviceAspectRatio:n.string,minHeight:u,maxHeight:u,minDeviceHeight:u,maxDeviceHeight:u,minWidth:u,maxWidth:u,minDeviceWidth:u,maxDeviceWidth:u,minColor:n.number,maxColor:n.number,minColorIndex:n.number,maxColorIndex:n.number,minMonochrome:n.number,maxMonochrome:n.number,minResolution:u,maxResolution:u,...F},K={...v,...R};var j={all:K,types:v,matchers:L,features:R};const V=e=>`not ${e}`,G=(e,t)=>{const r=E(e);return typeof t=="number"&&(t=`${t}px`),t===!0?r:t===!1?V(r):`(${r}: ${t})`},X=e=>e.join(" and "),Y=e=>{const t=[];return Object.keys(j.all).forEach(r=>{const a=e[r];a!=null&&t.push(G(r,a))}),X(t)},Z=m.createContext(void 0),z=e=>e.query||Y(e),w=e=>e?Object.keys(e).reduce((r,a)=>(r[E(a)]=e[a],r),{}):void 0,O=()=>{const e=m.useRef(!1);return m.useEffect(()=>{e.current=!0},[]),e.current},J=e=>{const t=m.useContext(Z),r=()=>w(e)||w(t),[a,s]=m.useState(r);return m.useEffect(()=>{const i=r();W(a,i)||s(i)},[e,t]),a},B=e=>{const t=()=>z(e),[r,a]=m.useState(t);return m.useEffect(()=>{const s=t();r!==s&&a(s)},[e]),r},ee=(e,t)=>{const r=()=>P(e,t||{},!!t),[a,s]=m.useState(r),i=O();return m.useEffect(()=>{if(i){const c=r();return s(c),()=>{c&&c.dispose()}}},[e,t]),a},te=e=>{const[t,r]=m.useState(e.matches);return m.useEffect(()=>{const a=s=>{r(s.matches)};return e.addListener(a),r(e.matches),()=>{e.removeListener(a)}},[e]),t},ae=(e,t,r)=>{const a=J(t),s=B(e);if(!s)throw new Error("Invalid or missing MediaQuery!");const i=ee(s,a),c=te(i),l=O();return m.useEffect(()=>{l&&r&&r(c)},[c]),m.useEffect(()=>()=>{i&&i.dispose()},[]),c};export{ae as u};
