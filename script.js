
const btn = document.getElementById('btnToggle');

btn.addEventListener('click', () => {
    try {
        var checkedValue = document.querySelector('.toggler:checked').value;
        if(checkedValue){
            // document.querySelector('')
            // console.log('checked')
            document.querySelector('.menu').classList.remove('invisible')
        }
    } catch (error) {
        document.querySelector('.menu').classList.add('invisible')
    }
    
})