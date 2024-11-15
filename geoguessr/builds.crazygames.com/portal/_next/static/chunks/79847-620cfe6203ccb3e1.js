"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79847],{88078:function(e,t,n){n.d(t,{Z:function(){return R}});var r=n(63366),a=n(87462),i=n(67294),o=n(90512),s=n(70917),l=n(94780),p=n(41796),c=n(90948),h=n(71657),m=n(1588),u=n(34867);function d(e){return(0,u.ZP)("MuiSkeleton",e)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var f=n(85893);let g=["animation","className","component","height","style","variant","width"],x=e=>e,j,v,y,b,w=e=>{let{classes:t,variant:n,animation:r,hasChildren:a,width:i,height:o}=e;return(0,l.Z)({root:["root",n,r,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]},d,t)},k=(0,s.F4)(j||(j=x`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Z=(0,s.F4)(v||(v=x`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),C=(0,c.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{let n=String(e.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",r=parseFloat(e.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,p.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>"pulse"===e.animation&&(0,s.iv)(y||(y=x`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),k),({ownerState:e,theme:t})=>"wave"===e.animation&&(0,s.iv)(b||(b=x`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),Z,(t.vars||t).palette.action.hover)),P=i.forwardRef(function(e,t){let n=(0,h.Z)({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:s,component:l="span",height:p,style:c,variant:m="text",width:u}=n,d=(0,r.Z)(n,g),x=(0,a.Z)({},n,{animation:i,component:l,variant:m,hasChildren:Boolean(d.children)}),j=w(x);return(0,f.jsx)(C,(0,a.Z)({as:l,ref:t,className:(0,o.Z)(j.root,s),ownerState:x},d,{style:(0,a.Z)({width:u,height:p},c)}))});var R=P},88865:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(19013),a=n(13882);function i(e){return(0,a.Z)(1,arguments),2===(0,r.Z)(e).getDay()}},18288:function(e,t,n){var r=n(85893),a=n(9008),i=n.n(a);n(67294);var o=n(46313),s=n(50513),l=n(33209);let p="favicons/manifest-icon-3.png",c="favicons/favicon.ico",h=e=>{let{title:t,metaDescription:n,canonical:a,alternatives:h=[],children:m}=e,u=h.find(e=>{let{locale:t}=e;return t===l.ZW}),d=(e,t,n)=>(0,s.ZP)(e,{w:t,h:n,fit:"crop",crop:"entropy"}),f="development"===o.Z.Instance.environment;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:`${f?"\uD83E\uDD99 - ":""}${t}`}),(0,r.jsx)("link",{rel:"manifest",href:"/manifest"}),(0,r.jsx)("meta",{httpEquiv:"Accept-CH",content:"DPR"}),(0,r.jsx)("meta",{name:"description",content:n}),a&&(0,r.jsx)("link",{rel:"canonical",href:a}),h.map(e=>{let{href:t,locale:n}=e,a=(0,l.xi)(n);return(0,r.jsx)("link",{rel:"alternate",hrefLang:a,href:t},a)}),u&&(0,r.jsx)("link",{rel:"alternate",href:u.href,hrefLang:"x-default"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,r.jsx)("meta",{name:"HandheldFriendly",content:"true"}),(0,r.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),(0,r.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),(0,r.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"default"}),(0,r.jsx)("link",{rel:"apple-touch-icon",href:d(p,120,120)}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:d(p,152,152)}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"167x167",href:d(p,167,167)}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:d(p,180,180)}),(0,r.jsx)("link",{rel:"mask-icon",href:(0,s.ZP)("favicons/safari-pinned-tab.svg"),color:"#6842ff"}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:d(c,16,16),sizes:"16x16"}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:d(c,32,32),sizes:"32x32"}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:d(c,48,48),sizes:"48x48"}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:d(c,196,196),sizes:"196x196"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#603cba"}),(0,r.jsx)("meta",{name:"msapplication-TileImage",content:d(c,144,144)}),m]})};t.Z=h},60081:function(e,t,n){var r=n(85893),a=n(67294),i=n(9008),o=n.n(i),s=n(33209),l=n(50513),p=n(8697);let c=e=>{let{canonical:t,title:n,description:i,imageUrl:c="crazygames/share.png",imageWidth:h=1200,imageHeight:m=630,type:u}=e,{locale:d}=a.useContext(p.Z),f=(0,l.ZP)(c,{w:h,h:m,fit:"crop"});return(0,r.jsxs)(o(),{children:[(0,r.jsx)("meta",{property:"og:url",content:t}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:description",content:i}),(0,r.jsx)("meta",{property:"og:locale",content:(0,s.Ld)(d)}),(0,r.jsx)("meta",{property:"og:image",content:f}),(0,r.jsx)("meta",{property:"og:image:width",content:h.toString()}),(0,r.jsx)("meta",{property:"og:image:height",content:m.toString()}),u&&(0,r.jsx)("meta",{property:"og:type",content:u}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:t}),(0,r.jsx)("meta",{property:"twitter:title",content:n}),(0,r.jsx)("meta",{property:"twitter:description",content:i}),(0,r.jsx)("meta",{property:"twitter:image",content:f})]})};t.Z=c},44715:function(e,t,n){var r=n(85893),a=n(67294),i=n(67749);t.Z=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>class extends a.Component{static async getInitialProps(n){let{trlService:r}=(0,i.b)(n);if(!n.req){let a=Promise.all(t.map(e=>r.loadTrlMessagesToLingui(e))),[i]=await Promise.all([e.getInitialProps?await e.getInitialProps(n):{},a]);return{...i}}let a=Promise.all(t.map(e=>r.getTrlMessages(e))),[o,s]=await Promise.all([e.getInitialProps?e.getInitialProps(n):Promise.resolve({}),a]),l=s.reduce((e,t)=>Object.assign(e,t));return{messages:l,...o}}render(){let{...t}=this.props;return(0,r.jsx)(e,{...t})}}}}}]);