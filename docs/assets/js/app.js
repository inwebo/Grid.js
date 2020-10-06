import demo1 from "./demos/demo-1";

window.addEventListener("DOMContentLoaded", (event) => {
    demo1();

    document.getElementById('tile-width').onchange =() => {
        demo1();
    };

    document.getElementById('tile-height').onchange =() => {
        demo1();
    };

    document.getElementById('cols').onchange =() => {
        demo1();
    };
    document.getElementById('rows').onchange =() => {
        demo1();
    };

    document.getElementById('cell-offset-x').onchange =() => {
        demo1();
    };
    document.getElementById('cell-offset-y').onchange =() => {
        demo1();
    };

    document.getElementById('colour1').onchange =() => {
        demo1();
    };
    document.getElementById('colour2').onchange =() => {
        demo1();
    };
});
