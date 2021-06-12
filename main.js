var names_of_people=[]; 

function submit(){
        var name1=document.getElementById("name1").value;
    
        names_of_people.push(name1);
        console.log(names_of_people);
}
function show(){
    document.getElementById("DIV1").innerHTML=names_of_people;
}
function search(){
    document.getElementById("DIV3").style.display="inline-block";
}