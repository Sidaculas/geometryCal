// tri

const triangleBtn = getID('card1-btn');
triangleBtn.addEventListener('click', function(){
    const val1 = parseFloat(getID('card1-val1').value);
    const val2 = parseFloat(getID('card1-val2').value);

     const area = trpArea(val1, val2)
     const areaName = 'Triangle'

    if (isNaN(val1) || isNaN(val2)){
        console.error('Invalid input values:', val1, val2);
        alert('Cannot Accept NaN values');

    }else{
        addAreaCalculation(areaName, area);
    }
    
})

// rec

const rectangleBtn = getID('card2-btn');
rectangleBtn.addEventListener('click', function(){
    const val1 = parseFloat(getID('card2-val1').value);
    const val2 = parseFloat(getID('card2-val2').value);

     const area = trpArea(val1, val2)
     const areaName = 'Rectangle'

    if (isNaN(val1) || isNaN(val2)){
        console.error('Invalid input values:', val1, val2);
        alert('Cannot Accept NaN values');

    } else{
        addAreaCalculation(areaName, area);
    }
    
})


// parallelogram

const parallelogramBtn = getID('card3-btn');
parallelogramBtn.addEventListener('click', function(){
    const val1 = parseFloat(getID('card3-val1').innerText);
    const val2 = parseFloat(getID('card3-val2').innerText);

     const area = trpArea(val1, val2)
     const areaName = 'parallelogram'

    if (isNaN(val1) || isNaN(val2)){

        alert('Cannot Accept NaN values');
    }else{
    addAreaCalculation(areaName, area);
    }
    
})

// Rhombus

const rhombusBtn = getID('card4-btn');
rhombusBtn.addEventListener('click', function(){
    const val1 = parseFloat(getID('card4-val1').value);
    const val2 = parseFloat(getID('card4-val2').value);

     const area = trpArea(val1, val2)
     const areaName = 'Rhombus'

     if (isNaN(val1) || isNaN(val2)){
        
        alert('Cannot Accept NaN values');
        
    } else{
        addAreaCalculation(areaName, area);
    }
    
})


// Pentagon

const pentagonBtn = getID('card5-btn');
pentagonBtn.addEventListener('click', function(){
    const val1 = parseFloat(getID('card5-val1').value);
    const val2 = parseFloat(getID('card5-val2').value);

    const area = trpArea(val1, val2)
    const areaName = 'Pentagon'

    if (isNaN(val1) || isNaN(val2)){
        
        alert('Cannot Accept NaN values');
        
    } else{
        addAreaCalculation(areaName, area);
    }

    
})

// Pentagon

const ellipseBtn = getID('card6-btn');
ellipseBtn.addEventListener('click', function(){
    const val1 = parseFloat(getID('card6-val1').value);
    const val2 = parseFloat(getID('card6-val2').value);

     const area = trpArea(val1, val2)
     const areaName = 'Ellipse'

     if (isNaN(val1) || isNaN(val2)){
        
        alert('Cannot Accept NaN values');
        
    } else{
        addAreaCalculation(areaName, area);
    }
    
})