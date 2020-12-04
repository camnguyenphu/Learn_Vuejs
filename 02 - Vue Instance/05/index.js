var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        // a computed getter
        now: function() {
            return Date.now()
        }
    }
});