import './polyfills.server.mjs';
import{c}from"./chunk-7A7ZVYHT.mjs";import{Ia as a,Ja as s,Ka as d,Oa as m,S as p,ba as n,h as r,pa as i}from"./chunk-3DQJWTAZ.mjs";var l=(()=>{let o=class o{constructor(){this.title="Expense_Tracker"}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=r({type:o,selectors:[["app-root"]],standalone:!0,features:[n],decls:1,vars:0,consts:[[2,"background-color","blue"]],template:function(e,C){e&1&&p(0,"router-outlet",0)},dependencies:[d],styles:[".table-wrapper[_ngcontent-%COMP%]{height:374px;overflow-y:auto}.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{width:0}table[_ngcontent-%COMP%]{border-collapse:separate;border-spacing:.1rem}"]});let t=o;return t})();var f=[{path:"dashboard",loadChildren:()=>import("./chunk-D5DUPT45.mjs").then(t=>t.DashboardModule)},{path:"",redirectTo:"/dashboard",pathMatch:"full"},{path:"**",redirectTo:"/dashboard"}];var u={providers:[m(f),s()]};var b={providers:[c()]},h=i(u,b);var v=()=>a(l,h),H=v;export{H as a};