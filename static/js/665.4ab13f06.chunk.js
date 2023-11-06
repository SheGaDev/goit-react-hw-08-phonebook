"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[665],{3090:function(e,t,n){n.d(t,{L:function(){return s}});var a=n(184),s=function(e){return e.Submit="submit",e.Button="button",e.Reset="reset",e}({});t.Z=function(e){var t=e.title,n=e.type;return(0,a.jsx)("button",{className:"bg-black px-4 py-2 text-white hover:text-[#c1c1c1]",type:n,children:t})}},6665:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(9439),s=n(2791),r=n(9135),c=n(2115),i=n(7093),l=n(184),o=function(e){var t=e.id,n=(0,c.TL)();return(0,l.jsx)("button",{type:"button",onClick:function(){return n((0,i.xX)(t))},children:(0,l.jsx)(r.zYX,{className:"h-[40px] w-[40px] hover:fill-[#0faf1f]"})})},u=function(e){var t=e.editContact,n=e.contact;return(0,l.jsx)("button",{type:"button",className:"h-[36px] rounded bg-black px-4 text-[16px] text-white hover:bg-[#c1c1c1] hover:text-black",onClick:function(){return t(n)},children:"Edit"})},d=n(4942),m=n(1413),x=n(3090),p=function(e){var t=e.contact,n=e.onClose,r=(0,c.TL)(),o=(0,s.useState)(t),u=(0,a.Z)(o,2),p=u[0],f=u[1],b=function(e){var t=e.target,n=t.name,a=t.value;f((function(e){return(0,m.Z)((0,m.Z)({},e),{},(0,d.Z)({},n,a))}))};return(0,l.jsx)("div",{className:"fixed left-0 top-0 h-[100%] w-[100%] backdrop-blur-sm",children:(0,l.jsxs)("div",{className:"absolute left-[50%] top-[50%] flex w-[560px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded border-[1px] border-black bg-[#c1c1c1] p-4",children:[(0,l.jsx)("h3",{children:(0,l.jsx)("b",{children:"Edit contact"})}),(0,l.jsxs)("form",{className:"flex w-[100%] flex-col items-center justify-center gap-3 p-1",onSubmit:function(e){e.preventDefault(),f({name:"",number:"",id:""}),r((0,i.hx)((0,m.Z)({},p))),n()},children:[(0,l.jsxs)("label",{className:"flex w-[100%] flex-col items-center",children:["Name:",(0,l.jsx)("input",{onChange:b,className:"w-[90%] p-1",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:p.name})]}),(0,l.jsxs)("label",{className:"flex w-[100%] flex-col items-center",children:["Number:",(0,l.jsx)("input",{onChange:b,className:"w-[90%] p-1",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:p.number})]}),(0,l.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,l.jsx)(x.Z,{type:x.L.Submit,title:"Edit contact"}),(0,l.jsx)("button",{type:"button",onClick:function(){f({name:"",number:"",id:""}),n()},className:"rounded border-[1px] border-black px-4 hover:bg-white",children:"Cancel"})]})]})]})})},f=n(3993),b=n(594),h=function(){var e,t=(0,s.useState)({isOpen:!1,contact:{name:"",number:"",id:""}}),n=(0,a.Z)(t,2),r=n[0],c=n[1],i=(0,f.gW)(),d=function(e){c((function(t){return{isOpen:!t.isOpen,contact:e}}))};return(0,l.jsxs)(l.Fragment,{children:[i.isLoading&&(0,l.jsx)(b.Z,{}),(0,l.jsxs)("div",{className:"flex w-[100%] flex-col items-center justify-center rounded border-[1px] border-black p-4",children:[r.isOpen&&(0,l.jsx)(p,{contact:r.contact,onClose:function(){c((function(e){return{isOpen:!e.isOpen,contact:{name:"",number:"",id:""}}}))}}),0!==(null===i||void 0===i||null===(e=i.items)||void 0===e?void 0:e.length)?(0,l.jsx)("ul",{className:"flex w-[90%] flex-col gap-3",children:i.items.map((function(e){return(0,l.jsxs)("li",{className:"group/item flex w-[100%] animate-translate-down justify-between rounded p-2 shadow hover:bg-slate-100",children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("span",{children:["Name: ",e.name]}),(0,l.jsxs)("span",{children:["Number: ",e.number]})]}),(0,l.jsxs)("div",{className:"group/edit invisible flex animate-[translate-down] items-center gap-3 group-hover/item:visible",children:[(0,l.jsx)(u,{editContact:d,contact:e}),(0,l.jsx)(o,{id:e.id})]})]},e.id)}))}):(0,l.jsx)("span",{children:(0,l.jsx)("b",{children:"Empty!"})})]})]})},j=function(){var e=(0,s.useState)({name:"",number:""}),t=(0,a.Z)(e,2),n=t[0],r=t[1],o=(0,c.TL)(),u=(0,f.gW)().items,p=function(e){var t=e.target,n=t.name,a=t.value;r((function(e){return(0,m.Z)((0,m.Z)({},e),{},(0,d.Z)({},n,a))}))};return(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r({name:"",number:""}),u.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?alert("".concat(n.name," is arleady in contacts.")):o((0,i.je)((0,m.Z)({},n)))},className:"flex w-[100%] flex-col items-center justify-center gap-3 rounded border-[1px] border-black p-5",children:[(0,l.jsxs)("label",{className:"flex w-[50%] flex-col gap-1",children:["Name:",(0,l.jsx)("input",{onChange:p,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n.name})]}),(0,l.jsxs)("label",{className:"flex w-[50%] flex-col gap-1",children:["Number:",(0,l.jsx)("input",{onChange:p,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:n.number})]}),(0,l.jsx)(x.Z,{type:x.L.Submit,title:"Add contact"})]})},v=n(2118),g=function(){var e=(0,c.TL)();(0,s.useEffect)((function(){return function(){e((0,v.M6)(""))}}),[]);return(0,l.jsx)("div",{className:"flex w-[100%] flex-col items-center justify-center rounded bg-black",children:(0,l.jsxs)("label",{className:"m-2 flex w-[50%] flex-col items-center gap-2 text-white",children:["Search contact",(0,l.jsx)("input",{className:"w-[100%] text-black",onChange:function(t){var n=t.target.value;e((0,v.M6)(n))},type:"text",name:"filter"})]})})},w=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:(0,l.jsx)("b",{children:"Contacts"})}),(0,l.jsx)(j,{}),(0,l.jsx)(g,{}),(0,l.jsx)(h,{}),";"]})}}}]);
//# sourceMappingURL=665.4ab13f06.chunk.js.map