const modalCreator = ()=>{
    // const modal = `        
    //     <div class="modal">

    //     </div>`
    modal = document.createElement('div')
    modal.classList.add('modal')
    modal.innerHTML = `
            <div class="modal-header">
                <span class="title"> Title </span>
                <div class="close-modal-container"><button class="close-modal"><i class="fa-solid fa-circle-xmark fa-xl"></i></button></div>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer"></div>
            `
    document.body.append(modal)
    // modalHeader = document.createElement('div')
    // modalHeader.classList.add('modal-header')

    // modalBody = document.createElement('div')
    // modalBody.classList.add('modal-body')

    // modalFooter = document.createElement('div')
    // modalFooter.classList.add('modal-footer')
}

modalCreator()