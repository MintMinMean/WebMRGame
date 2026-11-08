AFRAME.registerComponent('mover', {
    init : function() {
        let el = this.el;

        el.removeAttribute('animation');
        
        this.animateMove = function() {
            let currentpos = el.getAttribute('position');
            let param = {
                property: 'position',
                    to: {x: currentpos.x-5, y: currentpos.y+5 , z: currentpos.z},
                    dur: 5000,
                    easing: 'easeOutElastic'
            };
            el.setAttribute('animation', param);
        }
        this.el.addEventListener('click', this.animateMove)
    },
    remove : function(){
        this.el.removeEventListener('click', this.animateMove)
    }
})