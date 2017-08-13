class Errors {

    constructor() {
        this.errors = {};
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    record(errors) {
        this.errors = errors;
    }

    clear(field) {
        delete this.errors[field];
    }
}

new Vue({

    el: "#app",

    data: {
        name: '',
        description: '',
        errors: new Errors()
    },


    methods: {
        onSubmit() {

            var model = {
                Name: this.name,
                Description: this.description
            };

            axios({
                    method: 'post',
                    url: '/home/store',
                    data: model
                    /*params: {
                        name: this.name,
                        description: this.description
                    }*/
                })
                .then(this.onSuccess)
                .catch(error => this.errors.record(error.response.data));

        },

        onSuccess(response) {
            alert(response.data.message);

            this.name = '';
            this.description = '';
        }

    }

})