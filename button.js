        let butn = document.getElementById('myButton');
        let modal = document.getElementById('myModal');
        let getin = document.querySelector('.modal-content');
        let clos = document.getElementsByClassName('close')[0];

        butn.onclick = function() {
            modal.style.display = 'block';
        }

        clos.onclick = function() {
            modal.style.display = 'none';
        }

        window.onclick = function(e){
            if (e.target == modal){
                modal.style.display = 'none'
            }
        }
        
        let vseprok = [
            {
                name:'Сделайте 100 кликов',
                nagrad: 'Дает множитель 0.02%',
                phot:'1d.jpg',
                req:100
            },
            {
                name:'Сделайте 1000 кликов',
                nagrad:'Дает множитель 0.04%',
                phot:'2d.jpg',
                req:1000
            },
            {
                name:'Сделай 10000 кликов',
                nagrad:'Дает множитель 0.1%',
                phot:'3d.jpg',
                req:10000
            }
        ];
        
        gtfa(vseprok);
        function gtfa(arr){
            for (item of arr){
                let div = document.createElement('div');
                let diiv = document.createElement('div');
                let img = document.createElement('img');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                
                diiv.classList.add('ramkas')
                img.classList.add('inimg');
                img.src = item.phot;
                h2.innerHTML = item.name;
                h3.innerHTML = item.nagrad;

                getin.append(div);
                div.append(h2);
                div.append(h3);
                diiv.append(img);
                div.append(diiv);
                
            }
        }