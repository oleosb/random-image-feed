let acessKey = 'yuFSeH78FfOHbEAtTH6xTMR0MpbW13F2pMO62f1lw6Q'
let endPoint = `https://api.unsplash.com/photos/random/?&count=30&client_id=${acessKey}`
let container = document.querySelector('.container')

fetch(endPoint)
        .then(response => {
                return response.json()
        })
        .then(jsonData => {
                let imgs = []

                console.log(jsonData)

                for (let i = 0; i < 40; i++){
                        imgs[i] = document.createElement('div')
                        imgs[i].classList.add('img')
                        imgs[i].style.backgroundImage = `url('${jsonData[i].urls.regular}')`
                        
                        container.appendChild(imgs[i])
                }
        })