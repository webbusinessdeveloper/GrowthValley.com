/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("colordialog",function(e){function t(){p.getById(T).removeStyle("background-color"),s.getContentElement("picker","selectedColor").setValue(""),l&&l.removeAttribute("aria-selected"),l=null}function n(e){var t,e=e.data.getTarget();"td"==e.getName()&&(t=e.getChild(0).getHtml())&&(l=e,l.setAttribute("aria-selected",!0),s.getContentElement("picker","selectedColor").setValue(t))}function i(e){for(var e=e.replace(/^#/,""),t=0,n=[];2>=t;t++)n[t]=parseInt(e.substr(2*t,2),16);return"#"+(165<=.2126*n[0]+.7152*n[1]+.0722*n[2]?"000":"fff")}function a(e){!e.name&&(e=new CKEDITOR.event(e));var t,n=!/mouse/.test(e.name),a=e.data.getTarget();"td"==a.getName()&&(t=a.getChild(0).getHtml())&&(o(e),n?c=a:d=a,n&&(a.setStyle("border-color",i(t)),a.setStyle("border-style","dotted")),p.getById(b).setStyle("background-color",t),p.getById(v).setHtml(t))}function o(e){if(e=!/mouse/.test(e.name)&&c){var t=e.getChild(0).getHtml();e.setStyle("border-color",t),e.setStyle("border-style","solid")}!c&&!d&&(p.getById(b).removeStyle("background-color"),p.getById(v).setHtml("&nbsp;"))}function r(t){var i=t.data,a=i.getTarget(),o=i.getKeystroke(),r="rtl"==e.lang.dir;switch(o){case 38:(t=a.getParent().getPrevious())&&(t=t.getChild([a.getIndex()]),t.focus()),i.preventDefault();break;case 40:(t=a.getParent().getNext())&&(t=t.getChild([a.getIndex()]))&&1==t.type&&t.focus(),i.preventDefault();break;case 32:case 13:n(t),i.preventDefault();break;case r?37:39:(t=a.getNext())?1==t.type&&(t.focus(),i.preventDefault(!0)):(t=a.getParent().getNext())&&(t=t.getChild([0]))&&1==t.type&&(t.focus(),i.preventDefault(!0));break;case r?39:37:(t=a.getPrevious())?(t.focus(),i.preventDefault(!0)):(t=a.getParent().getPrevious())&&(t=t.getLast(),t.focus(),i.preventDefault(!0))}}var s,l,c,d,u,h=CKEDITOR.dom.element,p=CKEDITOR.document,m=e.lang.colordialog,f={type:"html",html:"&nbsp;"},g=function(e){return CKEDITOR.tools.getNextId()+"_"+e},b=g("hicolor"),v=g("hicolortext"),T=g("selhicolor");return function(){function e(e,n){for(var a=e;e+3>a;a++){var o=new h(u.$.insertRow(-1));o.setAttribute("role","row");for(var r=n;n+3>r;r++)for(var s=0;6>s;s++)t(o.$,"#"+i[r]+i[s]+i[a])}}function t(e,t){var i=new h(e.insertCell(-1));i.setAttribute("class","ColorCell"),i.setAttribute("tabIndex",-1),i.setAttribute("role","gridcell"),i.on("keydown",r),i.on("click",n),i.on("focus",a),i.on("blur",o),i.setStyle("background-color",t),i.setStyle("border","1px solid "+t),i.setStyle("width","14px"),i.setStyle("height","14px");var s=g("color_table_cell");i.setAttribute("aria-labelledby",s),i.append(CKEDITOR.dom.element.createFromHtml('<span id="'+s+'" class="cke_voice_label">'+t+"</span>",CKEDITOR.document))}u=CKEDITOR.dom.element.createFromHtml('<table tabIndex="-1" aria-label="'+m.options+'" role="grid" style="border-collapse:separate;" cellspacing="0"><caption class="cke_voice_label">'+m.options+'</caption><tbody role="presentation"></tbody></table>'),u.on("mouseover",a),u.on("mouseout",o);var i="00 33 66 99 cc ff".split(" ");e(0,0),e(3,0),e(0,3),e(3,3);var s=new h(u.$.insertRow(-1));s.setAttribute("role","row");for(var l=0;6>l;l++)t(s.$,"#"+i[l]+i[l]+i[l]);for(l=0;12>l;l++)t(s.$,"#000000")}(),{title:m.title,minWidth:360,minHeight:220,onLoad:function(){s=this},onHide:function(){t();var e=c.getChild(0).getHtml();c.setStyle("border-color",e),c.setStyle("border-style","solid"),p.getById(b).removeStyle("background-color"),p.getById(v).setHtml("&nbsp;"),c=null},contents:[{id:"picker",label:m.title,accessKey:"I",elements:[{type:"hbox",padding:0,widths:["70%","10%","30%"],children:[{type:"html",html:"<div></div>",onLoad:function(){CKEDITOR.document.getById(this.domId).append(u)},focus:function(){(c||this.getElement().getElementsByTag("td").getItem(0)).focus()}},f,{type:"vbox",padding:0,widths:["70%","5%","25%"],children:[{type:"html",html:"<span>"+m.highlight+'</span>												<div id="'+b+'" style="border: 1px solid; height: 74px; width: 74px;"></div>												<div id="'+v+'">&nbsp;</div><span>'+m.selected+'</span>												<div id="'+T+'" style="border: 1px solid; height: 20px; width: 74px;"></div>'},{type:"text",label:m.selected,labelStyle:"display:none",id:"selectedColor",style:"width: 74px",onChange:function(){try{p.getById(T).setStyle("background-color",this.getValue())}catch(e){t()}}},f,{type:"button",id:"clear",style:"margin-top: 5px",label:m.clear,onClick:t}]}]}]}]}});