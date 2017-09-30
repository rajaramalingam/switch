function office() {
	var text;
	 var boy=document.getElementById("trioDesk").value;
	switch (boy){
	 case "Raja":
    text="fail";
    break;
    case "Shiva":
    text="pass"
    break;
     case "Eassaki":
    text="pass"
    break;
     case "Prabha":
    text="pass"
    break;
    case "Mani":
    text="pass"
    break;
    default:
    text = "students";
}
document.getElementById("demo").innerHTML=text;
}



function abc() {
 var text;
 var  c = document.getElementById("myTest").value;
switch(c) {
    case "chennai":
    text="Metropolitain city";
    break;
    case "selam":
    text="Steel city";
    break;
     case "kumbakonam":
    text="Temple city";
    break;
     case "covi":
    text="Another chennai";
    break;
     case "thirunalvellai":
    text="Halwa city";
    break;
     case "madurai":
    text="Jallikattu";
    break;
     case "Thanjavur":
    text="Rice cityS";
    break;

    default:
    text = "Tamil nadu";
}
document.getElementById("place").innerHTML=text;
}



function bestCar() {
 var text;
 var  cars = document.getElementById("myCars").value;
switch (cars) {
    case "audi":
    text="super car";
    break;
    case "BMW":
    text="cool car"
    break;
     case "RR":
    text="laxury car"
    break;
     case "LM":
    text="costly car"
    break;
    default:
    text = "lovely cars";
}
document.getElementById("demo1").innerHTML=text;
}
