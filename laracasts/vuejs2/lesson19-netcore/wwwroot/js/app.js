new Vue({

    el: "#app",

    data: {
        name: '',
        description: ''

    },


    methods: {
        onSubmit() {
            console.log('submitting');

            console.log(this.name);
            console.log(this.description);

            axios({
                method: 'post',
                url: '/home/store',
                params: {
                    name: this.name,
                    description: this.description
                }
            });

            // axios({
            //     method: 'post',
            //     url: '/home/store',
            //     params: this.data
            // });

        }

    }

})