d3.csv("https://docs.google.com/spreadsheets/d/1e3fnVHZJwgZs2d06o05_bzvfef2Z5ALpJnBfvyaqGyA/export?format=csv&range=A3:D",function(error,data){
    //var main="";
    //for(var i=0;i<data.length;i++){main+=i+1+" 名前: "+data[i].username+" "+data[i].timestamp+"<pre>"+data[i].message+"</pre>";}
    //d3.select("main").html(main);
    console.log(data);
});