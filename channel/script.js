let local = {"uuid":crypto.randomUUID(),"name":""};
if (!localStorage.hasOwnProperty("local")) {localStorage.setItem("local",JSON.stringify(local));};
local = JSON.parse(localStorage.getItem("local"));
while (!local.name) {local.name = window.prompt("ユーザー名")};
document.querySelectorAll("#uuid").forEach((element) => element.value = local.uuid);
document.querySelectorAll("#name").forEach((element) => element.value = local.name);
const loading = () => {
    setTimeout(async () => {
        var main = "";
        var comment = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1g7dS6R2nKWgLN_x8V3r9Q9Rfl51SFfkyDCIVuT15i-8/values/Responses?key=AIzaSyDh5OCWGGIs9l7q2L6zszjEklNGOyThr1M");
        comment = await comment.json();
        comment = comment.values;
        for (let i=1;i<comment.length;i++) {console.log(i);main+=`<b style="color:${comment[i][3]};">${comment[i][2]}</b><pre>${comment[i][4]}</pre>`;};
        document.querySelector("main").innerHTML = main;
        loading()
    },1000)
}
loading()