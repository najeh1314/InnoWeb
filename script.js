const nbRows = 13;
const nColomnsBesides = 4;
const nbColomnsCentral = 15;
// Initialiser un tableau de films
const filmsDisponibles = [
    'Dune (2023)',
    'Spider-Man: No Way Home',
    'The Matrix Resurrections',
    'Eternals',
    'No Time to Die',
    'Inception',
    'The Godfather',
    'Star Wars: Episode IV - A New Hope',
    'The Shawshank Redemption',
    'Pulp Fiction',
    'The Dark Knight',
    'Titanic',
    'Jurassic Park',
    'Avatar',
    'Gone with the Wind'
];
const gauche = document.getElementById("gauche")
const droite = document.getElementById("droite")
const central = document.getElementById("central")
const priceValue = document.getElementById("price-value")
const priceEl = document.getElementById("price")
const validateBtn = document.getElementById("validate-btn")
const filmListEl = document.getElementById('film-list')

let price = 0;
upLoadFilmList();
priceEl.style.visibility = 'hidden'
remplir(gauche, nbRows, nColomnsBesides);
remplir(central, nbRows, nbColomnsCentral);
remplir(droite, nbRows, nColomnsBesides);
validateBtn.addEventListener('click', validateSelection)

// function remplir(container, nbRows, nbColums){
//     for(let i=1; i<nbRows+1; i++){
//         const row = document.createElement('div')
//         row.classList.add('row')
//         for( let j=1; j<nbColums; j++){
//             const seat = document.createElement('div')
//             seat.classList.add('seat')
//             seat.classList.add('notClicked')
//             seat.addEventListener('click', () => clickOnSeat(seat))
//             row.appendChild(seat)
//         }
//         container.appendChild(row)
//     }
// }
function remplir(container, nbRows, nbColums){
    for(let i=1; i<nbRows+1; i++){
        const row = document.createElement('div')
        row.classList.add('row')
        for( let j=1; j<=nbColums; j++){
            const seat = document.createElement('div')
            seat.classList.add('seat')
            seat.classList.add('notClicked')
            seat.addEventListener('click', () => clickOnSeat(seat))
            row.appendChild(seat)
        }
        container.appendChild(row)
    }
}
function clickOnSeat(seat){
    priceEl.style.visibility = 'visible'
    if(!(seat.classList.contains('reserved'))){
        if(seat.classList.contains('notClicked')){
            seat.classList.remove('notClicked')
            seat.classList.add('clicked')
            seat.style.backgroundColor = 'grey'
            price = price + 17
            priceValue.textContent = price
        }
        else if(seat.classList.contains('clicked')){
            seat.classList.remove('clicked')
            seat.classList.add('notClicked')
            seat.style.backgroundColor = 'green'
            price = price - 17
            priceValue.textContent = price
        }
    }
}
function validateSelection(){
    selectedSeat = document.querySelectorAll('.seat.clicked')
    selectedSeat.forEach(seat => {
        seat.classList.add('.reserved')
        seat.classList.remove('clicked')
        seat.classList.remove('notClicked')
        seat.style.backgroundColor='black'
    });
    price=0
    priceEl.style.visibility = 'hidden'

} 
function upLoadFilmList(){
    for(const film of filmsDisponibles){
        const option = document.createElement('option')
        option.value = film
        option.textContent = film
        filmListEl.appendChild(option)
    }
}