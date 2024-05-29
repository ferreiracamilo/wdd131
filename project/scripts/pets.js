const pets = [
    {
        imageurl: "images/Optimized/lost-pets-images/lost-pet-1.jpg",
        name: "Preston",
        age: "13 years",
        animal: "Dog",
        status: "Missing",
        telephone: 2092798537
    },
    {
        imageurl: "images/Optimized/lost-pets-images/lost-pet-2.jpg",
        name: "Jeff",
        age: "7 years",
        animal: "Dog",
        status: "Missing",
        telephone: 6167552084
    },
    {
        imageurl: "images/Optimized/lost-pets-images/lost-pet-3.jpg",
        name: "Mr.Kit",
        age: "6 months",
        animal: "Cat",
        status: "Adoption",
        telephone: 4436072008
    },
    {
        imageurl: "images/Optimized/lost-pets-images/lost-pet-4.jpg",
        name: "Jack",
        age: "5 years",
        animal: "Dog",
        status: "Missing",
        telephone: 5056460668
    },
    {
        imageurl: "images/Optimized/lost-pets-images/lost-pet-5.jpg",
        name: "Coco",
        age: "1 year",
        animal: "Bunny",
        status: "Missing",
        telephone: 3513213530
    },
    {
        imageurl: "images/Optimized/lost-pets-images/lost-pet-6.jpg",
        name: "Bloopy",
        age: "4 years",
        animal: "Dog",
        status: "Adoption",
        telephone: 3513213532
    },
    {
        imageurl: "images/Optimized/lost-pets-images/lost-pet-7.jpg",
        name: "Capuchino",
        age: "7 months",
        animal: "Dog",
        status: "Adoption",
        telephone: 2164690106
    },
    {
        imageurl: "images/Optimized/lost-pets-images/lost-pet-8.jpg",
        name: "Pierina",
        age: "3 years",
        animal: "Dog",
        status: "Missing",
        telephone: 2154599921
    },
    {
        imageurl: "images/Optimized/lost-pets-images/lost-pet-9.jpg",
        name: "Felix",
        age: "4 years",
        animal: "Cat",
        status: "Adoption",
        telephone: 5056225748
    },
    {
        imageurl: "images/Optimized/lost-pets-images/lost-pet-10.jpg",
        name: "Poke",
        age: "8 years",
        animal: "Dog",
        status: "Adoption",
        telephone: 5056448464
    },
    {
        imageurl: "images/Optimized/lost-pets-images/lost-pet-11.jpg",
        name: "Beans",
        age: "6 years",
        animal: "Cat",
        status: "Missing",
        telephone: 5056465536
    },
    {
        imageurl: "images/Optimized/lost-pets-images/lost-pet-12.jpg",
        name: "Zippy",
        age: "3 years",
        animal: "Ferret",
        status: "Adoption",
        telephone: 5056447252
    }
];

function createPetCard(pets){
    document.querySelector(".grid-pets").innerHTML = "";
    pets.forEach(pet => {
        let card = document.createElement("article");
        let image = document.createElement("img");
        let name = document.createElement("h1");
        let age = document.createElement("p");
        let animal = document.createElement("p");
        let status = document.createElement("p");
        let contact = document.createElement("a");

        card.setAttribute("class","pet-card");
        image.setAttribute("src",pet.imageurl);
        image.setAttribute("alt",`${pet.name} ${pet.status} ${pet.animal}`);
        image.setAttribute("loading","lazy");
        name.textContent = pet.name;
        age.textContent = `Age: ${pet.age}`;
        animal.textContent = `Animal: ${pet.animal}`;
        status.textContent = `Status: ${pet.status}`;
        contact.setAttribute("class","pet-contact-button");
        contact.setAttribute("href",`tel:${pet.telephone}`);
        contact.textContent = "Contact";

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(age);
        card.appendChild(animal);
        card.appendChild(status);
        card.appendChild(contact);

        document.querySelector(".grid-pets").appendChild(card);
    });
}

createPetCard(pets);
