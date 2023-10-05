function fun1(){
    var f1= document.getElementById("fi").value;
    var f2= document.getElementById("si").value;
    var cal= parseInt(f1) * parseInt(f2);
   
    document.getElementById("result").innerHTML=cal
}
fun1()