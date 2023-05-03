(function(){"use strict";var t={7932:function(t,e,o){var n=o(9242),s=o(3396),l=o.p+"img/pens.092f5b23.svg";const i=(0,s._)("img",{src:l,alt:"pens"},null,-1),a=[i];function c(t,e,o,l,i,c){const r=(0,s.up)("Navbar"),d=(0,s.up)("Notes"),u=(0,s.up)("Modal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(r,{onSetSearch:e[0]||(e[0]=t=>i.searchValue=t)}),(0,s.Wm)(d,{notes:c.filterNotes,onDelNote:c.delNote,onChange:c.change},null,8,["notes","onDelNote","onChange"]),(0,s.wy)((0,s.Wm)(u,{onClose:e[1]||(e[1]=t=>i.isModalOpen=!1),onAddNote:c.addNote,edit:i.edit,editedNote:i.editedNote,onChangedNote:c.changedNote},null,8,["onAddNote","edit","editedNote","onChangedNote"]),[[n.F8,i.isModalOpen]]),(0,s.wy)((0,s._)("button",{class:"addNote",onClick:e[2]||(e[2]=t=>(i.isModalOpen=!0,i.edit=!1))},a,512),[[n.F8,!i.isModalOpen]])],64)}o(7658);var r=o(7139),d=o.p+"img/search.2c9e71ed.svg",u=o.p+"img/back.014b4ff1.svg",h=o.p+"img/close.1d4d165f.svg";const _={class:"header"},g={key:0,class:"nav"},p={class:"nav__title"},v=(0,s._)("img",{src:d,alt:"Search"},null,-1),f=[v],N={key:1,class:"nav__search"},m=(0,s._)("img",{src:u,alt:"back"},null,-1),w=[m],b=["placeholder"],k=(0,s._)("img",{src:h,alt:"close"},null,-1),C=[k];function y(t,e,o,l,i,a){return(0,s.wg)(),(0,s.iD)("header",_,[i.nav?((0,s.wg)(),(0,s.iD)("nav",g,[(0,s._)("button",{class:"nav__lang",onClick:e[0]||(e[0]=(...t)=>a.switchLang&&a.switchLang(...t))},(0,r.zw)(t.$i18n.locale),1),(0,s._)("h1",p,(0,r.zw)(t.$t("Notes")),1),(0,s._)("button",{class:"nav__search_icon",onClick:e[1]||(e[1]=t=>i.nav=!1)},f)])):((0,s.wg)(),(0,s.iD)("nav",N,[(0,s._)("button",{onClick:e[2]||(e[2]=t=>i.nav=!0)},w),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>i.search=t),type:"text",placeholder:t.$t("Search"),autofocus:""},null,8,b),[[n.nr,i.search]]),(0,s._)("button",{class:"nav__search_close",onClick:e[4]||(e[4]=t=>i.search="")},C)]))])}var O={data(){return{nav:!0,search:""}},methods:{switchLang(){"ru"===this.$i18n.locale?this.$i18n.locale="eng":this.$i18n.locale="ru",localStorage.lang=this.$i18n.locale}},watch:{search(t){this.$emit("setSearch",t)}}},D=o(89);const $=(0,D.Z)(O,[["render",y]]);var x=$,S=o.p+"img/list.4ed3d4be.svg",M=o.p+"img/layout.dbae4039.svg";const A={class:"notes container"},L={class:"notes__top"},j={class:"notes__top_title"},z={src:S,alt:"list"},T={src:M,alt:"layout"};function V(t,e,o,l,i,a){const c=(0,s.up)("NotesItem");return(0,s.wg)(),(0,s.iD)("div",A,[(0,s._)("div",L,[(0,s._)("h2",j,(0,r.zw)(o.notes.length>0?t.$t("AllNotes"):t.$t("NoNotes")),1),(0,s._)("button",{onClick:e[0]||(e[0]=t=>i.view=!i.view),class:"notes__top_btn"},[(0,s.wy)((0,s._)("img",z,null,512),[[n.F8,i.view]]),(0,s.wy)((0,s._)("img",T,null,512),[[n.F8,!i.view]]),(0,s._)("span",null,(0,r.zw)(i.view?t.$t("List"):t.$t("Grid")),1)])]),(0,s._)("div",{class:(0,r.C_)(["notes__list",{active:!i.view}])},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.notes,(e=>((0,s.wg)(),(0,s.j4)(c,{key:e.id,note:e,view:i.view,onDelNote:o=>t.$emit("delNote",e.id),onChange:o=>t.$emit("change",e.id)},null,8,["note","view","onDelNote","onChange"])))),128))],2)])}var E=o.p+"img/basket.f04c87ff.svg";const Z={class:"notes__item"},F={class:"notes__item_top-title"},U={class:"notes__item_top-date"},G={class:"notes__item_text"},J={class:"notes__item_btns"},W=(0,s._)("img",{src:l,alt:""},null,-1),B=(0,s._)("img",{src:E,alt:""},null,-1);function H(t,e,o,n,l,i){return(0,s.wg)(),(0,s.iD)("div",Z,[(0,s._)("div",{class:(0,r.C_)(["notes__item_top",{between:!o.view}])},[(0,s._)("h3",F,(0,r.zw)(o.note.title),1),(0,s._)("p",U,(0,r.zw)(o.note.date),1)],2),(0,s._)("p",G,(0,r.zw)(o.note.text),1),(0,s._)("div",J,[(0,s._)("button",{class:"notes__item_btns-btn edit",onClick:e[0]||(e[0]=e=>t.$emit("change",o.note.id))},[W,(0,s.Uk)(" "+(0,r.zw)(t.$t("Edit")),1)]),(0,s._)("button",{class:"notes__item_btns-btn del",onClick:e[1]||(e[1]=e=>t.$emit("delNote",o.note.id))},[B,(0,s.Uk)(" "+(0,r.zw)(t.$t("Delete")),1)])])])}var I={props:{note:{typeof:Object},view:{typeof:Boolean}}};const P=(0,D.Z)(I,[["render",H]]);var Y=P,K={data(){return{view:!0}},components:{NotesItem:Y},props:{notes:{typeof:Array}}};const q=(0,D.Z)(K,[["render",V]]);var Q=q;const R={class:"modal__block_title"},X={class:"modal__block_inputs"},tt=(0,s._)("span",null,"Title",-1),et=(0,s._)("span",null,"Content",-1),ot={class:"modal__block_btns"};function nt(t,e,o,l,i,a){return(0,s.wg)(),(0,s.j4)(n.uT,{name:"modal"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"modal",onClick:e[6]||(e[6]=(...t)=>a.closeModal&&a.closeModal(...t))},[(0,s._)("div",{class:"modal__block",onClick:e[5]||(e[5]=(0,n.iM)((()=>{}),["stop"]))},[(0,s._)("h3",R,(0,r.zw)(o.edit?"Изменить заметку":"Добавить заметку"),1),(0,s._)("div",X,[(0,s._)("label",null,[tt,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.title=t),type:"text",placeholder:"Введите название заметки"},null,512),[[n.nr,i.title]])]),(0,s._)("label",null,[et,(0,s.wy)((0,s._)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>i.text=t),wrap:"off",placeholder:"Введите текст заметки"},null,512),[[n.nr,i.text]])])]),(0,s._)("div",ot,[(0,s._)("button",{class:"modal__block_btns-btn del",onClick:e[2]||(e[2]=(...t)=>a.closeModal&&a.closeModal(...t))},"Отмена"),o.edit?((0,s.wg)(),(0,s.iD)("button",{key:1,class:"modal__block_btns-btn edit",onClick:e[4]||(e[4]=(...t)=>a.changeNote&&a.changeNote(...t))},"Изменить")):((0,s.wg)(),(0,s.iD)("button",{key:0,class:"modal__block_btns-btn edit",onClick:e[3]||(e[3]=(...t)=>a.addNote&&a.addNote(...t))},"Добавить"))])])])])),_:1})}var st=o(3029),lt={props:{edit:{typeof:Boolean},editedNote:{typeof:Object}},data(){return{title:"",text:""}},methods:{closeModal(){this.$emit("close"),this.title=this.text=""},addNote(){if(""!=this.title&&""!=this.text){const t={id:(0,st.Z)(),title:this.title,text:this.text,date:(new Date).toLocaleDateString()};this.$emit("addNote",t),this.closeModal()}},changeNote(){let t={id:this.editedNote.id,title:this.title,text:this.text,date:(new Date).toLocaleDateString()};this.$emit("changedNote",t),this.closeModal()}}};const it=(0,D.Z)(lt,[["render",nt]]);var at=it,ct={components:{Navbar:x,Notes:Q,Modal:at},data(){return{notes:[],isModalOpen:!1,edit:!1,editedNote:null,searchValue:""}},methods:{addNote(t){this.notes.push(t)},getNotes(){let t=localStorage.notes;t&&(this.notes=JSON.parse(t))},delNote(t){this.notes.splice(t,1)},change(t){this.isModalOpen=this.edit=!0;let e=this.notes.find((e=>e.id==t));this.editedNote=e},changedNote(t){this.notes.forEach((e=>{e.id==t.id&&(e.title=t.title,e.text=t.text,e.date=t.date)}))}},watch:{notes:{handler(){localStorage.notes=JSON.stringify(this.notes)},deep:!0}},mounted(){this.getNotes()},computed:{filterNotes(){return this.searchValue?this.notes.filter((t=>t.title.toLowerCase().includes(this.searchValue.toLowerCase()))):this.notes}}};const rt=(0,D.Z)(ct,[["render",c]]);var dt=rt,ut=JSON.parse('{"Notes":"Заметки","AllNotes":"Все заметки","List":"Список","Grid":"Сетка","Edit":"Редактировать","Delete":"Удалить","AddNote":"Заметки","changeNotes":"Изменить заметку","Add":"Добавить","Change":"Изменить","Title":"Заголовок","Content":"Контент","Search":"Поиск","NoNotes":"Нет заметок"}'),ht=JSON.parse('{"Notes":"Notes","AllNotes":"All Notes","List":"List","Grid":"Grid","Edit":"Edit","Delete":"Delete","AddNote":"Add Note","changeNotes":"Сhange Notes","Add":"Add","Change":"Change","Title":"Title","Content":"Content","Search":"Search","NoNotes":"No Notes"}');const _t={ru:ut,eng:ht};var gt=o(5658);const pt=localStorage.lang,vt=(0,gt.o)({legacy:!0,locale:pt||"ru",messages:_t});(0,n.ri)(dt).use(vt).mount("#app")}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var l=e[n]={exports:{}};return t[n](l,l.exports,o),l.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,l){if(!n){var i=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],l=t[d][2];for(var a=!0,c=0;c<n.length;c++)(!1&l||i>=l)&&Object.keys(o.O).every((function(t){return o.O[t](n[c])}))?n.splice(c--,1):(a=!1,l<i&&(i=l));if(a){t.splice(d--,1);var r=s();void 0!==r&&(e=r)}}return e}l=l||0;for(var d=t.length;d>0&&t[d-1][2]>l;d--)t[d]=t[d-1];t[d]=[n,s,l]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/todo-list/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,l,i=n[0],a=n[1],c=n[2],r=0;if(i.some((function(e){return 0!==t[e]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(c)var d=c(o)}for(e&&e(n);r<i.length;r++)l=i[r],o.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return o.O(d)},n=self["webpackChunktodo"]=self["webpackChunktodo"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(7932)}));n=o.O(n)})();
//# sourceMappingURL=app.b7e0d072.js.map