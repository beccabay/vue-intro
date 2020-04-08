let myVue = new Vue({
    el: "#app",
    data: {
        message: "Hello World!"
    }
});

let listVue = new Vue({
    el: "#list-app",
    data: {
        list: ["flour", "eggs", "salt", "baking powder", "potatoes", "onions"]
    }
});

let ifVue = new Vue({
    el: "#if-app",
    data: {
        seeable: true
    },
    methods: {
        toggleMessage: function () {
            this.seeable = !this.seeable;
        }
    }
});