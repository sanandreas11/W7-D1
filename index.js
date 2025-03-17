class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }
  ageComparison = function (user2) {
    if (this.age > user2.age) {
      console.log(this.firstName + " è più vechio di " + user2.firstName)
    } else if (this.age < user2.age) {
      console.log(this.firstName + " è più vechio di " + user2.firstName)
    } else {
      console.log(
        this.firstName + " e " + user2.firstName + " hanno la stessa età"
      )
      console.log(ageComparison(userx, usery))
    }
  }
}
const userx = new User("Mario", "Rossi", 33, "Corso Italia,2")

const usery = new User("Luigi", "Verdi", 35, "Cammino Germania,1")

// secondo esercizio
// prendo i dati dal form
const petNameInput = document.getElementById("petInput")
const ownerNameInput = document.getElementById("ownerInput")
const speciesInput = document.getElementById("speciesInput")
const breedInput = document.getElementById("breedInput")

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
  ownerComparison = function (pet2) {
    if ((this.ownerName = pet2.ownerName)) return true
  }
}

form = document.getElementById("form")

form.addEventListener("submit", function (e) {
  // logica sull'invio del form
  // per PRIMA COSA neutralizzare il comportamento di default
  e.preventDefault()
  // creazione dei pet
  const pet = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  )
  console.log("ANIMALETTO SALVATO", pet)
  form.reset()
})
