console.log('Client side js file is loaded !')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#message-1')
const msgTwo = document.querySelector('#message-2')

msgOne.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    msgOne.textContent = 'Loading...'
    msgTwo.textContent = ''

fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            msgOne.textContent = data.error
        } else {
            msgOne.textContent = 'Ville : ' + data.location
            msgTwo.textContent = 'Temperature : ' + data.forecast
        }
    })
})

})