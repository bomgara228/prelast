        let ban = document.getElementsByClassName('options');
        let cloes = document.getElementsByClassName('clos')[0];
        let medal = document.getElementById('nopt');

        ban.onclick = function() {
            medal.style.display = 'block';
        }

        cloes.onclick = function() {
            medal.style.display = 'none';
        }

        window.onclick = function(e){
            if (e.target == medal){
                medal.style.display = 'none'
            }
        }