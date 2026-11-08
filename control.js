const g = 9.81; 
const pi = 3.14; 

function Logposition(id){
    let uia = document.getElementById(id).getAttribute('position')
    console.log("position is ", uia)
    // console.log("pos is ",," " ,y," ", z )
} 

AFRAME.registerComponent('color-toggle', {
    init: function() {
        let el = this.el;
        let bf = el.getAttribute('color');
            console.log(bf);

        this.togglecolor = function() {
            // alert("clicked")
            if(el.getAttribute('color') == 'red') {
                 el.setAttribute('color', bf);
                console.log("clicke turned to ", bf);
            }
            else {
                el.setAttribute('color', 'red');
                console.log("clicked, Turned to red");
            }           
        } 

        this.el.addEventListener('click', this.togglecolor);

    },
    remove: function() {
        this.el.removeEventListener('click', this.togglecolor);
    }
})