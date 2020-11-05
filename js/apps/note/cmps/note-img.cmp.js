export default{
    name: 'note-img',
    props: ['info'],
    template:`
    <section class="note-img">
    <!-- <div v-model="val" @change="reportVal">
    <div v-for="currNote in notes" :key="currNote.id"></div> -->
        <h1>{{info.title}}</h1>
        <img :src="info.url"/>
    </section>
    `,
// data (){
//     return {
//         val: '',
//     }
// },
// methods: {
//     reportVal() {
//         this.$emit('setVal', this.val)
//     }
// }
        
    
}