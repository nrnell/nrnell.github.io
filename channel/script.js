const version = "β";
const latest = {"ver":version,"uuid":crypto.randomUUID()};
const apikey = "AIzaSyBRBSvIUhGf7hbYmcEz70aMNJWcxKq0ZZA";
function autoStorage(value) {localStorage.setItem("local",JSON.stringify(value));};
if (!localStorage.hasOwnProperty("local")) {autoStorage(latest);};
var local = JSON.parse(localStorage.getItem("local"));
if (!local.ver||local.ver!=version) {local=Object.assign(latest,local);local.ver=version;};
while (!local.name||local.name.length>32) {local.name=window.prompt("ユーザー名");};
while (!local.color) {local.color="#FFFFFF";};
autoStorage(local);
document.querySelectorAll("#uuid").forEach(element=>element.value=local.uuid);
document.querySelectorAll("#name").forEach(element=>element.value=local.name);
document.querySelectorAll("#color").forEach(element=>element.value=local.color);
function closeModal() {document.querySelectorAll("dialog[open]").forEach(element=>element.close());};
document.onclick = event => {if(!event.target.closest("dialog[open] .dialog")){closeModal();};};
function submitted() {document.querySelector(".comment #content").value="";local.color=document.querySelector(".comment #color").value;autoStorage(local);};
function loading() {
    setTimeout(async () => {
        var comment = "";
        var responses = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1g7dS6R2nKWgLN_x8V3r9Q9Rfl51SFfkyDCIVuT15i-8/values/Responses?key=${apikey}`);
        responses = (await responses.json()).values;
        for (let i=1;i<responses.length;i++) {comment+=`<div><b style="color:${responses[i][3]};">${responses[i][2].replaceAll("<","&lt;").replaceAll(">","&gt;")}</b><span> ${responses[i][0].slice(0,-3)} </span></div><p>${responses[i][4].replaceAll("<","&lt;").replaceAll(">","&gt;")}</p><br>`;};
        var section = document.querySelector("#comment");
        if (section.innerHTML!=comment) {section.innerHTML=comment;section.lastElementChild.scrollIntoView();};
        loading();
    },1000)
};
loading();
document.querySelector(".comment").showModal();