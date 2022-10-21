export default async function({addon:t}){const e=XMLHttpRequest.prototype.open
XMLHttpRequest.prototype.open=function(n,s,...o){if(!t.self.disabled&&s&&s.startsWith("/site-api/projects/shared/")){const t=new URL(location.origin+s)
t.pathname=t.pathname.replace(/shared\/[\w-]+/,"all"),s=t.toString()}return e.call(this,n,s,...o)}}