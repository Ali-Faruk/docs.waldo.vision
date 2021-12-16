"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[288],{8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),i=n(7294),r=n(2389),o=n(9443);var l=function(){var e=(0,i.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),d=n(6010),u="tabItem_vU9c";function c(e){var t,n,a,r=e.lazy,o=e.block,c=e.defaultValue,p=e.values,h=e.groupId,m=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=g[0])?void 0:a.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=l(),y=f.tabGroupChoices,w=f.setTabGroupChoices,N=(0,i.useState)(b),C=N[0],T=N[1],D=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=y[h];null!=E&&E!==C&&k.some((function(e){return e.value===E}))&&T(E)}var x=function(e){var t=e.currentTarget,n=D.indexOf(t),a=k[n].value;a!==C&&(I(t),T(a),null!=h&&w(h,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var i=D.indexOf(e.currentTarget)-1;n=D[i]||D[D.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":o},m)},k.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,d.Z)("tabs__item",u,{"tabs__item--active":C===t}),key:t,ref:function(e){return D.push(e)},onKeyDown:Z,onFocus:x,onClick:x},null!=n?n:t)}))),r?(0,i.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,r.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},4377:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return h},default:function(){return g}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(6396),l=n(8215),s=n(9055),d=["components"],u={sidebar_position:3,title:"\ud83d\udcc4 Creating Docs",id:"Create-Delete-Pages",tags:["Introduction","Admin"],slug:"../create-delete-pages"},c="Creating, Deleting or Editing Docs \ud83d\udcc4",p={unversionedId:"Getting-Started/Create-Delete-Pages",id:"Getting-Started/Create-Delete-Pages",title:"\ud83d\udcc4 Creating Docs",description:"Further doumentaation check out: Docusaurus ~ v2.0.0-beta.13",source:"@site/docs/Getting-Started/create-pages.md",sourceDirName:"Getting-Started",slug:"/create-delete-pages",permalink:"/docs/create-delete-pages",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Getting-Started/create-pages.md",tags:[{label:"Introduction",permalink:"/docs/tags/introduction"},{label:"Admin",permalink:"/docs/tags/admin"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\ud83d\udcc4 Creating Docs",id:"Create-Delete-Pages",tags:["Introduction","Admin"],slug:"../create-delete-pages"},sidebar:"mySidebar",previous:{title:"\ud83c\udfc6 Contributing",permalink:"/docs/contributing"},next:{title:"\ud83d\udc4b Introduction",permalink:"/docs/App-Docs/introduction"}},h=[{value:"Setting up \u2699\ufe0f",id:"setting-up-\ufe0f",children:[{value:"Using terminal",id:"using-terminal",children:[{value:"Change directory into your project folder:",id:"change-directory-into-your-project-folder",children:[],level:5},{value:"Initialise a new git enviroment, download here... and set up git remote branch either through ssh or https read more...",id:"initialise-a-new-git-enviroment-download-here-and-set-up-git-remote-branch-either-through-ssh-or-https-read-more",children:[],level:5},{value:"Pull the repo to your local repository",id:"pull-the-repo-to-your-local-repository",children:[],level:5},{value:"Open with your favourite IDE <em>(showcaase will be on visual studio code)</em>",id:"open-with-your-favourite-ide-showcaase-will-be-on-visual-studio-code",children:[],level:5}],level:3},{value:"Using GitHub Directly (no directories)",id:"using-github-directly-no-directories",children:[{value:"You can commit directly to the github develop branch <em>(never commit directly to the master branch)</em>",id:"you-can-commit-directly-to-the-github-develop-branch-never-commit-directly-to-the-master-branch",children:[],level:4}],level:3}],level:2},{value:"Creating a new document",id:"creating-a-new-document",children:[{value:"Structure",id:"structure",children:[],level:3},{value:"Creating File",id:"creating-file",children:[],level:3}],level:2},{value:"Deleting a document",id:"deleting-a-document",children:[],level:2},{value:"Editing a document",id:"editing-a-document",children:[],level:2},{value:"Testing it locally",id:"testing-it-locally",children:[{value:"First install the dependencies",id:"first-install-the-dependencies",children:[],level:3}],level:2},{value:"Pushing / Updating Files to GitHub (terminal)",id:"pushing--updating-files-to-github-terminal",children:[],level:2}],m={toc:h};function g(e){var t=e.components,n=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-deleting-or-editing-docs-"},"Creating, Deleting or Editing Docs \ud83d\udcc4"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Further doumentaation check out: Docusaurus ~ ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs"},(0,r.kt)("inlineCode",{parentName:"a"},"v2.0.0-beta.13")),"\nOnly limited markdown knowledge needed ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/cheat-sheet/"},"learn more..."))),(0,r.kt)("h2",{id:"setting-up-\ufe0f"},"Setting up \u2699\ufe0f"),(0,r.kt)("h3",{id:"using-terminal"},"Using terminal"),(0,r.kt)("h5",{id:"change-directory-into-your-project-folder"},"Change directory into your project folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd .\\projects\\waldo\\repo\\docs\\\n")),(0,r.kt)("h5",{id:"initialise-a-new-git-enviroment-download-here-and-set-up-git-remote-branch-either-through-ssh-or-https-read-more"},"Initialise a new git enviroment, download ",(0,r.kt)("a",{parentName:"h5",href:"https://git-scm.com/download/"},"here...")," and set up git remote branch either through ssh or https ",(0,r.kt)("a",{parentName:"h5",href:"https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories"},"read more...")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git init\n# Create new git env\n\n$ git remote add origin https://github.com/waldo-vision/docs.waldo.vision.git\n# Set new remote\n")),(0,r.kt)("h5",{id:"pull-the-repo-to-your-local-repository"},"Pull the repo to your local repository"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"origin")," as organisation repository\n",(0,r.kt)("inlineCode",{parentName:"p"},"master")," as repository branch to pull"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git pull origin master\n")),(0,r.kt)("h5",{id:"open-with-your-favourite-ide-showcaase-will-be-on-visual-studio-code"},"Open with your favourite IDE ",(0,r.kt)("em",{parentName:"h5"},"(showcaase will be on visual studio code)")),(0,r.kt)("p",null,"Locate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"./docs/")," directory, this is where all documents are stored."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.ibb.co/YQzDpDT/image.png",alt:"Docs Directory"})),(0,r.kt)("h3",{id:"using-github-directly-no-directories"},"Using GitHub Directly (no directories)"),(0,r.kt)("h4",{id:"you-can-commit-directly-to-the-github-develop-branch-never-commit-directly-to-the-master-branch"},"You can commit directly to the github develop branch ",(0,r.kt)("em",{parentName:"h4"},"(never commit directly to the master branch)")),(0,r.kt)("p",null,"Go to the develop branch:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.ibb.co/Lh56DpQ/image.png",alt:"Develop Branch"})),(0,r.kt)("p",null,"Direct to the ",(0,r.kt)("inlineCode",{parentName:"p"},"./docs/")," directory, this is where all documents are stored."),(0,r.kt)("h2",{id:"creating-a-new-document"},"Creating a new document"),(0,r.kt)("p",null,"To create a new document just add a file with a ",(0,r.kt)("inlineCode",{parentName:"p"},".md")," ending."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you want to create sub directories, docusaurus will automatically separate render them within folders. ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"(If commiting directly to the develop branch you will not be able to create sub directories)")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"What ever name you give the folders it will show up in the final build")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.ibb.co/yBBcw0D/image.png",alt:"New doc"})),(0,r.kt)("h3",{id:"structure"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"}," # Structure of the docs directory\ndocs\n\u251c\u2500\u2500 intro.md\n\u2514\u2500\u2500 sub-directory\n    \u251c\u2500\u2500 intro.md\n    \u2514\u2500\u2500 sub-directory\n        \u251c\u2500\u2500 ...\n        \u2514\u2500\u2500 ...\n")),(0,r.kt)("p",null,"Make sure to create an ",(0,r.kt)("inlineCode",{parentName:"p"},"intro.md")," in every folder. (Set slug to ",(0,r.kt)("inlineCode",{parentName:"p"},"./"),")"),(0,r.kt)("h3",{id:"creating-file"},"Creating File"),(0,r.kt)("p",null,"When creating a file, make sure to add a header with the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"---\nsidebar_position: 1      \ntitle: \ud83d\udc4b Introduction      \nid: anlysis-new-approach-intro       \ntags:\n    - Admin\nslug: ./\n---\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_position:")," is the position of the page in the sidebar."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"title:")," is the title of your page and it will be used in the sidebar. If you create a ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," at the start of the file it will be used as the title of the page and over ride the ",(0,r.kt)("inlineCode",{parentName:"p"},"title:")," tag."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"id:")," is the id of the page and it will be used to link pages to eachother. Make sure to use a unique id for each page. e.g. use directory names as ids."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tags:")," is the tags of the page and can be discovered by searching from the tags list."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"slug:")," is the slug of the page and it will be used to link to the page. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example:")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"./intro.md")," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.waldo.vision/docs/intro.md"},"https://docs.waldo.vision/docs/intro.md")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"./")," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.waldo.vision/docs/"},"https://docs.waldo.vision/docs/")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Then you can add your content to the file. For more information on markdown check out the ",(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("a",{parentName:"em",href:"https://www.markdownguide.org/cheat-sheet/"},"cheat sheet")))),(0,r.kt)("h2",{id:"deleting-a-document"},"Deleting a document"),(0,r.kt)("p",null,"To delete a document just delete the file, if the file is the only item in the sub directory you can delete the sub directory as well."),(0,r.kt)("h2",{id:"editing-a-document"},"Editing a document"),(0,r.kt)("p",null,"If you want to edit a document just open the file in your favourite editor and make your changes.\nIf you are using GitHub directly you can edit the file directly in the develop branch."),(0,r.kt)("h2",{id:"testing-it-locally"},"Testing it locally"),(0,r.kt)("p",null,"If you want to test your changes locally you can use the following commands:"),(0,r.kt)("h3",{id:"first-install-the-dependencies"},"First install the dependencies"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"yarn",label:"Installing dependencies with npm",default:!0,mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"$ yarn install")),(0,r.kt)(l.Z,{value:"npm",label:"Installing dependencies with npm",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"$ npm install"))),"This will download the dependencies for you. Any errors please let the developers know. ### Then test it locally",(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"yarn",label:"Testing locally with yarn",default:!0,mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"$ yarn start")),(0,r.kt)(l.Z,{value:"npm",label:"Testing locally with npm",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"$ npm run start"))),(0,r.kt)("h2",{id:"pushing--updating-files-to-github-terminal"},"Pushing / Updating Files to GitHub (terminal)"),(0,r.kt)("p",null,"To push to GitHub you can use the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ git add .\n# Add all files to staging\n\n$ git commit -m "message"\n# Commit all staged files\n\n$ git push origin develop\n# Push all staged files to develop branch\n')),(0,r.kt)("p",null,"After pushing to GitHub you can see the changes in the develop branch. After testing your changes can be pushed to the master branch, make a PR request and merge the PR."))}g.isMDXComponent=!0}}]);