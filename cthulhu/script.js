var pre = document.querySelector("pre");
pre.innerHTML = pre.innerHTML.replaceAll(/\|([^|《》]+)《([^|《》]+)》/g,`<ruby ruby="$2">$1</ruby>`);
document.querySelectorAll('h1,h2,h3,span:not([id])').forEach(element=>element.id=element.innerText);
document.querySelectorAll('[id]').forEach(element=>element.innerHTML=`<a href="#${element.id}">${element.innerText}</a>`);
document.querySelectorAll('[id]').forEach(element=>pre.innerHTML=pre.innerHTML.replaceAll(`#${element.id}`,`<a href="#${element.id}">${element.id}</a>`));