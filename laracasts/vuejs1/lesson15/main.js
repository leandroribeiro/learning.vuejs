Vue.component('message', {
    template: '<input v-model="message" @keyup.enter="storeMessage">',

    data: function () {
        return {
            message: ''
        }
    },

    methods: {
        storeMessage: function () {
            //approach 1
            //console.log('Storing ' + this.message);

            //approach 2
            this.$dispatch('new-message', this.message)

            this.message = '';
        }
    }

});


new Vue({
    el: 'body',

    data:{
        messages: []
    },
    //approach 2
    // events: {
    //     'new-message': function (message) {
    //         console.log('Parent is handling ' + message);
    //     }
    // },

    //approach 3
    methods: {
        handleNewMessage: function (message) {
            console.log('Parent is handling ' + message);

            this.messages.push(message);
        }
    }
});