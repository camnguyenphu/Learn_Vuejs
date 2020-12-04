var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    methods: {
        // a computed getter
        reversedMessage: function() {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    }
});