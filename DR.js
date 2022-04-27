        let divs= document.querySelectorAll('div');
        let lis=document.querySelectorAll('li');
        for(i=0;i<divs.length;i++){
            divs[i].setAttribute('id','page'+(i+1));
            lis[i].setAttribute('id','li'+(i+1));
            divs[i].setAttribute('style','display:none');
        }
        lis.forEach(item=>item.addEventListener('click',render));
        function render(e){
            let text = e.target.innerText;
            let num;
            for(i=0;i<text.length;i++){
                if(text[i]<9&&text[i]>0){
                    num= text[i];
                }
            }
            console.log(num);
            //console.log(x);
            show(num)
        }

        function show(x){
            document.getElementById('page'+x).style.display='block';
            console.log(typeof(x));
            let sample=['1','2','3','4'];
            sample.splice(sample.indexOf(x),1);
            for(j=0;j<sample.length;j++){
                document.getElementById('page'+sample[j]).style.display='none';
            }
        }
        // divs.forEach(div=> div.addEventListener('onclick',show(this)))
