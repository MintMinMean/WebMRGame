cancelAnimationFrame.registerComponent('returnEmitter', {
    init: function() {
        let el = this.el;
        this.returnCall = function() {
            let p = el.getAttribute('position')
        }
    }
})