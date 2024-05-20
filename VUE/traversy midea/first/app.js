const app=Vue.createApp({
    data(){
        this.getUser()
        return {
            fnm:"",
            lnm:"",
            mail:"",
            pic:"",
            gander:''
        }
    },
    methods: {
        async getUser(){
            const res=await fetch("https://randomuser.me/api");
            const {results}=await res.json()
            this.fnm=results[0].name.first
            this.lnm=results[0].name.last
            this.mail=results[0].email
            this.gander=results[0].gender
            this.pic=results[0].picture.large
        }
    }
})
app.mount("#app")