function $(q){
    let qs=document.querySelectorAll(q)
    return (qs.length==1)?qs[0]:qs;
}
const draggables=$(".draggable")
const container=$(".container")
let startY,dEle;
function dStart(e){
    this.classList.add('dragging')
    startY=e.y
    dEle=this
}
function dOver(e){
    e.stopPropagation();
    e.preventDefault()
    if(startY<e.y)this.insertAdjacentElement('beforebegin',$('.dragging'))
    else this.insertAdjacentElement('afterend',$('.dragging'))
    startY=e.y
}
function dEnd(e){
    this.classList.remove('dragging')
}
draggables.forEach(ele => {
    ele.addEventListener('dragstart',dStart)
    ele.addEventListener('dragend',dEnd)
    ele.addEventListener('dragover',dOver)
});
container.forEach(con=>{
    con.addEventListener('dragover',e=>{
        e.stopPropagation();
        e.preventDefault()
        con.appendChild($('.dragging'))
    })
})