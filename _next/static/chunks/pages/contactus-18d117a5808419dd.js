(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[753],{289:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contactus",function(){return a(9916)}])},9916:function(e,s,a){"use strict";a.r(s);var l=a(5893),i=a(7294),r=a(9669),n=a.n(r);s.default=function(){(0,i.useEffect)((function(){return window.GetMap=function(){var e=new Microsoft.Maps.Location(53.497521,-2.237901),s=new Microsoft.Maps.Map("#contactUsMap",{credentials:"AkKb7UbGPVYqiGxiI0WbJZ3Y-J5rxzFsCOHqOGCs5nVU18WQ38X1X-iUIbW05kA2",backgroundColor:"#fff",center:e,disableScrollWheelZoom:!0,enableClickableLogo:!1,liteMode:!0,showLocateMeButton:!1,showMapTypeSelector:!1,showScalebar:!1,showTermsLink:!1,zoom:13}),a=new Microsoft.Maps.Pushpin(e,{title:"Office",subTitle:"175 Cheetham Hill Rd",text:""});s.entities.push(a)},function(){return window.GetMap=void 0}}),[]);var e=(0,i.useState)(""),s=e[0],a=e[1],r=(0,i.useState)(""),c=r[0],t=r[1],o=(0,i.useState)(""),d=o[0],m=o[1],h=(0,i.useState)(""),u=h[0],x=h[1],f=function(e){"firstname"==e.target.name?a(e.target.value):"lastname"==e.target.name?t(e.target.value):"email"==e.target.name?m(e.target.value):"message"==e.target.name&&x(e.target.value)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"section section-gray",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-8 ml-auto mr-auto text-center",children:(0,l.jsx)("h2",{className:"title",children:"Get in touch with us"})})}),(0,l.jsx)("div",{className:"row pt-5",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"card card-contact no-transition",children:(0,l.jsxs)("div",{className:"row pt-3",children:[(0,l.jsx)("div",{className:"col-md-5",children:(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsxs)("div",{className:"info info-horizontal",children:[(0,l.jsx)("div",{className:"icon icon-info",children:(0,l.jsx)("i",{className:"fa fa-map-marker","aria-hidden":"true"})}),(0,l.jsxs)("div",{className:"description",children:[(0,l.jsx)("h4",{className:"info-title",children:"Find us at the office"}),(0,l.jsx)("p",{style:{fontWeight:"700"},children:"175 Cheetham Hill Rd"}),(0,l.jsx)("p",{children:"Cheetham Hill"}),(0,l.jsx)("p",{children:"Manchester"}),(0,l.jsx)("p",{children:"M8 8JJ"})]})]}),(0,l.jsxs)("div",{className:"info info-horizontal",children:[(0,l.jsx)("div",{className:"icon icon-danger",children:(0,l.jsx)("i",{className:"fa fa-address-card-o","aria-hidden":"true"})}),(0,l.jsxs)("div",{className:"description",children:[(0,l.jsx)("h4",{className:"info-title",children:"Give us a ring"}),(0,l.jsx)("p",{children:"7716474334"}),(0,l.jsx)("p",{children:"0161 834 5539"}),(0,l.jsx)("p",{children:(0,l.jsx)("a",{href:"mailto:sales@servingrobot.co.uk",style:{color:"#9a9a9a"},children:"sales@servingrobot.co.uk"})}),(0,l.jsx)("p",{children:"Mon - Fri, 8:00-22:00"})]})]})]})}),(0,l.jsx)("div",{className:"col-md-7",children:(0,l.jsx)("form",{role:"form",id:"contact-form",method:"post",onSubmit:function(e){e.preventDefault(),s?c?d?u?(n().defaults.withCredentials=!0,n().post("https://api.servingrobot.co.uk:10000/sendmsg",{firstname:s,lastname:c,email:d,message:u}).then((function(e){alert("Send successfully!")})).catch((function(e){alert("Failed to send message!")}))):alert("Require Message"):alert("Require Email"):alert("Require Last name"):alert("Require First name")},children:(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsxs)("div",{className:"form-group label-floating",children:[(0,l.jsx)("label",{className:"control-label",children:"First name"}),(0,l.jsx)("input",{type:"text",name:"firstname",className:"form-control",placeholder:"First Name",value:s,onInput:f})]})}),(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsxs)("div",{className:"form-group label-floating",children:[(0,l.jsx)("label",{className:"control-label",children:"Last name"}),(0,l.jsx)("input",{type:"text",name:"lastname",className:"form-control",placeholder:"Last Name",value:c,onInput:f})]})})]}),(0,l.jsxs)("div",{className:"form-group label-floating",children:[(0,l.jsx)("label",{className:"control-label",children:"Email address"}),(0,l.jsx)("input",{type:"email",name:"email",className:"form-control",placeholder:"Email",value:d,onInput:f})]}),(0,l.jsxs)("div",{className:"form-group label-floating",children:[(0,l.jsx)("label",{className:"control-label",children:"Your message"}),(0,l.jsx)("textarea",{name:"message",className:"form-control",id:"message",rows:6,placeholder:"Message",value:u,onInput:f})]}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-6 offset-md-6",children:(0,l.jsx)("button",{type:"submit",className:"btn btn-info pull-right",children:"Send Message"})})})]})})})]})})})}),(0,l.jsxs)("div",{className:"row pt-5",children:[(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"card","data-background":"color","data-color":"orange",children:(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsx)("h5",{children:"The value of our products is"}),(0,l.jsx)("div",{className:"clearfix"}),(0,l.jsxs)("ul",{className:"services-info",children:[(0,l.jsx)("li",{children:"Optimizing Management for Reduced Labour Cost"}),(0,l.jsx)("li",{children:"Enhancing Core Competitiveness with Differentiated Marketing"}),(0,l.jsx)("li",{children:"Empowering Safe, Efficient, and Intelligent Customer Experience"}),(0,l.jsx)("li",{children:"Allowing Waiters to Focus on Serving Customers Better"})]})]})})}),(0,l.jsx)("div",{className:"col-md-5",children:(0,l.jsx)("div",{className:"card","data-background":"color","data-color":"green",children:(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsx)("h5",{children:"Quality Services That You Can Rely On"}),(0,l.jsx)("div",{className:"clearfix"}),(0,l.jsxs)("ul",{className:"services-info",children:[(0,l.jsx)("li",{children:"Hundreds of after-sales service centers across the globe"}),(0,l.jsx)("li",{children:"2 -years free warranty"}),(0,l.jsx)("li",{children:"Free custom deployment"}),(0,l.jsx)("li",{children:"Free operation training"}),(0,l.jsx)("li",{children:"Fast service within 24 hours"}),(0,l.jsx)("li",{children:"IoT service: Over 90% of technical issues can be solved remotely"})]})]})})}),(0,l.jsx)("div",{className:"col-md-3",children:(0,l.jsx)("div",{className:"card","data-background":"color","data-color":"yellow",children:(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsx)("h5",{children:"Exclusive advantage"}),(0,l.jsx)("div",{className:"clearfix"}),(0,l.jsxs)("ul",{className:"services-info",children:[(0,l.jsx)("li",{children:"3-day free trial"}),(0,l.jsx)("li",{children:"Free delivery and installation throughout the UK"}),(0,l.jsx)("li",{children:"Solve the problem of difficult recruitment and expensive labor"}),(0,l.jsx)("li",{children:"Flexible payments ( a lump sum or installment )"})]})]})})})]})]})}),(0,l.jsx)("div",{id:"contactUsMap",className:"big-map",style:{height:"300px",width:"100%"}})]})}}},function(e){e.O(0,[669,774,888,179],(function(){return s=289,e(e.s=s);var s}));var s=e.O();_N_E=s}]);