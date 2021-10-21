document.addEventListener("DOMContentLoaded", () =>{
    function counter(id,start,end,duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end -start,
        increment =end > start ? 1:-1,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(() =>{
            current += increment;
            obj.textContent= current;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }
    
    counter("count2",0,100,3000)
    counter("count3",2000,3000,300)
})