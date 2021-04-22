/********************
    VUE TO DO LIST
********************/

const app = new Vue({
    el: '#app',

    data: {
        todos: [
            {
                text: 'Fare la spesa',
                completed: false,
            },
            {
                text: 'Seguire la lezione',
                completed: false,
            },
            {
                text: 'Fare esercitazione boolean',
                completed: false,
            },
        ],
        newTodo: '', 
    },
    methods: {
        // Insert a new todo on the list
        addTodo() {
            console.log('Add new item here');

            if(this.newTodo !== '') {

                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                });

                this.newTodo = '';
                this.$refs.todoInput.focus();
            }
        },

        /*** Remove todo from list by index
        *
        * @param {number} index array position of the todo item
        * 
        ***/
        removeTodo(index) {
            console.log(index);
            this.todos.splice(index, 1);

            // const deleted= this.todos.splice(index, 1)[0];
            // console.log(deleted);
        },

        /***
         * Update todo completed status
         * 
         * @param {number} index array position of the todo item
         * 
         ***/
        updateStatus(index) {
            this.todos[index].completed = ! this.todos[index].completed;
        }
    }
});