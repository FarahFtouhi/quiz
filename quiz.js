const quizQuestions = [
  {
    description:
      "A ninja with a dream of becoming the strongest ninja and leader of his village.",
    answer: "Naruto",
    point: 5,
    coverImg:
      "https://i.pinimg.com/564x/85/31/7b/85317b621555591cfdc1daebd40f399d.jpg",
    character:
      "https://photos.tf1.fr/780/780/perso-showpage-8efac4-fe1481-0@1x.png",
  },
  {
    description:
      "A high school student who gains the powers of a death god and uses them to bring justice.",
    answer: "Death Note",
    point: 10,
    coverImg:
      "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    character: "/assets/img/death.png",
  },
  {
    description:
      "A group of friends embark on an adventure to find a mysterious treasure.",
    answer: "One Piece",
    point: 2,
    coverImg:
      "https://www.manga-news.com/public/images/pix/dvd/690/One-piece-anime-east-blue.jpg",
    character: "/assets/img/onePiece.png",
  },
];
class Questions {
  constructor(description, answer, points, cover, character) {
    this.description = description;
    this.answer = answer;
    this.points = points;
    this.cover= cover;
    this.character = character;
  }
}
let obj ={}
this.points={
  
}
let naruto = new Questions(
  "A ninja with a dream of becoming the strongest ninja and leader of his village.",
  "naruto",
  5,
  "https://i.pinimg.com/564x/85/31/7b/85317b621555591cfdc1daebd40f399d.jpg",
  "https://photos.tf1.fr/780/780/perso-showpage-8efac4-fe1481-0@1x.png"
);
let deathnote = new Questions(
  "A high school student who gains the powers of a death god and uses them to bring justice.",
  "Death Note",
  10,
  "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
);
document.getElementById("question").innerHTML="A ninja with a dream of becoming the strongest ninja and leader of his village."
  
document.getElementById("answer").innerHTML="naruto"
document.getElementById("cover").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5Iae514loeF7MOo6kwRdOL0FuFlyKdl2toRrSirbL7c9bUXi8gW5Iwvv9L_yjJJdNI8&usqp=CAU"
document.getElementById("character").src="https://i.pinimg.com/736x/22/de/8d/22de8dbda07ba5571a97736b12905a17.jpg"


document.getElementById("question").innerHTML="A high school student who gains the powers of a death god and uses them to bring justice."
  
document.getElementById("answer").innerHTML="Death Note"
document.getElementById("cover").src="https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
document.getElementById("character").src="/assets/img/death.png"






