function $(q){
    let qs=document.querySelectorAll(q)
    return (qs.length==1)?qs[0]:qs;
}
const draggables=$(".draggable")
const container=$(".container")

draggables.forEach(ele => {
    ele.addEventListener('dragstart',(e)=>{
        ele.classList.add('dragging')
    })    
    ele.addEventListener('dragend',(e)=>ele.classList.remove('dragging'))
});

container.forEach(con=>{
    con.addEventListener("dragover", (e)=>{
        e.preventDefault();
        const draggingItem = document.querySelector(".dragging");
        let siblings = [...con.querySelectorAll(".draggable:not(.dragging)")];
        let nextSibling = siblings.find(sibling => {
            return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
        });
        // Inserting the dragging item before the found sibling
        con.insertBefore(draggingItem, nextSibling);
    });
})