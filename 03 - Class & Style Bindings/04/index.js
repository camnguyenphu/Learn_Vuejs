Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
})

var vm = new Vue({
    el: '#example',
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
});