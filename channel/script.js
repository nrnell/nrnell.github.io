const version = "β";
var latest = {"ver":version,"uuid":crypto.randomUUID()};
if (!localStorage.hasOwnProperty("local")) {localStorage.setItem("local",JSON.stringify(latest));};
var local = JSON.parse(localStorage.getItem("local"));
if (!local.ver||local.ver!=version) {local=Object.assign(latest,local);local.ver=version;};
while (!local.name||local.name.length>32) {local.name=window.prompt("ユーザー名");};
localStorage.setItem("local",JSON.stringify(local));
document.querySelectorAll("#uuid").forEach((element) => element.value = local.uuid);
document.querySelectorAll("#name").forEach((element) => element.value = local.name);
function submitted() {document.querySelectorAll("#content").forEach((element) => element.value = "");};
function loading() {
    setTimeout(async () => {
        var main = "";
        var comment = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1g7dS6R2nKWgLN_x8V3r9Q9Rfl51SFfkyDCIVuT15i-8/values/Responses?key=AIzaSyBRBSvIUhGf7hbYmcEz70aMNJWcxKq0ZZA");
        comment = await comment.json();
        comment = comment.values;
        for (let i=1;i<comment.length;i++) {main+=`<b style="color:${comment[i][3]};">${comment[i][2]}</b><pre>${comment[i][4]}</pre>`;};
        document.querySelector("main").innerHTML = main;
        loading()
    },1000)
}
loading()