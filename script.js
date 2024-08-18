const days=document.getElementById("days");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");
const year=document.getElementById("year");
const countdown=document.getElementById("countdown")
const img=document.getElementById("loading");

let currentyear=new Date().getFullYear();
let nextYear=currentyear+1;
year.innerHTML=`${nextYear}`
let newYearTime=new Date(`january 01 ${nextYear} 00:00:00`);

function updatetime(){
    let currentyear=new Date();
    let curyear=currentyear.getFullYear();
    let diff=newYearTime-currentyear;
    
    let d=Math.floor(diff/1000/60/60/24);
    if(curyear%4==0&&curyear%100!=0||(curyear%400==0))d=d+1;
    let h=Math.floor(diff/1000/60/60)%24;
    let m=Math.floor(diff/1000/60)%60;
    let s=Math.floor(diff/1000)%60;
    d=d<10?"0"+d:d;
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    days.innerHTML=d;
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    setTimeout(updatetime,1000);
}
setTimeout(()=>{
img.remove();
countdown.style.display="flex";
},1000);
updatetime()