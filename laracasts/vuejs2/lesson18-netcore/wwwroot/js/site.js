new Vue({
    el: '#app',

    data: {
        skills: []
    },

    mounted() {
        axios.get('/api/skills').then(response => this.skills = response.data);
    }
});