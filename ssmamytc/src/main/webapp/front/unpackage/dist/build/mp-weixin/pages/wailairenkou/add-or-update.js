(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wailairenkou/add-or-update"],{"064e":function(n,e,u){"use strict";u.r(e);var r=u("d626"),t=u.n(r);for(var i in r)"default"!==i&&function(n){u.d(e,n,(function(){return r[n]}))}(i);e["default"]=t.a},"6b7e":function(n,e,u){"use strict";(function(n){u("281b");r(u("66fd"));var e=r(u("7144"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,u("543d")["createPage"])},7144:function(n,e,u){"use strict";u.r(e);var r=u("9a9b"),t=u("064e");for(var i in t)"default"!==i&&function(n){u.d(e,n,(function(){return t[n]}))}(i);u("a206");var a,o=u("f0c5"),c=Object(o["a"])(t["default"],r["b"],r["c"],!1,null,"527e7f1b",null,!1,r["a"],a);e["default"]=c.exports},"9a9b":function(n,e,u){"use strict";var r;u.d(e,"b",(function(){return t})),u.d(e,"c",(function(){return i})),u.d(e,"a",(function(){return r}));var t=function(){var n=this,e=n.$createElement;n._self._c},i=[]},a206:function(n,e,u){"use strict";var r=u("ddb0"),t=u.n(r);t.a},d626:function(n,e,u){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t(u("a34a"));function t(n){return n&&n.__esModule?n:{default:n}}function i(n,e,u,r,t,i,a){try{var o=n[i](a),c=o.value}catch(s){return void u(s)}o.done?e(c):Promise.resolve(c).then(r,t)}function a(n){return function(){var e=this,u=arguments;return new Promise((function(r,t){var a=n.apply(e,u);function o(n){i(a,r,t,o,c,"next",n)}function c(n){i(a,r,t,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([u.e("common/vendor"),u.e("components/w-picker/w-picker")]).then(function(){return resolve(u("ac15"))}.bind(null,u)).catch(u.oe)},c={data:function(){return{ruleForm:{shenfenzhenghao:"",mima:"",xingming:"",chushengriqi:"",xingbie:"",minzu:"",zhiye:"",hunyinzhuangkuang:"",wenhuachengdu:"",xuexing:"",shouji:"",jiankangzhuangkuang:"",zanzhudizhi:"",hujisuozaidi:"",sfsh:"",shhf:""},xingbieOptions:[],xingbieIndex:0,hunyinzhuangkuangOptions:[],hunyinzhuangkuangIndex:0,user:{},ro:{shenfenzhenghao:!1,mima:!1,xingming:!1,chushengriqi:!1,xingbie:!1,minzu:!1,zhiye:!1,hunyinzhuangkuang:!1,wenhuachengdu:!1,xuexing:!1,shouji:!1,jiankangzhuangkuang:!1,zanzhudizhi:!1,hujisuozaidi:!1,sfsh:!1,shhf:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var u=this;return a(r.default.mark((function t(){var i,a,o,c;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=n.getStorageSync("nowTable"),t.next=3,u.$api.session(i);case 3:if(a=t.sent,u.user=a.data,u.xingbieOptions="男,女".split(","),u.hunyinzhuangkuangOptions="已婚,未婚".split(","),u.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(u.ruleForm.refid=e.refid,u.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){t.next=15;break}return u.ruleForm.id=e.id,t.next=13,u.$api.info("wailairenkou",u.ruleForm.id);case 13:a=t.sent,u.ruleForm=a.data;case 15:if(!e.cross){t.next=78;break}o=n.getStorageSync("crossObj"),t.t0=r.default.keys(o);case 18:if((t.t1=t.t0()).done){t.next=78;break}if(c=t.t1.value,"shenfenzhenghao"!=c){t.next=24;break}return u.ruleForm.shenfenzhenghao=o[c],u.ro.shenfenzhenghao=!0,t.abrupt("continue",18);case 24:if("mima"!=c){t.next=28;break}return u.ruleForm.mima=o[c],u.ro.mima=!0,t.abrupt("continue",18);case 28:if("xingming"!=c){t.next=32;break}return u.ruleForm.xingming=o[c],u.ro.xingming=!0,t.abrupt("continue",18);case 32:if("chushengriqi"!=c){t.next=36;break}return u.ruleForm.chushengriqi=o[c],u.ro.chushengriqi=!0,t.abrupt("continue",18);case 36:if("xingbie"!=c){t.next=40;break}return u.ruleForm.xingbie=o[c],u.ro.xingbie=!0,t.abrupt("continue",18);case 40:if("minzu"!=c){t.next=44;break}return u.ruleForm.minzu=o[c],u.ro.minzu=!0,t.abrupt("continue",18);case 44:if("zhiye"!=c){t.next=48;break}return u.ruleForm.zhiye=o[c],u.ro.zhiye=!0,t.abrupt("continue",18);case 48:if("hunyinzhuangkuang"!=c){t.next=52;break}return u.ruleForm.hunyinzhuangkuang=o[c],u.ro.hunyinzhuangkuang=!0,t.abrupt("continue",18);case 52:if("wenhuachengdu"!=c){t.next=56;break}return u.ruleForm.wenhuachengdu=o[c],u.ro.wenhuachengdu=!0,t.abrupt("continue",18);case 56:if("xuexing"!=c){t.next=60;break}return u.ruleForm.xuexing=o[c],u.ro.xuexing=!0,t.abrupt("continue",18);case 60:if("shouji"!=c){t.next=64;break}return u.ruleForm.shouji=o[c],u.ro.shouji=!0,t.abrupt("continue",18);case 64:if("jiankangzhuangkuang"!=c){t.next=68;break}return u.ruleForm.jiankangzhuangkuang=o[c],u.ro.jiankangzhuangkuang=!0,t.abrupt("continue",18);case 68:if("zanzhudizhi"!=c){t.next=72;break}return u.ruleForm.zanzhudizhi=o[c],u.ro.zanzhudizhi=!0,t.abrupt("continue",18);case 72:if("hujisuozaidi"!=c){t.next=76;break}return u.ruleForm.hujisuozaidi=o[c],u.ro.hujisuozaidi=!0,t.abrupt("continue",18);case 76:t.next=18;break;case 78:u.styleChange();case 79:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(n){this.xingbieIndex=n.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},hunyinzhuangkuangChange:function(n){this.hunyinzhuangkuangIndex=n.target.value,this.ruleForm.hunyinzhuangkuang=this.hunyinzhuangkuangOptions[this.hunyinzhuangkuangIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return a(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.ruleForm.shenfenzhenghao){e.next=3;break}return n.$utils.msg("身份证号不能为空"),e.abrupt("return");case 3:if(!n.ruleForm.shenfenzhenghao||n.$validate.checkIdCard(n.ruleForm.shenfenzhenghao)){e.next=6;break}return n.$utils.msg("身份证号应输入身份证格式"),e.abrupt("return");case 6:if(n.ruleForm.mima){e.next=9;break}return n.$utils.msg("密码不能为空"),e.abrupt("return");case 9:if(n.ruleForm.xingming){e.next=12;break}return n.$utils.msg("姓名不能为空"),e.abrupt("return");case 12:if(!n.ruleForm.id){e.next=17;break}return e.next=15,n.$api.update("wailairenkou",n.ruleForm);case 15:e.next=19;break;case 17:return e.next=19,n.$api.add("wailairenkou",n.ruleForm);case 19:n.$utils.msgBack("提交成功");case 20:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,u=e.getFullYear(),r=e.getMonth()+1,t=e.getDate();return"start"===n?u-=60:"end"===n&&(u+=2),r=r>9?r:"0"+r,t=t>9?t:"0"+t,"".concat(u,"-").concat(r,"-").concat(t)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,u("543d")["default"])},ddb0:function(n,e,u){}},[["6b7e","common/runtime","common/vendor"]]]);