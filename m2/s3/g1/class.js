// esercizio 1
class User{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    static ageMethod(user1, user2){
        if(user1.age > user2.age){
            return user1.firstName + " è più vecchio di " + user2.firstName
    }else{
        return user2.firstName + " è più vecchio di " + user1.firstName
    }
    }
}

let users = [
    new User('Mario', 'Rossi', '28', 'Rome'),
    new User('Aldo', 'Bianchi', '38', 'Milan'),
    new User('John', 'Smith', '50', 'London')
]

console.log(User.ageMethod(users[1], users[0]));

// esercizio 2

const pets = [];


class Pet{
    constructor(petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    
    haveSameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

const createForm = document.getElementById('petForm')
createForm.addEventListener('submit', function(event){
    event.preventDefault();
    let petName = document.getElementById('petName').value;
    let ownerName = document.getElementById('petOwner').value;
    let species = document.getElementById('petSpecies').value;
    let breed = document.getElementById('petBreed').value;
    let pet = new Pet(petName, ownerName, species, breed);
    pets.push(pet)

    const petListElement = document.getElementById('petList');
    const newPetListItem = document.createElement('li');
    newPetListItem.classList.add('list-group-item');
    newPetListItem.textContent = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
    petListElement.appendChild(newPetListItem);

    for (let i = 0; i < pets.length - 1; i++) {
        const otherPet = pets[i];
        if (pet.haveSameOwner(otherPet)) {
            alert(`Warning: ${pet.petName} and ${pet.petName} have the same owner!`);
        }
        }

        createForm.reset();
});
