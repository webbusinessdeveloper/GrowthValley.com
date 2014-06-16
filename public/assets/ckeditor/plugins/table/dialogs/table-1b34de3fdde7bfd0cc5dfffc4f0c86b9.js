/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
!function(){function e(e){for(var t,i=0,n=0,a=0,o=e.$.rows.length;o>a;a++){t=e.$.rows[a];for(var r,s=i=0,l=t.cells.length;l>s;s++)r=t.cells[s],i+=r.colSpan;i>n&&(n=i)}return n}function t(e){return function(){var t=this.getValue(),t=!!(CKEDITOR.dialog.validate.integer()(t)&&t>0);return t||(alert(e),this.select()),t}}function i(i,o){var r=function(e){return new CKEDITOR.dom.element(e,i.document)},s=i.editable(),l=i.plugins.dialogadvtab;return{title:i.lang.table.title,minWidth:310,minHeight:CKEDITOR.env.ie?310:280,onLoad:function(){var e=this,t=e.getContentElement("advanced","advStyles");t&&t.on("change",function(){var t=this.getStyle("width",""),i=e.getContentElement("info","txtWidth");i&&i.setValue(t,!0),t=this.getStyle("height",""),(i=e.getContentElement("info","txtHeight"))&&i.setValue(t,!0)})},onShow:function(){var e,t=i.getSelection(),n=t.getRanges(),a=this.getContentElement("info","txtRows"),r=this.getContentElement("info","txtCols"),s=this.getContentElement("info","txtWidth"),l=this.getContentElement("info","txtHeight");"tableProperties"==o&&((t=t.getSelectedElement())&&t.is("table")?e=t:0<n.length&&(CKEDITOR.env.webkit&&n[0].shrink(CKEDITOR.NODE_ELEMENT),e=i.elementPath(n[0].getCommonAncestor(!0)).contains("table",1)),this._.selectedElement=e),e?(this.setupContent(e),a&&a.disable(),r&&r.disable()):(a&&a.enable(),r&&r.enable()),s&&s.onChange(),l&&l.onChange()},onOk:function(){var e=i.getSelection(),t=this._.selectedElement&&e.createBookmarks(),n=this._.selectedElement||r("table"),a={};if(this.commitContent(a,n),a.info){if(a=a.info,!this._.selectedElement)for(var o=n.append(r("tbody")),s=parseInt(a.txtRows,10)||0,l=parseInt(a.txtCols,10)||0,c=0;s>c;c++)for(var d=o.append(r("tr")),u=0;l>u;u++)d.append(r("td")).appendBogus();if(s=a.selHeaders,!n.$.tHead&&("row"==s||"both"==s)){for(d=new CKEDITOR.dom.element(n.$.createTHead()),o=n.getElementsByTag("tbody").getItem(0),o=o.getElementsByTag("tr").getItem(0),c=0;c<o.getChildCount();c++)l=o.getChild(c),l.type==CKEDITOR.NODE_ELEMENT&&!l.data("cke-bookmark")&&(l.renameNode("th"),l.setAttribute("scope","col"));d.append(o.remove())}if(null!==n.$.tHead&&"row"!=s&&"both"!=s){for(d=new CKEDITOR.dom.element(n.$.tHead),o=n.getElementsByTag("tbody").getItem(0),u=o.getFirst();0<d.getChildCount();){for(o=d.getFirst(),c=0;c<o.getChildCount();c++)l=o.getChild(c),l.type==CKEDITOR.NODE_ELEMENT&&(l.renameNode("td"),l.removeAttribute("scope"));o.insertBefore(u)}d.remove()}if(!this.hasColumnHeaders&&("col"==s||"both"==s))for(d=0;d<n.$.rows.length;d++)l=new CKEDITOR.dom.element(n.$.rows[d].cells[0]),l.renameNode("th"),l.setAttribute("scope","row");if(this.hasColumnHeaders&&"col"!=s&&"both"!=s)for(c=0;c<n.$.rows.length;c++)d=new CKEDITOR.dom.element(n.$.rows[c]),"tbody"==d.getParent().getName()&&(l=new CKEDITOR.dom.element(d.$.cells[0]),l.renameNode("td"),l.removeAttribute("scope"));a.txtHeight?n.setStyle("height",a.txtHeight):n.removeStyle("height"),a.txtWidth?n.setStyle("width",a.txtWidth):n.removeStyle("width"),n.getAttribute("style")||n.removeAttribute("style")}if(this._.selectedElement)try{e.selectBookmarks(t)}catch(h){}else i.insertElement(n),setTimeout(function(){var e=new CKEDITOR.dom.element(n.$.rows[0].cells[0]),t=i.createRange();t.moveToPosition(e,CKEDITOR.POSITION_AFTER_START),t.select()},0)},contents:[{id:"info",label:i.lang.table.title,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"text",id:"txtRows","default":3,label:i.lang.table.rows,required:!0,controlStyle:"width:5em",validate:t(i.lang.table.invalidRows),setup:function(e){this.setValue(e.$.rows.length)},commit:a},{type:"text",id:"txtCols","default":2,label:i.lang.table.columns,required:!0,controlStyle:"width:5em",validate:t(i.lang.table.invalidCols),setup:function(t){this.setValue(e(t))},commit:a},{type:"html",html:"&nbsp;"},{type:"select",id:"selHeaders",requiredContent:"th","default":"",label:i.lang.table.headers,items:[[i.lang.table.headersNone,""],[i.lang.table.headersRow,"row"],[i.lang.table.headersColumn,"col"],[i.lang.table.headersBoth,"both"]],setup:function(e){var t=this.getDialog();t.hasColumnHeaders=!0;for(var i=0;i<e.$.rows.length;i++){var n=e.$.rows[i].cells[0];if(n&&"th"!=n.nodeName.toLowerCase()){t.hasColumnHeaders=!1;break}}this.setValue(null!==e.$.tHead?t.hasColumnHeaders?"both":"row":t.hasColumnHeaders?"col":"")},commit:a},{type:"text",id:"txtBorder",requiredContent:"table[border]","default":i.filter.check("table[border]")?1:0,label:i.lang.table.border,controlStyle:"width:3em",validate:CKEDITOR.dialog.validate.number(i.lang.table.invalidBorder),setup:function(e){this.setValue(e.getAttribute("border")||"")},commit:function(e,t){this.getValue()?t.setAttribute("border",this.getValue()):t.removeAttribute("border")}},{id:"cmbAlign",type:"select",requiredContent:"table[align]","default":"",label:i.lang.common.align,items:[[i.lang.common.notSet,""],[i.lang.common.alignLeft,"left"],[i.lang.common.alignCenter,"center"],[i.lang.common.alignRight,"right"]],setup:function(e){this.setValue(e.getAttribute("align")||"")},commit:function(e,t){this.getValue()?t.setAttribute("align",this.getValue()):t.removeAttribute("align")}}]},{type:"vbox",padding:0,children:[{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtWidth",requiredContent:"table{width}",controlStyle:"width:5em",label:i.lang.common.width,title:i.lang.common.cssLengthTooltip,"default":i.filter.check("table{width}")?500>s.getSize("width")?"100%":500:0,getValue:n,validate:CKEDITOR.dialog.validate.cssLength(i.lang.common.invalidCssLength.replace("%1",i.lang.common.width)),onChange:function(){var e=this.getDialog().getContentElement("advanced","advStyles");e&&e.updateStyle("width",this.getValue())},setup:function(e){this.setValue(e.getStyle("width"))},commit:a}]},{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtHeight",requiredContent:"table{height}",controlStyle:"width:5em",label:i.lang.common.height,title:i.lang.common.cssLengthTooltip,"default":"",getValue:n,validate:CKEDITOR.dialog.validate.cssLength(i.lang.common.invalidCssLength.replace("%1",i.lang.common.height)),onChange:function(){var e=this.getDialog().getContentElement("advanced","advStyles");e&&e.updateStyle("height",this.getValue())},setup:function(e){(e=e.getStyle("height"))&&this.setValue(e)},commit:a}]},{type:"html",html:"&nbsp;"},{type:"text",id:"txtCellSpace",requiredContent:"table[cellspacing]",controlStyle:"width:3em",label:i.lang.table.cellSpace,"default":i.filter.check("table[cellspacing]")?1:0,validate:CKEDITOR.dialog.validate.number(i.lang.table.invalidCellSpacing),setup:function(e){this.setValue(e.getAttribute("cellSpacing")||"")},commit:function(e,t){this.getValue()?t.setAttribute("cellSpacing",this.getValue()):t.removeAttribute("cellSpacing")}},{type:"text",id:"txtCellPad",requiredContent:"table[cellpadding]",controlStyle:"width:3em",label:i.lang.table.cellPad,"default":i.filter.check("table[cellpadding]")?1:0,validate:CKEDITOR.dialog.validate.number(i.lang.table.invalidCellPadding),setup:function(e){this.setValue(e.getAttribute("cellPadding")||"")},commit:function(e,t){this.getValue()?t.setAttribute("cellPadding",this.getValue()):t.removeAttribute("cellPadding")}}]}]},{type:"html",align:"right",html:""},{type:"vbox",padding:0,children:[{type:"text",id:"txtCaption",requiredContent:"caption",label:i.lang.table.caption,setup:function(e){if(this.enable(),e=e.getElementsByTag("caption"),0<e.count()){var e=e.getItem(0),t=e.getFirst(CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT));t&&!t.equals(e.getBogus())?(this.disable(),this.setValue(e.getText())):(e=CKEDITOR.tools.trim(e.getText()),this.setValue(e))}},commit:function(e,t){if(this.isEnabled()){var n=this.getValue(),a=t.getElementsByTag("caption");if(n)0<a.count()?(a=a.getItem(0),a.setHtml("")):(a=new CKEDITOR.dom.element("caption",i.document),t.getChildCount()?a.insertBefore(t.getFirst()):a.appendTo(t)),a.append(new CKEDITOR.dom.text(n,i.document));else if(0<a.count())for(n=a.count()-1;n>=0;n--)a.getItem(n).remove()}}},{type:"text",id:"txtSummary",requiredContent:"table[summary]",label:i.lang.table.summary,setup:function(e){this.setValue(e.getAttribute("summary")||"")},commit:function(e,t){this.getValue()?t.setAttribute("summary",this.getValue()):t.removeAttribute("summary")}}]}]},l&&l.createAdvancedTab(i,null,"table")]}}var n=CKEDITOR.tools.cssLength,a=function(e){var t=this.id;e.info||(e.info={}),e.info[t]=this.getValue()};CKEDITOR.dialog.add("table",function(e){return i(e,"table")}),CKEDITOR.dialog.add("tableProperties",function(e){return i(e,"tableProperties")})}();