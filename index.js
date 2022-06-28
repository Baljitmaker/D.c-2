console.log("script running...")

document.querySelector('.cross').style.display = 'none';
document.querySelector('.ham-cross').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebar-2');
    if(document.querySelector('.sidebar').classList.contains('sidebar-2')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'

        }, 300);
        
    }
})