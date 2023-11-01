const allvideonow=JSON.parse(localStorage.getItem('all'))
function DeleteElement(){
    localStorage.visitedbefore='true'
    document.getElementById('add').style.opacity='1'
    //document.getElementById('hs').style.display='none'
    document.getElementById('main').innerHTML=`
    <div class="allvideos" id="av">


    </div>
    `


    //frame    

   
    document.getElementById('close').addEventListener('click',function(){
        document.getElementById('avn').style.scale='0'
    })
    
    document.getElementById('add').addEventListener('click',function(){
        document.getElementById('avn').style.scale='1'
    
        
    })

    
 

   

    
}







let visitedbefore=localStorage.getItem('visitedbefore')

window.onpageshow=function(){
    DeleteElement()
    addvideo()
    function showdata(){
        document.getElementById('av').innerHTML=localStorage.getItem('array')
        
    
    }
    showdata()
    del()



   
    
}
       



function addvideo(){
    window.location.href="#"
    let inplink=document.getElementById('link')
    let save=document.getElementById('save')
    let main=document.getElementById('av')
    save.addEventListener('click',function(){ 
        main.innerHTML+=`
        <div class='frame'>
        <iframe  src="${inplink.value}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <button class='del'><i class="fa-solid fa-trash"></i></button>
        </div>
        `
        localStorage.array=main.innerHTML
        function savedata(){
            localStorage.array=main.innerHTML
            window.location.reload()
        }
  

        savedata()

   

        
   
    })





}
function del(){
    let btndelete=document.getElementsByClassName('del')
    let fr=document.getElementsByClassName('frame')
    let main2=document.getElementById('av')
    for(let d=0;d<btndelete.length;d++){
        btndelete[d].addEventListener('click',function(){
            window.location.href=`#delete${d}`
            let ask=confirm("Are You Sure")
            if(ask==true){
                fr[d].style.display='none'
                localStorage.array=main2.innerHTML
                
            }
        })
    }
}












