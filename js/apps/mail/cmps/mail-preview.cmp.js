export default {
    props: ['mail'],
    template: `
        <!-- <section class="mail-preview" :class="previewClass"> -->
        <section class="mail-preview" >
           <h4>{{mail.subject}}</h4>
           <p>{{mail.body}}</p>
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