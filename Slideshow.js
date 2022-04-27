            images=document.querySelectorAll('img');
            for(i=0;i<images.length;i++){
                images[i].setAttribute('style','display:none');
                images[i].setAttribute('id','img'+(i+1));
            }
            document.getElementById('img1').style.display='block';
            // let i=1;
            var y=1;
            function next(){
                y++;
                let x= y.toString();
                document.getElementById('img'+x).style.display='block';
                let sample=['1','2','3','4'];
                sample.splice(sample.indexOf(x),1);
                for(j=0;j<sample.length;j++){
                    document.getElementById('img'+sample[j]).style.display='none';
                }
               if(y==4){
                   document.getElementById('n').style.display='none'
               }
               if(y<4){
                   document.getElementById('n').style.display='block'
               }
            }
            function prev(){
                //console.log(y);
                y--;
                let z= y.toString();
                document.getElementById('img'+z).style.display='block';
                let sample=['1','2','3','4'];
                sample.splice(sample.indexOf(z),1);
                for(j=0;j<sample.length;j++){
                    document.getElementById('img'+sample[j]).style.display='none';
                }
               if(y==1){
                   document.getElementById('pre').style.display='none'
               }
               else{
                   document.getElementById('pre').style.display='block'
               }
            }
                
