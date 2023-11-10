"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[665],{3090:function(e,t,n){n.d(t,{L:function(){return r}});var a=n(184),r=function(e){return e.Submit="submit",e.Button="button",e.Reset="reset",e}({});t.Z=function(e){var t=e.title,n=e.type;return(0,a.jsx)("button",{className:"bg-black px-4 py-2 text-white hover:text-[#c1c1c1]",type:n,children:t})}},6665:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(9439),r=n(2791),s=n(9135),c=n(2543),l=n(2115),i=n(7093),o=n(184),u=function(e){var t=e.id,n=(0,l.TL)();return(0,o.jsx)("button",{type:"button",onClick:function(){n((0,i.xX)(t)),n((0,c.Nq)(c.$o.Decrement))},children:(0,o.jsx)(s.zYX,{className:"h-[40px] w-[40px] hover:fill-[#0faf1f]"})})},d=function(e){var t=e.editContact,n=e.contact;return(0,o.jsx)("button",{type:"button",className:"h-[36px] rounded bg-black px-4 text-[16px] text-white hover:bg-[#c1c1c1] hover:text-black",onClick:function(){return t(n)},children:"Edit"})},m=n(4942),x=n(1413),p=n(3090),f=function(e){var t=e.contact,n=e.onClose,s=(0,l.TL)(),c=(0,r.useState)(t),u=(0,a.Z)(c,2),d=u[0],f=u[1],b=function(e){var t=e.target,n=t.name,a=t.value;f((function(e){return(0,x.Z)((0,x.Z)({},e),{},(0,m.Z)({},n,a))}))};return(0,o.jsx)("div",{className:"fixed left-0 top-0 h-[100%] w-[100%] backdrop-blur-sm",children:(0,o.jsxs)("div",{className:"absolute left-[50%] top-[50%] flex w-[560px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded border-[1px] border-black bg-[#c1c1c1] p-4",children:[(0,o.jsx)("h3",{children:(0,o.jsx)("b",{children:"Edit contact"})}),(0,o.jsxs)("form",{className:"flex w-[100%] flex-col items-center justify-center gap-3 p-1",onSubmit:function(e){e.preventDefault(),f({name:"",number:"",id:""}),s((0,i.hx)((0,x.Z)({},d))),n()},children:[(0,o.jsxs)("label",{className:"flex w-[100%] flex-col items-center",children:["Name:",(0,o.jsx)("input",{onChange:b,className:"w-[90%] p-1",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:d.name})]}),(0,o.jsxs)("label",{className:"flex w-[100%] flex-col items-center",children:["Number:",(0,o.jsx)("input",{onChange:b,className:"w-[90%] p-1",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d.number})]}),(0,o.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,o.jsx)(p.Z,{type:p.L.Submit,title:"Edit contact"}),(0,o.jsx)("button",{type:"button",onClick:function(){f({name:"",number:"",id:""}),n()},className:"rounded border-[1px] border-black px-4 hover:bg-white",children:"Cancel"})]})]})]})})},b=n(3993),h=function(){var e,t=(0,b.zA)(),n=(0,r.useState)({isOpen:!1,contact:{name:"",number:"",id:""}}),s=(0,a.Z)(n,2),c=s[0],l=s[1],i=function(e){l((function(t){return{isOpen:!t.isOpen,contact:e}}))};return(0,o.jsxs)("div",{className:"flex w-[100%] flex-col items-center justify-center rounded border-[1px] border-black p-4",children:[c.isOpen&&(0,o.jsx)(f,{contact:c.contact,onClose:function(){l((function(e){return{isOpen:!e.isOpen,contact:{name:"",number:"",id:""}}}))}}),0!==(null===t||void 0===t||null===(e=t.items)||void 0===e?void 0:e.length)?(0,o.jsx)("ul",{className:"flex w-[90%] flex-col gap-3",children:t.items.map((function(e){return(0,o.jsxs)("li",{className:"group/item flex w-[100%] animate-translate-down justify-between rounded p-2 shadow hover:bg-slate-100",children:[(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsxs)("span",{children:["Name: ",e.name]}),(0,o.jsxs)("span",{children:["Number: ",e.number]})]}),(0,o.jsxs)("div",{className:"group/edit invisible flex animate-[translate-down] items-center gap-3 group-hover/item:visible",children:[(0,o.jsx)(d,{editContact:i,contact:e}),(0,o.jsx)(u,{id:e.id})]})]},e.id)}))}):(0,o.jsx)("span",{children:(0,o.jsx)("b",{children:"Empty!"})})]})},j=function(){var e=(0,r.useState)({name:"",number:""}),t=(0,a.Z)(e,2),n=t[0],s=t[1],u=(0,l.TL)(),d=(0,b.gW)().items,f=function(e){var t=e.target,n=t.name,a=t.value;s((function(e){return(0,x.Z)((0,x.Z)({},e),{},(0,m.Z)({},n,a))}))};return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s({name:"",number:""}),d.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?alert("".concat(n.name," is arleady in contacts.")):(u((0,i.je)((0,x.Z)({},n))),u((0,c.Nq)(c.$o.Increment)))},className:"flex w-[100%] flex-col items-center justify-center gap-3 rounded border-[1px] border-black p-5",children:[(0,o.jsxs)("label",{className:"flex w-[50%] flex-col gap-1",children:["Name:",(0,o.jsx)("input",{onChange:f,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n.name})]}),(0,o.jsxs)("label",{className:"flex w-[50%] flex-col gap-1",children:["Number:",(0,o.jsx)("input",{onChange:f,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:n.number})]}),(0,o.jsx)(p.Z,{type:p.L.Submit,title:"Add contact"})]})},v=n(2118),g=function(){var e=(0,l.TL)();(0,r.useEffect)((function(){return function(){e((0,v.M6)(""))}}),[]);return(0,o.jsx)("div",{className:"flex w-[100%] flex-col items-center justify-center rounded bg-black",children:(0,o.jsxs)("label",{className:"m-2 flex w-[50%] flex-col items-center gap-2 text-white",children:["Search contact",(0,o.jsx)("input",{className:"w-[100%] text-black",onChange:function(t){var n=t.target.value;e((0,v.M6)(n))},type:"text",name:"filter"})]})})},w=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:(0,o.jsx)("b",{children:"Contacts"})}),(0,o.jsx)(j,{}),(0,o.jsx)(g,{}),(0,o.jsx)(h,{}),";"]})}}}]);
//# sourceMappingURL=665.59784959.chunk.js.map