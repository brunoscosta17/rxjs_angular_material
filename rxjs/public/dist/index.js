(()=>{"use strict";function t(t){return"function"==typeof t}function n(n){return function(r){if(function(n){return t(null==n?void 0:n.lift)}(r))return r.lift((function(t){try{return n(t,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}var r=function(t,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},r(t,n)};function e(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function o(t,n){var r,e,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,e&&(o=2&i[0]?e.return:i[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,i[1])).done)return o;switch(e=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,e=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],e=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function i(t){var n="function"==typeof Symbol&&Symbol.iterator,r=n&&t[n],e=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(t,n){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var e,o,i=r.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(e=i.next()).done;)u.push(e.value)}catch(t){o={error:t}}finally{try{e&&!e.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function c(t,n,r){if(r||2===arguments.length)for(var e,o=0,i=n.length;o<i;o++)!e&&o in n||(e||(e=Array.prototype.slice.call(n,0,o)),e[o]=n[o]);return t.concat(e||Array.prototype.slice.call(n))}function s(t){return this instanceof s?(this.v=t,this):new s(t)}function a(t,n,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=r.apply(t,n||[]),i=[];return e={},u("next"),u("throw"),u("return"),e[Symbol.asyncIterator]=function(){return this},e;function u(t){o[t]&&(e[t]=function(n){return new Promise((function(r,e){i.push([t,n,r,e])>1||c(t,n)}))})}function c(t,n){try{(r=o[t](n)).value instanceof s?Promise.resolve(r.value.v).then(a,l):f(i[0][2],r)}catch(t){f(i[0][3],t)}var r}function a(t){c("next",t)}function l(t){c("throw",t)}function f(t,n){t(n),i.shift(),i.length&&c(i[0][0],i[0][1])}}Object.create,Object.create;var l,f=((l=function(t){return function(n){t(this),this.message=n?n.length+" errors occurred during unsubscription:\n"+n.map((function(t,n){return n+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=n}}((function(t){Error.call(t),t.stack=(new Error).stack}))).prototype=Object.create(Error.prototype),l.prototype.constructor=l,l);function h(t,n){if(t){var r=t.indexOf(n);0<=r&&t.splice(r,1)}}var p=function(){function n(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return n.prototype.unsubscribe=function(){var n,r,e,o,s;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var l=i(a),h=l.next();!h.done;h=l.next())h.value.remove(this)}catch(t){n={error:t}}finally{try{h&&!h.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}else a.remove(this);var p=this.initialTeardown;if(t(p))try{p()}catch(t){s=t instanceof f?t.errors:[t]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var y=i(d),b=y.next();!b.done;b=y.next()){var m=b.value;try{v(m)}catch(t){s=null!=s?s:[],t instanceof f?s=c(c([],u(s)),u(t.errors)):s.push(t)}}}catch(t){e={error:t}}finally{try{b&&!b.done&&(o=y.return)&&o.call(y)}finally{if(e)throw e.error}}}if(s)throw new f(s)}},n.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)v(t);else{if(t instanceof n){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(t)}},n.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},n.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},n.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&h(n,t)},n.prototype.remove=function(t){var r=this._finalizers;r&&h(r,t),t instanceof n&&t._removeParent(this)},n.EMPTY=((r=new n).closed=!0,r),n;var r}();function d(n){return n instanceof p||n&&"closed"in n&&t(n.remove)&&t(n.add)&&t(n.unsubscribe)}function v(n){t(n)?n():n.unsubscribe()}p.EMPTY;var y=null,b=null,m=void 0,w=!1,x=!1,g={setTimeout:function(t,n){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var o=g.delegate;return(null==o?void 0:o.setTimeout)?o.setTimeout.apply(o,c([t,n],u(r))):setTimeout.apply(void 0,c([t,n],u(r)))},clearTimeout:function(t){var n=g.delegate;return((null==n?void 0:n.clearTimeout)||clearTimeout)(t)},delegate:void 0};function _(t){g.setTimeout((function(){if(!y)throw t;y(t)}))}function S(){}var I=E("C",void 0,void 0);function E(t,n,r){return{kind:t,value:n,error:r}}var T=null,A=function(t){function n(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,d(n)&&n.add(r)):r.destination=C,r}return e(n,t),n.create=function(t,n,r){return new j(t,n,r)},n.prototype.next=function(t){this.isStopped?z(function(t){return E("N",t,void 0)}(t),this):this._next(t)},n.prototype.error=function(t){this.isStopped?z(E("E",void 0,t),this):(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped?z(I,this):(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(p),P=Function.prototype.bind;function O(t,n){return P.call(t,n)}var k=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(t){L(t)}},t.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(t){L(t)}else L(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){L(t)}},t}(),j=function(n){function r(r,e,o){var i,u,c=n.call(this)||this;return t(r)||!r?i={next:null!=r?r:void 0,error:null!=e?e:void 0,complete:null!=o?o:void 0}:c&&x?((u=Object.create(r)).unsubscribe=function(){return c.unsubscribe()},i={next:r.next&&O(r.next,u),error:r.error&&O(r.error,u),complete:r.complete&&O(r.complete,u)}):i=r,c.destination=new k(i),c}return e(r,n),r}(A);function L(t){var n;w?(n=t,w&&T&&(T.errorThrown=!0,T.error=n)):_(t)}function z(t,n){var r=b;r&&g.setTimeout((function(){return r(t,n)}))}var C={closed:!0,next:S,error:function(t){throw t},complete:S};function U(t,n,r,e,o){return new Y(t,n,r,e,o)}var Y=function(t){function n(n,r,e,o,i,u){var c=t.call(this,n)||this;return c.onFinalize=i,c.shouldUnsubscribe=u,c._next=r?function(t){try{r(t)}catch(t){n.error(t)}}:t.prototype._next,c._error=o?function(t){try{o(t)}catch(t){n.error(t)}finally{this.unsubscribe()}}:t.prototype._error,c._complete=e?function(){try{e()}catch(t){n.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,c}return e(n,t),n.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&(null===(n=this.onFinalize)||void 0===n||n.call(this))}},n}(A);function F(t,r){return n((function(n,e){var o=0;n.subscribe(U(e,(function(n){e.next(t.call(r,n,o++))})))}))}var N=function(t){function n(n,r){return t.call(this)||this}return e(n,t),n.prototype.schedule=function(t,n){return void 0===n&&(n=0),this},n}(p),R={setInterval:function(t,n){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var o=R.delegate;return(null==o?void 0:o.setInterval)?o.setInterval.apply(o,c([t,n],u(r))):setInterval.apply(void 0,c([t,n],u(r)))},clearInterval:function(t){var n=R.delegate;return((null==n?void 0:n.clearInterval)||clearInterval)(t)},delegate:void 0},q=function(t){function n(n,r){var e=t.call(this,n,r)||this;return e.scheduler=n,e.work=r,e.pending=!1,e}return e(n,t),n.prototype.schedule=function(t,n){var r;if(void 0===n&&(n=0),this.closed)return this;this.state=t;var e=this.id,o=this.scheduler;return null!=e&&(this.id=this.recycleAsyncId(o,e,n)),this.pending=!0,this.delay=n,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(o,this.id,n),this},n.prototype.requestAsyncId=function(t,n,r){return void 0===r&&(r=0),R.setInterval(t.flush.bind(t,this),r)},n.prototype.recycleAsyncId=function(t,n,r){if(void 0===r&&(r=0),null!=r&&this.delay===r&&!1===this.pending)return n;null!=n&&R.clearInterval(n)},n.prototype.execute=function(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,n);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,n){var r,e=!1;try{this.work(t)}catch(t){e=!0,r=t||new Error("Scheduled action threw falsy error")}if(e)return this.unsubscribe(),r},n.prototype.unsubscribe=function(){if(!this.closed){var n=this.id,r=this.scheduler,e=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,h(e,this),null!=n&&(this.id=this.recycleAsyncId(r,n,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},n}(N),D={now:function(){return(D.delegate||Date).now()},delegate:void 0},M=function(){function t(n,r){void 0===r&&(r=t.now),this.schedulerActionCtor=n,this.now=r}return t.prototype.schedule=function(t,n,r){return void 0===n&&(n=0),new this.schedulerActionCtor(this,t).schedule(r,n)},t.now=D.now,t}(),B=new(function(t){function n(n,r){void 0===r&&(r=M.now);var e=t.call(this,n,r)||this;return e.actions=[],e._active=!1,e}return e(n,t),n.prototype.flush=function(t){var n=this.actions;if(this._active)n.push(t);else{var r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}},n}(M))(q),G=B,X=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function H(n){return t(null==n?void 0:n.then)}var J="function"==typeof Symbol&&Symbol.observable||"@@observable";function K(t){return t}function Q(t){return 0===t.length?K:1===t.length?t[0]:function(n){return t.reduce((function(t,n){return n(t)}),n)}}var V=function(){function n(t){t&&(this._subscribe=t)}return n.prototype.lift=function(t){var r=new n;return r.source=this,r.operator=t,r},n.prototype.subscribe=function(n,r,e){var o,i=this,u=(o=n)&&o instanceof A||function(n){return n&&t(n.next)&&t(n.error)&&t(n.complete)}(o)&&d(o)?n:new j(n,r,e);return function(t){if(w){var n=!T;if(n&&(T={errorThrown:!1,error:null}),t(),n){var r=T,e=r.errorThrown,o=r.error;if(T=null,e)throw o}}else t()}((function(){var t=i,n=t.operator,r=t.source;u.add(n?n.call(u,r):r?i._subscribe(u):i._trySubscribe(u))})),u},n.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},n.prototype.forEach=function(t,n){var r=this;return new(n=W(n))((function(n,e){var o=new j({next:function(n){try{t(n)}catch(t){e(t),o.unsubscribe()}},error:e,complete:n});r.subscribe(o)}))},n.prototype._subscribe=function(t){var n;return null===(n=this.source)||void 0===n?void 0:n.subscribe(t)},n.prototype[J]=function(){return this},n.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Q(t)(this)},n.prototype.toPromise=function(t){var n=this;return new(t=W(t))((function(t,r){var e;n.subscribe((function(t){return e=t}),(function(t){return r(t)}),(function(){return t(e)}))}))},n.create=function(t){return new n(t)},n}();function W(t){var n;return null!==(n=null!=t?t:m)&&void 0!==n?n:Promise}function Z(n){return t(n[J])}function $(n){return Symbol.asyncIterator&&t(null==n?void 0:n[Symbol.asyncIterator])}function tt(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var nt="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function rt(n){return t(null==n?void 0:n[nt])}function et(t){return a(this,arguments,(function(){var n,r,e;return o(this,(function(o){switch(o.label){case 0:n=t.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,s(n.read())];case 3:return r=o.sent(),e=r.value,r.done?[4,s(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,s(e)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}}))}))}function ot(n){return t(null==n?void 0:n.getReader)}function it(n){if(n instanceof V)return n;if(null!=n){if(Z(n))return u=n,new V((function(n){var r=u[J]();if(t(r.subscribe))return r.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(X(n))return o=n,new V((function(t){for(var n=0;n<o.length&&!t.closed;n++)t.next(o[n]);t.complete()}));if(H(n))return e=n,new V((function(t){e.then((function(n){t.closed||(t.next(n),t.complete())}),(function(n){return t.error(n)})).then(null,_)}));if($(n))return ut(n);if(rt(n))return r=n,new V((function(t){var n,e;try{for(var o=i(r),u=o.next();!u.done;u=o.next()){var c=u.value;if(t.next(c),t.closed)return}}catch(t){n={error:t}}finally{try{u&&!u.done&&(e=o.return)&&e.call(o)}finally{if(n)throw n.error}}t.complete()}));if(ot(n))return ut(et(n))}var r,e,o,u;throw tt(n)}function ut(t){return new V((function(n){(function(t,n){var r,e,u,c;return function(t,n,r,e){return new(r||(r=Promise))((function(o,i){function u(t){try{s(e.next(t))}catch(t){i(t)}}function c(t){try{s(e.throw(t))}catch(t){i(t)}}function s(t){var n;t.done?o(t.value):(n=t.value,n instanceof r?n:new r((function(t){t(n)}))).then(u,c)}s((e=e.apply(t,n||[])).next())}))}(this,void 0,void 0,(function(){var s,a;return o(this,(function(o){switch(o.label){case 0:o.trys.push([0,5,6,11]),r=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,r=t[Symbol.asyncIterator];return r?r.call(t):(t=i(t),n={},e("next"),e("throw"),e("return"),n[Symbol.asyncIterator]=function(){return this},n);function e(r){n[r]=t[r]&&function(n){return new Promise((function(e,o){!function(t,n,r,e){Promise.resolve(e).then((function(n){t({value:n,done:r})}),n)}(e,o,(n=t[r](n)).done,n.value)}))}}}(t),o.label=1;case 1:return[4,r.next()];case 2:if((e=o.sent()).done)return[3,4];if(s=e.value,n.next(s),n.closed)return[2];o.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=o.sent(),u={error:a},[3,11];case 6:return o.trys.push([6,,9,10]),e&&!e.done&&(c=r.return)?[4,c.call(r)]:[3,8];case 7:o.sent(),o.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}}))}))})(t,n).catch((function(t){return n.error(t)}))}))}function ct(t,n,r,e,o){void 0===e&&(e=0),void 0===o&&(o=!1);var i=n.schedule((function(){r(),o?t.add(this.schedule(null,e)):this.unsubscribe()}),e);if(t.add(i),!o)return i}function st(r,e,o){return void 0===o&&(o=1/0),t(e)?st((function(t,n){return F((function(r,o){return e(t,r,n,o)}))(it(r(t,n)))}),o):("number"==typeof e&&(o=e),n((function(t,n){return function(t,n,r,e,o,i,u,c){var s=[],a=0,l=0,f=!1,h=function(){!f||s.length||a||n.complete()},p=function(t){return a<e?d(t):s.push(t)},d=function(t){a++;var o=!1;it(r(t,l++)).subscribe(U(n,(function(t){n.next(t)}),(function(){o=!0}),void 0,(function(){if(o)try{a--;for(;s.length&&a<e;)t=void 0,t=s.shift(),d(t);h()}catch(t){n.error(t)}var t})))};return t.subscribe(U(n,p,(function(){f=!0,h()}))),function(){}}(t,n,r,o)})))}function at(){return void 0===(t=1)&&(t=1/0),st(K,t);var t}function lt(n){return n&&t(n.schedule)}function ft(t){return lt((n=t)[n.length-1])?t.pop():void 0;var n}function ht(t,r){return void 0===r&&(r=0),n((function(n,e){n.subscribe(U(e,(function(n){return ct(e,t,(function(){return e.next(n)}),r)}),(function(){return ct(e,t,(function(){return e.complete()}),r)}),(function(n){return ct(e,t,(function(){return e.error(n)}),r)})))}))}function pt(t,r){return void 0===r&&(r=0),n((function(n,e){e.add(t.schedule((function(){return n.subscribe(e)}),r))}))}function dt(t,n){if(!t)throw new Error("Iterable cannot be null");return new V((function(r){ct(r,n,(function(){var e=t[Symbol.asyncIterator]();ct(r,n,(function(){e.next().then((function(t){t.done?r.complete():r.next(t.value)}))}),0,!0)}))}))}function vt(n,r){return r?function(n,r){if(null!=n){if(Z(n))return function(t,n){return it(t).pipe(pt(n),ht(n))}(n,r);if(X(n))return function(t,n){return new V((function(r){var e=0;return n.schedule((function(){e===t.length?r.complete():(r.next(t[e++]),r.closed||this.schedule())}))}))}(n,r);if(H(n))return function(t,n){return it(t).pipe(pt(n),ht(n))}(n,r);if($(n))return dt(n,r);if(rt(n))return function(n,r){return new V((function(e){var o;return ct(e,r,(function(){o=n[nt](),ct(e,r,(function(){var t,n,r;try{n=(t=o.next()).value,r=t.done}catch(t){return void e.error(t)}r?e.complete():e.next(n)}),0,!0)})),function(){return t(null==o?void 0:o.return)&&o.return()}}))}(n,r);if(ot(n))return function(t,n){return dt(et(t),n)}(n,r)}throw tt(n)}(n,r):it(n)}var yt=new V((function(t){return t.complete()}));function bt(t){return t<=0?function(){return yt}:n((function(n,r){var e=0;n.subscribe(U(r,(function(n){++e<=t&&(r.next(n),t<=e&&r.complete())})))}))}function mt(t,r){return r?function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return at()(vt(t,ft(t)))}(r.pipe(bt(1),n((function(t,n){t.subscribe(U(n,S))}))),e.pipe(mt(t)))}:st((function(n,r){return t(n,r).pipe(bt(1),function(t){return F((function(){return t}))}(n))}))}var wt=Array.isArray;var xt=["addListener","removeListener"],gt=["addEventListener","removeEventListener"],_t=["on","off"];function St(t,n){return function(r){return function(e){return t[r](n,e)}}}var It,Et=document.getElementById("circle");(function n(r,e,o,i){if(t(o)&&(i=o,o=void 0),i)return n(r,e,o).pipe((s=i,F((function(t){return function(t,n){return wt(n)?t.apply(void 0,c([],u(n))):t(n)}(s,t)}))));var s,a=u(function(n){return t(n.addEventListener)&&t(n.removeEventListener)}(r)?gt.map((function(t){return function(n){return r[t](e,n,o)}})):function(n){return t(n.addListener)&&t(n.removeListener)}(r)?xt.map(St(r,e)):function(n){return t(n.on)&&t(n.off)}(r)?_t.map(St(r,e)):[],2),l=a[0],f=a[1];if(!l&&X(r))return st((function(t){return n(t,e,o)}))(it(r));if(!l)throw new TypeError("Invalid event target");return new V((function(t){var n=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.next(1<n.length?n:n[0])};return l(n),function(){return f(n)}}))})(document,"mousemove").pipe(F((function(t){return{x:t.clientX,y:t.clientY}})),(It=function(t){return t.x<500},n((function(t,n){var r=0;t.subscribe(U(n,(function(t){return It.call(undefined,t,r++)&&n.next(t)})))}))),function(t,n){void 0===n&&(n=B);var r=function(t,n,r){void 0===t&&(t=0),void 0===r&&(r=G);var e=-1;return null!=n&&(lt(n)?r=n:e=n),new V((function(n){var o,i=(o=t)instanceof Date&&!isNaN(o)?+t-r.now():t;i<0&&(i=0);var u=0;return r.schedule((function(){n.closed||(n.next(u++),0<=e?this.schedule(void 0,e):n.complete())}),i)}))}(300,n);return mt((function(){return r}))}()).subscribe({next:function(t){return function(t){console.log(t),Et.style.left="".concat(t.x,"px"),Et.style.top="".concat(t.y,"px")}(t)},error:function(t){return console.log(t)},complete:function(){return console.log("Complete!")}})})();