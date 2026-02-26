// neem de class van form en sla het op als const
const form = document.querySelector('.filters')

// check of const bestaat
if (form) {

    const inputs = form.querySelectorAll('input, select')
    // console.log(inputs)
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            form.submit()
        })
    })
}
// filtert de button

// link naar profilecard
let card = document.querySelector('#data-profile-card')