var pre = document.querySelector('pre');
pre.innerHTML = pre.innerHTML.replaceAll(/\|([^|《》]+)《([^|《》]+)》/g,`<ruby ruby="$2">$1</ruby>`);
document.querySelectorAll('h1,h2,h3,span:not([id])').forEach(element=>element.id=element.innerText);
var newContents = document.querySelector('#新しい要素').parentElement;
var tableOfContents = document.querySelector('#目次').parentElement;
document.querySelectorAll('h1,h2,h3').forEach(element=>tableOfContents.innerHTML+='<br>'+(element.tagName=="H1"?`<b>＃${element.id}</b>`:element.tagName=="H2"?`    ＃${element.id}`:`        ＃${element.id}`));
document.querySelectorAll('.new span').forEach(element=>newContents.innerHTML+=`<br>＃${element.id}`);
document.querySelectorAll('[id]').forEach(element=>pre.innerHTML=pre.innerHTML.replaceAll(`＃${element.id}`,`<a href="#${element.id}">${element.id}</a>`));
// document.querySelectorAll('[id]').forEach(element=>element.onclick=navigator.clipboard.writeText(`https://nrnell.github.io/${location.pathname}#${element.id}`));