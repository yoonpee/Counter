const nums = document.querySelector('#nums');
const btns = document.querySelectorAll('button');



let numIn = 0;

btns.forEach(function(btn){
    btn.addEventListener('click', ()=>{
        
        if(btn.classList.contains('lower')){
            numIn--;
        }else if(btn.classList.contains('add')){
            numIn++;
        }
        const num = document.querySelector('#nums');
        num.innerText = numIn;

        if( numIn < 0){
            num.style.color = 'red';
        } else if( numIn === 0){
            num.style.color = '#111';
        }else{
            num.style.color = 'green';
        }
        

        // if() {
        //     numIn--;
        
        // }else if (btn.classList.add('add')){
        //     numIn++;
        // }
        
    })
})
