webpackJsonp([1],{"3Why":function(i,t){},NHnr:function(i,t,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=p("7+uW"),s={render:function(){var i=this.$createElement,t=this._self._c||i;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=p("VU/8")({name:"App"},s,!1,function(i){p("V5cv")},null,null).exports,e=p("/ocq"),a=p("Iwrh"),x=p.n(a),r={props:{options:{type:Object,required:!0},height:Number,width:Number},data:function(){return{style:{width:this.width?this.width+"px":"100%",height:this.height?this.height+"px":"100%",overflow:"hidden",margin:"0 auto"}}},mounted:function(){this.anim=x.a.loadAnimation({container:this.$refs.lavContainer,renderer:"svg",loop:!1!==this.options.loop,autoplay:!1!==this.options.autoplay,animationData:this.options.animationData,rendererSettings:this.options.rendererSettings}),this.$emit("animCreated",this.anim)}},_={render:function(){var i=this.$createElement;return(this._self._c||i)("div",{ref:"lavContainer",style:this.style})},staticRenderFns:[]},y=p("VU/8")(r,_,!1,null,null,null).exports,c=p("eSMG"),k={name:"app",components:{lottie:y},data:function(){return{defaultOptions:{animationData:c},animationSpeed:1}},methods:{handleAnimation:function(i){this.anim=i},stop:function(){this.anim.stop()},play:function(){this.anim.play()},pause:function(){this.anim.pause()},onSpeedChange:function(){this.anim.setSpeed(this.animationSpeed)}}},h={render:function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"bottom",attrs:{id:"app"}},[t("lottie",{attrs:{options:this.defaultOptions,height:200,width:200,animCreated:this.handleAnimation}})],1)},staticRenderFns:[]};var m={name:"HelloWorld",components:{noCont:p("VU/8")(k,h,!1,function(i){p("yLfF")},"data-v-70b4d026",null).exports},data:function(){return{x:0,y:0,nocont:!1,text:"怼大海不？",first:!0,two:!0,i:0}},created:function(){this.x=window.screen.availWidth-60,this.y=window.screen.availHeight,console.log(this.x,this.y)},methods:{sure:function(){var i=this;this.$refs.sure_1.style.marginLeft=Math.floor(260*Math.random())+"px",this.$refs.sure_1.style.marginTop=Math.floor(300*Math.random())+"px",console.log(this.$refs.sure_1.style.marginTop,this.$refs.sure_1.style.marginTop),this.i++,this.i>3&&(this.$refs.sure_1.style.marginLeft="70px",this.$refs.sure_1.style.marginTop="-60px",setInterval(function(){i.two=!1,i.sucess()},300))},sure_2:function(){this.$refs.sure_1.style.marginLeft=Math.floor(260*Math.random())+"px",this.$refs.sure_1.style.marginTop=Math.floor(300*Math.random())+"px",console.log(this.$refs.sure_1.style.marginTop,this.$refs.sure_1.style.marginTop),this.i++,this.i>3&&(this.two=!1,alert("你不能拒绝，请使劲点怼！！！"))},sucess:function(){this.nocont=!0,this.text="大海被怼懵逼了，哈哈哈哈",window.scrollTo(0,0),this.first=!1,this.two=!1},reset:function(){this.$refs.sure_1.style.marginLeft="90px",this.$refs.sure_1.style.marginTop="80px",this.nocont=!1,this.first=!0,this.two=!0,this.text="怼大海不"}}},d={render:function(){var i=this,t=i.$createElement,p=i._self._c||t;return p("div",{staticClass:"wrap"},[p("div",{staticClass:"box"},[i.nocont?p("noCont"):i._e(),i._v(" "),p("h2",[i._v(i._s(i.text))]),i._v(" "),p("p",{directives:[{name:"show",rawName:"v-show",value:i.first,expression:"first"}],staticClass:"sucess",on:{click:i.sucess}},[i._v("怼")]),i._v(" "),p("transition",{attrs:{name:"fade",mode:"out-in"}},[p("p",{directives:[{name:"show",rawName:"v-show",value:i.two,expression:"two"}],ref:"sure_1",staticClass:"sure",on:{mouseover:i.sure,click:i.sure_2}},[i._v("不怼")])])],1)])},staticRenderFns:[]};var l=p("VU/8")(m,d,!1,function(i){p("3Why")},"data-v-adfedd0c",null).exports;o.a.use(e.a);var v=new e.a({routes:[{path:"/",name:"HelloWorld",component:l}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:v,components:{App:n},template:"<App/>"})},V5cv:function(i,t){},eSMG:function(i,t){i.exports={v:"4.10.2",fr:25,ip:0,op:50,w:100,h:100,nm:"Boxing",ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:4,nm:"Head Outlines",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:0,s:[0],e:[-6]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:6.779,s:[-6],e:[9]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:14.407,s:[9],e:[4]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:21.187,s:[4],e:[-3]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:27.118,s:[-3],e:[-12]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:40.678,s:[-12],e:[0]},{t:49}],ix:10},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[46.726,27.764,0],e:[45.913,29.327,0],to:[-.13541667163372,.26041665673256,0],ti:[-.13541667163372,-.05729166790843,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:6.779,s:[45.913,29.327,0],e:[47.538,28.108,0],to:[.13541667163372,.05729166790843,0],ti:[-.16666667163372,-.10416666418314,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:14.407,s:[47.538,28.108,0],e:[46.913,29.952,0],to:[.16666667163372,.10416666418314,0],ti:[-.0625,-.453125,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:21.187,s:[46.913,29.952,0],e:[47.913,30.827,0],to:[.0625,.453125,0],ti:[.20833332836628,-.27083334326744,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:27.118,s:[47.913,30.827,0],e:[45.663,31.577,0],to:[-.20833332836628,.27083334326744,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:33.616,s:[45.663,31.577,0],e:[47.913,30.827,0],to:[0,0,0],ti:[-.125,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:37.147,s:[47.913,30.827,0],e:[46.413,31.577,0],to:[.125,0,0],ti:[.19791667163372,.51041668653488,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:42.091,s:[46.413,31.577,0],e:[46.726,27.764,0],to:[-.19791667163372,-.51041668653488,0],ti:[-.05208333209157,.63541668653488,0]},{t:49}],ix:2},a:{a:0,k:[46.726,27.764,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-.511,-.384],[-1.118,.473],[0,0],[-.176,1.188],[.225,.596],[.358,.488],[.569,.425],[.959,-.382],[.029,-.014],[.029,-.012],[.146,-.958],[-.104,-.703],[-.246,-.553]],o:[[.96,.721],[0,0],[1.126,-.449],[.094,-.632],[-.215,-.567],[-.42,-.573],[-.778,-.579],[-.029,.011],[-.029,.01],[-.951,.403],[-.107,.703],[.089,.598],[.259,.583]],v:[[-1.884,3.464],[1.485,3.926],[1.486,3.926],[3.557,1.229],[3.342,-.626],[2.534,-2.296],[1.299,-3.82],[-1.626,-3.893],[-1.71,-3.852],[-1.798,-3.822],[-3.544,-1.88],[-3.505,.245],[-3.035,1.993]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[46.732,27.784],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:751,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"L Hand Outlines",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:0,s:[0],e:[9]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:12.712,s:[9],e:[9]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:27.118,s:[9],e:[-37]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:33.616,s:[-37],e:[9]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:37.147,s:[9],e:[-48]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:40.678,s:[-48],e:[0]},{t:49}],ix:10},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[46.391,37.781,0],e:[45.751,40.202,0],to:[-.10677083581686,.40364584326744,0],ti:[-.1171875,.05989583209157,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:6.779,s:[45.751,40.202,0],e:[47.094,37.421,0],to:[.1171875,-.05989583209157,0],ti:[-.10677083581686,-.00260416674428,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:12.712,s:[47.094,37.421,0],e:[46.391,40.218,0],to:[.10677083581686,.00260416674428,0],ti:[.00260416674428,-.0390625,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:21.187,s:[46.391,40.218,0],e:[47.079,37.656,0],to:[-.00260416674428,.0390625,0],ti:[.06770833581686,-.828125,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:27.118,s:[47.079,37.656,0],e:[45.985,45.187,0],to:[-.06770833581686,.828125,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:33.616,s:[45.985,45.187,0],e:[47.079,37.656,0],to:[0,0,0],ti:[4.296875,1.359375,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:37.147,s:[47.079,37.656,0],e:[20.204,37.031,0],to:[-4.296875,-1.359375,0],ti:[.11458333581686,-.02083333395422,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:40.678,s:[20.204,37.031,0],e:[46.391,37.781,0],to:[-.11458333581686,.02083333395422,0],ti:[-4.36458349227905,-.125,0]},{t:49}],ix:2},a:{a:0,k:[46.391,37.781,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-.977,.948],[.965,1.014],[.977,-.948],[-.965,-1.013]],o:[[.977,-.948],[-.964,-1.013],[-.976,.948],[.964,1.014]],v:[[2.32,2.618],[1.206,-2.499],[-2.309,-2.618],[-2.331,.933]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[46.568,37.976],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:751,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"L Arm Outlines",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[49.813,50,0],e:[49.813,50,0],to:[0,0,0],ti:[0,0,0]},{t:49}],ix:2},a:{a:0,k:[50,50,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[1.51,-6.396],[2.01,6.396],[-2.01,2.161]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[1.521,-4.521],[2.021,8.271],[-2.125,4.911]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:6.779,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[1.521,-4.521],[2.021,8.271],[-2.125,4.911]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[1.885,-6.396],[2.385,6.396],[-1.635,2.161]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:12.712,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[1.885,-6.396],[2.385,6.396],[-1.635,2.161]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[1.521,-4.521],[2.021,8.271],[-2.125,4.911]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:21.187,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[1.521,-4.521],[2.021,8.271],[-2.125,4.911]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[1.833,-6.646],[2.333,6.146],[-1.813,2.786]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:27.118,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[1.833,-6.646],[2.333,6.146],[-1.813,2.786]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[.896,-5.771],[4.646,6.458],[.188,6.161]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:33.616,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[.896,-5.771],[4.646,6.458],[.188,6.161]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[1.833,-6.646],[2.333,6.146],[-1.813,2.786]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:37.147,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[1.833,-6.646],[2.333,6.146],[-1.813,2.786]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[.458,-5.958],[-12.979,-3.854],[-25.063,-2.777]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:40.678,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[.458,-5.958],[-12.979,-3.854],[-25.063,-2.777]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[1.51,-6.396],[2.01,6.396],[-2.01,2.161]],c:!1}]},{t:49}],ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[52.74,40.271],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:751,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"L Foot Outlines",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[50,50,0],ix:2},a:{a:0,k:[50,50,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-1.254,-1.637],[1.253,.204],[1.174,1.638]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-.754,-2.012],[2.066,.266],[.737,1.888]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:6.779,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-.754,-2.012],[2.066,.266],[.737,1.888]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-1.254,-1.637],[1.253,.204],[1.174,1.638]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:11.864,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-1.254,-1.637],[1.253,.204],[1.174,1.638]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-.754,-2.012],[2.066,.266],[.737,1.888]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:20.339,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-.754,-2.012],[2.066,.266],[.737,1.888]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-1.254,-1.637],[1.253,.204],[1.174,1.638]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:26.271,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-1.254,-1.637],[1.253,.204],[1.174,1.638]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[.372,-1.762],[2.878,.079],[2.924,2.325]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:33.616,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[.372,-1.762],[2.878,.079],[2.924,2.325]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-1.097,-1.075],[1.41,.766],[1.331,2.2]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:37.147,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-1.097,-1.075],[1.41,.766],[1.331,2.2]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[.372,-1.762],[2.878,.079],[2.924,2.325]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:40.678,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[.372,-1.762],[2.878,.079],[2.924,2.325]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-1.254,-1.637],[1.253,.204],[1.174,1.638]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:48,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-1.254,-1.637],[1.253,.204],[1.174,1.638]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-1.254,-1.637],[1.253,.204],[1.174,1.638]],c:!1}]},{t:49}],ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[70.122,86.919],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:751,st:0,bm:0},{ddd:0,ind:5,ty:4,nm:"R Foot Outlines",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[50,50,0],ix:2},a:{a:0,k:[50,50,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[40.064,85.227],[34.154,85.227]],c:!1}],e:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[40.064,84.914],[34.154,85.227]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:7,s:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[40.064,84.914],[34.154,85.227]],c:!1}],e:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[40.064,85.227],[34.154,85.227]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:21,s:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[40.064,85.227],[34.154,85.227]],c:!1}],e:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[40.252,84.664],[34.342,85.414]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:33,s:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[40.252,84.664],[34.342,85.414]],c:!1}],e:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[40.064,85.227],[34.154,85.227]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:37,s:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[40.064,85.227],[34.154,85.227]],c:!1}],e:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[40.064,85.227],[34.154,85.227]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:42,s:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[40.064,85.227],[34.154,85.227]],c:!1}],e:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[40.064,85.227],[34.154,85.227]],c:!1}]},{t:49}],ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:751,st:0,bm:0},{ddd:0,ind:6,ty:4,nm:"Body Outlines",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[50,50,0],ix:2},a:{a:0,k:[50,50,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[1.057,-11.464],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.21,1.885],[1.723,12.514],[13.639,25.302],[7.027,10.77],[4.411,-5.021],[1.447,-24.334],[-1.868,-23.737],[-4.46,-21.865],[-6.954,-20.032],[-2.967,-3.73],[-9.887,-.084],[-13.512,6.999],[-12.764,24.053],[-8.45,8.736],[-4.835,4.448],[-2.305,3.416]],c:!1}],e:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[1.057,-11.464],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.21,1.885],[1.223,14.264],[13.639,25.302],[6.152,11.395],[4.536,-3.771],[1.947,-22.959],[-1.368,-22.362],[-3.96,-20.49],[-6.453,-18.657],[-2.967,-2.855],[-9.512,.416],[-13.137,7.499],[-12.764,24.053],[-8.45,8.736],[-4.835,4.448],[-2.305,3.416]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:6.779,s:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[1.057,-11.464],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.21,1.885],[1.223,14.264],[13.639,25.302],[6.152,11.395],[4.536,-3.771],[1.947,-22.959],[-1.368,-22.362],[-3.96,-20.49],[-6.453,-18.657],[-2.967,-2.855],[-9.512,.416],[-13.137,7.499],[-12.764,24.053],[-8.45,8.736],[-4.835,4.448],[-2.305,3.416]],c:!1}],e:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[1.057,-11.464],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.21,1.885],[1.723,12.514],[13.639,25.302],[7.027,10.77],[4.411,-5.021],[2.196,-23.959],[-1.118,-23.362],[-3.71,-21.49],[-6.204,-19.657],[-2.967,-3.73],[-9.887,-.084],[-13.512,6.999],[-12.764,24.053],[-8.45,8.736],[-4.835,4.448],[-2.305,3.416]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:12.712,s:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[1.057,-11.464],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.21,1.885],[1.723,12.514],[13.639,25.302],[7.027,10.77],[4.411,-5.021],[2.196,-23.959],[-1.118,-23.362],[-3.71,-21.49],[-6.204,-19.657],[-2.967,-3.73],[-9.887,-.084],[-13.512,6.999],[-12.764,24.053],[-8.45,8.736],[-4.835,4.448],[-2.305,3.416]],c:!1}],e:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[1.057,-11.464],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.585,1.26],[1.098,14.139],[13.639,25.302],[5.652,11.645],[4.536,-3.771],[1.946,-22.959],[-1.368,-22.362],[-3.96,-20.49],[-6.454,-18.657],[-2.967,-2.855],[-9.012,.791],[-12.637,7.874],[-12.764,24.053],[-8.075,9.361],[-4.835,4.448],[-2.305,3.416]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:21.187,s:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[1.057,-11.464],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.585,1.26],[1.098,14.139],[13.639,25.302],[5.652,11.645],[4.536,-3.771],[1.946,-22.959],[-1.368,-22.362],[-3.96,-20.49],[-6.454,-18.657],[-2.967,-2.855],[-9.012,.791],[-12.637,7.874],[-12.764,24.053],[-8.075,9.361],[-4.835,4.448],[-2.305,3.416]],c:!1}],e:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[1.057,-11.464],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.21,1.885],[1.723,12.514],[13.639,25.302],[7.027,10.77],[4.411,-5.021],[1.447,-24.334],[-1.868,-23.737],[-4.46,-21.865],[-6.954,-20.032],[-2.967,-3.73],[-9.887,-.084],[-13.512,6.999],[-12.764,24.053],[-8.45,8.736],[-4.835,4.448],[-2.305,3.416]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:27.118,s:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[1.057,-11.464],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.21,1.885],[1.723,12.514],[13.639,25.302],[7.027,10.77],[4.411,-5.021],[1.447,-24.334],[-1.868,-23.737],[-4.46,-21.865],[-6.954,-20.032],[-2.967,-3.73],[-9.887,-.084],[-13.512,6.999],[-12.764,24.053],[-8.45,8.736],[-4.835,4.448],[-2.305,3.416]],c:!1}],e:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[.122,-11.479],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.21,1.885],[2.973,12.639],[15.389,25.052],[7.777,10.77],[4.411,-5.021],[.572,-23.959],[-2.743,-23.362],[-5.335,-21.49],[-7.829,-19.657],[-2.967,-3.73],[-10.762,.041],[-13.887,7.124],[-12.014,23.928],[-9.075,8.361],[-5.585,4.448],[-2.305,3.416]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:33.616,s:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[.122,-11.479],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.21,1.885],[2.973,12.639],[15.389,25.052],[7.777,10.77],[4.411,-5.021],[.572,-23.959],[-2.743,-23.362],[-5.335,-21.49],[-7.829,-19.657],[-2.967,-3.73],[-10.762,.041],[-13.887,7.124],[-12.014,23.928],[-9.075,8.361],[-5.585,4.448],[-2.305,3.416]],c:!1}],e:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[1.057,-11.464],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.21,1.885],[1.723,12.514],[13.639,25.302],[7.027,10.77],[4.411,-5.021],[1.447,-24.334],[-1.868,-23.737],[-4.46,-21.865],[-6.954,-20.032],[-2.967,-3.73],[-9.887,-.084],[-13.512,6.999],[-12.764,24.053],[-8.45,8.736],[-4.835,4.448],[-2.305,3.416]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:37.147,s:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[1.057,-11.464],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.21,1.885],[1.723,12.514],[13.639,25.302],[7.027,10.77],[4.411,-5.021],[1.447,-24.334],[-1.868,-23.737],[-4.46,-21.865],[-6.954,-20.032],[-2.967,-3.73],[-9.887,-.084],[-13.512,6.999],[-12.764,24.053],[-8.45,8.736],[-4.835,4.448],[-2.305,3.416]],c:!1}],e:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[.122,-11.479],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.21,1.885],[2.973,12.639],[15.389,25.052],[7.777,10.77],[4.411,-5.021],[.572,-23.959],[-2.743,-23.362],[-5.335,-21.49],[-7.829,-19.657],[-2.967,-3.73],[-10.762,.041],[-13.887,7.124],[-12.014,23.928],[-9.075,8.361],[-5.585,4.448],[-2.305,3.416]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:40.678,s:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[.122,-11.479],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.21,1.885],[2.973,12.639],[15.389,25.052],[7.777,10.77],[4.411,-5.021],[.572,-23.959],[-2.743,-23.362],[-5.335,-21.49],[-7.829,-19.657],[-2.967,-3.73],[-10.762,.041],[-13.887,7.124],[-12.014,23.928],[-9.075,8.361],[-5.585,4.448],[-2.305,3.416]],c:!1}],e:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[1.057,-11.464],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.21,1.885],[1.723,12.514],[13.639,25.302],[7.027,10.77],[4.411,-5.021],[1.447,-24.334],[-1.868,-23.737],[-4.46,-21.865],[-6.954,-20.032],[-2.967,-3.73],[-9.887,-.084],[-13.512,6.999],[-12.764,24.053],[-8.45,8.736],[-4.835,4.448],[-2.305,3.416]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:48,s:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[1.057,-11.464],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.21,1.885],[1.723,12.514],[13.639,25.302],[7.027,10.77],[4.411,-5.021],[1.447,-24.334],[-1.868,-23.737],[-4.46,-21.865],[-6.954,-20.032],[-2.967,-3.73],[-9.887,-.084],[-13.512,6.999],[-12.764,24.053],[-8.45,8.736],[-4.835,4.448],[-2.305,3.416]],c:!1}],e:[{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[.824,-.509],[0,0],[1.14,-.848],[1.057,-11.464],[2.425,-1.522],[-.126,-2.69],[0,0],[0,0],[-1.844,1.062],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[2.397,-8.719],[-1.381,-.968],[0,0],[-.359,.269],[-1.884,1.402],[-1.679,.371],[-2.281,1.433],[0,0],[0,0],[1.114,-3.476],[0,0],[0,0]],v:[[-2.21,1.885],[1.723,12.514],[13.639,25.302],[7.027,10.77],[4.411,-5.021],[1.447,-24.334],[-1.868,-23.737],[-4.46,-21.865],[-6.954,-20.032],[-2.967,-3.73],[-9.887,-.084],[-13.512,6.999],[-12.764,24.053],[-8.45,8.736],[-4.835,4.448],[-2.305,3.416]],c:!1}]},{t:49}],ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[52.971,58.084],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1}],ip:0,op:751,st:0,bm:0},{ddd:0,ind:7,ty:4,nm:"R Hand Outlines",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:0,s:[0],e:[4]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:21.187,s:[4],e:[15]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:27.118,s:[15],e:[-61]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:33.616,s:[-61],e:[15]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:37.147,s:[15],e:[4]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:40.678,s:[4],e:[0]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:48,s:[0],e:[0]},{t:49}],ix:10},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[39.826,44.319,0],e:[41.076,44.256,0],to:[.20833332836628,-.01041666697711,0],ti:[-.10416666418314,.3125,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:6.779,s:[41.076,44.256,0],e:[40.451,42.444,0],to:[.10416666418314,-.3125,0],ti:[.04166666790843,-.04166666790843,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:12.712,s:[40.451,42.444,0],e:[40.826,44.506,0],to:[-.04166666790843,.04166666790843,0],ti:[-.125,-.01041666697711,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:21.187,s:[40.826,44.506,0],e:[41.201,42.506,0],to:[.125,.01041666697711,0],ti:[3.1875,.54166668653488,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:27.118,s:[41.201,42.506,0],e:[21.701,41.256,0],to:[-3.1875,-.54166668653488,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:33.616,s:[21.701,41.256,0],e:[41.201,42.506,0],to:[0,0,0],ti:[-3.53125,-.35416665673256,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:37.147,s:[41.201,42.506,0],e:[42.889,43.381,0],to:[3.53125,.35416665673256,0],ti:[.22916667163372,-.30208334326744,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:40.678,s:[42.889,43.381,0],e:[39.826,44.319,0],to:[-.22916667163372,.30208334326744,0],ti:[.51041668653488,-.15625,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:48,s:[39.826,44.319,0],e:[39.826,44.319,0],to:[0,0,0],ti:[0,0,0]},{t:49}],ix:2},a:{a:0,k:[39.826,44.319,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-.937,.611],[.636,.997],[.937,-.612],[-.636,-.997]],o:[[.937,-.611],[-.636,-.998],[-.937,.611],[.637,.998]],v:[[1.622,2.547],[1.472,-1.846],[-1.378,-2.546],[-1.923,.366]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[39.886,44.412],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:751,st:0,bm:0},{ddd:0,ind:8,ty:4,nm:"R Arm Outlines",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[50,50,0],ix:2},a:{a:0,k:[50,50,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[1.393,-4.862],[1.646,4.862],[-1.646,2.404]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[2.206,-4.081],[2.458,5.643],[-.833,3.185]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:6.779,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[2.206,-4.081],[2.458,5.643],[-.833,3.185]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[3.081,-5.643],[1.083,4.831],[-1.271,1.998]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:12.712,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[3.081,-5.643],[1.083,4.831],[-1.271,1.998]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[2.206,-4.081],[2.458,5.643],[-.833,3.185]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:21.187,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[2.206,-4.081],[2.458,5.643],[-.833,3.185]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[3.081,-5.643],[1.083,4.831],[-1.271,1.998]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:27.118,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[3.081,-5.643],[1.083,4.831],[-1.271,1.998]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[.643,-7.706],[-8.417,-6.357],[-17.583,-5.315]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:33.616,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[.643,-7.706],[-8.417,-6.357],[-17.583,-5.315]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[3.081,-5.643],[1.083,4.831],[-1.271,1.998]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:37.147,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[3.081,-5.643],[1.083,4.831],[-1.271,1.998]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[5.206,-3.643],[3.958,3.581],[.604,1.998]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:40.678,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[5.206,-3.643],[3.958,3.581],[.604,1.998]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[1.393,-4.862],[1.646,4.862],[-1.646,2.404]],c:!1}]},{t:49}],ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[45.312,46.305],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:751,st:0,bm:0}]}},yLfF:function(i,t){}},["NHnr"]);
//# sourceMappingURL=app.23bbbe441bf22249d3da.js.map