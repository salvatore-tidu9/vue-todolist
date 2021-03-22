var app = new Vue({

    el: "#root",

    data: {

        newElement: "",

        items: [

            // "Controllare E-mail",

            // "Aggiornare Slide",

            // "Completare Progetto"
        ]
    },

    methods: {

        addElement() {

            this.items.push(this.newElement);

            this.newElement = "";
        },

        removeElement(item) {

            this.items.splice(this.items.indexOf(item), 1);

        }
    }
})


