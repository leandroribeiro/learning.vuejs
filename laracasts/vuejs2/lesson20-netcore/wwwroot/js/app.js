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
        if (field) {
            delete this.errors[field];
            return;
        }

        this.errors = {};
    }
}

class Form {

    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    reset() {
        for (let field in originalData) {
            this[field] = '';
        }
    }

    data() {
        return {
            Name: this.name,
            Description: this.description
        };
    }

    submit(requestType, url) {


        axios({
                method: requestType,
                url: url,
                data: this.data()
                /*params: {
                    name: this.name,
                    description: this.description
                }*/
            })
            .then(this.onSuccess.bind(this))
            .catch(this.onFail.bind(this));
    }

    onSuccess(response) {
        alert(response.data.message);
        this.errors.clear();
    }

    onFail(error) {
        this.errors.record(error.response.data)
    }

}

new Vue({

    el: "#app",

    data: {
        form: new Form({
            name: '',
            description: ''
        })
    },


    methods: {
        onSubmit() {
            this.form.submit('post', '/home/store');

        },

        onSuccess(response) {
            alert(response.data.message);

            this.name = '';
            this.description = '';
        }

    }

})