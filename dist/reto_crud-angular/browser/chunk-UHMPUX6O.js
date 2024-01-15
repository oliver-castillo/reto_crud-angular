import{J as V,K as b,O as $,Oa as q,R as D,a as d,b as h,ga as f,ha as m,j as R,ja as x,ma as O,na as P,o as H,oa as o,pa as s,qa as c,ra as W,sa as N,t as L,ta as a,ua as v,xa as A}from"./chunk-MLANQNMA.js";var E=class{};function J(n){return n!=null}function Q(n){return W(n)?R(n):n}function ee(n){let e={};return n.forEach(t=>{e=t!=null?d(d({},e),t):e}),Object.keys(e).length===0?null:e}function te(n,e){return e.map(t=>t(n))}function de(n){return!n.validate}function ie(n){return n.map(e=>de(e)?e:t=>e.validate(t))}function ce(n){if(!n)return null;let e=n.filter(J);return e.length==0?null:function(t){return ee(te(t,e))}}function he(n){return n!=null?ce(ie(n)):null}function fe(n){if(!n)return null;let e=n.filter(J);return e.length==0?null:function(t){let i=te(t,e).map(Q);return L(i).pipe(H(ee))}}function pe(n){return n!=null?fe(ie(n)):null}function k(n){return n?Array.isArray(n)?n:[n]:[]}function F(n,e){return Array.isArray(n)?n.includes(e):n===e}function z(n,e){let t=k(e);return k(n).forEach(r=>{F(t,r)||t.push(r)}),t}function Z(n,e){return k(e).filter(t=>!F(n,t))}var me={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},tt=h(d({},me),{"[class.ng-submitted]":"isSubmitted"});var _="VALID",M="INVALID",g="PENDING",C="DISABLED";function U(n){return(I(n)?n.validators:n)||null}function ge(n){return Array.isArray(n)?he(n):n||null}function B(n,e){return(I(e)?e.asyncValidators:n)||null}function ye(n){return Array.isArray(n)?pe(n):n||null}function I(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function ne(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new V(1e3,"");if(!i[t])throw new V(1001,"")}function re(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new V(1002,"")})}var y=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===_}get invalid(){return this.status===M}get pending(){return this.status==g}get disabled(){return this.status===C}get enabled(){return this.status!==C}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(z(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(z(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Z(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Z(e,this._rawAsyncValidators))}hasValidator(e){return F(this._rawValidators,e)}hasAsyncValidator(e){return F(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=g,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=C,this.errors=null,this._forEachChild(i=>{i.disable(h(d({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(h(d({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=_,this._forEachChild(i=>{i.enable(h(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(h(d({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===_||this.status===g)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?C:_}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=g,this._hasOwnPendingAsyncValidator=!0;let t=Q(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new x,this.statusChanges=new x}_calculateStatus(){return this._allControlsDisabled()?C:this.errors?M:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(g)?g:this._anyControlsHaveStatus(M)?M:_}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){I(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ge(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ye(this._rawAsyncValidators)}},w=class extends y{constructor(e,t,i){super(U(t),B(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){re(this,!0,e),Object.keys(e).forEach(i=>{ne(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,l)=>{i=t(i,r,l)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var j=class extends w{};function X(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Y(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var p=class extends y{constructor(e=null,t,i){super(U(t),B(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),I(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Y(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){X(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){X(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Y(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var T=class extends y{constructor(e,t,i){super(U(t),B(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,i={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,t={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){re(this,!1,e),e.forEach((i,r)=>{ne(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,i)=>i._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,i)=>{e(t,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function K(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var se=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let i=new e;return i.useNonNullable=!0,i}group(i,r=null){let l=this._reduceControls(i),u={};return K(r)?u=r:r!==null&&(u.validators=r.validator,u.asyncValidators=r.asyncValidator),new w(l,u)}record(i,r=null){let l=this._reduceControls(i);return new j(l,r)}control(i,r,l){let u={};return this.useNonNullable?(K(r)?u=r:(u.validators=r,u.asyncValidators=l),new p(i,h(d({},u),{nonNullable:!0}))):new p(i,r,l)}array(i,r,l){let u=i.map(ue=>this._createControl(ue));return new T(u,r,l)}_reduceControls(i){let r={};return Object.keys(i).forEach(l=>{r[l]=this._createControl(i[l])}),r}_createControl(i){if(i instanceof p)return i;if(i instanceof y)return i;if(Array.isArray(i)){let r=i[0],l=i.length>1?i[1]:null,u=i.length>2?i[2]:null;return this.control(r,l,u)}else return this.control(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var S=(()=>{let e=class e{constructor(i){this.http=i,this.baseUrl="https://retocrud-java-spring-production.up.railway.app/products"}getAllProducts(){return this.http.get(this.baseUrl)}saveProduct(i){return this.http.post(this.baseUrl,i)}getProductById(i){return this.http.get(this.baseUrl+"/"+i)}updateProduct(i,r){return this.http.put(this.baseUrl+"/"+i,r)}deleteProduct(i){return this.http.delete(this.baseUrl+"/"+i)}};e.\u0275fac=function(r){return new(r||e)($(q))},e.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var ae=(()=>{let e=class e{constructor(i,r){this.fb=i,this.productService=r,this.formProduct=i.group({id:new p(""),name:new p(""),unitPrice:new p("")})}saveProduct(){let i=new E;i.name=this.formProduct.get("name")?.value,i.unitPrice=this.formProduct.get("unitPrice")?.value,this.productService.saveProduct(i).subscribe(r=>{this.formProduct.reset()})}};e.\u0275fac=function(r){return new(r||e)(m(se),m(S))},e.\u0275cmp=D({type:e,selectors:[["app-modal-product"]],standalone:!0,features:[A],decls:24,vars:0,consts:[["type","button","data-bs-toggle","modal","data-bs-target","#modalProduct",1,"btn","btn-secondary","mb-4"],["id","modalProduct","tabindex","-1","aria-labelledby","modalProductLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","modalProductLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","id","name","aria-describedby","name",1,"form-control"],["for","unitPrice",1,"form-label"],["type","number","min","0","id","unitPrice","aria-describedby","name",1,"form-control"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button","onclick","sendProduct()",1,"btn","btn-primary"]],template:function(r,l){r&1&&(o(0,"button",0),a(1,` Add new product
`),s(),o(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h1",5),a(7,"Product"),s(),c(8,"button",6),s(),o(9,"div",7)(10,"form")(11,"div",8)(12,"label",9),a(13,"Name"),s(),c(14,"input",10),s(),o(15,"div",8)(16,"label",11),a(17,"Unit Price"),s(),c(18,"input",12),s()()(),o(19,"div",13)(20,"button",14),a(21,"Close"),s(),o(22,"button",15),a(23,"Save"),s()()()()())}});let n=e;return n})();var le=(n,e)=>e.id;function _e(n,e){if(n&1&&(o(0,"option",20),a(1),s()),n&2){let t=e.$implicit;N("value",t.id),N("label",t.name),f(),v(t.name)}}function Ce(n,e){if(n&1&&(o(0,"tr")(1,"th"),a(2),s(),o(3,"td"),a(4),s(),o(5,"td"),a(6),s()()),n&2){let t=e.$implicit;f(2),v(t.id),f(2),v(t.name),f(2),v(t.unitPrice)}}var ut=(()=>{let e=class e{constructor(i){this.service=i,this.products=new Array}ngOnInit(){this.service.getAllProducts().subscribe(i=>{this.products=i})}};e.\u0275fac=function(r){return new(r||e)(m(S))},e.\u0275cmp=D({type:e,selectors:[["app-add-edit-order"]],standalone:!0,features:[A],decls:48,vars:0,consts:[[1,"card","mb-4"],[1,"m-4"],[1,"mb-2"],["id","listOfProducts",1,"list-group"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModal",1,"btn","btn-primary"],["type","button","onclick","sendOrder()",1,"btn","btn-primary","m-2"],["href","/",1,"btn","btn-secondary","m-2"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],["id","selectOfProducts","aria-label","Default select example",1,"form-select"],["selected",""],[1,"modal-footer"],["type","button","data-bs-dismiss","modal","onclick","addProductToList()",1,"btn","btn-secondary"],["id","tableProducts",1,"table"],["scope","col"],[3,"value","label"]],template:function(r,l){r&1&&(o(0,"form",0)(1,"div",1)(2,"h3"),a(3,"New Order"),s(),o(4,"div",2)(5,"span"),a(6,"Selected Products:"),s(),c(7,"ul",3),s(),o(8,"button",4),a(9," Add products "),s()(),o(10,"button",5),a(11,"Save Order"),s(),o(12,"a",6),a(13,"Back"),s()(),o(14,"div",7)(15,"div",8)(16,"div",9)(17,"div",10)(18,"h1",11),a(19,"Products"),s(),c(20,"button",12),s(),o(21,"div",13)(22,"select",14)(23,"option",15),a(24,"Select the product"),s(),O(25,_e,2,3,"option",20,le),s()(),o(27,"div",16)(28,"button",17),a(29,"Add"),s()()()()(),o(30,"div")(31,"h3"),a(32,"Products"),s(),o(33,"table",18)(34,"caption"),a(35,"Products"),s(),o(36,"thead")(37,"tr")(38,"th",19),a(39,"ID"),s(),o(40,"th",19),a(41,"Name"),s(),o(42,"th",19),a(43,"Unit Price"),s()()(),o(44,"tbody"),O(45,Ce,7,3,"tr",null,le),s()(),c(47,"app-modal-product"),s()),r&2&&(f(25),P(l.products),f(20),P(l.products))},dependencies:[ae],styles:["form[_ngcontent-%COMP%]{width:500px;margin:auto;margin-top:6rem}"]});let n=e;return n})();export{ut as AddEditOrderComponent};