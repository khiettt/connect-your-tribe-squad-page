// opent en sluit de button
let filterBtn = document.querySelector('button')

filterBtn.addEventListener('click', function(){
    document.querySelector('.sorteren').classList.toggle('visible')
})
// filtert de button

// link naar profilecard
let card = document.querySelector('data-profile-card')