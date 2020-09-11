		var axisY = -220
        var axisX = 185
		
        const body = document.getElementById('body')
        const character = document.getElementById('character')
        const cube = document.getElementById('field')
		
		
        document.addEventListener('keydown', function(keyPressed) {
			
			var key = event.keyCode
			
			if(key === 38 && axisY !== -405){
				up()
			}
		
			if(key === 40 && axisY !== -25){
				down()
			}
			
			if(key === 39 && axisX !== 385){
				right()
			}
			
			if(key === 37 && axisX !== 5){
				left()
			}
			
			if(key === 68){
				cube.style.backgroundColor = "rgb(23,23,23)"
				body.style.backgroundColor = "black"
				cube.style.animation = "dracula 2s infinite"
			}
		
			if(key === 70){
				cube.style.backgroundColor = "rgb(253,253,253)"
				body.style.backgroundColor = "white"
				cube.style.animation = "none"
			}
		})
		
		
        function left(){
            axisX = axisX - 5
            character.style.marginLeft = `${axisX}px`
            console.log(axisY)
            console.log(axisX)
        }
		
        function right(){
            axisX = axisX + 5

            character.style.marginLeft = `${axisX}px`
            console.log(axisY)
            console.log(axisX)
        }
		
        function down(){
            axisY = axisY + 5
			
            character.style.marginTop = `${axisY}px`
            console.log(axisY)
            console.log(axisX)
        }
		
        function up(){
            axisY = axisY - 5
			
            character.style.marginTop = `${axisY}px`
            console.log(axisY)
            console.log(axisX)
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
            cube.appendChild(vitoria)
            vitoria.style.marginLeft = `${numerx}px` 
            vitoria.style.marginTop = `${numery}px` 
            vitoria.style.backgroundColor = "#ffd700"
            vitoria.style.width = "20px"
            vitoria.style.height = "20px"
            console.log(numerx, numery)
        }
        
        rand()