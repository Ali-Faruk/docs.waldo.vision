"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[344],{8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7462),r=a(7294),o=a(2389),u=a(9443);var i=function(){var e=(0,r.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(3616),s=a(6010),c="tabItem_vU9c";function d(e){var t,a,n,o=e.lazy,u=e.block,d=e.defaultValue,h=e.values,m=e.groupId,p=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=f[0])?void 0:n.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),w=g.tabGroupChoices,y=g.setTabGroupChoices,N=(0,r.useState)(k),D=N[0],E=N[1],T=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var q=w[m];null!=q&&q!==D&&v.some((function(e){return e.value===q}))&&E(q)}var L=function(e){var t=e.currentTarget,a=T.indexOf(t),n=v[a].value;n!==D&&(S(t),E(n),null!=m&&y(m,n))},R=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},p)},v.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":D===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:R,onFocus:L,onClick:L},null!=a?a:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function h(e){var t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},5159:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return c},toc:function(){return d},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),u=(a(6396),a(8215),a(9055),["components"]),i={slug:"shoutout",title:"Weekly Shoutouts \ud83d\udce2",authors:["RicanSamurai","Homeless"],tags:["Shoutouts"]},l="Shoutouts \ud83d\udce2",s={permalink:"/blog/shoutout",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/shoutout.md",source:"@site/blog/shoutout.md",title:"Weekly Shoutouts \ud83d\udce2",description:"About",date:"2021-12-16T22:42:34.581Z",formattedDate:"December 16, 2021",tags:[{label:"Shoutouts",permalink:"/blog/tags/shoutouts"}],readingTime:1.02,truncated:!1,authors:[{name:"Jared (RicanSamurai) B.",title:"Project Lead",url:"https://github.com/jaredb1011",imageURL:"https://github.com/jaredb1011.png",key:"RicanSamurai"},{name:"Nicholas (Basically Homeless) Zetta",title:"Project Lead",url:"https://youtube.com/user/PappaZeee",imageURL:"https://github.com/Mr-Homeless.png",key:"Homeless"}],prevItem:{title:"FAQ's \u2753",permalink:"/blog/faq"}},c={authorsImageUrls:[void 0,void 0]},d=[{value:"About",id:"about",children:[],level:2},{value:"3<sup>rd</sup> of December 2021",id:"3rd-of-december-2021",children:[{value:"@Leqitside#2879",id:"leqitside2879",children:[],level:3}],level:2},{value:"10<sup>th</sup> of December 2021",id:"10th-of-december-2021",children:[{value:"@asyo#4887",id:"asyo4887",children:[],level:3}],level:2}],h={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about"},"About"),(0,o.kt)("p",null,"Every Friday, we essentially want to find a way for us to promote the people who are helping us out in the community, whether it be by aiding us in the development of WALDO, or by helping us in the creation of our own content or by simply helping us out with our own ideas. It doesn't matter whether it was a bug fix, a new feature, or a new idea, anything that helps us out in the community we appreciate dearly."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Remember to check out our ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/contributing"},"contributors"))," page for more information on how to help us with WALDO."))),(0,o.kt)("h2",{id:"3rd-of-december-2021"},"3",(0,o.kt)("sup",null,"rd")," of December 2021"),(0,o.kt)("h3",{id:"leqitside2879"},(0,o.kt)("a",{parentName:"h3",href:"#Leqitside#2879"},"@Leqitside#2879")),(0,o.kt)("p",null,"Leqitside has been really helpful to the frontend team, contributing and helping out in creating desgns to keep it looking clean and sharp."),(0,o.kt)("blockquote",null,(0,o.kt)("h6",{parentName:"blockquote",id:"great-work--ricansamurai-and-tsundere"},"Great work! ~ ",(0,o.kt)("a",{parentName:"h6",href:"#"},"@RicanSamurai")," and ",(0,o.kt)("a",{parentName:"h6",href:"#tsundere"},"@tsundere"))),(0,o.kt)("h2",{id:"10th-of-december-2021"},"10",(0,o.kt)("sup",null,"th")," of December 2021"),(0,o.kt)("h3",{id:"asyo4887"},(0,o.kt)("a",{parentName:"h3",href:"#asyo#4887"},"@asyo#4887")),(0,o.kt)("p",null,"Asyo was a great help to the frontend team again, helping out with the development of the main placeholder website!\nSpecial thanks to ",(0,o.kt)("a",{parentName:"p",href:"#Diff3RentBreed#3075"},"Diff3RentBreed#3075")," for helping out with the designs of the website."),(0,o.kt)("blockquote",null,(0,o.kt)("h6",{parentName:"blockquote",id:"thanks-for-helping-us-out--ricansamurai-and-tsundere"},"Thanks for helping us out! ~ ",(0,o.kt)("a",{parentName:"h6",href:"#"},"@RicanSamurai")," and ",(0,o.kt)("a",{parentName:"h6",href:"#tsundere"},"@tsundere"))))}m.isMDXComponent=!0}}]);