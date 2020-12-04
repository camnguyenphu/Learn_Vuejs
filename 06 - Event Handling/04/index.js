new Vue({
    el: '#example-3',
    methods: {
        warn: function(message, event) {
            // now we have access to the native event
            if (event) {
                event.preventDefault()
            }
            alert(message)
        }
    }
})