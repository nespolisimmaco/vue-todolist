const { createApp } = Vue;

createApp({
    data() {
        return {
            error: false,
            toDo: [
                {
                    text: "Svolgere l'esercizio",
                    done: false
                },
                {
                    text: "Comprare il pane",
                    done: false
                },
                {
                    text: "Portare a spasso il cane",
                    done: false
                },
                {
                    text: "Andare in palestra",
                    done: false
                },
                {
                    text: "Chiamare i nonni",
                    done: false
                },
            ],
            // Nuovo todo
            newToDo: {
                text: "",
                done: false
            }
        }
    },
    methods: {
        addNewToDo() {
            // Se il campo di input testuale è vuoto, error diventa true per mostrare il messaggio di errore
            // Altrimenti aggiungo il todo alla lista
            if (this.newToDo.text === "") {
                this.error = true;
            } else {
                this.error = false;
                const capitalLetter = this.newToDo.text[0].toUpperCase() + this.newToDo.text.substring(1);
                console.log(capitalLetter);
                this.toDo.unshift({
                    text: capitalLetter,
                    done: this.newToDo.done
                });
                this.newToDo.text = "";
            }
        },
        removeToDo(indexToRemove) {
            this.toDo.splice(indexToRemove, 1);
        },
        deleteMemo(index) {
            this.toDo[index].done = !this.toDo[index].done;
        }
    }
}).mount("#app");