(()=>{
    let operator = document.querySelector(
        '.main .container .operator #operator'
    )
    console.log(operator)

    let jmlAngka = document.querySelector(
        '.main .container .angka #input-angka'
    );
    // console.log(jmlAngka)

    let tombolOk = document.querySelector(
        '.main .container .button button'
    );
    console.log(tombolOk);
    tombolOk.addEventListener('click', function(){
        let container = document.querySelector('.container');
        let tombol = document.createElement('button')
        tombol.setAttribute('id','hitung')
        tombol.textContent = 'Hitung'
        let jumlah = jmlAngka.value;
        for(let angka=0; angka < jumlah; angka++){
            let div = document.createElement('div')
            div.setAttribute('class', 'container-three')
            let label = document.createElement('p')
            label.textContent = (`Angka Ke- ${angka+1}`)
            let input = document.createElement('input')
            input.setAttribute('type', 'number')
            input.setAttribute('name','angka')
            input.setAttribute('id',`angka-${angka+1}`)
            container.append(div)
            div.append(label)
            div.append(input)
        }
        container.append(tombol)
        let hitung = container.querySelector('button#hitung')
        console.log(hitung);

        hitung.addEventListener('click', function(){
            operator = operator.value
            // console.log(operator)
            let hasil = document.createElement('div');
            hasil.setAttribute('class','hasil')
            let hasilHitung = document.createElement('p')
            hasilHitung.setAttribute('class','hasil-hitung')

            let perhitungan = 0;
            switch (operator) {
                case '+':
                    for(let index=0; index<jumlah; index++){
                        let inputAngka = document.querySelector(`#angka-${index+1}`).value
                        perhitungan += parseInt(inputAngka)
                    }
                    console.log(perhitungan);
                    break;
                case '-':
                    for (let index = 0; index <jumlah; index++) {
                        let inputAngka = document.querySelector(`#angka-${index+1}`).value
                        console.log(inputAngka);
                        if(index == 0){
                            perhitungan = parseInt(inputAngka)
                        }else{
                            perhitungan -=parseInt(inputAngka)
                        }
                    }
                    console.log(perhitungan)
                    break;
                case '*':
                    for (let index = 0; index <jumlah; index++) {
                        let inputAngka = document.querySelector(`#angka-${index+1}`).value
                        console.log(inputAngka);
                        if(index == 0){
                            perhitungan = parseInt(inputAngka)
                        }else{
                            perhitungan *=parseInt(inputAngka)
                        }
                    }
                    console.log(perhitungan)
                    break;
                case '/':
                    for (let index = 0; index <jumlah; index++) {
                        let inputAngka = document.querySelector(`#angka-${index+1}`).value
                        console.log(inputAngka);
                        if(index == 0){
                            perhitungan = parseInt(inputAngka)
                        }else{
                            perhitungan /=parseInt(inputAngka)
                        }
                    }
                    console.log(perhitungan)
                    break
                default:
                    alert("Operator tidak ditemukan")
                    location.reload()
                    break;
            }
            let simpanHasil = document.createElement('p');
            let ulang = document.createElement('a')
            ulang.setAttribute('href',location.href)
            ulang.textContent = 'Ulang'
            simpanHasil.setAttribute('class','hasil-perhitungna')
            simpanHasil.textContent = `Hasil Perhitungan : ${perhitungan}`
            simpanHasil.append(ulang);
            container.append(simpanHasil)
        })
    })
})()