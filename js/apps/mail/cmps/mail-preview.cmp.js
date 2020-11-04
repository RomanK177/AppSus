export default {
    props: ['mail'],
    template: `
        <!-- <section class="mail-preview" :class="previewClass"> -->
        <section class="mail-preview" >
           <h4>FFFFF</h4>
           <h4>{{mail.subject}}</h4>
           <h5>Body: {{mail.body}}</h5>
           <!-- <router-link :to="'/car/' +car.id " exact>Details</router-link> -->
           <!-- <router-link :to="'/car/edit/' +car.id " exact>Edit</router-link> -->
        </section>
    `,
    computed: {
        // previewClass() {
        //     return { active: this.car.isActive }
        // }
    }
}