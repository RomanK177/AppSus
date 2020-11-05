


export default {
    name: 'note-todos',
    props:['info'],
    template: `
    <section class="note-todos">
        <h1>{{info.label}}</h1>
        <ul>
            <li>
            {{info.todos.txt}}
            </li>
        </ul>
    </section>
    `
}