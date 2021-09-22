(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),c=a.n(s),o=a(5),l=a.n(o),u=a(7),i=a(1),d=a(2),m=a(4),p=a(3),h=(a(17),a(18),a(10)),f=a(6),v=a.n(f),_=(a(19),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",status:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(h.a)({},n,r))},e.filterByTitle=function(t){return t.title.toLowerCase().includes(e.state.query.toLowerCase())},e.filterByStatus=function(t){switch(e.state.status){case"active":return!t.completed;case"completed":return t.completed;default:return!0}},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.todos,a=e.onUserSelect,n=e.selectedUserId,s=t.filter(this.filterByTitle).filter(this.filterByStatus);return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("form",{className:"TodoList__form"},r.a.createElement("label",{className:"TodoList__label"},r.a.createElement("h3",null,"Find todo by title"),r.a.createElement("input",{className:"TodoList__input",type:"text",name:"query",placeholder:"Enter title here",value:this.state.query,onChange:this.handleChange})),r.a.createElement("label",null,r.a.createElement("h3",null,"Find todo by status"),r.a.createElement("select",{className:"TodoList__input",name:"status",value:this.state.status,onChange:this.handleChange},r.a.createElement("option",{value:"",disabled:!0},"Choose todo status"),r.a.createElement("option",{value:"",style:{color:"#2146ff"}},"All todos"),r.a.createElement("option",{value:"active",style:{color:"#ff3626"}},"Active todos"),r.a.createElement("option",{value:"completed",style:{color:"#459595"}},"Completed todos")))),r.a.createElement("ul",{className:"TodoList__list"},s.map((function(e){var t=e.id,s=e.title,c=e.userId,o=e.completed;return r.a.createElement("li",{key:t,className:v()("TodoList__item",{"TodoList__item--unchecked":!o,"TodoList__item--checked":o})},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:o,readOnly:!0}),r.a.createElement("p",null,s)),r.a.createElement("button",{type:"button",className:v()("TodoList__user-button","button",{"TodoList__user-button--selected":n===c}),onClick:function(){a(c)}},"User\xa0 #",c))})))))}}]),a}(r.a.Component));_.defaultProps={todos:[]};a(20);var E=function(e,t){return fetch("".concat("https://mate.academy/students-api").concat(e),t).then((function(e){if(!e.ok)throw"".concat(e.status);return e.json()}))},y=function(e){return E("/users/".concat(e))},b=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e.loadUser=Object(u.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e.props.userId);case 2:a=t.sent,e.setState({user:a});case 4:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadUser()}},{key:"render",value:function(){var e=this.props,t=e.userId,a=e.clearUser,n=this.state.user;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",t)),n?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"CurrentUser__name"},n.name),r.a.createElement("p",{className:"CurrentUser__email"},n.email),r.a.createElement("p",{className:"CurrentUser__phone"},n.phone),r.a.createElement("button",{type:"button",className:v()("button","CurrentUser__clear"),onClick:a},"Clear")):r.a.createElement("p",null,"Loading..."))}}]),a}(r.a.PureComponent),U=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.selectUser=function(t){t!==e.state.selectedUserId&&e.setState({selectedUserId:t})},e.clearForm=function(){e.setState({selectedUserId:0})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("/todos");case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todos,a=e.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(_,{todos:t,onUserSelect:this.selectUser,selectedUserId:a})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},a?r.a.createElement(b,{userId:a,clearUser:this.clearForm}):"No user selected")))}}]),a}(r.a.Component);c.a.render(r.a.createElement(U,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.8e642b01.chunk.js.map