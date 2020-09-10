
        var cima1 = -220
        var cima2 = 185
        var body = document.getElementById('body')
        var pers = document.getElementById('pers')
        var quadrado = document.getElementById('corp')
        document.addEventListener('keydown', function(txto) {
        var tecla = event.keyCode;
        if(tecla === 38 && cima1 !== -400){
            clicou()
        }
        if(tecla === 40 && cima1 !== -20){
            clicou1()
        }
        if(tecla === 39 && cima2 !== 380){
            clicou2()
        }
        if(tecla === 37 && cima2 !== 0){
            clicou3()
        }

        function clicou3(){
            cima2 = cima2 - 5
            pers.style.marginLeft = `${cima2}px`
            console.log(cima1)
            console.log(cima2)


        }
        function clicou2(){
            cima2 = cima2 + 5

            pers.style.marginLeft = `${cima2}px`
            console.log(cima1)
            console.log(cima2)


        }
        function clicou1(){
            cima1 = cima1 + 5

            pers.style.marginTop = `${cima1}px`
            console.log(cima1)
            console.log(cima2)


        }
        function clicou(){
            cima1 = cima1 - 5

            pers.style.marginTop = `${cima1}px`
            console.log(cima1)
            console.log(cima2)
        }
        if(cima1 == -400 && cima2 == 0){
            quadrado.style.backgroundColor = "red"
        }
        else{
            quadrado.style.backgroundColor = "white"
        } 
        
})