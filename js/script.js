const toggler = (e)=>{
    document.querySelector('.sidebar').classList.toggle('expand')
}

document.querySelector('.close-nav').addEventListener('click', e=>{
    document.querySelector('.sidebar').classList.remove('expand')
})


const navigator = e=>{
    document.querySelector('.sidebar').classList.remove('expand')
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active')
    });
    e.classList.add('active')
    
    // setMainLoader(0)
}


const setMainLoader = (val)=>{
    if (val == 0) {
        document.querySelector('.loader-container').classList.add('under')
        // document.querySelector('.content').style.display = "block"
    }else{
        document.querySelector('.loader-container').classList.remove('under')
        // document.querySelector('.content').style.display = "none"
    }
}



// document.querySelectorAll("td button").forEach(button=>{
//     button.addEventListener("click", e=>{
//         alert("clicked!")
//     })
// })




// CSS class name for dark theme
document.querySelector('#toggleBtn').addEventListener('click', e=>{
    document.body.classList.toggle('dark-theme')
})

setMainLoader(0)