"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514,75],{5642:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7294),r=n(3905),l=n(6291),i=n(4161),o=n(6010),c=n(3616),s=n(3783),d=n(5537),u=n(7462);var m=function(e){return a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(5999),h=n(3366),b=n(9960),f=n(3919),v=n(541),E="menuLinkText_OKON",g="hasHref_TwRn",Z=n(2389),k=["items"],_=["item"],C=["item","onItemClick","activePath","level"],N=["item","onItemClick","activePath","level"],T=(0,a.memo)((function(e){var t=e.items,n=(0,h.Z)(e,k);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(S,(0,u.Z)({key:t,item:e},n))})))}));function S(e){var t=e.item,n=(0,h.Z)(e,_);return"category"===t.type?0===t.items.length?null:a.createElement(y,(0,u.Z)({item:t},n)):a.createElement(I,(0,u.Z)({item:t},n))}function y(e){var t,n=e.item,r=e.onItemClick,l=e.activePath,i=e.level,s=(0,h.Z)(e,C),d=n.items,m=n.label,f=n.collapsible,v=n.className,k=n.href,_=function(e){var t=(0,Z.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(n),N=(0,c._F)(n,l),S=(0,c.uR)({initialState:function(){return!!f&&(!N&&n.collapsed)}}),y=S.collapsed,I=S.setCollapsed,M=S.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:N,collapsed:y,setCollapsed:I}),a.createElement("li",{className:(0,o.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":y},v)},a.createElement("div",{className:"menu__list-item-collapsible"},a.createElement(b.Z,(0,u.Z)({className:(0,o.Z)("menu__link",(t={"menu__link--sublist":f&&!k,"menu__link--active":N},t[E]=!f,t[g]=!!_,t)),onClick:f?function(e){null==r||r(n),k?I(!1):(e.preventDefault(),M())}:function(){null==r||r(n)},href:f?null!=_?_:"#":_},s),m),k&&f&&a.createElement("button",{"aria-label":(0,p.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:m}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),M()}})),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:y},a.createElement(T,{items:d,tabIndex:y?-1:0,onItemClick:r,activePath:l,level:i+1})))}function I(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,i=(0,h.Z)(e,N),s=t.href,d=t.label,m=t.className,p=(0,c._F)(t,r);return a.createElement("li",{className:(0,o.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:d},a.createElement(b.Z,(0,u.Z)({className:(0,o.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},i),(0,f.Z)(s)?d:a.createElement("span",null,d,a.createElement(v.Z,null))))}var M="sidebar_a3j0",A="sidebarWithHideableNavbar_VlPv",L="sidebarHidden_OqfG",w="sidebarLogo_hmkv",x="menu_cyFh",F="menuWithAnnouncementBar_+O1J",P="collapseSidebarButton_eoK2",B="collapseSidebarButtonIcon_e+kA";function R(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",P),onClick:t},a.createElement(m,{className:B}))}function D(e){var t,n,r=e.path,l=e.sidebar,i=e.onCollapse,s=e.isHidden,u=function(){var e=(0,c.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,c.LU)(),p=m.navbar.hideOnScroll,h=m.hideableSidebar;return a.createElement("div",{className:(0,o.Z)(M,(t={},t[A]=p,t[L]=s,t))},p&&a.createElement(d.Z,{tabIndex:-1,className:w}),a.createElement("nav",{className:(0,o.Z)("menu thin-scrollbar",x,(n={},n[F]=u,n))},a.createElement("ul",{className:(0,o.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(T,{items:l,activePath:r,level:1}))),h&&a.createElement(R,{onClick:i}))}var H=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,o.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(T,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function O(e){return a.createElement(c.Cv,{component:H,props:e})}var W=a.memo(D),V=a.memo(O);function q(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(W,e),r&&a.createElement(V,e))}var z=n(7440),Y=n(4608),j="backToTopButton_i9tI",U="backToTopButtonShow_wCmF";function K(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var G=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],l=(0,a.useRef)(!1),i=K(),s=i.smoothScrollTop,d=i.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(l.current)l.current=!1;else{var i=n<a;if(i||d(),n<300)r(!1);else if(i){var o=document.documentElement.scrollHeight;n+window.innerHeight<o&&r(!0)}else r(!1)}})),(0,c.SL)((function(e){e.location.hash&&(l.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",c.kM.common.backToTopButton,j,(e={},e[U]=n,e)),type:"button",onClick:function(){return s()}})},J=n(6775),Q={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"},X=n(2859);function $(e){var t,n,l,s=e.currentDocRoute,d=e.versionMetadata,u=e.children,h=e.sidebarName,b=(0,c.Vq)(),f=d.pluginId,v=d.version,E=(0,a.useState)(!1),g=E[0],Z=E[1],k=(0,a.useState)(!1),_=k[0],C=k[1],N=(0,a.useCallback)((function(){_&&C(!1),Z((function(e){return!e}))}),[_]);return a.createElement(i.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadata:{version:v,tag:(0,c.os)(f,v)}},a.createElement("div",{className:Q.docPage},a.createElement(G,null),b&&a.createElement("aside",{className:(0,o.Z)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&g&&C(!0)}},a.createElement(q,{key:h,sidebar:b,path:s.path,onCollapse:N,isHidden:_}),_&&a.createElement("div",{className:Q.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(m,{className:Q.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,o.Z)(Q.docMainContainer,(n={},n[Q.docMainContainerEnhanced]=g||!b,n))},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(l={},l[Q.docItemWrapperEnhanced]=g,l))},a.createElement(r.Zo,{components:z.Z},u)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,i=t.find((function(e){return(0,J.LX)(r.pathname,e)}));if(!i)return a.createElement(Y.default,null);var o=i.sidebar,s=o?n.docsSidebars[o]:null;return a.createElement(a.Fragment,null,a.createElement(X.Z,null,a.createElement("html",{className:n.className})),a.createElement(c.qu,{version:n},a.createElement(c.bT,{sidebar:s},a.createElement($,{currentDocRoute:i,versionMetadata:n,sidebarName:o},(0,l.Z)(t,{versionMetadata:n})))))}},9649:function(e,t,n){n.d(t,{N:function(){return m},Z:function(){return p}});var a=n(3366),r=n(7462),l=n(7294),i=n(6010),o=n(5999),c=n(3616),s="anchorWithStickyNavbar_y2LR",d="anchorWithHideOnScrollNavbar_3ly5",u=["id"],m=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,m=e.id,p=(0,a.Z)(e,u),h=(0,c.LU)().navbar.hideOnScroll;return m?l.createElement(t,(0,r.Z)({},p,{className:(0,i.Z)("anchor",(n={},n[d]=h,n[s]=!h,n)),id:m}),p.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+m,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,p)});var t}},7440:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(7462),r=n(3366),l=n(7294),i=n(2859),o=n(9960),c=n(9055),s=n(9649),d=n(6010),u=n(3616),m="details_h+cY";function p(e){var t=Object.assign({},e);return l.createElement(u.PO,(0,a.Z)({},t,{className:(0,d.Z)("alert alert--info",m,t.className)}))}var h=["mdxType","originalType"];var b={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,i=(a.mdxType,a.originalType,(0,r.Z)(a,h));return l.createElement(e.props.originalType,i)}return e}(e)}));return l.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(c.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(o.Z,e)},pre:function(e){var t,n=e.children;return(0,l.isValidElement)(n)&&(0,l.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:l.createElement(c.Z,(0,l.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((function(e){return e!==n})));return l.createElement(p,(0,a.Z)({},e,{summary:n}),r)},h1:(0,s.Z)("h1"),h2:(0,s.Z)("h2"),h3:(0,s.Z)("h3"),h4:(0,s.Z)("h4"),h5:(0,s.Z)("h5"),h6:(0,s.Z)("h6")}},4608:function(e,t,n){n.r(t);var a=n(7294),r=n(4161),l=n(5999);t.default=function(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);