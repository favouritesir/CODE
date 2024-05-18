// we can write this into our class but we can write out side it is an example
const template=document.createElement("template")
template.innerHTML=`
    <style>
        div{
            display:flex;
            gap:1rem;
            align-items:center;
            padding:1rem;
            border:1px solid orange;
            margin-bottom:1rem;
            
        }
        small{margin-left:auto}
        label{
            font-family:Arial;
            color:green;
            font-weight:bold;
        }
    </style>
    <div>
        <input type="checkbox" />
        <label>
            <slot></slot>
        </label> 
        <small><slot name="small"/></small>  
    </div>
`



class TodoItem extends HTMLElement{
    constructor(){
        super();
        this.shadow=null;
        this.checkbox=null;
    }
    connectedCallback(){
        this.shadow=this.attachShadow({mode:"open"})
        this.shadow.append(template.content.cloneNode(true))
        this.checkbox=this.shadow.querySelector('input')
    }

    static get observedAttributes(){
        return ['checked'];// return an array of observer attribute
    }

    attributeChangedCallback(attributeName,_oldValue,newValue){// which prem we don't want to use we can put an underscore before it
        //nothing happened if we are not defined a static method- get observedAttributes()
        if(attributeName=='checked'){
            this.#updateChecked(newValue)
        }

    }
}

customElements.define('todo-item',TodoItem);