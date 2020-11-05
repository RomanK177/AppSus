
export default {
    name: 'note-text',
    props:['info'],
    template: `
    <section class="note-text">
        {{info.txt}}
    </section>
    `
}