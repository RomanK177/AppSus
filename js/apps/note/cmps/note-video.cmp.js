
export default {
    name: 'note-video',
    props:['info'],
    template: `
    <section class="note-video">
    <iframe width="200" height="200" :src="info.url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
    `
}