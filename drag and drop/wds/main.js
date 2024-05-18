function $(q){
    let qs=document.querySelectorAll(q)
    return (qs.length==1)?qs[0]:qs;
}
const draggables=$(".draggable")
const container=$(".container")
let start=0;

draggables.forEach(ele => {
    let element;
    ele.addEventListener('dragstart',(e)=>{
        start=e.y;
        ele.classList.add('dragging')
        element=e.srcElement
    })
    
    ele.addEventListener('dragend',(e)=>{
        end=e.y
        ele.classList.remove('dragging')
    })
    ///////////////////////////////// option 1 /////////////////////////////
    ele.addEventListener('dragover',e=>{
        e.stopPropagation();
        e.preventDefault()
        let con=e.currentTarget.parentElement
        if(start<e.y)con.insertBefore($('.dragging'),e.target.nextSibling)
        else con.insertBefore($('.dragging'),e.target)
        start=e.y
    })
    ///////////////////////////////// option 2 /////////////////////////////
    //no need
});


container.forEach(con=>{
    con.addEventListener('dragover',e=>{
        ///////////////////////////////// option 1 /////////////////////////////
        e.preventDefault()
        con.appendChild($('.dragging'))
        start=e.y
        ///////////////////////////////// option 2 /////////////////////////////
        // e.preventDefault()
        // let con=e.currentTarget
        // try {
        //     if(start<e.y){con.insertBefore($('.dragging'),e.target.nextSibling);}
        //     else con.insertBefore($('.dragging'),e.target)
        //     start=e.y
        // } catch (error) {
        //     con.appendChild($('.dragging'))
        // }
    })
})