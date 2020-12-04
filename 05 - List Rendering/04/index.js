var vm = new Vue({
    el: '#example',
    data: {
        numbers: [1, 2, 3, 4, 5, 20, 10]
    },
    computed: {
        evenNumbers: function() {
            return this.numbers.filter(function(number) {
                return number % 2 === 0
            })
        }
    }
});