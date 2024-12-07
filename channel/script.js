const env = process.env;
const version = "β";
var latest = {"ver":version,"uuid":crypto.randomUUID()};
if (!localStorage.hasOwnProperty("local")) {localStorage.setItem("local",JSON.stringify(latest));};
var local = JSON.parse(localStorage.getItem("local"));
if (!local.ver||local.ver!=version) {local=Object.assign(latest,local);local.ver=version;};
while (!local.name||local.name.length>16) {local.name=window.prompt("ユーザー名");};
localStorage.setItem("local",JSON.stringify(local));
document.querySelectorAll("dialog").forEach(element=>element.close());
document.querySelectorAll("#uuid").forEach(element=>element.value=local.uuid);
document.querySelectorAll("#name").forEach(element=>element.value=local.name);
function submitted() {document.querySelectorAll("#content").forEach(element=>element.value="");};
function loading() {
    setTimeout(async () => {
        var comment = "";
        var responses = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1g7dS6R2nKWgLN_x8V3r9Q9Rfl51SFfkyDCIVuT15i-8/values/Responses?key=${env.google}`);
        responses = (await responses.json()).values;
        for (let i=1;i<responses.length;i++) {comment+=`<br><b style="color:${responses[i][3]};">${responses[i][2]}</b><pre>${responses[i][4]}</pre>`;};
        var section = document.querySelector("#comment");
        if (section.innerHTML!=comment) {section.innerHTML=comment;section.lastElementChild.scrollIntoView();};
        loading();
    },1000)
};
loading();
//document.onclick = event => {if(!event.target.closest("dialog")){closeModal();};};
document.querySelector(".comment").showModal();