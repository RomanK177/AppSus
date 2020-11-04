export default{
    props: [notes],
    template:`
    <section class="note-img">
    <div v-model="val" @change="reportVal">
    <div v-for="currNote in notes" :key="currNote.id"></div>
    <h1>note image</h1>


    </section>
    `,
data (){
    return {
        val: '',
    }
},
methods: {
    reportVal() {
        this.$emit('setVal', this.val)
    }
}
        
    
}