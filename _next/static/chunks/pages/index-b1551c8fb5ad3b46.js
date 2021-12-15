(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7484:function(e){e.exports=function(){"use strict";var e=1e3,s=6e4,i=36e5,t="millisecond",n="second",a="minute",r="hour",c="day",l="week",d="month",o="quarter",h="year",u="date",m="Invalid Date",x=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(e,s,i){var t=String(e);return!t||t.length>=s?e:""+Array(s+1-t.length).join(i)+e},j={s:v,z:function(e){var s=-e.utcOffset(),i=Math.abs(s),t=Math.floor(i/60),n=i%60;return(s<=0?"+":"-")+v(t,2,"0")+":"+v(n,2,"0")},m:function e(s,i){if(s.date()<i.date())return-e(i,s);var t=12*(i.year()-s.year())+(i.month()-s.month()),n=s.clone().add(t,d),a=i-n<0,r=s.clone().add(t+(a?-1:1),d);return+(-(t+(i-n)/(a?n-r:r-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:h,w:l,d:c,D:u,h:r,m:a,s:n,ms:t,Q:o}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},f="en",b={};b[f]=g;var N=function(e){return e instanceof _},y=function(e,s,i){var t;if(!e)return f;if("string"==typeof e)b[e]&&(t=e),s&&(b[e]=s,t=e);else{var n=e.name;b[n]=e,t=n}return!i&&t&&(f=t),t||!i&&f},w=function(e,s){if(N(e))return e.clone();var i="object"==typeof s?s:{};return i.date=e,i.args=arguments,new _(i)},$=j;$.l=y,$.i=N,$.w=function(e,s){return w(e,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var _=function(){function g(e){this.$L=y(e.locale,null,!0),this.parse(e)}var v=g.prototype;return v.parse=function(e){this.$d=function(e){var s=e.date,i=e.utc;if(null===s)return new Date(NaN);if($.u(s))return new Date;if(s instanceof Date)return new Date(s);if("string"==typeof s&&!/Z$/i.test(s)){var t=s.match(x);if(t){var n=t[2]-1||0,a=(t[7]||"0").substring(0,3);return i?new Date(Date.UTC(t[1],n,t[3]||1,t[4]||0,t[5]||0,t[6]||0,a)):new Date(t[1],n,t[3]||1,t[4]||0,t[5]||0,t[6]||0,a)}}return new Date(s)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return $},v.isValid=function(){return!(this.$d.toString()===m)},v.isSame=function(e,s){var i=w(e);return this.startOf(s)<=i&&i<=this.endOf(s)},v.isAfter=function(e,s){return w(e)<this.startOf(s)},v.isBefore=function(e,s){return this.endOf(s)<w(e)},v.$g=function(e,s,i){return $.u(e)?this[s]:this.set(i,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,s){var i=this,t=!!$.u(s)||s,o=$.p(e),m=function(e,s){var n=$.w(i.$u?Date.UTC(i.$y,s,e):new Date(i.$y,s,e),i);return t?n:n.endOf(c)},x=function(e,s){return $.w(i.toDate()[e].apply(i.toDate("s"),(t?[0,0,0,0]:[23,59,59,999]).slice(s)),i)},p=this.$W,g=this.$M,v=this.$D,j="set"+(this.$u?"UTC":"");switch(o){case h:return t?m(1,0):m(31,11);case d:return t?m(1,g):m(0,g+1);case l:var f=this.$locale().weekStart||0,b=(p<f?p+7:p)-f;return m(t?v-b:v+(6-b),g);case c:case u:return x(j+"Hours",0);case r:return x(j+"Minutes",1);case a:return x(j+"Seconds",2);case n:return x(j+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,s){var i,l=$.p(e),o="set"+(this.$u?"UTC":""),m=(i={},i[c]=o+"Date",i[u]=o+"Date",i[d]=o+"Month",i[h]=o+"FullYear",i[r]=o+"Hours",i[a]=o+"Minutes",i[n]=o+"Seconds",i[t]=o+"Milliseconds",i)[l],x=l===c?this.$D+(s-this.$W):s;if(l===d||l===h){var p=this.clone().set(u,1);p.$d[m](x),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else m&&this.$d[m](x);return this.init(),this},v.set=function(e,s){return this.clone().$set(e,s)},v.get=function(e){return this[$.p(e)]()},v.add=function(t,o){var u,m=this;t=Number(t);var x=$.p(o),p=function(e){var s=w(m);return $.w(s.date(s.date()+Math.round(e*t)),m)};if(x===d)return this.set(d,this.$M+t);if(x===h)return this.set(h,this.$y+t);if(x===c)return p(1);if(x===l)return p(7);var g=(u={},u[a]=s,u[r]=i,u[n]=e,u)[x]||1,v=this.$d.getTime()+t*g;return $.w(v,this)},v.subtract=function(e,s){return this.add(-1*e,s)},v.format=function(e){var s=this,i=this.$locale();if(!this.isValid())return i.invalidDate||m;var t=e||"YYYY-MM-DDTHH:mm:ssZ",n=$.z(this),a=this.$H,r=this.$m,c=this.$M,l=i.weekdays,d=i.months,o=function(e,i,n,a){return e&&(e[i]||e(s,t))||n[i].substr(0,a)},h=function(e){return $.s(a%12||12,e,"0")},u=i.meridiem||function(e,s,i){var t=e<12?"AM":"PM";return i?t.toLowerCase():t},x={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:$.s(c+1,2,"0"),MMM:o(i.monthsShort,c,d,3),MMMM:o(d,c),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:o(i.weekdaysMin,this.$W,l,2),ddd:o(i.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:$.s(a,2,"0"),h:h(1),hh:h(2),a:u(a,r,!0),A:u(a,r,!1),m:String(r),mm:$.s(r,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:n};return t.replace(p,(function(e,s){return s||x[e]||n.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(t,u,m){var x,p=$.p(u),g=w(t),v=(g.utcOffset()-this.utcOffset())*s,j=this-g,f=$.m(this,g);return f=(x={},x[h]=f/12,x[d]=f,x[o]=f/3,x[l]=(j-v)/6048e5,x[c]=(j-v)/864e5,x[r]=j/i,x[a]=j/s,x[n]=j/e,x)[p]||j,m?f:$.a(f)},v.daysInMonth=function(){return this.endOf(d).$D},v.$locale=function(){return b[this.$L]},v.locale=function(e,s){if(!e)return this.$L;var i=this.clone(),t=y(e,s,!0);return t&&(i.$L=t),i},v.clone=function(){return $.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),M=_.prototype;return w.prototype=M,[["$ms",t],["$s",n],["$m",a],["$H",r],["$W",c],["$M",d],["$y",h],["$D",u]].forEach((function(e){M[e[1]]=function(s){return this.$g(s,e[0],e[1])}})),w.extend=function(e,s){return e.$i||(e(s,_,w),e.$i=!0),w},w.locale=y,w.isDayjs=N,w.unix=function(e){return w(1e3*e)},w.en=b[f],w.Ls=b,w.p={},w}()},5301:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5075)}])},5075:function(e,s,i){"use strict";i.r(s);var t=i(5893),n=i(702),a=i.n(n),r=i(7294),c=i(6221),l=i(2004),d=i(7484),o=i.n(d),h=function(){var e=(0,r.useState)(!1),s=e[0],i=e[1],n="https://cdn.jsdelivr.net/gh/hktianyi/servingrobot.co.uk@pages";return 11==o()().month()?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"page-header header-video",children:[(0,t.jsx)("div",{className:"filter filter-danger"}),(0,t.jsx)("div",{className:"video-image"}),(0,t.jsxs)("video",{className:a().bgvideo,preload:"auto",loop:!0,muted:!0,autoPlay:!0,poster:"".concat(n,"/static/christmas/Xmas-SNS-Poster.jpg"),children:[(0,t.jsx)("source",{src:"".concat(n,"/static/christmas/christmas-bg.mp4"),type:"video/mp4"}),"Video not supported"]}),(0,t.jsx)("div",{className:a().contentcenter,children:(0,t.jsxs)("div",{className:"container upper-container text-center",children:[(0,t.jsxs)("div",{className:"video-text",children:[(0,t.jsx)("img",{src:"/static/img/bella/banner_bellabot.png",width:380,height:83}),(0,t.jsx)("h3",{className:"title-no-upper-margin",children:"Premium Delivery Robot"}),(0,t.jsx)("p",{children:"The latest delivery robot designed by Pudu, BellaBot inherits the outstanding characteristics of the previous generation, while being endowed with superior human-Robot interaction capabilities. Featuring an innovative bionic design language, cute modeling,multi-modal interaction and many other new functions, BellaBot provides users with an unprecedented food delivery robot experience."})]}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-4 offset-md-4 text-center",children:(0,t.jsxs)("button",{type:"button",onClick:function(){return i(!0)},className:"btn btn-lg btn-outline-secondary btn-round mt-5",children:[(0,t.jsx)("i",{className:"fa fa-play"})," Watch Video"]})})})]})})]}),(0,t.jsx)(c.Z,{show:s,onHide:function(){return i(!1)},size:"lg","aria-labelledby":"example-modal-sizes-title-lg",children:(0,t.jsx)(l.Z,{playing:s,width:"800px",height:"450px",controls:!0,loop:!0,url:"https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/bellabot/business_en.mp4"})})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"page-header","data-parallax":"true",style:{backgroundImage:"url('/static/img/bella/banner3.jpg')"},children:[(0,t.jsx)("div",{className:"filter"}),(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"motto text-center",children:[(0,t.jsx)("img",{src:"/static/img/bella/banner_bellabot.png",width:380,height:83}),(0,t.jsx)("h3",{children:"Premium Delivery Robot"}),(0,t.jsx)("p",{children:"The latest delivery robot designed by Pudu, BellaBot inherits the outstanding characteristics of the previous generation, while being endowed with superior human-Robot interaction capabilities. Featuring an innovative bionic design language, cute modeling,multi-modal interaction and many other new functions, BellaBot provides users with an unprecedented food delivery robot experience."}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-4 offset-md-4 text-center",children:(0,t.jsxs)("button",{type:"button",onClick:function(){return i(!0)},className:"btn btn-lg btn-outline-secondary btn-round mt-5",children:[(0,t.jsx)("i",{className:"fa fa-play"})," Watch Video"]})})})]})})]}),(0,t.jsx)(c.Z,{show:s,onHide:function(){return i(!1)},size:"lg","aria-labelledby":"example-modal-sizes-title-lg",children:(0,t.jsx)(l.Z,{playing:s,width:"800px",height:"450px",controls:!0,loop:!0,url:"https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/bellabot/business_en.mp4"})})]})};s.default=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{}),(0,t.jsxs)("div",{className:"main",children:[(0,t.jsx)("div",{className:"section section-da text-center",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h2",{className:"title",children:"Design Aesthetics"}),(0,t.jsx)("p",{style:{marginBottom:"20px"},children:"BellaBot adopts an innovative bionic design. The bionic design is just perfect from the height of the machine body to the screen tilt, and to the shape curve."}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsx)("div",{className:"card",children:(0,t.jsx)("div",{className:"card-image",children:(0,t.jsx)("img",{className:"img",src:"/static/img/bella/design1.png"})})})}),(0,t.jsxs)("div",{className:"col-md-4",children:[(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-12",children:(0,t.jsx)("div",{className:"card card-blog",children:(0,t.jsx)("div",{className:"card-image",children:(0,t.jsx)("img",{className:"img",src:"/static/img/bella/design2.png"})})})})}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-12",children:(0,t.jsx)("div",{className:"card card-blog",children:(0,t.jsx)("div",{className:"card-image",children:(0,t.jsx)("img",{className:"img",src:"/static/img/bella/design3.png"})})})})})]}),(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsx)("div",{className:"card card-blog",children:(0,t.jsx)("div",{className:"card-image",children:(0,t.jsx)("img",{className:"img",src:"/static/img/bella/design4.png"})})})})]})]})}),(0,t.jsx)("div",{className:"section section-mi text-center",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-12 ml-auto mr-auto",children:(0,t.jsx)("h2",{className:"title",children:"Multimodal Interaction"})})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)("div",{className:"icon",children:(0,t.jsx)("img",{src:"/static/img/icons/light.svg"})}),(0,t.jsxs)("div",{className:"description",children:[(0,t.jsx)("h4",{className:"info-title",children:"Light Interaction"}),(0,t.jsx)("p",{className:"description",children:"Different task status trigger corresponding light effect interactions, making the status indication clearer."})]})]})}),(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)("div",{className:"icon",children:(0,t.jsx)("img",{src:"/static/img/icons/touch.svg"})}),(0,t.jsxs)("div",{className:"description",children:[(0,t.jsx)("h4",{className:"info-title",children:"Touch for Feedback"}),(0,t.jsx)("p",{children:"The new touch interaction makes the feedback of BellaBot more comprehensive, and the Human-Robot experience is unprecedented."})]})]})}),(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)("div",{className:"icon",children:(0,t.jsx)("img",{src:"/static/img/icons/draw.svg"})}),(0,t.jsxs)("div",{className:"description",children:[(0,t.jsx)("h4",{className:"info-title",children:"Smart Expressions"}),(0,t.jsx)("p",{children:'There are dozens of exclusive original expressions, which make the emotional expression of BellaBot more diverse, and make you feel more real "Cat".'})]})]})})]})]})}),(0,t.jsxs)("div",{className:"section section-3d section-dark text-center",children:[(0,t.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,preload:"true",playsInline:!0,"x5-playsinline":"true","webkit-playsinline":"true",children:(0,t.jsx)("source",{src:"https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/bellabot/avoid.mp4",type:"video/mp4"})}),(0,t.jsx)("div",{className:"title",style:{position:"absolute",top:"30%",width:"100%"},children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-md-12 ml-auto mr-auto",children:[(0,t.jsx)("h2",{className:"title",children:"3D Omnidirectional Obstacle Avoidance"}),(0,t.jsx)("h5",{className:"description",children:"In pursuit of higher safety, BellaBot is equipped with 3D sensors and a new modular chassis. It can stop at any angle and move away as soon as it encounters obstacles."}),(0,t.jsx)("br",{})]})})})})]}),(0,t.jsx)("div",{className:"section section-3d section-dark text-center",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsx)("div",{className:"card card-plain",children:(0,t.jsxs)("div",{className:"card-body",style:{marginTop:"72px"},children:[(0,t.jsxs)("h3",{className:"card-title",children:["Minimum height of object detection is ",(0,t.jsx)("span",{className:"robot-indicator",children:"2cm"})]}),(0,t.jsxs)("h3",{className:"card-title",children:["Obstacle detection frequency up to ",(0,t.jsx)("span",{className:"robot-indicator",children:"5400 times per minute"})]})]})})}),(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,preload:"true",playsInline:!0,"x5-playsinline":"true","webkit-playsinline":"true",children:(0,t.jsx)("source",{src:"https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/bellabot/height.mp4",type:"video/mp4"})})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,preload:"true",playsInline:!0,"x5-playsinline":"true","webkit-playsinline":"true",children:(0,t.jsx)("source",{src:"https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/bellabot/radius.mp4",type:"video/mp4"})})}),(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsx)("div",{className:"card card-plain",children:(0,t.jsxs)("div",{className:"card-body",style:{marginTop:"72px"},children:[(0,t.jsxs)("h3",{className:"card-title",children:["Front detection angle up to ",(0,t.jsx)("span",{className:"robot-indicator",children:"192.64\xb0"})]}),(0,t.jsxs)("h3",{className:"card-title",children:["Front obstacle detection range exceeds ",(0,t.jsx)("span",{className:"robot-indicator",children:"10m"})]})]})})})]})]})}),(0,t.jsx)("div",{className:"section text-center",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-md-12 ml-auto mr-auto",children:[(0,t.jsx)("h2",{className:"title",children:"Industry-exclusive"}),(0,t.jsx)("h2",{className:"title",children:"Dual SLAM Solution for Full Coverage in Any Scenario"}),(0,t.jsx)("h5",{className:"description",children:"BellaBot supports both Laser SLAM and Visual SLAM positioning and navigation solutions in order to adapt to more scenarios. Both of which are accurate and easy to use. Both positioning solutions which BellaBot offers provides the same excellent user experience. While the positioning solutions differ, BellaBot's customer-centered service never changes."}),(0,t.jsx)("br",{})]})}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,preload:"true",playsInline:!0,"x5-playsinline":"true","webkit-playsinline":"true",children:(0,t.jsx)("source",{src:"https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/bellabot/laserslam.mp4",type:"video/mp4"})})}),(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,preload:"true",playsInline:!0,"x5-playsinline":"true","webkit-playsinline":"true",children:(0,t.jsx)("source",{src:"https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/bellabot/visualslam.mp4",type:"video/mp4"})})})]})]})}),(0,t.jsx)("div",{className:"section text-center",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsx)("div",{className:"card","data-background":"image",style:{backgroundImage:"url('/static/img/bella/evolve_tray.png')"},children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("h3",{className:"card-title",children:"Infrared Induction Tray"}),(0,t.jsx)("p",{className:"card-description",children:"Modular structure for quick disassembly and intelligent infrared induction. A smarter tray for more efficient delivery."})]})})}),(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsx)("div",{className:"card","data-background":"image",style:{backgroundImage:"url('/static/img/bella/evolve_battery.png')"},children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("h3",{className:"card-title",children:"Power Exchange Technology"}),(0,t.jsx)("p",{className:"card-description",children:"Charging and usage scenarios are categorized for faster battery replacement. 24/7 operations: a piece of cake for BellaBot."})]})})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsx)("div",{className:"card","data-background":"image",style:{backgroundImage:"url('/static/img/bella/rgbd.png')"},children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("h3",{className:"card-title",children:"RGBD"}),(0,t.jsx)("p",{className:"card-description",children:"Auto-level adaptive variable suspension. Damping can be altered according to different floor conditions and driving requirements. The resonance frequency is maintained at an optimal state."})]})})}),(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsx)("div",{className:"card","data-background":"image",style:{backgroundImage:"url('/static/img/bella/suspension.png')"},children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("h3",{className:"card-title",children:"Auto-Level Independent Linkage Suspension for Stable"}),(0,t.jsx)("p",{className:"card-description",children:"Modular structure for quick disassembly and intelligent infrared induction. A smarter tray for more efficient delivery."})]})})})]})]})}),(0,t.jsxs)("div",{className:"section section-scheduler section-dark text-right",children:[(0,t.jsx)("img",{src:"/static/img/scheduler.png"}),(0,t.jsx)("div",{className:"title",style:{position:"absolute",top:"20%",width:"100%"},children:(0,t.jsx)("div",{className:"container text-left",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-md-6",children:[(0,t.jsx)("h2",{className:"title",children:"PUDU SCHEDULER"}),(0,t.jsx)("h5",{className:"description",children:"PUDU SCHEDULER has adopted a decentralized, flexible ad hoc network communication scheme and algorithm architecture. Each robot can directly communicate with any robot in the same network, and quickly calculate and make decisions. Such design reduces the requirements for the network, reduces a central computing node that requires high computing power, and is closer to the interaction mechanism among people."}),(0,t.jsx)("br",{})]})})})})]}),(0,t.jsx)("div",{className:"section section-detail",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-4 offset-md-1",children:(0,t.jsx)("div",{className:"card card-plain text-center",children:(0,t.jsx)("div",{className:"card-image",children:(0,t.jsx)("img",{src:"/static/img/bella/parameter2.2.0.png",alt:"Parameter",className:"img-rounded img-responsive"})})})}),(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsx)("div",{className:"card card-plain",children:(0,t.jsx)("div",{className:"card-body",children:(0,t.jsx)("table",{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{style:{width:"200px"},children:"Machine dimensions"}),(0,t.jsx)("td",{children:"565*537*1290 mm"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Machine weight"}),(0,t.jsx)("td",{children:"59 kg"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Machine material"}),(0,t.jsx)("td",{children:"ABS/Aviation-grade aluminum alloy"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Battery life"}),(0,t.jsx)("td",{children:"12-24H (Replaceable Battery)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Charging time"}),(0,t.jsx)("td",{children:"4.5 H"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Safety"}),(0,t.jsx)("td",{children:"Speed: 0.5-1.2 m/s (Adjustable) | Climbing angle: \u2264 5\xb0"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Load capacity"}),(0,t.jsx)("td",{children:"Max 40kg\uff0c10kg/tray"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Positioning method"}),(0,t.jsx)("td",{children:"Marker Positioning: Supports a maximum height of 8 meters \uff08optional high-level code) Laser Positioning: Code-free with no height restriction"})]})]})})})})})]})})})]})]})}},702:function(e){e.exports={bgvideo:"Bella_bgvideo__8Q5z7","header-video":"Bella_header-video__l0kK1","state-play":"Bella_state-play___Tc2T",btn:"Bella_btn__gzaJc",filter:"Bella_filter__K1nHM","video-text":"Bella_video-text__FgBuN",contentcenter:"Bella_contentcenter__pEgt6"}}},function(e){e.O(0,[802,774,888,179],(function(){return s=5301,e(e.s=s);var s}));var s=e.O();_N_E=s}]);