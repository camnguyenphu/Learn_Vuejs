var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            /*
                split(''): chuyển 1 chuỗi thành 1 mảng
                reverse(): đảo ngược mảng
                join(''): chuyển 1 mảng thành 1 chuỗi
            */
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});