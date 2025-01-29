var pre = document.querySelector("pre");
pre.innerHTML = pre.innerHTML.replaceAll(/\|([^|《》]+)《([^|《》]+)》/g,`<ruby ruby="$2">$1</ruby>`);
pre.innerHTML = pre.innerHTML.replaceAll(/#([^#]+)#/g,`<a href="#$1">$1</a>`)
document.querySelectorAll('h1,h2,h3,span:not([id])').forEach(element=>element.id=element.innerText);
document.querySelectorAll('[id]').forEach(element=>element.innerHTML=`<a href="#${element.id}">${element.innerText}</a>`)