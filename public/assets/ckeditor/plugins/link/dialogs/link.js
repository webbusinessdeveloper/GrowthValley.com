/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("link",function(e){function t(e){return e.replace(/'/g,"\\$&")}function n(e){var n,i,a,s=o;n=[r,"("];for(var l=0;l<s.length;l++)i=s[l].toLowerCase(),a=e[i],l>0&&n.push(","),n.push("'",a?t(encodeURIComponent(e[i])):"","'");return n.push(")"),n.join("")}function i(e){for(var t,n=e.length,i=[],a=0;n>a;a++)t=e.charCodeAt(a),i.push(t);return"String.fromCharCode("+i.join(",")+")"}function a(e){return(e=e.getAttribute("class"))?e.replace(/\s*(?:cke_anchor_empty|cke_anchor)(?:\s*$)?/g,""):""}var o,r,s=CKEDITOR.plugins.link,l=function(){var t=this.getDialog(),n=t.getContentElement("target","popupFeatures"),t=t.getContentElement("target","linkTargetName"),i=this.getValue();if(n&&t)switch(n=n.getElement(),n.hide(),t.setValue(""),i){case"frame":t.setLabel(e.lang.link.targetFrameName),t.getElement().show();break;case"popup":n.show(),t.setLabel(e.lang.link.targetPopupName),t.getElement().show();break;default:t.setValue(i),t.getElement().hide()}},c=/^javascript:/,d=/^mailto:([^?]+)(?:\?(.+))?$/,u=/subject=([^;?:@&=$,\/]*)/,h=/body=([^;?:@&=$,\/]*)/,p=/^#(.*)$/,m=/^((?:http|https|ftp|news):\/\/)?(.*)$/,f=/^(_(?:self|top|parent|blank))$/,g=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,b=/^javascript:([^(]+)\(([^)]+)\)$/,v=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/,T=/(?:^|,)([^=]+)=(\d+|yes|no)/gi,E=function(e,t){var n,i,s=t&&(t.data("cke-saved-href")||t.getAttribute("href"))||"",l={};if(s.match(c)&&("encode"==I?s=s.replace(g,function(e,t,n){return"mailto:"+String.fromCharCode.apply(String,t.split(","))+(n&&n.replace(/\\'/g,"'"))}):I&&s.replace(b,function(e,t,n){if(t==r){l.type="email";for(var i,a,e=l.email={},t=/(^')|('$)/g,n=n.match(/[^,\s]+/g),s=n.length,c=0;s>c;c++)i=decodeURIComponent,a=n[c].replace(t,"").replace(/\\'/g,"'"),a=i(a),i=o[c].toLowerCase(),e[i]=a;e.address=[e.name,e.domain].join("@")}})),!l.type)if(n=s.match(p))l.type="anchor",l.anchor={},l.anchor.name=l.anchor.id=n[1];else if(n=s.match(d)){i=s.match(u),s=s.match(h),l.type="email";var E=l.email={};E.address=n[1],i&&(E.subject=decodeURIComponent(i[1])),s&&(E.body=decodeURIComponent(s[1]))}else s&&(i=s.match(m))?(l.type="url",l.url={},l.url.protocol=i[1],l.url.url=i[2]):l.type="url";if(t){if(n=t.getAttribute("target"),l.target={},l.adv={},n)n.match(f)?l.target.type=l.target.name=n:(l.target.type="frame",l.target.name=n);else if(n=(n=t.data("cke-pa-onclick")||t.getAttribute("onclick"))&&n.match(v))for(l.target.type="popup",l.target.name=n[1];s=T.exec(n[2]);)"yes"!=s[2]&&"1"!=s[2]||s[1]in{height:1,width:1,top:1,left:1}?isFinite(s[2])&&(l.target[s[1]]=s[2]):l.target[s[1]]=!0;n=function(e,n){var i=t.getAttribute(n);null!==i&&(l.adv[e]=i||"")},n("advId","id"),n("advLangDir","dir"),n("advAccessKey","accessKey"),l.adv.advName=t.data("cke-saved-name")||t.getAttribute("name")||"",n("advLangCode","lang"),n("advTabIndex","tabindex"),n("advTitle","title"),n("advContentType","type"),CKEDITOR.plugins.link.synAnchorSelector?l.adv.advCSSClasses=a(t):n("advCSSClasses","class"),n("advCharset","charset"),n("advStyles","style"),n("advRel","rel")}return l.anchors=CKEDITOR.plugins.link.getEditorAnchors(e),this._.selectedElement=t,l},C=function(e){e.target&&this.setValue(e.target[this.id]||"")},y=function(e){e.adv&&this.setValue(e.adv[this.id]||"")},k=function(e){e.target||(e.target={}),e.target[this.id]=this.getValue()||""},D=function(e){e.adv||(e.adv={}),e.adv[this.id]=this.getValue()||""},I=e.config.emailProtection||"";I&&"encode"!=I&&(r=o=void 0,I.replace(/^([^(]+)\(([^)]+)\)$/,function(e,t,n){r=t,o=[],n.replace(/[^,\s]+/g,function(e){o.push(e)})}));var R=e.lang.common,O=e.lang.link;return{title:O.title,minWidth:350,minHeight:230,contents:[{id:"info",label:O.info,title:O.info,elements:[{id:"linkType",type:"select",label:O.type,"default":"url",items:[[O.toUrl,"url"],[O.toAnchor,"anchor"],[O.toEmail,"email"]],onChange:function(){var t=this.getDialog(),n=["urlOptions","anchorOptions","emailOptions"],i=this.getValue(),a=t.definition.getContents("upload"),a=a&&a.hidden;for("url"==i?(e.config.linkShowTargetTab&&t.showPage("target"),a||t.showPage("upload")):(t.hidePage("target"),a||t.hidePage("upload")),a=0;a<n.length;a++){var o=t.getContentElement("info",n[a]);o&&(o=o.getElement().getParent().getParent(),n[a]==i+"Options"?o.show():o.hide())}t.layout()},setup:function(e){e.type&&this.setValue(e.type)},commit:function(e){e.type=this.getValue()}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:R.protocol,"default":"http://",items:[["http://\u200e","http://"],["https://\u200e","https://"],["ftp://\u200e","ftp://"],["news://\u200e","news://"],[O.other,""]],setup:function(e){e.url&&this.setValue(e.url.protocol||"")},commit:function(e){e.url||(e.url={}),e.url.protocol=this.getValue()}},{type:"text",id:"url",label:R.url,required:!0,onLoad:function(){this.allowOnChange=!0},onKeyUp:function(){this.allowOnChange=!1;var e=this.getDialog().getContentElement("info","protocol"),t=this.getValue(),n=/^((javascript:)|[#\/\.\?])/i,i=/^(http|https|ftp|news):\/\/(?=.)/i.exec(t);i?(this.setValue(t.substr(i[0].length)),e.setValue(i[0].toLowerCase())):n.test(t)&&e.setValue(""),this.allowOnChange=!0},onChange:function(){this.allowOnChange&&this.onKeyUp()},validate:function(){var e=this.getDialog();return e.getContentElement("info","linkType")&&"url"!=e.getValueOf("info","linkType")?!0:/javascript\:/.test(this.getValue())?(alert(R.invalidValue),!1):this.getDialog().fakeObj?!0:CKEDITOR.dialog.validate.notEmpty(O.noUrl).apply(this)},setup:function(e){this.allowOnChange=!1,e.url&&this.setValue(e.url.url),this.allowOnChange=!0},commit:function(e){this.onChange(),e.url||(e.url={}),e.url.url=this.getValue(),this.allowOnChange=!1}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().show()}},{type:"button",id:"browse",hidden:"true",filebrowser:"info:url",label:R.browseServer}]},{type:"vbox",id:"anchorOptions",width:260,align:"center",padding:0,children:[{type:"fieldset",id:"selectAnchorText",label:O.selectAnchor,setup:function(e){e.anchors.length>0?this.getElement().show():this.getElement().hide()},children:[{type:"hbox",id:"selectAnchor",children:[{type:"select",id:"anchorName","default":"",label:O.anchorName,style:"width: 100%;",items:[[""]],setup:function(e){this.clear(),this.add("");for(var t=0;t<e.anchors.length;t++)e.anchors[t].name&&this.add(e.anchors[t].name);e.anchor&&this.setValue(e.anchor.name),(e=this.getDialog().getContentElement("info","linkType"))&&"email"==e.getValue()&&this.focus()},commit:function(e){e.anchor||(e.anchor={}),e.anchor.name=this.getValue()}},{type:"select",id:"anchorId","default":"",label:O.anchorId,style:"width: 100%;",items:[[""]],setup:function(e){this.clear(),this.add("");for(var t=0;t<e.anchors.length;t++)e.anchors[t].id&&this.add(e.anchors[t].id);e.anchor&&this.setValue(e.anchor.id)},commit:function(e){e.anchor||(e.anchor={}),e.anchor.id=this.getValue()}}],setup:function(e){e.anchors.length>0?this.getElement().show():this.getElement().hide()}}]},{type:"html",id:"noAnchors",style:"text-align: center;",html:'<div role="note" tabIndex="-1">'+CKEDITOR.tools.htmlEncode(O.noAnchors)+"</div>",focus:!0,setup:function(e){e.anchors.length<1?this.getElement().show():this.getElement().hide()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:O.emailAddress,required:!0,validate:function(){var e=this.getDialog();return e.getContentElement("info","linkType")&&"email"==e.getValueOf("info","linkType")?CKEDITOR.dialog.validate.notEmpty(O.noEmail).apply(this):!0},setup:function(e){e.email&&this.setValue(e.email.address),(e=this.getDialog().getContentElement("info","linkType"))&&"email"==e.getValue()&&this.select()},commit:function(e){e.email||(e.email={}),e.email.address=this.getValue()}},{type:"text",id:"emailSubject",label:O.emailSubject,setup:function(e){e.email&&this.setValue(e.email.subject)},commit:function(e){e.email||(e.email={}),e.email.subject=this.getValue()}},{type:"textarea",id:"emailBody",label:O.emailBody,rows:3,"default":"",setup:function(e){e.email&&this.setValue(e.email.body)},commit:function(e){e.email||(e.email={}),e.email.body=this.getValue()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}}]},{id:"target",requiredContent:"a[target]",label:O.target,title:O.target,elements:[{type:"hbox",widths:["50%","50%"],children:[{type:"select",id:"linkTargetType",label:R.target,"default":"notSet",style:"width : 100%;",items:[[R.notSet,"notSet"],[O.targetFrame,"frame"],[O.targetPopup,"popup"],[R.targetNew,"_blank"],[R.targetTop,"_top"],[R.targetSelf,"_self"],[R.targetParent,"_parent"]],onChange:l,setup:function(e){e.target&&this.setValue(e.target.type||"notSet"),l.call(this)},commit:function(e){e.target||(e.target={}),e.target.type=this.getValue()}},{type:"text",id:"linkTargetName",label:O.targetFrameName,"default":"",setup:function(e){e.target&&this.setValue(e.target.name)},commit:function(e){e.target||(e.target={}),e.target.name=this.getValue().replace(/\W/gi,"")}}]},{type:"vbox",width:"100%",align:"center",padding:2,id:"popupFeatures",children:[{type:"fieldset",label:O.popupFeatures,children:[{type:"hbox",children:[{type:"checkbox",id:"resizable",label:O.popupResizable,setup:C,commit:k},{type:"checkbox",id:"status",label:O.popupStatusBar,setup:C,commit:k}]},{type:"hbox",children:[{type:"checkbox",id:"location",label:O.popupLocationBar,setup:C,commit:k},{type:"checkbox",id:"toolbar",label:O.popupToolbar,setup:C,commit:k}]},{type:"hbox",children:[{type:"checkbox",id:"menubar",label:O.popupMenuBar,setup:C,commit:k},{type:"checkbox",id:"fullscreen",label:O.popupFullScreen,setup:C,commit:k}]},{type:"hbox",children:[{type:"checkbox",id:"scrollbars",label:O.popupScrollBars,setup:C,commit:k},{type:"checkbox",id:"dependent",label:O.popupDependent,setup:C,commit:k}]},{type:"hbox",children:[{type:"text",widths:["50%","50%"],labelLayout:"horizontal",label:R.width,id:"width",setup:C,commit:k},{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:O.popupLeft,id:"left",setup:C,commit:k}]},{type:"hbox",children:[{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:R.height,id:"height",setup:C,commit:k},{type:"text",labelLayout:"horizontal",label:O.popupTop,widths:["50%","50%"],id:"top",setup:C,commit:k}]}]}]}]},{id:"upload",label:O.upload,title:O.upload,hidden:!0,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:R.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:R.uploadSubmit,filebrowser:"info:url","for":["upload","upload"]}]},{id:"advanced",label:O.advanced,title:O.advanced,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",id:"advId",requiredContent:"a[id]",label:O.id,setup:y,commit:D},{type:"select",id:"advLangDir",requiredContent:"a[dir]",label:O.langDir,"default":"",style:"width:110px",items:[[R.notSet,""],[O.langDirLTR,"ltr"],[O.langDirRTL,"rtl"]],setup:y,commit:D},{type:"text",id:"advAccessKey",requiredContent:"a[accesskey]",width:"80px",label:O.acccessKey,maxLength:1,setup:y,commit:D}]},{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",label:O.name,id:"advName",requiredContent:"a[name]",setup:y,commit:D},{type:"text",label:O.langCode,id:"advLangCode",requiredContent:"a[lang]",width:"110px","default":"",setup:y,commit:D},{type:"text",label:O.tabIndex,id:"advTabIndex",requiredContent:"a[tabindex]",width:"80px",maxLength:5,setup:y,commit:D}]}]},{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:O.advisoryTitle,requiredContent:"a[title]","default":"",id:"advTitle",setup:y,commit:D},{type:"text",label:O.advisoryContentType,requiredContent:"a[type]","default":"",id:"advContentType",setup:y,commit:D}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:O.cssClasses,requiredContent:"a(cke-xyz)","default":"",id:"advCSSClasses",setup:y,commit:D},{type:"text",label:O.charset,requiredContent:"a[charset]","default":"",id:"advCharset",setup:y,commit:D}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:O.rel,requiredContent:"a[rel]","default":"",id:"advRel",setup:y,commit:D},{type:"text",label:O.styles,requiredContent:"a{cke-xyz}","default":"",id:"advStyles",validate:CKEDITOR.dialog.validate.inlineStyle(e.lang.common.invalidInlineStyle),setup:y,commit:D}]}]}]}],onShow:function(){var e=this.getParentEditor(),t=e.getSelection(),n=null;(n=s.getSelectedLink(e))&&n.hasAttribute("href")?t.getSelectedElement()||t.selectElement(n):n=null,this.setupContent(E.apply(this,[e,n]))},onOk:function(){var e={},a=[],o={},r=this.getParentEditor();switch(this.commitContent(o),o.type||"url"){case"url":var s=o.url&&void 0!=o.url.protocol?o.url.protocol:"http://",l=o.url&&CKEDITOR.tools.trim(o.url.url)||"";e["data-cke-saved-href"]=0===l.indexOf("/")?l:s+l;break;case"anchor":s=o.anchor&&o.anchor.id,e["data-cke-saved-href"]="#"+(o.anchor&&o.anchor.name||s||"");break;case"email":var c=o.email,s=c.address;switch(I){case"":case"encode":var l=encodeURIComponent(c.subject||""),d=encodeURIComponent(c.body||""),c=[];l&&c.push("subject="+l),d&&c.push("body="+d),c=c.length?"?"+c.join("&"):"","encode"==I?(s=["javascript:void(location.href='mailto:'+",i(s)],c&&s.push("+'",t(c),"'"),s.push(")")):s=["mailto:",s,c];break;default:s=s.split("@",2),c.name=s[0],c.domain=s[1],s=["javascript:",n(c)]}e["data-cke-saved-href"]=s.join("")}if(o.target)if("popup"==o.target.type){for(var s=["window.open(this.href, '",o.target.name||"","', '"],u=["resizable","status","location","toolbar","menubar","fullscreen","scrollbars","dependent"],l=u.length,c=function(e){o.target[e]&&u.push(e+"="+o.target[e])},d=0;l>d;d++)u[d]=u[d]+(o.target[u[d]]?"=yes":"=no");c("width"),c("left"),c("height"),c("top"),s.push(u.join(","),"'); return false;"),e["data-cke-pa-onclick"]=s.join(""),a.push("target")}else"notSet"!=o.target.type&&o.target.name?e.target=o.target.name:a.push("target"),a.push("data-cke-pa-onclick","onclick");o.adv&&(s=function(t,n){var i=o.adv[t];i?e[n]=i:a.push(n)},s("advId","id"),s("advLangDir","dir"),s("advAccessKey","accessKey"),o.adv.advName?e.name=e["data-cke-saved-name"]=o.adv.advName:a=a.concat(["data-cke-saved-name","name"]),s("advLangCode","lang"),s("advTabIndex","tabindex"),s("advTitle","title"),s("advContentType","type"),s("advCSSClasses","class"),s("advCharset","charset"),s("advStyles","style"),s("advRel","rel")),s=r.getSelection(),e.href=e["data-cke-saved-href"],this._.selectedElement?(r=this._.selectedElement,l=r.data("cke-saved-href"),c=r.getHtml(),r.setAttributes(e),r.removeAttributes(a),o.adv&&o.adv.advName&&CKEDITOR.plugins.link.synAnchorSelector&&r.addClass(r.getChildCount()?"cke_anchor":"cke_anchor_empty"),(l==c||"email"==o.type&&-1!=c.indexOf("@"))&&(r.setHtml("email"==o.type?o.email.address:e["data-cke-saved-href"]),s.selectElement(r)),delete this._.selectedElement):(s=s.getRanges()[0],s.collapsed&&(r=new CKEDITOR.dom.text("email"==o.type?o.email.address:e["data-cke-saved-href"],r.document),s.insertNode(r),s.selectNodeContents(r)),r=new CKEDITOR.style({element:"a",attributes:e}),r.type=CKEDITOR.STYLE_INLINE,r.applyToRange(s),s.select())},onLoad:function(){e.config.linkShowAdvancedTab||this.hidePage("advanced"),e.config.linkShowTargetTab||this.hidePage("target")},onFocus:function(){var e=this.getContentElement("info","linkType");e&&"url"==e.getValue()&&(e=this.getContentElement("info","url"),e.select())}}});