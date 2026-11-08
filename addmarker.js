AFRAME.registerComponent('target-marker',{
    init: function() {
        let el = this.el;

        this.addmarker = function(e) {
            console.log("Clicked e is : ", e)

            let p = e.detail.intersection.point;
            console.log("clicked intersec point before: ", p);
            

            let scene = document.querySelector('a-scene');

            let newObj = document.createElement('a-entity');
            newObj.setAttribute('geometry', {primitive: 'sphere'});
            newObj.setAttribute('position', el.object3D.worldToLocal(p)); // ปรับให้ pos ของ p เมื่อเทียบกับ el
            newObj.setAttribute('rotation', '0 -90 0');
            newObj.setAttribute('scale', '.2 .2 .2');
            // newObj.setAttribute('material', 'color: red');
            newObj.setAttribute('addmarker', {})    //เพิ่มคุณสมบัติ addmarker ทำให้สามารถวาง entity นี้ซ้อนกันได้
            newObj.setAttribute('material', 'src: Raiden_screenshot.jpg');
            newObj.setAttribute('dynamic-body', {});

            newObj.setAttribute('animation', {property: 'rotation'});
            newObj.setAttribute('animation', {to: '0 360 0'});
            newObj.setAttribute('animation', {easing: 'linear'});
            newObj.setAttribute('animation', {dur: '5000'});
            newObj.setAttribute('animation', {loop: 'true'});

            // newObj.setAttribute('src', '});

            el.appendChild(newObj); 
            
            console.log("clicked intersec point after: ", p);
            console.log("clicked element point: ", el.object3D.worldToLocal(p));


        }

        this.el.addEventListener('click', this.addmarker)
    },
    remove: function(){
        this.el.removeEventListener('click', this.addmarker)
    }
})


// AFRAME.registerComponent('target-marker', {
//     init: function() {
//         let el = this.el;

//         this.addmarker = function(e) {
//             // ป้องกันกรณีคลิกแล้วไม่มีจุดตัด (intersection)
//             if (!e.detail.intersection) return;
            
//             let p = e.detail.intersection.point;
//             console.log("Clicked point:", p);
            
//             let scene = document.querySelector('a-scene');

//             let newObj = document.createElement('a-entity');
//             newObj.setAttribute('geometry', {primitive: 'sphere'});
//             newObj.setAttribute('position', p);
//             newObj.setAttribute('scale', '0.2 0.2 0.2');
//             newObj.setAttribute('material', 'color: red');
            
//             scene.appendChild(newObj);
//         };

//         el.addEventListener('click', this.addmarker);
//     },
//     remove: function() {
//         this.el.removeEventListener('click', this.addmarker);
//     }
// });