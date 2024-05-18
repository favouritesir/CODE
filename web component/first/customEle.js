function mkCele(name,cls){customElements.define(name,cls)}

class MyButton extends HTMLElement{
    constructor(){
        super();
        this.shadow=this.attachShadow({mode:'closed'});// use this.shadow so that we can call this obj from any where
        // this.innerHTML=this.innerHTML+"  " + (this.getAttribute("prop")||"")
    }
    
    connectedCallback(){//run when create this element
        console.log(this.innerHTML)
        const button =document.createElement('button')
        button.setAttribute("class","cssBtn")
        button.innerHTML=this.innerHTML+"  " + (this.getAttribute("prop")||"")
        
        this.shadow.append(this.#style())// apply shadow dom
        this.shadow.append(button)
    }
    
    attributeChangedCallback(){ // apply when change something
        console.log("change")
    }

    disconnectedCallback(){ // apply when delete this element

    }
    

    #style(){
        const s=document.createElement('style');
        s.innerHTML=`
        button{
            background:green;
            height:25px;
            color:#fff;
            cursor:pointer;
        }
        `
        return s;
    }
}
mkCele('my-button',MyButton);

class cEle extends HTMLElement{
    constructor(val=""){
        super();
        this.val=val        
        this.old=this.innerHTML
        this.innerHTML="this.val" 
        
    }
}
mkCele("c-text",cEle)



