"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-7207c9"],{4547:(e,t,a)=>{a.d(t,{h:()=>v,j:()=>z});var r=a(74848),o=a(22868),s=a(83056),l=a(75177),i=a(34614);function n(e){return e.path?.startsWith("/apps/")??!1}var c=a(4965);function d({renderTooltip:e,author:t,children:a}){return!1===e?(0,r.jsx)(r.Fragment,{children:a}):(0,r.jsx)(c.m,{text:`commits by ${t.login}`,direction:"se",children:a})}try{d.displayName||(d.displayName="AuthorTooltip")}catch{}var u=a(14744),h=a.n(u),p=a(96540);let m={fontWeight:"bold",fontColor:"fg.default",includeTooltip:!1,avatarSize:void 0},x=(0,p.createContext)(m);function f({authorSettings:e,children:t}){let a=h()(m,e??{});return(0,r.jsx)(x.Provider,{value:a,children:t})}function g(){return(0,p.useContext)(x)||m}try{x.displayName||(x.displayName="AuthorSettingsContext")}catch{}try{f.displayName||(f.displayName="AuthorSettingsProvider")}catch{}var y=a(30631),j=a(52464);let b=["150px","150px","200px"];function C({displayName:e,authorSettings:t}){return(0,r.jsx)(y.A,{title:e,maxWidth:b,inline:!0,children:(0,r.jsx)(j.A,{sx:{fontWeight:t.fontWeight,whiteSpace:"nowrap",color:t.fontColor},children:e})})}try{C.displayName||(C.displayName="AuthorDisplayName")}catch{}function v({author:e,repo:t,sx:a}){let c=g();if(!e)return null;let u=(0,r.jsx)(o.r,{"aria-label":`${e.login||"author"}`,src:e.avatarUrl,alt:`${e.login||"author"}`,sx:{mr:2,mt:"-1px",ml:"1px"},size:c.avatarSize,square:n(e)});return(0,r.jsxs)(l.A,{sx:{display:"flex",flexDirection:"row",alignItems:"center",...a},"data-testid":"author-avatar",children:[e.path?(0,r.jsx)(i.A,{href:e.path,"data-testid":"avatar-icon-link","data-hovercard-url":e.login?(0,s.dCN)({owner:e.login}):void 0,children:u}):u,e.login?(0,r.jsx)(d,{author:e,renderTooltip:c.includeTooltip,children:(0,r.jsx)(i.A,{muted:!0,href:(0,s.jQC)({repo:t,author:e.login}),"aria-label":`commits by ${e.login}`,"data-hovercard-url":(0,s.dCN)({owner:e.login}),sx:{fontWeight:c.fontWeight,whiteSpace:"nowrap",color:c.fontColor,"&:hover":{color:c.fontColor,textDecoration:"underline"}},children:e.login})}):(0,r.jsx)(C,{displayName:e.displayName,authorSettings:c})]})}try{v.displayName||(v.displayName="AuthorAvatar")}catch{}var N=a(16823),k=a(86079);function w({authors:e,repo:t}){let a=e.length,[o,s]=(0,p.useState)(!1),l=(0,p.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.A,{as:"button","aria-label":`Show ${a} authors`,"data-testid":"authors-dialog-anchor",onClick:()=>{s(!0)},sx:{mx:1},ref:l,muted:!0,children:[a," ","people"]}),o&&(0,r.jsx)(k.l,{title:`${a} authors`,onClose:()=>{s(!1),setTimeout(()=>l.current?.focus(),25)},width:"medium",height:a>=12?"small":"auto",renderBody:()=>(0,r.jsx)(N.l,{sx:{overflowY:"auto",py:2},"data-testid":"contributor-dialog-list",children:e.map((e,a)=>(0,r.jsx)(S,{author:e,repo:t},`${e.login}_${a}`))})})]})}function S({author:e,repo:t}){return(0,r.jsxs)(N.l.LinkItem,{sx:{display:"flex",flexDirection:"row",fontSize:1,py:2,color:"fg.default","&:hover":{backgroundColor:"canvas.subtle"}},"data-testid":"contributor-dialog-row",href:(0,s.jQC)({repo:t,author:e.login??""}),children:[(0,r.jsx)(o.r,{src:e.avatarUrl,alt:e.login??e.displayName,sx:{mr:2},"aria-hidden":"true",square:n(e)}),(0,r.jsx)(y.A,{inline:!0,title:e.login??e.displayName??"",children:e.login??e.displayName})]})}try{w.displayName||(w.displayName="AuthorsDialog")}catch{}try{S.displayName||(S.displayName="AuthorRow")}catch{}var A=a(31575);function I({authors:e,onBehalfOf:t}){let a=g();return(0,r.jsxs)(A.A,{children:[e.slice(0,5).map((e,t)=>(0,r.jsx)(o.r,{"data-testid":"commit-stack-avatar",src:e.avatarUrl,alt:e.login??e.displayName,"data-hovercard-url":(0,s.dCN)({owner:e.login??""}),square:n(e),size:a.avatarSize},`${e.login}_${t}`)),t&&(0,r.jsx)(o.r,{"data-testid":"commit-stack-avatar",src:t.avatarUrl,alt:t.login??t.displayName,"data-hovercard-url":(0,s.qsO)({owner:t.login??""}),square:!0,size:a.avatarSize},`${t.login}_on_behalf_of`)]})}try{I.displayName||(I.displayName="CommitAuthorStack")}catch{}function _({author:e,repo:t,sx:a}){let o=g();return e?(0,r.jsx)(l.A,{sx:{display:"flex",flexDirection:"row",alignItems:"center",...a},"data-testid":"author-link",children:e.login?(0,r.jsx)(d,{author:e,renderTooltip:o.includeTooltip,children:(0,r.jsx)(i.A,{muted:!0,href:(0,s.jQC)({repo:t,author:e.login}),"aria-label":`commits by ${e.login}`,"data-hovercard-url":(0,s.dCN)({owner:e.login}),sx:{fontWeight:o.fontWeight,whiteSpace:"nowrap",color:o.fontColor,"&:hover":{color:o.fontColor,textDecoration:"underline"}},children:e.login})}):(0,r.jsx)(C,{displayName:e.displayName,authorSettings:o})}):null}try{_.displayName||(_.displayName="AuthorLink")}catch{}var T=a(20053);let D={orgLink:"OrgLink-module__orgLink--pOGLv"};function L({org:e,className:t}){return e?(0,r.jsx)("div",{className:(0,T.$)("d-flex flex-row flex-items-center",t),children:(0,r.jsx)(i.A,{muted:!0,href:e.path,"aria-label":`${e.login}'s org home page`,"data-hovercard-url":(0,s.qsO)({owner:e.login}),className:D.orgLink,children:e.login})}):null}try{L.displayName||(L.displayName="OrgLink")}catch{}function B({author:e,repo:t}){return(0,r.jsx)(v,{author:e,repo:t})}function P({author:e,committer:t,committerAttribution:a,onBehalfOf:o,repo:s}){let l=[e];return t&&a&&l.push(t),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{authors:l,onBehalfOf:o}),(0,r.jsx)(_,{author:e,repo:s,sx:{pl:1}})]})}function $({authors:e,onBehalfOf:t,repo:a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{authors:e,onBehalfOf:t}),e.map((t,o)=>(0,r.jsxs)(p.Fragment,{children:[(0,r.jsx)(_,{author:t,repo:a,sx:{pl:1}}),o!==e.length-1&&(0,r.jsx)("span",{className:"pl-1",children:"and"})]},`${t.login}_${o}`))]})}function R({authors:e,onBehalfOf:t,repo:a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{authors:e,onBehalfOf:t}),(0,r.jsx)(w,{authors:e,repo:a})]})}function z({authors:e,committer:t,committerAttribution:a,onBehalfOf:o,repo:s,children:i,includeVerbs:n=!0,authorSettings:c,textVariant:d="default"}){let u=1===e.length&&!a&&!o,h=1===e.length&&(a||o),p=2===e.length&&!a,m=e[0];return(0,r.jsx)(l.A,{sx:{display:"flex",flexDirection:"row",flexWrap:["wrap","wrap","wrap","nowrap"],alignItems:"center"},className:"muted"===d?"color-fg-muted":"",children:(0,r.jsxs)(f,{authorSettings:c,children:[u&&m&&(0,r.jsx)(B,{author:m,repo:s}),h&&m&&(0,r.jsx)(P,{author:m,committer:t,committerAttribution:a,onBehalfOf:o,repo:s}),p&&(0,r.jsx)($,{authors:e,onBehalfOf:o,repo:s}),!u&&!h&&!p&&(0,r.jsx)(R,{authors:e,onBehalfOf:o,repo:s}),(0,r.jsx)(F,{committer:t,committerAttribution:a||!1,includeVerbs:n,repo:s,verbClass:n?"pl-1":""}),o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"pl-1",children:"on behalf of"}),(0,r.jsx)(L,{org:o,className:"pl-1"})]}),i]})})}function F({committer:e,committerAttribution:t,includeVerbs:a,repo:o,verbClass:s}){return e&&e.isGitHub?(0,r.jsx)("span",{className:s,children:a&&"authored"}):t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"pl-1",children:a?"authored and":"and"}),(0,r.jsx)(_,{author:e,repo:o,sx:{pl:1}}),(0,r.jsx)("span",{className:s,children:a&&"committed"})]}):(0,r.jsx)("span",{className:s,children:a&&"committed"})}try{B.displayName||(B.displayName="SingleAuthor")}catch{}try{P.displayName||(P.displayName="AuthorByline")}catch{}try{$.displayName||($.displayName="TwoAuthors")}catch{}try{R.displayName||(R.displayName="MultipleAuthors")}catch{}try{z.displayName||(z.displayName="CommitAttribution")}catch{}try{F.displayName||(F.displayName="AuthoredOrCommitted")}catch{}},1946:(e,t,a)=>{a.d(t,{xC:()=>b,B6:()=>N,ym:()=>S});var r=a(74848),o=a(38621),s=a(55847),l=a(87330),i=a(30729),n=a(94977),c=a(96540),d=a(20053),u=a(75177),h=a(30595),p=a(86079),m=a(22868),x=a(34614),f=a(52464);function g({checkRun:e}){let{icon:t,iconColor:a}=function(e){switch(e){case"check":return{icon:o.CheckIcon,iconColor:"success.fg"};case"dot-fill":return{icon:o.DotFillIcon,iconColor:"attention.fg"};case"stop":return{icon:o.StopIcon,iconColor:"muted.fg"};case"issue-reopened":return{icon:o.IssueReopenedIcon,iconColor:"muted.fg"};case"clock":return{icon:o.ClockIcon,iconColor:"attention.fg"};case"square-fill":return{icon:o.SquareFillIcon,iconColor:"fg.default"};case"skip":return{icon:o.SkipIcon,iconColor:"muted.fg"};case"alert":return{icon:o.AlertIcon,iconColor:"danger.fg"};default:return{icon:o.XIcon,iconColor:"danger.fg"}}}(e.icon),s="in_progress"===e.state;return(0,r.jsxs)(u.A,{"data-testid":"check-run-item",as:"li",sx:{display:"flex",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"border.default",backgroundColor:"canvas.subtle",py:2,pr:3,pl:"12px",alignItems:"center"},children:[(0,r.jsxs)(u.A,{sx:{alignSelf:"center",display:"flex"},children:[s?(0,r.jsx)(u.A,{sx:{height:"16px",width:"16px",minWidth:"16px",alignSelf:"center",mx:"7px"},children:(0,r.jsxs)("svg",{fill:"none",viewBox:"0 0 16 16",className:"anim-rotate","aria-hidden":"true",role:"img",children:[(0,r.jsx)("path",{opacity:".5",d:"M8 15A7 7 0 108 1a7 7 0 000 14v0z",stroke:"#dbab0a",strokeWidth:"2"}),(0,r.jsx)("path",{d:"M15 8a7 7 0 01-7 7",stroke:"#dbab0a",strokeWidth:"2"}),(0,r.jsx)("path",{d:"M8 12a4 4 0 100-8 4 4 0 000 8z",fill:"#dbab0a"})]})}):(0,r.jsx)(i.A,{icon:t,sx:{color:a,margin:"0px 7px",alignSelf:"center"}}),(0,r.jsx)(n.A,{"aria-label":e.avatarDescription,direction:"e",children:(0,r.jsx)(x.A,{href:e.avatarUrl,sx:{mr:2},"aria-label":"Avatar",children:(0,r.jsx)(m.r,{square:!0,src:e.avatarLogo,sx:{backgroundColor:e.avatarBackgroundColor}})})})]}),(0,r.jsxs)(f.A,{sx:{fontSize:"13px",color:"fg.muted"},children:[(0,r.jsxs)(f.A,{sx:{fontWeight:"bold",color:"fg.default",mr:"2px"},children:[e.name," "]}),e.pending?(0,r.jsx)(f.A,{sx:{fontStyle:"italic"},children:e.additionalContext}):e.additionalContext,e.description&&(0,r.jsxs)("span",{children:[" ","- ",e.pending?(0,r.jsx)(f.A,{sx:{fontStyle:"italic"},children:e.description}):e.description]})]}),(0,r.jsx)(x.A,{href:e.targetUrl,sx:{pl:"12px",fontSize:"13px",marginLeft:"auto"},children:"Details"})]})}try{g.displayName||(g.displayName="CheckRunItem")}catch{}function y({checkRuns:e}){return(0,r.jsx)(u.A,{as:"ul",sx:{display:"flex",flexDirection:"column",maxHeight:["230px","380px"],overflow:"auto"},children:e.map((e,t)=>(0,r.jsx)(g,{checkRun:e},t))})}try{y.displayName||(y.displayName="ChecksStatusBadgeFooter")}catch{}function j({checksHeaderState:e}){switch(e){case"SUCCEEDED":return(0,r.jsx)(f.A,{sx:{fontWeight:"bold",fontSize:2},children:"All checks have passed"});case"FAILED":return(0,r.jsx)(f.A,{sx:{color:"var(--fgColor-danger, var(--color-danger-fg))",fontWeight:"bold",fontSize:2},children:"All checks have failed"});case"PENDING":return(0,r.jsx)(f.A,{sx:{color:"var(--fgColor-attention, var(--color-attention-fg))",fontWeight:"bold",fontSize:2},children:"Some checks haven\u2019t completed yet"});default:return(0,r.jsx)(f.A,{sx:{color:"var(--fgColor-danger, var(--color-danger-fg))",fontWeight:"bold",fontSize:2},children:"Some checks were not successful"})}}try{j.displayName||(j.displayName="HeaderState")}catch{}function b(e){let{combinedStatus:t,isOpen:a,onDismiss:o}=e,s=t?(0,r.jsx)(j,{checksHeaderState:t.checksHeaderState}):"Loading...";return a?(0,r.jsx)(p.l,{onClose:o,sx:{overflowY:"auto",backgroundColor:"canvas.default",boxShadow:"none",border:"1px solid",borderColor:"border.default",borderBottom:0},title:s,subtitle:t?t.checksStatusSummary:void 0,width:"xlarge",renderBody:()=>(0,r.jsx)(p.l.Body,{sx:{padding:0},children:t?(0,r.jsx)(y,{checkRuns:t.checkRuns}):(0,r.jsx)(u.A,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,r.jsx)(h.A,{size:"medium"})})})}):null}try{b.displayName||(b.displayName="CheckStatusDialog")}catch{}let C={success:{circled:o.CheckCircleIcon,filled:o.CheckCircleFillIcon,default:o.CheckIcon,color:"var(--bgColor-success-emphasis, var(--color-success-emphasis))"},pending:{circled:o.CircleIcon,filled:o.DotFillIcon,default:o.DotFillIcon,color:"var(--bgColor-attention-emphasis, var(--color-scale-yellow-4))"},failure:{circled:o.XCircleIcon,filled:o.XCircleFillIcon,default:o.XIcon,color:"var(--bgColor-danger-emphasis, var(--color-scale-red-4))"},error:{circled:o.QuestionIcon,filled:o.QuestionIcon,default:o.QuestionIcon,color:"var(--fgColor-muted, var(--color-canvas-subtle))"}};function v({className:e,descriptionText:t,icon:a,iconColor:o,tooltipText:s}){let l=(0,c.useId)(),u=(0,r.jsx)(i.A,{"aria-labelledby":s?l:void 0,icon:a,"aria-label":s?void 0:t||"See all checks",sx:{color:o}});return s&&(u=(0,r.jsx)(n.A,{id:l,"aria-label":s,direction:"e",children:u})),(0,r.jsxs)("span",{className:(0,d.$)(e,"d-flex flex-items-center gap-1"),"data-testid":"checks-status-badge-icon-only",children:[u,t&&(0,r.jsxs)("span",{children:[" ",t]})]})}function N(e){let{statusRollup:t,combinedStatus:a,variant:o="default",disablePopover:i,buttonSx:d,size:u="medium",descriptionText:h="",onWillOpenPopup:p}=e,[m,x]=(0,c.useState)(!1),f=(0,c.useId)(),g=(0,c.useRef)(null),y=C[t],{icon:j,iconColor:N}={icon:y?.[o]||C.error[o],iconColor:y?.color||C.error.color};return"error"===t?(0,r.jsx)(v,{className:i?void 0:"p-1",descriptionText:"?/?",icon:j,iconColor:N,tooltipText:"There was an error retrieving checks status"}):i?(0,r.jsx)(v,{descriptionText:h,icon:j,iconColor:N}):(0,r.jsxs)(r.Fragment,{children:[h?(0,r.jsx)(s.Q,{"data-testid":"checks-status-badge-button",leadingVisual:j,variant:"invisible",size:u,"aria-label":a?.checksStatusSummary??`Status checks: ${t}`,sx:{p:1,color:"fg.default",fontWeight:"normal",svg:{color:N},...d},ref:g,onClick:()=>{p?.(),x(!0)},children:h}):(0,r.jsx)(n.A,{id:f,"aria-label":a?.checksStatusSummary??t,direction:"se",sx:{mr:2},children:(0,r.jsx)(l.K,{unsafeDisableTooltip:!0,"data-testid":"checks-status-badge-icon",icon:j,variant:"invisible",size:u,"aria-labelledby":f,sx:{py:0,px:0,svg:{color:N},":hover:not([disabled])":{bg:"pageHeaderBg"},...d},ref:g,onClick:()=>{p?.(),x(!0)}})}),m&&(0,r.jsx)(b,{combinedStatus:a,isOpen:m,onDismiss:()=>{x(!1),setTimeout(()=>{g.current?.focus()},0)}})]})}try{v.displayName||(v.displayName="IconOnlyStatus")}catch{}try{N.displayName||(N.displayName="ChecksStatusBadge")}catch{}var k=a(83056),w=a(28784);function S(e,t){let[a,r]=(0,c.useState)(),[o,s]=(0,c.useState)();return[a,(0,c.useCallback)(async()=>{if(o!==e&&(s(e),r(void 0),e)){let a=(0,k.vki)(t,e),o=await (0,w.lS)(a);r(await o.json())}},[e,o,t])]}},80040:(e,t,a)=>{a.d(t,{e:()=>s});var r=a(20594),o=a(43899);function s(e,t){let{basePageDataUrl:a}=(0,o.Yu)(),s=`${a}/page_data/${e}`;return t&&(s+=`?${t}`),(0,r.RD)(s)}},60301:(e,t,a)=>{a.d(t,{u:()=>r});let r={codeButton:"code_button",commits:"commits",header:"header",mergeBox:"merge_box",statusChecks:"status_checks",tabCounts:"tab_counts",changeBase:"change_base",deleteHeadRef:"delete_head_ref",dequeuePullRequest:"dequeue_pull_request",disableAutoMerge:"disable_auto_merge",enableAutoMerge:"enable_auto_merge",markReadyForReview:"mark_ready_for_review",merge:"merge",restoreHeadRef:"restore_head_ref",updatePullRequestBranch:"update_pull_request_branch",updateTitle:"update_title"}},46235:(e,t,a)=>{a.d(t,{A:()=>r});let r=new(a(65490)).E({defaultOptions:{queries:{staleTime:1/0,retry:!1}}})},92836:(e,t,a)=>{a.d(t,{X:()=>o});var r=a(95140);function o(e){let t=e.join(","),[a]=(0,r.I)(()=>{let e=/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null;return!!e&&t.includes(e)},!1,[t]);return a}},20509:(e,t,a)=>{a.d(t,{n:()=>b});var r,o=a(74848),s=a(74572),l=a(16823),i=a(55847),n=a(60499),c=a(96540),d=a(83897),u=a(10065),h=a(78010),p=a(20594),m=a(60301),x=a(80040),f=a(28784),g=a(65510),y=a(76510);let j=(0,s.A)("localStorage");function b(e){let{primary:t,size:a,showCodespacesTab:r,showCopilotTab:s,isEnterprise:p,localTab:m,codespacesTab:x,copilotTab:f,localTabProps:g,copilotTabProps:b,codespacesPath:v}=e,N="code-button-default-tab",[k,w]=(0,c.useState)("local"),S=(0,c.useCallback)(e=>{w("cloud"),j.setItem(N,"cloud"),e?.preventDefault()},[]),A=(0,c.useCallback)(e=>{w("local"),j.setItem(N,"local"),e?.preventDefault()},[]),I=(0,c.useCallback)(e=>{w("copilot"),j.setItem(N,"copilot"),e?.preventDefault()},[]);(0,c.useEffect)(()=>{"cloud"===j.getItem(N)&&r&&S()},[]);let _={height:"40px",width:"50%",borderBottomRightRadius:0,borderBottomLeftRadius:0,borderTop:0,color:"fg.muted","&.selected:hover":{backgroundColor:"unset",borderColor:"border.default",borderBottom:0}},T=!p&&(r||s);return(0,o.jsx)(y.T,{size:a,isPrimary:t,children:(0,o.jsxs)(l.l,{className:"react-overview-code-button-action-list py-0",children:[T&&(0,o.jsxs)(n.A,{children:[(0,o.jsx)(n.A.Link,{as:i.Q,selected:"local"===k,onClick:A,sx:{..._,borderLeft:0},children:"Local"}),!p&&r&&(0,o.jsx)(n.A.Link,{as:i.Q,selected:"cloud"===k,onClick:S,sx:{..._,borderRight:s?null:0},children:"Codespaces"}),s&&(0,o.jsx)(n.A.Link,{as:i.Q,selected:"copilot"===k,onClick:I,sx:{..._,borderRight:0},children:"Copilot"})]}),"local"===k&&(m||(g?(0,o.jsx)(h.F,{...g}):null)),"cloud"===k&&(x||(v?(0,o.jsx)(u.VO,{children:(0,o.jsx)(C,{codespacesPath:v})}):null)),"copilot"===k&&(f||(b?(0,o.jsx)(d.K,{...b}):null))]})})}function C(e){let t=function(e){let t=(0,x.e)(m.u.codeButton);return(0,g.U)({queryKey:[m.u.codeButton,t],queryFn:async()=>{let e=await (0,f.QJ)(t);if(!e.ok)throw Error(`HTTP ${e.status}`);let a=await e.json();return(0,p.Av)(a),a},initialData:void 0})}().data;return(0,o.jsx)(u.NF,{codespacesPath:e.codespacesPath,...t})}!function(e){e.Local="local",e.Codespaces="cloud",e.Copilot="copilot"}(r||(r={}));try{b.displayName||(b.displayName="CodeDropdownButton")}catch{}try{C.displayName||(C.displayName="SuspendedCodespacesTab")}catch{}},76510:(e,t,a)=>{a.d(t,{T:()=>d});var r=a(74848),o=a(15820),s=a(85349),l=a(55847),i=a(89323),n=a(96540),c=a(38621);let d=({isPrimary:e,children:t,size:a,onOpenChange:d})=>{let u=(0,o.u)("accessible_code_button"),[h,p]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{u&&d&&d(h)},[h,u]),u)?(0,r.jsx)(s.T,{align:"end",focusZoneSettings:{disabled:!0},open:h,onOpen:()=>p(!0),onClose:()=>p(!1),renderAnchor:t=>(0,r.jsx)(l.Q,{...t,variant:e?"primary":void 0,leadingVisual:()=>(0,r.jsx)(c.CodeIcon,{className:"hide-sm"}),trailingVisual:()=>(0,r.jsx)(c.TriangleDownIcon,{}),size:a||"medium",children:"Code"}),children:t}):(0,r.jsxs)(i.W,{children:[(0,r.jsx)(i.W.Button,{variant:e?"primary":void 0,leadingVisual:()=>(0,r.jsx)(c.CodeIcon,{className:"hide-sm"}),size:a||"medium",children:"Code"}),(0,r.jsx)(i.W.Overlay,{width:"auto",align:"end",children:t})]})};try{d.displayName||(d.displayName="CodeMenuButton")}catch{}},10065:(e,t,a)=>{a.d(t,{NF:()=>f,QS:()=>u,VO:()=>m,wW:()=>g});var r=a(74848),o=a(22084),s=a(28784),l=a(34614),i=a(30595),n=a(96540),c=a(44196),d=a(65510);function u(e,t){let a=encodeURIComponent(t);return`/codespaces?codespace%5Bref%5D=${a}&current_branch=${a}&event_target=REPO_PAGE&repo=${e}`}function h(e){return(0,r.jsxs)("span",{children:["An unexpected error occurred. Please"," ",(0,r.jsx)(l.A,{inline:!0,href:e,children:"contact support"})," ","for more information."]})}function p({header:e,message:t}){return(0,r.jsxs)("div",{className:"blankslate",children:[(0,r.jsx)("p",{className:"fgColor-default text-bold mb-1",children:e}),(0,r.jsx)("p",{className:"mt-2 mx-4",children:t})]})}function m({children:e}){return(0,r.jsx)("div",{className:"d-flex flex-justify-center",children:(0,r.jsx)(c.t,{fallback:(0,r.jsx)(p,{header:"Codespaces data failed to load.",message:"Refresh the page and try again."}),children:(0,r.jsx)(n.Suspense,{fallback:(0,r.jsx)("div",{className:"m-2",children:(0,r.jsx)(i.A,{})}),children:e})})})}function x({codespacesPath:e}){let{data:t}=(0,d.U)({queryKey:["CodespacesTabContent.content",e],queryFn:async()=>{let t=await (0,s.QJ)(e);if(t.status>=400&&t.status<=499)return"";if(!t.ok)throw Error(`HTTP ${t.status}`);return await t.text()}});return(0,r.jsx)(o.oG,{className:"width-full",html:t})}function f(e){let{hasAccessToCodespaces:t,repositoryPolicyInfo:a,contactPath:o,currentUserIsEnterpriseManaged:s,enterpriseManagedBusinessName:i,newCodespacePath:n,codespacesPath:c,isLoggedIn:d}=e;if(!t){if(!d)return(0,r.jsx)(p,{header:"Sign in required",message:(0,r.jsxs)("span",{children:["Please"," ",(0,r.jsx)(l.A,{inline:!0,href:n,children:"sign in"})," ","to use Codespaces."]})});if(a?.allowed)return a?.changesWouldBeSafe?(0,r.jsx)(p,{header:"Codespace access limited",message:h(o)}):(0,r.jsx)(p,{header:"Repository access limited",message:(0,r.jsx)("span",{children:"You do not have access to push to this repository and its owner has disabled forking."})});{let e=null;return e=!a?.canBill&&s?(0,r.jsxs)("span",{children:[(0,r.jsx)(l.A,{href:"https://docs.github.com/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users",children:"Enterprise-managed users"}),` must have their Codespaces usage paid for by ${i||"their enterprise"}.`]}):a?.hasIpAllowLists?(0,r.jsxs)("span",{children:["Your organization or enterprise enforces"," ",(0,r.jsx)(l.A,{inline:!0,href:"https://docs.github.com/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization",children:"IP allow lists"}),"which are unsupported by Codespaces at this time."]}):a?.disabledByBusiness?(0,r.jsx)("span",{children:"Your enterprise has disabled Codespaces at this time. Please contact your enterprise administrator for more information."}):a?.disabledByOrganization?(0,r.jsx)("span",{children:"Your organization has disabled Codespaces on this repository. Please contact your organization administrator for more information."}):h(o),(0,r.jsx)(p,{header:"Codespace access limited",message:e})}}return(0,r.jsx)(x,{codespacesPath:c})}function g(e){return(0,r.jsx)(m,{children:(0,r.jsx)(f,{...e})})}try{p.displayName||(p.displayName="ErrorMessage")}catch{}try{m.displayName||(m.displayName="CodespacesTabWrapper")}catch{}try{x.displayName||(x.displayName="ServerRenderedCodespacesTabContent")}catch{}try{f.displayName||(f.displayName="CodespacesTabContent")}catch{}try{g.displayName||(g.displayName="CodespacesTab")}catch{}},83897:(e,t,a)=>{a.d(t,{K:()=>d});var r=a(74848),o=a(74572),s=a(75177),l=a(61043),i=a(55847),n=a(96540);let c=(0,o.A)("localStorage");function d(e){let{repoOwner:t,repoName:a,refName:o,textPrompt:d}=e,u=`copilot-workspace-task:${t}/${a}`,h=(0,n.useCallback)(e=>{window.open(`https://copilot-workspace.githubnext.com/${t}/${a}?task=${encodeURIComponent(e)}&branch=${encodeURIComponent(o)}`,"_self")},[t,a,o]),[p,m]=(0,n.useState)(()=>c.getItem(u)||"");return(0,r.jsxs)(s.A,{as:"form",className:"p-3",sx:{display:"grid",gap:3},onSubmit:e=>{e.preventDefault(),c.removeItem(u),h(new FormData(e.currentTarget).get("task"))},children:[(0,r.jsx)(l.Ay,{name:"task","aria-label":"Task",placeholder:d||"Describe a task...",className:"width-full",resize:"vertical",value:p,onChange:e=>{m(e.target.value),c.setItem(u,e.target.value)},onKeyDown:e=>{"Enter"===e.key&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),c.removeItem(u),h(e.currentTarget.value))}}),(0,r.jsx)(i.Q,{type:"submit",variant:"primary",className:"width-full",children:"Start task"})]})}try{d.displayName||(d.displayName="CopilotTab")}catch{}},78010:(e,t,a)=>{a.d(t,{F:()=>y,J:()=>b});var r=a(74848),o=a(96540),s=a(92836),l=a(27788),i=a(28784),n=a(34614),c=a(5420),d=a(65481),u=a(16823),h=a(75177),p=a(84217),m=a(30729),x=a(4965),f=a(30569),g=a(38621);function y(e){let{httpAvailable:t,sshAvailable:a,httpUrl:h,showCloneWarning:p,sshUrl:f,sshCertificatesRequired:y,sshCertificatesAvailable:C,ghCliUrl:v,newSshKeyUrl:N,setProtocolPath:k}=e.protocolInfo,{defaultProtocol:w}=e.protocolInfo,[S,A]=(0,o.useState)(w),[I,_]=(0,o.useState)(""),{cloneUrl:T,visualStudioCloneUrl:D,showVisualStudioCloneButton:L,showXcodeCloneButton:B,xcodeCloneUrl:P,zipballUrl:$}=e.platformInfo,R=(0,s.X)(["windows","mac"]),z=(0,s.X)(["mac"]),F=(0,l.Z)(),W={borderTop:"1px solid",borderColor:"var(--borderColor-muted, var(--color-border-muted))",p:3,borderRadius:0},H="mt-2 fgColor-muted text-normal",O=(0,o.useCallback)(e=>{if(S!==e){A(e);let t=new FormData;t.set("protocol_selector",e),(0,i.DI)(k,{method:"post",body:t})}},[S,A,k]),q=(0,o.useMemo)(()=>{let e=[];return t&&e.push({protocol:"http",displayName:"HTTPS",ariaLabel:"Clone with HTTPS",handler:()=>O("http")}),a&&e.push({protocol:"ssh",displayName:"SSH",ariaLabel:"Clone with SSH",handler:()=>O("ssh")}),e.push({protocol:"gh_cli",displayName:"GitHub CLI",ariaLabel:"Clone with GitHub CLI",handler:()=>O("gh_cli")}),e},[t,O,a]),U=(0,o.useMemo)(()=>{let e=[];return R&&e.push({name:"githubDesktop",text:"Open with GitHub Desktop",url:T,icon:g.DesktopDownloadIcon}),R&&L&&e.push({name:"visualStudio",text:"Open with Visual Studio",url:D}),z&&B&&e.push({name:"xcode",text:"Open with Xcode",url:P}),e.push({name:"zip",text:"Download ZIP",url:$,icon:g.FileZipIcon}),e},[T,z,R,L,B,D,P,$]);return(0,r.jsx)("div",{children:"githubDesktop"===I?(0,r.jsx)(j,{platform:"GitHub Desktop",href:"https://desktop.github.com/"}):"visualStudio"===I?(0,r.jsx)(j,{platform:"Visual Studio"}):"xcode"===I?(0,r.jsx)(j,{platform:"Xcode",href:"https://developer.apple.com/xcode/"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"m-3",children:[(0,r.jsxs)("div",{className:"d-flex flex-items-center",children:[(0,r.jsx)(m.A,{icon:g.TerminalIcon,className:"mr-2"}),(0,r.jsx)("p",{className:"flex-1 text-bold mb-0",children:"Clone"}),(0,r.jsx)(x.m,{text:"Which remote URL should I use?",type:"label",direction:"w",children:(0,r.jsx)(n.A,{muted:!0,href:`${e.helpUrl}/articles/which-remote-url-should-i-use`,children:(0,r.jsx)(m.A,{icon:g.QuestionIcon,className:"mr-1"})})})]}),(0,r.jsx)(c.O,{sx:{border:"none",my:2,px:0},"aria-label":"Remote URL selector",children:q.map(e=>(0,r.jsx)(c.O.Item,{"aria-current":S===e.protocol?"page":void 0,"aria-label":e.ariaLabel,className:"text-bold",onClick:e.handler,children:e.displayName},e.protocol))}),"http"===S?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{inputId:"clone-with-https",inputLabel:"Clone with HTTPS url",url:h}),(0,r.jsx)("p",{className:H,children:"Clone using the web URL."})]}):"ssh"===S?(0,r.jsxs)(r.Fragment,{children:[p&&(0,r.jsxs)(d.A,{className:"mb-2",variant:"warning",children:["You don't have any public SSH keys in your GitHub account. ","You can"," ",(0,r.jsx)(n.A,{inline:!0,href:N,children:"add a new public key"}),", or try cloning this repository via HTTPS."]}),(0,r.jsx)(b,{inputId:"clone-with-ssh",inputLabel:"Clone with SSH url",url:f}),(0,r.jsx)("p",{className:H,children:y?"Use a password-protected SSH certificate.":C?"Use a password-protected SSH key or certificate.":"Use a password-protected SSH key."})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{buttonAriaLabel:"Copy command to clipboard",inputId:"clone-with-gh-cli",inputLabel:"Clone with GitHub CLI command",url:v}),(0,r.jsxs)("p",{className:H,children:["Work fast with our official CLI."," ",(0,r.jsx)(n.A,{inline:!0,href:"https://cli.github.com",target:"_blank","aria-label":"Learn more about the GitHub CLI",children:"Learn more"})]})]})]}),(0,r.jsx)(u.l,{className:"py-0",sx:{li:{mx:0,width:"100%"}},children:U.map(e=>"zip"===e.name?(0,r.jsxs)(u.l.LinkItem,{"data-turbo":"false",href:e.url,sx:W,rel:"nofollow",children:[e.icon&&(0,r.jsx)(u.l.LeadingVisual,{children:(0,r.jsx)(e.icon,{})}),e.text]},e.name):(0,r.jsxs)(u.l.Item,{sx:W,onSelect:t=>{_(e.name),t.preventDefault(),F(e.url)},children:[e.icon&&(0,r.jsx)(u.l.LeadingVisual,{children:(0,r.jsx)(e.icon,{})}),e.text]},e.name))})]})})}function j({platform:e,href:t}){return(0,r.jsxs)(h.A,{className:"p-3",sx:{width:"400px"},children:[(0,r.jsx)(p.A,{as:"h4",className:"mb-3 text-center",children:`Launching ${e}`}),t&&(0,r.jsxs)("p",{className:"mb-3",children:["If nothing happens, ",(0,r.jsx)(n.A,{inline:!0,href:t,children:`download ${e}`})," and try again."]})]})}function b({buttonAriaLabel:e="Copy url to clipboard",inputId:t,inputLabel:a,url:o}){return(0,r.jsxs)(h.A,{className:"d-flex mb-2",sx:{height:"32px"},children:[(0,r.jsx)("label",{htmlFor:t,className:"sr-only",children:a}),(0,r.jsx)("input",{id:t,type:"text",className:"form-control input-monospace input-sm color-bg-subtle","data-autoselect":!0,value:o,readOnly:!0,style:{flexGrow:1}}),(0,r.jsx)(f.T,{className:"ml-1 mr-0",sx:{width:"32px"},textToCopy:o,ariaLabel:e,tooltipProps:{direction:"nw"}})]})}try{y.displayName||(y.displayName="LocalTab")}catch{}try{j.displayName||(j.displayName="LaunchingPlatformContents")}catch{}try{b.displayName||(b.displayName="CloneUrl")}catch{}},89504:(e,t,a)=>{a.d(t,{d:()=>l,t:()=>i});var r=a(74848),o=a(96540);let s=o.createContext({});function l({repository:e,children:t}){return(0,r.jsxs)(s.Provider,{value:e,children:[" ",t," "]})}function i(){return o.useContext(s)}try{s.displayName||(s.displayName="CurrentRepositoryContext")}catch{}try{l.displayName||(l.displayName="CurrentRepositoryProvider")}catch{}},43899:(e,t,a)=>{a.d(t,{Kg:()=>l,Yu:()=>i});var r=a(74848),o=a(96540);let s=(0,o.createContext)(null);function l({children:e,basePageDataUrl:t}){let a=(0,o.useMemo)(()=>({basePageDataUrl:t}),[t]);return(0,r.jsx)(s.Provider,{value:a,children:e})}function i(){let e=(0,o.useContext)(s);if(!e)throw Error("usePageDataContext must be used within a PageDataContextProvider");return e}try{s.displayName||(s.displayName="PageDataContext")}catch{}try{l.displayName||(l.displayName="PageDataContextProvider")}catch{}}}]);
//# sourceMappingURL=ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-7207c9-4c90634e97c1.js.map