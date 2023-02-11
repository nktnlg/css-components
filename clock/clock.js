const clock = document.getElementById("clock");
function setDate(){
    const now = new Date();
    const secondsAngle = now.getSeconds() * 6;
    const minsAngle = now.getMinutes() * 6 + secondsAngle/60;
    const hoursAngle = ((now.getHours()%12)/12)* 360 + minsAngle/12;
    clock.style.setProperty("--second-hand-degrees", secondsAngle+"deg")
    clock.style.setProperty("--minute-hand-degrees", minsAngle+"deg")
    clock.style.setProperty("--hour-hand-degrees", hoursAngle+"deg")
    let startPosition = minsAngle;
    let endPosition = hoursAngle-minsAngle;
    if(minsAngle>hoursAngle){
        startPosition = minsAngle - 360
        endPosition = hoursAngle-startPosition;
    }
    clock.style.setProperty("--start", startPosition+"deg")
    clock.style.setProperty("--end", endPosition+"deg")

}
setInterval(setDate, 1000)
setDate();