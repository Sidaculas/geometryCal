// getting suitable random color

function onHover() {
    const colorArray = ['#e0f2fe', "#e0e7ff", '#ede9fe', '#fae8ff', '#ffe4e6', '#ccfbf1', '#fef9c3' ];

    const randColorIndex = Math.floor(Math.random()* colorArray.length);

    const randColor = colorArray[randColorIndex];

    return randColor
}



function backgroundChange(id){
    document.getElementById(id).addEventListener('mouseenter', function(){
        const bgColor = onHover();
        const card = document.getElementById(id)
        card.style.backgroundColor = bgColor;
    })
    
}


backgroundChange('card1')
backgroundChange('card2')
backgroundChange('card3')
backgroundChange('card4')
backgroundChange('card5')
backgroundChange('card6')


