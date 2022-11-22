let score = document.getElementById('grade');
function grade() {

    if(score.value >= 70 && score.value <= 100) {
        document.getElementById('output').innerHTML= "A"
        }

        else if (score.value >= 60 && score.value <= 69){
            document.getElementById('output').innerHTML= "B"
        }
}

