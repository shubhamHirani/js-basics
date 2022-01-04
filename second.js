//object function
let square = {
    length: 4,
    width: 6,
    draw : function (){
        console.log('draw');
    }
}
square.draw()

//factory function
function drawSquare(length, width){
    return{length,
    width,
    draw: function (){
        console.log('draw ' + length +' '+ width);
    }
    }
}

let square1 = drawSquare(4,6);
square1.draw()


//constructor function
function MakeSquare(length, width){
    this.length=length;
    this.width=width;
    this.draw = function (){
        console.log('draw ' + this.length +' '+ this.width);
    }
}
//MakeSquare.call({}, 3,5);  
//MakeSquare.apply({}, [3,5]);
let square2 = new MakeSquare(3,7);
//square2.draw();

square.angle = {intersect:90};
console.log(square);


for ( let key in square2){
    console.log(key, square2[key]);
}

