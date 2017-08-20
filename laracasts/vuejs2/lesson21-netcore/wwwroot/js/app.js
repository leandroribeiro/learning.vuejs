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
        for (let field in this.originalData) {
            this[field] = '';
        }

        this.errors.clear();
    }

    data() {
        let data = {};

        for (let property in this.originalData) {
            data[property] = this[property];
        }

        // return {
        //     Name: this.name,
        //     Description: this.description
        // };

        //let data = Object.assign({}, this);
        //delete data.originalData;
        //delete data.errors;

        return data;
    }

    post(url){
        return this.submit('post', url);
    }

    delete(url){
        return this.submit('delete', url);
    }

    submit(requestType, url) { //form.submit('post', '/some-endpoint')

        return new Promise((resolve, reject) => {

            axios({
                    method: requestType,
                    url: url,
                    data: this.data()
                    /*params: {
                        name: this.name,
                        description: this.description
                    }*/
                })
                .then(response => {
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data);

                    reject(error.response.data);
                });

        });


    }

    onSuccess(data) {
        alert(data.message);

        this.reset();
    }

    onFail(errors) {
        this.errors.record(errors);
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
            this.form.submit('post', '/home/store')
                .then(data => console.log(data))
                .catch(erros => console.log(erros));

        }

    }

})