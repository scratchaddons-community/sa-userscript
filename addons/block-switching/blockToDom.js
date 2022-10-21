const r=function(r,e,a){const i=document.createElement(r)
if(void 0!==a){Array.isArray(a)||(a=[a])
for(const r of a)i.appendChild("string"==typeof r?document.createTextNode(r):r)}return i},e=r=>{r.parentNode&&r.parentNode.removeChild(r)},a=function(e){if(e.name&&e.SERIALIZABLE){if(e.referencesVariables())return function(e){null==e.getValue()&&e.initModel()
var a=e.getVariable()
if(!a)throw Error("Tried to serialize a variable field with no variable.")
var i=r("field",0,a.name)
return i.setAttribute("name",e.name),i.setAttribute("id",a.getId()),i.setAttribute("variabletype",a.type),i}(e)
var a=r("field",0,e.getValue())
return a.setAttribute("name",e.name),a}return null},i=function(e,o){var f=r(e.isShadow()?"shadow":"block")
if(f.setAttribute("type",e.type),o||f.setAttribute("id",e.id),e.mutationToDom){var v=e.mutationToDom()
v&&(v.hasChildNodes()||v.hasAttributes())&&f.appendChild(v)}if(function(r,e){for(var i,n=0;i=r.inputList[n];n++)for(var t,o=0;t=i.fieldRow[o];o++){var f=a(t)
f&&e.appendChild(f)}}(e,f),n(e,f),e.data){var l=r("data",0,e.data)
f.appendChild(l)}for(var d,u=0;d=e.inputList[u];u++){var c=1
if(5!=d.type){var m=d.connection.targetBlock()
if(1==d.type?y=r("value"):3==d.type&&(y=r("statement")),(b=d.connection.getShadowDom())&&(!m||!m.isShadow())){var s=t(b)
o&&s.getAttribute("id")&&s.removeAttribute("id"),y.appendChild(s)}m&&(y.appendChild(i(m,o)),c=0),y.setAttribute("name",d.name),c||f.appendChild(y)}}e.inputsInlineDefault!=e.inputsInline&&f.setAttribute("inline",e.inputsInline),e.isCollapsed()&&f.setAttribute("collapsed",1),e.disabled&&f.setAttribute("disabled",1),e.isDeletable()||e.isShadow()||f.setAttribute("deletable",0),e.isMovable()||e.isShadow()||f.setAttribute("movable",0),e.isEditable()||f.setAttribute("editable",0)
var b,p=e.getNextBlock()
if(p){var y=r("next",0,i(p,o))
f.appendChild(y)}return!(b=e.nextConnection&&e.nextConnection.getShadowDom())||p&&p.isShadow()||y.appendChild(t(b)),f},n=function(e,a){var i=e.getCommentText()
if(i){var n=r("comment",0,i)
if("object"==typeof e.comment){var t
n.setAttribute("id",e.comment.id),n.setAttribute("pinned",e.comment.isVisible()),t=e.comment.getHeightWidth?e.comment.getHeightWidth():e.comment.getBubbleSize(),n.setAttribute("h",t.height),n.setAttribute("w",t.width)
var o=e.comment.getXY()
n.setAttribute("x",o.x),n.setAttribute("y",o.y),n.setAttribute("minimized",e.comment.isMinimized())}a.appendChild(n)}},t=function(r){for(var a,i=r=r.cloneNode(1);i;)if(i.firstChild)i=i.firstChild
else{for(;i&&!i.nextSibling;)a=i,i=i.parentNode,3==a.nodeType&&""==a.data.trim()&&i.firstChild!=a&&e(a)
i&&(a=i,i=i.nextSibling,3==a.nodeType&&""==a.data.trim()&&e(a))}return r}
export default r=>{const e=i(r,0),a=r.getRelativeToSurfaceXY()
return e.setAttribute("x",Math.round(r.workspace.RTL?-a.x:a.x)),e.setAttribute("y",Math.round(a.y)),e}
