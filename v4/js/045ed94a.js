import{s as m,r as s,j as e,V as u,bc as fe,g as n,f as q,T as Z,y as p,G as N,J as $}from"./index.91333ef6.js";import{R as xe}from"./e88042b4.js";const _=m.input(o=>({width:o.width||"302px",height:o.height||"30px",marginTop:"9px",padding:"0px 4px",outline:"none",border:"none",borderBottom:"1px solid #FFFFFF",color:o.textColor||"#000000",backgroundColor:"light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4))",borderRadius:"2px",fontFamily:"var(--font-family-regular)",fontSize:o.fontSize||"20px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",title:o.title||"","::placeholder":{color:o.placeholderColor},"::-ms-reveal":{display:"none"}})),H=o=>{const{isPasswordVisible:t,placeholder:f,onChange:l,maxLength:w=25,value:r,placeholderColor:g,textColor:a,fontSize:h,onKeyDown:y}=o,[b,j]=s.useState(!1);return e.jsx(_,{title:f,value:r,maxLength:w,type:t?"text":"password",onChange:c=>{l(c.target.value)},onFocus:()=>j(!0),onBlur:()=>j(!1),placeholder:b?"":f,placeholderColor:g,textColor:a,fontSize:h,onKeyDown:y})},Y=o=>{const{isPasswordVisible:t,onClick:f}=o;return e.jsx(u,{type:"左右___主轴居中",style:{flex:"0 0 auto",cursor:"pointer"},onClick:()=>{f()},children:t?e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.984985 10C1.76832 5.73333 5.50665 2.5 9.99998 2.5C14.4933 2.5 18.2317 5.73333 19.0158 10C18.2325 14.2667 14.4933 17.5 9.99998 17.5C5.50665 17.5 1.76832 14.2667 0.984985 10ZM9.99998 14.1667C11.1051 14.1667 12.1649 13.7277 12.9463 12.9463C13.7277 12.1649 14.1667 11.1051 14.1667 10C14.1667 8.89493 13.7277 7.83512 12.9463 7.05372C12.1649 6.27232 11.1051 5.83333 9.99998 5.83333C8.89492 5.83333 7.83511 6.27232 7.05371 7.05372C6.27231 7.83512 5.83332 8.89493 5.83332 10C5.83332 11.1051 6.27231 12.1649 7.05371 12.9463C7.83511 13.7277 8.89492 14.1667 9.99998 14.1667ZM9.99998 12.5C9.33694 12.5 8.70106 12.2366 8.23222 11.7678C7.76338 11.2989 7.49999 10.663 7.49999 10C7.49999 9.33696 7.76338 8.70107 8.23222 8.23223C8.70106 7.76339 9.33694 7.5 9.99998 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 9.99998 12.5Z",fill:"#74EBD5"})}):e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.76665 4.94628L1.16165 2.34044L2.33999 1.16211L18.8392 17.6604L17.6608 18.8396L14.9025 16.0813C13.4366 17.011 11.7359 17.5033 9.99998 17.5004C5.50665 17.5004 1.76832 14.2671 0.984985 10.0004C1.34408 8.06025 2.31964 6.28771 3.76665 4.94628ZM12.2983 13.4771L11.0783 12.2571C10.6117 12.4804 10.0873 12.5534 9.57743 12.4661C9.06756 12.3788 8.59732 12.1355 8.23154 11.7697C7.86577 11.4039 7.62246 10.9337 7.53517 10.4238C7.44787 9.91396 7.52089 9.38957 7.74415 8.92294L6.52415 7.70294C5.99391 8.50418 5.75688 9.46405 5.85318 10.42C5.94948 11.376 6.37319 12.2693 7.05258 12.9487C7.73197 13.6281 8.62528 14.0518 9.58124 14.1481C10.5372 14.2444 11.4971 14.0073 12.2983 13.4771ZM6.64499 3.13378C7.68415 2.72544 8.81665 2.50044 9.99998 2.50044C14.4933 2.50044 18.2317 5.73378 19.0158 10.0004C18.7605 11.3888 18.1866 12.699 17.3392 13.8279L14.1225 10.6113C14.1519 10.4113 14.1667 10.2077 14.1667 10.0004C14.1668 9.40165 14.0378 8.80986 13.7886 8.2654C13.5393 7.72094 13.1757 7.2366 12.7223 6.84537C12.269 6.45414 11.7367 6.16521 11.1617 5.99826C10.5866 5.83132 9.98233 5.79028 9.38999 5.87794L6.64499 3.13378Z",fill:"#989898"})})})},oe=({text:o,onClick:t,disabled:f})=>e.jsx("button",{onClick:t,disabled:f,style:{width:"341px",height:"48px",marginTop:"30px",background:f?"#D9D9D9":"linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",borderRadius:"12px",border:"none",cursor:f?"not-allowed":"pointer"},children:e.jsx("span",{style:{width:"40px",height:"29px",fontFamily:"var(--font-family-primary)",fontStyle:"normal",fontWeight:400,fontSize:"20px",lineHeight:"29px",textAlign:"center",color:"#FFFFFF"},children:o})}),te=({text:o,onClick:t,disabled:f})=>e.jsx("button",{onClick:t,disabled:f,style:{position:"absolute",width:"341px",height:"54px",top:"388px",left:"29px",background:f?"#D9D9D9":"linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",borderRadius:"12px",border:"none",cursor:f?"not-allowed":"pointer"},children:e.jsx("span",{style:{width:"40px",height:"29px",fontFamily:"var(--font-family-primary)",fontStyle:"normal",fontWeight:400,fontSize:"20px",lineHeight:"29px",textAlign:"center",color:"#FFFFFF"},children:o})}),ue=m.div`
  position: absolute;
  width: 420px;
  height: 420px;
  left: calc(50% - 420px / 2);
  top: 0px;
  background: #3e3e3e;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 20px;
`,ie=m.div`
  position: absolute;
  width: 420px;
  height: 488px;
  left: calc(50% - 420px / 2);
  top: 0px;
  background: #3e3e3e;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 20px;
`,ge=m.div`
  // width: 80px;
  // height: 80px;
  // margin-top: 18px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`,he=m.div`
  width: 'fit-content';
  height: 35px;
  margin-top: 8px;
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  background: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 4px;
  width: 309px;
  height: 29px;
  margin-top: 20px;
`;m.input`
  width: 301px;
  height: 29px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ffffff;
  outline: none;
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  padding: 0px 4px;
  &::placeholder {
    color: #ffffff;
  }
`;const se=m.span`
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #74ebd5;
  cursor: pointer;
`,me=m.div`
  display: flex;
  justify-content: space-between;
  width: 341px;
  margin-top: 14px;
`,ne=m.div`
  width: 72px;
  width: 100%;
  height: 35px;
  margin-top: 8px;
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  background: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;m.input`
  width: 301px;
  height: 29px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ffffff;
  outline: none;
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  padding: 0px 4px;
  &::placeholder {
    color: #ffffff;
  }
`;const we=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 341px;
  margin-top: 15px;
`;m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  cursor: pointer;
`;m.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${o=>o.checked?"#74EBD5":"transparent"};
  border: 1px solid #74ebd5;
  position: relative;
  margin-right: 8px;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    width: 9px;
    height: 9px;
    background: #ffffff;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${o=>o.checked?"block":"none"};
  }
`;m.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;const re=({onClick:o})=>e.jsx("div",{style:{position:"absolute",left:"11px",top:"11px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},onClick:o,children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M19 12H5M5 12L12 19M5 12L12 5",stroke:"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),X=({onClick:o})=>e.jsx("div",{style:{position:"absolute",right:"11px",top:"11px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},onClick:o,children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),K=m.div`
  display: flex;
  flex-direction: column;
  // gap: 13px;
  gap: 26px;
  width: 309px;
  height: 194;
`,B=m.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 309px;
  height: 32px;
  background-color: transparent;
`,Q=()=>e.jsx(ge,{children:e.jsx("img",{src:fe(n.getCurrentDevice().deviceType.company)+"/login_logo.png",alt:n.driverDisplayName,width:80,draggable:!1})}),Ce=o=>{const{email:t,setEmail:f,password:l,setPassword:w,isPasswordVisible:r,setIsPasswordVisible:g,onLogin:a,onForgotPassword:h,onRegister:y,onClose:b,isEmailInvalid:j}=o,c=q(),[C,d]=s.useState(!1),[v,P]=s.useState(!1);return s.useEffect(()=>{l!==""&&(l.length<6||l.length>25||l.includes(" "))?P(!0):P(!1)},[l]),e.jsxs(ue,{children:[e.jsx(Q,{}),e.jsx(he,{children:c.请登录||"请登录"}),e.jsx(X,{onClick:b}),e.jsxs(u,{type:"上下",style:{},children:[e.jsx(Z,{type:"正文内容",text:c.邮箱||"邮箱"}),e.jsxs(u,{type:"上下",style:{position:"relative"},children:[e.jsx(_,{type:"text",inputMode:"email",autoComplete:"email",value:t,onChange:k=>f(k.target.value),placeholder:C?"":c.邮箱||"邮箱",onFocus:()=>d(!0),onBlur:()=>d(!1)}),j&&e.jsx("span",{style:{position:"absolute",top:37,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:c.请输入正确的邮箱||"请输入正确的邮箱"})]}),e.jsxs(u,{type:"上下",style:{},children:[e.jsx(Z,{type:"正文内容",text:c.密码||"密码"}),e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(H,{value:l,isPasswordVisible:r,placeholder:c.密码||"密码",onChange:w,onKeyDown:k=>{k.key==="Enter"&&a()},style:{}}),v&&e.jsx("span",{style:{position:"absolute",top:37,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:c.密码长度限制625个字符且不允许有空格||"密码长度限制6-25个字符且不允许有空格"}),e.jsx(u,{style:{position:"absolute",right:"10px",top:"60%",transform:"translateY(-50%)"},children:e.jsx(Y,{isPasswordVisible:r,onClick:()=>g(!r)})})]})]})]}),e.jsxs(u,{type:"上下",style:{marginTop:"16px"},children:[e.jsx(oe,{onClick:a,disabled:t===""||l===""||j||n.isWaitingServerResponse,text:n.isWaitingServerResponse?c.请稍候||"请稍候":c.登录||"登录"}),e.jsxs(me,{children:[e.jsx(se,{onClick:y,children:c.尚未注册账号去注册||"尚未注册账号?去注册"}),e.jsx(se,{onClick:h,children:c.忘记密码||"忘记密码?"})]})]})]})},ye=o=>{const{email:t,setEmail:f,username:l,setUsername:w,isUsernameInvalid:r,password:g,setPassword:a,confirmPassword:h,setConfirmPassword:y,isPasswordVisible:b,setIsPasswordVisible:j,isConfirmPasswordVisible:c,setIsConfirmPasswordVisible:C,agreeToTerms:d,setAgreeToTerms:v,onRegister:P,onBack:k,onClose:I,isEmailInvalid:O}=o,x=q(),[E,z]=s.useState(!1),[M,L]=s.useState(!1),[W,V]=s.useState(!1),[S,R]=s.useState(!1),[T,D]=s.useState(!1);return s.useEffect(()=>{g!==""&&(g.length<6||g.length>25||g.includes(" "))?V(!0):V(!1)},[g]),s.useEffect(()=>{R(h!==""&&h!==g)},[h,g]),e.jsxs(ie,{children:[e.jsx(re,{onClick:k}),e.jsx(X,{onClick:I}),e.jsx(Q,{}),e.jsx(ne,{children:x.请注册||"请注册"}),T?e.jsx(K,{children:e.jsx("div",{style:{whiteSpace:"pre-wrap",fontFamily:"var(--font-family-regular)",fontSize:"14px",width:"309px",height:"194px",overflowY:"auto",padding:"5px 10px"},children:x.用户协议内容||"用户协议内容"})}):e.jsxs(K,{children:[e.jsx(B,{children:e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(_,{type:"text",inputMode:"email",autoComplete:"email",value:t,onChange:F=>f(F.target.value),placeholder:E?"":x.邮箱||"邮箱",onFocus:()=>z(!0),onBlur:()=>z(!1)}),O&&e.jsx("span",{style:{position:"absolute",top:37,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:x.邮箱只允许字母数字下划线及连字符||"邮箱只允许字母、数字、下划线及连字符"})]})}),e.jsx(B,{children:e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(_,{type:"text",value:l,onChange:F=>w(F.target.value),placeholder:M?"":x.用户名称||"用户名称",onFocus:()=>L(!0),onBlur:()=>L(!1)}),r&&e.jsx("span",{style:{position:"absolute",top:37,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:x.用户名长度限制420个字符且不允许有空格||"用户名长度限制4-20个字符且不允许有空格"})]})}),e.jsx(B,{children:e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(H,{value:g,isPasswordVisible:b,placeholder:x.密码||"密码",onChange:a,style:{width:"301px",backgroundColor:"transparent",border:"none",borderBottom:"1px solid #FFFFFF",color:"#FFFFFF"}}),W&&e.jsx("span",{style:{position:"absolute",top:37,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:x.密码长度限制625个字符且不允许有空格||"密码长度限制6-25个字符且不允许有空格"}),e.jsx(u,{style:{position:"absolute",right:"10px",top:"60%",transform:"translateY(-50%)"},children:e.jsx(Y,{isPasswordVisible:b,onClick:()=>j(!b)})})]})}),e.jsx(B,{children:e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(H,{value:h,isPasswordVisible:c,placeholder:x.确认密码||"确认密码",onChange:y,style:{width:"301px",backgroundColor:"transparent",border:"none",borderBottom:"1px solid #FFFFFF",color:"#FFFFFF"}}),S&&e.jsx("span",{style:{position:"absolute",top:37,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:x.两次密码输入不一致||"两次密码输入不一致"}),e.jsx(u,{style:{position:"absolute",right:"10px",top:"60%",transform:"translateY(-50%)"},children:e.jsx(Y,{isPasswordVisible:c,onClick:()=>C(!c)})})]})})]}),e.jsx(we,{children:T?e.jsx(te,{onClick:()=>{D(!1),v(!d)},text:x.同意||"同意"}):e.jsxs(e.Fragment,{children:[e.jsx("button",{style:{position:"absolute",width:"341px",height:"54px",top:"388px",left:"29px",background:"transparent",zIndex:!d||n.isWaitingServerResponse?1:-10,cursor:"not-allowed",border:"none"},onClick:()=>{n.isWaitingServerResponse||p.error(x.请同意用户协议||"请同意用户协议!",n.toastOptions)}}),e.jsx(te,{onClick:P,disabled:!d||n.isWaitingServerResponse,text:n.isWaitingServerResponse?x.请稍候||"请稍候":x.注册||"注册"})]})}),!T&&e.jsx(xe,{isSelected:d,onClick:()=>{d?v(!d):D(!0)},text:x.同意用户协议||"同意用户协议",textColor:"#74EBD5",style:{cursor:"pointer",position:"absolute",left:"192px",bottom:"16px",transform:"translateX(-50%)",fontSize:"12px",fontFamily:"var(--font-family-medium)",fontWeight:500}})]})},be=o=>/^[^\s@]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(o),J=o=>o.length>=6&&o.length<=25&&!o.includes(" "),Fe=o=>{const{email:t,setEmail:f,verificationCode:l,setVerificationCode:w,password:r,setPassword:g,confirmPassword:a,setConfirmPassword:h,onRequestVerificationCode:y,onSubmit:b,onBack:j,onClose:c,isEmailInvalid:C}=o,d=q(),[v,P]=s.useState(!1),[k,I]=s.useState(!1),[O,x]=s.useState(!1),[E,z]=s.useState(!1),[M,L]=s.useState(!1),[W,V]=s.useState(!1),[S,R]=s.useState(0);s.useEffect(()=>{r!==""&&!J(r)?L(!0):L(!1)},[r]),s.useEffect(()=>{V(a!==""&&a!==r)},[a,r]);const T=C||t.length===0||l.length===0||r.length===0||a.length===0||!J(r)||a!==r;s.useEffect(()=>{let F;return S>0&&(F=setInterval(()=>{R(A=>A-1)},1e3)),()=>{F&&clearInterval(F)}},[S]);const D=()=>{C||t.length===0||S>0||(y(),R(60))};return e.jsxs(ie,{children:[e.jsx(re,{onClick:j}),e.jsx(X,{onClick:c}),e.jsx(Q,{}),e.jsx(ne,{children:d.忘记密码||"忘记密码"}),e.jsxs(K,{children:[e.jsx(B,{children:e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(_,{type:"text",inputMode:"email",autoComplete:"email",value:t,onChange:F=>f(F.target.value),placeholder:v?"":d.邮箱||"邮箱",onFocus:()=>P(!0),onBlur:()=>P(!1)}),C&&e.jsx(Z,{type:"提示文本",wrap:!0,style:{position:"absolute",top:37,color:"#ff4d4f"},text:d.邮箱格式不正确||"邮箱格式不正确"})]})}),e.jsx(B,{style:{marginTop:"8px"},children:e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(_,{width:"150px",type:"text",value:l,onChange:F=>w(F.target.value),placeholder:k?"":d.验证码||"验证码",onFocus:()=>I(!0),onBlur:()=>I(!1)}),e.jsx("button",{onClick:D,disabled:S>0,style:{position:"absolute",right:"10px",top:"60%",transform:"translateY(-50%)",background:S>0?"#ccc":"linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",borderRadius:"6px",border:"none",cursor:S>0?"not-allowed":"pointer",width:"140px",height:"32px",fontFamily:"var(--font-family-primary)",fontStyle:"normal",fontWeight:400,fontSize:"16px",lineHeight:"24px",color:"#FFFFFF"},children:S>0?`${S}s`:d.获取验证码||"获取验证码"})]})}),e.jsx(B,{style:{marginTop:"8px"},children:e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(H,{value:r,isPasswordVisible:O,placeholder:d.密码||"密码",onChange:g,style:{width:"301px",backgroundColor:"transparent",border:"none",borderBottom:"1px solid #FFFFFF",color:"#FFFFFF"}}),M&&e.jsx(Z,{type:"提示文本",style:{position:"absolute",top:37,color:"#ff4d4f"},text:d._6至25个字符之间包括字母和数字||"6至25个字符之间，包括字母和数字"}),e.jsx(u,{style:{position:"absolute",right:"10px",top:"60%",transform:"translateY(-50%)"},children:e.jsx(Y,{isPasswordVisible:O,onClick:()=>x(!O)})})]})}),e.jsx(B,{style:{marginTop:"8px"},children:e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(H,{value:a,isPasswordVisible:E,placeholder:d.确认密码||"确认密码",onChange:h,style:{width:"301px",backgroundColor:"transparent",border:"none",borderBottom:"1px solid #FFFFFF",color:"#FFFFFF"}}),W&&e.jsx(Z,{type:"提示文本",style:{position:"absolute",top:37,color:"#ff4d4f"},text:d.两次密码输入不一致||"两次密码输入不一致"}),e.jsx(u,{style:{position:"absolute",right:"10px",top:"60%",transform:"translateY(-50%)"},children:e.jsx(Y,{isPasswordVisible:E,onClick:()=>z(!E)})})]})})]}),e.jsx(u,{type:"上下",style:{alignItems:"center",marginTop:"26px"},children:e.jsx(oe,{onClick:b,disabled:T,text:d.提交||"提交"})})]})},je=o=>{const t=q(),f=(i,U)=>i?t[i]||i:U,[l,w]=s.useState(n.logInOrRegisterPopUpInitialPage||"login"),[r,g]=s.useState(""),[a,h]=s.useState(""),[y,b]=s.useState(""),[j,c]=s.useState(!1),[C,d]=s.useState(""),[v,P]=s.useState(""),[k,I]=s.useState(!1),[O,x]=s.useState(!1),[E,z]=s.useState(!1),[M,L]=s.useState(!1);s.useEffect(()=>()=>{n.logInOrRegisterPopUpInitialPage="login"},[]);const[W,V]=s.useState(!1),[S,R]=s.useState(!1),[T,D]=s.useState(!1);s.useEffect(()=>{g(""),h(""),d(""),b(""),P(""),c(!1),I(!1),x(!1),z(!1),L(!1),V(!1),R(!1),D(!1)},[l]),s.useLayoutEffect(()=>{l==="register"&&!W&&y.length>0&&(b(""),V(!0))},[y]),s.useLayoutEffect(()=>{l==="forgotPassword"&&!S&&v.includes("@")&&(P(""),R(!0))},[v]),s.useLayoutEffect(()=>{(l==="forgotPassword"||l==="register")&&!T&&a.length>0&&(h(""),D(!0))},[a]);const F=i=>{b(i),c(i!==""&&!/^\S{4,20}$/.test(i))},A=i=>be(i),ee=i=>/^[^\s@]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(i),G=i=>{g(i);const U=l==="register"?ee(i):A(i);L(i!==""&&!U)},ae=async()=>{if(!r||!a){p.error(t.请填写完整信息||"请填写完整信息",n.toastOptions);return}if(!A(r)){p.error(t.邮箱格式不正确||"邮箱格式不正确",n.toastOptions);return}const i=await N.userLogin($,r,a);i.errCode===0?(n.currentUser=i.data,p.success(t.登录成功||"登录成功",n.toastOptions),o.onClose()):p.error(t[i.errMsg]||i.errMsg||t.登录失败||"登录失败",n.toastOptions)},le=async()=>{if(!r||!y||!a||!C){p.error(t.请填写完整信息||"请填写完整信息",n.toastOptions);return}if(!ee(r)){p.error(t.邮箱格式不正确||"邮箱格式不正确",n.toastOptions);return}if(a!==C){p.error(t.两次密码输入不一致||"两次密码输入不一致",n.toastOptions);return}if(j){p.error(t.用户名长度限制420个字符且不允许有空格||"用户名长度限制4-20个字符且不允许有空格",n.toastOptions);return}if(!E){p.error(t.请同意用户协议||"请同意用户协议",n.toastOptions);return}const i=await N.userRegister($,y,"male",r,a);if(i.errCode===0)p.success(t.注册成功||"注册成功",n.toastOptions),w("login");else if(typeof i.errMsg=="object"){const ce=Object.getOwnPropertyNames(i.errMsg)[0]==="name"?t.用户名长度限制420个字符且不允许有空格||"用户名长度限制4-20个字符且不允许有空格":t.注册失败||"注册失败";p.error(ce,n.toastOptions)}else{const U=typeof i.errMsg=="string"&&/(^|\b)name:\s*Validation error/i.test(i.errMsg);p.error(U?t.用户名长度限制420个字符且不允许有空格||"用户名长度限制4-20个字符且不允许有空格":t[i.errMsg]||t.注册失败||"注册失败",n.toastOptions)}},de=async()=>{if(!r){p.error(t.请输入邮箱||"请输入邮箱",n.toastOptions);return}if(!A(r)){p.error(t.邮箱格式不正确||"邮箱格式不正确",n.toastOptions);return}const i=await N.reqFindPassVerifyCode($,r);i.errCode===0?p.success(t.验证码已发送||"验证码已发送",n.toastOptions):p.error(f(i.errMsg,t.验证码发送失败||"验证码发送失败"),n.toastOptions)},pe=async()=>{if(!r||!v||!a||!C){p.error(t.请填写完整信息||"请填写完整信息",n.toastOptions);return}if(!A(r)){p.error(t.邮箱格式不正确||"邮箱格式不正确",n.toastOptions);return}if(!J(a)){p.error(t._6至25个字符之间包括字母和数字||"6至25个字符之间，包括字母和数字",n.toastOptions);return}if(a!==C){p.error(t.两次密码输入不一致||"两次密码输入不一致",n.toastOptions);return}const i=await N.findPassword($,r,v,a);i.errCode===0?(p.success(t.密码重置成功||"密码重置成功",n.toastOptions),w("login")):p.error(f(i.errMsg,t.验证码不正确||"验证码不正确"),n.toastOptions)};return e.jsx("div",{style:{position:"fixed",width:"100%",height:"100%",zIndex:9998},children:e.jsx("div",{style:{position:"fixed",width:"399px",left:"calc(50% - 399px/2)",top:"25%",background:"#3E3E3E",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",zIndex:9998},children:l==="login"?e.jsx(Ce,{email:r,setEmail:G,password:a,setPassword:h,isPasswordVisible:k,setIsPasswordVisible:I,onLogin:ae,onForgotPassword:()=>{w("forgotPassword"),g("")},onRegister:()=>{w("register"),g(""),h("")},onClose:o.onClose,isEmailInvalid:M}):l==="forgotPassword"?e.jsx(Fe,{email:r,setEmail:G,verificationCode:v,setVerificationCode:P,password:a,setPassword:h,confirmPassword:C,setConfirmPassword:d,onRequestVerificationCode:de,onSubmit:pe,onBack:()=>w("login"),onClose:o.onClose,isEmailInvalid:M}):l==="register"?e.jsx(ye,{email:r,setEmail:G,username:y,setUsername:F,isUsernameInvalid:j,password:a,setPassword:h,confirmPassword:C,setConfirmPassword:d,isPasswordVisible:k,setIsPasswordVisible:I,isConfirmPasswordVisible:O,setIsConfirmPasswordVisible:x,agreeToTerms:E,setAgreeToTerms:z,onRegister:le,onBack:()=>w("login"),onClose:o.onClose,isEmailInvalid:M,showAgreement:!0}):null})})},Pe=Object.freeze(Object.defineProperty({__proto__:null,LogInOrRegisterPopUp:je},Symbol.toStringTag,{value:"Module"}));export{je as L,H as P,Y as a,Pe as b};
