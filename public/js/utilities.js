function getID(id){
    return document.getElementById(id)
}



// for triangle rhombus and pentagon => TRP

function trpArea(val1, val2){
    return (.5 * parseFloat(val1) * parseFloat(val2)).toFixed(2)
}


// for rectangle parallelogram
function rpArea(val1, val2){
    return (parseFloat(val1) * parseFloat(val2)).toFixed(2)
}

// for ellipse
function ellipse(val1, val2){
    return (Math.PI * parseFloat(val1) * parseFloat(val2)).toFixed(2)
}



// for addAreaCalculation()

function addAreaCalculation(areaName, area){
    const parentDiv = getID('parent-div');
    const count = parentDiv.childElementCount;

    const p = document.createElement('p');
    p.classList.add('mt-4', 'text-left');

    // using formatted string
    p.innerHTML = `${count+1}. ${areaName} ${area} cm<sup>2</sup> <button class="w-1/3 bg-blue-500 rounded-lg px-2 py-1 text-white font-thin text-sm">Convert to m <sup>2</sup></button>`

    parentDiv.appendChild(p);
    

}