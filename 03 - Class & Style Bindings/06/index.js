Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
})

var vm = new Vue({
    el: '#example',
    data: {
        styleObject: {
            color: 'red',
            fontSize: '60px'
        }
    }
});