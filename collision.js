AFRAME.registerComponent('collision-handler', {
    init: function () {
        this.el.addEventListener('obbcollisionstarted', (e) => {
            const pinchHandler = document.querySelector('[pinch-handler]').components['pinch-handler'];
            if (!pinchHandler.grabbedObject) {
                pinchHandler.collidingObject = this.el;
            }
        }
    );

        this.el.addEventListener('obbcollisionended', (e) => {
            const pinchHandler = document.querySelector('[pinch-handler]').components['pinch-handler'];
            if (!pinchHandler.grabbedObject || pinchHandler.grabbedObject === this.el) {
                pinchHandler.collidingObject = null;
            }
        }
    );
    }
}
);
