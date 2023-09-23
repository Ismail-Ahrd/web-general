let myLabel=document.getElementById('myLabel')
update()
setInterval(update,1000)
function update(){
    let date= new Date()
    myLabel.innerHTML=formatTime(date)
    function formatTime(date){
        let h=date.getHours()
        let m=date.getMinutes()
        let s=date.getSeconds()
        let a= h>=12 ? "pm" : "am"
        h=(h%12)||12

        h=formatzeros(h)
        m=formatzeros(m)
        s=formatzeros(s)

        return`${h}:${m}:${s} ${a}`
    }
    function formatzeros(time){
        time=time.toString()
        return time.length<2 ? "0"+time : time
    }
}