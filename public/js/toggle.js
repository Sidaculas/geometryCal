

const editBtn = getID('edit');
editBtn.addEventListener('click', function(){
    const hiddenDiv = getID('hidden-div');
    hiddenDiv.removeAttribute('hidden');

    editBtn.addEventListener('dblclick', function(){
        // const hiddenDiv = getID('hidden-div');
        hiddenDiv.setAttribute('hidden', true)
    
    })


})

// value update. Not reuseable. by giving more parameters it can be re use able

function editDone(id){
    const editDoneBtn = getID(id);
    editDoneBtn.addEventListener('click', function(){
        const inpVal1 = getID('card3-inp-val1').value;
        const inpVal2 = getID('card3-inp-val2').value;

        const val1 = getID('card3-val1');
        const val2 = getID('card3-val2')

        val1.innerText = inpVal1;
        val2.innerText = inpVal2;
        console.log('clicked')
    })
}


editDone('edit-done')