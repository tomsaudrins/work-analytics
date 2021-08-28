(this["webpackJsonpwork-data-visualization"]=this["webpackJsonpwork-data-visualization"]||[]).push([[0],{177:function(t,e,a){},179:function(t,e,a){},180:function(t,e,a){},181:function(t,e,a){},182:function(t,e,a){},183:function(t,e,a){},184:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(63),r=a.n(c),i=a(2),o=a(4),d=a(64),l=a.n(d),b=a(5);b.d.font.family="Poppins",b.d.font.size=16,b.d.color="#fff",b.d.scales.radialLinear.ticks.display=!1,b.d.plugins.title.font.weight="200",b.d.plugins.title.font.size="18px";a(177);var j=a(0),u=function(t){var e=t.title,a=t.text,n=t.onClick;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("h2",{className:"card-header",children:e}),Object(j.jsx)("button",{className:"select-button",onClick:n,children:a})]})},O=function(t){var e={Office:0,Home:0};return t.forEach((function(t){return e[t.Location]++})),e},f=(a(179),a(62),function(t){var e=t.name,a=t.body;return Object(j.jsxs)("div",{className:"card-component",children:[Object(j.jsx)("h3",{className:"name",children:e}),Object(j.jsx)("h4",{className:"body",children:a})]})}),x=function(t){var e=0;return t.forEach((function(t){var a=t.Hours.split(":"),n=Object(o.a)(a,2),s=n[0],c=n[1];e+=+s+ +c/60})),e},m=function(t){var e=t.data,a=x(e),n="DKK "+Math.round(145*x(e)*100)/100,s="KM "+Math.round(12.2*O(e).Office*100)/100,c="DKK "+Math.round(145*x(e)*.125*100)/100;return Object(j.jsxs)("div",{className:"info-cards",children:[Object(j.jsx)(f,{name:"Total Hours",body:a}),Object(j.jsx)(f,{name:"Salary",body:n}),Object(j.jsx)(f,{name:"Holiday Pay",body:c}),Object(j.jsx)(f,{name:"Distance Cycled",body:s})]})},p=a(16),y=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturtday","Sunday"],v=function(t){return y[new Date(t.Date.split("/").reverse()).getDay()-1]},h=function(t){var e=0,a=t.Hours.split(":"),n=Object(o.a)(a,2);return e+=+n[0]+ +n[1]/60},g=(a(180),function(t){var e=t.Icon,a=t.day;return Object(j.jsxs)("div",{className:"day",children:[Object(j.jsxs)("h3",{style:{fontWeight:100},children:[Object(j.jsx)(e,{}),Object(j.jsx)("span",{style:{marginLeft:"5px"},children:v(a)}),Object(j.jsxs)("span",{className:"hours",children:[h(a)," hr"]})]}),Object(j.jsxs)("p",{children:[a["Start time"]," - ",a["End Time"]]})]},a.Date)}),D=(a(181),function(t){var e=t.data.slice(0,5);return Object(j.jsxs)("div",{className:"lastFiveDays",children:[Object(j.jsx)("h3",{children:"Last Five Work Days"}),e.map((function(t){return Object(j.jsx)(g,{day:t,Icon:"Home"===t.Location?p.c:p.a},t.Date)}))]})}),k=(a(40),function(t){var e=t.data,a=O(e),n={labels:Object.keys(a),datasets:[{label:"Location informaton",data:Object.values(a),backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:0}]};return Object(j.jsx)("div",{className:"locationInfo info-grid-one",children:Object(j.jsx)(b.b,{data:n,options:{maintainAspectRatio:!1,indexAxis:"y",responsive:!0,plugins:{legend:{position:"bottom",labels:{font:{family:"Poppins",weight:"100"}}},title:{display:!0,text:"Work location"}}}})})}),N=function(t){var e=t.data,a={Monday:0,Tuesday:0,Wednesday:0,Thursday:0,Friday:0};e.forEach((function(t){var e=new Date(t.Date.split("/").reverse()).getDay();a[Object.keys(a)[e-1]]++}));var n={labels:Object.keys(a),datasets:[{data:Object.values(a),label:"Days worked",backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)"]}]};return Object(j.jsx)("div",{className:"weekInfo info-grid-two",children:Object(j.jsx)(b.a,{data:n,options:{maintainAspectRatio:!1,indexAxis:"y",responsive:!0,plugins:{legend:{position:"bottom",labels:{font:{family:"Poppins"}}},title:{display:!0,text:"Day distribution",fontFamily:"Poppins",fontStyle:"italic"}}}})})},w=function(t){var e=t.data,a={Monday:0,Tuesday:0,Wednesday:0,Thursday:0,Friday:0};e.forEach((function(t){var e=new Date(t.Date.split("/").reverse()).getDay();a[Object.keys(a)[e-1]]+=function(t){var e=t.Hours.split(":"),a=Object(o.a)(e,2);return+a[0]+ +a[1]/60}(t)}));var n={labels:Object.keys(a),datasets:[{data:Object.values(a),backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)"],borderWidth:0}]};return Object(j.jsx)("div",{className:"dayHoursInfo info-grid-two",children:Object(j.jsx)(b.c,{data:n,options:{scales:{yAxes:{display:!1,ticks:{color:"red",display:!1,backdropColor:"#27293d",z:1e3}}},maintainAspectRatio:!1,indexAxis:"y",responsive:!0,plugins:{legend:{position:"bottom",labels:{font:{family:"Poppins",weight:"100",color:"red"}}},title:{display:!0,text:"Hour distribution"}}}})})},C=(a(182),function(t){var e=t.data;return Object(j.jsxs)("div",{className:"graphs",children:[Object(j.jsx)(m,{data:e}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(k,{data:e}),Object(j.jsx)(w,{data:e}),Object(j.jsx)(N,{data:e})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)(D,{data:e})})]})}),A=(a(183),function(t){var e=t.text,a=t.active,n=t.importedData,s=t.setData,c=t.timeframe,r=t.setActive,i=a===e?"active":"";return Object(j.jsx)("p",{className:i,onClick:function(t){return function(t){r(t.target.innerText),s(c>0?n.slice(0,c):null)}(t)},children:e})}),W=function(t){var e=t.importedData,a=t.setData,s=Object(n.useState)("Week"),c=Object(o.a)(s,2),r={active:c[0],setData:a,importedData:e,setActive:c[1]};return Object(j.jsxs)("div",{className:"sidebar",children:[Object(j.jsx)("p",{className:"logo",children:Object(j.jsx)(p.b,{})}),Object(j.jsx)(A,Object(i.a)(Object(i.a)({},r),{},{timeframe:"7",text:"Week"})),Object(j.jsx)(A,Object(i.a)(Object(i.a)({},r),{},{timeframe:"30",text:"Month"})),Object(j.jsx)(A,Object(i.a)(Object(i.a)({},r),{},{timeframe:"365",text:"Year"})),Object(j.jsx)(A,Object(i.a)(Object(i.a)({},r),{},{timeframe:"0",text:"Logout"}))]})},H=function(t){var e=t.data,a=t.setData,n=t.importedData;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(W,{onClick:a,importedData:n,setData:a}),Object(j.jsx)("div",{className:"content",children:e?Object(j.jsx)(C,{data:e}):""})]})},M=function(){var t=Object(n.useState)(null),e=Object(o.a)(t,2),a=e[0],s=e[1],c=Object(n.useState)(null),r=Object(o.a)(c,2),d=r[0],b=r[1];Object(n.useEffect)((function(){b(a?a.slice(0,7):null)}),[a]);var O={data:d,setData:b,importedData:a},f={text:"Upload..",onClick:function(){l.a.csv("data.csv",(function(t){s(t.reverse())}))}};return Object(j.jsx)("div",{className:"App",children:d?Object(j.jsx)(H,Object(i.a)({},O)):Object(j.jsx)(u,Object(i.a)({},f))})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root"))},40:function(t,e,a){},62:function(t,e,a){}},[[184,1,2]]]);
//# sourceMappingURL=main.57e7882f.chunk.js.map