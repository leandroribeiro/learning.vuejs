new Vue({
    el: '#app',

    data: {
        tasks: [
            { body: 'Go to the store', completed: false },
            { body: 'Go to the bank', completed: false },
            { body: 'Go to the doctor', completed: true }
        ]
    },

    methods: {
        toggleCompletedTask: function(task){
            task.completed = ! task.completed;

            console.log('toggleCompletedTask');
        }
    }
});