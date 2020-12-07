Vue.component('example', {
    template: '<span>{{ message }}</span>',
    data: function() {
        return {
            message: 'not updated'
        }
    },
    methods: {
        updateMessage: async function() {
            this.message = 'updated'
            console.log(this.$el.textContent) // => 'not updated'
            await this.$nextTick()
            console.log(this.$el.textContent) // => 'updated'
        }
    }
})

var vm = new Vue({
    el: '#example',
    data: {
        message: '123'
    }
})
vm.message = 'new message' // change data
vm.$el.textContent === 'new message' // false
Vue.nextTick(function() {
    vm.$el.textContent === 'new message' // true
})