Vue.component('tasks', {
  template: '#tasks-template',

  data: function() {
    return {
      list: []
    };
  },

  created: function() {
    this.fetchTaskList();
  },

  methods: {

    fetchTaskList: function() {

      var resource = this.$resource('https://jsonplaceholder.typicode.com/todos/:id');

      resource.get(function(tasks) { //api/tasks
        this.list = tasks;
      }.bind(this));

      // this.$http.get('https://jsonplaceholder.typicode.com/todos', function(tasks) {
      //   this.list = tasks;
      // }.bind(this));

      //$.getJSON('https://jsonplaceholder.typicode.com/todos', function(tasks) {
      //this.list = tasks;
      //}.bind(this));

    },

    deleteTask: function(task) {
      this.list.$remove(task);
    }

  }

});

new Vue({
  el: 'body'
});
