(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(56)},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(22),o=n.n(l),r=n(8),u=n(9),s=n(12),i=n(10),m=n(11),d=n(60),b=n(58),h=n(59),f=n(7),p=n.n(f),E=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).getFromServer=function(){p.a.get("http://localhost:5000").then(function(e){console.log({response:e})}).catch(function(e){console.log({error:e})})},n.putToServer=function(e,t){e.preventDefault(),n.setState({html:t}),p.a.get("http://localhost:5000/update/").then(function(e){console.log({response:e})}).catch(function(e){console.log({error:e})})},n.state={html:""},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("textarea",null),c.a.createElement("button",{className:"btn btn-lg btn-primary"},"Add"))}}]),t}(c.a.Component),g=n(15),j=n(24),O=n(6),v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).componentDidMount=function(){setInterval(n.fetchData,1e3)},n.fetchData=function(){p.a.get("http://localhost:5000/dashboard/").then(function(e){console.log({response:e}),n.setState({data:e})}).catch(function(e){console.log({error:e})})},n.renderTable=function(){var e=Object(j.a)({},n.state.data);console.log({data:e});var t=Object(g.a)(e.ip),a=Object(g.a)(e.name);return console.log({ips:t}),console.log({names:a}),c.a.createElement(c.a.Fragment,null,t.map(function(e,t){return c.a.createElement("tr",null,c.a.createElement("td",null,a[t]),c.a.createElement("td",null,e),c.a.createElement("td",null,"statuss"),c.a.createElement("td",null,c.a.createElement("button",{className:"btn btn-md btn-danger",onClick:function(e){return n.killNode(e,"".concat(a[t]))}},"Kill Instance")))}))},n.killNode=function(e,t){e.preventDefault(),console.log("delete",t),p.a.get("http://localhost:5000/dashboard/delete/".concat(t)).then(function(e){console.log({response:e})}).catch(function(e){console.log({error:e})})},n.fetchData=function(){p.a.get("http://35.237.161.200:5000/dashboard/").then(function(e){console.log(e)}).catch(function(e){console.log(e)})},n.renderTable=n.renderTable.bind(Object(O.a)(Object(O.a)(n))),n.fetchData=n.fetchData.bind(Object(O.a)(Object(O.a)(n))),n.state={active:!0,data:{ip:["10.56.0.27","10.56.1.19","10.56.0.26","10.56.1.10"],name:["app-orange-53dc4be6f62dd408be35406f2486247c-2rfqx","app-orange-53dc4be6f62dd408be35406f2486247c-b7whc","app-orange-53dc4be6f62dd408be35406f2486247c-z5r48","database-cfwp8"]}},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.fetchData)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"IP"),c.a.createElement("th",null,"Status"),c.a.createElement("th",null,"Action"))),c.a.createElement("tbody",null,this.state.active&&this.renderTable())))}}]),t}(c.a.Component),D=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,"Dashboard"),c.a.createElement(d.a,{basename:""},c.a.createElement("div",null,c.a.createElement(b.a,{to:"/"},c.a.createElement("h2",null,"Pods")),c.a.createElement(b.a,{to:"/CI_CD"},c.a.createElement("h2",null,"CI-CD")),c.a.createElement(h.a,{exact:!0,path:"/",component:v}),c.a.createElement(h.a,{exact:!0,path:"/CI_CD",component:E}))))}}]),t}(c.a.Component);n(52),n(54);var C=document.getElementById("root");o.a.render(c.a.createElement(function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"App"},c.a.createElement(D,null)))},null),C)}},[[25,2,1]]]);
//# sourceMappingURL=main.f64a7e99.chunk.js.map