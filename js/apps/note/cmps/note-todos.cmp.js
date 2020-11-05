


export default {
    name: 'note-todos',
    props: ['info'],
    template: `
    <section class="note-todos">
        <h1>{{info.label}}</h1>
       <ul class="note-todos-list">
            <li v-for="(todo, idx) in info.todos"> {{todo.txt}} {{new Date(todo.doneAt).toLocaleTimeString()}}</li>
       </ul>
    </section>
    `,
    // methods: {
    //     renderTodos(){




    //     }
    // }

    // todos: [{ txt: "Do that", doneAt: null }, { txt: "Do this", doneAt: 187111111 }];

// ('noteTodos', info :{ label: "How was it:", todos: [{ txt: "Do that", doneAt: null }, { txt: "Do this", doneAt: 187111111 }] }));


}





