function test(){
    var name=document.getElementById("name").value;
    var people=document.getElementById("people").value;
    var date=document.getElementById("date").value;
    var time=document.getElementById("time").value;
    

    var name=localStorage.setItem("name",name);
    var people=localStorage.setItem("people",people);
    var date=localStorage.setItem("date",date);
    var time=localStorage.setItem("time",time);

    
}
$("#submit").click(function(){
    alert("Your reservation is done")
})