window.onload = () => {

    let texto1 = document.getElementsByClassName('texto1');
    let texto2 = document.getElementsByClassName('texto2');
    let texto3 = document.getElementsByClassName('texto3');
    let texto4 = document.getElementsByClassName('texto4');
    const selector = document.getElementById('selector');
    const reset = document.getElementById('again');
    const form = document.getElementById('form')
    const video = document.getElementsByClassName('video');
    const errorText = document.getElementsByClassName('errorText');
    let input = document.getElementById('precio');
    let container = document.getElementById('pantalla-wrap');

    selector.addEventListener('change', function () {
        const price = selector.value;
        console.log(price);
        texto1[0].classList.remove('active');
        texto2[0].classList.add('active');
    });
    form.addEventListener('submit', function(e){
        e.preventDefault();
        let percent = selector.value * 0.8;
        if (input.value === '') {
            errorText[0].style.display = 'block';
        }else{
            if (input.value < percent) {
                texto2[0].classList.remove('active');
                texto4[0].classList.add('active');
                console.log(input.value);
                reset.addEventListener('submit', function(e){
                    e.preventDefault();
                    texto2[0].classList.add('active');
                    texto4[0].classList.remove('active');
                });
            }else{
                texto2[0].classList.remove('active');
                texto3[0].classList.add('active');
                console.log(input.value);
                document.addEventListener('keydown', (event) => {
                    if (event.code == 'KeyW') {
                        texto3[0].classList.remove('active');
                        video[0].style.display = 'flex';
                        container.style.display = 'none';
                    }
                });
            } 
        }  
    });
}




