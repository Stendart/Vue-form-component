(function(e){function t(t){for(var o,i,s=t[0],l=t[1],u=t[2],m=0,d=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={app:0},a=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Vue-form-component/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4189:function(e,t,r){},5478:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=r("1dce"),a=r.n(n),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("button",{staticClass:"btn center",on:{click:e.openModal}},[e._v("Регистрация")]),e.isShowModal?r("appModal",{attrs:{title:"Форма создания клиента"},on:{close:e.closeModal}},[e.isShowForm?r("AppForm",{on:{completedForm:e.completedForm}}):e._e(),e.isShowForm?e._e():r("AppMessage")],1):e._e()],1)},s=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"modal-backdrop",on:{click:function(t){return e.$emit("close")}}}),r("div",{staticClass:"modal"},[e.title?r("h3",[e._v(e._s(e.title))]):e._e(),e._t("default")],2)])},u=[],c={name:"AppModal",props:{title:String}},m=c,d=(r("6704"),r("2877")),f=Object(d["a"])(m,l,u,!1,null,"2cdfb6b2",null),p=f.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[1===e.formPart?r("div",{key:1},[r("div",{staticClass:"form__group"},[r("FormField",{staticClass:"mt",attrs:{v:e.$v.form.surName,title:"Фамилия*"},model:{value:e.form.surName,callback:function(t){e.$set(e.form,"surName",t)},expression:"form.surName"}}),r("FormField",{staticClass:"mt",attrs:{v:e.$v.form.firstName,title:"Имя*"},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}}),r("FormField",{staticClass:"mt",attrs:{v:e.$v.form.patronymic,title:"Отчество"},model:{value:e.form.patronymic,callback:function(t){e.$set(e.form,"patronymic",t)},expression:"form.patronymic"}})],1),r("div",{staticClass:"gender"},[r("label",[e._v("Пол "),r("div",{staticClass:"gender__radio"},[r("p",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.gender,expression:"form.gender"}],attrs:{type:"radio",name:"gender",value:"Мужской"},domProps:{checked:e._q(e.form.gender,"Мужской")},on:{change:function(t){return e.$set(e.form,"gender","Мужской")}}}),e._v("Мужской")]),r("p",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.gender,expression:"form.gender"}],attrs:{type:"radio",name:"gender",value:"Женский"},domProps:{checked:e._q(e.form.gender,"Женский")},on:{change:function(t){return e.$set(e.form,"gender","Женский")}}}),e._v("Женский")])])])])]):e._e(),2===e.formPart?r("div",{key:2},[r("div",{staticClass:"form__group"},[r("div",[r("label",[e._v("Дата рождения* "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.birthDate,expression:"form.birthDate"}],staticClass:"form__date",attrs:{type:"date"},domProps:{value:e.form.birthDate},on:{input:function(t){t.target.composing||e.$set(e.form,"birthDate",t.target.value)}}})]),e.isTouch&&!e.$v.form.birthDate.required?r("small",[e._v(" Обязательное поле ")]):e.isTouch&&!e.$v.form.birthDate.maxValue?r("small",[e._v(" Дата не может быть выше текущей ")]):e._e()]),r("FormField",{staticClass:"mt",attrs:{v:e.$v.form.phone,title:"Номер телефона*"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),e._m(0)],1),r("div",{staticClass:"mt"},[r("label",[e._v("Группа клиентов* "),r("div",[r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.clientGroup,expression:"form.clientGroup"}],staticClass:"client__group",attrs:{multiple:"",size:"3"},on:{blur:e.$v.form.clientGroup.$touch,change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"clientGroup",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"vip"}},[e._v("VIP")]),r("option",{attrs:{value:"problem"}},[e._v("Проблемные")]),r("option",{attrs:{value:"omc"}},[e._v("ОМС")])])])]),e.$v.form.clientGroup.$dirty&&!e.$v.form.clientGroup.required?r("small",[e._v(" "+e._s(e.errorMessage("required")))]):e._e()]),r("div",{staticClass:"mt"},[r("label",[e._v("Лечащий врач "),r("div",[r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.doctor,expression:"form.doctor"}],staticClass:"select__group",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"doctor",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"done"}},[e._v("Иванов")]),r("option",{attrs:{value:"cancelled"}},[e._v("Захаров")]),r("option",{attrs:{value:"active"}},[e._v("Чернышева")])])])])])]):e._e(),3===e.formPart?r("div",{key:3},[r("fieldset",[r("legend",[e._v("Адрес:")]),r("FormField",{attrs:{v:e.$v.form.index,title:"Индекс"},model:{value:e.form.index,callback:function(t){e.$set(e.form,"index",t)},expression:"form.index"}}),r("FormField",{staticClass:"mt",attrs:{v:e.$v.form.country,title:"Страна"},model:{value:e.form.country,callback:function(t){e.$set(e.form,"country",t)},expression:"form.country"}}),r("FormField",{staticClass:"mt",attrs:{v:e.$v.form.region,title:"Область"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}}),r("FormField",{staticClass:"mt",attrs:{v:e.$v.form.city,title:"Город*"},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}}),r("FormField",{staticClass:"mt",attrs:{v:e.$v.form.street,title:"Улица"},model:{value:e.form.street,callback:function(t){e.$set(e.form,"street",t)},expression:"form.street"}}),r("FormField",{staticClass:"mt",attrs:{v:e.$v.form.house,title:"Дом"},model:{value:e.form.house,callback:function(t){e.$set(e.form,"house",t)},expression:"form.house"}})],1)]):e._e(),4===e.formPart?r("div",{key:4},[r("fieldset",[r("legend",[e._v("Паспорт:")]),r("label",[e._v("Тип документа* "),r("div",[r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.documentType,expression:"form.documentType"}],staticClass:"select__group",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"documentType",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"done"}},[e._v("Паспорт")]),r("option",{attrs:{value:"cancelled"}},[e._v("Свидетельство о рождении")]),r("option",{attrs:{value:"active"}},[e._v("Вод. удостоверение")])]),e.isTouch&&!e.$v.form.documentType.required?r("small",[e._v(" "+e._s(e.errorMessage("required")))]):e._e()])]),r("FormField",{staticClass:"mt",attrs:{v:e.$v.form.documentSeries,title:"Серия"},model:{value:e.form.documentSeries,callback:function(t){e.$set(e.form,"documentSeries",t)},expression:"form.documentSeries"}}),r("FormField",{staticClass:"mt",attrs:{v:e.$v.form.documentNumber,title:"Номер"},model:{value:e.form.documentNumber,callback:function(t){e.$set(e.form,"documentNumber",t)},expression:"form.documentNumber"}}),r("FormField",{staticClass:"mt",attrs:{v:e.$v.form.documentIssued,title:"Кем выдан"},model:{value:e.form.documentIssued,callback:function(t){e.$set(e.form,"documentIssued",t)},expression:"form.documentIssued"}}),r("div",{staticClass:"mt"},[r("label",[e._v("Дата выдачи* "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.documentDate,expression:"form.documentDate"}],staticClass:"form__date",attrs:{type:"date"},domProps:{value:e.form.documentDate},on:{input:function(t){t.target.composing||e.$set(e.form,"documentDate",t.target.value)}}})]),e.isTouch&&!e.$v.form.documentDate.required?r("small",[e._v(" Обязательное поле ")]):e.isTouch&&!e.$v.form.documentDate.maxValue?r("small",[e._v(" Дата не может быть выше текущей ")]):e._e()])],1)]):e._e(),r("div",{staticClass:"mt"},[r("button",{staticClass:"btn primary",attrs:{disabled:!(e.formPart>1),type:"button"},on:{click:function(t){e.formPart--}}},[e._v("Назад")]),r("button",{staticClass:"btn primary",attrs:{disabled:!(e.formPart<4),type:"button"},on:{click:function(t){e.formPart++}}},[e._v("Далее")]),r("button",{staticClass:"btn primary",attrs:{disabled:4!==e.formPart,type:"submit"}},[e._v("Отправить")])])])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",[r("input",{attrs:{type:"checkbox"}}),e._v("Не отправлять СМС ")])}],_=(r("d3b7"),r("25f0"),r("b5ae")),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-control"},[r("label",[e._v(e._s(e.title)+" "),r("input",{staticClass:"form-control__input",class:{invalid:e.v.$dirty&&e.v.$error},attrs:{type:"text"},domProps:{value:e.value},on:{input:function(t){return e.inputHandler(t.target.value)},blur:function(t){return e.v.$touch()}}})]),e._l(e.spliceValidators,(function(t){return e.v.$dirty&&e.getValidatorValue(t)?r("small",[e._v(" "+e._s(e.errorMessage(t)))]):e._e()}))],2)},g=[],y=(r("b64b"),{required:"Обязательное поле",minLength:"Слишком короткая запись",maxLength:"Слишком длинная запись",email:"Не корректно введён email",maxValue:"Значение поля превышает максимально допустимый предел",alpha:"Поле может содержать только буквы",numeric:"Поле может содержать только цифры",alphaNum:"Поле может содержать только буквы и цифры",checkFirstPhoneNum:'Первая цифра должна быть "7"'}),$={name:"FormField",props:{v:{type:Object},title:{type:String},value:{}},data:function(){return{}},methods:{checkValidation:function(){this.v.$touch()},inputHandler:function(e){this.$emit("input",e)},getValidatorValue:function(e){return!this.v[e]},errorMessage:function(e){return y[e]}},computed:{spliceValidators:function(){var e,t=Object.keys(null===(e=this.v)||void 0===e?void 0:e.$params);return t}},created:function(){this.$parent.$on("check",this.checkValidation)}},x=$,F=(r("6b3d"),Object(d["a"])(x,b,g,!1,null,"1449a814",null)),k=F.exports,C=function(e){return!_["helpers"].req(e)||"7"===e.toString()[0]},N=_["helpers"].regex("alpha",/^[а-яА-Яa-zA-Z]*$/),w=_["helpers"].regex("alphaNum",/^[а-яА-Яa-zA-Z0-9]*$/),S=function(e){if("string"===typeof e)return 0!==e.length},M=function(e){return new Date(e)<new Date},P={name:"AppForm",data:function(){return{formPart:1,isTouch:!1,form:{firstName:"",surName:"",patronymic:"",gender:"",birthDate:"",phone:null,isSendMessage:!1,clientGroup:[],doctor:"",index:"",country:"",region:"",city:"",street:"",house:"",documentType:"",documentSeries:"",documentNumber:"",documentIssued:"",documentDate:""}}},validations:{form:{firstName:{required:_["required"],alpha:N},surName:{required:_["required"],alpha:N},patronymic:{alpha:N},gender:{},birthDate:{required:S,maxValue:M},phone:{required:_["required"],minLength:Object(_["minLength"])(11),maxLength:Object(_["maxLength"])(11),numeric:_["numeric"],checkFirstPhoneNum:C},isSendMessage:{},clientGroup:{required:_["required"]},doctor:{},index:{numeric:_["numeric"]},country:{alpha:N},region:{alphaNum:w},city:{required:_["required"],alphaNum:w},street:{alphaNum:w},house:{},documentType:{required:_["required"]},documentSeries:{alpha:N},documentNumber:{numeric:_["numeric"]},documentIssued:{alphaNum:w},documentDate:{required:S,maxValue:M}}},methods:{onSubmit:function(){this.$v.form.clientGroup.$touch(),this.customTouch(),this.$emit("check"),this.$v.$invalid||this.$emit("completedForm")},errorMessage:function(e){return y[e]},customTouch:function(){this.isTouch=!0}},components:{FormField:k}},q=P,O=(r("6ecb"),Object(d["a"])(q,v,h,!1,null,"29a0cb0d",null)),D=O.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v("Форма успешно создана")])},T=[],V={name:"AppMessage"},A=V,G=Object(d["a"])(A,j,T,!1,null,"f6d9c0f0",null),I=G.exports,E={name:"App",data:function(){return{isShowForm:!1,isShowModal:!1}},methods:{completedForm:function(){this.isShowForm=!1},closeModal:function(){this.isShowForm=!1,this.isShowModal=!1},openModal:function(){this.isShowForm=!0,this.isShowModal=!0}},components:{AppModal:p,AppForm:D,AppMessage:I}},L=E,z=(r("5c0b"),Object(d["a"])(L,i,s,!1,null,null,null)),H=z.exports;o["a"].config.productionTip=!1,o["a"].config.devtools=!0,o["a"].use(a.a),new o["a"]({render:function(e){return e(H)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},6704:function(e,t,r){"use strict";r("e36a")},"6b3d":function(e,t,r){"use strict";r("5478")},"6ecb":function(e,t,r){"use strict";r("4189")},"9c0c":function(e,t,r){},e36a:function(e,t,r){}});
//# sourceMappingURL=app.007b5684.js.map