(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={Section:"Section_Section__LqS2d"}},12:function(t,e,n){t.exports=n(17)},17:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),l=(n(8),n(1)),u=n(11),i=n(2),m=n(3),s=n(6),h=n(5),b=n(10),f=n.n(b);function v(t){var e=t.title,n=t.children;return r.a.createElement("div",{className:f.a.Section},r.a.createElement("h2",null,e),n)}var p=n(4),C=n.n(p),d=n(19),g=function(t){Object(s.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(l.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number;t.props.onSubmit({id:Object(d.a)(),name:a,number:r}),t.setState({name:"",number:""})},t}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{className:C.a.ContactForm,onSubmit:this.handleSubmit},r.a.createElement("label",null,r.a.createElement("p",null,"Name"),r.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChange,name:"name",autoFocus:!0})),r.a.createElement("label",null,r.a.createElement("p",null,"Number"),r.a.createElement("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleChange})),r.a.createElement("button",{className:"Button",type:"submit"},"Add Contact"))}}]),n}(a.Component);function E(t){var e=t.value,n=t.onChangeFilter;return r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"filter",value:e,onChange:function(t){return n(t.target)},placeholder:"Search contact..."}))}function S(t){var e=t.contacts,n=t.onRemoveContact;return r.a.createElement("ul",{style:{padding:0}},e.length>0?e.map((function(t){return r.a.createElement("li",{key:t.id},t.name,": ",t.number,r.a.createElement("button",{id:t.id,className:C.a.ContactFormButton,type:"submit",onClick:n},"Remove Contact"))})):r.a.createElement("p",{style:{margin:0,fontSize:14,color:"grey"}},"No match..."))}var y=function(t){Object(s.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.addContact=function(e){t.setState((function(t){var n=t.contacts.map((function(t){return t.name})),a=e.name;return{contacts:n.includes(a)?t.contacts:[].concat(Object(u.a)(t.contacts),[e])}}))},t.removeContact=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==e.target.id}))})},t.changeFilter=function(e){var n=e.name,a=e.value;t.setState(Object(l.a)({},n,a))},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.length>0&&n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())||t.number.toLowerCase().includes(a.toLowerCase())}))},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return r.a.createElement("div",null,r.a.createElement(v,{title:"Phonebook"},r.a.createElement(g,{onSubmit:this.addContact})),r.a.createElement(v,{title:"Contacts"},r.a.createElement(E,{onChangeFilter:this.changeFilter,value:t}),r.a.createElement(S,{contacts:e,onRemoveContact:this.removeContact})))}}]),n}(a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))},4:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__1zvAA",ContactFormButton:"ContactForm_ContactFormButton__LJvL1"}},8:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.fe7261ac.chunk.js.map