	var axisY = -220;
        var axisX = 185;
		
        const body = document.getElementById('body');
        const character = document.getElementById('character');
        const cube = document.getElementById('field');
        const points = document.getElementById('points');
        
        var victory = document.createElement('div');
        var point = 0;
        cube.appendChild(victory);
		
		
        document.addEventListener('keydown', function(keyPressed) {
			
			var key = event.keyCode;
			
			if(key === 38 && axisY !== -405){
				up();
			}
		
			if(key === 40 && axisY !== -25){
				down();
			}
			
			if(key === 39 && axisX !== 385){
				right();
			}
			
			if(key === 37 && axisX !== 5){
				left();
			}
			
			if(key === 68){
		cube.style.backgroundColor = "rgb(0,0,0)";
		body.style.backgroundColor = "black";
                cube.style.animation = "dracula 2s infinite";
                color.innerHTML = `press "c" to clear`;
			}
		
			if(key === 67){
		cube.style.backgroundColor = "rgb(253,253,253)";
		body.style.backgroundColor = "white";
                cube.style.animation = "none";
                color.innerHTML = `press "d" to dark`;
			}
		})
		
		
        function left(){
            axisX = axisX - 5;
            character.style.marginLeft = `${axisX}px`;
            console.log(`X :${axisX}`);
            console.log(`Y :${axisY}`);
            console.log(victory.getBoundingClientRect(), character.getBoundingClientRect());
            
            var cR = character.getBoundingClientRect().right;
            var vR = victory.getBoundingClientRect().right;
            var cT = character.getBoundingClientRect().top;
            var vT = victory.getBoundingClientRect().top;
            console.log(`${cR} == ${vR - 1} && ${cT} == ${vT + 1}`);
            if(cR == (vR - 1) && cT == (vT + 1)){
                console.log("uhuul")
                cube.style.backgroundColor = "rgba(255,9,255,1)";
                point = point + 1;
                window.setTimeout(rand, 200);
            }else{
                cube.style.backgroundColor = "rgba(255,255,255,0)";
            }console.log(point);
        }
		
        function right(){
            axisX = axisX + 5;

            character.style.marginLeft = `${axisX}px`;
            console.log(`X :${axisX}`);
            console.log(`Y :${axisY}`);
            console.log(victory.getBoundingClientRect(), character.getBoundingClientRect());
            
            var cR = character.getBoundingClientRect().right;
            var vR = victory.getBoundingClientRect().right;
            var cT = character.getBoundingClientRect().top;
            var vT = victory.getBoundingClientRect().top;
            console.log(`${cR} == ${vR - 1} && ${cT} == ${vT + 1}`);
            if(cR == (vR - 1) && cT == (vT + 1)){
                console.log("uhuul");
                cube.style.backgroundColor = "rgba(255,9,255,1)";
                point = point + 1;
                window.setTimeout(rand, 200);
            }else{
                cube.style.backgroundColor = "rgba(255,255,255,0)";
            }console.log(point);
        }
		
        function down(){
            axisY = axisY + 5;
			
            character.style.marginTop = `${axisY}px`;
            console.log(`X :${axisX}`);
            console.log(`Y :${axisY}`);
            console.log(victory.getBoundingClientRect(), character.getBoundingClientRect());
            
            var cR = character.getBoundingClientRect().right;
            var vR = victory.getBoundingClientRect().right;
            var cT = character.getBoundingClientRect().top;
            var vT = victory.getBoundingClientRect().top;
            console.log(`${cR} == ${vR - 1} && ${cT} == ${vT + 1}`);
            if(cR == (vR - 1) && cT == (vT + 1)){
                console.log("uhuul");
                cube.style.backgroundColor = "rgba(255,9,255,1)";
                point = point + 1;
                window.setTimeout(rand, 200);
            }else{
                cube.style.backgroundColor = "rgba(255,255,255,0)";
            }console.log(point);
        }
		
        function up(){
            axisY = axisY - 5;
			
            character.style.marginTop = `${axisY}px`;
            console.log(`X :${axisX}`);
            console.log(`Y :${axisY}`);
            console.log(victory.getBoundingClientRect(), character.getBoundingClientRect());
            
            var cR = character.getBoundingClientRect().right;
            var vR = victory.getBoundingClientRect().right;
            var cT = character.getBoundingClientRect().top;
            var vT = victory.getBoundingClientRect().top;
            console.log(`${cR} == ${vR - 1} && ${cT} == ${vT + 1}`);
            if(cR == (vR - 1) && cT == (vT + 1)){
                cube.style.backgroundColor = "rgba(255,9,255,1)";
                point = point + 1;
                window.setTimeout(rand, 200);
            }else{
                cube.style.backgroundColor = "rgba(255,255,255,0)";
            }
            console.log(point);
        }
		rand()
        function rand(){
            var num = Math.random() * 1000;
            while(num <= 0 || num >= 10){
                var num = Math.random() * 1000;
            }
            num = num.toString();
            var numerx = num.split(".");
            numerx = numerx[0];
        
            switch (numerx) {
                case "0":
                    numerx = 5;
                break;
                case "1":
                    numerx = 40;
                break;
                case "2":
                    numerx = 75;
                break;
                case "3":
                    numerx = 120;
                break;
                case "4":
                    numerx = 155;
                break;
                case "5":
                    numerx = 205;
                break;
                case "6":
                    numerx = 225;
                break;
                case "7":
                    numerx = 275;
                break;
                case "8":
                    numerx = 305;
                break;
                case "9":
                    numerx = 355;
                break;
                case "10":
                    numerx = 385;
                break;
                default:
                    numerx = 5;
                break;
            }



            var num = Math.random() * 1000;
            while(num <= 0 || num >= 10){
                var num = Math.random() * 1000;
            }
            num = num.toString();
            var numery = num.split(".");
            numery = numery[0];
            switch (numery) {
                case "0":
                    numery = 5;
                break;
                case "1":
                    numery = 40;
                break;
                case "2":
                    numery = 75;
                break;
                case "3":
                    numery = 120;
                break;
                case "4":
                    numery = 155;
                break;
                case "5":
                    numery = 205;
                break;
                case "6":
                    numery = 225;
                break;
                case "7":
                    numery = 270;
                break;
                case "8":
                    numery = 305;
                break;
                case "9":
                    numery= 355;
                break;
                case "10":
                    numery = 385;
                break;
                default:
                    numery = 5;
                break;
            }


            console.log(`x :${numerx} \ny :${numery}`);

            victory.style.marginLeft = `${numerx}px` ;
            victory.style.marginTop = `${numery}px` ;
            victory.style.backgroundColor = "#ffd700";
            victory.style.width = "20px";
            victory.style.height = "20px";
            victory.style.display = "flex";


            cube.style.backgroundColor = "rgba(255,255,255,0)";
            points.innerHTML = `${point}`;
        }

        
        window.setInterval(rand, 5000);
