(function(t){function e(e){for(var i,r,o=e[0],n=e[1],l=e[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);u&&u(e);while(h.length)h.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],i=!0,o=1;o<a.length;o++){var n=a[o];0!==s[n]&&(i=!1)}i&&(c.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},c=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=n;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("c740"),a("4160"),a("a434"),a("159b"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid"},[a("Top"),a("Center"),a("Bottom",{ref:"bottomComponent"})],1)])},c=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-2"},[t._v(" Kalkulator posiłków dla par. ")]),a("div",{staticClass:"col"},[a("div",{staticClass:"form-inline"},[a("label",{staticClass:"p-2",attrs:{for:"totalDishKcal"}},[t._v("Całkowita ilość kalorii dla dania")]),a("input",{staticClass:"form-control w-25",attrs:{min:"0",type:"number",id:"totalDishKcal"},domProps:{value:t.totalDishKcal},on:{input:function(e){return t.changeTotalDishKcal(e.target.value)},wheel:t.wheelTotalDishKcal}})]),a("div",{staticClass:"form-inline"},[a("label",{staticClass:"p-2",attrs:{for:"totalDishKcalHe"}},[t._v("Całkowita ilość kalorii dla niego")]),a("input",{staticClass:"form-control w-25",attrs:{min:"0",type:"number",id:"totalDishKcalHe"},domProps:{value:t.totalDishKcalHe},on:{input:function(e){return t.changeTotalDishKcalHe(e.target.value)},wheel:t.wheelTotalDishKcalHe}})]),a("div",{staticClass:"form-inline"},[a("label",{staticClass:"p-2",attrs:{for:"totalDishKcalShe"}},[t._v("Całkowita ilość kalorii dla niej")]),a("input",{staticClass:"form-control w-25",attrs:{min:"0",type:"number",id:"totalDishKcalShe"},domProps:{value:t.totalDishKcalShe},on:{input:function(e){return t.changeTotalDishKcalShe(e.target.value)},wheel:t.wheelTotalDishKcalShe}})])]),a("div",{staticClass:"col"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"alert alert-info"},[t._v("Całkowita waga:"+t._s(t.currentDishWeight))])]),a("div",{staticClass:"col-6"},[a("div",{staticClass:"alert alert-info"},[t._v("Całkowite kalorie:"+t._s(t.currentDishKcal))])]),a("div",{staticClass:"col"},[a("div",{staticClass:"alert alert-info"},[t._v("On:"+t._s(t.currentDishHeKcal)+" kcal/"+t._s(t.currentDishHeWeight)+" g")])]),a("div",{staticClass:"col"},[a("div",{staticClass:"alert alert-info"},[t._v("Ona:"+t._s(t.currentDishSheKcal)+" kcal/"+t._s(t.currentDishSheWeight)+" g")])])])]),t._m(0),a("ProductCreator",{on:{addProduct:t.addProduct}}),a("DishList"),a("ProductList")],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"justify-content-center align-content-center form-inline"},[a("label",{staticClass:"m-1",attrs:{for:"dishName"}},[t._v("Nazwa dania")]),a("input",{staticClass:"form-control m-1",attrs:{type:"text",id:"dishName"},domProps:{value:t.dishName},on:{input:function(e){return t.saveDishName(e.target.value)}}}),a("button",{staticClass:"btn btn-success m-1",on:{click:function(e){return t.saveDish()}}},[a("span",{staticClass:"oi oi-plus"},[t._v("Zapisz")])]),a("button",{staticClass:"btn btn-danger m-1",on:{click:function(e){return t.reset()}}},[a("span",{staticClass:"oi oi-x"}),t._v("Reset")])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-3 btn-group-vertical"},[a("button",{staticClass:"btn btn-success btn-sm text-center m-1",attrs:{"data-toggle":"modal","data-target":"#addProductModal"}},[a("span",{staticClass:"oi oi-plus",attrs:{title:"add product","aria-hidden":"true"}}),t._v(" Dodaj nowy produkt ")]),a("button",{staticClass:"btn btn-info btn-sm text-center m-1",attrs:{"data-toggle":"modal","data-target":"#dishListModal"}},[a("span",{staticClass:"oi oi-list"}),t._v(" Lista dań ")]),a("button",{staticClass:"btn btn-info btn-sm text-center m-1",attrs:{"data-toggle":"modal","data-target":"#productListModal"}},[a("span",{staticClass:"oi oi-list-rich"}),t._v(" Lista produktów ")])])}],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"addProductModal",staticClass:"modal fade",attrs:{id:"addProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"addProductModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"product-name"}},[t._v("Nazwa")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],ref:"productName",staticClass:"form-control",attrs:{type:"text",name:"product-name",id:"product-name"},domProps:{value:t.product.name},on:{input:function(e){e.target.composing||t.$set(t.product,"name",e.target.value)}}}),a("label",{attrs:{for:"measure-unit"}},[t._v("Sposób mierzenia")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.product.measureType,expression:"product.measureType"}],staticClass:"custom-select form-control",attrs:{name:"measure-unit",id:"measure-unit"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.product,"measureType",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:"selected"},domProps:{value:t.measureWeight}},[t._v("Wagowo")]),a("option",{domProps:{value:t.measurePiece}},[t._v("Sztuki")])]),t.product.measureType===t.measurePiece?a("label",{attrs:{for:"pieceWeight"}},[t._v("Waga sztuki (g)")]):t._e(),t.product.measureType===t.measurePiece?a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.pieceWeight,expression:"product.pieceWeight"}],staticClass:"form-control",attrs:{type:"number",name:"pieceWeight",id:"pieceWeight"},domProps:{value:t.product.pieceWeight},on:{input:function(e){e.target.composing||t.$set(t.product,"pieceWeight",e.target.value)}}}):t._e(),a("div",{staticClass:"form-inline justify-content-center p-1"},[a("label",{staticClass:"p-1",attrs:{for:"unit"}},[t._v("Jednostka")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.unit,expression:"product.unit"}],staticClass:"form-control w-25",attrs:{type:"text",id:"unit",name:"unit"},domProps:{value:t.product.unit},on:{input:function(e){e.target.composing||t.$set(t.product,"unit",e.target.value)}}}),"g"!==t.product.unit?a("label",{staticClass:"p-1",attrs:{for:"unitFactor"}},[t._v("Przelicznik")]):t._e(),"g"!==t.product.unit?a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.unitCalculationFactor,expression:"product.unitCalculationFactor"}],staticClass:"form-control w-25",attrs:{title:"Jak ta jednostka ma się do 1 grama ? Przez ile trzeba pomonożyć gram by ją otrzymać ? ",type:"number",step:"0.001",min:"0",id:"unitFactor",name:"unitFactor"},domProps:{value:t.product.unitCalculationFactor},on:{input:function(e){e.target.composing||t.$set(t.product,"unitCalculationFactor",e.target.value)}}}):t._e()]),a("div",{staticClass:"form-inline justify-content-center p-1"},[a("label",{staticClass:"p-1",attrs:{for:"baseKcal"}},[t._v("Kcal")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.baseKcal,expression:"product.baseKcal"}],staticClass:"form-control w-25",attrs:{id:"baseKcal",name:"baseKcal"},domProps:{value:t.product.baseKcal},on:{input:function(e){e.target.composing||t.$set(t.product,"baseKcal",e.target.value)}}}),a("label",{staticClass:"p-1",attrs:{for:"baseWeight"}},[t._v("Waga ("+t._s(t.product.unit)+")")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.baseWeight,expression:"product.baseWeight"}],staticClass:"form-control w-25",attrs:{id:"baseWeight",name:"baseWeight"},domProps:{value:t.product.baseWeight},on:{input:function(e){e.target.composing||t.$set(t.product,"baseWeight",e.target.value)}}})])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Zamknij")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addProduct}},[t._v("Dodaj")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.uniqueKey,expression:"product.uniqueKey"}],attrs:{type:"hidden"},domProps:{value:t.product.uniqueKey},on:{input:function(e){e.target.composing||t.$set(t.product,"uniqueKey",e.target.value)}}})])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"addProductModalLabel"}},[t._v("Dodawanie produktu")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],u="weight",d="piece",h="g",m=1,p={name:"ProductCreator",data:function(){return{product:{uniqueKey:this.getUniqueKey(),baseKcal:0,baseWeight:100,measureType:u,name:"",pieceWeight:0,unit:h,unitCalculationFactor:m}}},computed:{measureWeight:function(){return u},measurePiece:function(){return d}},methods:{getUniqueKey:function(){return this.$uuid.v1()},addProduct:function(){this.$emit("addProduct",this.product),this.product={baseKcal:0,baseWeight:100,measureType:u,name:"",pieceWeight:0,unit:h,unitCalculationFactor:m,uniqueKey:this.getUniqueKey()}}}},f=p,b=a("2877"),g=Object(b["a"])(f,n,l,!1,null,"1d3978c2",null),v=g.exports,K=a("1157"),D=a.n(K),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"dishListModal",staticClass:"modal fade",attrs:{id:"dishListModal",tabindex:"-1",role:"dialog","aria-labelledby":"dishListModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},t._l(t.dishList,(function(e,i){return a("div",{key:i,staticClass:"col alert alert-info"},[t._v(" "+t._s(e.dishName)+" - "+t._s(e.currentDishKcal)+" kcal / "+t._s(e.currentDishWeight)+" g "),a("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.deleteDish(i)}}},[a("span",{staticClass:"oi oi-x"})]),a("button",{staticClass:"btn btn-info",on:{click:function(e){return t.loadDish(i)}}},[a("span",{staticClass:"oi oi-arrow-top"})])])})),0),t._m(1)])])])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"dishListModalLabel"}},[t._v("Lista dań")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Zamknij")])])}],W={name:"DishList",computed:{dishList:function(){return this.$store.state.dishList}},methods:{loadDish:function(t){this.$store.commit("loadDish",t),D()("#dishListModal").modal("hide"),this.$forceUpdate()},deleteDish:function(t){this.$store.commit("deleteDish",t),this.$forceUpdate()}}},S=W,_=Object(b["a"])(S,P,C,!1,null,"7a6757f4",null),y=_.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"productListModal",staticClass:"modal fade",attrs:{id:"productListModal",tabindex:"-1",role:"dialog","aria-labelledby":"productListModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},t._l(t.productList,(function(e,i){return a("div",{key:i,staticClass:"col alert alert-info"},[t._v(" "+t._s(e.name)+" - "+t._s(e.baseKcal)+" kcal / "+t._s(e.baseWeight)+" "+t._s(e.unit)+" "),a("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.deleteProductFromStorage(i)}}},[a("span",{staticClass:"oi oi-x"})]),a("button",{staticClass:"btn btn-info",on:{click:function(e){return t.loadProductFromStorage(i)}}},[a("span",{staticClass:"oi oi-arrow-top"})])])})),0),t._m(1)])])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"productListModalLabel"}},[t._v("Lista produktów")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Zamknij")])])}],w={name:"ProductList",computed:{productList:function(){return this.$store.state.productList}},methods:{loadProductFromStorage:function(t){this.$store.commit("loadProductFromStorage",t),D()("#productListModal").modal("hide"),this.$forceUpdate()},deleteProductFromStorage:function(t){this.$store.commit("deleteProductFromStorage",t),this.$forceUpdate()}}},L=w,U=Object(b["a"])(L,H,$,!1,null,"48352674",null),x=U.exports,k={name:"Top",components:{ProductList:x,DishList:y,ProductCreator:v},computed:{dishName:function(){return this.$store.state.dishName},totalDishKcal:function(){return this.$store.state.totalDishKcal},totalDishKcalHe:function(){return this.$store.state.totalDishKcalHe},totalDishKcalShe:function(){return this.$store.state.totalDishKcalShe},currentDishWeight:function(){return this.$store.state.currentDishWeight},currentDishKcal:function(){return this.$store.state.currentDishKcal},currentDishHeWeight:function(){return this.$store.state.currentDishHeWeight},currentDishSheWeight:function(){return this.$store.state.currentDishSheWeight},currentDishHeKcal:function(){return this.$store.state.currentDishHeKcal},currentDishSheKcal:function(){return this.$store.state.currentDishSheKcal}},methods:{reset:function(){this.$store.commit("reset")},saveDish:function(){this.$store.commit("saveDish",this.$uuid.v1()),this.$children.forEach((function(t){t.$forceUpdate()}))},saveDishName:function(t){this.$store.commit("saveDishName",t),this.$forceUpdate()},wheelTotalDishKcal:function(t){t.deltaY>0?this.$store.commit("totalDishKcalDecrease"):this.$store.commit("totalDishKcalIncrement")},changeTotalDishKcal:function(t){t<=0&&(t=0),this.$store.commit("totalDishKcalChange",t)},wheelTotalDishKcalHe:function(t){t.deltaY>0?this.$store.commit("totalDishKcalHeDecrease"):this.$store.commit("totalDishKcalHeIncrement")},changeTotalDishKcalHe:function(t){t<=0&&(t=0),this.$store.commit("totalDishKcalHeChange",t)},wheelTotalDishKcalShe:function(t){t.deltaY>0?this.$store.commit("totalDishKcalSheDecrease"):this.$store.commit("totalDishKcalSheIncrement")},changeTotalDishKcalShe:function(t){t<=0&&(t=0),this.$store.commit("totalDishKcalSheChange",t)},addProduct:function(t){D()("#addProductModal").modal("hide"),this.$store.commit("addDishProduct",t)}}},M=k,N=Object(b["a"])(M,r,o,!1,null,"a96a46c0",null),I=N.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},t._l(t.dishProducts,(function(e){return a("div",{key:e.uniqueKey,staticClass:"container p-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"alert alert-info"},[t._v(t._s(e.name))]),a("button",{staticClass:"btn btn-success btn-sm",on:{click:function(a){return t.saveProduct(e)}}},[a("span",{staticClass:"oi oi-check"})]),a("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(a){return t.deleteProductFromDish(e)}}},[a("span",{staticClass:"oi oi-x"})])]),a("div",{staticClass:"col"},[a("div",[a("label",{attrs:{for:"currentProductWeight"}},[t._v("Waga produktu")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentWeight,expression:"product.currentWeight"}],staticClass:"form-control",attrs:{type:"number",id:"currentProductWeight"},domProps:{value:e.currentWeight},on:{input:[function(a){a.target.composing||t.$set(e,"currentWeight",a.target.value)},function(a){return t.productWeightInput(e,a.target.value)}]}}),a("br"),a("range-slider",{staticClass:"form-input",attrs:{min:"0",max:"1000",name:"weightSlider"},on:{input:function(a){return t.productWeightInput(e)}},model:{value:e.currentWeight,callback:function(a){t.$set(e,"currentWeight",a)},expression:"product.currentWeight"}}),a("label",{attrs:{for:"currentProductKcal"}},[t._v("Kalorie produktu")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentKcal,expression:"product.currentKcal"}],staticClass:"form-control",attrs:{type:"number",id:"currentProductKcal"},domProps:{value:e.currentKcal},on:{input:[function(a){a.target.composing||t.$set(e,"currentKcal",a.target.value)},function(a){return t.productKcalInput(e,a.target.value)}]}}),a("br"),a("range-slider",{staticClass:"form-input",attrs:{min:"0",max:"1000",name:"kcalSlider"},on:{input:function(a){return t.productKcalInput(e)}},model:{value:e.currentKcal,callback:function(a){t.$set(e,"currentKcal",a)},expression:"product.currentKcal"}})],1)]),a("div",{staticClass:"col"},[a("div",[a("label",[t._v("On")]),a("label",{attrs:{for:"balanceHeWeight"}},[t._v("Waga")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.balanceHeWeight,expression:"product.balanceHeWeight"}],staticClass:"form-control",attrs:{min:"0",type:"number",id:"balanceHeWeight"},domProps:{value:e.balanceHeWeight},on:{input:[function(a){a.target.composing||t.$set(e,"balanceHeWeight",a.target.value)},function(a){return t.balanceHeWeightUpdate(e)}]}}),a("label",{attrs:{for:"balanceHeKcal"}},[t._v("Kcal")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.balanceHeKcal,expression:"product.balanceHeKcal"}],staticClass:"form-control",attrs:{min:"0",type:"number",id:"balanceHeKcal"},domProps:{value:e.balanceHeKcal},on:{input:[function(a){a.target.composing||t.$set(e,"balanceHeKcal",a.target.value)},function(a){return t.balanceHeKcalUpdate(e)}]}})])]),a("div",{staticClass:"col"},[a("div",[a("label",[t._v("Balans")]),a("range-slider",{staticClass:"form-control",attrs:{name:"On",min:"0",max:"100"},on:{input:function(a){return t.balanceSliderUpdate(e)}},model:{value:e.balance,callback:function(a){t.$set(e,"balance",a)},expression:"product.balance"}})],1)]),a("div",{staticClass:"col"},[a("div",[a("label",[t._v("Ona")]),a("label",{attrs:{for:"balanceSheWeight"}},[t._v("Waga")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.balanceSheWeight,expression:"product.balanceSheWeight"}],staticClass:"form-control",attrs:{min:"0",type:"number",id:"balanceSheWeight"},domProps:{value:e.balanceSheWeight},on:{input:[function(a){a.target.composing||t.$set(e,"balanceSheWeight",a.target.value)},function(a){return t.balanceSheWeightUpdate(e)}]}}),a("label",{attrs:{for:"balanceSheKcal"}},[t._v("Kcal")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.balanceSheKcal,expression:"product.balanceSheKcal"}],staticClass:"form-control",attrs:{min:"0",type:"number",id:"balanceSheKcal"},domProps:{value:e.balanceSheKcal},on:{input:[function(a){a.target.composing||t.$set(e,"balanceSheKcal",a.target.value)},function(a){return t.balanceSheKcalUpdate(e)}]}})])])])])})),0)])},j=[],F=a("c7e3"),O=a.n(F),T=(a("2760"),{name:"Center",components:{RangeSlider:O.a},computed:{dishProducts:function(){return this.$store.state.dishProducts}},methods:{saveProduct:function(t){this.$store.commit("saveProduct",t)},deleteProductFromDish:function(t){this.$store.commit("deleteProductFromDish",t)},balanceHeWeightUpdate:function(t){this.$store.commit("balanceHeWeightUpdate",{product:t,value:t.balanceHeWeight}),this.$forceUpdate()},balanceHeKcalUpdate:function(t){this.$store.commit("balanceHeKcalUpdate",{product:t,value:t.balanceHeKcal}),this.$forceUpdate()},balanceSheWeightUpdate:function(t){this.$store.commit("balanceSheWeightUpdate",{product:t,value:t.balanceSheWeight}),this.$forceUpdate()},balanceSheKcalUpdate:function(t){this.$store.commit("balanceSheKcalUpdate",{product:t,value:t.balanceSheKcal}),this.$forceUpdate()},balanceSliderUpdate:function(t){this.$store.commit("balanceSliderValueUpdate",{product:t,value:t.balance}),this.$forceUpdate()},productWeightInput:function(t){this.$store.commit("productWeightChange",{product:t,value:t.currentWeight}),this.$forceUpdate()},productKcalInput:function(t){this.$store.commit("productKcalChange",{product:t,value:t.currentKcal}),this.$forceUpdate()}}}),E=T,z=Object(b["a"])(E,q,j,!1,null,"2c4d4dd6",null),J=z.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"badge-info"},[t._v("Licznik kalorii dla par w wersji 0.0.1")])])}],Y={name:"Bottom"},A=Y,R=Object(b["a"])(A,B,Z,!1,null,"5c7b4a44",null),V=R.exports,G={name:"App",components:{Bottom:V,Center:J,Top:I}},Q=G,X=(a("034f"),Object(b["a"])(Q,s,c,!1,null,null,null)),tt=X.exports,et=(a("ab8b"),a("9537"),a("3e48"),a("8c44"),a("f029")),at=a("2f62");i["a"].config.productionTip=!1,i["a"].use(at["a"]),i["a"].use(et["a"]);var it=new at["a"].Store({state:{totalDishKcal:0,totalDishKcalHe:0,totalDishKcalShe:0,dishProducts:[],currentDishKcal:0,currentDishHeKcal:0,currentDishSheKcal:0,currentDishWeight:0,currentDishHeWeight:0,currentDishSheWeight:0,dishName:"",dishUUID:null,dishList:localStorage.dishList?JSON.parse(localStorage.dishList):[],productList:localStorage.productList?JSON.parse(localStorage.productList):[]},mutations:{totalDishKcalHeIncrement:function(t){t.totalDishKcalHe++,t.totalDishKcalHe>t.totalDishKcal&&(t.totalDishKcalHe=t.totalDishKcal),this.commit("totalDishKcalSheChange",t.totalDishKcal-t.totalDishKcalHe)},totalDishKcalHeDecrease:function(t){t.totalDishKcalHe--,t.totalDishKcalHe<0&&(t.totalDishKcalHe=0),this.commit("totalDishKcalSheChange",t.totalDishKcal-t.totalDishKcalHe)},totalDishKcalHeChange:function(t,e){t.totalDishKcalHe=e,t.totalDishKcalShe=t.totalDishKcal-e},totalDishKcalSheIncrement:function(t){t.totalDishKcalShe++,t.totalDishKcalShe>t.totalDishKcal&&(t.totalDishKcalShe=t.totalDishKcal),this.commit("totalDishKcalHeChange",t.totalDishKcal-t.totalDishKcalShe)},totalDishKcalSheDecrease:function(t){t.totalDishKcalShe--,t.totalDishKcalShe<0&&(t.totalDishKcalShe=0),this.commit("totalDishKcalHeChange",t.totalDishKcal-t.totalDishKcalShe)},totalDishKcalSheChange:function(t,e){t.totalDishKcalShe=e,t.totalDishKcalHe=t.totalDishKcal-e},totalDishKcalIncrement:function(t){t.totalDishKcal++},totalDishKcalDecrease:function(t){t.totalDishKcal--,t.totalDishKcal<0&&(t.totalDishKcal=0)},totalDishKcalChange:function(t,e){t.totalDishKcal=e},addDishProduct:function(t,e){e.baseWeight=parseFloat(e.baseWeight),e.baseKcal=parseFloat(e.baseKcal),e.currentWeight=e.baseWeight,e.currentKcal=e.baseKcal,e.balance=50,e.balanceHeWeight=0,e.balanceSheWeight=0,e.balanceHeKcal=0,e.balanceSheKcal=0,t.dishProducts.push(e),this.commit("balanceSliderUpdate",e),this.commit("update")},productWeightChange:function(t,e){var a=e.product,i=e.value,s=t.dishProducts.findIndex((function(t){return t.uniqueKey===a.uniqueKey}),a);t.dishProducts[s].currentWeight=parseFloat(i),t.dishProducts[s].currentKcal=Math.round(parseFloat(i)*a.baseKcal/a.baseWeight),this.commit("update"),this.commit("balanceSliderUpdate",t.dishProducts[s])},productKcalChange:function(t,e){var a=e.product,i=e.value,s=t.dishProducts.findIndex((function(t){return t.uniqueKey===a.uniqueKey}),a);t.dishProducts[s].currentKcal=parseFloat(i),t.dishProducts[s].currentWeight=Math.round(parseFloat(i)*a.baseWeight/a.baseKcal),this.commit("update"),this.commit("balanceSliderUpdate",t.dishProducts[s])},reset:function(t){t.totalDishKcal=0,t.totalDishKcalHe=0,t.totalDishKcalShe=0,t.dishProducts=[],t.currentDishKcal=0,t.currentDishHeKcal=0,t.currentDishSheKcal=0,t.currentDishWeight=0,t.currentDishHeWeight=0,t.currentDishSheWeight=0,t.dishName=null,t.dishUUID=null,this.commit("update")},update:function(){this.commit("updateDishKcal"),this.commit("updateDishWeight")},updateDishWeight:function(t){var e=0,a=0,i=0;t.dishProducts.forEach((function(t){e+=t.currentWeight,a+=t.balanceHeWeight,i+=t.balanceSheWeight})),t.currentDishWeight=Math.round(e),t.currentDishWeight=Math.round(a),t.currentDishSheWeight=Math.round(i)},updateDishKcal:function(t){var e=0,a=0,i=0;t.dishProducts.forEach((function(t){e+=t.currentKcal,a+=t.balanceHeKcal,i+=t.balanceSheKcal})),t.currentDishKcal=Math.round(e),t.currentDishHeKcal=Math.round(a),t.currentDishSheKcal=Math.round(i)},balanceSliderUpdate:function(t,e){var a=t.dishProducts.findIndex((function(t){return t.uniqueKey===e.uniqueKey}),e),i=e.balance<=0?0:e.balance/100,s=100-e.balance<=0?0:(100-e.balance)/100;t.dishProducts[a].balanceHeWeight=Math.round(e.currentWeight*s),t.dishProducts[a].balanceHeKcal=Math.round(e.currentKcal*s),t.dishProducts[a].balanceSheWeight=Math.round(e.currentWeight*i),t.dishProducts[a].balanceSheKcal=Math.round(e.currentKcal*i),this.commit("update")},balanceSliderValueUpdate:function(t,e){var a=e.product,i=e.value,s=t.dishProducts.findIndex((function(t){return t.uniqueKey===a.uniqueKey}),a);t.dishProducts[s].balance=i,this.commit("balanceSliderUpdate",t.dishProducts[s])},balanceHeWeightUpdate:function(t,e){var a=e.product,i=parseInt(e.value),s=t.dishProducts.findIndex((function(t){return t.uniqueKey===a.uniqueKey}),a);t.dishProducts[s].balanceHeWeight=i,t.dishProducts[s].balanceHeKcal=Math.round(i*a.baseKcal/a.baseWeight),t.dishProducts[s].balanceSheWeight=t.dishProducts[s].currentWeight-i,t.dishProducts[s].balanceSheKcal=Math.round(t.dishProducts[s].currentKcal-t.dishProducts[s].balanceHeKcal),t.dishProducts[s].balance=Math.round(100*t.dishProducts[s].balanceHeWeight/t.dishProducts[s].currentWeight),this.commit("update")},balanceSheWeightUpdate:function(t,e){var a=e.product,i=e.value,s=t.dishProducts.findIndex((function(t){return t.uniqueKey===a.uniqueKey}),a);t.dishProducts[s].balanceSheWeight=i,t.dishProducts[s].balanceSheKcal=Math.round(i*a.baseKcal/a.baseWeight),t.dishProducts[s].balanceHeWeight=Math.round(t.dishProducts[s].currentWeight-i),t.dishProducts[s].balanceHeKcal=Math.round(t.dishProducts[s].currentKcal-t.dishProducts[s].balanceSheKcal),t.dishProducts[s].balance=Math.round(100*t.dishProducts[s].balanceHeWeight/t.dishProducts[s].currentWeight),this.commit("update")},balanceHeKcalUpdate:function(t,e){var a=e.product,i=e.value,s=t.dishProducts.findIndex((function(t){return t.uniqueKey===a.uniqueKey}),a);t.dishProducts[s].balanceHeKcal=i,t.dishProducts[s].balanceHeWeight=Math.round(i*a.baseWeight/a.baseKcal),t.dishProducts[s].balanceSheKcal=Math.round(t.dishProducts[s].currentKcal-i),t.dishProducts[s].balanceSheWeight=Math.round(t.dishProducts[s].currentWeight-t.dishProducts[s].balanceHeWeight),t.dishProducts[s].balance=Math.round(100*t.dishProducts[s].balanceHeKcal/t.dishProducts[s].currentKcal),this.commit("update")},balanceSheKcalUpdate:function(t,e){var a=e.product,i=e.value,s=t.dishProducts.findIndex((function(t){return t.uniqueKey===a.uniqueKey}),a);t.dishProducts[s].balanceSHeKcal=i,t.dishProducts[s].balanceSheWeight=Math.round(i*a.baseWeight/a.baseKcal),t.dishProducts[s].balanceHeKcal=Math.round(t.dishProducts[s].currentKcal-i),t.dishProducts[s].balanceHeWeight=Math.round(t.dishProducts[s].currentWeight-t.dishProducts[s].balanceSheWeight),t.dishProducts[s].balance=Math.round(100*t.dishProducts[s].balanceHeKcal/t.dishProducts[s].currentKcal),this.commit("update")},saveDishName:function(t,e){t.dishName=e},saveDish:function(t,e){null===t.dishUUID&&(t.dishUUID=e);var a={totalDishKcal:t.totalDishKcal,totalDishKcalHe:t.totalDishKcalHe,totalDishKcalShe:t.totalDishKcalShe,dishProducts:t.dishProducts,currentDishKcal:t.currentDishKcal,currentDishHeKcal:t.currentDishHeKcal,currentDishSheKcal:t.currentDishSheKcal,currentDishWeight:t.currentDishWeight,currentDishHeWeight:t.currentDishHeWeight,currentDishSheWeight:t.currentDishSheWeight,dishName:t.dishName,dishUUID:t.dishUUID},i=t.dishList.findIndex((function(t){return t.dishUUID===a.dishUUID}),a);-1!==i?t.dishList[i]=a:t.dishList.push(a),this.commit("syncDishListLocalStorage")},deleteDish:function(t,e){t.dishList.splice(e,1),this.commit("syncDishListLocalStorage")},loadDish:function(t,e){var a=t.dishList[e];t.totalDishKcal=a.totalDishKcal,t.totalDishKcalHe=a.totalDishKcalHe,t.totalDishKcalShe=a.totalDishKcalShe,t.dishProducts=a.dishProducts,t.currentDishKcal=a.currentDishKcal,t.currentDishHeKcal=a.currentDishHeKcal,t.currentDishSheKcal=a.currentDishSheKcal,t.currentDishWeight=a.currentDishWeight,t.currentDishHeWeight=a.currentDishHeWeight,t.currentDishSheWeight=a.currentDishSheWeight,t.dishName=a.dishName,t.dishUUID=a.dishUUID,this.commit("update")},syncDishListLocalStorage:function(t){localStorage.dishList=JSON.stringify(t.dishList)},syncProductListLocalStorage:function(t){localStorage.productList=JSON.stringify(t.productList)},saveProduct:function(t,e){var a=t.productList.findIndex((function(t){return t.uniqueKey===e.uniqueKey}),e);-1!==a?t.productList[a]=e:t.productList.push(e),this.commit("syncProductListLocalStorage")},deleteProductFromDish:function(t,e){var a=t.dishProducts.findIndex((function(t){return t.uniqueKey===e.uniqueKey}),e);t.dishProducts.splice(a,1),this.commit("update")},deleteProductFromStorage:function(t,e){t.productList.splice(e,1),this.commit("syncProductListLocalStorage")},loadProductFromStorage:function(t,e){var a=t.productList[e],i=t.dishProducts.findIndex((function(t){return t.uniqueKey===a.uniqueKey}),a);-1!==i?t.dishProducts[i]=a:t.dishProducts.push(a),this.commit("update")}}});new i["a"]({render:function(t){return t(tt)},store:it}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.79341d5d.js.map