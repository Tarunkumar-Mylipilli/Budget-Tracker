import{A as C,B as E,F as M,G as me,I as ae,J as R,K as g,L as D,M as P,N as G,O as q,P as J,Q as W,R as H,S as $,T as U,U as X,V as B,W as le,a as z,b as Y,c as S,d as K,e as I,f as w,g as de,h as Q,i as s,j as f,k as b,l as u,m as t,n as e,o as d,p as N,q as h,r as k,s as n,t as v,u as c,v as V,w as L,x as j,y as F,z as O}from"./chunk-LC7IRHWW.js";var be=()=>["/dashboard/all-transactions"],ve=()=>["/dashboard/todo-transactions"],ye=()=>["/dashboard/add-budget"],Se=()=>["/dashboard/expense"],Fe=()=>["/dashboard/income"],Ee=()=>["/dashboard/login"],_=(()=>{let o=class o{constructor(i){this.router=i}addIncome(){debugger;this.router.navigate(["/dashboard/income"])}addExpense(){this.router.navigate(["/dashboard/expense"])}addBudget(){this.router.navigate(["./dashboard/add-budget"])}dashboard(){this.router.navigate(["./dashboard/all-transactions"])}};o.\u0275fac=function(r){return new(r||o)(f(M))},o.\u0275cmp=S({type:o,selectors:[["app-side-nav"]],standalone:!0,features:[F],decls:29,vars:12,consts:[[1,"d-flex","flex-column","flex-shrink-0","p-3",2,"width","160px","background-color","#F5F5F5"],["href","/",1,"d-flex","align-items-center","mb-3","mb-md-0","me-md-auto","link-dark","text-decoration-none"],[1,"fs-4"],[1,"nav","nav-pills","flex-column","mb-auto",2,"line-height","38px"],[1,"nav-item"],["href","#","aria-current","page",1,"nav-link","active",3,"routerLink"],["href","#",1,"nav-link","link-dark",3,"routerLink"],[1,"dropdown"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"a",1)(2,"span",2),n(3,"Welcome Back , Tarun"),e()(),d(4,"hr"),t(5,"ul",3)(6,"li",4)(7,"a",5)(8,"b"),n(9,"Dashboard"),e()()(),t(10,"li")(11,"a",6)(12,"b"),n(13,"Todo Transaction"),e()()(),t(14,"li")(15,"a",6),n(16," Add-Budget "),e()(),t(17,"li")(18,"a",6),n(19," Expense "),e()(),t(20,"li")(21,"a",6),n(22," Income "),e()()(),d(23,"hr"),t(24,"div",7)(25,"ul")(26,"li")(27,"a",6),n(28," Logout"),e()()()()()),r&2&&(s(7),u("routerLink",O(6,be)),s(4),u("routerLink",O(7,ve)),s(4),u("routerLink",O(8,ye)),s(3),u("routerLink",O(9,Se)),s(3),u("routerLink",O(10,Fe)),s(6),u("routerLink",O(11,Ee)))},dependencies:[me],styles:["li[_ngcontent-%COMP%]{list-style-type:none}"]});let l=o;return l})();var A=(()=>{let o=class o{constructor(){this.incomes=[],this.expenses=[],this.budgets=[],this.expenses=[{id:1,month:"January",type:"Rent",amount:1e3,text:"paying this month rent"},{id:2,month:"February",type:"Groceries",amount:500,text:"payy for the kitchen utilities"},{id:1,month:"March",type:"Rent",amount:1e3,text:"pay this month rent"},{id:2,month:"April",type:"Groceries",amount:500,text:"payy for the kitchen utilities"},{id:1,month:"May",type:"Rent",amount:1e3,text:"pay this month rent"},{id:2,month:"June",type:"Groceries",amount:500,text:"payy for the kitchen utilities"},{id:1,month:"July",type:"Rent",amount:1e3,text:"pay this month rent"},{id:2,month:"August",type:"Groceries",amount:500,text:"payy for the kitchen utilities"},{id:1,month:"Sepetember",type:"Rent",amount:1e3,text:"pay this month rent"},{id:2,month:"October",type:"Groceries",amount:500,text:"payy for the kitchen utilities"},{id:1,month:"November",type:"Rent",amount:1e3,text:"pay this month rent"},{id:2,month:"December",type:"Groceries",amount:500,text:"payy for the kitchen utilities"}],this.incomes=[{id:1,month:"January",source:"Salary",amount:3e4,investments:"401(k)"},{id:2,month:"February",source:"Salary",amount:3e4,investments:"stocks"},{id:1,month:"March",source:"Salary",amount:3e4,investments:"401(k)"},{id:2,month:"April",source:"Rental Income",amount:7e3,investments:"stocks"},{id:1,month:"May",source:"Salary",amount:3e4,investments:"401(k)"},{id:2,month:"June",source:"Rental Income",amount:7e3,investments:"stocks"},{id:1,month:"July",source:"Salary",amount:3e4,investments:"401(k)"},{id:2,month:"August",source:"Rental Income",amount:7e3,investments:"stocks"},{id:1,month:"Sepetember",source:"Salary",amount:3e4,investments:"401(k)"},{id:2,month:"October",source:"Rental Income",amount:7e3,investments:"stocks"},{id:1,month:"November",source:"Salary",amount:3e4,investments:"401(k)"},{id:2,month:"December",source:"Rental Income",amount:7e3,investments:"stocks"}],this.budgets=[{id:1,month:"January",name:"Monthly Rent",amount:1e5},{id:2,month:"February",name:"Groceries",amount:5e4},{id:3,month:"March",name:"Utilities",amount:300}]}getAllIncomes(){return this.incomes}getAllExpenses(){return this.expenses}getAllBudgets(){return this.budgets}saveIncome(i){this.incomes.push(i)}saveExpense(i){this.expenses.push(i)}saveBudget(i){this.budgets.push(i)}getIncomesByMonth(i){return this.incomes.filter(r=>r.month===i)}getExpensesByMonth(i){return this.expenses.filter(r=>r.month===i)}getBudgetsByMonth(i){return this.budgets.filter(r=>r.month===i)}getMonths(){return["January","February","March","April","May","June","July","August","September","October","November","December"]}deleteIncome(i){this.incomes.splice(i,1)}deleteExpense(i){this.expenses.splice(i,1)}deleteBudget(i){i>=0&&i<this.budgets.length&&this.budgets.splice(i,1)}};o.\u0275fac=function(r){return new(r||o)},o.\u0275prov=de({token:o,factory:o.\u0275fac,providedIn:"root"});let l=o;return l})();function _e(l,o){if(l&1&&(t(0,"div",9)(1,"div",11)(2,"h2",12),n(3),e(),t(4,"table",13)(5,"thead")(6,"tr")(7,"th"),n(8),e(),t(9,"th"),n(10,"Details"),e()()(),t(11,"tbody")(12,"tr")(13,"td")(14,"b"),n(15,"Budget"),e()(),t(16,"td"),n(17),e()(),t(18,"tr")(19,"td")(20,"b"),n(21,"Expense paid"),e()(),t(22,"td"),n(23),e()(),t(24,"tr")(25,"td")(26,"b"),n(27,"Income"),e()(),t(28,"td"),n(29),e()(),t(30,"tr")(31,"td")(32,"b"),n(33,"Expense Due"),e()(),t(34,"td"),n(35),e()(),t(36,"tr")(37,"td")(38,"b"),n(39,"Remaining Balance"),e()(),t(40,"td"),n(41),e()(),t(42,"tr"),d(43,"td"),e()()()()()),l&2){let m=o.$implicit;s(3),v(m.month),s(5),v(m.month),s(9),c("$",m.totalBudget,""),s(6),c("$",m.totalExpense,""),s(6),c("$",m.totalIncome,""),s(6),c("$",m.expenseDue,""),s(6),c("$",m.remainingBalance,"")}}var ce=(()=>{let o=class o{constructor(i,r){this.service=i,this.router=r,this.transactions=[],this.lastThreeMonths=[],this.monthlyTotalIncome=[]}ngOnInit(){this.initializeLastThreeMonths(),this.loadTransactions()}initializeLastThreeMonths(){let i=new Date;for(let r=0;r<3;r++){let a=i.toLocaleString("default",{month:"long"});this.lastThreeMonths.unshift(a),i.setMonth(i.getMonth()-1)}}addIncome(){this.router.navigate(["/dashboard/income"])}addExpense(){this.router.navigate(["/dashboard/expense"])}addBudget(){this.router.navigate(["./dashboard/add-budget"])}loadTransactions(){this.transactions=[],this.monthlyTotalIncome=[];for(let i of this.lastThreeMonths){let r=this.service.getIncomesByMonth(i),a=this.service.getExpensesByMonth(i),p=this.service.getBudgetsByMonth(i);this.transactions.push(...r.map(y=>Y(z({},y),{type:"Income",category:y.source}))),this.transactions.push(...a.map(y=>Y(z({},y),{type:"Expense",category:y.type}))),this.transactions.push(...p.map(y=>Y(z({},y),{type:"Budget",category:y.name})));let x=r.reduce((y,re)=>y+re.amount,0),se=a.reduce((y,re)=>y+re.amount,0),ne=p.length>0?p[0].amount:0,ie=ne-se,oe=x-ne;ie=Math.max(ie,0),oe=Math.max(oe,0),this.monthlyTotalIncome.push({month:i,totalIncome:x,totalExpense:se,totalBudget:ne,remainingBalance:oe,expenseDue:ie})}}};o.\u0275fac=function(r){return new(r||o)(f(A),f(M))},o.\u0275cmp=S({type:o,selectors:[["app-all-transactions"]],standalone:!0,features:[F],decls:23,vars:1,consts:[[1,"content","d-flex",2,"background-color","#fff0f5","height","100vh"],[1,"container"],[1,"row"],[1,"col-2","colo","rounded",2,"width","16%"],[1,"col-10","colo","rounded"],[1,"col-lg-10"],[1,"bi","bi-grid-fill"],[1,"row","row-cols-1","row-cols-md-3","g-4"],["class","col",4,"ngFor","ngForOf"],[1,"col"],[1,"col-lg-2","border"],[1,"card"],[1,"text-center"],[1,"table","table-striped"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-side-nav",3),n(4,"HELLO"),e(),t(5,"div",4)(6,"div",2)(7,"div",5)(8,"div"),d(9,"br"),t(10,"h5"),d(11,"i",6),n(12," \xA0By Month"),e(),d(13,"hr"),t(14,"div",1)(15,"div",7),b(16,_e,44,7,"div",8),e(),t(17,"div",7),d(18,"div",9),e(),d(19,"br"),e()()(),t(20,"div",10)(21,"b"),n(22,"todos"),e()()()()()()()),r&2&&(s(16),u("ngForOf",a.monthlyTotalIncome))},dependencies:[_,B,E,C],styles:[".row[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.colo[_ngcontent-%COMP%]{margin-top:41px;background-color:#f9f6ee;border:2px solid #FFFFFF;box-shadow:0 1px 15px #0000000f}"]});let l=o;return l})();function Ce(l,o){if(l&1&&(t(0,"option",37),n(1),e()),l&2){let m=o.$implicit;u("value",m),s(),c(" ",m," ")}}function Me(l,o){if(l&1){let m=N();t(0,"div",38)(1,"li")(2,"b"),n(3),e()(),t(4,"div",39)(5,"div")(6,"b"),d(7,"i",40),e(),n(8),t(9,"b"),n(10,"|"),e(),n(11," \xA0 "),t(12,"b"),d(13,"i",41),e(),n(14),t(15,"b"),n(16,"|"),e(),n(17," \xA0 "),t(18,"b"),d(19,"i",42),e(),n(20),e(),t(21,"div",39)(22,"button",43),h("click",function(){let a=I(m).index,p=k();return w(p.editIncome(a))}),d(23,"i",44),e(),t(24,"button",43),h("click",function(){let a=I(m).index,p=k();return w(p.deleteIncome(a))}),n(25," X "),e()()()()}if(l&2){let m=o.$implicit;s(3),v(m.source),s(5),c(" ",m.amount," \xA0 "),s(6),c(" ",m.month," \xA0 "),s(6),c(" ",m.investments," \xA0 ")}}var ue=(()=>{let o=class o{constructor(i,r,a){this.fb=i,this.service=r,this.router=a,this.incomes=[],this.selectedMonth="",this.totalIncome=0,this.editMode=!1,this.editIndex=-1,this.incomeForm=this.fb.group({month:["",g.required],source:["",g.required],amount:["",g.required],investments:["",g.required]})}ngOnInit(){this.loadIncomes()}loadIncomes(){this.incomes=this.service.getAllIncomes(),this.calculateTotalIncome()}goBack(){this.router.navigate(["/dashboard/all-transactions"])}calculateTotalIncome(){this.totalIncome=0;for(let i of this.incomes)this.totalIncome+=i.amount}onSubmit(){if(this.incomeForm.valid){let i=this.incomeForm.value;this.editMode?(this.incomes[this.editIndex]=i,this.editMode=!1,this.editIndex=-1):this.service.saveIncome(i),this.loadIncomes(),this.incomeForm.reset()}}onChangeMonth(){this.incomes=this.service.getIncomesByMonth(this.selectedMonth),this.calculateTotalIncome()}saveToLocalStorage(){localStorage.setItem("incomes",JSON.stringify(this.incomes))}editIncome(i){let r=this.incomes[i];this.editMode=!0,this.editIndex=i,this.incomeForm.patchValue({month:r.month,source:r.source,amount:r.amount,investments:r.investments})}deleteIncome(i){confirm("Are you sure you want to delete this income?")&&(this.service.deleteIncome(i),this.loadIncomes())}};o.\u0275fac=function(r){return new(r||o)(f(X),f(A),f(M))},o.\u0275cmp=S({type:o,selectors:[["app-income"]],standalone:!0,features:[F],decls:77,vars:7,consts:[[1,"content","d-flex",2,"background-color","#fff0f5","height","100vh"],[1,"container"],[1,"row"],[1,"col-2","colo","rounded",2,"width","16%"],[1,"col-10","colo","rounded"],[1,"text-center","rounded","d-flex","align-items-center","justify-content-center",2,"height","47px","background-color","#ffffff"],[2,"font-weight","bold"],[1,"col-3",2,"margin-top","38px"],[3,"formGroup","ngSubmit"],[1,"form-Group"],["for","month"],["formControlName","month","id","month",1,"form-control",3,"ngModel","ngModelChange","change"],["value","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["for","investments"],["formControlName","investments","id","investments",1,"form-control"],["value","401(k)"],["value","stocks"],["value","Real Estate"],["value","HSA"],["for","source"],["formControlName","source","id","source",1,"form-control"],["value","Salary"],["value","Freelancing"],["value","Rental Income"],["for","amount"],["type","number","formControlName","amount","id","amount","placeholder","Enter Amount",1,"form-control"],[1,"row","d-flex"],["type","submit",1,"col-4","btn","btn-primary"],[1,"bi","bi-plus-circle-dotted"],[1,"col-2"],[1,"col-5","btn","btn-primary",3,"click"],[1,"bi","bi-arrow-left"],[1,"col-9"],[1,"text-center"],[1,"table-wrapper"],["class","mb-3 rounded","style",`
                    background-color: #ffffff;
                    border: 2px solid #ffffff;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                  `,4,"ngFor","ngForOf"],[3,"value"],[1,"mb-3","rounded",2,"background-color","#ffffff","border","2px solid #ffffff","box-shadow","0px 1px 15px rgba(0, 0, 0, 0.06)"],[1,"d-flex","justify-content-between"],[1,"bi","bi-currency-rupee"],[1,"bi","bi-calendar-event-fill"],[1,"bi","bi-bank"],[1,"btn","btn-sm",3,"click"],[1,"bi","bi-pencil-square"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-side-nav",3),n(4,"HELLO"),e(),t(5,"div",4)(6,"h1"),n(7,"Income"),e(),t(8,"div",5)(9,"b")(10,"span",6),n(11),e(),n(12),e()(),d(13,"br"),t(14,"div",2)(15,"div",7)(16,"form",8),h("ngSubmit",function(){return a.onSubmit()}),t(17,"div",9)(18,"label",10)(19,"b"),n(20,"Month"),e()(),t(21,"select",11),j("ngModelChange",function(x){return L(a.selectedMonth,x)||(a.selectedMonth=x),x}),h("change",function(){return a.onChangeMonth()}),t(22,"option",12),n(23,"Select Month"),e(),b(24,Ce,2,2,"option",13),e()(),d(25,"br")(26,"div",9),t(27,"div",9)(28,"label",14)(29,"b"),n(30,"Investments"),e()(),t(31,"select",15)(32,"option",12),n(33,"Select Investments"),e(),t(34,"option",16),n(35,"401(k)"),e(),t(36,"option",17),n(37,"Stocks"),e(),t(38,"option",18),n(39,"Real Estate"),e(),t(40,"option",19),n(41,"Health-Savings-Account"),e()()(),d(42,"div",9),t(43,"div",9)(44,"label",20)(45,"b"),n(46,"Source of Income"),e()(),t(47,"select",21)(48,"option",12),n(49,"Select Source"),e(),t(50,"option",22),n(51,"Salary"),e(),t(52,"option",23),n(53,"Freelancing"),e(),t(54,"option",24),n(55,"Rental Income"),e()()(),d(56,"div",9),t(57,"div",9)(58,"label",25)(59,"b"),n(60,"Amount:"),e()(),d(61,"input",26),e(),d(62,"br"),t(63,"div",27)(64,"button",28),d(65,"i",29),n(66," Add "),e(),d(67,"div",30),t(68,"button",31),h("click",function(){return a.goBack()}),d(69,"i",32),n(70," Back "),e()()()(),t(71,"div",33)(72,"div")(73,"h2",34),n(74),e(),t(75,"div",35),b(76,Me,26,4,"div",36),e()()()()()()()()),r&2&&(s(11),c("Total expense for ",a.selectedMonth," \xA0: \xA0"),s(),c(" ",a.totalIncome," "),s(4),u("formGroup",a.incomeForm),s(5),V("ngModel",a.selectedMonth),s(3),u("ngForOf",a.service.getMonths()),s(50),c(" List of incomess for ",a.selectedMonth," "),s(2),u("ngForOf",a.incomes))},dependencies:[_,E,C,B,G,$,U,R,q,H,D,P,J,W],styles:[".table-wrapper[_ngcontent-%COMP%]{height:374px;overflow-y:auto}.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{width:0}table[_ngcontent-%COMP%]{border-collapse:separate;border-spacing:.1rem}.row[_ngcontent-%COMP%]{display:flex;justify-content:space-between}button[_ngcontent-%COMP%]{height:37px}.colo[_ngcontent-%COMP%]{margin-top:41px;background-color:#f9f6ee;border:2px solid #FFFFFF;box-shadow:0 1px 15px #0000000f}"]});let l=o;return l})();function Ie(l,o){if(l&1&&(t(0,"option",27),n(1),e()),l&2){let m=o.$implicit;u("value",m),s(),c(" ",m," ")}}function we(l,o){if(l&1){let m=N();t(0,"div",28)(1,"li")(2,"b"),n(3),e()(),t(4,"div",29)(5,"div")(6,"b"),d(7,"i",30),e(),n(8),t(9,"b"),n(10,"|"),e(),n(11," \xA0 "),t(12,"b"),d(13,"i",31),e(),n(14),e(),t(15,"div",29)(16,"button",32),h("click",function(){let a=I(m).index,p=k();return w(p.editBudget(a))}),d(17,"i",33),e(),t(18,"button",32),h("click",function(){let a=I(m).index,p=k();return w(p.deleteBudget(a))}),d(19,"i",34),e()()()()}if(l&2){let m=o.$implicit;s(3),v(m.name),s(5),c(" ",m.amount," \xA0 "),s(6),c(" ",m.month," \xA0 ")}}var he=(()=>{let o=class o{constructor(i,r,a){this.formBuilder=i,this.service=r,this.router=a,this.budgets=[],this.selectedMonth="",this.totalBudget=0,this.editMode=!1,this.editIndex=-1,this.budgetForm=this.formBuilder.group({month:["",g.required],name:["",g.required],amount:["",g.required]})}ngOnInit(){this.loadBudgets()}loadBudgets(){this.budgets=this.service.getAllBudgets(),this.calculateTotalBudget()}calculateTotalBudget(){this.totalBudget=0;for(let i of this.budgets)this.totalBudget+=i.amount}goBack(){this.router.navigate(["/dashboard/all-transactions"])}onSubmit(){if(this.budgetForm.valid){let i=this.budgetForm.value;this.editMode?(this.budgets[this.editIndex]=i,this.editMode=!1,this.editIndex=-1):this.service.saveBudget(i),this.loadBudgets(),this.budgetForm.reset()}}onChangeMonth(){this.budgets=this.service.getBudgetsByMonth(this.selectedMonth),this.calculateTotalBudget()}editBudget(i){let r=this.budgets[i];this.editMode=!0,this.editIndex=i,this.budgetForm.patchValue({month:r.month,name:r.name,amount:r.amount})}deleteBudget(i){confirm("Are you sure you want to delete this budget?")&&(this.service.deleteBudget(i),this.loadBudgets())}};o.\u0275fac=function(r){return new(r||o)(f(X),f(A),f(M))},o.\u0275cmp=S({type:o,selectors:[["app-add-budget"]],standalone:!0,features:[F],decls:50,vars:7,consts:[[1,"content","d-flex",2,"background-color","#FFF0F5","height","100vh"],[1,"container"],[1,"row"],[1,"col-2","colo","rounded",2,"width","16%"],[1,"col-10","colo","rounded"],[1,"text-center","rounded","d-flex","align-items-center","justify-content-center",2,"height","47px","background-color","#ffffff"],[2,"font-weight","bold"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"form-group"],["formControlName","month","id","month",1,"form-control",3,"ngModel","ngModelChange","change"],["value","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["for","name"],["type","text","formControlName","name","id","name","placeholder","Enter Budget Name",1,"form-control"],["for","amount"],["type","number","formControlName","amount","id","amount","placeholder","Enter Amount",1,"form-control"],[1,"row","d-flex"],["type","submit",1,"col-4","btn","btn-primary"],[1,"bi","bi-plus-circle-dotted"],[1,"col-2"],[1,"col-5","btn","btn-primary",3,"click"],[1,"bi","bi-arrow-left"],[1,"col-9"],[1,"text-center"],[1,"table-wrapper"],["class","mb-3 rounded","style",`
                  background-color: #ffffff;
                  border: 2px solid #ffffff;
                  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                `,4,"ngFor","ngForOf"],[3,"value"],[1,"mb-3","rounded",2,"background-color","#ffffff","border","2px solid #ffffff","box-shadow","0px 1px 15px rgba(0, 0, 0, 0.06)"],[1,"d-flex","justify-content-between"],[1,"bi","bi-currency-rupee"],[1,"bi","bi-calendar-event-fill"],[1,"btn","btn-sm",3,"click"],[1,"bi","bi-pencil-square"],[1,"bi","bi-trash"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-side-nav",3),n(4,"HELLO"),e(),t(5,"div",4)(6,"h1"),n(7,"Budget"),e(),t(8,"div",5)(9,"b")(10,"span",6),n(11),e(),n(12),e(),d(13,"br"),e(),d(14,"br"),t(15,"div",2)(16,"div",7),d(17,"br")(18,"br"),t(19,"form",8),h("ngSubmit",function(){return a.onSubmit()}),t(20,"div",9)(21,"select",10),j("ngModelChange",function(x){return L(a.selectedMonth,x)||(a.selectedMonth=x),x}),h("change",function(){return a.onChangeMonth()}),t(22,"option",11),n(23,"Select Month"),e(),b(24,Ie,2,2,"option",12),e()(),d(25,"br"),t(26,"div",9)(27,"label",13),n(28,"Budget Name"),e(),d(29,"input",14),e(),d(30,"br"),t(31,"div",9)(32,"label",15),n(33,"Amount:"),e(),d(34,"input",16),e(),d(35,"br"),t(36,"div",17)(37,"button",18),d(38,"i",19),n(39," Add"),e(),d(40,"div",20),t(41,"button",21),h("click",function(){return a.goBack()}),d(42,"i",22),n(43," Back "),e()()()(),t(44,"div",23)(45,"div")(46,"h2",24),n(47),e(),t(48,"div",25),b(49,we,20,3,"div",26),e()()()()()()()()),r&2&&(s(11),c("Total Budget for ",a.selectedMonth," \xA0: \xA0"),s(),c(" ",a.totalBudget," "),s(7),u("formGroup",a.budgetForm),s(2),V("ngModel",a.selectedMonth),s(3),u("ngForOf",a.service.getMonths()),s(23),c("List of Budget for ",a.selectedMonth,""),s(2),u("ngForOf",a.budgets))},dependencies:[_,B,G,$,U,R,q,H,D,P,J,W,E,C],styles:[".table-wrapper[_ngcontent-%COMP%]{height:374px;overflow-y:auto}.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{width:0}table[_ngcontent-%COMP%]{border-collapse:separate;border-spacing:.1rem}.row[_ngcontent-%COMP%]{display:flex;justify-content:space-between}button[_ngcontent-%COMP%]{height:37px}.colo[_ngcontent-%COMP%]{margin-top:41px;background-color:#f9f6ee;border:2px solid #FFFFFF;box-shadow:0 1px 15px #0000000f}"]});let l=o;return l})();function ke(l,o){if(l&1&&(t(0,"div",8)(1,"div",9)(2,"div",10)(3,"h4",11),n(4),e()(),t(5,"div",12)(6,"p",13),n(7),e(),t(8,"button",15),d(9,"i",16),e(),t(10,"button",15),n(11,"X"),e()()()()),l&2){let m=o.$implicit;s(4),v(m.title),s(3),v(m.description)}}var fe=(()=>{let o=class o{constructor(){this.todoItems=[{title:"Task 1",description:"Description for Task 1"},{title:"Task 2",description:"Description for Task 2"},{title:"Task 3",description:"Description for Task 3"}]}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=S({type:o,selectors:[["app-todo-transactions"]],standalone:!0,features:[F],decls:23,vars:1,consts:[[1,"content","d-flex",2,"background-color","#FFF0F5","height","100vh"],[1,"container"],[1,"row"],[1,"col-2","colo","rounded",2,"width","16%"],[1,"col-10","colo","rounded"],[1,"text-center","rounded","d-flex","align-items-center","justify-content-center",2,"height","50px","background-color","#FFFFFF"],[1,"row","row-cols-1","row-cols-md-3","mb-3","text-center",2,"margin-top","21px"],["class","col",4,"ngFor","ngForOf"],[1,"col"],[1,"card","mb-4","rounded-3","shadow-sm"],[1,"card-header","py-3"],[1,"my-0","fw-normal"],[1,"card-body"],[1,"card-text"],["type","button",1,"w-100","btn","btn-lg","btn-success"],[1,"btn","btn-sm"],[1,"bi","bi-pencil-square"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-side-nav",3),n(4,"HELLO"),e(),t(5,"div",4)(6,"h4"),n(7,"Todo`s"),e(),t(8,"div",5)(9,"b"),n(10,"Your`s Todo List"),e()(),t(11,"div",6),b(12,ke,12,2,"div",7),t(13,"div",8)(14,"div",9)(15,"div",10)(16,"h4",11),n(17,"Add"),e()(),t(18,"div",12)(19,"p",13),n(20,"Click here to add a new item."),e(),t(21,"button",14),n(22,"Add New"),e()()()()()()()()()),r&2&&(s(12),u("ngForOf",a.todoItems))},dependencies:[_,E,C],styles:[".table-wrapper[_ngcontent-%COMP%]{height:514px;overflow-y:auto}table[_ngcontent-%COMP%]{border-collapse:separate;border-spacing:.1rem}.row[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.colo[_ngcontent-%COMP%]{margin-top:41px;background-color:#f9f6ee;border:2px solid #FFFFFF;box-shadow:0 1px 15px #0000000f}"]});let l=o;return l})();function Be(l,o){if(l&1&&(t(0,"option",32),n(1),e()),l&2){let m=o.$implicit;u("value",m),s(),v(m)}}function Te(l,o){if(l&1){let m=N();t(0,"div",33)(1,"li")(2,"b"),n(3),e()(),t(4,"div",34)(5,"div")(6,"b"),d(7,"i",35),e(),n(8),t(9,"b"),n(10,"|"),e(),n(11," \xA0 "),t(12,"b"),d(13,"i",36),e(),n(14),t(15,"b"),n(16,"|"),e(),n(17," \xA0 "),t(18,"b"),d(19,"i",37),e(),n(20),e(),t(21,"div",34)(22,"button",38),h("click",function(){let a=I(m).index,p=k();return w(p.editExpense(a))}),d(23,"i",39),e(),t(24,"button",38),h("click",function(){let a=I(m).index,p=k();return w(p.deleteExpense(a))}),n(25,"X"),e()()()()}if(l&2){let m=o.$implicit;s(3),v(m.type),s(5),c(" ",m.amount," \xA0 "),s(6),c(" ",m.month," \xA0 "),s(6),c(" ",m.text," \xA0 ")}}var xe=(()=>{let o=class o{constructor(i,r,a){this.fb=i,this.service=r,this.router=a,this.expenses=[],this.selectedMonth="",this.totalExpense=0,this.editMode=!1,this.editIndex=-1,this.expenseForm=this.fb.group({month:["",g.required],type:["",g.required],amount:["",g.required],text:["",g.required]})}ngOnInit(){this.loadExpenses()}loadExpenses(){this.expenses=this.service.getAllExpenses(),this.calculateTotalExpense()}goBack(){this.router.navigate(["/dashboard/all-transactions"])}calculateTotalExpense(){this.totalExpense=0;for(let i of this.expenses)this.totalExpense+=i.amount}onSubmit(){if(this.expenseForm.valid){let i=this.expenseForm.value;this.editMode?(this.expenses[this.editIndex]=i,this.editMode=!1,this.editIndex=-1):this.service.saveExpense(i),this.loadExpenses(),this.expenseForm.reset()}}onChangeMonth(){this.expenses=this.service.getExpensesByMonth(this.selectedMonth),this.calculateTotalExpense()}editExpense(i){let r=this.expenses[i];this.editMode=!0,this.editIndex=i,this.expenseForm.patchValue({month:r.month,type:r.type,amount:r.amount,text:r.text})}deleteExpense(i){confirm("Are you sure you want to delete this expense?")&&(this.service.deleteExpense(i),this.loadExpenses())}};o.\u0275fac=function(r){return new(r||o)(f(X),f(A),f(M))},o.\u0275cmp=S({type:o,selectors:[["app-expense"]],standalone:!0,features:[F],decls:62,vars:7,consts:[[1,"content","d-flex",2,"background-color","#FFF0F5","height","100vh"],[1,"container"],[1,"row"],[1,"col-2","colo","rounded",2,"width","16%"],[1,"col-10","colo","rounded"],[1,"text-center","vh-50","rounded","d-flex","align-items-center","justify-content-center",2,"height","47px","background-color","#FFFFFF"],[2,"font-weight","bold"],[1,"col-3","rounded","vh-50",2,"margin-top","38px"],[3,"formGroup","ngSubmit"],[1,"form-Group"],["formControlName","month","id","month",1,"form-control",2,"border","2px solid #FFFFFF","box-shadow","0px 1px 15px rgba(0, 0, 0, 0.06)",3,"ngModel","ngModelChange","change"],["value","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["for","type"],["formControlName","type","id","type",1,"form-control",2,"border","2px solid #FFFFFF","box-shadow","0px 1px 15px rgba(0, 0, 0, 0.06)"],["value","Rent"],["value","Groceries"],["value","Utilities"],["for","ref"],["rows","2","formControlName","text","id","text","placeholder","Enter Text ",1,"form-control"],["for","amount"],["type","number","formControlName","amount","id","amount","placeholder","Enter Amount",1,"form-control",2,"border","2px solid #FFFFFF","box-shadow","0px 1px 15px rgba(0, 0, 0, 0.06)"],[1,"row","d-flex"],["type","submit",1,"col-4","btn","btn-primary"],[1,"bi","bi-plus-circle-dotted"],[1,"col-2"],[1,"col-5","btn","btn-primary",3,"click"],[1,"bi","bi-arrow-left"],[1,"col-9"],[1,"text-center"],[1,"table-wrapper"],["class"," mb-3 rounded ","style",`background-color: #FFFFFF; border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);`,4,"ngFor","ngForOf"],[3,"value"],[1,"mb-3","rounded",2,"background-color","#FFFFFF","border","2px solid #FFFFFF","box-shadow","0px 1px 15px rgba(0, 0, 0, 0.06)"],[1,"d-flex","justify-content-between"],[1,"bi","bi-currency-rupee"],[1,"bi","bi-calendar-event-fill"],[1,"bi","bi-chat-dots-fill"],[1,"btn","btn-sm",3,"click"],[1,"bi","bi-pencil-square"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-side-nav",3),n(4,"HELLO"),e(),t(5,"div",4)(6,"h1"),n(7,"Expense"),e(),t(8,"div",5)(9,"b")(10,"span",6),n(11),e(),n(12),e(),d(13,"br"),e(),t(14,"div",2)(15,"div",7)(16,"form",8),h("ngSubmit",function(){return a.onSubmit()}),t(17,"div",9)(18,"select",10),j("ngModelChange",function(x){return L(a.selectedMonth,x)||(a.selectedMonth=x),x}),h("change",function(){return a.onChangeMonth()}),t(19,"option",11),n(20,"Select Month"),e(),b(21,Be,2,2,"option",12),e()(),d(22,"br")(23,"div",9),t(24,"div",9)(25,"label",13),n(26,"Type of Expense"),e(),t(27,"select",14)(28,"option",11),n(29,"Select Type"),e(),t(30,"option",15),n(31,"Rent"),e(),t(32,"option",16),n(33,"Groceries"),e(),t(34,"option",17),n(35,"Utilities"),e()()(),d(36,"br")(37,"div",9),t(38,"div",9)(39,"label",18),n(40,"Message"),e(),d(41,"textarea",19),e(),d(42,"div",9),t(43,"div",9)(44,"label",20),n(45,"Amount:"),e(),d(46,"input",21),e(),d(47,"br"),t(48,"div",22)(49,"button",23),d(50,"i",24),n(51," Add"),e(),d(52,"div",25),t(53,"button",26),h("click",function(){return a.goBack()}),d(54,"i",27),n(55," Back "),e()()()(),t(56,"div",28)(57,"div")(58,"h2",29),n(59),e(),t(60,"div",30),b(61,Te,26,4,"div",31),e()()()()()()()()),r&2&&(s(11),c("Total expense for ",a.selectedMonth," \xA0: \xA0"),s(),c(" ",a.totalExpense," "),s(4),u("formGroup",a.expenseForm),s(2),V("ngModel",a.selectedMonth),s(3),u("ngForOf",a.service.getMonths()),s(38),c("List of expenses for ",a.selectedMonth,""),s(2),u("ngForOf",a.expenses))},dependencies:[_,E,C,B,G,$,U,R,q,H,D,P,J,W],styles:[".table-wrapper[_ngcontent-%COMP%]{height:374px;overflow-y:auto}.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{width:0}table[_ngcontent-%COMP%]{border-collapse:separate;border-spacing:.1rem}.row[_ngcontent-%COMP%]{display:flex;justify-content:space-between}button[_ngcontent-%COMP%]{height:37px}.colo[_ngcontent-%COMP%]{margin-top:41px;background-color:#f9f6ee;border:2px solid #FFFFFF;box-shadow:0 1px 15px #0000000f}"]});let l=o;return l})();var Ae=[{path:"",component:le},{path:"login",component:le},{path:"all-transactions",component:ce},{path:"side-nav",component:_},{path:"income",component:ue},{path:"expense",component:xe},{path:"add-budget",component:he},{path:"todo-transactions",component:fe}],ge=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=K({type:o}),o.\u0275inj=Q({imports:[ae.forChild(Ae),ae]});let l=o;return l})();var pt=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=K({type:o}),o.\u0275inj=Q({imports:[E,ge]});let l=o;return l})();export{pt as DashboardModule};
