/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("select",function(e){function t(e,t,n,i,a){return e=c(e),i=i?i.createElement("OPTION"):document.createElement("OPTION"),e&&i&&"option"==i.getName()?(CKEDITOR.env.ie?(isNaN(parseInt(a,10))?e.$.options.add(i.$):e.$.options.add(i.$,a),i.$.innerHTML=0<t.length?t:"",i.$.value=n):(null!==a&&a<e.getChildCount()?e.getChild(0>a?0:a).insertBeforeMe(i):e.append(i),i.setText(0<t.length?t:""),i.setValue(n)),i):!1}function n(e){for(var e=c(e),t=r(e),n=e.getChildren().count()-1;n>=0;n--)e.getChild(n).$.selected&&e.getChild(n).remove();s(e,t)}function i(e,t,n,i){return e=c(e),0>t?!1:(e=e.getChild(t),e.setText(n),e.setValue(i),e)}function a(e){for(e=c(e);e.getChild(0)&&e.getChild(0).remove(););}function o(e,n,i){var e=c(e),a=r(e);if(0>a)return!1;if(n=a+n,n=0>n?0:n,n=n>=e.getChildCount()?e.getChildCount()-1:n,a==n)return!1;var a=e.getChild(a),o=a.getText(),l=a.getValue();return a.remove(),a=t(e,o,l,i?i:null,n),s(e,n),a}function r(e){return(e=c(e))?e.$.selectedIndex:-1}function s(e,t){if(e=c(e),0>t)return null;var n=e.getChildren().count();return e.$.selectedIndex=t>=n?n-1:t,e}function l(e){return(e=c(e))?e.getChildren():!1}function c(e){return e&&e.domId&&e.getInputElement().$?e.getInputElement():e&&e.$?e:!1}return{title:e.lang.forms.select.title,minWidth:CKEDITOR.env.ie?460:395,minHeight:CKEDITOR.env.ie?320:300,onShow:function(){delete this.selectBox,this.setupContent("clear");var e=this.getParentEditor().getSelection().getSelectedElement();if(e&&"select"==e.getName()){this.selectBox=e,this.setupContent(e.getName(),e);for(var e=l(e),t=0;t<e.count();t++)this.setupContent("option",e.getItem(t))}},onOk:function(){var e=this.getParentEditor(),t=this.selectBox,n=!t;if(n&&(t=e.document.createElement("select")),this.commitContent(t),n&&(e.insertElement(t),CKEDITOR.env.ie)){var i=e.getSelection(),a=i.createBookmarks();setTimeout(function(){i.selectBookmarks(a)},0)}},contents:[{id:"info",label:e.lang.forms.select.selectInfo,title:e.lang.forms.select.selectInfo,accessKey:"",elements:[{id:"txtName",type:"text",widths:["25%","75%"],labelLayout:"horizontal",label:e.lang.common.name,"default":"",accessKey:"N",style:"width:350px",setup:function(e,t){"clear"==e?this.setValue(this["default"]||""):"select"==e&&this.setValue(t.data("cke-saved-name")||t.getAttribute("name")||"")},commit:function(e){this.getValue()?e.data("cke-saved-name",this.getValue()):(e.data("cke-saved-name",!1),e.removeAttribute("name"))}},{id:"txtValue",type:"text",widths:["25%","75%"],labelLayout:"horizontal",label:e.lang.forms.select.value,style:"width:350px","default":"",className:"cke_disabled",onLoad:function(){this.getInputElement().setAttribute("readOnly",!0)},setup:function(e,t){"clear"==e?this.setValue(""):"option"==e&&t.getAttribute("selected")&&this.setValue(t.$.value)}},{type:"hbox",widths:["175px","170px"],children:[{id:"txtSize",type:"text",labelLayout:"horizontal",label:e.lang.forms.select.size,"default":"",accessKey:"S",style:"width:175px",validate:function(){var t=CKEDITOR.dialog.validate.integer(e.lang.common.validateNumberFailed);return""===this.getValue()||t.apply(this)},setup:function(e,t){"select"==e&&this.setValue(t.getAttribute("size")||""),CKEDITOR.env.webkit&&this.getInputElement().setStyle("width","86px")},commit:function(e){this.getValue()?e.setAttribute("size",this.getValue()):e.removeAttribute("size")}},{type:"html",html:"<span>"+CKEDITOR.tools.htmlEncode(e.lang.forms.select.lines)+"</span>"}]},{type:"html",html:"<span>"+CKEDITOR.tools.htmlEncode(e.lang.forms.select.opAvail)+"</span>"},{type:"hbox",widths:["115px","115px","100px"],children:[{type:"vbox",children:[{id:"txtOptName",type:"text",label:e.lang.forms.select.opText,style:"width:115px",setup:function(e){"clear"==e&&this.setValue("")}},{type:"select",id:"cmbName",label:"",title:"",size:5,style:"width:115px;height:75px",items:[],onChange:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbValue"),n=e.getContentElement("info","txtOptName"),e=e.getContentElement("info","txtOptValue"),i=r(this);s(t,i),n.setValue(this.getValue()),e.setValue(t.getValue())},setup:function(e,n){"clear"==e?a(this):"option"==e&&t(this,n.getText(),n.getText(),this.getDialog().getParentEditor().document)},commit:function(e){var n=this.getDialog(),i=l(this),o=l(n.getContentElement("info","cmbValue")),r=n.getContentElement("info","txtValue").getValue();a(e);for(var s=0;s<i.count();s++){var c=t(e,i.getItem(s).getValue(),o.getItem(s).getValue(),n.getParentEditor().document);o.getItem(s).getValue()==r&&(c.setAttribute("selected","selected"),c.selected=!0)}}}]},{type:"vbox",children:[{id:"txtOptValue",type:"text",label:e.lang.forms.select.opValue,style:"width:115px",setup:function(e){"clear"==e&&this.setValue("")}},{type:"select",id:"cmbValue",label:"",size:5,style:"width:115px;height:75px",items:[],onChange:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbName"),n=e.getContentElement("info","txtOptName"),e=e.getContentElement("info","txtOptValue"),i=r(this);s(t,i),n.setValue(t.getValue()),e.setValue(this.getValue())},setup:function(e,n){if("clear"==e)a(this);else if("option"==e){var i=n.getValue();t(this,i,i,this.getDialog().getParentEditor().document),"selected"==n.getAttribute("selected")&&this.getDialog().getContentElement("info","txtValue").setValue(i)}}}]},{type:"vbox",padding:5,children:[{type:"button",id:"btnAdd",style:"",label:e.lang.forms.select.btnAdd,title:e.lang.forms.select.btnAdd,style:"width:100%;",onClick:function(){var e=this.getDialog();e.getParentEditor();var n=e.getContentElement("info","txtOptName"),i=e.getContentElement("info","txtOptValue"),a=e.getContentElement("info","cmbName"),o=e.getContentElement("info","cmbValue");t(a,n.getValue(),n.getValue(),e.getParentEditor().document),t(o,i.getValue(),i.getValue(),e.getParentEditor().document),n.setValue(""),i.setValue("")}},{type:"button",id:"btnModify",label:e.lang.forms.select.btnModify,title:e.lang.forms.select.btnModify,style:"width:100%;",onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","txtOptName"),n=e.getContentElement("info","txtOptValue"),a=e.getContentElement("info","cmbName"),e=e.getContentElement("info","cmbValue"),o=r(a);o>=0&&(i(a,o,t.getValue(),t.getValue()),i(e,o,n.getValue(),n.getValue()))}},{type:"button",id:"btnUp",style:"width:100%;",label:e.lang.forms.select.btnUp,title:e.lang.forms.select.btnUp,onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbName"),n=e.getContentElement("info","cmbValue");o(t,-1,e.getParentEditor().document),o(n,-1,e.getParentEditor().document)}},{type:"button",id:"btnDown",style:"width:100%;",label:e.lang.forms.select.btnDown,title:e.lang.forms.select.btnDown,onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbName"),n=e.getContentElement("info","cmbValue");o(t,1,e.getParentEditor().document),o(n,1,e.getParentEditor().document)}}]}]},{type:"hbox",widths:["40%","20%","40%"],children:[{type:"button",id:"btnSetValue",label:e.lang.forms.select.btnSetValue,title:e.lang.forms.select.btnSetValue,onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbValue");e.getContentElement("info","txtValue").setValue(t.getValue())}},{type:"button",id:"btnDelete",label:e.lang.forms.select.btnDelete,title:e.lang.forms.select.btnDelete,onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbName"),i=e.getContentElement("info","cmbValue"),a=e.getContentElement("info","txtOptName"),e=e.getContentElement("info","txtOptValue");n(t),n(i),a.setValue(""),e.setValue("")}},{id:"chkMulti",type:"checkbox",label:e.lang.forms.select.chkMulti,"default":"",accessKey:"M",value:"checked",setup:function(e,t){"select"==e&&this.setValue(t.getAttribute("multiple")),CKEDITOR.env.webkit&&this.getElement().getParent().setStyle("vertical-align","middle")},commit:function(e){this.getValue()?e.setAttribute("multiple",this.getValue()):e.removeAttribute("multiple")}}]}]}]}});