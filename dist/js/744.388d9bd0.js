"use strict";(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[744],{7744:function(e,t,s){s.r(t),s.d(t,{default:function(){return Z}});var a=s(4562),r=s(9582),i=s(4886),n=s(9256),o=s(4061),l=(s(9027),s(7549)),d=(0,l.Z)("flex"),u=(s(7658),s(7678)),c=s(2500),p=s(4712),h=(0,u.Z)(c.Z,(0,p.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),s={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=e.$watch("shouldValidate",(a=>{a&&(this.errorBag.hasOwnProperty(e._uid)||(s.valid=t(e)))})):s.valid=t(e),s},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find((t=>t._uid===e._uid));if(!t)return;const s=this.watchers.find((e=>e._uid===t._uid));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}}),m=(0,l.Z)("layout"),f=s(7808),g=function(){var e=this,t=e._self._c;return t(n.Z,{staticStyle:{background:"black"},attrs:{fluid:"","fill-height":""}},[t(m,{attrs:{"align-center":"","justify-center":""}},[t(d,{attrs:{xs12:"",sm8:"",md4:""}},[t(r.Z,{staticClass:"rounded-xl",attrs:{dark:""}},[t(i.EB,{staticClass:"justify-center pa-5"},[e._v("Login")]),t(h,{ref:"form",staticClass:"px-8 mb-n2",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(f.Z,{attrs:{color:"black","prepend-inner-icon":"mdi-account",label:"Username",type:"text","solo-inverted":"",counter:10,rules:e.nameRules,rounded:""},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.performAction("login")}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t(f.Z,{attrs:{color:"black","prepend-inner-icon":"mdi-lock","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",label:"Password",type:e.showPassword?"text":"password","solo-inverted":"",rules:e.passwordRules,rounded:""},on:{"click:append":function(t){e.showPassword=!e.showPassword},keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.performAction("login")}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),t(i.h7,{staticClass:"justify-center pb-5"},[t(a.Z,{staticClass:"mr-5 px-4",class:e.$vuetify.theme.dark?"white--text":"black--text",attrs:{rounded:"",color:"accent",dark:"",elevation:"0"},on:{click:function(t){return t.stopPropagation(),e.performAction("signup")}}},[e._v(" Sign Up ")]),t(a.Z,{class:e.$vuetify.theme.dark?"white--text":"black--text",attrs:{rounded:"",color:"accent",dark:"",elevation:"0 px-4"},on:{click:function(t){return t.stopPropagation(),e.performAction("login")}}},[e._v(" Login ")])],1)],1)],1)],1),t(o.Z,{attrs:{fullscreen:""},model:{value:e.showSignUpForm,callback:function(t){e.showSignUpForm=t},expression:"showSignUpForm"}},[t("signUpForm",{on:{closeForm:function(t){e.showSignUpForm=!1}}})],1)],1)},v=[],w=function(){var e=this,t=e._self._c;return t(r.Z,{attrs:{dark:""}},[t(i.EB,{staticClass:"justify-center py-8"},[e._v("Sign up with your email address")]),t(i.ZB,[t(h,{ref:"signUpForm",staticClass:"px-8 mt-3",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(f.Z,{attrs:{type:"mail","prepend-inner-icon":"mdi-mail",rules:e.emailRules,label:"E-mail",required:"","solo-inverted":"",rounded:"",color:"black"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t(f.Z,{attrs:{type:"name","prepend-inner-icon":"mdi-account",counter:10,rules:e.nameRules,label:"Profile Name",required:"","solo-inverted":"",rounded:"",color:"black"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t(f.Z,{attrs:{type:e.showPassword?"text":"password","prepend-inner-icon":"mdi-key","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",rules:e.passwordRules,label:"Create a password",required:"","solo-inverted":"",rounded:"",color:"black"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),t(i.h7,{staticClass:"justify-center pb-5 mt-n2"},[t(a.Z,{staticClass:"mr-5 px-4",class:e.$vuetify.theme.dark?"white--text":"black--text",attrs:{rounded:"",color:"accent",dark:"",elevation:"0"},on:{click:e.goToLoginPage}},[e._v(" Cancel ")]),t(a.Z,{class:e.$vuetify.theme.dark?"white--text":"black--text",attrs:{rounded:"",color:"accent",dark:"",elevation:"0 px-4"},on:{click:e.createUser}},[e._v(" Sign up ")])],1)],1)],1)},b=[],k={name:"sign-up-component",props:{},data:()=>({valid:!0,name:"",nameRules:[e=>!!e||"Name is required",e=>e&&e.length<=10||"Name must be less than 10 characters"],email:"",emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+\..+/.test(e)||"E-mail must be valid"],showPassword:!1,password:"",passwordRules:[e=>!!e||"Password is required.",e=>e&&e.length>=8||"Minimum 8 characters"],userDatabase:[]}),computed:{},methods:{isUserValid(){return this.userDatabase=[],null!==localStorage.getItem("userDatabase")&&0!==JSON.parse(localStorage.getItem("userDatabase")).length?(this.userDatabase=JSON.parse(localStorage.getItem("userDatabase")),!this.userDatabase.some((e=>e.name===this.name))&&!this.userDatabase.some((e=>e.mail===this.email))):(localStorage.setItem("userDatabase",JSON.stringify(this.userDatabase)),!0)},goToLoginPage(){this.$refs.signUpForm.resetValidation(),this.$refs.signUpForm.reset(),this.$emit("closeForm")},createUser(){if(this.$refs.signUpForm.validate())if(this.isUserValid()){let e={name:this.name,mail:this.email,password:this.password,avatar:null};this.userDatabase.push(e),localStorage.setItem("userDatabase",JSON.stringify(this.userDatabase)),this.goToLoginPage()}else alert("Username/Email already exists.")}}},y=k,x=s(1001),P=(0,x.Z)(y,w,b,!1,null,null,null),S=P.exports,_={name:"user-auth-component",data:()=>({valid:!0,name:"",nameRules:[e=>!!e||"Name is required",e=>e&&e.length<=10||"Name must be less than 10 characters"],showPassword:!1,password:"",passwordRules:[e=>!!e||"Password is required.",e=>e&&e.length>=8||"Minimum 8 characters"],showSignUpForm:!1,userDatabase:[]}),components:{signUpForm:S},computed:{},beforeCreate(){JSON.stringify(this.$store.getters.currentUser)!==JSON.stringify({})&&this.$router.push({path:"/dashboard"})},methods:{isUserValid(){if(this.userDatabase=[],null!==localStorage.getItem("userDatabase")){this.userDatabase=JSON.parse(localStorage.getItem("userDatabase"));for(var e=0;e<this.userDatabase.length;e++)if(this.name===this.userDatabase[e].name&&this.password===this.userDatabase[e].password)return[!0,this.userDatabase[e]];return[!1]}return[!1]},performAction(e){"signup"===e?this.showSignUpForm=!0:this.$refs.form.validate()&&(!0===this.isUserValid()[0]?(this.$store.dispatch("setCurrentUser",{name:this.isUserValid()[1].name,email:this.isUserValid()[1].mail,avatar:this.isUserValid()[1].avatar}),"/"===this.$router.currentRoute.path&&this.$router.push({path:"/dashboard"})):alert("Cannot find user."))}}},U=_,$=(0,x.Z)(U,g,v,!1,null,null,null),Z=$.exports},1884:function(){},9256:function(e,t,s){s(9027),s(1884);var a=s(7549),r=s(1767);t["Z"]=(0,a.Z)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:s,children:a}){let i;const{attrs:n}=s;return n&&(s.attrs={},i=Object.keys(n).filter((e=>{if("slot"===e)return!1;const t=n[e];return e.startsWith("data-")?(s.attrs[e]=t,!1):t||"string"===typeof t}))),t.id&&(s.domProps=s.domProps||{},s.domProps.id=t.id),e(t.tag,(0,r.ZP)(s,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(i||[])}),a)}})},7549:function(e,t,s){s.d(t,{Z:function(){return r}});var a=s(144);function r(e){return a.ZP.extend({name:`v-${e}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:s,data:a,children:r}){a.staticClass=`${e} ${a.staticClass||""}`.trim();const{attrs:i}=a;if(i){a.attrs={};const e=Object.keys(i).filter((e=>{if("slot"===e)return!1;const t=i[e];return e.startsWith("data-")?(a.attrs[e]=t,!1):t||"string"===typeof t}));e.length&&(a.staticClass+=` ${e.join(" ")}`)}return s.id&&(a.domProps=a.domProps||{},a.domProps.id=s.id),t(s.tag,a,r)}})}}}]);
//# sourceMappingURL=744.388d9bd0.js.map