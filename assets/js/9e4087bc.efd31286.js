"use strict";(self.webpackChunkai_learnings=self.webpackChunkai_learnings||[]).push([[2711],{5779:(e,r,a)=>{a.r(r),a.d(r,{default:()=>m});a(758);var t=a(1214),n=a(7859),s=a(7023),i=a(770),c=a(3361),l=a(4689),o=a(6070);function d(e){let{year:r,posts:a}=e;const n=(0,i.i)({day:"numeric",month:"long",timeZone:"UTC"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.A,{as:"h3",id:r,children:r}),(0,o.jsx)("ul",{children:a.map((e=>{return(0,o.jsx)("li",{children:(0,o.jsxs)(t.A,{to:e.metadata.permalink,children:[(r=e.metadata.date,n.format(new Date(r)))," - ",e.metadata.title]})},e.metadata.date);var r}))})]})}function h(e){let{years:r}=e;return(0,o.jsx)("section",{className:"margin-vert--lg",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,o.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,o.jsx)(d,{...e})},r)))})})})}function m(e){let{archive:r}=e;const a=(0,n.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),t=(0,n.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),i=function(e){const r=e.reduce(((e,r)=>{const a=r.metadata.date.split("-")[0],t=e.get(a)??[];return e.set(a,[r,...t])}),new Map);return Array.from(r,(e=>{let[r,a]=e;return{year:r,posts:a}}))}(r.blogPosts);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.be,{title:a,description:t}),(0,o.jsxs)(c.A,{children:[(0,o.jsx)("header",{className:"hero hero--primary",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(l.A,{as:"h1",className:"hero__title",children:a}),(0,o.jsx)("p",{className:"hero__subtitle",children:t})]})}),(0,o.jsx)("main",{children:i.length>0&&(0,o.jsx)(h,{years:i})})]})]})}},770:(e,r,a)=>{a.d(r,{i:()=>n});var t=a(9394);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:r}}=(0,t.A)(),a=function(){const{i18n:{currentLocale:e,localeConfigs:r}}=(0,t.A)();return r[e].calendar}();return new Intl.DateTimeFormat(r,{calendar:a,...e})}}}]);