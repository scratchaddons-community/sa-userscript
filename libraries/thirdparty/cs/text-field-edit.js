function t(t){return""===t?document.execCommand("delete"):document.execCommand("insertText",0,t)}export function insert(n,e){var r=n.ownerDocument,i=r.activeElement
i!==n&&n.focus(),t(e)||function(t,n){t.setRangeText(n,t.selectionStart||0,t.selectionEnd||0,"end"),t.dispatchEvent(new InputEvent("input",{data:n,inputType:"insertText"}))}(n,e),i===r.body?n.blur():i instanceof HTMLElement&&i!==n&&i.focus()}export function set(t,n){t.select(),insert(t,n)}export function getSelection(t){return t.value.slice(t.selectionStart,t.selectionEnd)}export function wrapSelection(t,n,e){var r=t.selectionStart,i=t.selectionEnd
insert(t,n+getSelection(t)+(null!=e?e:n)),t.selectionStart=r+n.length,t.selectionEnd=i+n.length}export function replace(t,n,e){var r=0
t.value.replace(n,(function(){for(var n=[],i=0;arguments.length>i;i++)n[i]=arguments[i]
var o=r+n[n.length-2],u=n[0].length
t.selectionStart=o,t.selectionEnd=o+u
var c="string"==typeof e?e:e.apply(void 0,n)
return insert(t,c),t.selectionStart=o,r+=c.length-u,c}))}