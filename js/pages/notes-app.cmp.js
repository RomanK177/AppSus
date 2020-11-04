import { notesService } from "../services/notes-service.js";
import appHeader from '../cmps/app-header.cmp.js'

export default {
    template: ` 
    <section class="notes-app">
    <appHeader></appHeader>
    <p> Notes App</p>
    </section>
    
    
    
    `,
    components: {
        appHeader,
    }

}