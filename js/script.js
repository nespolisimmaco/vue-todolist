const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoInput: "",
            isDone: true,
            toDo: [
                {
                    text: "Svolgere l'esercizio",
                    done: true
                },
                {
                    text: "Comprare il pane",
                    done: false
                },
                {
                    text: "Portare a spasso il cane",
                    done: true
                },
                {
                    text: "Andare in palestra",
                    done: false
                },
                {
                    text: "Chiamare i nonni",
                    done: true
                },
            ]
        }
    },
    methods: {

    }
}).mount("#app");