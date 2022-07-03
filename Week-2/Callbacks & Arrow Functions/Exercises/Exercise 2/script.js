const returnTime = function (time) {
  alert('The current time is: ' + time)
}
const getTime = (fun)=>{
    fun(new Date())
}

getTime(returnTime)