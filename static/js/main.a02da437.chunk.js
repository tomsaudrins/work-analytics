(this["webpackJsonpwork-data-visualization"]=this["webpackJsonpwork-data-visualization"]||[]).push([[0],{177:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(63),r=a.n(s),i=a(2),o=a(4),l=a(5);l.d.font.family="Poppins",l.d.font.size=16,l.d.color="#fff",l.d.scales.radialLinear.ticks.display=!1,l.d.plugins.title.font.weight="200",l.d.plugins.title.font.size="18px";a(177);var d=a(66),j=a.n(d),u=a(0),b=function(e){var t=e.distance,a=e.setDistance,n=e.currency,c=e.setCurrency,s=e.importedData,r=e.setImportedData,i=e.salary,o=e.setSalary,l=function(e){if(e.preventDefault(),!t||!n||!i)return alert("Please fill in all the fields");j.a.csv("data.csv",(function(e){r(e.reverse())}))};return Object(u.jsxs)("form",{children:[Object(u.jsx)("h2",{className:"header-info",children:"Data for calculations"}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"distance",children:"Distance KM"}),Object(u.jsx)("input",{type:"number",className:"form-control",id:"distance",value:t,onChange:function(e){return a(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"distance",children:"Hourly salary"}),Object(u.jsx)("input",{type:"number",className:"form-control",id:"salary",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"currency",children:"Currency"}),Object(u.jsxs)("select",{className:"form-control",id:"currency",value:n,onChange:function(e){return c(e.target.value)},children:[Object(u.jsx)("option",{}),Object(u.jsx)("option",{children:"DKK"}),Object(u.jsx)("option",{children:"EUR"}),Object(u.jsx)("option",{children:"GBP"}),Object(u.jsx)("option",{children:"USD"})]})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("button",{onClick:function(e){return l(e)},type:"submit",children:s?"File loaded!":"Upload a file"}),Object(u.jsx)("button",{onClick:function(e){return l(e)},type:"submit",children:"Use sample data"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{className:"header",children:"Spreadsheet information"}),Object(u.jsxs)("p",{className:"info",children:["The file has to be a CSV file that contains the following columns:",Object(u.jsxs)("span",{className:"info-columns",children:[" ","Date, Start Time, End Time, Hours, Location."]})]}),Object(u.jsxs)("p",{className:"info",children:["Date format: ",Object(u.jsx)("span",{className:"info-columns",children:" DD/MM/YYYY"}),Object(u.jsx)("br",{}),"Start time, End time, and Hours:"," ",Object(u.jsx)("span",{className:"info-columns",children:" HH.MM"})]})]})]})},m=function(e){var t={Office:0,Home:0};return e.forEach((function(e){return t[e.Location]++})),t},O=(a(179),a(62),function(e){var t=e.name,a=e.body;return Object(u.jsxs)("div",{className:"card-component",children:[Object(u.jsx)("h3",{className:"name",children:t}),Object(u.jsx)("h4",{className:"body",children:a})]})}),f=function(e){var t=0;return e.forEach((function(e){var a=e.Hours.split("."),n=Object(o.a)(a,2),c=n[0],s=n[1];t+=+c+ +s/60})),t},h=function(e){var t=e.data,a=e.currency,n=e.distance,c=e.salary,s=f(t),r="".concat(a," ")+Math.round(f(t)*c*100)/100,i="KM "+Math.round(m(t).Office*parseInt(n)*2*100)/100,o="".concat(a," ")+Math.round(f(t)*c*.125*100)/100;return Object(u.jsxs)("div",{className:"info-cards",children:[Object(u.jsx)(O,{name:"Total Hours",body:s}),Object(u.jsx)(O,{name:"Salary",body:r}),Object(u.jsx)(O,{name:"Holiday Pay",body:o}),Object(u.jsx)(O,{name:"Distance Cycled",body:i})]})},p=a(16),y=function(e){return new Date(Date.parse(e.Date.split("/").reverse().join("-")+"T10:00:00")).getDay()-1},x=function(e){var t=0,a=e.Hours.split("."),n=Object(o.a)(a,2);return t+=+n[0]+ +n[1]/60},v=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturtday","Sunday"],g=(a(180),function(e){var t=e.Icon,a=e.day;return Object(u.jsxs)("div",{className:"day",children:[Object(u.jsxs)("h3",{style:{fontWeight:100},children:[Object(u.jsx)(t,{}),Object(u.jsx)("span",{style:{marginLeft:"5px"},children:v[y(a)]}),Object(u.jsxs)("span",{className:"hours",children:[x(a)," hr"]})]}),Object(u.jsxs)("p",{children:[a["Start Time"]," - ",a["End Time"]]})]},a.Date)}),D=(a(181),function(e){var t=e.data.slice(0,5);return Object(u.jsxs)("div",{className:"lastFiveDays",children:[Object(u.jsx)("h3",{children:"Last Five Work Days"}),t.map((function(e){var t={key:e.Date,day:e,Icon:"Home"===e.Location?p.c:p.a};return Object(u.jsx)(g,Object(i.a)({},t))}))]})}),N=(a(40),function(e){var t=e.data,a=m(t),n={labels:Object.keys(a),datasets:[{label:"Location informaton",data:Object.values(a),backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)"],borderWidth:0}]};return Object(u.jsx)("div",{className:"locationInfo info-grid-one",children:Object(u.jsx)(l.b,{data:n,options:{maintainAspectRatio:!1,indexAxis:"y",responsive:!0,plugins:{legend:{position:"bottom",labels:{font:{family:"Poppins",weight:"100"}}},title:{display:!0,text:"Work location"}}}})})}),k=function(e){var t=e.data,a={Monday:0,Tuesday:0,Wednesday:0,Thursday:0,Friday:0};t.forEach((function(e){var t=y(e);a[Object.keys(a)[t]]++}));var n={labels:Object.keys(a),datasets:[{data:Object.values(a),label:"Days worked",backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)"]}]};return Object(u.jsx)("div",{className:"weekInfo info-grid-two",children:Object(u.jsx)(l.a,{data:n,options:{maintainAspectRatio:!1,indexAxis:"y",responsive:!0,plugins:{legend:{position:"bottom",labels:{font:{family:"Poppins"}}},title:{display:!0,text:"Day distribution",fontFamily:"Poppins",fontStyle:"italic"}}}})})},w=function(e){var t=e.data,a={Monday:0,Tuesday:0,Wednesday:0,Thursday:0,Friday:0};t.forEach((function(e){var t=y(e);a[Object.keys(a)[t]]+=x(e)}));var n={labels:Object.keys(a),datasets:[{data:Object.values(a),backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)"],borderWidth:0}]};return Object(u.jsx)("div",{className:"dayHoursInfo info-grid-two",children:Object(u.jsx)(l.c,{data:n,options:{scales:{yAxes:{display:!1,ticks:{color:"red",display:!1,backdropColor:"#27293d",z:1e3}}},maintainAspectRatio:!1,indexAxis:"y",responsive:!0,plugins:{legend:{position:"bottom",labels:{font:{family:"Poppins",weight:"100",color:"red"}}},title:{display:!0,text:"Hour distribution"}}}})})},S=(a(182),function(e){return Object(u.jsxs)("div",{className:"graphs",children:[Object(u.jsx)(h,Object(i.a)({},e)),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(N,{data:e.data}),Object(u.jsx)(w,{data:e.data}),Object(u.jsx)(k,{data:e.data})]}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(D,{data:e.data})})]})}),C=(a(183),function(e){var t=e.text,a=e.active,n=e.setImportedData,c=e.importedData,s=e.setData,r=e.timeframe,i=e.setActive,o=function(e){i(e.target.innerText),r>0?s(c.slice(0,r)):(s(null),n(null))},l=a===t?"active":"";return Object(u.jsx)("p",{className:l,onClick:function(e){return o(e)},children:t})}),E=function(e){var t=Object(n.useState)("Week"),a=Object(o.a)(t,2),c=a[0],s=a[1],r=Object(i.a)(Object(i.a)({},e),{},{active:c,setActive:s});return Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsx)("p",{className:"logo",children:Object(u.jsx)(p.b,{})}),Object(u.jsx)(C,Object(i.a)(Object(i.a)({},r),{},{timeframe:"7",text:"Week"})),Object(u.jsx)(C,Object(i.a)(Object(i.a)({},r),{},{timeframe:"30",text:"Month"})),Object(u.jsx)(C,Object(i.a)(Object(i.a)({},r),{},{timeframe:"365",text:"Year"})),Object(u.jsx)(C,Object(i.a)(Object(i.a)({},r),{},{timeframe:"0",text:"Logout"}))]})},M=function(e){var t=e.data,a=e.setData,n=e.importedData,c=e.currency,s=e.distance,r=e.salary,i=e.setImportedData;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(E,{onClick:a,setImportedData:i,importedData:n,setData:a}),Object(u.jsx)("div",{className:"content",children:t?Object(u.jsx)(S,{data:t,currency:c,distance:s,salary:r}):""})]})},T=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(o.a)(s,2),l=r[0],d=r[1],j=Object(n.useState)(""),m=Object(o.a)(j,2),O=m[0],f=m[1],h=Object(n.useState)(""),p=Object(o.a)(h,2),y=p[0],x=p[1],v=Object(n.useState)(""),g=Object(o.a)(v,2),D=g[0],N=g[1];function k(){if(document.querySelector(".content")&&window.innerWidth>700){var e=window.getComputedStyle(document.querySelector(".content"),null);document.querySelector(".sidebar").style.height=e.getPropertyValue("height")}}Object(n.useEffect)((function(){d(a?a.slice(0,7):null)}),[a]),Object(n.useLayoutEffect)((function(){return document.querySelector(".App").clientWidth>700?(window.addEventListener("resize",k),k()):window.removeEventListener("resize",k),function(){return window.removeEventListener("resize",k)}}),[l]);var w={data:l,setData:d,importedData:a,currency:O,distance:y,salary:D,setSalary:N,setImportedData:c},S={distance:y,setDistance:x,currency:O,importedData:a,setImportedData:c,setCurrency:f,salary:D,setSalary:N};return console.log(a),Object(u.jsx)("div",{className:"App",children:l&&y&&D&&O?Object(u.jsx)(M,Object(i.a)({},w)):Object(u.jsx)(b,Object(i.a)({},S))})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root"))},40:function(e,t,a){},62:function(e,t,a){}},[[184,1,2]]]);
//# sourceMappingURL=main.a02da437.chunk.js.map