Vue.component('tasks', {
    props: ['list'],

    template: '#tasks-template',

    computed: {
        remaining: function () {
            var vm = this;

            return this.list.filter(this.isInProgress).length;
        },
    },

    methods: {
        isCompleted: function (task) {
            return task.completed;
        },

        isInProgress: function(task){
            return ! this.isCompleted(task);
        },

        deleteTask: function(task){
            this.list.$remove(task);
        },

        clearCompleted: function(){
            this.list = this.list.filter(this.isInProgress);
        }
    }

});

new Vue({
    el: '#app',

    data: {
        tasks: [
            { body: 'Go to the store', completed: false },
            { body: 'Go to the bank', completed: false },
            { body: 'Go to the doctor', completed: true }
        ]
    },



});