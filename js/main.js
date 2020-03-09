window.onload = function(){
    
const init = () =>{
    //events
    
    const slideUp = (elem)=>{
        const animateTarget = document.querySelector(elem);
        
        let targetHeight = animateTarget.offsetHeight,
              moveUpToHide = setInterval(frame,10);
        function frame(){
            if(targetHeight == 0){
                clearInterval(moveUpToHide);
                animateTarget.style.display = 'none';
            }else{
                targetHeight--;
                animateTarget.style.height = targetHeight + 'px';
            }
        }
    }//slideUp
    
    const navSlideOn = (elem)=>{
        const animateTarget = document.querySelector(elem);
        
         animateTarget.classList.add('slideOn');
        
        
    }//nav slide 
    
    const navSlideOff = (elem)=>{
        const animateTarget = document.querySelector(elem);
        animateTarget.classList.remove('slideOn');
    }
    
    
    
    const mobile = ()=>{
        const allBtn = document.querySelector('.all_menu');
        const nav = document.querySelector('nav'),
              closeBtn = nav.querySelector('.close');
        allBtn.addEventListener('click',function(){
            navSlideOn('nav');
        });
        
        closeBtn.addEventListener('click',function(){
            navSlideOff('nav');
        })
    }//mobile
    
    const pc = ()=>{}//pc
    
    const common =()=>{
        const closeBtn = document.querySelector('.close_b'),
              topBn = document.querySelector('.top_bn');
        
        closeBtn.addEventListener('click',function(){
            slideUp('.top_bn')
        });
        //-> top banner hide
        
    }//common
    
    
    
    const resizing = ()=>{
        const winWidth = window.innerWidth;
        if(winWidth < 1200){
            mobile();
        }else{
            pc();
        }
    }
    
    resizing();
    window.addEventListener('resize',resizing);

    common();
    
}//init

init();
    
    
    
    
    
};//Document.ready









