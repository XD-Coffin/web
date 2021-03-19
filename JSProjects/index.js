var d = new Date()
if (d.getDay()==0){
    document.write(d.getFullYear())
    document.getElementById("t1").innerHTML="None";
    document.getElementById("s1").innerHTML="None";
    document.getElementById("t2").innerHTML ="None";
    document.getElementById("s2").innerHTML="None";
    document.getElementById("t3").innerHTML = "None";
    document.getElementById("s3").innerHTML = "None";
    document.getElementById("l1").innerHTML = "None";
    document.getElementById("l2").innerHTML = "None";
    document.getElementById("l3").innerHTML = "None";
    document.getElementById("tc").innerHTML = "TOmmorow's class starts at 1:00 PM"
}
else if (d.getDay()==1){
    document.write(d);
    document.getElementById("t1").innerHTML ="1:00-3:00";
    document.getElementById("s1").innerHTML = "LAN AND WAN";
    document.getElementById("t2").innerHTML = "None";
    document.getElementById("s2").innerHTML = "None";
    document.getElementById("t3").innerHTML = "None";
    document.getElementById("s3").innerHTML = "None";
    document.getElementById("l1").innerHTML = "Workshop";
    document.getElementById("l2").innerHTML = "None";
    document.getElementById("l3").innerHTML = "None";
    document.getElementById("tc").innerHTML = "TOmmorow's class starts at 8:30 AM"
}
else if (d.getDay()==2){
    document.write(d);
    document.getElementById("t1").innerHTML ="8:30-10:00";
    document.getElementById("s1").innerHTML = "Professional issues";
    document.getElementById("t2").innerHTML = "11:30-1:00";
    document.getElementById("s2").innerHTML = "LAN AND WAN";
    document.getElementById("t3").innerHTML = "1:00-2:30";
    document.getElementById("s3").innerHTML = "N.O.S";
    document.getElementById("l1").innerHTML = "Lecture ";
    document.getElementById("l2").innerHTML = "Lecture";
    document.getElementById("l3").innerHTML = "Lecture";
    document.getElementById("tc").innerHTML = "TOmmorow's class starts at 7:00 AM"
}
else if (d.getDay()==3){
    document.write(d);
    document.getElementById("t1").innerHTML ="7:00-8:30";
    document.getElementById("s1").innerHTML = "Security in Computing";
    document.getElementById("t2").innerHTML = "None";
    document.getElementById("s2").innerHTML = "None";
    document.getElementById("t3").innerHTML = "None";
    document.getElementById("s3").innerHTML = "None";
    document.getElementById("l1").innerHTML = "Lecture";
    document.getElementById("l2").innerHTML = "None";
    document.getElementById("l3").innerHTML = "None";
    document.getElementById("tc").innerHTML = "TOmmorow's class starts at 7:00 AM"
}
else if (d.getDay()==4){
    document.write(d);
    document.getElementById("t1").innerHTML ="7:00-9:00";
    document.getElementById("s1").innerHTML = "N.O.S";
    document.getElementById("t2").innerHTML = "None";
    document.getElementById("s2").innerHTML = "None";
    document.getElementById("t3").innerHTML = "None";
    document.getElementById("s3").innerHTML = "None";
    document.getElementById("l1").innerHTML = "Workshop";
    document.getElementById("l2").innerHTML = "None";
    document.getElementById("l3").innerHTML = "None";
    document.getElementById("tc").innerHTML = "TOmmorow's class starts at 11:00 AM"
}
else if (d.getDay()==5){
    document.write(d);
    document.getElementById("t1").innerHTML ="11:00-1:00";
    document.getElementById("s1").innerHTML = "Professional Issue";
    document.getElementById("t2").innerHTML = "1:00-3:00";
    document.getElementById("s2").innerHTML = "Security in Computing";
    document.getElementById("t3").innerHTML = "None";
    document.getElementById("s3").innerHTML = "None";
    document.getElementById("l1").innerHTML = "Workshop";
    document.getElementById("l2").innerHTML = "Workshop";
    document.getElementById("l3").innerHTML = "None";
    document.getElementById("tc").innerHTML = "TOmmorow's holiday :-) "
}
else if (d.getDay()==6){
    document.write(d);
    document.getElementById("t1").innerHTML ="Enjoy";
    document.getElementById("s1").innerHTML = "Enjoy";
    document.getElementById("t2").innerHTML = "Enjoy";
    document.getElementById("s2").innerHTML = "Enjoy";
    document.getElementById("t3").innerHTML = "Enjoy";
    document.getElementById("s3").innerHTML = "Enjoy";
    document.getElementById("l1").innerHTML = "Enjoy";
    document.getElementById("l2").innerHTML = "Enjoy";
    document.getElementById("l3").innerHTML = "Enjoy";
    document.getElementById("tc").innerHTML = "Class starts from 10:00 AM "
}


