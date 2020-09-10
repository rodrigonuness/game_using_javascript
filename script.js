
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
    })
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
        function rand(){
            var num = Math.random() * 1000
            num = num.toString()
            var nume = num.split('.')
            var numerx = nume[0]
            var tntx = numerx.split("")
            var numerx = `${tntx[0]}${tntx[1]}5`
            while(numerx > 380){
            var num = Math.random() * 1000
            num = num.toString()
            var nume = num.split('.')
            var numerx = nume[0]
            var tntx = numerx.split("")
            var numerx = `${tntx[0]}${tntx[1]}5`
        }



             var num = Math.random() * 1000
             num = num.toString()
             var nume = num.split('.')
             var numery = nume[0]
            var tnty = numery.split("")
            var numery = `${tntx[0]}${tntx[1]}5`
             while(numery > 360){
             var num = Math.random() * 1000
             num = num.toString()
             var nume = num.split('.')
             var numery = nume[0] 
            var tnty = numery.split("")
            var numery = `${tnty[0]}${tnty[1]}5`
        }



            console.log(`${numerx}, ${numery}`)
            var vitoria = document.createElement('div')
            quadrado.appendChild(vitoria)
            vitoria.style.marginLeft = `${numerx}px` // 0 ate 380
            vitoria.style.marginTop = `${numery}px` //0 ate  380
            vitoria.style.backgroundColor = "blue"
            vitoria.style.width = "20px"
            vitoria.style.height = "20px"
            console.log(numerx, numery)
        }
        
        rand()