(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ur,D,bu,Ot,rl,Iu,Zs,wu,ti={},Cu=[],Ap=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Fi=Array.isArray;function Xe(t,e){for(var n in e)t[n]=e[n];return t}function Eu(t){var e=t.parentNode;e&&e.removeChild(t)}function Ue(t,e,n){var r,i,s,o={};for(s in e)s=="key"?r=e[s]:s=="ref"?i=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?ur.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(s in t.defaultProps)o[s]===void 0&&(o[s]=t.defaultProps[s]);return Ln(t,o,r,i,null)}function Ln(t,e,n,r,i){var s={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++bu};return i==null&&D.vnode!=null&&D.vnode(s),s}function Np(){return{current:null}}function We(t){return t.children}function Ge(t,e){this.props=t,this.context=e}function qn(t,e){if(e==null)return t.__?qn(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?qn(t):null}function Su(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Su(t)}}function eo(t){(!t.__d&&(t.__d=!0)&&Ot.push(t)&&!ni.__r++||rl!==D.debounceRendering)&&((rl=D.debounceRendering)||Iu)(ni)}function ni(){var t,e,n,r,i,s,o,a;for(Ot.sort(Zs);t=Ot.shift();)t.__d&&(e=Ot.length,r=void 0,i=void 0,o=(s=(n=t).__v).__e,(a=n.__P)&&(r=[],(i=Xe({},s)).__v=s.__v+1,Ao(a,s,i,n.__n,a.ownerSVGElement!==void 0,s.__h!=null?[o]:null,r,o??qn(s),s.__h),Pu(r,s),s.__e!=o&&Su(s)),Ot.length>e&&Ot.sort(Zs));ni.__r=0}function Tu(t,e,n,r,i,s,o,a,l,c){var u,d,h,f,p,g,v,m=r&&r.__k||Cu,_=m.length;for(n.__k=[],u=0;u<e.length;u++)if((f=n.__k[u]=(f=e[u])==null||typeof f=="boolean"||typeof f=="function"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Ln(null,f,null,null,f):Fi(f)?Ln(We,{children:f},null,null,null):f.__b>0?Ln(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(h=m[u])===null||h&&f.key==h.key&&f.type===h.type)m[u]=void 0;else for(d=0;d<_;d++){if((h=m[d])&&f.key==h.key&&f.type===h.type){m[d]=void 0;break}h=null}Ao(t,f,h=h||ti,i,s,o,a,l,c),p=f.__e,(d=f.ref)&&h.ref!=d&&(v||(v=[]),h.ref&&v.push(h.ref,null,f),v.push(d,f.__c||p,f)),p!=null?(g==null&&(g=p),typeof f.type=="function"&&f.__k===h.__k?f.__d=l=Du(f,l,t):l=xu(t,f,h,m,p,l),typeof n.type=="function"&&(n.__d=l)):l&&h.__e==l&&l.parentNode!=t&&(l=qn(h))}for(n.__e=g,u=_;u--;)m[u]!=null&&(typeof n.type=="function"&&m[u].__e!=null&&m[u].__e==n.__d&&(n.__d=Ru(r).nextSibling),Nu(m[u],m[u]));if(v)for(u=0;u<v.length;u++)Au(v[u],v[++u],v[++u])}function Du(t,e,n){for(var r,i=t.__k,s=0;i&&s<i.length;s++)(r=i[s])&&(r.__=t,e=typeof r.type=="function"?Du(r,e,n):xu(n,r,r,i,r.__e,e));return e}function Ve(t,e){return e=e||[],t==null||typeof t=="boolean"||(Fi(t)?t.some(function(n){Ve(n,e)}):e.push(t)),e}function xu(t,e,n,r,i,s){var o,a,l;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(n==null||i!=s||i.parentNode==null)e:if(s==null||s.parentNode!==t)t.appendChild(i),o=null;else{for(a=s,l=0;(a=a.nextSibling)&&l<r.length;l+=1)if(a==i)break e;t.insertBefore(i,s),o=s}return o!==void 0?o:i.nextSibling}function Ru(t){var e,n,r;if(t.type==null||typeof t.type=="string")return t.__e;if(t.__k){for(e=t.__k.length-1;e>=0;e--)if((n=t.__k[e])&&(r=Ru(n)))return r}return null}function Op(t,e,n,r,i){var s;for(s in n)s==="children"||s==="key"||s in e||ri(t,s,null,n[s],r);for(s in e)i&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||n[s]===e[s]||ri(t,s,e[s],n[s],r)}function il(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Ap.test(e)?n:n+"px"}function ri(t,e,n,r,i){var s;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||il(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||il(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+s]=n,n?r||t.addEventListener(e,s?ol:sl,s):t.removeEventListener(e,s?ol:sl,s);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function sl(t){return this.l[t.type+!1](D.event?D.event(t):t)}function ol(t){return this.l[t.type+!0](D.event?D.event(t):t)}function Ao(t,e,n,r,i,s,o,a,l){var c,u,d,h,f,p,g,v,m,_,I,b,P,y,E,S=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,a=e.__e=n.__e,e.__h=null,s=[a]),(c=D.__b)&&c(e);try{e:if(typeof S=="function"){if(v=e.props,m=(c=S.contextType)&&r[c.__c],_=c?m?m.props.value:c.__:r,n.__c?g=(u=e.__c=n.__c).__=u.__E:("prototype"in S&&S.prototype.render?e.__c=u=new S(v,_):(e.__c=u=new Ge(v,_),u.constructor=S,u.render=Mp),m&&m.sub(u),u.props=v,u.state||(u.state={}),u.context=_,u.__n=r,d=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),S.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Xe({},u.__s)),Xe(u.__s,S.getDerivedStateFromProps(v,u.__s))),h=u.props,f=u.state,u.__v=e,d)S.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(S.getDerivedStateFromProps==null&&v!==h&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(v,_),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(v,u.__s,_)===!1||e.__v===n.__v){for(e.__v!==n.__v&&(u.props=v,u.state=u.__s,u.__d=!1),u.__e=!1,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(x){x&&(x.__=e)}),I=0;I<u._sb.length;I++)u.__h.push(u._sb[I]);u._sb=[],u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(v,u.__s,_),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(h,f,p)})}if(u.context=_,u.props=v,u.__P=t,b=D.__r,P=0,"prototype"in S&&S.prototype.render){for(u.state=u.__s,u.__d=!1,b&&b(e),c=u.render(u.props,u.state,u.context),y=0;y<u._sb.length;y++)u.__h.push(u._sb[y]);u._sb=[]}else do u.__d=!1,b&&b(e),c=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++P<25);u.state=u.__s,u.getChildContext!=null&&(r=Xe(Xe({},r),u.getChildContext())),d||u.getSnapshotBeforeUpdate==null||(p=u.getSnapshotBeforeUpdate(h,f)),Tu(t,Fi(E=c!=null&&c.type===We&&c.key==null?c.props.children:c)?E:[E],e,n,r,i,s,o,a,l),u.base=e.__e,e.__h=null,u.__h.length&&o.push(u),g&&(u.__E=u.__=null),u.__e=!1}else s==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=kp(n.__e,e,n,r,i,s,o,l);(c=D.diffed)&&c(e)}catch(x){e.__v=null,(l||s!=null)&&(e.__e=a,e.__h=!!l,s[s.indexOf(a)]=null),D.__e(x,e,n)}}function Pu(t,e){D.__c&&D.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){D.__e(r,n.__v)}})}function kp(t,e,n,r,i,s,o,a){var l,c,u,d=n.props,h=e.props,f=e.type,p=0;if(f==="svg"&&(i=!0),s!=null){for(;p<s.length;p++)if((l=s[p])&&"setAttribute"in l==!!f&&(f?l.localName===f:l.nodeType===3)){t=l,s[p]=null;break}}if(t==null){if(f===null)return document.createTextNode(h);t=i?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,h.is&&h),s=null,a=!1}if(f===null)d===h||a&&t.data===h||(t.data=h);else{if(s=s&&ur.call(t.childNodes),c=(d=n.props||ti).dangerouslySetInnerHTML,u=h.dangerouslySetInnerHTML,!a){if(s!=null)for(d={},p=0;p<t.attributes.length;p++)d[t.attributes[p].name]=t.attributes[p].value;(u||c)&&(u&&(c&&u.__html==c.__html||u.__html===t.innerHTML)||(t.innerHTML=u&&u.__html||""))}if(Op(t,h,d,i,a),u)e.__k=[];else if(Tu(t,Fi(p=e.props.children)?p:[p],e,n,r,i&&f!=="foreignObject",s,o,s?s[0]:n.__k&&qn(n,0),a),s!=null)for(p=s.length;p--;)s[p]!=null&&Eu(s[p]);a||("value"in h&&(p=h.value)!==void 0&&(p!==t.value||f==="progress"&&!p||f==="option"&&p!==d.value)&&ri(t,"value",p,d.value,!1),"checked"in h&&(p=h.checked)!==void 0&&p!==t.checked&&ri(t,"checked",p,d.checked,!1))}return t}function Au(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){D.__e(r,n)}}function Nu(t,e,n){var r,i;if(D.unmount&&D.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Au(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){D.__e(s,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&Nu(r[i],e,n||typeof t.type!="function");n||t.__e==null||Eu(t.__e),t.__=t.__e=t.__d=void 0}function Mp(t,e,n){return this.constructor(t,n)}function nn(t,e,n){var r,i,s;D.__&&D.__(t,e),i=(r=typeof n=="function")?null:n&&n.__k||e.__k,s=[],Ao(e,t=(!r&&n||e).__k=Ue(We,null,[t]),i||ti,ti,e.ownerSVGElement!==void 0,!r&&n?[n]:i?null:e.firstChild?ur.call(e.childNodes):null,s,!r&&n?n:i?i.__e:e.firstChild,r),Pu(s,t)}function Ou(t,e){nn(t,e,Ou)}function ku(t,e,n){var r,i,s,o,a=Xe({},t.props);for(s in t.type&&t.type.defaultProps&&(o=t.type.defaultProps),e)s=="key"?r=e[s]:s=="ref"?i=e[s]:a[s]=e[s]===void 0&&o!==void 0?o[s]:e[s];return arguments.length>2&&(a.children=arguments.length>3?ur.call(arguments,2):n),Ln(t.type,a,r||t.key,i||t.ref,null)}function Lp(t,e){var n={__c:e="__cC"+wu++,__:t,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,s;return this.getChildContext||(i=[],(s={})[e]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&i.some(function(a){a.__e=!0,eo(a)})},this.sub=function(o){i.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){i.splice(i.indexOf(o),1),a&&a.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}ur=Cu.slice,D={__e:function(t,e,n,r){for(var i,s,o;e=e.__;)if((i=e.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(t)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),o=i.__d),o)return i.__E=i}catch(a){t=a}throw t}},bu=0,Ge.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Xe({},this.state),typeof t=="function"&&(t=t(Xe({},n),this.props)),t&&Xe(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),eo(this))},Ge.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),eo(this))},Ge.prototype.render=We,Ot=[],Iu=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Zs=function(t,e){return t.__v.__b-e.__v.__b},ni.__r=0,wu=0;let Ur;const Fp=new Uint8Array(16);function Bp(){if(!Ur&&(Ur=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ur))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ur(Fp)}const ue=[];for(let t=0;t<256;++t)ue.push((t+256).toString(16).slice(1));function Up(t,e=0){return(ue[t[e+0]]+ue[t[e+1]]+ue[t[e+2]]+ue[t[e+3]]+"-"+ue[t[e+4]]+ue[t[e+5]]+"-"+ue[t[e+6]]+ue[t[e+7]]+"-"+ue[t[e+8]]+ue[t[e+9]]+"-"+ue[t[e+10]]+ue[t[e+11]]+ue[t[e+12]]+ue[t[e+13]]+ue[t[e+14]]+ue[t[e+15]]).toLowerCase()}const Wp=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),al={randomUUID:Wp};function Je(t,e,n){if(al.randomUUID&&!e&&!t)return al.randomUUID();t=t||{};const r=t.random||(t.rng||Bp)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return Up(r)}var It,Q,Es,ll,rn=0,Mu=[],zr=[],cl=D.__b,ul=D.__r,dl=D.diffed,hl=D.__c,fl=D.unmount;function pn(t,e){D.__h&&D.__h(Q,t,rn||e),rn=0;var n=Q.__H||(Q.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:zr}),n.__[t]}function pe(t){return rn=1,No(Lu,t)}function No(t,e,n){var r=pn(It++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):Lu(void 0,e),function(a){var l=r.__N?r.__N[0]:r.__[0],c=r.t(l,a);l!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=Q,!Q.u)){var i=function(a,l,c){if(!r.__c.__H)return!0;var u=r.__c.__H.__.filter(function(h){return h.__c});if(u.every(function(h){return!h.__N}))return!s||s.call(this,a,l,c);var d=!1;return u.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(d=!0)}}),!(!d&&r.__c.props===a)&&(!s||s.call(this,a,l,c))};Q.u=!0;var s=Q.shouldComponentUpdate,o=Q.componentWillUpdate;Q.componentWillUpdate=function(a,l,c){if(this.__e){var u=s;s=void 0,i(a,l,c),s=u}o&&o.call(this,a,l,c)},Q.shouldComponentUpdate=i}return r.__N||r.__}function _e(t,e){var n=pn(It++,3);!D.__s&&Oo(n.__H,e)&&(n.__=t,n.i=e,Q.__H.__h.push(n))}function gn(t,e){var n=pn(It++,4);!D.__s&&Oo(n.__H,e)&&(n.__=t,n.i=e,Q.__h.push(n))}function $(t){return rn=5,Se(function(){return{current:t}},[])}function $p(t,e,n){rn=6,gn(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function Se(t,e){var n=pn(It++,7);return Oo(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function Hp(t,e){return rn=8,Se(function(){return t},e)}function Bi(t){var e=Q.context[t.__c],n=pn(It++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(Q)),e.props.value):t.__}function Gp(t,e){D.useDebugValue&&D.useDebugValue(e?e(t):t)}function Vp(){var t=pn(It++,11);if(!t.__){for(var e=Q.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function qp(){for(var t;t=Mu.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Kr),t.__H.__h.forEach(to),t.__H.__h=[]}catch(e){t.__H.__h=[],D.__e(e,t.__v)}}D.__b=function(t){Q=null,cl&&cl(t)},D.__r=function(t){ul&&ul(t),It=0;var e=(Q=t.__c).__H;e&&(Es===Q?(e.__h=[],Q.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=zr,n.__N=n.i=void 0})):(e.__h.forEach(Kr),e.__h.forEach(to),e.__h=[],It=0)),Es=Q},D.diffed=function(t){dl&&dl(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Mu.push(e)!==1&&ll===D.requestAnimationFrame||((ll=D.requestAnimationFrame)||jp)(qp)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==zr&&(n.__=n.__V),n.i=void 0,n.__V=zr})),Es=Q=null},D.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Kr),n.__h=n.__h.filter(function(r){return!r.__||to(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],D.__e(r,n.__v)}}),hl&&hl(t,e)},D.unmount=function(t){fl&&fl(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Kr(r)}catch(i){e=i}}),n.__H=void 0,e&&D.__e(e,n.__v))};var pl=typeof requestAnimationFrame=="function";function jp(t){var e,n=function(){clearTimeout(r),pl&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);pl&&(e=requestAnimationFrame(n))}function Kr(t){var e=Q,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),Q=e}function to(t){var e=Q;t.__c=t.__(),Q=e}function Oo(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function Lu(t,e){return typeof e=="function"?e(t):e}function Fu(t,e){for(var n in e)t[n]=e[n];return t}function no(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function Ss(t,e){return t===e&&(t!==0||1/t==1/e)||t!=t&&e!=e}function ro(t){this.props=t}function zp(t,e){function n(i){var s=this.props.ref,o=s==i.ref;return!o&&s&&(s.call?s(null):s.current=null),e?!e(this.props,i)||!o:no(this.props,i)}function r(i){return this.shouldComponentUpdate=n,Ue(t,i)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(ro.prototype=new Ge).isPureReactComponent=!0,ro.prototype.shouldComponentUpdate=function(t,e){return no(this.props,t)||no(this.state,e)};var gl=D.__b;D.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),gl&&gl(t)};var Kp=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Yp(t){function e(n){var r=Fu({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=Kp,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var vl=function(t,e){return t==null?null:Ve(Ve(t).map(e))},Jp={map:vl,forEach:vl,count:function(t){return t?Ve(t).length:0},only:function(t){var e=Ve(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:Ve},Qp=D.__e;D.__e=function(t,e,n,r){if(t.then){for(var i,s=e;s=s.__;)if((i=s.__c)&&i.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),i.__c(t,e)}Qp(t,e,n,r)};var ml=D.unmount;function Bu(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=Fu({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return Bu(r,e,n)})),t}function Uu(t,e,n){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return Uu(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=n)),t}function Yr(){this.__u=0,this.t=null,this.__b=null}function Wu(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function Xp(t){var e,n,r;function i(s){if(e||(e=t()).then(function(o){n=o.default||o},function(o){r=o}),r)throw r;if(!n)throw e;return Ue(n,s)}return i.displayName="Lazy",i.__f=!0,i}function Mn(){this.u=null,this.o=null}D.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),ml&&ml(t)},(Yr.prototype=new Ge).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=Wu(r.__v),s=!1,o=function(){s||(s=!0,n.__R=null,i?i(a):a())};n.__R=o;var a=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=Uu(c,c.__c.__P,c.__c.__O)}var u;for(r.setState({__a:r.__b=null});u=r.t.pop();)u.forceUpdate()}},l=e.__h===!0;r.__u++||l||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(o,o)},Yr.prototype.componentWillUnmount=function(){this.t=[]},Yr.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Bu(this.__b,n,r.__O=r.__P)}this.__b=null}var i=e.__a&&Ue(We,null,t.fallback);return i&&(i.__h=null),[Ue(We,null,e.__a?null:t.children),i]};var _l=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function Zp(t){return this.getChildContext=function(){return t.context},t.children}function eg(t){var e=this,n=t.i;e.componentWillUnmount=function(){nn(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),t.__v?(e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),nn(Ue(Zp,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function tg(t,e){var n=Ue(eg,{__v:t,i:e});return n.containerInfo=e,n}(Mn.prototype=new Ge).__a=function(t){var e=this,n=Wu(e.__v),r=e.o.get(t);return r[0]++,function(i){var s=function(){e.props.revealOrder?(r.push(i),_l(e,t,r)):i()};n?n(s):s()}},Mn.prototype.render=function(t){this.u=null,this.o=new Map;var e=Ve(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},Mn.prototype.componentDidUpdate=Mn.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){_l(t,n,e)})};var $u=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ng=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,rg=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ig=/[A-Z0-9]/g,sg=typeof document<"u",og=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function ag(t,e,n){return e.__k==null&&(e.textContent=""),nn(t,e),typeof n=="function"&&n(),t?t.__c:null}function lg(t,e,n){return Ou(t,e),typeof n=="function"&&n(),t?t.__c:null}Ge.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(Ge.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var yl=D.event;function cg(){}function ug(){return this.cancelBubble}function dg(){return this.defaultPrevented}D.event=function(t){return yl&&(t=yl(t)),t.persist=cg,t.isPropagationStopped=ug,t.isDefaultPrevented=dg,t.nativeEvent=t};var ko,hg={enumerable:!1,configurable:!0,get:function(){return this.class}},bl=D.vnode;D.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,i={};for(var s in n){var o=n[s];if(!(s==="value"&&"defaultValue"in n&&o==null||sg&&s==="children"&&r==="noscript"||s==="class"||s==="className")){var a=s.toLowerCase();s==="defaultValue"&&"value"in n&&n.value==null?s="value":s==="download"&&o===!0?o="":a==="ondoubleclick"?s="ondblclick":a!=="onchange"||r!=="input"&&r!=="textarea"||og(n.type)?a==="onfocus"?s="onfocusin":a==="onblur"?s="onfocusout":rg.test(s)?s=a:r.indexOf("-")===-1&&ng.test(s)?s=s.replace(ig,"-$&").toLowerCase():o===null&&(o=void 0):a=s="oninput",a==="oninput"&&i[s=a]&&(s="oninputCapture"),i[s]=o}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Ve(n.children).forEach(function(l){l.props.selected=i.value.indexOf(l.props.value)!=-1})),r=="select"&&i.defaultValue!=null&&(i.value=Ve(n.children).forEach(function(l){l.props.selected=i.multiple?i.defaultValue.indexOf(l.props.value)!=-1:i.defaultValue==l.props.value})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",hg)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),e.props=i}(t),t.$$typeof=$u,bl&&bl(t)};var Il=D.__r;D.__r=function(t){Il&&Il(t),ko=t.__c};var wl=D.diffed;D.diffed=function(t){wl&&wl(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),ko=null};var fg={ReactCurrentDispatcher:{current:{readContext:function(t){return ko.__n[t.__c].props.value}}}};function pg(t){return Ue.bind(null,t)}function Hu(t){return!!t&&t.$$typeof===$u}function gg(t){return Hu(t)?ku.apply(null,arguments):t}function vg(t){return!!t.__k&&(nn(null,t),!0)}function mg(t){return t&&(t.base||t.nodeType===1&&t)||null}var Gu=function(t,e){return t(e)},_g=function(t,e){return t(e)},yg=We;function Vu(t){t()}function bg(t){return t}function Ig(){return[!1,Vu]}var wg=gn;function Cg(t,e){var n=e(),r=pe({h:{__:n,v:e}}),i=r[0].h,s=r[1];return gn(function(){i.__=n,i.v=e,Ss(i.__,e())||s({h:i})},[t,n,e]),_e(function(){return Ss(i.__,i.v())||s({h:i}),t(function(){Ss(i.__,i.v())||s({h:i})})},[t]),n}var Y={useState:pe,useId:Vp,useReducer:No,useEffect:_e,useLayoutEffect:gn,useInsertionEffect:wg,useTransition:Ig,useDeferredValue:bg,useSyncExternalStore:Cg,startTransition:Vu,useRef:$,useImperativeHandle:$p,useMemo:Se,useCallback:Hp,useContext:Bi,useDebugValue:Gp,version:"17.0.2",Children:Jp,render:ag,hydrate:lg,unmountComponentAtNode:vg,createPortal:tg,createElement:Ue,createContext:Lp,createFactory:pg,cloneElement:gg,createRef:Np,Fragment:We,isValidElement:Hu,findDOMNode:mg,Component:Ge,PureComponent:ro,memo:zp,forwardRef:Yp,flushSync:_g,unstable_batchedUpdates:Gu,StrictMode:yg,Suspense:Yr,SuspenseList:Mn,lazy:Xp,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:fg};function io(t,e){return io=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},io(t,e)}function qu(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,io(t,e)}function A(){return A=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},A.apply(this,arguments)}function jn(t){"@babel/helpers - typeof";return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jn(t)}function Eg(t,e){if(jn(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(jn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Sg(t){var e=Eg(t,"string");return jn(e)==="symbol"?e:String(e)}function Tg(t,e,n){return e=Sg(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Cl(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function El(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cl(Object(n),!0).forEach(function(r){Tg(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Cl(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ye(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var Sl=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Ts=function(){return Math.random().toString(36).substring(7).split("").join(".")},Tl={INIT:"@@redux/INIT"+Ts(),REPLACE:"@@redux/REPLACE"+Ts(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ts()}};function Dg(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function ju(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ye(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ye(1));return n(ju)(t,e)}if(typeof t!="function")throw new Error(ye(2));var i=t,s=e,o=[],a=o,l=!1;function c(){a===o&&(a=o.slice())}function u(){if(l)throw new Error(ye(3));return s}function d(g){if(typeof g!="function")throw new Error(ye(4));if(l)throw new Error(ye(5));var v=!0;return c(),a.push(g),function(){if(v){if(l)throw new Error(ye(6));v=!1,c();var _=a.indexOf(g);a.splice(_,1),o=null}}}function h(g){if(!Dg(g))throw new Error(ye(7));if(typeof g.type>"u")throw new Error(ye(8));if(l)throw new Error(ye(9));try{l=!0,s=i(s,g)}finally{l=!1}for(var v=o=a,m=0;m<v.length;m++){var _=v[m];_()}return g}function f(g){if(typeof g!="function")throw new Error(ye(10));i=g,h({type:Tl.REPLACE})}function p(){var g,v=d;return g={subscribe:function(_){if(typeof _!="object"||_===null)throw new Error(ye(11));function I(){_.next&&_.next(u())}I();var b=v(I);return{unsubscribe:b}}},g[Sl]=function(){return this},g}return h({type:Tl.INIT}),r={dispatch:h,subscribe:d,getState:u,replaceReducer:f},r[Sl]=p,r}function Dl(t,e){return function(){return e(t.apply(this,arguments))}}function xl(t,e){if(typeof t=="function")return Dl(t,e);if(typeof t!="object"||t===null)throw new Error(ye(16));var n={};for(var r in t){var i=t[r];typeof i=="function"&&(n[r]=Dl(i,e))}return n}function zu(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function xg(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(ye(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=zu.apply(void 0,a)(i.dispatch),El(El({},i),{},{dispatch:s})}}}function Rg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ku=Y.createContext(null);function Pg(t){t()}var Yu=Pg,Ag=function(e){return Yu=e},Ng=function(){return Yu};function Og(){var t=Ng(),e=null,n=null;return{clear:function(){e=null,n=null},notify:function(){t(function(){for(var i=e;i;)i.callback(),i=i.next})},get:function(){for(var i=[],s=e;s;)i.push(s),s=s.next;return i},subscribe:function(i){var s=!0,o=n={callback:i,next:null,prev:n};return o.prev?o.prev.next=o:e=o,function(){!s||e===null||(s=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var Rl={notify:function(){},get:function(){return[]}};function Ju(t,e){var n,r=Rl;function i(d){return l(),r.subscribe(d)}function s(){r.notify()}function o(){u.onStateChange&&u.onStateChange()}function a(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=Og())}function c(){n&&(n(),n=void 0,r.clear(),r=Rl)}var u={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:c,getListeners:function(){return r}};return u}var Qu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?gn:_e;function kg(t){var e=t.store,n=t.context,r=t.children,i=Se(function(){var a=Ju(e);return{store:e,subscription:a}},[e]),s=Se(function(){return e.getState()},[e]);Qu(function(){var a=i.subscription;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==e.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[i,s]);var o=n||Ku;return Y.createElement(o.Provider,{value:i},r)}function ii(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Xu={exports:{}},H={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae=typeof Symbol=="function"&&Symbol.for,Mo=ae?Symbol.for("react.element"):60103,Lo=ae?Symbol.for("react.portal"):60106,Ui=ae?Symbol.for("react.fragment"):60107,Wi=ae?Symbol.for("react.strict_mode"):60108,$i=ae?Symbol.for("react.profiler"):60114,Hi=ae?Symbol.for("react.provider"):60109,Gi=ae?Symbol.for("react.context"):60110,Fo=ae?Symbol.for("react.async_mode"):60111,Vi=ae?Symbol.for("react.concurrent_mode"):60111,qi=ae?Symbol.for("react.forward_ref"):60112,ji=ae?Symbol.for("react.suspense"):60113,Mg=ae?Symbol.for("react.suspense_list"):60120,zi=ae?Symbol.for("react.memo"):60115,Ki=ae?Symbol.for("react.lazy"):60116,Lg=ae?Symbol.for("react.block"):60121,Fg=ae?Symbol.for("react.fundamental"):60117,Bg=ae?Symbol.for("react.responder"):60118,Ug=ae?Symbol.for("react.scope"):60119;function Re(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Mo:switch(t=t.type,t){case Fo:case Vi:case Ui:case $i:case Wi:case ji:return t;default:switch(t=t&&t.$$typeof,t){case Gi:case qi:case Ki:case zi:case Hi:return t;default:return e}}case Lo:return e}}}function Zu(t){return Re(t)===Vi}H.AsyncMode=Fo;H.ConcurrentMode=Vi;H.ContextConsumer=Gi;H.ContextProvider=Hi;H.Element=Mo;H.ForwardRef=qi;H.Fragment=Ui;H.Lazy=Ki;H.Memo=zi;H.Portal=Lo;H.Profiler=$i;H.StrictMode=Wi;H.Suspense=ji;H.isAsyncMode=function(t){return Zu(t)||Re(t)===Fo};H.isConcurrentMode=Zu;H.isContextConsumer=function(t){return Re(t)===Gi};H.isContextProvider=function(t){return Re(t)===Hi};H.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mo};H.isForwardRef=function(t){return Re(t)===qi};H.isFragment=function(t){return Re(t)===Ui};H.isLazy=function(t){return Re(t)===Ki};H.isMemo=function(t){return Re(t)===zi};H.isPortal=function(t){return Re(t)===Lo};H.isProfiler=function(t){return Re(t)===$i};H.isStrictMode=function(t){return Re(t)===Wi};H.isSuspense=function(t){return Re(t)===ji};H.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ui||t===Vi||t===$i||t===Wi||t===ji||t===Mg||typeof t=="object"&&t!==null&&(t.$$typeof===Ki||t.$$typeof===zi||t.$$typeof===Hi||t.$$typeof===Gi||t.$$typeof===qi||t.$$typeof===Fg||t.$$typeof===Bg||t.$$typeof===Ug||t.$$typeof===Lg)};H.typeOf=Re;Xu.exports=H;var Wg=Xu.exports,Bo=Wg,$g={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Hg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Gg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ed={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Uo={};Uo[Bo.ForwardRef]=Gg;Uo[Bo.Memo]=ed;function Pl(t){return Bo.isMemo(t)?ed:Uo[t.$$typeof]||$g}var Vg=Object.defineProperty,qg=Object.getOwnPropertyNames,Al=Object.getOwnPropertySymbols,jg=Object.getOwnPropertyDescriptor,zg=Object.getPrototypeOf,Nl=Object.prototype;function td(t,e,n){if(typeof e!="string"){if(Nl){var r=zg(e);r&&r!==Nl&&td(t,r,n)}var i=qg(e);Al&&(i=i.concat(Al(e)));for(var s=Pl(t),o=Pl(e),a=0;a<i.length;++a){var l=i[a];if(!Hg[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var c=jg(e,l);try{Vg(t,l,c)}catch{}}}}return t}var Kg=td;const Ol=Rg(Kg);var nd={exports:{}},z={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yi=60103,Ji=60106,dr=60107,hr=60108,fr=60114,pr=60109,gr=60110,vr=60112,mr=60113,Wo=60120,_r=60115,yr=60116,rd=60121,id=60122,sd=60117,od=60129,ad=60131;if(typeof Symbol=="function"&&Symbol.for){var ce=Symbol.for;Yi=ce("react.element"),Ji=ce("react.portal"),dr=ce("react.fragment"),hr=ce("react.strict_mode"),fr=ce("react.profiler"),pr=ce("react.provider"),gr=ce("react.context"),vr=ce("react.forward_ref"),mr=ce("react.suspense"),Wo=ce("react.suspense_list"),_r=ce("react.memo"),yr=ce("react.lazy"),rd=ce("react.block"),id=ce("react.server.block"),sd=ce("react.fundamental"),od=ce("react.debug_trace_mode"),ad=ce("react.legacy_hidden")}function $e(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Yi:switch(t=t.type,t){case dr:case fr:case hr:case mr:case Wo:return t;default:switch(t=t&&t.$$typeof,t){case gr:case vr:case yr:case _r:case pr:return t;default:return e}}case Ji:return e}}}var Yg=pr,Jg=Yi,Qg=vr,Xg=dr,Zg=yr,ev=_r,tv=Ji,nv=fr,rv=hr,iv=mr;z.ContextConsumer=gr;z.ContextProvider=Yg;z.Element=Jg;z.ForwardRef=Qg;z.Fragment=Xg;z.Lazy=Zg;z.Memo=ev;z.Portal=tv;z.Profiler=nv;z.StrictMode=rv;z.Suspense=iv;z.isAsyncMode=function(){return!1};z.isConcurrentMode=function(){return!1};z.isContextConsumer=function(t){return $e(t)===gr};z.isContextProvider=function(t){return $e(t)===pr};z.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yi};z.isForwardRef=function(t){return $e(t)===vr};z.isFragment=function(t){return $e(t)===dr};z.isLazy=function(t){return $e(t)===yr};z.isMemo=function(t){return $e(t)===_r};z.isPortal=function(t){return $e(t)===Ji};z.isProfiler=function(t){return $e(t)===fr};z.isStrictMode=function(t){return $e(t)===hr};z.isSuspense=function(t){return $e(t)===mr};z.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===dr||t===fr||t===od||t===hr||t===mr||t===Wo||t===ad||typeof t=="object"&&t!==null&&(t.$$typeof===yr||t.$$typeof===_r||t.$$typeof===pr||t.$$typeof===gr||t.$$typeof===vr||t.$$typeof===sd||t.$$typeof===rd||t[0]===id)};z.typeOf=$e;nd.exports=z;var sv=nd.exports,ov=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],av=["reactReduxForwardedRef"],lv=[],cv=[null,null];function uv(t,e){var n=t[1];return[e.payload,n+1]}function kl(t,e,n){Qu(function(){return t.apply(void 0,e)},n)}function dv(t,e,n,r,i,s,o){t.current=r,e.current=i,n.current=!1,s.current&&(s.current=null,o())}function hv(t,e,n,r,i,s,o,a,l,c){if(t){var u=!1,d=null,h=function(){if(!u){var g=e.getState(),v,m;try{v=r(g,i.current)}catch(_){m=_,d=_}m||(d=null),v===s.current?o.current||l():(s.current=v,a.current=v,o.current=!0,c({type:"STORE_UPDATED",payload:{error:m}}))}};n.onStateChange=h,n.trySubscribe(),h();var f=function(){if(u=!0,n.tryUnsubscribe(),n.onStateChange=null,d)throw d};return f}}var fv=function(){return[null,0]};function pv(t,e){e===void 0&&(e={});var n=e,r=n.getDisplayName,i=r===void 0?function(I){return"ConnectAdvanced("+I+")"}:r,s=n.methodName,o=s===void 0?"connectAdvanced":s,a=n.renderCountProp,l=a===void 0?void 0:a,c=n.shouldHandleStateChanges,u=c===void 0?!0:c,d=n.storeKey,h=d===void 0?"store":d;n.withRef;var f=n.forwardRef,p=f===void 0?!1:f,g=n.context,v=g===void 0?Ku:g,m=ii(n,ov),_=v;return function(b){var P=b.displayName||b.name||"Component",y=i(P),E=A({},m,{getDisplayName:i,methodName:o,renderCountProp:l,shouldHandleStateChanges:u,storeKey:h,displayName:y,wrappedComponentName:P,WrappedComponent:b}),S=m.pure;function x(G){return t(G.dispatch,E)}var M=S?Se:function(G){return G()};function k(G){var le=Se(function(){var Dn=G.reactReduxForwardedRef,Cs=ii(G,av);return[G.context,Dn,Cs]},[G]),he=le[0],at=le[1],He=le[2],Ye=Se(function(){return he&&he.Consumer&&sv.isContextConsumer(Y.createElement(he.Consumer,null))?he:_},[he,_]),Ce=Bi(Ye),xt=!!G.store&&!!G.store.getState&&!!G.store.dispatch;Ce&&Ce.store;var Ee=xt?G.store:Ce.store,Tn=Se(function(){return x(Ee)},[Ee]),kr=Se(function(){if(!u)return cv;var Dn=Ju(Ee,xt?null:Ce.subscription),Cs=Dn.notifyNestedSubs.bind(Dn);return[Dn,Cs]},[Ee,xt,Ce]),lt=kr[0],Mr=kr[1],Lr=Se(function(){return xt?Ce:A({},Ce,{subscription:lt})},[xt,Ce,lt]),Fr=No(uv,lv,fv),_s=Fr[0],jt=_s[0],ys=Fr[1];if(jt&&jt.error)throw jt.error;var tl=$(),bs=$(He),Br=$(),nl=$(!1),Is=M(function(){return Br.current&&He===bs.current?Br.current:Tn(Ee.getState(),He)},[Ee,jt,He]);kl(dv,[bs,tl,nl,He,Is,Br,Mr]),kl(hv,[u,Ee,lt,Tn,bs,tl,nl,Br,Mr,ys],[Ee,lt,Tn]);var ws=Se(function(){return Y.createElement(b,A({},Is,{ref:at}))},[at,b,Is]),Pp=Se(function(){return u?Y.createElement(Ye.Provider,{value:Lr},ws):ws},[Ye,ws,Lr]);return Pp}var q=S?Y.memo(k):k;if(q.WrappedComponent=b,q.displayName=k.displayName=y,p){var X=Y.forwardRef(function(le,he){return Y.createElement(q,A({},le,{reactReduxForwardedRef:he}))});return X.displayName=y,X.WrappedComponent=b,Ol(X,b)}return Ol(q,b)}}function Ml(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function Ds(t,e){if(Ml(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var i=0;i<n.length;i++)if(!Object.prototype.hasOwnProperty.call(e,n[i])||!Ml(t[n[i]],e[n[i]]))return!1;return!0}function gv(t,e){var n={},r=function(o){var a=t[o];typeof a=="function"&&(n[o]=function(){return e(a.apply(void 0,arguments))})};for(var i in t)r(i);return n}function $o(t){return function(n,r){var i=t(n,r);function s(){return i}return s.dependsOnOwnProps=!1,s}}function Ll(t){return t.dependsOnOwnProps!==null&&t.dependsOnOwnProps!==void 0?!!t.dependsOnOwnProps:t.length!==1}function ld(t,e){return function(r,i){i.displayName;var s=function(a,l){return s.dependsOnOwnProps?s.mapToProps(a,l):s.mapToProps(a)};return s.dependsOnOwnProps=!0,s.mapToProps=function(a,l){s.mapToProps=t,s.dependsOnOwnProps=Ll(t);var c=s(a,l);return typeof c=="function"&&(s.mapToProps=c,s.dependsOnOwnProps=Ll(c),c=s(a,l)),c},s}}function vv(t){return typeof t=="function"?ld(t):void 0}function mv(t){return t?void 0:$o(function(e){return{dispatch:e}})}function _v(t){return t&&typeof t=="object"?$o(function(e){return gv(t,e)}):void 0}const yv=[vv,mv,_v];function bv(t){return typeof t=="function"?ld(t):void 0}function Iv(t){return t?void 0:$o(function(){return{}})}const wv=[bv,Iv];function Cv(t,e,n){return A({},n,t,e)}function Ev(t){return function(n,r){r.displayName;var i=r.pure,s=r.areMergedPropsEqual,o=!1,a;return function(c,u,d){var h=t(c,u,d);return o?(!i||!s(h,a))&&(a=h):(o=!0,a=h),a}}}function Sv(t){return typeof t=="function"?Ev(t):void 0}function Tv(t){return t?void 0:function(){return Cv}}const Dv=[Sv,Tv];var xv=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function Rv(t,e,n,r){return function(s,o){return n(t(s,o),e(r,o),o)}}function Pv(t,e,n,r,i){var s=i.areStatesEqual,o=i.areOwnPropsEqual,a=i.areStatePropsEqual,l=!1,c,u,d,h,f;function p(I,b){return c=I,u=b,d=t(c,u),h=e(r,u),f=n(d,h,u),l=!0,f}function g(){return d=t(c,u),e.dependsOnOwnProps&&(h=e(r,u)),f=n(d,h,u),f}function v(){return t.dependsOnOwnProps&&(d=t(c,u)),e.dependsOnOwnProps&&(h=e(r,u)),f=n(d,h,u),f}function m(){var I=t(c,u),b=!a(I,d);return d=I,b&&(f=n(d,h,u)),f}function _(I,b){var P=!o(b,u),y=!s(I,c,b,u);return c=I,u=b,P&&y?g():P?v():y?m():f}return function(b,P){return l?_(b,P):p(b,P)}}function Av(t,e){var n=e.initMapStateToProps,r=e.initMapDispatchToProps,i=e.initMergeProps,s=ii(e,xv),o=n(t,s),a=r(t,s),l=i(t,s),c=s.pure?Pv:Rv;return c(o,a,l,t,s)}var Nv=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function xs(t,e,n){for(var r=e.length-1;r>=0;r--){var i=e[r](t);if(i)return i}return function(s,o){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+o.wrappedComponentName+".")}}function Ov(t,e){return t===e}function kv(t){var e=t===void 0?{}:t,n=e.connectHOC,r=n===void 0?pv:n,i=e.mapStateToPropsFactories,s=i===void 0?wv:i,o=e.mapDispatchToPropsFactories,a=o===void 0?yv:o,l=e.mergePropsFactories,c=l===void 0?Dv:l,u=e.selectorFactory,d=u===void 0?Av:u;return function(f,p,g,v){v===void 0&&(v={});var m=v,_=m.pure,I=_===void 0?!0:_,b=m.areStatesEqual,P=b===void 0?Ov:b,y=m.areOwnPropsEqual,E=y===void 0?Ds:y,S=m.areStatePropsEqual,x=S===void 0?Ds:S,M=m.areMergedPropsEqual,k=M===void 0?Ds:M,q=ii(m,Nv),X=xs(f,s,"mapStateToProps"),G=xs(p,a,"mapDispatchToProps"),le=xs(g,c,"mergeProps");return r(d,A({methodName:"connect",getDisplayName:function(at){return"Connect("+at+")"},shouldHandleStateChanges:!!f,initMapStateToProps:X,initMapDispatchToProps:G,initMergeProps:le,pure:I,areStatesEqual:P,areOwnPropsEqual:E,areStatePropsEqual:x,areMergedPropsEqual:k},q))}}const cd=kv();Ag(Gu);function Mv(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function ud(t,e){var n=pe(function(){return{inputs:e,result:t()}})[0],r=$(!0),i=$(n),s=r.current||!!(e&&i.current.inputs&&Mv(e,i.current.inputs)),o=s?i.current:{inputs:e,result:t()};return _e(function(){r.current=!1,i.current=o},[o]),o.result}function Lv(t,e){return ud(function(){return t},e)}var U=ud,R=Lv,Fv=!0,Rs="Invariant failed";function Bv(t,e){if(!t){if(Fv)throw new Error(Rs);var n=typeof e=="function"?e():e,r=n?"".concat(Rs,": ").concat(n):Rs;throw new Error(r)}}var Me=function(e){var n=e.top,r=e.right,i=e.bottom,s=e.left,o=r-s,a=i-n,l={top:n,right:r,bottom:i,left:s,width:o,height:a,x:s,y:n,center:{x:(r+s)/2,y:(i+n)/2}};return l},Ho=function(e,n){return{top:e.top-n.top,left:e.left-n.left,bottom:e.bottom+n.bottom,right:e.right+n.right}},Fl=function(e,n){return{top:e.top+n.top,left:e.left+n.left,bottom:e.bottom-n.bottom,right:e.right-n.right}},Uv=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},Ps={top:0,right:0,bottom:0,left:0},Go=function(e){var n=e.borderBox,r=e.margin,i=r===void 0?Ps:r,s=e.border,o=s===void 0?Ps:s,a=e.padding,l=a===void 0?Ps:a,c=Me(Ho(n,i)),u=Me(Fl(n,o)),d=Me(Fl(u,l));return{marginBox:c,borderBox:Me(n),paddingBox:u,contentBox:d,margin:i,border:o,padding:l}},Pe=function(e){var n=e.slice(0,-2),r=e.slice(-2);if(r!=="px")return 0;var i=Number(n);return isNaN(i)&&Bv(!1),i},Wv=function(){return{x:window.pageXOffset,y:window.pageYOffset}},si=function(e,n){var r=e.borderBox,i=e.border,s=e.margin,o=e.padding,a=Uv(r,n);return Go({borderBox:a,border:i,margin:s,padding:o})},oi=function(e,n){return n===void 0&&(n=Wv()),si(e,n)},dd=function(e,n){var r={top:Pe(n.marginTop),right:Pe(n.marginRight),bottom:Pe(n.marginBottom),left:Pe(n.marginLeft)},i={top:Pe(n.paddingTop),right:Pe(n.paddingRight),bottom:Pe(n.paddingBottom),left:Pe(n.paddingLeft)},s={top:Pe(n.borderTopWidth),right:Pe(n.borderRightWidth),bottom:Pe(n.borderBottomWidth),left:Pe(n.borderLeftWidth)};return Go({borderBox:e,margin:r,padding:i,border:s})},hd=function(e){var n=e.getBoundingClientRect(),r=window.getComputedStyle(e);return dd(n,r)},Bl=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function $v(t,e){return!!(t===e||Bl(t)&&Bl(e))}function Hv(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!$v(t[n],e[n]))return!1;return!0}function se(t,e){e===void 0&&(e=Hv);var n,r=[],i,s=!1;function o(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return s&&n===this&&e(a,r)||(i=t.apply(this,a),s=!0,n=this,r=a),i}return o}var Gv=function(e){var n=[],r=null,i=function(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];n=a,!r&&(r=requestAnimationFrame(function(){r=null,e.apply(void 0,n)}))};return i.cancel=function(){r&&(cancelAnimationFrame(r),r=null)},i};const zn=Gv;function fd(t,e){}fd.bind(null,"warn");fd.bind(null,"error");function ft(){}function Vv(t,e){return A({},t,{},e)}function Ae(t,e,n){var r=e.map(function(i){var s=Vv(n,i.options);return t.addEventListener(i.eventName,i.fn,s),function(){t.removeEventListener(i.eventName,i.fn,s)}});return function(){r.forEach(function(s){s()})}}var qv="Invariant failed";function ai(t){this.message=t}ai.prototype.toString=function(){return this.message};function w(t,e){if(!t)throw new ai(qv)}var jv=function(t){qu(e,t);function e(){for(var r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=t.call.apply(t,[this].concat(s))||this,r.callbacks=null,r.unbind=ft,r.onWindowError=function(a){var l=r.getCallbacks();l.isDragging()&&l.tryAbort();var c=a.error;c instanceof ai&&a.preventDefault()},r.getCallbacks=function(){if(!r.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return r.callbacks},r.setCallbacks=function(a){r.callbacks=a},r}var n=e.prototype;return n.componentDidMount=function(){this.unbind=Ae(window,[{eventName:"error",fn:this.onWindowError}])},n.componentDidCatch=function(i){if(i instanceof ai){this.setState({});return}throw i},n.componentWillUnmount=function(){this.unbind()},n.render=function(){return this.props.children(this.setCallbacks)},e}(Y.Component),zv=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,li=function(e){return e+1},Kv=function(e){return`
  You have lifted an item in position `+li(e.source.index)+`
`},pd=function(e,n){var r=e.droppableId===n.droppableId,i=li(e.index),s=li(n.index);return r?`
      You have moved the item from position `+i+`
      to position `+s+`
    `:`
    You have moved the item from position `+i+`
    in list `+e.droppableId+`
    to list `+n.droppableId+`
    in position `+s+`
  `},gd=function(e,n,r){var i=n.droppableId===r.droppableId;return i?`
      The item `+e+`
      has been combined with `+r.draggableId:`
      The item `+e+`
      in list `+n.droppableId+`
      has been combined with `+r.draggableId+`
      in list `+r.droppableId+`
    `},Yv=function(e){var n=e.destination;if(n)return pd(e.source,n);var r=e.combine;return r?gd(e.draggableId,e.source,r):"You are over an area that cannot be dropped on"},Ul=function(e){return`
  The item has returned to its starting position
  of `+li(e.index)+`
`},Jv=function(e){if(e.reason==="CANCEL")return`
      Movement cancelled.
      `+Ul(e.source)+`
    `;var n=e.destination,r=e.combine;return n?`
      You have dropped the item.
      `+pd(e.source,n)+`
    `:r?`
      You have dropped the item.
      `+gd(e.draggableId,e.source,r)+`
    `:`
    The item has been dropped while not over a drop area.
    `+Ul(e.source)+`
  `},Jr={dragHandleUsageInstructions:zv,onDragStart:Kv,onDragUpdate:Yv,onDragEnd:Jv},oe={x:0,y:0},de=function(e,n){return{x:e.x+n.x,y:e.y+n.y}},Te=function(e,n){return{x:e.x-n.x,y:e.y-n.y}},pt=function(e,n){return e.x===n.x&&e.y===n.y},vn=function(e){return{x:e.x!==0?-e.x:0,y:e.y!==0?-e.y:0}},Bt=function(e,n,r){var i;return r===void 0&&(r=0),i={},i[e]=n,i[e==="x"?"y":"x"]=r,i},Kn=function(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))},Wl=function(e,n){return Math.min.apply(Math,n.map(function(r){return Kn(e,r)}))},vd=function(e){return function(n){return{x:e(n.x),y:e(n.y)}}},Qv=function(t,e){var n=Me({top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom),left:Math.max(e.left,t.left)});return n.width<=0||n.height<=0?null:n},br=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},$l=function(e){return[{x:e.left,y:e.top},{x:e.right,y:e.top},{x:e.left,y:e.bottom},{x:e.right,y:e.bottom}]},Xv={top:0,right:0,bottom:0,left:0},Zv=function(e,n){return n?br(e,n.scroll.diff.displacement):e},em=function(e,n,r){if(r&&r.increasedBy){var i;return A({},e,(i={},i[n.end]=e[n.end]+r.increasedBy[n.line],i))}return e},tm=function(e,n){return n&&n.shouldClipSubject?Qv(n.pageMarginBox,e):Me(e)},sn=function(t){var e=t.page,n=t.withPlaceholder,r=t.axis,i=t.frame,s=Zv(e.marginBox,i),o=em(s,r,n),a=tm(o,i);return{page:e,withPlaceholder:n,active:a}},Vo=function(t,e){t.frame||w(!1);var n=t.frame,r=Te(e,n.scroll.initial),i=vn(r),s=A({},n,{scroll:{initial:n.scroll.initial,current:e,diff:{value:r,displacement:i},max:n.scroll.max}}),o=sn({page:t.subject.page,withPlaceholder:t.subject.withPlaceholder,axis:t.axis,frame:s}),a=A({},t,{frame:s,subject:o});return a};function ci(t){return Object.values?Object.values(t):Object.keys(t).map(function(e){return t[e]})}function qo(t,e){if(t.findIndex)return t.findIndex(e);for(var n=0;n<t.length;n++)if(e(t[n]))return n;return-1}function Tt(t,e){if(t.find)return t.find(e);var n=qo(t,e);if(n!==-1)return t[n]}function md(t){return Array.prototype.slice.call(t)}var _d=se(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),yd=se(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),Qi=se(function(t){return ci(t)}),nm=se(function(t){return ci(t)}),mn=se(function(t,e){var n=nm(e).filter(function(r){return t===r.descriptor.droppableId}).sort(function(r,i){return r.descriptor.index-i.descriptor.index});return n});function jo(t){return t.at&&t.at.type==="REORDER"?t.at.destination:null}function Xi(t){return t.at&&t.at.type==="COMBINE"?t.at.combine:null}var Zi=se(function(t,e){return e.filter(function(n){return n.descriptor.id!==t.descriptor.id})}),rm=function(t){var e=t.isMovingForward,n=t.draggable,r=t.destination,i=t.insideDestination,s=t.previousImpact;if(!r.isCombineEnabled)return null;var o=jo(s);if(!o)return null;function a(g){var v={type:"COMBINE",combine:{draggableId:g,droppableId:r.descriptor.id}};return A({},s,{at:v})}var l=s.displaced.all,c=l.length?l[0]:null;if(e)return c?a(c):null;var u=Zi(n,i);if(!c){if(!u.length)return null;var d=u[u.length-1];return a(d.descriptor.id)}var h=qo(u,function(g){return g.descriptor.id===c});h===-1&&w(!1);var f=h-1;if(f<0)return null;var p=u[f];return a(p.descriptor.id)},_n=function(t,e){return t.descriptor.droppableId===e.descriptor.id},bd={point:oe,value:0},Yn={invisible:{},visible:{},all:[]},im={displaced:Yn,displacedBy:bd,at:null},Ne=function(t,e){return function(n){return t<=n&&n<=e}},Id=function(t){var e=Ne(t.top,t.bottom),n=Ne(t.left,t.right);return function(r){var i=e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right);if(i)return!0;var s=e(r.top)||e(r.bottom),o=n(r.left)||n(r.right),a=s&&o;if(a)return!0;var l=r.top<t.top&&r.bottom>t.bottom,c=r.left<t.left&&r.right>t.right,u=l&&c;if(u)return!0;var d=l&&o||c&&s;return d}},sm=function(t){var e=Ne(t.top,t.bottom),n=Ne(t.left,t.right);return function(r){var i=e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right);return i}},zo={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},wd={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},om=function(t){return function(e){var n=Ne(e.top,e.bottom),r=Ne(e.left,e.right);return function(i){return t===zo?n(i.top)&&n(i.bottom):r(i.left)&&r(i.right)}}},am=function(e,n){var r=n.frame?n.frame.scroll.diff.displacement:oe;return br(e,r)},lm=function(e,n,r){return n.subject.active?r(n.subject.active)(e):!1},cm=function(e,n,r){return r(n)(e)},Ko=function(e){var n=e.target,r=e.destination,i=e.viewport,s=e.withDroppableDisplacement,o=e.isVisibleThroughFrameFn,a=s?am(n,r):n;return lm(a,r,o)&&cm(a,i,o)},um=function(e){return Ko(A({},e,{isVisibleThroughFrameFn:Id}))},Cd=function(e){return Ko(A({},e,{isVisibleThroughFrameFn:sm}))},dm=function(e){return Ko(A({},e,{isVisibleThroughFrameFn:om(e.destination.axis)}))},hm=function(e,n,r){if(typeof r=="boolean")return r;if(!n)return!0;var i=n.invisible,s=n.visible;if(i[e])return!1;var o=s[e];return o?o.shouldAnimate:!0};function fm(t,e){var n=t.page.marginBox,r={top:e.point.y,right:0,bottom:0,left:e.point.x};return Me(Ho(n,r))}function Jn(t){var e=t.afterDragging,n=t.destination,r=t.displacedBy,i=t.viewport,s=t.forceShouldAnimate,o=t.last;return e.reduce(function(l,c){var u=fm(c,r),d=c.descriptor.id;l.all.push(d);var h=um({target:u,destination:n,viewport:i,withDroppableDisplacement:!0});if(!h)return l.invisible[c.descriptor.id]=!0,l;var f=hm(d,o,s),p={draggableId:d,shouldAnimate:f};return l.visible[d]=p,l},{all:[],visible:{},invisible:{}})}function pm(t,e){if(!t.length)return 0;var n=t[t.length-1].descriptor.index;return e.inHomeList?n:n+1}function Hl(t){var e=t.insideDestination,n=t.inHomeList,r=t.displacedBy,i=t.destination,s=pm(e,{inHomeList:n});return{displaced:Yn,displacedBy:r,at:{type:"REORDER",destination:{droppableId:i.descriptor.id,index:s}}}}function ui(t){var e=t.draggable,n=t.insideDestination,r=t.destination,i=t.viewport,s=t.displacedBy,o=t.last,a=t.index,l=t.forceShouldAnimate,c=_n(e,r);if(a==null)return Hl({insideDestination:n,inHomeList:c,displacedBy:s,destination:r});var u=Tt(n,function(g){return g.descriptor.index===a});if(!u)return Hl({insideDestination:n,inHomeList:c,displacedBy:s,destination:r});var d=Zi(e,n),h=n.indexOf(u),f=d.slice(h),p=Jn({afterDragging:f,destination:r,displacedBy:s,last:o,viewport:i.frame,forceShouldAnimate:l});return{displaced:p,displacedBy:s,at:{type:"REORDER",destination:{droppableId:r.descriptor.id,index:a}}}}function wt(t,e){return!!e.effected[t]}var gm=function(t){var e=t.isMovingForward,n=t.destination,r=t.draggables,i=t.combine,s=t.afterCritical;if(!n.isCombineEnabled)return null;var o=i.draggableId,a=r[o],l=a.descriptor.index,c=wt(o,s);return c?e?l:l-1:e?l+1:l},vm=function(t){var e=t.isMovingForward,n=t.isInHomeList,r=t.insideDestination,i=t.location;if(!r.length)return null;var s=i.index,o=e?s+1:s-1,a=r[0].descriptor.index,l=r[r.length-1].descriptor.index,c=n?l:l+1;return o<a||o>c?null:o},mm=function(t){var e=t.isMovingForward,n=t.isInHomeList,r=t.draggable,i=t.draggables,s=t.destination,o=t.insideDestination,a=t.previousImpact,l=t.viewport,c=t.afterCritical,u=a.at;if(u||w(!1),u.type==="REORDER"){var d=vm({isMovingForward:e,isInHomeList:n,location:u.destination,insideDestination:o});return d==null?null:ui({draggable:r,insideDestination:o,destination:s,viewport:l,last:a.displaced,displacedBy:a.displacedBy,index:d})}var h=gm({isMovingForward:e,destination:s,displaced:a.displaced,draggables:i,combine:u.combine,afterCritical:c});return h==null?null:ui({draggable:r,insideDestination:o,destination:s,viewport:l,last:a.displaced,displacedBy:a.displacedBy,index:h})},_m=function(t){var e=t.displaced,n=t.afterCritical,r=t.combineWith,i=t.displacedBy,s=!!(e.visible[r]||e.invisible[r]);return wt(r,n)?s?oe:vn(i.point):s?i.point:oe},ym=function(t){var e=t.afterCritical,n=t.impact,r=t.draggables,i=Xi(n);i||w(!1);var s=i.draggableId,o=r[s].page.borderBox.center,a=_m({displaced:n.displaced,afterCritical:e,combineWith:s,displacedBy:n.displacedBy});return de(o,a)},Ed=function(e,n){return n.margin[e.start]+n.borderBox[e.size]/2},bm=function(e,n){return n.margin[e.end]+n.borderBox[e.size]/2},Yo=function(e,n,r){return n[e.crossAxisStart]+r.margin[e.crossAxisStart]+r.borderBox[e.crossAxisSize]/2},Gl=function(e){var n=e.axis,r=e.moveRelativeTo,i=e.isMoving;return Bt(n.line,r.marginBox[n.end]+Ed(n,i),Yo(n,r.marginBox,i))},Vl=function(e){var n=e.axis,r=e.moveRelativeTo,i=e.isMoving;return Bt(n.line,r.marginBox[n.start]-bm(n,i),Yo(n,r.marginBox,i))},Im=function(e){var n=e.axis,r=e.moveInto,i=e.isMoving;return Bt(n.line,r.contentBox[n.start]+Ed(n,i),Yo(n,r.contentBox,i))},wm=function(t){var e=t.impact,n=t.draggable,r=t.draggables,i=t.droppable,s=t.afterCritical,o=mn(i.descriptor.id,r),a=n.page,l=i.axis;if(!o.length)return Im({axis:l,moveInto:i.page,isMoving:a});var c=e.displaced,u=e.displacedBy,d=c.all[0];if(d){var h=r[d];if(wt(d,s))return Vl({axis:l,moveRelativeTo:h.page,isMoving:a});var f=si(h.page,u.point);return Vl({axis:l,moveRelativeTo:f,isMoving:a})}var p=o[o.length-1];if(p.descriptor.id===n.descriptor.id)return a.borderBox.center;if(wt(p.descriptor.id,s)){var g=si(p.page,vn(s.displacedBy.point));return Gl({axis:l,moveRelativeTo:g,isMoving:a})}return Gl({axis:l,moveRelativeTo:p.page,isMoving:a})},so=function(t,e){var n=t.frame;return n?de(e,n.scroll.diff.displacement):e},Cm=function(e){var n=e.impact,r=e.draggable,i=e.droppable,s=e.draggables,o=e.afterCritical,a=r.page.borderBox.center,l=n.at;return!i||!l?a:l.type==="REORDER"?wm({impact:n,draggable:r,draggables:s,droppable:i,afterCritical:o}):ym({impact:n,draggables:s,afterCritical:o})},es=function(t){var e=Cm(t),n=t.droppable,r=n?so(n,e):e;return r},Sd=function(t,e){var n=Te(e,t.scroll.initial),r=vn(n),i=Me({top:e.y,bottom:e.y+t.frame.height,left:e.x,right:e.x+t.frame.width}),s={frame:i,scroll:{initial:t.scroll.initial,max:t.scroll.max,current:e,diff:{value:n,displacement:r}}};return s};function ql(t,e){return t.map(function(n){return e[n]})}function Em(t,e){for(var n=0;n<e.length;n++){var r=e[n].visible[t];if(r)return r}return null}var Sm=function(t){var e=t.impact,n=t.viewport,r=t.destination,i=t.draggables,s=t.maxScrollChange,o=Sd(n,de(n.scroll.current,s)),a=r.frame?Vo(r,de(r.frame.scroll.current,s)):r,l=e.displaced,c=Jn({afterDragging:ql(l.all,i),destination:r,displacedBy:e.displacedBy,viewport:o.frame,last:l,forceShouldAnimate:!1}),u=Jn({afterDragging:ql(l.all,i),destination:a,displacedBy:e.displacedBy,viewport:n.frame,last:l,forceShouldAnimate:!1}),d={},h={},f=[l,c,u];l.all.forEach(function(g){var v=Em(g,f);if(v){h[g]=v;return}d[g]=!0});var p=A({},e,{displaced:{all:l.all,invisible:d,visible:h}});return p},Tm=function(t,e){return de(t.scroll.diff.displacement,e)},Jo=function(t){var e=t.pageBorderBoxCenter,n=t.draggable,r=t.viewport,i=Tm(r,e),s=Te(i,n.page.borderBox.center);return de(n.client.borderBox.center,s)},Td=function(t){var e=t.draggable,n=t.destination,r=t.newPageBorderBoxCenter,i=t.viewport,s=t.withDroppableDisplacement,o=t.onlyOnMainAxis,a=o===void 0?!1:o,l=Te(r,e.page.borderBox.center),c=br(e.page.borderBox,l),u={target:c,destination:n,withDroppableDisplacement:s,viewport:i};return a?dm(u):Cd(u)},Dm=function(t){var e=t.isMovingForward,n=t.draggable,r=t.destination,i=t.draggables,s=t.previousImpact,o=t.viewport,a=t.previousPageBorderBoxCenter,l=t.previousClientSelection,c=t.afterCritical;if(!r.isEnabled)return null;var u=mn(r.descriptor.id,i),d=_n(n,r),h=rm({isMovingForward:e,draggable:n,destination:r,insideDestination:u,previousImpact:s})||mm({isMovingForward:e,isInHomeList:d,draggable:n,draggables:i,destination:r,insideDestination:u,previousImpact:s,viewport:o,afterCritical:c});if(!h)return null;var f=es({impact:h,draggable:n,droppable:r,draggables:i,afterCritical:c}),p=Td({draggable:n,destination:r,newPageBorderBoxCenter:f,viewport:o.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(p){var g=Jo({pageBorderBoxCenter:f,draggable:n,viewport:o});return{clientSelection:g,impact:h,scrollJumpRequest:null}}var v=Te(f,a),m=Sm({impact:h,viewport:o,destination:r,draggables:i,maxScrollChange:v});return{clientSelection:l,impact:m,scrollJumpRequest:v}},ve=function(e){var n=e.subject.active;return n||w(!1),n},xm=function(t){var e=t.isMovingForward,n=t.pageBorderBoxCenter,r=t.source,i=t.droppables,s=t.viewport,o=r.subject.active;if(!o)return null;var a=r.axis,l=Ne(o[a.start],o[a.end]),c=Qi(i).filter(function(d){return d!==r}).filter(function(d){return d.isEnabled}).filter(function(d){return!!d.subject.active}).filter(function(d){return Id(s.frame)(ve(d))}).filter(function(d){var h=ve(d);return e?o[a.crossAxisEnd]<h[a.crossAxisEnd]:h[a.crossAxisStart]<o[a.crossAxisStart]}).filter(function(d){var h=ve(d),f=Ne(h[a.start],h[a.end]);return l(h[a.start])||l(h[a.end])||f(o[a.start])||f(o[a.end])}).sort(function(d,h){var f=ve(d)[a.crossAxisStart],p=ve(h)[a.crossAxisStart];return e?f-p:p-f}).filter(function(d,h,f){return ve(d)[a.crossAxisStart]===ve(f[0])[a.crossAxisStart]});if(!c.length)return null;if(c.length===1)return c[0];var u=c.filter(function(d){var h=Ne(ve(d)[a.start],ve(d)[a.end]);return h(n[a.line])});return u.length===1?u[0]:u.length>1?u.sort(function(d,h){return ve(d)[a.start]-ve(h)[a.start]})[0]:c.sort(function(d,h){var f=Wl(n,$l(ve(d))),p=Wl(n,$l(ve(h)));return f!==p?f-p:ve(d)[a.start]-ve(h)[a.start]})[0]},jl=function(e,n){var r=e.page.borderBox.center;return wt(e.descriptor.id,n)?Te(r,n.displacedBy.point):r},Rm=function(e,n){var r=e.page.borderBox;return wt(e.descriptor.id,n)?br(r,vn(n.displacedBy.point)):r},Pm=function(t){var e=t.pageBorderBoxCenter,n=t.viewport,r=t.destination,i=t.insideDestination,s=t.afterCritical,o=i.filter(function(a){return Cd({target:Rm(a,s),destination:r,viewport:n.frame,withDroppableDisplacement:!0})}).sort(function(a,l){var c=Kn(e,so(r,jl(a,s))),u=Kn(e,so(r,jl(l,s)));return c<u?-1:u<c?1:a.descriptor.index-l.descriptor.index});return o[0]||null},Ir=se(function(e,n){var r=n[e.line];return{value:r,point:Bt(e.line,r)}}),Am=function(e,n,r){var i=e.axis;if(e.descriptor.mode==="virtual")return Bt(i.line,n[i.line]);var s=e.subject.page.contentBox[i.size],o=mn(e.descriptor.id,r),a=o.reduce(function(u,d){return u+d.client.marginBox[i.size]},0),l=a+n[i.line],c=l-s;return c<=0?null:Bt(i.line,c)},Dd=function(e,n){return A({},e,{scroll:A({},e.scroll,{max:n})})},xd=function(e,n,r){var i=e.frame;_n(n,e)&&w(!1),e.subject.withPlaceholder&&w(!1);var s=Ir(e.axis,n.displaceBy).point,o=Am(e,s,r),a={placeholderSize:s,increasedBy:o,oldFrameMaxScroll:e.frame?e.frame.scroll.max:null};if(!i){var l=sn({page:e.subject.page,withPlaceholder:a,axis:e.axis,frame:e.frame});return A({},e,{subject:l})}var c=o?de(i.scroll.max,o):i.scroll.max,u=Dd(i,c),d=sn({page:e.subject.page,withPlaceholder:a,axis:e.axis,frame:u});return A({},e,{subject:d,frame:u})},Nm=function(e){var n=e.subject.withPlaceholder;n||w(!1);var r=e.frame;if(!r){var i=sn({page:e.subject.page,axis:e.axis,frame:null,withPlaceholder:null});return A({},e,{subject:i})}var s=n.oldFrameMaxScroll;s||w(!1);var o=Dd(r,s),a=sn({page:e.subject.page,axis:e.axis,frame:o,withPlaceholder:null});return A({},e,{subject:a,frame:o})},Om=function(t){var e=t.previousPageBorderBoxCenter,n=t.moveRelativeTo,r=t.insideDestination,i=t.draggable,s=t.draggables,o=t.destination,a=t.viewport,l=t.afterCritical;if(!n){if(r.length)return null;var c={displaced:Yn,displacedBy:bd,at:{type:"REORDER",destination:{droppableId:o.descriptor.id,index:0}}},u=es({impact:c,draggable:i,droppable:o,draggables:s,afterCritical:l}),d=_n(i,o)?o:xd(o,i,s),h=Td({draggable:i,destination:d,newPageBorderBoxCenter:u,viewport:a.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return h?c:null}var f=e[o.axis.line]<=n.page.borderBox.center[o.axis.line],p=function(){var v=n.descriptor.index;return n.descriptor.id===i.descriptor.id||f?v:v+1}(),g=Ir(o.axis,i.displaceBy);return ui({draggable:i,insideDestination:r,destination:o,viewport:a,displacedBy:g,last:Yn,index:p})},km=function(t){var e=t.isMovingForward,n=t.previousPageBorderBoxCenter,r=t.draggable,i=t.isOver,s=t.draggables,o=t.droppables,a=t.viewport,l=t.afterCritical,c=xm({isMovingForward:e,pageBorderBoxCenter:n,source:i,droppables:o,viewport:a});if(!c)return null;var u=mn(c.descriptor.id,s),d=Pm({pageBorderBoxCenter:n,viewport:a,destination:c,insideDestination:u,afterCritical:l}),h=Om({previousPageBorderBoxCenter:n,destination:c,draggable:r,draggables:s,moveRelativeTo:d,insideDestination:u,viewport:a,afterCritical:l});if(!h)return null;var f=es({impact:h,draggable:r,droppable:c,draggables:s,afterCritical:l}),p=Jo({pageBorderBoxCenter:f,draggable:r,viewport:a});return{clientSelection:p,impact:h,scrollJumpRequest:null}},De=function(t){var e=t.at;return e?e.type==="REORDER"?e.destination.droppableId:e.combine.droppableId:null},Mm=function(e,n){var r=De(e);return r?n[r]:null},Lm=function(t){var e=t.state,n=t.type,r=Mm(e.impact,e.dimensions.droppables),i=!!r,s=e.dimensions.droppables[e.critical.droppable.id],o=r||s,a=o.axis.direction,l=a==="vertical"&&(n==="MOVE_UP"||n==="MOVE_DOWN")||a==="horizontal"&&(n==="MOVE_LEFT"||n==="MOVE_RIGHT");if(l&&!i)return null;var c=n==="MOVE_DOWN"||n==="MOVE_RIGHT",u=e.dimensions.draggables[e.critical.draggable.id],d=e.current.page.borderBoxCenter,h=e.dimensions,f=h.draggables,p=h.droppables;return l?Dm({isMovingForward:c,previousPageBorderBoxCenter:d,draggable:u,destination:o,draggables:f,viewport:e.viewport,previousClientSelection:e.current.client.selection,previousImpact:e.impact,afterCritical:e.afterCritical}):km({isMovingForward:c,previousPageBorderBoxCenter:d,draggable:u,isOver:o,draggables:f,droppables:p,viewport:e.viewport,afterCritical:e.afterCritical})};function Pt(t){return t.phase==="DRAGGING"||t.phase==="COLLECTING"}function Rd(t){var e=Ne(t.top,t.bottom),n=Ne(t.left,t.right);return function(i){return e(i.y)&&n(i.x)}}function Fm(t,e){return t.left<e.right&&t.right>e.left&&t.top<e.bottom&&t.bottom>e.top}function Bm(t){var e=t.pageBorderBox,n=t.draggable,r=t.candidates,i=n.page.borderBox.center,s=r.map(function(o){var a=o.axis,l=Bt(o.axis.line,e.center[a.line],o.page.borderBox.center[a.crossAxisLine]);return{id:o.descriptor.id,distance:Kn(i,l)}}).sort(function(o,a){return a.distance-o.distance});return s[0]?s[0].id:null}function Um(t){var e=t.pageBorderBox,n=t.draggable,r=t.droppables,i=Qi(r).filter(function(s){if(!s.isEnabled)return!1;var o=s.subject.active;if(!o||!Fm(e,o))return!1;if(Rd(o)(e.center))return!0;var a=s.axis,l=o.center[a.crossAxisLine],c=e[a.crossAxisStart],u=e[a.crossAxisEnd],d=Ne(o[a.crossAxisStart],o[a.crossAxisEnd]),h=d(c),f=d(u);return!h&&!f?!0:h?c<l:u>l});return i.length?i.length===1?i[0].descriptor.id:Bm({pageBorderBox:e,draggable:n,candidates:i}):null}var Pd=function(e,n){return Me(br(e,n))},Wm=function(t,e){var n=t.frame;return n?Pd(e,n.scroll.diff.value):e};function Ad(t){var e=t.displaced,n=t.id;return!!(e.visible[n]||e.invisible[n])}function $m(t){var e=t.draggable,n=t.closest,r=t.inHomeList;return n?r&&n.descriptor.index>e.descriptor.index?n.descriptor.index-1:n.descriptor.index:null}var Hm=function(t){var e=t.pageBorderBoxWithDroppableScroll,n=t.draggable,r=t.destination,i=t.insideDestination,s=t.last,o=t.viewport,a=t.afterCritical,l=r.axis,c=Ir(r.axis,n.displaceBy),u=c.value,d=e[l.start],h=e[l.end],f=Zi(n,i),p=Tt(f,function(v){var m=v.descriptor.id,_=v.page.borderBox.center[l.line],I=wt(m,a),b=Ad({displaced:s,id:m});return I?b?h<=_:d<_-u:b?h<=_+u:d<_}),g=$m({draggable:n,closest:p,inHomeList:_n(n,r)});return ui({draggable:n,insideDestination:i,destination:r,viewport:o,last:s,displacedBy:c,index:g})},Gm=4,Vm=function(t){var e=t.draggable,n=t.pageBorderBoxWithDroppableScroll,r=t.previousImpact,i=t.destination,s=t.insideDestination,o=t.afterCritical;if(!i.isCombineEnabled)return null;var a=i.axis,l=Ir(i.axis,e.displaceBy),c=l.value,u=n[a.start],d=n[a.end],h=Zi(e,s),f=Tt(h,function(g){var v=g.descriptor.id,m=g.page.borderBox,_=m[a.size],I=_/Gm,b=wt(v,o),P=Ad({displaced:r.displaced,id:v});return b?P?d>m[a.start]+I&&d<m[a.end]-I:u>m[a.start]-c+I&&u<m[a.end]-c-I:P?d>m[a.start]+c+I&&d<m[a.end]+c-I:u>m[a.start]+I&&u<m[a.end]-I});if(!f)return null;var p={displacedBy:l,displaced:r.displaced,at:{type:"COMBINE",combine:{draggableId:f.descriptor.id,droppableId:i.descriptor.id}}};return p},Nd=function(t){var e=t.pageOffset,n=t.draggable,r=t.draggables,i=t.droppables,s=t.previousImpact,o=t.viewport,a=t.afterCritical,l=Pd(n.page.borderBox,e),c=Um({pageBorderBox:l,draggable:n,droppables:i});if(!c)return im;var u=i[c],d=mn(u.descriptor.id,r),h=Wm(u,l);return Vm({pageBorderBoxWithDroppableScroll:h,draggable:n,previousImpact:s,destination:u,insideDestination:d,afterCritical:a})||Hm({pageBorderBoxWithDroppableScroll:h,draggable:n,destination:u,insideDestination:d,last:s.displaced,viewport:o,afterCritical:a})},Qo=function(t,e){var n;return A({},t,(n={},n[e.descriptor.id]=e,n))},qm=function(e){var n=e.previousImpact,r=e.impact,i=e.droppables,s=De(n),o=De(r);if(!s||s===o)return i;var a=i[s];if(!a.subject.withPlaceholder)return i;var l=Nm(a);return Qo(i,l)},jm=function(t){var e=t.draggable,n=t.draggables,r=t.droppables,i=t.previousImpact,s=t.impact,o=qm({previousImpact:i,impact:s,droppables:r}),a=De(s);if(!a)return o;var l=r[a];if(_n(e,l)||l.subject.withPlaceholder)return o;var c=xd(l,e,n);return Qo(o,c)},Fn=function(t){var e=t.state,n=t.clientSelection,r=t.dimensions,i=t.viewport,s=t.impact,o=t.scrollJumpRequest,a=i||e.viewport,l=r||e.dimensions,c=n||e.current.client.selection,u=Te(c,e.initial.client.selection),d={offset:u,selection:c,borderBoxCenter:de(e.initial.client.borderBoxCenter,u)},h={selection:de(d.selection,a.scroll.current),borderBoxCenter:de(d.borderBoxCenter,a.scroll.current),offset:de(d.offset,a.scroll.diff.value)},f={client:d,page:h};if(e.phase==="COLLECTING")return A({phase:"COLLECTING"},e,{dimensions:l,viewport:a,current:f});var p=l.draggables[e.critical.draggable.id],g=s||Nd({pageOffset:h.offset,draggable:p,draggables:l.draggables,droppables:l.droppables,previousImpact:e.impact,viewport:a,afterCritical:e.afterCritical}),v=jm({draggable:p,impact:g,previousImpact:e.impact,draggables:l.draggables,droppables:l.droppables}),m=A({},e,{current:f,dimensions:{draggables:l.draggables,droppables:v},impact:g,viewport:a,scrollJumpRequest:o||null,forceShouldAnimate:o?!1:null});return m};function zm(t,e){return t.map(function(n){return e[n]})}var Od=function(t){var e=t.impact,n=t.viewport,r=t.draggables,i=t.destination,s=t.forceShouldAnimate,o=e.displaced,a=zm(o.all,r),l=Jn({afterDragging:a,destination:i,displacedBy:e.displacedBy,viewport:n.frame,forceShouldAnimate:s,last:o});return A({},e,{displaced:l})},kd=function(t){var e=t.impact,n=t.draggable,r=t.droppable,i=t.draggables,s=t.viewport,o=t.afterCritical,a=es({impact:e,draggable:n,draggables:i,droppable:r,afterCritical:o});return Jo({pageBorderBoxCenter:a,draggable:n,viewport:s})},Md=function(t){var e=t.state,n=t.dimensions,r=t.viewport;e.movementMode!=="SNAP"&&w(!1);var i=e.impact,s=r||e.viewport,o=n||e.dimensions,a=o.draggables,l=o.droppables,c=a[e.critical.draggable.id],u=De(i);u||w(!1);var d=l[u],h=Od({impact:i,viewport:s,destination:d,draggables:a}),f=kd({impact:h,draggable:c,droppable:d,draggables:a,viewport:s,afterCritical:e.afterCritical});return Fn({impact:h,clientSelection:f,state:e,dimensions:o,viewport:s})},Km=function(t){return{index:t.index,droppableId:t.droppableId}},Ld=function(t){var e=t.draggable,n=t.home,r=t.draggables,i=t.viewport,s=Ir(n.axis,e.displaceBy),o=mn(n.descriptor.id,r),a=o.indexOf(e);a===-1&&w(!1);var l=o.slice(a+1),c=l.reduce(function(f,p){return f[p.descriptor.id]=!0,f},{}),u={inVirtualList:n.descriptor.mode==="virtual",displacedBy:s,effected:c},d=Jn({afterDragging:l,destination:n,displacedBy:s,last:null,viewport:i.frame,forceShouldAnimate:!1}),h={displaced:d,displacedBy:s,at:{type:"REORDER",destination:Km(e.descriptor)}};return{impact:h,afterCritical:u}},Ym=function(t,e){return{draggables:t.draggables,droppables:Qo(t.droppables,e)}},Jm=function(t){var e=t.draggable,n=t.offset,r=t.initialWindowScroll,i=si(e.client,n),s=oi(i,r),o=A({},e,{placeholder:A({},e.placeholder,{client:i}),client:i,page:s});return o},Qm=function(t){var e=t.frame;return e||w(!1),e},Xm=function(t){var e=t.additions,n=t.updatedDroppables,r=t.viewport,i=r.scroll.diff.value;return e.map(function(s){var o=s.descriptor.droppableId,a=n[o],l=Qm(a),c=l.scroll.diff.value,u=de(i,c),d=Jm({draggable:s,offset:u,initialWindowScroll:r.scroll.initial});return d})},Zm=function(t){var e=t.state,n=t.published,r=n.modified.map(function(I){var b=e.dimensions.droppables[I.droppableId],P=Vo(b,I.scroll);return P}),i=A({},e.dimensions.droppables,{},_d(r)),s=yd(Xm({additions:n.additions,updatedDroppables:i,viewport:e.viewport})),o=A({},e.dimensions.draggables,{},s);n.removals.forEach(function(I){delete o[I]});var a={droppables:i,draggables:o},l=De(e.impact),c=l?a.droppables[l]:null,u=a.draggables[e.critical.draggable.id],d=a.droppables[e.critical.droppable.id],h=Ld({draggable:u,home:d,draggables:o,viewport:e.viewport}),f=h.impact,p=h.afterCritical,g=c&&c.isCombineEnabled?e.impact:f,v=Nd({pageOffset:e.current.page.offset,draggable:a.draggables[e.critical.draggable.id],draggables:a.draggables,droppables:a.droppables,previousImpact:g,viewport:e.viewport,afterCritical:p}),m=A({phase:"DRAGGING"},e,{phase:"DRAGGING",impact:v,onLiftImpact:f,dimensions:a,afterCritical:p,forceShouldAnimate:!1});if(e.phase==="COLLECTING")return m;var _=A({phase:"DROP_PENDING"},m,{phase:"DROP_PENDING",reason:e.reason,isWaiting:!1});return _},oo=function(e){return e.movementMode==="SNAP"},As=function(e,n,r){var i=Ym(e.dimensions,n);return!oo(e)||r?Fn({state:e,dimensions:i}):Md({state:e,dimensions:i})};function Ns(t){return t.isDragging&&t.movementMode==="SNAP"?A({phase:"DRAGGING"},t,{scrollJumpRequest:null}):t}var zl={phase:"IDLE",completed:null,shouldFlush:!1},e_=function(t,e){if(t===void 0&&(t=zl),e.type==="FLUSH")return A({},zl,{shouldFlush:!0});if(e.type==="INITIAL_PUBLISH"){t.phase!=="IDLE"&&w(!1);var n=e.payload,r=n.critical,i=n.clientSelection,s=n.viewport,o=n.dimensions,a=n.movementMode,l=o.draggables[r.draggable.id],c=o.droppables[r.droppable.id],u={selection:i,borderBoxCenter:l.client.borderBox.center,offset:oe},d={client:u,page:{selection:de(u.selection,s.scroll.initial),borderBoxCenter:de(u.selection,s.scroll.initial),offset:de(u.selection,s.scroll.diff.value)}},h=Qi(o.droppables).every(function(ys){return!ys.isFixedOnPage}),f=Ld({draggable:l,home:c,draggables:o.draggables,viewport:s}),p=f.impact,g=f.afterCritical,v={phase:"DRAGGING",isDragging:!0,critical:r,movementMode:a,dimensions:o,initial:d,current:d,isWindowScrollAllowed:h,impact:p,afterCritical:g,onLiftImpact:p,viewport:s,scrollJumpRequest:null,forceShouldAnimate:null};return v}if(e.type==="COLLECTION_STARTING"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&w(!1);var m=A({phase:"COLLECTING"},t,{phase:"COLLECTING"});return m}if(e.type==="PUBLISH_WHILE_DRAGGING")return t.phase==="COLLECTING"||t.phase==="DROP_PENDING"||w(!1),Zm({state:t,published:e.payload});if(e.type==="MOVE"){if(t.phase==="DROP_PENDING")return t;Pt(t)||w(!1);var _=e.payload.client;return pt(_,t.current.client.selection)?t:Fn({state:t,clientSelection:_,impact:oo(t)?t.impact:null})}if(e.type==="UPDATE_DROPPABLE_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="COLLECTING")return Ns(t);Pt(t)||w(!1);var I=e.payload,b=I.id,P=I.newScroll,y=t.dimensions.droppables[b];if(!y)return t;var E=Vo(y,P);return As(t,E,!1)}if(e.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(t.phase==="DROP_PENDING")return t;Pt(t)||w(!1);var S=e.payload,x=S.id,M=S.isEnabled,k=t.dimensions.droppables[x];k||w(!1),k.isEnabled===M&&w(!1);var q=A({},k,{isEnabled:M});return As(t,q,!0)}if(e.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(t.phase==="DROP_PENDING")return t;Pt(t)||w(!1);var X=e.payload,G=X.id,le=X.isCombineEnabled,he=t.dimensions.droppables[G];he||w(!1),he.isCombineEnabled===le&&w(!1);var at=A({},he,{isCombineEnabled:le});return As(t,at,!0)}if(e.type==="MOVE_BY_WINDOW_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="DROP_ANIMATING")return t;Pt(t)||w(!1),t.isWindowScrollAllowed||w(!1);var He=e.payload.newScroll;if(pt(t.viewport.scroll.current,He))return Ns(t);var Ye=Sd(t.viewport,He);return oo(t)?Md({state:t,viewport:Ye}):Fn({state:t,viewport:Ye})}if(e.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!Pt(t))return t;var Ce=e.payload.maxScroll;if(pt(Ce,t.viewport.scroll.max))return t;var xt=A({},t.viewport,{scroll:A({},t.viewport.scroll,{max:Ce})});return A({phase:"DRAGGING"},t,{viewport:xt})}if(e.type==="MOVE_UP"||e.type==="MOVE_DOWN"||e.type==="MOVE_LEFT"||e.type==="MOVE_RIGHT"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&w(!1);var Ee=Lm({state:t,type:e.type});return Ee?Fn({state:t,impact:Ee.impact,clientSelection:Ee.clientSelection,scrollJumpRequest:Ee.scrollJumpRequest}):t}if(e.type==="DROP_PENDING"){var Tn=e.payload.reason;t.phase!=="COLLECTING"&&w(!1);var kr=A({phase:"DROP_PENDING"},t,{phase:"DROP_PENDING",isWaiting:!0,reason:Tn});return kr}if(e.type==="DROP_ANIMATE"){var lt=e.payload,Mr=lt.completed,Lr=lt.dropDuration,Fr=lt.newHomeClientOffset;t.phase==="DRAGGING"||t.phase==="DROP_PENDING"||w(!1);var _s={phase:"DROP_ANIMATING",completed:Mr,dropDuration:Lr,newHomeClientOffset:Fr,dimensions:t.dimensions};return _s}if(e.type==="DROP_COMPLETE"){var jt=e.payload.completed;return{phase:"IDLE",completed:jt,shouldFlush:!1}}return t},t_=function(e){return{type:"BEFORE_INITIAL_CAPTURE",payload:e}},n_=function(e){return{type:"LIFT",payload:e}},r_=function(e){return{type:"INITIAL_PUBLISH",payload:e}},i_=function(e){return{type:"PUBLISH_WHILE_DRAGGING",payload:e}},s_=function(){return{type:"COLLECTION_STARTING",payload:null}},o_=function(e){return{type:"UPDATE_DROPPABLE_SCROLL",payload:e}},a_=function(e){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:e}},l_=function(e){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:e}},Fd=function(e){return{type:"MOVE",payload:e}},c_=function(e){return{type:"MOVE_BY_WINDOW_SCROLL",payload:e}},u_=function(e){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:e}},d_=function(){return{type:"MOVE_UP",payload:null}},h_=function(){return{type:"MOVE_DOWN",payload:null}},f_=function(){return{type:"MOVE_RIGHT",payload:null}},p_=function(){return{type:"MOVE_LEFT",payload:null}},Xo=function(){return{type:"FLUSH",payload:null}},g_=function(e){return{type:"DROP_ANIMATE",payload:e}},Zo=function(e){return{type:"DROP_COMPLETE",payload:e}},Bd=function(e){return{type:"DROP",payload:e}},v_=function(e){return{type:"DROP_PENDING",payload:e}},Ud=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},m_=function(t){return function(e){var n=e.getState,r=e.dispatch;return function(i){return function(s){if(s.type!=="LIFT"){i(s);return}var o=s.payload,a=o.id,l=o.clientSelection,c=o.movementMode,u=n();u.phase==="DROP_ANIMATING"&&r(Zo({completed:u.completed})),n().phase!=="IDLE"&&w(!1),r(Xo()),r(t_({draggableId:a,movementMode:c}));var d={shouldPublishImmediately:c==="SNAP"},h={draggableId:a,scrollOptions:d},f=t.startPublishing(h),p=f.critical,g=f.dimensions,v=f.viewport;r(r_({critical:p,dimensions:g,clientSelection:l,movementMode:c,viewport:v}))}}}},__=function(t){return function(){return function(e){return function(n){n.type==="INITIAL_PUBLISH"&&t.dragging(),n.type==="DROP_ANIMATE"&&t.dropping(n.payload.completed.result.reason),(n.type==="FLUSH"||n.type==="DROP_COMPLETE")&&t.resting(),e(n)}}}},ea={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},Qn={opacity:{drop:0,combining:.7},scale:{drop:.75}},ta={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},Rt=ta.outOfTheWay+"s "+ea.outOfTheWay,Bn={fluid:"opacity "+Rt,snap:"transform "+Rt+", opacity "+Rt,drop:function(e){var n=e+"s "+ea.drop;return"transform "+n+", opacity "+n},outOfTheWay:"transform "+Rt,placeholder:"height "+Rt+", width "+Rt+", margin "+Rt},Kl=function(e){return pt(e,oe)?null:"translate("+e.x+"px, "+e.y+"px)"},ao={moveTo:Kl,drop:function(e,n){var r=Kl(e);return r?n?r+" scale("+Qn.scale.drop+")":r:null}},lo=ta.minDropTime,Wd=ta.maxDropTime,y_=Wd-lo,Yl=1500,b_=.6,I_=function(t){var e=t.current,n=t.destination,r=t.reason,i=Kn(e,n);if(i<=0)return lo;if(i>=Yl)return Wd;var s=i/Yl,o=lo+y_*s,a=r==="CANCEL"?o*b_:o;return Number(a.toFixed(2))},w_=function(t){var e=t.impact,n=t.draggable,r=t.dimensions,i=t.viewport,s=t.afterCritical,o=r.draggables,a=r.droppables,l=De(e),c=l?a[l]:null,u=a[n.descriptor.droppableId],d=kd({impact:e,draggable:n,draggables:o,afterCritical:s,droppable:c||u,viewport:i}),h=Te(d,n.client.borderBox.center);return h},C_=function(t){var e=t.draggables,n=t.reason,r=t.lastImpact,i=t.home,s=t.viewport,o=t.onLiftImpact;if(!r.at||n!=="DROP"){var a=Od({draggables:e,impact:o,destination:i,viewport:s,forceShouldAnimate:!0});return{impact:a,didDropInsideDroppable:!1}}if(r.at.type==="REORDER")return{impact:r,didDropInsideDroppable:!0};var l=A({},r,{displaced:Yn});return{impact:l,didDropInsideDroppable:!0}},E_=function(t){var e=t.getState,n=t.dispatch;return function(r){return function(i){if(i.type!=="DROP"){r(i);return}var s=e(),o=i.payload.reason;if(s.phase==="COLLECTING"){n(v_({reason:o}));return}if(s.phase!=="IDLE"){var a=s.phase==="DROP_PENDING"&&s.isWaiting;a&&w(!1),s.phase==="DRAGGING"||s.phase==="DROP_PENDING"||w(!1);var l=s.critical,c=s.dimensions,u=c.draggables[s.critical.draggable.id],d=C_({reason:o,lastImpact:s.impact,afterCritical:s.afterCritical,onLiftImpact:s.onLiftImpact,home:s.dimensions.droppables[s.critical.droppable.id],viewport:s.viewport,draggables:s.dimensions.draggables}),h=d.impact,f=d.didDropInsideDroppable,p=f?jo(h):null,g=f?Xi(h):null,v={index:l.draggable.index,droppableId:l.droppable.id},m={draggableId:u.descriptor.id,type:u.descriptor.type,source:v,reason:o,mode:s.movementMode,destination:p,combine:g},_=w_({impact:h,draggable:u,dimensions:c,viewport:s.viewport,afterCritical:s.afterCritical}),I={critical:s.critical,afterCritical:s.afterCritical,result:m,impact:h},b=!pt(s.current.client.offset,_)||!!m.combine;if(!b){n(Zo({completed:I}));return}var P=I_({current:s.current.client.offset,destination:_,reason:o}),y={newHomeClientOffset:_,dropDuration:P,completed:I};n(g_(y))}}}},$d=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function S_(t){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(n){n.target!==window&&n.target!==window.document||t()}}}function T_(t){var e=t.onWindowScroll;function n(){e($d())}var r=zn(n),i=S_(r),s=ft;function o(){return s!==ft}function a(){o()&&w(!1),s=Ae(window,[i])}function l(){o()||w(!1),r.cancel(),s(),s=ft}return{start:a,stop:l,isActive:o}}var D_=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},x_=function(t){var e=T_({onWindowScroll:function(r){t.dispatch(c_({newScroll:r}))}});return function(n){return function(r){!e.isActive()&&r.type==="INITIAL_PUBLISH"&&e.start(),e.isActive()&&D_(r)&&e.stop(),n(r)}}},R_=function(t){var e=!1,n=!1,r=setTimeout(function(){n=!0}),i=function(o){e||n||(e=!0,t(o),clearTimeout(r))};return i.wasCalled=function(){return e},i},P_=function(){var t=[],e=function(s){var o=qo(t,function(c){return c.timerId===s});o===-1&&w(!1);var a=t.splice(o,1),l=a[0];l.callback()},n=function(s){var o=setTimeout(function(){return e(o)}),a={timerId:o,callback:s};t.push(a)},r=function(){if(t.length){var s=[].concat(t);t.length=0,s.forEach(function(o){clearTimeout(o.timerId),o.callback()})}};return{add:n,flush:r}},A_=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.droppableId===n.droppableId&&e.index===n.index},N_=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.draggableId===n.draggableId&&e.droppableId===n.droppableId},O_=function(e,n){if(e===n)return!0;var r=e.draggable.id===n.draggable.id&&e.draggable.droppableId===n.draggable.droppableId&&e.draggable.type===n.draggable.type&&e.draggable.index===n.draggable.index,i=e.droppable.id===n.droppable.id&&e.droppable.type===n.droppable.type;return r&&i},xn=function(e,n){n()},Wr=function(e,n){return{draggableId:e.draggable.id,type:e.droppable.type,source:{droppableId:e.droppable.id,index:e.draggable.index},mode:n}},Os=function(e,n,r,i){if(!e){r(i(n));return}var s=R_(r),o={announce:s};e(n,o),s.wasCalled()||r(i(n))},k_=function(t,e){var n=P_(),r=null,i=function(h,f){r&&w(!1),xn("onBeforeCapture",function(){var p=t().onBeforeCapture;if(p){var g={draggableId:h,mode:f};p(g)}})},s=function(h,f){r&&w(!1),xn("onBeforeDragStart",function(){var p=t().onBeforeDragStart;p&&p(Wr(h,f))})},o=function(h,f){r&&w(!1);var p=Wr(h,f);r={mode:f,lastCritical:h,lastLocation:p.source,lastCombine:null},n.add(function(){xn("onDragStart",function(){return Os(t().onDragStart,p,e,Jr.onDragStart)})})},a=function(h,f){var p=jo(f),g=Xi(f);r||w(!1);var v=!O_(h,r.lastCritical);v&&(r.lastCritical=h);var m=!A_(r.lastLocation,p);m&&(r.lastLocation=p);var _=!N_(r.lastCombine,g);if(_&&(r.lastCombine=g),!(!v&&!m&&!_)){var I=A({},Wr(h,r.mode),{combine:g,destination:p});n.add(function(){xn("onDragUpdate",function(){return Os(t().onDragUpdate,I,e,Jr.onDragUpdate)})})}},l=function(){r||w(!1),n.flush()},c=function(h){r||w(!1),r=null,xn("onDragEnd",function(){return Os(t().onDragEnd,h,e,Jr.onDragEnd)})},u=function(){if(r){var h=A({},Wr(r.lastCritical,r.mode),{combine:null,destination:null,reason:"CANCEL"});c(h)}};return{beforeCapture:i,beforeStart:s,start:o,update:a,flush:l,drop:c,abort:u}},M_=function(t,e){var n=k_(t,e);return function(r){return function(i){return function(s){if(s.type==="BEFORE_INITIAL_CAPTURE"){n.beforeCapture(s.payload.draggableId,s.payload.movementMode);return}if(s.type==="INITIAL_PUBLISH"){var o=s.payload.critical;n.beforeStart(o,s.payload.movementMode),i(s),n.start(o,s.payload.movementMode);return}if(s.type==="DROP_COMPLETE"){var a=s.payload.completed.result;n.flush(),i(s),n.drop(a);return}if(i(s),s.type==="FLUSH"){n.abort();return}var l=r.getState();l.phase==="DRAGGING"&&n.update(l.critical,l.impact)}}}},L_=function(t){return function(e){return function(n){if(n.type!=="DROP_ANIMATION_FINISHED"){e(n);return}var r=t.getState();r.phase!=="DROP_ANIMATING"&&w(!1),t.dispatch(Zo({completed:r.completed}))}}},F_=function(t){var e=null,n=null;function r(){n&&(cancelAnimationFrame(n),n=null),e&&(e(),e=null)}return function(i){return function(s){if((s.type==="FLUSH"||s.type==="DROP_COMPLETE"||s.type==="DROP_ANIMATION_FINISHED")&&r(),i(s),s.type==="DROP_ANIMATE"){var o={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var l=t.getState();l.phase==="DROP_ANIMATING"&&t.dispatch(Ud())}};n=requestAnimationFrame(function(){n=null,e=Ae(window,[o])})}}}},B_=function(t){return function(){return function(e){return function(n){(n.type==="DROP_COMPLETE"||n.type==="FLUSH"||n.type==="DROP_ANIMATE")&&t.stopPublishing(),e(n)}}}},U_=function(t){var e=!1;return function(){return function(n){return function(r){if(r.type==="INITIAL_PUBLISH"){e=!0,t.tryRecordFocus(r.payload.critical.draggable.id),n(r),t.tryRestoreFocusRecorded();return}if(n(r),!!e){if(r.type==="FLUSH"){e=!1,t.tryRestoreFocusRecorded();return}if(r.type==="DROP_COMPLETE"){e=!1;var i=r.payload.completed.result;i.combine&&t.tryShiftRecord(i.draggableId,i.combine.draggableId),t.tryRestoreFocusRecorded()}}}}}},W_=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},$_=function(t){return function(e){return function(n){return function(r){if(W_(r)){t.stop(),n(r);return}if(r.type==="INITIAL_PUBLISH"){n(r);var i=e.getState();i.phase!=="DRAGGING"&&w(!1),t.start(i);return}n(r),t.scroll(e.getState())}}}},H_=function(t){return function(e){return function(n){if(e(n),n.type==="PUBLISH_WHILE_DRAGGING"){var r=t.getState();r.phase==="DROP_PENDING"&&(r.isWaiting||t.dispatch(Bd({reason:r.reason})))}}}},G_=zu,V_=function(t){var e=t.dimensionMarshal,n=t.focusMarshal,r=t.styleMarshal,i=t.getResponders,s=t.announce,o=t.autoScroller;return ju(e_,G_(xg(__(r),B_(e),m_(e),E_,L_,F_,H_,$_(o),x_,U_(n),M_(i,s))))},ks=function(){return{additions:{},removals:{},modified:{}}};function q_(t){var e=t.registry,n=t.callbacks,r=ks(),i=null,s=function(){i||(n.collectionStarting(),i=requestAnimationFrame(function(){i=null;var u=r,d=u.additions,h=u.removals,f=u.modified,p=Object.keys(d).map(function(m){return e.draggable.getById(m).getDimension(oe)}).sort(function(m,_){return m.descriptor.index-_.descriptor.index}),g=Object.keys(f).map(function(m){var _=e.droppable.getById(m),I=_.callbacks.getScrollWhileDragging();return{droppableId:m,scroll:I}}),v={additions:p,removals:Object.keys(h),modified:g};r=ks(),n.publish(v)}))},o=function(u){var d=u.descriptor.id;r.additions[d]=u,r.modified[u.descriptor.droppableId]=!0,r.removals[d]&&delete r.removals[d],s()},a=function(u){var d=u.descriptor;r.removals[d.id]=!0,r.modified[d.droppableId]=!0,r.additions[d.id]&&delete r.additions[d.id],s()},l=function(){i&&(cancelAnimationFrame(i),i=null,r=ks())};return{add:o,remove:a,stop:l}}var Hd=function(t){var e=t.scrollHeight,n=t.scrollWidth,r=t.height,i=t.width,s=Te({x:n,y:e},{x:i,y:r}),o={x:Math.max(0,s.x),y:Math.max(0,s.y)};return o},Gd=function(){var t=document.documentElement;return t||w(!1),t},Vd=function(){var t=Gd(),e=Hd({scrollHeight:t.scrollHeight,scrollWidth:t.scrollWidth,width:t.clientWidth,height:t.clientHeight});return e},j_=function(){var t=$d(),e=Vd(),n=t.y,r=t.x,i=Gd(),s=i.clientWidth,o=i.clientHeight,a=r+s,l=n+o,c=Me({top:n,left:r,right:a,bottom:l}),u={frame:c,scroll:{initial:t,current:t,max:e,diff:{value:oe,displacement:oe}}};return u},z_=function(t){var e=t.critical,n=t.scrollOptions,r=t.registry,i=j_(),s=i.scroll.current,o=e.droppable,a=r.droppable.getAllByType(o.type).map(function(d){return d.callbacks.getDimensionAndWatchScroll(s,n)}),l=r.draggable.getAllByType(e.draggable.type).map(function(d){return d.getDimension(s)}),c={draggables:yd(l),droppables:_d(a)},u={dimensions:c,critical:e,viewport:i};return u};function Jl(t,e,n){if(n.descriptor.id===e.id||n.descriptor.type!==e.type)return!1;var r=t.droppable.getById(n.descriptor.droppableId);return r.descriptor.mode==="virtual"}var K_=function(t,e){var n=null,r=q_({callbacks:{publish:e.publishWhileDragging,collectionStarting:e.collectionStarting},registry:t}),i=function(f,p){t.droppable.exists(f)||w(!1),n&&e.updateDroppableIsEnabled({id:f,isEnabled:p})},s=function(f,p){n&&(t.droppable.exists(f)||w(!1),e.updateDroppableIsCombineEnabled({id:f,isCombineEnabled:p}))},o=function(f,p){n&&(t.droppable.exists(f)||w(!1),e.updateDroppableScroll({id:f,newScroll:p}))},a=function(f,p){n&&t.droppable.getById(f).callbacks.scroll(p)},l=function(){if(n){r.stop();var f=n.critical.droppable;t.droppable.getAllByType(f.type).forEach(function(p){return p.callbacks.dragStopped()}),n.unsubscribe(),n=null}},c=function(f){n||w(!1);var p=n.critical.draggable;f.type==="ADDITION"&&Jl(t,p,f.value)&&r.add(f.value),f.type==="REMOVAL"&&Jl(t,p,f.value)&&r.remove(f.value)},u=function(f){n&&w(!1);var p=t.draggable.getById(f.draggableId),g=t.droppable.getById(p.descriptor.droppableId),v={draggable:p.descriptor,droppable:g.descriptor},m=t.subscribe(c);return n={critical:v,unsubscribe:m},z_({critical:v,registry:t,scrollOptions:f.scrollOptions})},d={updateDroppableIsEnabled:i,updateDroppableIsCombineEnabled:s,scrollDroppable:a,updateDroppableScroll:o,startPublishing:u,stopPublishing:l};return d},qd=function(t,e){return t.phase==="IDLE"?!0:t.phase!=="DROP_ANIMATING"||t.completed.result.draggableId===e?!1:t.completed.result.reason==="DROP"},Y_=function(t){window.scrollBy(t.x,t.y)},J_=se(function(t){return Qi(t).filter(function(e){return!(!e.isEnabled||!e.frame)})}),Q_=function(e,n){var r=Tt(J_(n),function(i){return i.frame||w(!1),Rd(i.frame.pageMarginBox)(e)});return r},X_=function(t){var e=t.center,n=t.destination,r=t.droppables;if(n){var i=r[n];return i.frame?i:null}var s=Q_(e,r);return s},gt={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(e){return Math.pow(e,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},Z_=function(t,e){var n=t[e.size]*gt.startFromPercentage,r=t[e.size]*gt.maxScrollAtPercentage,i={startScrollingFrom:n,maxScrollValueAt:r};return i},jd=function(t){var e=t.startOfRange,n=t.endOfRange,r=t.current,i=n-e;if(i===0)return 0;var s=r-e,o=s/i;return o},na=1,ey=function(t,e){if(t>e.startScrollingFrom)return 0;if(t<=e.maxScrollValueAt)return gt.maxPixelScroll;if(t===e.startScrollingFrom)return na;var n=jd({startOfRange:e.maxScrollValueAt,endOfRange:e.startScrollingFrom,current:t}),r=1-n,i=gt.maxPixelScroll*gt.ease(r);return Math.ceil(i)},Ql=gt.durationDampening.accelerateAt,Xl=gt.durationDampening.stopDampeningAt,ty=function(t,e){var n=e,r=Xl,i=Date.now(),s=i-n;if(s>=Xl)return t;if(s<Ql)return na;var o=jd({startOfRange:Ql,endOfRange:r,current:s}),a=t*gt.ease(o);return Math.ceil(a)},Zl=function(t){var e=t.distanceToEdge,n=t.thresholds,r=t.dragStartTime,i=t.shouldUseTimeDampening,s=ey(e,n);return s===0?0:i?Math.max(ty(s,r),na):s},ec=function(t){var e=t.container,n=t.distanceToEdges,r=t.dragStartTime,i=t.axis,s=t.shouldUseTimeDampening,o=Z_(e,i),a=n[i.end]<n[i.start];return a?Zl({distanceToEdge:n[i.end],thresholds:o,dragStartTime:r,shouldUseTimeDampening:s}):-1*Zl({distanceToEdge:n[i.start],thresholds:o,dragStartTime:r,shouldUseTimeDampening:s})},ny=function(t){var e=t.container,n=t.subject,r=t.proposedScroll,i=n.height>e.height,s=n.width>e.width;return!s&&!i?r:s&&i?null:{x:s?0:r.x,y:i?0:r.y}},ry=vd(function(t){return t===0?0:t}),zd=function(t){var e=t.dragStartTime,n=t.container,r=t.subject,i=t.center,s=t.shouldUseTimeDampening,o={top:i.y-n.top,right:n.right-i.x,bottom:n.bottom-i.y,left:i.x-n.left},a=ec({container:n,distanceToEdges:o,dragStartTime:e,axis:zo,shouldUseTimeDampening:s}),l=ec({container:n,distanceToEdges:o,dragStartTime:e,axis:wd,shouldUseTimeDampening:s}),c=ry({x:l,y:a});if(pt(c,oe))return null;var u=ny({container:n,subject:r,proposedScroll:c});return u?pt(u,oe)?null:u:null},iy=vd(function(t){return t===0?0:t>0?1:-1}),ra=function(){var t=function(n,r){return n<0?n:n>r?n-r:0};return function(e){var n=e.current,r=e.max,i=e.change,s=de(n,i),o={x:t(s.x,r.x),y:t(s.y,r.y)};return pt(o,oe)?null:o}}(),Kd=function(e){var n=e.max,r=e.current,i=e.change,s={x:Math.max(r.x,n.x),y:Math.max(r.y,n.y)},o=iy(i),a=ra({max:s,current:r,change:o});return!a||o.x!==0&&a.x===0||o.y!==0&&a.y===0},ia=function(e,n){return Kd({current:e.scroll.current,max:e.scroll.max,change:n})},sy=function(e,n){if(!ia(e,n))return null;var r=e.scroll.max,i=e.scroll.current;return ra({current:i,max:r,change:n})},sa=function(e,n){var r=e.frame;return r?Kd({current:r.scroll.current,max:r.scroll.max,change:n}):!1},oy=function(e,n){var r=e.frame;return!r||!sa(e,n)?null:ra({current:r.scroll.current,max:r.scroll.max,change:n})},ay=function(t){var e=t.viewport,n=t.subject,r=t.center,i=t.dragStartTime,s=t.shouldUseTimeDampening,o=zd({dragStartTime:i,container:e.frame,subject:n,center:r,shouldUseTimeDampening:s});return o&&ia(e,o)?o:null},ly=function(t){var e=t.droppable,n=t.subject,r=t.center,i=t.dragStartTime,s=t.shouldUseTimeDampening,o=e.frame;if(!o)return null;var a=zd({dragStartTime:i,container:o.pageMarginBox,subject:n,center:r,shouldUseTimeDampening:s});return a&&sa(e,a)?a:null},tc=function(t){var e=t.state,n=t.dragStartTime,r=t.shouldUseTimeDampening,i=t.scrollWindow,s=t.scrollDroppable,o=e.current.page.borderBoxCenter,a=e.dimensions.draggables[e.critical.draggable.id],l=a.page.marginBox;if(e.isWindowScrollAllowed){var c=e.viewport,u=ay({dragStartTime:n,viewport:c,subject:l,center:o,shouldUseTimeDampening:r});if(u){i(u);return}}var d=X_({center:o,destination:De(e.impact),droppables:e.dimensions.droppables});if(d){var h=ly({dragStartTime:n,droppable:d,subject:l,center:o,shouldUseTimeDampening:r});h&&s(d.descriptor.id,h)}},cy=function(t){var e=t.scrollWindow,n=t.scrollDroppable,r=zn(e),i=zn(n),s=null,o=function(u){s||w(!1);var d=s,h=d.shouldUseTimeDampening,f=d.dragStartTime;tc({state:u,scrollWindow:r,scrollDroppable:i,dragStartTime:f,shouldUseTimeDampening:h})},a=function(u){s&&w(!1);var d=Date.now(),h=!1,f=function(){h=!0};tc({state:u,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:f,scrollDroppable:f}),s={dragStartTime:d,shouldUseTimeDampening:h},h&&o(u)},l=function(){s&&(r.cancel(),i.cancel(),s=null)};return{start:a,stop:l,scroll:o}},uy=function(t){var e=t.move,n=t.scrollDroppable,r=t.scrollWindow,i=function(c,u){var d=de(c.current.client.selection,u);e({client:d})},s=function(c,u){if(!sa(c,u))return u;var d=oy(c,u);if(!d)return n(c.descriptor.id,u),null;var h=Te(u,d);n(c.descriptor.id,h);var f=Te(u,h);return f},o=function(c,u,d){if(!c||!ia(u,d))return d;var h=sy(u,d);if(!h)return r(d),null;var f=Te(d,h);r(f);var p=Te(d,f);return p},a=function(c){var u=c.scrollJumpRequest;if(u){var d=De(c.impact);d||w(!1);var h=s(c.dimensions.droppables[d],u);if(h){var f=c.viewport,p=o(c.isWindowScrollAllowed,f,h);p&&i(c,p)}}};return a},dy=function(t){var e=t.scrollDroppable,n=t.scrollWindow,r=t.move,i=cy({scrollWindow:n,scrollDroppable:e}),s=uy({move:r,scrollWindow:n,scrollDroppable:e}),o=function(c){if(c.phase==="DRAGGING"){if(c.movementMode==="FLUID"){i.scroll(c);return}c.scrollJumpRequest&&s(c)}},a={scroll:o,start:i.start,stop:i.stop};return a},on="data-rbd",an=function(){var t=on+"-drag-handle";return{base:t,draggableId:t+"-draggable-id",contextId:t+"-context-id"}}(),co=function(){var t=on+"-draggable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),hy=function(){var t=on+"-droppable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),nc={contextId:on+"-scroll-container-context-id"},fy=function(e){return function(n){return"["+n+'="'+e+'"]'}},Rn=function(e,n){return e.map(function(r){var i=r.styles[n];return i?r.selector+" { "+i+" }":""}).join(" ")},py="pointer-events: none;",gy=function(t){var e=fy(t),n=function(){var a=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:e(an.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:a,dragging:py,dropAnimating:a}}}(),r=function(){var a=`
      transition: `+Bn.outOfTheWay+`;
    `;return{selector:e(co.contextId),styles:{dragging:a,dropAnimating:a,userCancel:a}}}(),i={selector:e(hy.contextId),styles:{always:"overflow-anchor: none;"}},s={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},o=[r,n,i,s];return{always:Rn(o,"always"),resting:Rn(o,"resting"),dragging:Rn(o,"dragging"),dropAnimating:Rn(o,"dropAnimating"),userCancel:Rn(o,"userCancel")}},xe=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?gn:_e,Ms=function(){var e=document.querySelector("head");return e||w(!1),e},rc=function(e){var n=document.createElement("style");return e&&n.setAttribute("nonce",e),n.type="text/css",n};function vy(t,e){var n=U(function(){return gy(t)},[t]),r=$(null),i=$(null),s=R(se(function(d){var h=i.current;h||w(!1),h.textContent=d}),[]),o=R(function(d){var h=r.current;h||w(!1),h.textContent=d},[]);xe(function(){!r.current&&!i.current||w(!1);var d=rc(e),h=rc(e);return r.current=d,i.current=h,d.setAttribute(on+"-always",t),h.setAttribute(on+"-dynamic",t),Ms().appendChild(d),Ms().appendChild(h),o(n.always),s(n.resting),function(){var f=function(g){var v=g.current;v||w(!1),Ms().removeChild(v),g.current=null};f(r),f(i)}},[e,o,s,n.always,n.resting,t]);var a=R(function(){return s(n.dragging)},[s,n.dragging]),l=R(function(d){if(d==="DROP"){s(n.dropAnimating);return}s(n.userCancel)},[s,n.dropAnimating,n.userCancel]),c=R(function(){i.current&&s(n.resting)},[s,n.resting]),u=U(function(){return{dragging:a,dropping:l,resting:c}},[a,l,c]);return u}var Yd=function(t){return t&&t.ownerDocument?t.ownerDocument.defaultView:window};function ts(t){return t instanceof Yd(t).HTMLElement}function my(t,e){var n="["+an.contextId+'="'+t+'"]',r=md(document.querySelectorAll(n));if(!r.length)return null;var i=Tt(r,function(s){return s.getAttribute(an.draggableId)===e});return!i||!ts(i)?null:i}function _y(t){var e=$({}),n=$(null),r=$(null),i=$(!1),s=R(function(h,f){var p={id:h,focus:f};return e.current[h]=p,function(){var v=e.current,m=v[h];m!==p&&delete v[h]}},[]),o=R(function(h){var f=my(t,h);f&&f!==document.activeElement&&f.focus()},[t]),a=R(function(h,f){n.current===h&&(n.current=f)},[]),l=R(function(){r.current||i.current&&(r.current=requestAnimationFrame(function(){r.current=null;var h=n.current;h&&o(h)}))},[o]),c=R(function(h){n.current=null;var f=document.activeElement;f&&f.getAttribute(an.draggableId)===h&&(n.current=h)},[]);xe(function(){return i.current=!0,function(){i.current=!1;var h=r.current;h&&cancelAnimationFrame(h)}},[]);var u=U(function(){return{register:s,tryRecordFocus:c,tryRestoreFocusRecorded:l,tryShiftRecord:a}},[s,c,l,a]);return u}function yy(){var t={draggables:{},droppables:{}},e=[];function n(d){return e.push(d),function(){var f=e.indexOf(d);f!==-1&&e.splice(f,1)}}function r(d){e.length&&e.forEach(function(h){return h(d)})}function i(d){return t.draggables[d]||null}function s(d){var h=i(d);return h||w(!1),h}var o={register:function(h){t.draggables[h.descriptor.id]=h,r({type:"ADDITION",value:h})},update:function(h,f){var p=t.draggables[f.descriptor.id];p&&p.uniqueId===h.uniqueId&&(delete t.draggables[f.descriptor.id],t.draggables[h.descriptor.id]=h)},unregister:function(h){var f=h.descriptor.id,p=i(f);p&&h.uniqueId===p.uniqueId&&(delete t.draggables[f],r({type:"REMOVAL",value:h}))},getById:s,findById:i,exists:function(h){return!!i(h)},getAllByType:function(h){return ci(t.draggables).filter(function(f){return f.descriptor.type===h})}};function a(d){return t.droppables[d]||null}function l(d){var h=a(d);return h||w(!1),h}var c={register:function(h){t.droppables[h.descriptor.id]=h},unregister:function(h){var f=a(h.descriptor.id);f&&h.uniqueId===f.uniqueId&&delete t.droppables[h.descriptor.id]},getById:l,findById:a,exists:function(h){return!!a(h)},getAllByType:function(h){return ci(t.droppables).filter(function(f){return f.descriptor.type===h})}};function u(){t.draggables={},t.droppables={},e.length=0}return{draggable:o,droppable:c,subscribe:n,clean:u}}function by(){var t=U(yy,[]);return _e(function(){return function(){requestAnimationFrame(t.clean)}},[t]),t}var oa=Y.createContext(null),di=function(){var t=document.body;return t||w(!1),t},Iy={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},wy=function(e){return"rbd-announcement-"+e};function Cy(t){var e=U(function(){return wy(t)},[t]),n=$(null);_e(function(){var s=document.createElement("div");return n.current=s,s.id=e,s.setAttribute("aria-live","assertive"),s.setAttribute("aria-atomic","true"),A(s.style,Iy),di().appendChild(s),function(){setTimeout(function(){var l=di();l.contains(s)&&l.removeChild(s),s===n.current&&(n.current=null)})}},[e]);var r=R(function(i){var s=n.current;if(s){s.textContent=i;return}},[]);return r}var Ey=0,Sy={separator:"::"};function aa(t,e){return e===void 0&&(e=Sy),U(function(){return""+t+e.separator+Ey++},[e.separator,t])}function Ty(t){var e=t.contextId,n=t.uniqueId;return"rbd-hidden-text-"+e+"-"+n}function Dy(t){var e=t.contextId,n=t.text,r=aa("hidden-text",{separator:"-"}),i=U(function(){return Ty({contextId:e,uniqueId:r})},[r,e]);return _e(function(){var o=document.createElement("div");return o.id=i,o.textContent=n,o.style.display="none",di().appendChild(o),function(){var l=di();l.contains(o)&&l.removeChild(o)}},[i,n]),i}var ns=Y.createContext(null);function Jd(t){var e=$(t);return _e(function(){e.current=t}),e}function xy(){var t=null;function e(){return!!t}function n(o){return o===t}function r(o){t&&w(!1);var a={abandon:o};return t=a,a}function i(){t||w(!1),t=null}function s(){t&&(t.abandon(),i())}return{isClaimed:e,isActive:n,claim:r,release:i,tryAbandon:s}}var Ry=9,Py=13,la=27,Qd=32,Ay=33,Ny=34,Oy=35,ky=36,My=37,Ly=38,Fy=39,By=40,$r,Uy=($r={},$r[Py]=!0,$r[Ry]=!0,$r),Xd=function(t){Uy[t.keyCode]&&t.preventDefault()},rs=function(){var t="visibilitychange";if(typeof document>"u")return t;var e=[t,"ms"+t,"webkit"+t,"moz"+t,"o"+t],n=Tt(e,function(r){return"on"+r in document});return n||t}(),Zd=0,ic=5;function Wy(t,e){return Math.abs(e.x-t.x)>=ic||Math.abs(e.y-t.y)>=ic}var sc={type:"IDLE"};function $y(t){var e=t.cancel,n=t.completed,r=t.getPhase,i=t.setPhase;return[{eventName:"mousemove",fn:function(o){var a=o.button,l=o.clientX,c=o.clientY;if(a===Zd){var u={x:l,y:c},d=r();if(d.type==="DRAGGING"){o.preventDefault(),d.actions.move(u);return}d.type!=="PENDING"&&w(!1);var h=d.point;if(Wy(h,u)){o.preventDefault();var f=d.actions.fluidLift(u);i({type:"DRAGGING",actions:f})}}}},{eventName:"mouseup",fn:function(o){var a=r();if(a.type!=="DRAGGING"){e();return}o.preventDefault(),a.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"mousedown",fn:function(o){r().type==="DRAGGING"&&o.preventDefault(),e()}},{eventName:"keydown",fn:function(o){var a=r();if(a.type==="PENDING"){e();return}if(o.keyCode===la){o.preventDefault(),e();return}Xd(o)}},{eventName:"resize",fn:e},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){r().type==="PENDING"&&e()}},{eventName:"webkitmouseforcedown",fn:function(o){var a=r();if(a.type==="IDLE"&&w(!1),a.actions.shouldRespectForcePress()){e();return}o.preventDefault()}},{eventName:rs,fn:e}]}function Hy(t){var e=$(sc),n=$(ft),r=U(function(){return{eventName:"mousedown",fn:function(d){if(!d.defaultPrevented&&d.button===Zd&&!(d.ctrlKey||d.metaKey||d.shiftKey||d.altKey)){var h=t.findClosestDraggableId(d);if(h){var f=t.tryGetLock(h,o,{sourceEvent:d});if(f){d.preventDefault();var p={x:d.clientX,y:d.clientY};n.current(),c(f,p)}}}}}},[t]),i=U(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(d){if(!d.defaultPrevented){var h=t.findClosestDraggableId(d);if(h){var f=t.findOptionsForDraggable(h);f&&(f.shouldRespectForcePress||t.canGetLock(h)&&d.preventDefault())}}}}},[t]),s=R(function(){var d={passive:!1,capture:!0};n.current=Ae(window,[i,r],d)},[i,r]),o=R(function(){var u=e.current;u.type!=="IDLE"&&(e.current=sc,n.current(),s())},[s]),a=R(function(){var u=e.current;o(),u.type==="DRAGGING"&&u.actions.cancel({shouldBlockNextClick:!0}),u.type==="PENDING"&&u.actions.abort()},[o]),l=R(function(){var d={capture:!0,passive:!1},h=$y({cancel:a,completed:o,getPhase:function(){return e.current},setPhase:function(p){e.current=p}});n.current=Ae(window,h,d)},[a,o]),c=R(function(d,h){e.current.type!=="IDLE"&&w(!1),e.current={type:"PENDING",point:h,actions:d},l()},[l]);xe(function(){return s(),function(){n.current()}},[s])}var zt;function Gy(){}var Vy=(zt={},zt[Ny]=!0,zt[Ay]=!0,zt[ky]=!0,zt[Oy]=!0,zt);function qy(t,e){function n(){e(),t.cancel()}function r(){e(),t.drop()}return[{eventName:"keydown",fn:function(s){if(s.keyCode===la){s.preventDefault(),n();return}if(s.keyCode===Qd){s.preventDefault(),r();return}if(s.keyCode===By){s.preventDefault(),t.moveDown();return}if(s.keyCode===Ly){s.preventDefault(),t.moveUp();return}if(s.keyCode===Fy){s.preventDefault(),t.moveRight();return}if(s.keyCode===My){s.preventDefault(),t.moveLeft();return}if(Vy[s.keyCode]){s.preventDefault();return}Xd(s)}},{eventName:"mousedown",fn:n},{eventName:"mouseup",fn:n},{eventName:"click",fn:n},{eventName:"touchstart",fn:n},{eventName:"resize",fn:n},{eventName:"wheel",fn:n,options:{passive:!0}},{eventName:rs,fn:n}]}function jy(t){var e=$(Gy),n=U(function(){return{eventName:"keydown",fn:function(s){if(s.defaultPrevented||s.keyCode!==Qd)return;var o=t.findClosestDraggableId(s);if(!o)return;var a=t.tryGetLock(o,u,{sourceEvent:s});if(!a)return;s.preventDefault();var l=!0,c=a.snapLift();e.current();function u(){l||w(!1),l=!1,e.current(),r()}e.current=Ae(window,qy(c,u),{capture:!0,passive:!1})}}},[t]),r=R(function(){var s={passive:!1,capture:!0};e.current=Ae(window,[n],s)},[n]);xe(function(){return r(),function(){e.current()}},[r])}var Ls={type:"IDLE"},zy=120,Ky=.15;function Yy(t){var e=t.cancel,n=t.getPhase;return[{eventName:"orientationchange",fn:e},{eventName:"resize",fn:e},{eventName:"contextmenu",fn:function(i){i.preventDefault()}},{eventName:"keydown",fn:function(i){if(n().type!=="DRAGGING"){e();return}i.keyCode===la&&i.preventDefault(),e()}},{eventName:rs,fn:e}]}function Jy(t){var e=t.cancel,n=t.completed,r=t.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(s){var o=r();if(o.type!=="DRAGGING"){e();return}o.hasMoved=!0;var a=s.touches[0],l=a.clientX,c=a.clientY,u={x:l,y:c};s.preventDefault(),o.actions.move(u)}},{eventName:"touchend",fn:function(s){var o=r();if(o.type!=="DRAGGING"){e();return}s.preventDefault(),o.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"touchcancel",fn:function(s){if(r().type!=="DRAGGING"){e();return}s.preventDefault(),e()}},{eventName:"touchforcechange",fn:function(s){var o=r();o.type==="IDLE"&&w(!1);var a=s.touches[0];if(a){var l=a.force>=Ky;if(l){var c=o.actions.shouldRespectForcePress();if(o.type==="PENDING"){c&&e();return}if(c){if(o.hasMoved){s.preventDefault();return}e();return}s.preventDefault()}}}},{eventName:rs,fn:e}]}function Qy(t){var e=$(Ls),n=$(ft),r=R(function(){return e.current},[]),i=R(function(f){e.current=f},[]),s=U(function(){return{eventName:"touchstart",fn:function(f){if(!f.defaultPrevented){var p=t.findClosestDraggableId(f);if(p){var g=t.tryGetLock(p,a,{sourceEvent:f});if(g){var v=f.touches[0],m=v.clientX,_=v.clientY,I={x:m,y:_};n.current(),d(g,I)}}}}}},[t]),o=R(function(){var f={capture:!0,passive:!1};n.current=Ae(window,[s],f)},[s]),a=R(function(){var h=e.current;h.type!=="IDLE"&&(h.type==="PENDING"&&clearTimeout(h.longPressTimerId),i(Ls),n.current(),o())},[o,i]),l=R(function(){var h=e.current;a(),h.type==="DRAGGING"&&h.actions.cancel({shouldBlockNextClick:!0}),h.type==="PENDING"&&h.actions.abort()},[a]),c=R(function(){var f={capture:!0,passive:!1},p={cancel:l,completed:a,getPhase:r},g=Ae(window,Jy(p),f),v=Ae(window,Yy(p),f);n.current=function(){g(),v()}},[l,r,a]),u=R(function(){var f=r();f.type!=="PENDING"&&w(!1);var p=f.actions.fluidLift(f.point);i({type:"DRAGGING",actions:p,hasMoved:!1})},[r,i]),d=R(function(f,p){r().type!=="IDLE"&&w(!1);var g=setTimeout(u,zy);i({type:"PENDING",point:p,actions:f,longPressTimerId:g}),c()},[c,r,i,u]);xe(function(){return o(),function(){n.current();var p=r();p.type==="PENDING"&&(clearTimeout(p.longPressTimerId),i(Ls))}},[r,o,i]),xe(function(){var f=Ae(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return f},[])}var Xy={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function eh(t,e){if(e==null)return!1;var n=!!Xy[e.tagName.toLowerCase()];if(n)return!0;var r=e.getAttribute("contenteditable");return r==="true"||r===""?!0:e===t?!1:eh(t,e.parentElement)}function Zy(t,e){var n=e.target;return ts(n)?eh(t,n):!1}var eb=function(t){return Me(t.getBoundingClientRect()).center};function tb(t){return t instanceof Yd(t).Element}var nb=function(){var t="matches";if(typeof document>"u")return t;var e=[t,"msMatchesSelector","webkitMatchesSelector"],n=Tt(e,function(r){return r in Element.prototype});return n||t}();function th(t,e){return t==null?null:t[nb](e)?t:th(t.parentElement,e)}function rb(t,e){return t.closest?t.closest(e):th(t,e)}function ib(t){return"["+an.contextId+'="'+t+'"]'}function sb(t,e){var n=e.target;if(!tb(n))return null;var r=ib(t),i=rb(n,r);return!i||!ts(i)?null:i}function ob(t,e){var n=sb(t,e);return n?n.getAttribute(an.draggableId):null}function ab(t,e){var n="["+co.contextId+'="'+t+'"]',r=md(document.querySelectorAll(n)),i=Tt(r,function(s){return s.getAttribute(co.id)===e});return!i||!ts(i)?null:i}function lb(t){t.preventDefault()}function Hr(t){var e=t.expected,n=t.phase,r=t.isLockActive;return t.shouldWarn,!(!r()||e!==n)}function nh(t){var e=t.lockAPI,n=t.store,r=t.registry,i=t.draggableId;if(e.isClaimed())return!1;var s=r.draggable.findById(i);return!(!s||!s.options.isEnabled||!qd(n.getState(),i))}function cb(t){var e=t.lockAPI,n=t.contextId,r=t.store,i=t.registry,s=t.draggableId,o=t.forceSensorStop,a=t.sourceEvent,l=nh({lockAPI:e,store:r,registry:i,draggableId:s});if(!l)return null;var c=i.draggable.getById(s),u=ab(n,c.descriptor.id);if(!u||a&&!c.options.canDragInteractiveElements&&Zy(u,a))return null;var d=e.claim(o||ft),h="PRE_DRAG";function f(){return c.options.shouldRespectForcePress}function p(){return e.isActive(d)}function g(y,E){Hr({expected:y,phase:h,isLockActive:p,shouldWarn:!0})&&r.dispatch(E())}var v=g.bind(null,"DRAGGING");function m(y){function E(){e.release(),h="COMPLETED"}h!=="PRE_DRAG"&&(E(),h!=="PRE_DRAG"&&w(!1)),r.dispatch(n_(y.liftActionArgs)),h="DRAGGING";function S(x,M){if(M===void 0&&(M={shouldBlockNextClick:!1}),y.cleanup(),M.shouldBlockNextClick){var k=Ae(window,[{eventName:"click",fn:lb,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(k)}E(),r.dispatch(Bd({reason:x}))}return A({isActive:function(){return Hr({expected:"DRAGGING",phase:h,isLockActive:p,shouldWarn:!1})},shouldRespectForcePress:f,drop:function(M){return S("DROP",M)},cancel:function(M){return S("CANCEL",M)}},y.actions)}function _(y){var E=zn(function(x){v(function(){return Fd({client:x})})}),S=m({liftActionArgs:{id:s,clientSelection:y,movementMode:"FLUID"},cleanup:function(){return E.cancel()},actions:{move:E}});return A({},S,{move:E})}function I(){var y={moveUp:function(){return v(d_)},moveRight:function(){return v(f_)},moveDown:function(){return v(h_)},moveLeft:function(){return v(p_)}};return m({liftActionArgs:{id:s,clientSelection:eb(u),movementMode:"SNAP"},cleanup:ft,actions:y})}function b(){var y=Hr({expected:"PRE_DRAG",phase:h,isLockActive:p,shouldWarn:!0});y&&e.release()}var P={isActive:function(){return Hr({expected:"PRE_DRAG",phase:h,isLockActive:p,shouldWarn:!1})},shouldRespectForcePress:f,fluidLift:_,snapLift:I,abort:b};return P}var ub=[Hy,jy,Qy];function db(t){var e=t.contextId,n=t.store,r=t.registry,i=t.customSensors,s=t.enableDefaultSensors,o=[].concat(s?ub:[],i||[]),a=pe(function(){return xy()})[0],l=R(function(_,I){_.isDragging&&!I.isDragging&&a.tryAbandon()},[a]);xe(function(){var _=n.getState(),I=n.subscribe(function(){var b=n.getState();l(_,b),_=b});return I},[a,n,l]),xe(function(){return a.tryAbandon},[a.tryAbandon]);for(var c=R(function(m){return nh({lockAPI:a,registry:r,store:n,draggableId:m})},[a,r,n]),u=R(function(m,_,I){return cb({lockAPI:a,registry:r,contextId:e,store:n,draggableId:m,forceSensorStop:_,sourceEvent:I&&I.sourceEvent?I.sourceEvent:null})},[e,a,r,n]),d=R(function(m){return ob(e,m)},[e]),h=R(function(m){var _=r.draggable.findById(m);return _?_.options:null},[r.draggable]),f=R(function(){a.isClaimed()&&(a.tryAbandon(),n.getState().phase!=="IDLE"&&n.dispatch(Xo()))},[a,n]),p=R(a.isClaimed,[a]),g=U(function(){return{canGetLock:c,tryGetLock:u,findClosestDraggableId:d,findOptionsForDraggable:h,tryReleaseLock:f,isLockClaimed:p}},[c,u,d,h,f,p]),v=0;v<o.length;v++)o[v](g)}var hb=function(e){return{onBeforeCapture:e.onBeforeCapture,onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragEnd:e.onDragEnd,onDragUpdate:e.onDragUpdate}};function Pn(t){return t.current||w(!1),t.current}function fb(t){var e=t.contextId,n=t.setCallbacks,r=t.sensors,i=t.nonce,s=t.dragHandleUsageInstructions,o=$(null),a=Jd(t),l=R(function(){return hb(a.current)},[a]),c=Cy(e),u=Dy({contextId:e,text:s}),d=vy(e,i),h=R(function(x){Pn(o).dispatch(x)},[]),f=U(function(){return xl({publishWhileDragging:i_,updateDroppableScroll:o_,updateDroppableIsEnabled:a_,updateDroppableIsCombineEnabled:l_,collectionStarting:s_},h)},[h]),p=by(),g=U(function(){return K_(p,f)},[p,f]),v=U(function(){return dy(A({scrollWindow:Y_,scrollDroppable:g.scrollDroppable},xl({move:Fd},h)))},[g.scrollDroppable,h]),m=_y(e),_=U(function(){return V_({announce:c,autoScroller:v,dimensionMarshal:g,focusMarshal:m,getResponders:l,styleMarshal:d})},[c,v,g,m,l,d]);o.current=_;var I=R(function(){var x=Pn(o),M=x.getState();M.phase!=="IDLE"&&x.dispatch(Xo())},[]),b=R(function(){var x=Pn(o).getState();return x.isDragging||x.phase==="DROP_ANIMATING"},[]),P=U(function(){return{isDragging:b,tryAbort:I}},[b,I]);n(P);var y=R(function(x){return qd(Pn(o).getState(),x)},[]),E=R(function(){return Pt(Pn(o).getState())},[]),S=U(function(){return{marshal:g,focus:m,contextId:e,canLift:y,isMovementAllowed:E,dragHandleUsageInstructionsId:u,registry:p}},[e,g,u,m,y,E,p]);return db({contextId:e,store:_,registry:p,customSensors:r,enableDefaultSensors:t.enableDefaultSensors!==!1}),_e(function(){return I},[I]),Y.createElement(ns.Provider,{value:S},Y.createElement(kg,{context:oa,store:_},t.children))}var pb=0;function gb(){return U(function(){return""+pb++},[])}function vb(t){var e=gb(),n=t.dragHandleUsageInstructions||Jr.dragHandleUsageInstructions;return Y.createElement(jv,null,function(r){return Y.createElement(fb,{nonce:t.nonce,contextId:e,setCallbacks:r,dragHandleUsageInstructions:n,enableDefaultSensors:t.enableDefaultSensors,sensors:t.sensors,onBeforeCapture:t.onBeforeCapture,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragUpdate:t.onDragUpdate,onDragEnd:t.onDragEnd},t.children)})}var rh=function(e){return function(n){return e===n}},mb=rh("scroll"),_b=rh("auto"),oc=function(e,n){return n(e.overflowX)||n(e.overflowY)},yb=function(e){var n=window.getComputedStyle(e),r={overflowX:n.overflowX,overflowY:n.overflowY};return oc(r,mb)||oc(r,_b)},bb=function(){return!1},Ib=function t(e){return e==null?null:e===document.body?bb()?e:null:e===document.documentElement?null:yb(e)?e:t(e.parentElement)},uo=function(t){return{x:t.scrollLeft,y:t.scrollTop}},wb=function t(e){if(!e)return!1;var n=window.getComputedStyle(e);return n.position==="fixed"?!0:t(e.parentElement)},Cb=function(t){var e=Ib(t),n=wb(t);return{closestScrollable:e,isFixedOnPage:n}},Eb=function(t){var e=t.descriptor,n=t.isEnabled,r=t.isCombineEnabled,i=t.isFixedOnPage,s=t.direction,o=t.client,a=t.page,l=t.closest,c=function(){if(!l)return null;var f=l.scrollSize,p=l.client,g=Hd({scrollHeight:f.scrollHeight,scrollWidth:f.scrollWidth,height:p.paddingBox.height,width:p.paddingBox.width});return{pageMarginBox:l.page.marginBox,frameClient:p,scrollSize:f,shouldClipSubject:l.shouldClipSubject,scroll:{initial:l.scroll,current:l.scroll,max:g,diff:{value:oe,displacement:oe}}}}(),u=s==="vertical"?zo:wd,d=sn({page:a,withPlaceholder:null,axis:u,frame:c}),h={descriptor:e,isCombineEnabled:r,isFixedOnPage:i,axis:u,isEnabled:n,client:o,page:a,frame:c,subject:d};return h},Sb=function(e,n){var r=hd(e);if(!n||e!==n)return r;var i=r.paddingBox.top-n.scrollTop,s=r.paddingBox.left-n.scrollLeft,o=i+n.scrollHeight,a=s+n.scrollWidth,l={top:i,right:a,bottom:o,left:s},c=Ho(l,r.border),u=Go({borderBox:c,margin:r.margin,border:r.border,padding:r.padding});return u},Tb=function(t){var e=t.ref,n=t.descriptor,r=t.env,i=t.windowScroll,s=t.direction,o=t.isDropDisabled,a=t.isCombineEnabled,l=t.shouldClipSubject,c=r.closestScrollable,u=Sb(e,c),d=oi(u,i),h=function(){if(!c)return null;var p=hd(c),g={scrollHeight:c.scrollHeight,scrollWidth:c.scrollWidth};return{client:p,page:oi(p,i),scroll:uo(c),scrollSize:g,shouldClipSubject:l}}(),f=Eb({descriptor:n,isEnabled:!o,isCombineEnabled:a,isFixedOnPage:r.isFixedOnPage,direction:s,client:u,page:d,closest:h});return f},Db={passive:!1},xb={passive:!0},ac=function(t){return t.shouldPublishImmediately?Db:xb};function hi(t){var e=Bi(t);return e||w(!1),e}var Gr=function(e){return e&&e.env.closestScrollable||null};function Rb(t){var e=$(null),n=hi(ns),r=aa("droppable"),i=n.registry,s=n.marshal,o=Jd(t),a=U(function(){return{id:t.droppableId,type:t.type,mode:t.mode}},[t.droppableId,t.mode,t.type]),l=$(a),c=U(function(){return se(function(b,P){e.current||w(!1);var y={x:b,y:P};s.updateDroppableScroll(a.id,y)})},[a.id,s]),u=R(function(){var b=e.current;return!b||!b.env.closestScrollable?oe:uo(b.env.closestScrollable)},[]),d=R(function(){var b=u();c(b.x,b.y)},[u,c]),h=U(function(){return zn(d)},[d]),f=R(function(){var b=e.current,P=Gr(b);b&&P||w(!1);var y=b.scrollOptions;if(y.shouldPublishImmediately){d();return}h()},[h,d]),p=R(function(b,P){e.current&&w(!1);var y=o.current,E=y.getDroppableRef();E||w(!1);var S=Cb(E),x={ref:E,descriptor:a,env:S,scrollOptions:P};e.current=x;var M=Tb({ref:E,descriptor:a,env:S,windowScroll:b,direction:y.direction,isDropDisabled:y.isDropDisabled,isCombineEnabled:y.isCombineEnabled,shouldClipSubject:!y.ignoreContainerClipping}),k=S.closestScrollable;return k&&(k.setAttribute(nc.contextId,n.contextId),k.addEventListener("scroll",f,ac(x.scrollOptions))),M},[n.contextId,a,f,o]),g=R(function(){var b=e.current,P=Gr(b);return b&&P||w(!1),uo(P)},[]),v=R(function(){var b=e.current;b||w(!1);var P=Gr(b);e.current=null,P&&(h.cancel(),P.removeAttribute(nc.contextId),P.removeEventListener("scroll",f,ac(b.scrollOptions)))},[f,h]),m=R(function(b){var P=e.current;P||w(!1);var y=Gr(P);y||w(!1),y.scrollTop+=b.y,y.scrollLeft+=b.x},[]),_=U(function(){return{getDimensionAndWatchScroll:p,getScrollWhileDragging:g,dragStopped:v,scroll:m}},[v,p,g,m]),I=U(function(){return{uniqueId:r,descriptor:a,callbacks:_}},[_,a,r]);xe(function(){return l.current=I.descriptor,i.droppable.register(I),function(){e.current&&v(),i.droppable.unregister(I)}},[_,a,v,I,s,i.droppable]),xe(function(){e.current&&s.updateDroppableIsEnabled(l.current.id,!t.isDropDisabled)},[t.isDropDisabled,s]),xe(function(){e.current&&s.updateDroppableIsCombineEnabled(l.current.id,t.isCombineEnabled)},[t.isCombineEnabled,s])}function Fs(){}var lc={width:0,height:0,margin:Xv},Pb=function(e){var n=e.isAnimatingOpenOnMount,r=e.placeholder,i=e.animate;return n||i==="close"?lc:{height:r.client.borderBox.height,width:r.client.borderBox.width,margin:r.client.margin}},Ab=function(e){var n=e.isAnimatingOpenOnMount,r=e.placeholder,i=e.animate,s=Pb({isAnimatingOpenOnMount:n,placeholder:r,animate:i});return{display:r.display,boxSizing:"border-box",width:s.width,height:s.height,marginTop:s.margin.top,marginRight:s.margin.right,marginBottom:s.margin.bottom,marginLeft:s.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:i!=="none"?Bn.placeholder:null}};function Nb(t){var e=$(null),n=R(function(){e.current&&(clearTimeout(e.current),e.current=null)},[]),r=t.animate,i=t.onTransitionEnd,s=t.onClose,o=t.contextId,a=pe(t.animate==="open"),l=a[0],c=a[1];_e(function(){return l?r!=="open"?(n(),c(!1),Fs):e.current?Fs:(e.current=setTimeout(function(){e.current=null,c(!1)}),n):Fs},[r,l,n]);var u=R(function(h){h.propertyName==="height"&&(i(),r==="close"&&s())},[r,s,i]),d=Ab({isAnimatingOpenOnMount:l,animate:t.animate,placeholder:t.placeholder});return Y.createElement(t.placeholder.tagName,{style:d,"data-rbd-placeholder-context-id":o,onTransitionEnd:u,ref:t.innerRef})}var Ob=Y.memo(Nb),ca=Y.createContext(null),kb=function(t){qu(e,t);function e(){for(var r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=t.call.apply(t,[this].concat(s))||this,r.state={isVisible:!!r.props.on,data:r.props.on,animate:r.props.shouldAnimate&&r.props.on?"open":"none"},r.onClose=function(){r.state.animate==="close"&&r.setState({isVisible:!1})},r}e.getDerivedStateFromProps=function(i,s){return i.shouldAnimate?i.on?{isVisible:!0,data:i.on,animate:"open"}:s.isVisible?{isVisible:!0,data:s.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:!!i.on,data:i.on,animate:"none"}};var n=e.prototype;return n.render=function(){if(!this.state.isVisible)return null;var i={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(i)},e}(Y.PureComponent),cc={dragging:5e3,dropAnimating:4500},Mb=function(e,n){return n?Bn.drop(n.duration):e?Bn.snap:Bn.fluid},Lb=function(e,n){return e?n?Qn.opacity.drop:Qn.opacity.combining:null},Fb=function(e){return e.forceShouldAnimate!=null?e.forceShouldAnimate:e.mode==="SNAP"};function Bb(t){var e=t.dimension,n=e.client,r=t.offset,i=t.combineWith,s=t.dropping,o=!!i,a=Fb(t),l=!!s,c=l?ao.drop(r,o):ao.moveTo(r),u={position:"fixed",top:n.marginBox.top,left:n.marginBox.left,boxSizing:"border-box",width:n.borderBox.width,height:n.borderBox.height,transition:Mb(a,s),transform:c,opacity:Lb(o,l),zIndex:l?cc.dropAnimating:cc.dragging,pointerEvents:"none"};return u}function Ub(t){return{transform:ao.moveTo(t.offset),transition:t.shouldAnimateDisplacement?null:"none"}}function Wb(t){return t.type==="DRAGGING"?Bb(t):Ub(t)}function $b(t,e,n){n===void 0&&(n=oe);var r=window.getComputedStyle(e),i=e.getBoundingClientRect(),s=dd(i,r),o=oi(s,n),a={client:s,tagName:e.tagName.toLowerCase(),display:r.display},l={x:s.marginBox.width,y:s.marginBox.height},c={descriptor:t,placeholder:a,displaceBy:l,client:s,page:o};return c}function Hb(t){var e=aa("draggable"),n=t.descriptor,r=t.registry,i=t.getDraggableRef,s=t.canDragInteractiveElements,o=t.shouldRespectForcePress,a=t.isEnabled,l=U(function(){return{canDragInteractiveElements:s,shouldRespectForcePress:o,isEnabled:a}},[s,a,o]),c=R(function(f){var p=i();return p||w(!1),$b(n,p,f)},[n,i]),u=U(function(){return{uniqueId:e,descriptor:n,options:l,getDimension:c}},[n,c,l,e]),d=$(u),h=$(!0);xe(function(){return r.draggable.register(d.current),function(){return r.draggable.unregister(d.current)}},[r.draggable]),xe(function(){if(h.current){h.current=!1;return}var f=d.current;d.current=u,r.draggable.update(u,f)},[u,r.draggable])}function Gb(t){t.preventDefault()}function Vb(t){var e=$(null),n=R(function(x){e.current=x},[]),r=R(function(){return e.current},[]),i=hi(ns),s=i.contextId,o=i.dragHandleUsageInstructionsId,a=i.registry,l=hi(ca),c=l.type,u=l.droppableId,d=U(function(){return{id:t.draggableId,index:t.index,type:c,droppableId:u}},[t.draggableId,t.index,c,u]),h=t.children,f=t.draggableId,p=t.isEnabled,g=t.shouldRespectForcePress,v=t.canDragInteractiveElements,m=t.isClone,_=t.mapped,I=t.dropAnimationFinished;if(!m){var b=U(function(){return{descriptor:d,registry:a,getDraggableRef:r,canDragInteractiveElements:v,shouldRespectForcePress:g,isEnabled:p}},[d,a,r,v,g,p]);Hb(b)}var P=U(function(){return p?{tabIndex:0,role:"button","aria-describedby":o,"data-rbd-drag-handle-draggable-id":f,"data-rbd-drag-handle-context-id":s,draggable:!1,onDragStart:Gb}:null},[s,o,f,p]),y=R(function(x){_.type==="DRAGGING"&&_.dropping&&x.propertyName==="transform"&&I()},[I,_]),E=U(function(){var x=Wb(_),M=_.type==="DRAGGING"&&_.dropping?y:null,k={innerRef:n,draggableProps:{"data-rbd-draggable-context-id":s,"data-rbd-draggable-id":f,style:x,onTransitionEnd:M},dragHandleProps:P};return k},[s,P,f,_,y,n]),S=U(function(){return{draggableId:d.id,type:d.type,source:{index:d.index,droppableId:d.droppableId}}},[d.droppableId,d.id,d.index,d.type]);return h(E,_.snapshot,S)}var ih=function(t,e){return t===e},sh=function(t){var e=t.combine,n=t.destination;return n?n.droppableId:e?e.droppableId:null},qb=function(e){return e.combine?e.combine.draggableId:null},jb=function(e){return e.at&&e.at.type==="COMBINE"?e.at.combine.draggableId:null};function zb(){var t=se(function(i,s){return{x:i,y:s}}),e=se(function(i,s,o,a,l){return{isDragging:!0,isClone:s,isDropAnimating:!!l,dropAnimation:l,mode:i,draggingOver:o,combineWith:a,combineTargetFor:null}}),n=se(function(i,s,o,a,l,c,u){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:l,combineWith:c,mode:s,offset:i,dimension:o,forceShouldAnimate:u,snapshot:e(s,a,l,c,null)}}}),r=function(s,o){if(s.isDragging){if(s.critical.draggable.id!==o.draggableId)return null;var a=s.current.client.offset,l=s.dimensions.draggables[o.draggableId],c=De(s.impact),u=jb(s.impact),d=s.forceShouldAnimate;return n(t(a.x,a.y),s.movementMode,l,o.isClone,c,u,d)}if(s.phase==="DROP_ANIMATING"){var h=s.completed;if(h.result.draggableId!==o.draggableId)return null;var f=o.isClone,p=s.dimensions.draggables[o.draggableId],g=h.result,v=g.mode,m=sh(g),_=qb(g),I=s.dropDuration,b={duration:I,curve:ea.drop,moveTo:s.newHomeClientOffset,opacity:_?Qn.opacity.drop:null,scale:_?Qn.scale.drop:null};return{mapped:{type:"DRAGGING",offset:s.newHomeClientOffset,dimension:p,dropping:b,draggingOver:m,combineWith:_,mode:v,forceShouldAnimate:null,snapshot:e(v,f,m,_,b)}}}return null};return r}function oh(t){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:t,combineWith:null}}var Kb={mapped:{type:"SECONDARY",offset:oe,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:oh(null)}};function Yb(){var t=se(function(o,a){return{x:o,y:a}}),e=se(oh),n=se(function(o,a,l){return a===void 0&&(a=null),{mapped:{type:"SECONDARY",offset:o,combineTargetFor:a,shouldAnimateDisplacement:l,snapshot:e(a)}}}),r=function(a){return a?n(oe,a,!0):null},i=function(a,l,c,u){var d=c.displaced.visible[a],h=!!(u.inVirtualList&&u.effected[a]),f=Xi(c),p=f&&f.draggableId===a?l:null;if(!d){if(!h)return r(p);if(c.displaced.invisible[a])return null;var g=vn(u.displacedBy.point),v=t(g.x,g.y);return n(v,p,!0)}if(h)return r(p);var m=c.displacedBy.point,_=t(m.x,m.y);return n(_,p,d.shouldAnimate)},s=function(a,l){if(a.isDragging)return a.critical.draggable.id===l.draggableId?null:i(l.draggableId,a.critical.draggable.id,a.impact,a.afterCritical);if(a.phase==="DROP_ANIMATING"){var c=a.completed;return c.result.draggableId===l.draggableId?null:i(l.draggableId,c.result.draggableId,c.impact,c.afterCritical)}return null};return s}var Jb=function(){var e=zb(),n=Yb(),r=function(s,o){return e(s,o)||n(s,o)||Kb};return r},Qb={dropAnimationFinished:Ud},Xb=cd(Jb,Qb,null,{context:oa,pure:!0,areStatePropsEqual:ih})(Vb);function ah(t){var e=hi(ca),n=e.isUsingCloneFor;return n===t.draggableId&&!t.isClone?null:Y.createElement(Xb,t)}function lh(t){var e=typeof t.isDragDisabled=="boolean"?!t.isDragDisabled:!0,n=!!t.disableInteractiveElementBlocking,r=!!t.shouldRespectForcePress;return Y.createElement(ah,A({},t,{isClone:!1,isEnabled:e,canDragInteractiveElements:n,shouldRespectForcePress:r}))}function Zb(t){var e=Bi(ns);e||w(!1);var n=e.contextId,r=e.isMovementAllowed,i=$(null),s=$(null),o=t.children,a=t.droppableId,l=t.type,c=t.mode,u=t.direction,d=t.ignoreContainerClipping,h=t.isDropDisabled,f=t.isCombineEnabled,p=t.snapshot,g=t.useClone,v=t.updateViewportMaxScroll,m=t.getContainerForClone,_=R(function(){return i.current},[]),I=R(function(k){i.current=k},[]);R(function(){return s.current},[]);var b=R(function(k){s.current=k},[]),P=R(function(){r()&&v({maxScroll:Vd()})},[r,v]);Rb({droppableId:a,type:l,mode:c,direction:u,isDropDisabled:h,isCombineEnabled:f,ignoreContainerClipping:d,getDroppableRef:_});var y=Y.createElement(kb,{on:t.placeholder,shouldAnimate:t.shouldAnimatePlaceholder},function(k){var q=k.onClose,X=k.data,G=k.animate;return Y.createElement(Ob,{placeholder:X,onClose:q,innerRef:b,animate:G,contextId:n,onTransitionEnd:P})}),E=U(function(){return{innerRef:I,placeholder:y,droppableProps:{"data-rbd-droppable-id":a,"data-rbd-droppable-context-id":n}}},[n,a,y,I]),S=g?g.dragging.draggableId:null,x=U(function(){return{droppableId:a,type:l,isUsingCloneFor:S}},[a,S,l]);function M(){if(!g)return null;var k=g.dragging,q=g.render,X=Y.createElement(ah,{draggableId:k.draggableId,index:k.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},function(G,le){return q(G,le,k)});return Y.createPortal(X,m())}return Y.createElement(ca.Provider,{value:x},o(E,p),M())}var Bs=function(e,n){return e===n.droppable.type},uc=function(e,n){return n.draggables[e.draggable.id]},eI=function(){var e={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},n=A({},e,{shouldAnimatePlaceholder:!1}),r=se(function(o){return{draggableId:o.id,type:o.type,source:{index:o.index,droppableId:o.droppableId}}}),i=se(function(o,a,l,c,u,d){var h=u.descriptor.id,f=u.descriptor.droppableId===o;if(f){var p=d?{render:d,dragging:r(u.descriptor)}:null,g={isDraggingOver:l,draggingOverWith:l?h:null,draggingFromThisWith:h,isUsingPlaceholder:!0};return{placeholder:u.placeholder,shouldAnimatePlaceholder:!1,snapshot:g,useClone:p}}if(!a)return n;if(!c)return e;var v={isDraggingOver:l,draggingOverWith:h,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:u.placeholder,shouldAnimatePlaceholder:!0,snapshot:v,useClone:null}}),s=function(a,l){var c=l.droppableId,u=l.type,d=!l.isDropDisabled,h=l.renderClone;if(a.isDragging){var f=a.critical;if(!Bs(u,f))return n;var p=uc(f,a.dimensions),g=De(a.impact)===c;return i(c,d,g,g,p,h)}if(a.phase==="DROP_ANIMATING"){var v=a.completed;if(!Bs(u,v.critical))return n;var m=uc(v.critical,a.dimensions);return i(c,d,sh(v.result)===c,De(v.impact)===c,m,h)}if(a.phase==="IDLE"&&a.completed&&!a.shouldFlush){var _=a.completed;if(!Bs(u,_.critical))return n;var I=De(_.impact)===c,b=!!(_.impact.at&&_.impact.at.type==="COMBINE"),P=_.critical.droppable.id===c;return I?b?e:n:P?e:n}return n};return s},tI={updateViewportMaxScroll:u_};function nI(){return document.body||w(!1),document.body}var rI={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:nI},ua=cd(eI,tI,null,{context:oa,pure:!0,areStatePropsEqual:ih})(Zb);ua.defaultProps=rI;var iI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},sI=Object.defineProperty,oI=Object.defineProperties,aI=Object.getOwnPropertyDescriptors,fi=Object.getOwnPropertySymbols,ch=Object.prototype.hasOwnProperty,uh=Object.prototype.propertyIsEnumerable,dc=(t,e,n)=>e in t?sI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,hc=(t,e)=>{for(var n in e||(e={}))ch.call(e,n)&&dc(t,n,e[n]);if(fi)for(var n of fi(e))uh.call(e,n)&&dc(t,n,e[n]);return t},lI=(t,e)=>oI(t,aI(e)),cI=(t,e)=>{var n={};for(var r in t)ch.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&fi)for(var r of fi(t))e.indexOf(r)<0&&uh.call(t,r)&&(n[r]=t[r]);return n},yn=(t,e,n)=>{const r=i=>{var s=i,{color:o="currentColor",size:a=24,stroke:l=2,children:c}=s,u=cI(s,["color","size","stroke","children"]);return Ue("svg",hc(lI(hc({},iI),{width:a,height:a,stroke:o,"stroke-width":l,class:`tabler-icon tabler-icon-${t}`}),u),[...n.map(([d,h])=>Ue(d,h)),...Ve(c)])};return r.displayName=`${e}`,r},uI=yn("brand-github-filled","IconBrandGithubFilled",[["path",{d:"M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),dI=yn("brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]),hI=yn("dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]),dh=yn("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]),hh=yn("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]]),fI=yn("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]),pI=0;function T(t,e,n,r,i,s){var o,a,l={};for(a in e)a=="ref"?o=e[a]:l[a]=e[a];var c={type:t,props:l,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--pI,__source:i,__self:s};if(typeof t=="function"&&(o=t.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return D.vnode&&D.vnode(c),c}const gI=({id:t,listIndex:e,index:n,content:r,removeCard:i})=>{const[s,o]=pe(!1);return T(lh,{draggableId:t,index:n,children:(a,l)=>T(bI,{style:a.draggableProps.style,snapshot:l,children:c=>T("div",{ref:a.innerRef,...a.draggableProps,...a.dragHandleProps,style:c,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),class:`mb-2 flex h-10 resize-none content-center items-center rounded-md px-3 
                      py-2 shadow-[0_1px_1px_0_0_1px_0_0_1px_0] shadow-slate-300 
                      ${l.isDragging?"bg-slate-100 ":"bg-slate-50"}`,children:[r,s&&T("div",{class:"absolute right-0 mx-3",children:T(fh,{clickHandler:()=>i(e,n),icon:T(hh,{})})})]})})})},vI=({addCard:t,index:e})=>{const[n,r]=pe(!1),i=$(null),s=()=>{const o=i.current;!o||!o.value||(t(e,o.value),o.value="",o.focus())};return n?T("div",{class:"flex w-full flex-col gap-2 p-2 pt-0",children:[T("div",{class:"flex h-10 resize-none content-center rounded-md bg-slate-50 px-3 py-2  shadow-[0_1px_1px_0_0_1px_0_0_1px_0] shadow-slate-300 focus:outline-none",children:T("textarea",{ref:i,name:"cardTitle",spellCheck:!1,maxLength:20,placeholder:"Enter a title for this card...",type:"text",class:"h-full w-full resize-none bg-inherit outline-none"})}),T("div",{class:"flex gap-2",children:[T("button",{class:"w-fit rounded-md bg-slate-900 px-3 py-1 text-slate-50 hover:bg-slate-950",type:"submit",onClick:()=>s(),children:"Add card"}),T("button",{class:"rounded-md px-1 hover:bg-slate-300",onClick:()=>r(!1),children:T(fI,{})})]})]}):T("div",{class:"p-2 pt-0",children:T("button",{onClick:()=>r(!0),class:"flex w-full items-center gap-2 rounded-md px-2 py-1 text-left hover:bg-slate-300",children:[T(dh,{size:18}),"Add a card"]})})},mI=({title:t,changeTitle:e,removeList:n,index:r,snapshot:i})=>{const s=$(null),[o,a]=pe(!1),[l,c]=pe(t),[u,d]=pe(!1),h=(p,g)=>{const v=p.target,m=v.value;m?(e(g,m),c(m)):v.value=l},f=p=>{if(p.key!=="Enter")return;p.preventDefault(),p.target.blur(),a(!1)};return _e(()=>{!i.isDragging&&!o||d(!1)},[i,o]),T("div",{class:"relative flex items-center p-2",children:[T("div",{class:`absolute left-0 top-0 h-full w-full ${o?"hidden":"cursor-pointer"}`,onClick:()=>{var p;a(!0),(p=s.current)==null||p.focus()}}),T("textarea",{ref:s,spellcheck:!1,dir:"auto",maxLength:15,onBlurCapture:()=>{a(!1)},onKeyDown:f,onBlur:p=>h(p,r),defaultValue:t,class:"box-border h-9 w-full cursor-pointer resize-none overflow-hidden break-words rounded  border-2 border-slate-200 bg-inherit px-3 py-1 font-semibold focus:cursor-text  focus:border-slate-900 focus:bg-slate-50 focus:outline-none"}),T("div",{class:"absolute right-0 m-2 block",children:[T(fh,{icon:T(hI,{}),clickHandler:()=>d(!u),disabled:o}),u&&!o&&T("div",{class:"absolute z-10 mt-2 grid w-64 divide-y rounded-md  bg-slate-50 shadow-sm shadow-black/40",children:[T("div",{class:"px-4 py-3 text-center",children:"List actions"}),T("div",{class:"mx-2 py-2",children:T("button",{class:"mx-0 flex w-full items-center gap-2 rounded-md px-2 py-1 text-left  hover:bg-slate-300",onClick:()=>n(r),children:[T(hh,{size:16}),"Archive this list"]})})]})]})]})},_I=({cards:t,index:e,removeCard:n})=>T(We,{children:t==null?void 0:t.map((r,i)=>T(gI,{id:r.id,index:i,listIndex:e,content:r.content,removeCard:n},r.id))}),yI=({addList:t})=>T("button",{class:"mx-4 my-8 flex items-center gap-2 rounded-md bg-slate-700 p-3 px-2 py-1  text-slate-50 hover:bg-slate-600 whitespace-nowrap",onClick:()=>t("New list"),children:[T(dh,{size:18}),"Add another list"]}),bI=({snapshot:t,style:e,children:n})=>{const r=$(0),[i,s]=pe(),[o,a]=pe(0),[l,c]=pe(0),u=f=>f/(1+Math.abs(f)),d=()=>{if(!t.isDragging||!e.transform){r.current=requestAnimationFrame(d);return}const f=e.transform,p=parseInt(f.match(/translate\(.{1,}\)/g)[0].match(/-?[0-9]{1,}/g)[0]),g=p-o;let v=l*.9+u(g)*1.4;Math.abs(v)<.01&&(v=0),s(`${f} rotate(${v}deg)`),c(v),a(p)},h=f=>f.isDragging&&!f.dropAnimation?{...e,transform:i}:e;return _e(()=>{r.current=requestAnimationFrame(d)},[i,l,o]),_e(()=>{if(!t.isDragging){cancelAnimationFrame(r.current);return}return r.current=requestAnimationFrame(d),()=>{cancelAnimationFrame(r.current)}}),T(We,{children:n(h(t))})},II=({auth:t})=>T("div",{class:"flex w-full content-center items-center border-b-2 border-b-slate-800 px-8 py-6  font-bold text-slate-50",children:T("div",{class:"flex items-center gap-6",children:[T("div",{class:"relative text-3xl",children:"trello clone"}),T("button",{class:"rounded-md border-2 border-slate-50 px-2 py-1 hover:bg-slate-50 hover:text-slate-900",onClick:()=>t(),children:"Sign in"}),T("div",{class:"relative flex h-8 w-8 items-center justify-center",children:[T(dI,{class:"absolute"}),T("a",{class:"absolute flex cursor-pointer content-center items-center justify-center  fill-slate-50 opacity-0 transition hover:opacity-100",href:"https://github.com/chompaa/trello-clone",target:"_blank",children:T(uI,{})})]})]})});var Un=(t=>(t.Card="card",t.List="list",t))(Un||{});const wI=({list:t,index:e,changeTitle:n,addCard:r,removeCard:i,removeList:s,placeholderProps:o})=>T(lh,{draggableId:`${e}`,index:e,children:(a,l)=>T("div",{ref:a.innerRef,...a.draggableProps,class:"mx-4 my-8 h-full rounded-xl shadow-sm shadow-black",children:T("div",{class:"w-72 rounded-xl bg-slate-200",children:[T("div",{...a.dragHandleProps,class:"rounded-t-xl",children:T(mI,{title:t.title,changeTitle:n,removeList:s,index:e,snapshot:l})}),T(ua,{droppableId:`${e}`,type:Un.Card,children:(c,u)=>T("div",{ref:c.innerRef,...c.droppableProps,class:"relative px-2",children:[T(_I,{cards:t.cards,index:e,removeCard:i}),c.placeholder,u.isDraggingOver&&T("div",{class:"absolute rounded-md bg-slate-300",style:{top:o.clientY,left:o.clientX,height:o.clientHeight,width:o.clientWidth}})]})}),T(vI,{addCard:r,index:e})]})})}),fh=({clickHandler:t,icon:e,disabled:n})=>T(We,{children:!n&&T("button",{onClick:()=>t(),class:"flex content-center items-center justify-center rounded p-2 text-slate-500  hover:bg-slate-300",children:ku(e,{size:18})})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw bn(e)},bn=function(t){return new Error("Firebase Database ("+ph.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},CI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},da={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),r.push(n[u],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new EI;const h=s<<2|a>>4;if(r.push(h),c!==64){const f=a<<4&240|c>>2;if(r.push(f),d!==64){const p=c<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class EI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vh=function(t){const e=gh(t);return da.encodeByteArray(e,!0)},pi=function(t){return vh(t).replace(/\./g,"")},gi=function(t){try{return da.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){return mh(void 0,t)}function mh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!TI(n)||(t[n]=mh(t[n],e[n]));return t}function TI(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=()=>DI().__FIREBASE_DEFAULTS__,RI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gi(t[1]);return e&&JSON.parse(e)},ha=()=>{try{return xI()||RI()||PI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_h=t=>{var e,n;return(n=(e=ha())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AI=t=>{const e=_h(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yh=()=>{var t;return(t=ha())===null||t===void 0?void 0:t.config},bh=t=>{var e;return(e=ha())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[pi(JSON.stringify(n)),pi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function OI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ih(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kI(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wh(){return ph.NODE_ADMIN===!0}function MI(){try{return typeof indexedDB=="object"}catch{return!1}}function LI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="FirebaseError";class Dt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FI,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wr.prototype.create)}}class wr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?BI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dt(i,a,r)}}function BI(t,e){return t.replace(UI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const UI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t){return JSON.parse(t)}function ee(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Xn(gi(s[0])||""),n=Xn(gi(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},WI=function(t){const e=Ch(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$I=function(t){const e=Ch(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ln(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ho(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vi(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function mi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(fc(s)&&fc(o)){if(!mi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function GI(t,e){const n=new VI(t,e);return n.subscribe.bind(n)}class VI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Us),i.error===void 0&&(i.error=Us),i.complete===void 0&&(i.complete=Us);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Us(){}function pa(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ss=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t){return t&&t._delegate?t._delegate:t}class Ut{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new is;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YI(e))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=At){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=At){return this.instances.has(e)}getOptions(e=At){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=At){return this.component?this.component.multipleInstances?e:At:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KI(t){return t===At?void 0:t}function YI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const QI={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},XI=V.INFO,ZI={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},ew=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ZI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ga{constructor(e){this.name=e,this._logLevel=XI,this._logHandler=ew,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const tw=(t,e)=>e.some(n=>t instanceof n);let pc,gc;function nw(){return pc||(pc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rw(){return gc||(gc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eh=new WeakMap,fo=new WeakMap,Sh=new WeakMap,Ws=new WeakMap,va=new WeakMap;function iw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Eh.set(n,t)}).catch(()=>{}),va.set(e,t),e}function sw(t){if(fo.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});fo.set(t,e)}let po={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ow(t){po=t(po)}function aw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($s(this),e,...n);return Sh.set(r,e.sort?e.sort():[e]),vt(r)}:rw().includes(t)?function(...e){return t.apply($s(this),e),vt(Eh.get(this))}:function(...e){return vt(t.apply($s(this),e))}}function lw(t){return typeof t=="function"?aw(t):(t instanceof IDBTransaction&&sw(t),tw(t,nw())?new Proxy(t,po):t)}function vt(t){if(t instanceof IDBRequest)return iw(t);if(Ws.has(t))return Ws.get(t);const e=lw(t);return e!==t&&(Ws.set(t,e),va.set(e,t)),e}const $s=t=>va.get(t);function cw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=vt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(vt(o.result),l.oldVersion,l.newVersion,vt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const uw=["get","getKey","getAll","getAllKeys","count"],dw=["put","add","delete","clear"],Hs=new Map;function vc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hs.get(e))return Hs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=dw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uw.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Hs.set(e,s),s}ow(t=>({...t,get:(e,n,r)=>vc(e,n)||t.get(e,n,r),has:(e,n)=>!!vc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const go="@firebase/app",mc="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new ga("@firebase/app"),pw="@firebase/app-compat",gw="@firebase/analytics-compat",vw="@firebase/analytics",mw="@firebase/app-check-compat",_w="@firebase/app-check",yw="@firebase/auth",bw="@firebase/auth-compat",Iw="@firebase/database",ww="@firebase/database-compat",Cw="@firebase/functions",Ew="@firebase/functions-compat",Sw="@firebase/installations",Tw="@firebase/installations-compat",Dw="@firebase/messaging",xw="@firebase/messaging-compat",Rw="@firebase/performance",Pw="@firebase/performance-compat",Aw="@firebase/remote-config",Nw="@firebase/remote-config-compat",Ow="@firebase/storage",kw="@firebase/storage-compat",Mw="@firebase/firestore",Lw="@firebase/firestore-compat",Fw="firebase",Bw="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="[DEFAULT]",Uw={[go]:"fire-core",[pw]:"fire-core-compat",[vw]:"fire-analytics",[gw]:"fire-analytics-compat",[_w]:"fire-app-check",[mw]:"fire-app-check-compat",[yw]:"fire-auth",[bw]:"fire-auth-compat",[Iw]:"fire-rtdb",[ww]:"fire-rtdb-compat",[Cw]:"fire-fn",[Ew]:"fire-fn-compat",[Sw]:"fire-iid",[Tw]:"fire-iid-compat",[Dw]:"fire-fcm",[xw]:"fire-fcm-compat",[Rw]:"fire-perf",[Pw]:"fire-perf-compat",[Aw]:"fire-rc",[Nw]:"fire-rc-compat",[Ow]:"fire-gcs",[kw]:"fire-gcs-compat",[Mw]:"fire-fst",[Lw]:"fire-fst-compat","fire-js":"fire-js",[Fw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new Map,mo=new Map;function Ww(t,e){try{t.container.addComponent(e)}catch(n){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(mo.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;mo.set(e,t);for(const n of _i.values())Ww(n,t);return!0}function ma(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mt=new wr("app","Firebase",$w);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=Bw;function Th(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mt.create("bad-app-name",{appName:String(i)});if(n||(n=yh()),!n)throw mt.create("no-options");const s=_i.get(i);if(s){if(mi(n,s.options)&&mi(r,s.config))return s;throw mt.create("duplicate-app",{appName:i})}const o=new JI(i);for(const l of mo.values())o.addComponent(l);const a=new Hw(n,r,o);return _i.set(i,a),a}function Dh(t=vo){const e=_i.get(t);if(!e&&t===vo&&yh())return Th();if(!e)throw mt.create("no-app",{appName:t});return e}function _t(t,e,n){var r;let i=(r=Uw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(a.join(" "));return}cn(new Ut(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="firebase-heartbeat-database",Vw=1,Zn="firebase-heartbeat-store";let Gs=null;function xh(){return Gs||(Gs=cw(Gw,Vw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zn)}}}).catch(t=>{throw mt.create("idb-open",{originalErrorMessage:t.message})})),Gs}async function qw(t){try{return await(await xh()).transaction(Zn).objectStore(Zn).get(Rh(t))}catch(e){if(e instanceof Dt)Wt.warn(e.message);else{const n=mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(n.message)}}}async function _c(t,e){try{const r=(await xh()).transaction(Zn,"readwrite");await r.objectStore(Zn).put(e,Rh(t)),await r.done}catch(n){if(n instanceof Dt)Wt.warn(n.message);else{const r=mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wt.warn(r.message)}}}function Rh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=1024,zw=30*24*60*60*1e3;class Kw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=zw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yc(),{heartbeatsToSend:n,unsentEntries:r}=Yw(this._heartbeatsCache.heartbeats),i=pi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function yc(){return new Date().toISOString().substring(0,10)}function Yw(t,e=jw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),bc(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Jw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MI()?LI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _c(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _c(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bc(t){return pi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t){cn(new Ut("platform-logger",e=>new hw(e),"PRIVATE")),cn(new Ut("heartbeat",e=>new Kw(e),"PRIVATE")),_t(go,mc,t),_t(go,mc,"esm2017"),_t("fire-js","")}Qw("");var Xw="firebase",Zw="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t(Xw,Zw,"app");const Ic="@firebase/database",wc="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ph="";function eC(t){Ph=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ee(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Xn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return st(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new tC(e)}}catch{}return new nC},kt=Ah("localStorage"),_o=Ah("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new ga("@firebase/database"),rC=function(){let t=1;return function(){return t++}}(),Nh=function(t){const e=jI(t),n=new HI;n.update(e);const r=n.digest();return da.encodeByteArray(r)},Cr=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Cr.apply(null,r):typeof r=="object"?e+=ee(r):e+=r,e+=" "}return e};let Lt=null,Cc=!0;const iC=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Qt.logLevel=V.VERBOSE,Lt=Qt.log.bind(Qt),e&&_o.set("logging_enabled",!0)):typeof t=="function"?Lt=t:(Lt=null,_o.remove("logging_enabled"))},fe=function(...t){if(Cc===!0&&(Cc=!1,Lt===null&&_o.get("logging_enabled")===!0&&iC(!0)),Lt){const e=Cr.apply(null,t);Lt(e)}},Er=function(t){return function(...e){fe(t,...e)}},yo=function(...t){const e="FIREBASE INTERNAL ERROR: "+Cr(...t);Qt.error(e)},rt=function(...t){const e=`FIREBASE FATAL ERROR: ${Cr(...t)}`;throw Qt.error(e),new Error(e)},Ie=function(...t){const e="FIREBASE WARNING: "+Cr(...t);Qt.warn(e)},sC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ie("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Oh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},oC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},un="[MIN_NAME]",$t="[MAX_NAME]",Cn=function(t,e){if(t===e)return 0;if(t===un||e===$t)return-1;if(e===un||t===$t)return 1;{const n=Ec(t),r=Ec(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},aC=function(t,e){return t===e?0:t<e?-1:1},An=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ee(e))},_a=function(t){if(typeof t!="object"||t===null)return ee(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ee(e[r]),n+=":",n+=_a(t[e[r]]);return n+="}",n},kh=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function we(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Mh=function(t){C(!Oh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},lC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},cC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function uC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const dC=new RegExp("^-?(0*)\\d{1,10}$"),hC=-2147483648,fC=2147483647,Ec=function(t){if(dC.test(t)){const e=Number(t);if(e>=hC&&e<=fC)return e}return null},En=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ie("Exception was thrown by user callback.",n),e},Math.floor(0))}},pC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ie(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ie(e)}}class Xt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="5",Lh="v",Fh="s",Bh="r",Uh="f",Wh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$h="ls",Hh="p",bo="ac",Gh="websocket",Vh="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=kt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&kt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function mC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jh(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===Gh)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Vh)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mC(t)&&(n.ns=t.namespace);const i=[];return we(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(){this.counters_={}}incrementCounter(e,n=1){st(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return SI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs={},qs={};function ba(t){const e=t.toString();return Vs[e]||(Vs[e]=new _C),Vs[e]}function yC(t,e){const n=t.toString();return qs[n]||(qs[n]=e()),qs[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&En(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="start",IC="close",wC="pLPCommand",CC="pRTLPCB",zh="id",Kh="pw",Yh="ser",EC="cb",SC="seg",TC="ts",DC="d",xC="dframe",Jh=1870,Qh=30,RC=Jh-Qh,PC=25e3,AC=3e4;class Yt{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Er(e),this.stats_=ba(n),this.urlFn=l=>(this.appCheckToken&&(l[bo]=this.appCheckToken),jh(n,Vh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new bC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(AC)),oC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ia((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sc)this.id=a,this.password=l;else if(o===IC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Sc]="t",r[Yh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[EC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Lh]=ya,this.transportSessionId&&(r[Fh]=this.transportSessionId),this.lastSessionId&&(r[$h]=this.lastSessionId),this.applicationId&&(r[Hh]=this.applicationId),this.appCheckToken&&(r[bo]=this.appCheckToken),typeof location<"u"&&location.hostname&&Wh.test(location.hostname)&&(r[Bh]=Uh);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Yt.forceAllow_=!0}static forceDisallow(){Yt.forceDisallow_=!0}static isAvailable(){return Yt.forceAllow_?!0:!Yt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lC()&&!cC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=vh(n),i=kh(r,RC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[xC]="t",r[zh]=e,r[Kh]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ee(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ia{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rC(),window[wC+this.uniqueCallbackIdentifier]=e,window[CC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ia.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){fe("frame writing exception"),a.stack&&fe(a.stack),fe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||fe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[zh]=this.myID,e[Kh]=this.myPW,e[Yh]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Qh+r.length<=Jh;){const o=this.pendingSegs.shift();r=r+"&"+SC+i+"="+o.seg+"&"+TC+i+"="+o.ts+"&"+DC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(PC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=16384,OC=45e3;let yi=null;typeof MozWebSocket<"u"?yi=MozWebSocket:typeof WebSocket<"u"&&(yi=WebSocket);class ke{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Er(this.connId),this.stats_=ba(n),this.connURL=ke.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Lh]=ya,typeof location<"u"&&location.hostname&&Wh.test(location.hostname)&&(o[Bh]=Uh),n&&(o[Fh]=n),r&&(o[$h]=r),i&&(o[bo]=i),s&&(o[Hh]=s),jh(e,Gh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,kt.set("previous_websocket_failure",!0);try{let r;wh(),this.mySock=new yi(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&yi!==null&&!ke.forceDisallow_}static previouslyFailed(){return kt.isInMemoryStorage||kt.get("previous_websocket_failure")===!0}markConnectionHealthy(){kt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Xn(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=kh(n,NC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(OC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ke.responsesRequiredToBeHealthy=2;ke.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Yt,ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ke&&ke.isAvailable();let r=n&&!ke.previouslyFailed();if(e.webSocketOnly&&(n||Ie("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ke];else{const i=this.transports_=[];for(const s of er.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);er.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}er.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=6e4,MC=5e3,LC=10*1024,FC=100*1024,js="t",Tc="d",BC="s",Dc="r",UC="e",xc="o",Rc="a",Pc="n",Ac="p",WC="h";class $C{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Er("c:"+this.id+":"),this.transportManager_=new er(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>FC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>LC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(js in e){const n=e[js];n===Rc?this.upgradeIfSecondaryHealthy_():n===Dc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===xc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=An("t",e),r=An("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ac,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Rc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Pc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=An("t",e),r=An("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=An(js,e);if(Tc in e){const r=e[Tc];if(n===WC){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Pc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===BC?this.onConnectionShutdown_(r):n===Dc?this.onReset_(r):n===UC?yo("Server Error: "+r):n===xc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ya!==r&&Ie("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Wn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(MC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ac,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(kt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends Zh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bi}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=32,Oc=768;class j{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new j("")}function B(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ct(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new j(t.pieces_,e)}function ef(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function HC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function tf(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function nf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new j(e,0)}function te(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof j)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new j(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function me(t,e){const n=B(t),r=B(e);if(n===null)return e;if(n===r)return me(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rf(t,e){if(Ct(t)!==Ct(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Le(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ct(t)>Ct(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class GC{constructor(e,n){this.errorPrefix_=n,this.parts_=tf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ss(this.parts_[r]);sf(this)}}function VC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ss(e),sf(t)}function qC(t){const e=t.parts_.pop();t.byteLength_-=ss(e),t.parts_.length>0&&(t.byteLength_-=1)}function sf(t){if(t.byteLength_>Oc)throw new Error(t.errorPrefix_+"has a key path longer than "+Oc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Nc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Nc+") or object contains a cycle "+Nt(t))}function Nt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends Zh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new wa}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=1e3,jC=60*5*1e3,kc=30*1e3,zC=1.3,KC=3e4,YC="server_kill",Mc=3;class nt extends Xh{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=nt.nextPersistentConnectionId_++,this.log_=Er("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Nn,this.maxReconnectDelay_=jC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!wh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wa.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ee(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new is,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;nt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&st(e,"w")){const r=ln(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ie(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$I(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=kc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=WI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ee(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yo("Unrecognized action received from server: "+ee(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>KC&&(this.reconnectDelay_=Nn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?fe("getToken() completed but was canceled"):(fe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new $C(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{Ie(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(YC)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ie(d),l())}}}interrupt(e){fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ho(this.interruptReasons_)&&(this.reconnectDelay_=Nn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>_a(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new j(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){fe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mc&&(this.reconnectDelay_=kc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){fe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ph.replace(/\./g,"-")]=1,fa()?e["framework.cordova"]=1:Ih()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bi.getInstance().currentlyOnline();return ho(this.interruptReasons_)&&e}}nt.nextPersistentConnectionId_=0;nt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new L(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new L(un,e),i=new L(un,n);return this.compare(r,i)!==0}minPost(){return L.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr;class of extends os{static get __EMPTY_NODE(){return Vr}static set __EMPTY_NODE(e){Vr=e}compare(e,n){return Cn(e.name,n.name)}isDefinedOn(e){throw bn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L($t,Vr)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,Vr)}toString(){return".key"}}const Zt=new of;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class re{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??re.RED,this.left=i??be.EMPTY_NODE,this.right=s??be.EMPTY_NODE}copy(e,n,r,i,s){return new re(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return be.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}re.RED=!0;re.BLACK=!1;class JC{copy(e,n,r,i,s){return this}insert(e,n,r){return new re(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class be{constructor(e,n=be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,re.BLACK,null,null))}remove(e){return new be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,re.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qr(this.root_,null,this.comparator_,!0,e)}}be.EMPTY_NODE=new JC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t,e){return Cn(t.name,e.name)}function Ca(t,e){return Cn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io;function XC(t){Io=t}const af=function(t){return typeof t=="number"?"number:"+Mh(t):"string:"+t},lf=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&st(e,".sv"),"Priority must be a string or number.")}else C(t===Io||t.isEmpty(),"priority of unexpected type.");C(t===Io||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc;class ne{constructor(e,n=ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),lf(this.priorityNode_)}static set __childrenNodeConstructor(e){Lc=e}static get __childrenNodeConstructor(){return Lc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:B(e)===".priority"?this.priorityNode_:ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=B(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||Ct(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+af(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Mh(this.value_):e+=this.value_,this.lazyHash_=Nh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ne.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ne.VALUE_TYPE_ORDER.indexOf(n),s=ne.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cf,uf;function ZC(t){cf=t}function eE(t){uf=t}class tE extends os{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Cn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L($t,new ne("[PRIORITY-POST]",uf))}makePost(e,n){const r=cf(e);return new L(n,new ne("[PRIORITY-POST]",r))}toString(){return".priority"}}const Z=new tE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=Math.log(2);class rE{constructor(e){const n=s=>parseInt(Math.log(s)/nE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ii=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new re(h,d.node,re.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=i(l,f),g=i(f+1,c);return d=t[f],h=n?n(d):d,new re(h,d.node,re.BLACK,p,g)}},s=function(l){let c=null,u=null,d=t.length;const h=function(p,g){const v=d-p,m=d;d-=p;const _=i(v+1,m),I=t[v],b=n?n(I):I;f(new re(b,I.node,g,null,_))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),v=Math.pow(2,l.count-(p+1));g?h(v,re.BLACK):(h(v,re.BLACK),h(v,re.RED))}return u},o=new rE(t.length),a=s(o);return new be(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs;const Kt={};class Ze{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(Kt&&Z,"ChildrenNode.ts has not been loaded"),zs=zs||new Ze({".priority":Kt},{".priority":Z}),zs}get(e){const n=ln(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof be?n:null}hasIndex(e){return st(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Zt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(L.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ii(r,e.getCompare()):a=Kt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ze(u,c)}addToIndexes(e,n){const r=vi(this.indexes_,(i,s)=>{const o=ln(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===Kt)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(L.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ii(a,o.getCompare())}else return Kt;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new L(e.name,a))),l.insert(e,e.node)}});return new Ze(r,this.indexSet_)}removeFromIndexes(e,n){const r=vi(this.indexes_,i=>{if(i===Kt)return i;{const s=n.get(e.name);return s?i.remove(new L(e.name,s)):i}});return new Ze(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let On;class N{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&lf(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return On||(On=new N(new be(Ca),null,Ze.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||On}updatePriority(e){return this.children_.isEmpty()?this:new N(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?On:n}}getChild(e){const n=B(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new L(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?On:this.priorityNode_;return new N(i,o,s)}}updateChild(e,n){const r=B(e);if(r===null)return n;{C(B(e)!==".priority"||Ct(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Z,(o,a)=>{n[o]=a.val(e),r++,s&&N.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+af(this.getPriority().val())+":"),this.forEachChild(Z,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Nh(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new L(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Sr?-1:0}withIndex(e){if(e===Zt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new N(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Zt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Z),i=n.getIterator(Z);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Zt?null:this.indexMap_.get(e.toString())}}N.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class iE extends N{constructor(){super(new be(Ca),N.EMPTY_NODE,Ze.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return N.EMPTY_NODE}isEmpty(){return!1}}const Sr=new iE;Object.defineProperties(L,{MIN:{value:new L(un,N.EMPTY_NODE)},MAX:{value:new L($t,Sr)}});of.__EMPTY_NODE=N.EMPTY_NODE;ne.__childrenNodeConstructor=N;XC(Sr);eE(Sr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=!0;function ie(t,e=null){if(t===null)return N.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ne(n,ie(e))}if(!(t instanceof Array)&&sE){const n=[];let r=!1;if(we(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ie(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new L(o,l)))}}),n.length===0)return N.EMPTY_NODE;const s=Ii(n,QC,o=>o.name,Ca);if(r){const o=Ii(n,Z.getCompare());return new N(s,ie(e),new Ze({".priority":o},{".priority":Z}))}else return new N(s,ie(e),Ze.Default)}else{let n=N.EMPTY_NODE;return we(t,(r,i)=>{if(st(t,r)&&r.substring(0,1)!=="."){const s=ie(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ie(e))}}ZC(ie);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE extends os{constructor(e){super(),this.indexPath_=e,C(!F(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Cn(e.name,n.name):s}makePost(e,n){const r=ie(e),i=N.EMPTY_NODE.updateChild(this.indexPath_,r);return new L(n,i)}maxPost(){const e=N.EMPTY_NODE.updateChild(this.indexPath_,Sr);return new L($t,e)}toString(){return tf(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE extends os{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Cn(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const r=ie(e);return new L(n,r)}toString(){return".value"}}const lE=new aE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(t){return{type:"value",snapshotNode:t}}function dn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function tr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function nr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function cE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(tr(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(dn(n,r)):o.trackChildChange(nr(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Z,(i,s)=>{n.hasChild(i)||r.trackChildChange(tr(i,s))}),n.isLeafNode()||n.forEachChild(Z,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(nr(i,s,o))}else r.trackChildChange(dn(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?N.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.indexedFilter_=new Ea(e.getIndex()),this.index_=e.getIndex(),this.startPost_=rr.getStartPost_(e),this.endPost_=rr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new L(n,r))||(r=N.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=N.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(N.EMPTY_NODE);const s=this;return n.forEachChild(Z,(o,a)=>{s.matches(new L(o,a))||(i=i.updateImmediateChild(o,N.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new rr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new L(n,r))||(r=N.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=N.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=N.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(N.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,N.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new L(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(nr(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(tr(n,d));const g=a.updateImmediateChild(n,N.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(dn(h.name,h.node)),g.updateImmediateChild(h.name,h.node)):g}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(tr(c.name,c.node)),s.trackChildChange(dn(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,N.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:un}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$t}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Z}copy(){const e=new Sa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function dE(t){return t.loadsAllData()?new Ea(t.getIndex()):t.hasLimit()?new uE(t):new rr(t)}function Fc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Z?n="$priority":t.index_===lE?n="$value":t.index_===Zt?n="$key":(C(t.index_ instanceof oE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ee(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ee(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ee(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ee(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ee(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Bc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Z&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Xh{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Er("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=wi.getListenId_(e,r),a={};this.listens_[o]=a;const l=Fc(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),ln(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=wi.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Fc(e._queryParams),r=e._path.toString(),i=new is;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+In(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Xn(a.responseText)}catch{Ie("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ie("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this.rootNode_=N.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(){return{value:null,children:new Map}}function hf(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=B(e);t.children.has(r)||t.children.set(r,Ci());const i=t.children.get(r);e=K(e),hf(i,e,n)}}function wo(t,e,n){t.value!==null?n(e,t.value):fE(t,(r,i)=>{const s=new j(e.toString()+"/"+r);wo(i,s,n)})}function fE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&we(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=10*1e3,gE=30*1e3,vE=5*60*1e3;class mE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new pE(e);const r=Uc+(gE-Uc)*Math.random();Wn(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;we(e,(i,s)=>{s>0&&st(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Wn(this.reportStats_.bind(this),Math.floor(Math.random()*2*vE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Fe||(Fe={}));function ff(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ta(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Da(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Fe.ACK_USER_WRITE,this.source=ff()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new j(e));return new Ei(W(),n,this.revert)}}else return C(B(this.path)===e,"operationForChild called for unrelated child."),new Ei(K(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n){this.source=e,this.path=n,this.type=Fe.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new ir(this.source,W()):new ir(this.source,K(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Fe.OVERWRITE}operationForChild(e){return F(this.path)?new Ht(this.source,W(),this.snap.getImmediateChild(e)):new Ht(this.source,K(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Fe.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new j(e));return n.isEmpty()?null:n.value?new Ht(this.source,W(),n.value):new sr(this.source,W(),n)}else return C(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new sr(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=B(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yE(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(cE(o.childName,o.snapshotNode))}),kn(t,i,"child_removed",e,r,n),kn(t,i,"child_added",e,r,n),kn(t,i,"child_moved",s,r,n),kn(t,i,"child_changed",e,r,n),kn(t,i,"value",e,r,n),i}function kn(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>IE(t,a,l)),o.forEach(a=>{const l=bE(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function bE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function IE(t,e,n){if(e.childName==null||n.childName==null)throw bn("Should only compare child_ events.");const r=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t,e){return{eventCache:t,serverCache:e}}function $n(t,e,n,r){return as(new Et(e,n,r),t.serverCache)}function pf(t,e,n,r){return as(t.eventCache,new Et(e,n,r))}function Si(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks;const wE=()=>(Ks||(Ks=new be(aC)),Ks);class J{constructor(e,n=wE()){this.value=e,this.children=n}static fromObject(e){let n=new J(null);return we(e,(r,i)=>{n=n.set(new j(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(F(e))return null;{const r=B(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:te(new j(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=B(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new J(null)}}set(e,n){if(F(e))return new J(n,this.children);{const r=B(e),s=(this.children.get(r)||new J(null)).set(K(e),n),o=this.children.insert(r,s);return new J(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=B(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new J(null):new J(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=B(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(F(e))return n;{const r=B(e),s=(this.children.get(r)||new J(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new J(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(te(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=B(e),o=this.children.get(s);return o?o.findOnPath_(K(e),te(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=B(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),te(n,i),r):new J(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(te(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.writeTree_=e}static empty(){return new Be(new J(null))}}function Hn(t,e,n){if(F(e))return new Be(new J(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=me(i,e);return s=s.updateChild(o,n),new Be(t.writeTree_.set(i,s))}else{const i=new J(n),s=t.writeTree_.setTree(e,i);return new Be(s)}}}function Wc(t,e,n){let r=t;return we(n,(i,s)=>{r=Hn(r,te(e,i),s)}),r}function $c(t,e){if(F(e))return Be.empty();{const n=t.writeTree_.setTree(e,new J(null));return new Be(n)}}function Co(t,e){return qt(t,e)!=null}function qt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(me(n.path,e)):null}function Hc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Z,(r,i)=>{e.push(new L(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new L(r,i.value))}),e}function yt(t,e){if(F(e))return t;{const n=qt(t,e);return n!=null?new Be(new J(n)):new Be(t.writeTree_.subtree(e))}}function Eo(t){return t.writeTree_.isEmpty()}function hn(t,e){return gf(W(),t.writeTree_,e)}function gf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=gf(te(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(te(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t,e){return yf(e,t)}function CE(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Hn(t.visibleWrites,e,n)),t.lastWriteId=r}function EE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function SE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&TE(a,r.path)?i=!1:Le(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return DE(t),!0;if(r.snap)t.visibleWrites=$c(t.visibleWrites,r.path);else{const a=r.children;we(a,l=>{t.visibleWrites=$c(t.visibleWrites,te(r.path,l))})}return!0}else return!1}function TE(t,e){if(t.snap)return Le(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Le(te(t.path,n),e))return!0;return!1}function DE(t){t.visibleWrites=vf(t.allWrites,xE,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function xE(t){return t.visible}function vf(t,e,n){let r=Be.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Le(n,o)?(a=me(n,o),r=Hn(r,a,s.snap)):Le(o,n)&&(a=me(o,n),r=Hn(r,W(),s.snap.getChild(a)));else if(s.children){if(Le(n,o))a=me(n,o),r=Wc(r,a,s.children);else if(Le(o,n))if(a=me(o,n),F(a))r=Wc(r,W(),s.children);else{const l=ln(s.children,B(a));if(l){const c=l.getChild(K(a));r=Hn(r,W(),c)}}}else throw bn("WriteRecord should have .snap or .children")}}return r}function mf(t,e,n,r,i){if(!r&&!i){const s=qt(t.visibleWrites,e);if(s!=null)return s;{const o=yt(t.visibleWrites,e);if(Eo(o))return n;if(n==null&&!Co(o,W()))return null;{const a=n||N.EMPTY_NODE;return hn(o,a)}}}else{const s=yt(t.visibleWrites,e);if(!i&&Eo(s))return n;if(!i&&n==null&&!Co(s,W()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Le(c.path,e)||Le(e,c.path))},a=vf(t.allWrites,o,e),l=n||N.EMPTY_NODE;return hn(a,l)}}}function RE(t,e,n){let r=N.EMPTY_NODE;const i=qt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Z,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=yt(t.visibleWrites,e);return n.forEachChild(Z,(o,a)=>{const l=hn(yt(s,new j(o)),a);r=r.updateImmediateChild(o,l)}),Hc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=yt(t.visibleWrites,e);return Hc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function PE(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=te(e,n);if(Co(t.visibleWrites,s))return null;{const o=yt(t.visibleWrites,s);return Eo(o)?i.getChild(n):hn(o,i.getChild(n))}}function AE(t,e,n,r){const i=te(e,n),s=qt(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=yt(t.visibleWrites,i);return hn(o,r.getNode().getImmediateChild(n))}else return null}function NE(t,e){return qt(t.visibleWrites,e)}function OE(t,e,n,r,i,s,o){let a;const l=yt(t.visibleWrites,e),c=qt(l,W());if(c!=null)a=c;else if(n!=null)a=hn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=h.getNext();for(;f&&u.length<i;)d(f,r)!==0&&u.push(f),f=h.getNext();return u}else return[]}function kE(){return{visibleWrites:Be.empty(),allWrites:[],lastWriteId:-1}}function Ti(t,e,n,r){return mf(t.writeTree,t.treePath,e,n,r)}function xa(t,e){return RE(t.writeTree,t.treePath,e)}function Gc(t,e,n,r){return PE(t.writeTree,t.treePath,e,n,r)}function Di(t,e){return NE(t.writeTree,te(t.treePath,e))}function ME(t,e,n,r,i,s){return OE(t.writeTree,t.treePath,e,n,r,i,s)}function Ra(t,e,n){return AE(t.writeTree,t.treePath,e,n)}function _f(t,e){return yf(te(t.treePath,e),t.writeTree)}function yf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,nr(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,tr(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,dn(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,nr(r,e.snapshotNode,i.oldSnap));else throw bn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const bf=new FE;class Pa{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Et(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ra(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gt(this.viewCache_),s=ME(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t){return{filter:t}}function UE(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function WE(t,e,n,r,i){const s=new LE;let o,a;if(n.type===Fe.OVERWRITE){const c=n;c.source.fromUser?o=So(t,e,c.path,c.snap,r,i,s):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!F(c.path),o=xi(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Fe.MERGE){const c=n;c.source.fromUser?o=HE(t,e,c.path,c.children,r,i,s):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=To(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Fe.ACK_USER_WRITE){const c=n;c.revert?o=qE(t,e,c.path,r,i,s):o=GE(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Fe.LISTEN_COMPLETE)o=VE(t,e,n.path,r,s);else throw bn("Unknown operation type: "+n.type);const l=s.getChanges();return $E(e,o,l),{viewCache:o,changes:l}}function $E(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Si(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(df(Si(e)))}}function If(t,e,n,r,i,s){const o=e.eventCache;if(Di(r,n)!=null)return e;{let a,l;if(F(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Gt(e),u=c instanceof N?c:N.EMPTY_NODE,d=xa(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Ti(r,Gt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=B(n);if(c===".priority"){C(Ct(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Gc(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=K(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Gc(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Ra(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return $n(e,a,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function xi(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(F(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),f,null)}else{const f=B(n);if(!l.isCompleteForPath(n)&&Ct(n)>1)return e;const p=K(n),v=l.getNode().getImmediateChild(f).updateChild(p,r);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,p,bf,null)}const d=pf(e,c,l.isFullyInitialized()||F(n),u.filtersNodes()),h=new Pa(i,d,s);return If(t,d,n,i,h,a)}function So(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new Pa(i,e,s);if(F(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=$n(e,c,!0,t.filter.filtersNodes());else{const d=B(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=$n(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=K(n),f=a.getNode().getImmediateChild(d);let p;if(F(h))p=r;else{const g=u.getCompleteChild(d);g!=null?ef(h)===".priority"&&g.getChild(nf(h)).isEmpty()?p=g:p=g.updateChild(h,r):p=N.EMPTY_NODE}if(f.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),d,p,h,u,o);l=$n(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Vc(t,e){return t.eventCache.isCompleteForChild(e)}function HE(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=te(n,l);Vc(e,B(u))&&(a=So(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=te(n,l);Vc(e,B(u))||(a=So(t,a,u,c,i,s,o))}),a}function qc(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function To(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;F(n)?c=r:c=new J(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=qc(t,f,h);l=xi(t,l,new j(d),p,i,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),g=qc(t,p,h);l=xi(t,l,new j(d),g,i,s,o,a)}}),l}function GE(t,e,n,r,i,s,o){if(Di(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(F(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return xi(t,e,n,l.getNode().getChild(n),i,s,a,o);if(F(n)){let c=new J(null);return l.getNode().forEachChild(Zt,(u,d)=>{c=c.set(new j(u),d)}),To(t,e,n,c,i,s,a,o)}else return e}else{let c=new J(null);return r.foreach((u,d)=>{const h=te(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),To(t,e,n,c,i,s,a,o)}}function VE(t,e,n,r,i){const s=e.serverCache,o=pf(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return If(t,o,n,r,bf,i)}function qE(t,e,n,r,i,s){let o;if(Di(r,n)!=null)return e;{const a=new Pa(r,e,i),l=e.eventCache.getNode();let c;if(F(n)||B(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ti(r,Gt(e));else{const d=e.serverCache.getNode();C(d instanceof N,"serverChildren would be complete if leaf node"),u=xa(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=B(n);let d=Ra(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,K(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,N.EMPTY_NODE,K(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ti(r,Gt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Di(r,W())!=null,$n(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Ea(r.getIndex()),s=dE(r);this.processor_=BE(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(N.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(N.EMPTY_NODE,a.getNode(),null),u=new Et(l,o.isFullyInitialized(),i.filtersNodes()),d=new Et(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=as(d,u),this.eventGenerator_=new _E(this.query_)}get query(){return this.query_}}function zE(t){return t.viewCache_.serverCache.getNode()}function KE(t){return Si(t.viewCache_)}function YE(t,e){const n=Gt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(B(e)).isEmpty())?n.getChild(e):null}function jc(t){return t.eventRegistrations_.length===0}function JE(t,e){t.eventRegistrations_.push(e)}function zc(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Kc(t,e,n,r){e.type===Fe.MERGE&&e.source.queryId!==null&&(C(Gt(t.viewCache_),"We should always have a full cache before handling merges"),C(Si(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=WE(t.processor_,i,e,n,r);return UE(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,wf(t,s.changes,s.viewCache.eventCache.getNode(),null)}function QE(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Z,(s,o)=>{r.push(dn(s,o))}),n.isFullyInitialized()&&r.push(df(n.getNode())),wf(t,r,n.getNode(),e)}function wf(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return yE(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri;class Cf{constructor(){this.views=new Map}}function XE(t){C(!Ri,"__referenceConstructor has already been defined"),Ri=t}function ZE(){return C(Ri,"Reference.ts has not been loaded"),Ri}function eS(t){return t.views.size===0}function Aa(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),Kc(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Kc(o,e,n,r));return s}}function Ef(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ti(n,i?r:null),l=!1;a?l=!0:r instanceof N?(a=xa(n,r),l=!1):(a=N.EMPTY_NODE,l=!1);const c=as(new Et(a,l,!1),new Et(r,i,!1));return new jE(e,c)}return o}function tS(t,e,n,r,i,s){const o=Ef(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),JE(o,n),QE(o,n)}function nS(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=St(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(zc(c,n,r)),jc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(zc(l,n,r)),jc(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!St(t)&&s.push(new(ZE())(e._repo,e._path)),{removed:s,events:o}}function Sf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function bt(t,e){let n=null;for(const r of t.views.values())n=n||YE(r,e);return n}function Tf(t,e){if(e._queryParams.loadsAllData())return cs(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Df(t,e){return Tf(t,e)!=null}function St(t){return cs(t)!=null}function cs(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi;function rS(t){C(!Pi,"__referenceConstructor has already been defined"),Pi=t}function iS(){return C(Pi,"Reference.ts has not been loaded"),Pi}let sS=1;class Yc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=kE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xf(t,e,n,r,i){return CE(t.pendingWriteTree_,e,n,r,i),i?Dr(t,new Ht(ff(),e,n)):[]}function Mt(t,e,n=!1){const r=EE(t.pendingWriteTree_,e);if(SE(t.pendingWriteTree_,e)){let s=new J(null);return r.snap!=null?s=s.set(W(),!0):we(r.children,o=>{s=s.set(new j(o),!0)}),Dr(t,new Ei(r.path,s,n))}else return[]}function Tr(t,e,n){return Dr(t,new Ht(Ta(),e,n))}function oS(t,e,n){const r=J.fromObject(n);return Dr(t,new sr(Ta(),e,r))}function aS(t,e){return Dr(t,new ir(Ta(),e))}function lS(t,e,n){const r=Oa(t,n);if(r){const i=ka(r),s=i.path,o=i.queryId,a=me(s,e),l=new ir(Da(o),a);return Ma(t,s,l)}else return[]}function Rf(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Df(o,e))){const l=nS(o,e,n,r);eS(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,f)=>St(f));if(u&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const f=hS(h);for(let p=0;p<f.length;++p){const g=f[p],v=g.query,m=Of(t,g);t.listenProvider_.startListening(Gn(v),or(t,v),m.hashFn,m.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(Gn(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(us(h));t.listenProvider_.stopListening(Gn(h),f)}))}fS(t,c)}return a}function Pf(t,e,n,r){const i=Oa(t,r);if(i!=null){const s=ka(i),o=s.path,a=s.queryId,l=me(o,e),c=new Ht(Da(a),l,n);return Ma(t,o,c)}else return[]}function cS(t,e,n,r){const i=Oa(t,r);if(i){const s=ka(i),o=s.path,a=s.queryId,l=me(o,e),c=J.fromObject(n),u=new sr(Da(a),l,c);return Ma(t,o,u)}else return[]}function uS(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,f)=>{const p=me(h,i);s=s||bt(f,p),o=o||St(f)});let a=t.syncPointTree_.get(i);a?(o=o||St(a),s=s||bt(a,W())):(a=new Cf,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=N.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,p)=>{const g=bt(p,W());g&&(s=s.updateImmediateChild(f,g))}));const c=Df(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=us(e);C(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=pS();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const u=ls(t.pendingWriteTree_,i);let d=tS(a,e,n,u,s,l);if(!c&&!o&&!r){const h=Tf(a,e);d=d.concat(gS(t,e,h))}return d}function Na(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=me(o,e),c=bt(a,l);if(c)return c});return mf(i,e,s,n,!0)}function dS(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=me(c,n);r=r||bt(u,d)});let i=t.syncPointTree_.get(n);i?r=r||bt(i,W()):(i=new Cf,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Et(r,!0,!1):null,a=ls(t.pendingWriteTree_,e._path),l=Ef(i,e,a,s?o.getNode():N.EMPTY_NODE,s);return KE(l)}function Dr(t,e){return Af(e,t.syncPointTree_,null,ls(t.pendingWriteTree_,W()))}function Af(t,e,n,r){if(F(t.path))return Nf(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=bt(i,W()));let s=[];const o=B(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=_f(r,o);s=s.concat(Af(a,l,c,u))}return i&&(s=s.concat(Aa(i,t,r,n))),s}}function Nf(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=bt(i,W()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=_f(r,o),u=t.operationForChild(o);u&&(s=s.concat(Nf(u,a,l,c)))}),i&&(s=s.concat(Aa(i,t,r,n))),s}function Of(t,e){const n=e.query,r=or(t,n);return{hashFn:()=>(zE(e)||N.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?lS(t,n._path,r):aS(t,n._path);{const s=uC(i,n);return Rf(t,n,null,s)}}}}function or(t,e){const n=us(e);return t.queryToTagMap.get(n)}function us(t){return t._path.toString()+"$"+t._queryIdentifier}function Oa(t,e){return t.tagToQueryMap.get(e)}function ka(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new j(t.substr(0,e))}}function Ma(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=ls(t.pendingWriteTree_,e);return Aa(r,n,i,null)}function hS(t){return t.fold((e,n,r)=>{if(n&&St(n))return[cs(n)];{let i=[];return n&&(i=Sf(n)),we(r,(s,o)=>{i=i.concat(o)}),i}})}function Gn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(iS())(t._repo,t._path):t}function fS(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=us(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function pS(){return sS++}function gS(t,e,n){const r=e._path,i=or(t,e),s=Of(t,n),o=t.listenProvider_.startListening(Gn(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)C(!St(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!F(c)&&u&&St(u))return[cs(u).query];{let h=[];return u&&(h=h.concat(Sf(u).map(f=>f.query))),we(d,(f,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Gn(u),or(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new La(n)}node(){return this.node_}}class Fa{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=te(this.path_,e);return new Fa(this.syncTree_,n)}node(){return Na(this.syncTree_,this.path_)}}const vS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Jc=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _S(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},_S=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},yS=function(t,e,n,r){return Ba(e,new Fa(n,t),r)},kf=function(t,e,n){return Ba(t,new La(e),n)};function Ba(t,e,n){const r=t.getPriority().val(),i=Jc(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Jc(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ne(a,ie(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ne(i))),o.forEachChild(Z,(a,l)=>{const c=Ba(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Wa(t,e){let n=e instanceof j?e:new j(e),r=t,i=B(n);for(;i!==null;){const s=ln(r.node.children,i)||{children:{},childCount:0};r=new Ua(i,r,s),n=K(n),i=B(n)}return r}function Sn(t){return t.node.value}function Mf(t,e){t.node.value=e,Do(t)}function Lf(t){return t.node.childCount>0}function bS(t){return Sn(t)===void 0&&!Lf(t)}function ds(t,e){we(t.node.children,(n,r)=>{e(new Ua(n,t,r))})}function Ff(t,e,n,r){n&&!r&&e(t),ds(t,i=>{Ff(i,e,!0,r)}),n&&r&&e(t)}function IS(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function xr(t){return new j(t.parent===null?t.name:xr(t.parent)+"/"+t.name)}function Do(t){t.parent!==null&&wS(t.parent,t.name,t)}function wS(t,e,n){const r=bS(n),i=st(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Do(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Do(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=/[\[\].#$\/\u0000-\u001F\u007F]/,ES=/[\[\].#$\u0000-\u001F\u007F]/,Ys=10*1024*1024,Bf=function(t){return typeof t=="string"&&t.length!==0&&!CS.test(t)},Uf=function(t){return typeof t=="string"&&t.length!==0&&!ES.test(t)},SS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Uf(t)},TS=function(t,e,n,r){r&&e===void 0||$a(pa(t,"value"),e,n)},$a=function(t,e,n){const r=n instanceof j?new GC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Nt(r));if(typeof e=="function")throw new Error(t+"contains a function "+Nt(r)+" with contents = "+e.toString());if(Oh(e))throw new Error(t+"contains "+e.toString()+" "+Nt(r));if(typeof e=="string"&&e.length>Ys/3&&ss(e)>Ys)throw new Error(t+"contains a string greater than "+Ys+" utf8 bytes "+Nt(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(we(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Bf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Nt(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);VC(r,o),$a(t,a,r),qC(r)}),i&&s)throw new Error(t+' contains ".value" child '+Nt(r)+" in addition to actual children.")}},Wf=function(t,e,n,r){if(!(r&&n===void 0)&&!Uf(n))throw new Error(pa(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},DS=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Wf(t,e,n,r)},xS=function(t,e){if(B(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},RS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Bf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!SS(n))throw new Error(pa(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $f(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!rf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ze(t,e,n){$f(t,n),AS(t,r=>Le(r,e)||Le(e,r))}function AS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(NS(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function NS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Lt&&fe("event: "+n.toString()),En(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="repo_interrupt",kS=25;class MS{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new PS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ci(),this.transactionQueueTree_=new Ua,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function LS(t,e,n){if(t.stats_=ba(t.repoInfo_),t.forceRestClient_||pC())t.server_=new wi(t.repoInfo_,(r,i,s,o)=>{Qc(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ee(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new nt(t.repoInfo_,e,(r,i,s,o)=>{Qc(t,r,i,s,o)},r=>{Xc(t,r)},r=>{BS(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=yC(t.repoInfo_,()=>new mE(t.stats_,t.server_)),t.infoData_=new hE,t.infoSyncTree_=new Yc({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Tr(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ga(t,"connected",!1),t.serverSyncTree_=new Yc({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);ze(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function FS(t){const n=t.infoData_.getNode(new j(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ha(t){return vS({timestamp:FS(t)})}function Qc(t,e,n,r,i){t.dataUpdateCount++;const s=new j(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=vi(n,c=>ie(c));o=cS(t.serverSyncTree_,s,l,i)}else{const l=ie(n);o=Pf(t.serverSyncTree_,s,l,i)}else if(r){const l=vi(n,c=>ie(c));o=oS(t.serverSyncTree_,s,l)}else{const l=ie(n);o=Tr(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=fs(t,s)),ze(t.eventQueue_,a,o)}function Xc(t,e){Ga(t,"connected",e),e===!1&&$S(t)}function BS(t,e){we(e,(n,r)=>{Ga(t,n,r)})}function Ga(t,e,n){const r=new j("/.info/"+e),i=ie(n);t.infoData_.updateSnapshot(r,i);const s=Tr(t.infoSyncTree_,r,i);ze(t.eventQueue_,r,s)}function Hf(t){return t.nextWriteId_++}function US(t,e,n){const r=dS(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ie(i).withIndex(e._queryParams.getIndex());uS(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Tr(t.serverSyncTree_,e._path,s);else{const a=or(t.serverSyncTree_,e);o=Pf(t.serverSyncTree_,e._path,s,a)}return ze(t.eventQueue_,e._path,o),Rf(t.serverSyncTree_,e,n,null,!0),s},i=>(hs(t,"get for query "+ee(e)+" failed: "+i),Promise.reject(new Error(i))))}function WS(t,e,n,r,i){hs(t,"set",{path:e.toString(),value:n,priority:r});const s=Ha(t),o=ie(n,r),a=Na(t.serverSyncTree_,e),l=kf(o,a,s),c=Hf(t),u=xf(t.serverSyncTree_,e,l,c,!0);$f(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,f)=>{const p=h==="ok";p||Ie("set at "+e+" failed: "+h);const g=Mt(t.serverSyncTree_,c,!p);ze(t.eventQueue_,e,g),GS(t,i,h,f)});const d=zf(t,e);fs(t,d),ze(t.eventQueue_,d,[])}function $S(t){hs(t,"onDisconnectEvents");const e=Ha(t),n=Ci();wo(t.onDisconnect_,W(),(i,s)=>{const o=yS(i,s,t.serverSyncTree_,e);hf(n,i,o)});let r=[];wo(n,W(),(i,s)=>{r=r.concat(Tr(t.serverSyncTree_,i,s));const o=zf(t,i);fs(t,o)}),t.onDisconnect_=Ci(),ze(t.eventQueue_,W(),r)}function HS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(OS)}function hs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),fe(n,...e)}function GS(t,e,n,r){e&&En(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Gf(t,e,n){return Na(t.serverSyncTree_,e,n)||N.EMPTY_NODE}function Va(t,e=t.transactionQueueTree_){if(e||ps(t,e),Sn(e)){const n=qf(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&VS(t,xr(e),n)}else Lf(e)&&ds(e,n=>{Va(t,n)})}function VS(t,e,n){const r=n.map(c=>c.currentWriteId),i=Gf(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=me(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{hs(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Mt(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ps(t,Wa(t.transactionQueueTree_,e)),Va(t,t.transactionQueueTree_),ze(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)En(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ie("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}fs(t,e)}},o)}function fs(t,e){const n=Vf(t,e),r=xr(n),i=qf(t,n);return qS(t,i,r),r}function qS(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=me(n,l.path);let u=!1,d;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Mt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=kS)u=!0,d="maxretry",i=i.concat(Mt(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Gf(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){$a("transaction failed: Data returned ",f,l.path);let p=ie(f);typeof f=="object"&&f!=null&&st(f,".priority")||(p=p.updatePriority(h.getPriority()));const v=l.currentWriteId,m=Ha(t),_=kf(p,h,m);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=_,l.currentWriteId=Hf(t),o.splice(o.indexOf(v),1),i=i.concat(xf(t.serverSyncTree_,l.path,_,l.currentWriteId,l.applyLocally)),i=i.concat(Mt(t.serverSyncTree_,v,!0))}else u=!0,d="nodata",i=i.concat(Mt(t.serverSyncTree_,l.currentWriteId,!0))}ze(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}ps(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)En(r[a]);Va(t,t.transactionQueueTree_)}function Vf(t,e){let n,r=t.transactionQueueTree_;for(n=B(e);n!==null&&Sn(r)===void 0;)r=Wa(r,n),e=K(e),n=B(e);return r}function qf(t,e){const n=[];return jf(t,e,n),n.sort((r,i)=>r.order-i.order),n}function jf(t,e,n){const r=Sn(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ds(e,i=>{jf(t,i,n)})}function ps(t,e){const n=Sn(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Mf(e,n.length>0?n:void 0)}ds(e,r=>{ps(t,r)})}function zf(t,e){const n=xr(Vf(t,e)),r=Wa(t.transactionQueueTree_,e);return IS(r,i=>{Js(t,i)}),Js(t,r),Ff(r,i=>{Js(t,i)}),n}function Js(t,e){const n=Sn(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Mt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Mf(e,void 0):n.length=s+1,ze(t.eventQueue_,xr(e),i);for(let o=0;o<r.length;o++)En(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function zS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ie(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zc=function(t,e){const n=KS(t),r=n.namespace;n.domain==="firebase.com"&&rt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&rt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||sC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new qh(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new j(n.pathString)}},KS=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=jS(t.substring(u,d)));const h=zS(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ee(this.snapshot.exportVal())}}class JS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:ef(this._path)}get ref(){return new ot(this._repo,this._path)}get _queryIdentifier(){const e=Bc(this._queryParams),n=_a(e);return n==="{}"?"default":n}get _queryObject(){return Bc(this._queryParams)}isEqual(e){if(e=Oe(e),!(e instanceof qa))return!1;const n=this._repo===e._repo,r=rf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+HC(this._path)}}class ot extends qa{constructor(e,n){super(e,n,new Sa,!1)}get parent(){const e=nf(this._path);return e===null?null:new ot(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ar{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new j(e),r=Ai(this.ref,e);return new ar(this._node.getChild(n),r,Z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ar(i,Ai(this.ref,r),Z)))}hasChild(e){const n=new j(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function eu(t,e){return t=Oe(t),t._checkNotDeleted("ref"),e!==void 0?Ai(t._root,e):t._root}function Ai(t,e){return t=Oe(t),B(t._path)===null?DS("child","path",e,!1):Wf("child","path",e,!1),new ot(t._repo,te(t._path,e))}function XS(t,e){t=Oe(t),xS("set",t._path),TS("set",e,t._path,!1);const n=new is;return WS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ZS(t){t=Oe(t);const e=new QS(()=>{}),n=new ja(e);return US(t._repo,t,n).then(r=>new ar(r,new ot(t._repo,t._path),t._queryParams.getIndex()))}class ja{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new YS("value",this,new ar(e.snapshotNode,new ot(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new JS(this,e,n):null}matches(e){return e instanceof ja?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}XE(ot);rS(ot);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0="FIREBASE_DATABASE_EMULATOR_HOST",xo={};let t0=!1;function n0(t,e,n,r){t.repoInfo_=new qh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function r0(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||rt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),fe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zc(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[e0]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Zc(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Xt(Xt.OWNER):new vC(t.name,t.options,e);RS("Invalid Firebase Database URL",o),F(o.path)||rt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=s0(a,t,u,new gC(t.name,n));return new o0(d,t)}function i0(t,e){const n=xo[e];(!n||n[t.key]!==t)&&rt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),HS(t),delete n[t.key]}function s0(t,e,n,r){let i=xo[e.name];i||(i={},xo[e.name]=i);let s=i[t.toURLString()];return s&&rt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new MS(t,t0,n,r),i[t.toURLString()]=s,s}class o0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(LS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ot(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(i0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&rt("Cannot call "+e+" on a deleted database.")}}function tu(t=Dh(),e){const n=ma(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=AI("database");r&&a0(n,...r)}return n}function a0(t,e,n,r={}){t=Oe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&rt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&rt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Xt(Xt.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:NI(r.mockUserToken,t.app.options.projectId);s=new Xt(o)}n0(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t){eC(wn),cn(new Ut("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return r0(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),_t(Ic,wc,t),_t(Ic,wc,"esm2017")}nt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};nt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};l0();function za(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Kf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c0=Kf,Yf=new wr("auth","Firebase",Kf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new ga("@firebase/auth");function u0(t,...e){Ni.logLevel<=V.WARN&&Ni.warn(`Auth (${wn}): ${t}`,...e)}function Qr(t,...e){Ni.logLevel<=V.ERROR&&Ni.error(`Auth (${wn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,...e){throw Ka(t,...e)}function qe(t,...e){return Ka(t,...e)}function Jf(t,e,n){const r=Object.assign(Object.assign({},c0()),{[e]:n});return new wr("auth","Firebase",r).create(e,{appName:t.name})}function d0(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ke(t,"argument-error"),Jf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ka(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Yf.create(t,...e)}function O(t,e,...n){if(!t)throw Ka(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qr(e),new Error(e)}function it(t,e){t||et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function h0(){return nu()==="http:"||nu()==="https:"}function nu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h0()||OI()||"connection"in navigator)?navigator.onLine:!0}function p0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n){this.shortDelay=e,this.longDelay=n,it(n>e,"Short delay should be less than long delay!"),this.isMobile=fa()||Ih()}get(){return f0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t,e){it(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=new Rr(3e4,6e4);function Xf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pr(t,e,n,r,i={}){return Zf(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=In(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Qf.fetch()(ep(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Zf(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},g0),e);try{const i=new _0(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw jr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw jr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw jr(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Jf(t,u,c);Ke(t,u)}}catch(i){if(i instanceof Dt)throw i;Ke(t,"network-request-failed",{message:String(i)})}}async function m0(t,e,n,r,i={}){const s=await Pr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ke(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ep(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ya(t.config,i):`${t.config.apiScheme}://${i}`}class _0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),v0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qe(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y0(t,e){return Pr(t,"POST","/v1/accounts:delete",e)}async function b0(t,e){return Pr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function I0(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),i=Ja(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vn(Qs(i.auth_time)),issuedAtTime:Vn(Qs(i.iat)),expirationTime:Vn(Qs(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qs(t){return Number(t)*1e3}function Ja(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qr("JWT malformed, contained fewer than 3 sections"),null;try{const i=gi(n);return i?JSON.parse(i):(Qr("Failed to decode base64 JWT payload"),null)}catch(i){return Qr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function w0(t){const e=Ja(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dt&&C0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function C0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vn(this.lastLoginAt),this.creationTime=Vn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t){var e;const n=t.auth,r=await t.getIdToken(),i=await lr(t,b0(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?D0(s.providerUserInfo):[],a=T0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tp(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function S0(t){const e=Oe(t);await Oi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function T0(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function D0(t){return t.map(e=>{var{providerId:n}=e,r=za(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(t,e){const n=await Zf(t,{},async()=>{const r=In({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ep(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):w0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await x0(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new cr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cr,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=za(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new E0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new tp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await lr(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return I0(this,e)}reload(){return S0(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Oi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await lr(this,y0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:b,isAnonymous:P,providerData:y,stsTokenManager:E}=n;O(I&&E,e,"internal-error");const S=cr.fromJSON(this.name,E);O(typeof I=="string",e,"internal-error"),ct(d,e.name),ct(h,e.name),O(typeof b=="boolean",e,"internal-error"),O(typeof P=="boolean",e,"internal-error"),ct(f,e.name),ct(p,e.name),ct(g,e.name),ct(v,e.name),ct(m,e.name),ct(_,e.name);const x=new Ft({uid:I,auth:e,email:h,emailVerified:b,displayName:d,isAnonymous:P,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:S,createdAt:m,lastLoginAt:_});return y&&Array.isArray(y)&&(x.providerData=y.map(M=>Object.assign({},M))),v&&(x._redirectEventId=v),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new cr;i.updateFromServerResponse(n);const s=new Ft({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Oi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=new Map;function tt(t){it(t instanceof Function,"Expected a class definition");let e=ru.get(t);return e?(it(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ru.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}np.type="NONE";const iu=np;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t,e,n){return`firebase:${t}:${e}:${n}`}class en{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new en(tt(iu),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||tt(iu);const o=Xr(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Ft._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new en(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new en(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ap(e))return"Blackberry";if(lp(e))return"Webos";if(Qa(e))return"Safari";if((e.includes("chrome/")||ip(e))&&!e.includes("edge/"))return"Chrome";if(op(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rp(t=ge()){return/firefox\//i.test(t)}function Qa(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ip(t=ge()){return/crios\//i.test(t)}function sp(t=ge()){return/iemobile/i.test(t)}function op(t=ge()){return/android/i.test(t)}function ap(t=ge()){return/blackberry/i.test(t)}function lp(t=ge()){return/webos/i.test(t)}function gs(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function R0(t=ge()){var e;return gs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function P0(){return kI()&&document.documentMode===10}function cp(t=ge()){return gs(t)||op(t)||lp(t)||ap(t)||/windows phone/i.test(t)||sp(t)}function A0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t,e=[]){let n;switch(t){case"Browser":n=su(ge());break;case"Worker":n=`${su(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wn}/${r}`}async function dp(t,e){return Pr(t,"GET","/v2/recaptchaConfig",Xf(t,e))}function ou(t){return t!==void 0&&t.enterprise!==void 0}class hp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function fp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=qe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",N0().appendChild(r)})}function O0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const k0="https://www.google.com/recaptcha/enterprise.js?render=",M0="recaptcha-enterprise",L0="NO_RECAPTCHA";class F0{constructor(e){this.type=M0,this.auth=Ar(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{dp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new hp(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ou(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(L0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ou(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}fp(k0+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new au(this),this.idTokenSubscription=new au(this),this.beforeStateQueue=new B0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await en.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Oi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=p0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}async initializeRecaptchaConfig(){const e=await dp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new hp(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new F0(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await en.create(this,[tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=up(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&u0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ar(t){return Oe(t)}class au{constructor(e){this.auth=e,this.observer=null,this.addObserver=GI(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t,e){const n=ma(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(mi(s,e??{}))return i;Ke(i,"already-initialized")}return n.initialize({options:e})}function $0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function H0(t,e,n){const r=Ar(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=pp(e),{host:o,port:a}=G0(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||V0()}function pp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function G0(t){const e=pp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:lu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:lu(o)}}}function lu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function V0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(t,e){return m0(t,"POST","/v1/accounts:signInWithIdp",Xf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="http://localhost";class Vt extends gp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=za(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return tn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,tn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,tn(e,n)}buildRequest(){const e={requestUri:q0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=In(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Xa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Nr{constructor(){super("facebook.com")}static credential(e){return Vt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";ut.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Nr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vt._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qe.credential(n,r)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Nr{constructor(){super("github.com")}static credential(e){return Vt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.GITHUB_SIGN_IN_METHOD="github.com";dt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Nr{constructor(){super("twitter.com")}static credential(e,n){return Vt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ht.credential(n,r)}catch{return null}}}ht.TWITTER_SIGN_IN_METHOD="twitter.com";ht.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ft._fromIdTokenResponse(e,r,i),o=cu(r);return new fn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=cu(r);return new fn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function cu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Dt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ki.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ki(e,n,r,i)}}function vp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ki._fromErrorAndOperation(t,s,e,r):s})}async function j0(t,e,n=!1){const r=await lr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z0(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await lr(t,vp(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=Ja(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),fn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ke(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K0(t,e,n=!1){const r="signIn",i=await vp(t,r,e),s=await fn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Y0(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function J0(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}const Mi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mi,"1"),this.storage.removeItem(Mi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(){const t=ge();return Qa(t)||gs(t)}const X0=1e3,Z0=10;class _p extends mp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Q0()&&A0(),this.fallbackToPolling=cp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);P0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Z0):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},X0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_p.type="LOCAL";const eT=_p;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp extends mp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yp.type="SESSION";const bp=yp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await tT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Za("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return window}function rT(t){je().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function iT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oT(){return Ip()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="firebaseLocalStorageDb",aT=1,Li="firebaseLocalStorage",Cp="fbase_key";class Or{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ms(t,e){return t.transaction([Li],e?"readwrite":"readonly").objectStore(Li)}function lT(){const t=indexedDB.deleteDatabase(wp);return new Or(t).toPromise()}function Po(){const t=indexedDB.open(wp,aT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Li,{keyPath:Cp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Li)?e(r):(r.close(),await lT(),e(await Po()))})})}async function uu(t,e,n){const r=ms(t,!0).put({[Cp]:e,value:n});return new Or(r).toPromise()}async function cT(t,e){const n=ms(t,!1).get(e),r=await new Or(n).toPromise();return r===void 0?null:r.value}function du(t,e){const n=ms(t,!0).delete(e);return new Or(n).toPromise()}const uT=800,dT=3;class Ep{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Po(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ip()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vs._getInstance(oT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iT(),!this.activeServiceWorker)return;this.sender=new nT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Po();return await uu(e,Mi,"1"),await du(e,Mi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uu(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>du(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ms(i,!1).getAll();return new Or(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ep.type="LOCAL";const hT=Ep;new Rr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e){return e?tt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends gp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return tn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fT(t){return K0(t.auth,new el(t),t.bypassAuthState)}function pT(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),z0(n,new el(t),t.bypassAuthState)}async function gT(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),j0(n,new el(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fT;case"linkViaPopup":case"linkViaRedirect":return gT;case"reauthViaPopup":case"reauthViaRedirect":return pT;default:Ke(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=new Rr(2e3,1e4);class Jt extends Tp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=Za();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vT.get())};e()}}Jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="pendingRedirect",Zr=new Map;class _T extends Tp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zr.get(this.auth._key());if(!e){try{const r=await yT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zr.set(this.auth._key(),e)}return this.bypassAuthState||Zr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yT(t,e){const n=xp(e),r=Dp(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function bT(t,e){return Dp(t)._set(xp(e),"true")}function IT(t,e){Zr.set(t._key(),e)}function Dp(t){return tt(t._redirectPersistence)}function xp(t){return Xr(mT,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t,e,n){return CT(t,e,n)}async function CT(t,e,n){const r=Ar(t);d0(t,e,Xa),await r._initializationPromise;const i=Sp(r,n);return await bT(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function ET(t,e,n=!1){const r=Ar(t),i=Sp(r,e),o=await new _T(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=10*60*1e3;class TT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ST&&this.cachedEventUids.clear(),this.cachedEventUids.has(hu(e))}saveEventToCache(e){this.cachedEventUids.add(hu(e)),this.lastProcessedEventTime=Date.now()}}function hu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(t,e={}){return Pr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PT=/^https?/;async function AT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xT(t);for(const n of e)try{if(NT(n))return}catch{}Ke(t,"unauthorized-domain")}function NT(t){const e=Ro(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!PT.test(n))return!1;if(RT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=new Rr(3e4,6e4);function fu(){const t=je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kT(t){return new Promise((e,n)=>{var r,i,s;function o(){fu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fu(),n(qe(t,"network-request-failed"))},timeout:OT.get()})}if(!((i=(r=je().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=je().gapi)===null||s===void 0)&&s.load)o();else{const a=O0("iframefcb");return je()[a]=()=>{gapi.load?o():n(qe(t,"network-request-failed"))},fp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ei=null,e})}let ei=null;function MT(t){return ei=ei||kT(t),ei}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=new Rr(5e3,15e3),FT="__/auth/iframe",BT="emulator/auth/iframe",UT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $T(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ya(e,BT):`https://${t.config.authDomain}/${FT}`,r={apiKey:e.apiKey,appName:t.name,v:wn},i=WT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${In(r).slice(1)}`}async function HT(t){const e=await MT(t),n=je().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:$T(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=qe(t,"network-request-failed"),a=je().setTimeout(()=>{s(o)},LT.get());function l(){je().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VT=500,qT=600,jT="_blank",zT="http://localhost";class pu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KT(t,e,n,r=VT,i=qT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},GT),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ge().toLowerCase();n&&(a=ip(c)?jT:n),rp(c)&&(e=e||zT,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(R0(c)&&a!=="_self")return YT(e||"",a),new pu(null);const d=window.open(e||"",a,u);O(d,t,"popup-blocked");try{d.focus()}catch{}return new pu(d)}function YT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="__/auth/handler",QT="emulator/auth/handler",XT=encodeURIComponent("fac");async function gu(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wn,eventId:i};if(e instanceof Xa){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ho(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof Nr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${XT}=${encodeURIComponent(l)}`:"";return`${ZT(t)}?${In(a).slice(1)}${c}`}function ZT({config:t}){return t.emulator?Ya(t,QT):`https://${t.authDomain}/${JT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs="webStorageSupport";class eD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bp,this._completeRedirectFn=ET,this._overrideRedirectResult=IT}async _openPopup(e,n,r,i){var s;it((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await gu(e,n,r,Ro(),i);return KT(e,o,Za())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await gu(e,n,r,Ro(),i);return rT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(it(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HT(e),r=new TT(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xs,{type:Xs},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xs];o!==void 0&&n(!!o),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cp()||Qa()||gs()}}const tD=eD;var vu="@firebase/auth",mu="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function iD(t){cn(new Ut("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:up(t)},c=new U0(r,i,s,l);return $0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cn(new Ut("auth-internal",e=>{const n=Ar(e.getProvider("auth").getImmediate());return(r=>new nD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(vu,mu,rD(t)),_t(vu,mu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=5*60,oD=bh("authIdTokenMaxAge")||sD;let _u=null;const aD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oD)return;const i=n==null?void 0:n.token;_u!==i&&(_u=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yu(t=Dh()){const e=ma(t,"auth");if(e.isInitialized())return e.getImmediate();const n=W0(t,{popupRedirectResolver:tD,persistence:[hT,eT,bp]}),r=bh("authTokenSyncURL");if(r){const s=aD(r);J0(n,s,()=>s(n.currentUser)),Y0(n,o=>s(o))}const i=_h("auth");return i&&H0(n,`http://${i}`),n}iD("Browser");const lD=[{title:"to do",cards:[{id:Je(),content:"add sprites"},{id:Je(),content:"implement main menu"},{id:Je(),content:"add sounds"}]},{title:"in progress",cards:[{id:Je(),content:"write story"},{id:Je(),content:"add levels"},{id:Je(),content:"send demo to friends"},{id:Je(),content:"marketing"}]},{title:"done",cards:[{id:Je(),content:"implement player movement"}]}];function cD(){const t="data-rbd-drag-handle-draggable-id";Th({apiKey:"AIzaSyDCI-G8rde1guG1vIVhBzb9p1e8jzSP3a4",authDomain:"trello-clone-b3c76.firebaseapp.com",databaseURL:"https://trello-clone-b3c76-default-rtdb.europe-west1.firebasedatabase.app",projectId:"trello-clone-b3c76",storageBucket:"trello-clone-b3c76.appspot.com",messagingSenderId:"712863136216",appId:"1:712863136216:web:00020f5948777f3f415aad"});const n=new Qe,[r,i]=pe(void 0),[s,o]=pe([]),[a,l]=pe({}),c=y=>{if(o(y),!r)return;const E=tu();XS(eu(E,`users/${r}`),{lists:y})},u=(y,E,S)=>{const[x]=y.splice(E,1);return y.splice(S,0,x),y},d=(y,E,S,x)=>{const M=Array.from(y),k=Array.from(E),[q]=M.splice(S.index,1);k.splice(x.index,0,q);const X={};return X[S.droppableId]=M,X[x.droppableId]=k,X},h=y=>{const E=[...s];E.push({title:y,cards:[]}),c(E)},f=y=>{const E=[...s];E.splice(y,1),c(E)},p=(y,E)=>{const S=[...s];S[y].cards||(S[y].cards=[]),S[y].cards.push({id:Je(),content:E}),c(S)},g=(y,E)=>{const S=[...s];S[y].cards.splice(E,1),c(S)},v=(y,E)=>{const S=[...s];S[y].title=E,c(S)},m=y=>{const E=b(y.draggableId);if(!E)return;const{clientHeight:S,clientWidth:x}=E,M=y.source.index,k=E.parentElement,q=window.getComputedStyle(k);if(!k)return;const X=parseFloat(q.paddingTop)+[...k.children].slice(0,M).reduce((G,le)=>{const he=parseFloat(window.getComputedStyle(le).marginBottom);return G+le.clientHeight+he},0);l({clientX:parseFloat(q.paddingLeft),clientY:X,clientWidth:x,clientHeight:S})},_=y=>{l({});const{source:E,destination:S,type:x}=y;if(!S)return;const M=parseInt(E.droppableId),k=parseInt(S.droppableId),q=[...s];switch(x){case Un.List:u(q,E.index,S.index);break;case Un.Card:if(M===k){u(q[M].cards,E.index,S.index);break}else{const X=d(s[M].cards,s[k].cards,E,S);q[M].cards=X[M],q[k].cards=X[k]}}c(q)},I=y=>{if(!y.destination)return;const E=b(y.draggableId);if(!E||!E.parentElement)return;const S=E.parentElement;if(!S)return;const x=window.getComputedStyle(S),{clientHeight:M,clientWidth:k}=E,q=y.destination.index,X=y.source.index,G=[...E.parentElement.children],le=G[X];G.splice(X,1);const he=[...G.slice(0,q),le,...G.slice(q+1)],at=parseFloat(x.paddingTop)+he.slice(0,q).reduce((He,Ye)=>{const Ce=parseFloat(window.getComputedStyle(Ye).marginBottom);return He+Ye.clientHeight+Ce},0);l({clientX:parseFloat(x.paddingLeft),clientY:at,clientWidth:k,clientHeight:M})},b=y=>{const E=`[${t}='${y}']`;return document.querySelector(E)},P=()=>{const y=yu();wT(y,n)};return _e(()=>{yu().onAuthStateChanged(E=>{if(!E)return;i(E.uid);const S=tu();ZS(Ai(eu(S),`users/${E.uid}`)).then(x=>{x.exists()?o(x.val().lists):c(lD)})})},[]),T("div",{children:[T(II,{auth:P}),T("div",{class:"mx-4 flex select-none items-start text-slate-950",children:[T(vb,{onDragStart:m,onDragEnd:_,onDragUpdate:I,children:T(ua,{droppableId:"all-lists",direction:"horizontal",type:Un.List,children:y=>T("div",{ref:y.innerRef,...y.droppableProps,class:"flex",children:[s==null?void 0:s.map((E,S)=>T(wI,{list:E,index:S,changeTitle:v,addCard:p,removeCard:g,removeList:f,placeholderProps:a})),y.placeholder]})})}),T(yI,{addList:h})]})]})}nn(T(cD,{}),document.getElementById("app"));
