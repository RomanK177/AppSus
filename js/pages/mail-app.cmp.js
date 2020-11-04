import { mailService } from "../services/mail-service.js";

export default {
    name: 'mail-app',
    template: `
        <section class="mail-app">
            <h1>Car r Us</h1>
            <router-link to="/car/edit">Add a new Car</router-link>
            <car-filter @doFilter="setFilter" />
            <car-list @remove="removeCar" :cars="carsToShow" />
        </section>
    `,
    data() {
        return {

        }
    },
    computed: {
        carsToShow() {
            // if (!this.filterBy) return this.cars;
            // const txt = this.filterBy.byVendor.toLowerCase();
            // return this.cars.filter(car => car.vendor.toLowerCase().includes(txt) &&
            //     (
            //         car.isActive && this.filterBy.isActive ||
            //         !car.isActive && !this.filterBy.isActive
            //     )
            // )
        }
    },
    methods: {
        //     addCar() {
        //         carService.add(this.carToEdit);
        //         this.carToEdit = carService.getEmptyCar();
        //     },
        //     removeCar(carId) {
        //         carService.remove(carId)
        //             .then(() => eventBus.$emit('show-msg', 'Car Deleted'))
        //             .catch(err => console.log('something went wrong', err))
        //     },
        //     setFilter(filterBy) {
        //         this.filterBy = filterBy
        //     }
        // },
        // created() {
        //     carService.getCars()
        //         .then(cars => this.cars = cars)
        // },
        // components: {
        //     carList,
        //     carFilter
        // }
    }