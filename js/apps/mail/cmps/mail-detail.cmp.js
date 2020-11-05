export default {
    props: ['mail'],
    template: `
    <section v-if="mail.isClicked">
        <h3>{{mail.subject}}</h3>
        <h4>{{mail.from}}<span class="from-mail">  <{{mail.from}}@gmail.com></span></h4>
        <p>{{mail.body}}</p>
    </section>
    `,
    data() {
        return {

        }
    },
}