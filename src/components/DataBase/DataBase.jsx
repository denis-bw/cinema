import image_1 from 'assets/avatar-the-last-airbender.jpg';
import image_2 from 'assets/avatar.jpg';
import image_3 from 'assets/avengers.jpg';
import image_4 from 'assets/blade-runner.jpg';
import image_5 from 'assets/spider-man.jpg';
import image_6 from 'assets/werewolf.jpg';

const Movies = [
  {
    id: 1,
    title: 'Avatar The Last Airbender',
    imageUrl: image_1,
    genre: 'Fantasy',
    year: '2019',
    description: 'A young boy known as the Avatar must master the four elemental powers to save a world at war — and fight a ruthless enemy bent on stopping him.'
  },
  {
    id: 2,
    title: 'Avatar',
    imageUrl: image_2,
    genre: 'Drama',
    year: '2019',
    description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.'
  },
  {
    id: 3,
    title: 'Avengers',
    imageUrl: image_3,
    genre: 'Drama',
    year: '2019',
    description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.'
  },
  {
    id: 4,
    title: 'Blade Runner',
    imageUrl: image_4,
    genre: 'Drama',
    year: '2019',
    description: 'A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.'
  },
  {
    id: 5,
    title: 'Spider man',
    imageUrl: image_5,
    genre: 'Drama',
    year: '2019',
    description: 'After being bitten by a genetically-altered spider, a young man gains amazing abilities to become the superhero known as Spider-Man.'
  },
  {
    id: 6,
    title: 'Werewolf',
    imageUrl: image_6,
    genre: 'Drama',
    year: '2019',
    description: 'A practical man returns to his homeland, is attacked by a creature of folklore, and infected with a horrific disease his disciplined mind tells him can not possibly exist.'
  },
  {
    id: 7,
    title: 'Фільм 7',
    imageUrl: image_6,
    genre: 'Drama',
    year: '2019',
    description: 'A practical man returns to his homeland, is attacked by a creature of folklore, and infected with a horrific disease his disciplined mind tells him can not possibly exist.'
  },
  {
    id: 8,
    title: 'Фільм 8',
    imageUrl: image_6,
    genre: 'Drama',
    year: '2019',
    description: 'A practical man returns to his homeland, is attacked by a creature of folklore, and infected with a horrific disease his disciplined mind tells him can not possibly exist.'
  },
  {
    id: 9,
    title: 'Фільм 9',
    imageUrl: image_6,
    genre: 'Drama',
    year: '2019',
    description: 'A practical man returns to his homeland, is attacked by a creature of folklore, and infected with a horrific disease his disciplined mind tells him can not possibly exist.'
  },
  {
    id: 10,
    title: 'Фільм 10',
    imageUrl: image_6,
    genre: 'Drama',
    year: '2019',
    description: 'A practical man returns to his homeland, is attacked by a creature of folklore, and infected with a horrific disease his disciplined mind tells him can not possibly exist.'
  }
];

const Orders = [
  { film: 'Avatar', date: '2024-05-30', time: '14:00', seat: 'A1', price: '$10' },
  { film: 'Inception', date: '2024-06-01', time: '18:00', seat: 'B2', price: '$12' },
  { film: 'Titanic', date: '2024-06-03', time: '20:00', seat: 'C3', price: '$15' },
  { film: 'The Matrix', date: '2024-06-05', time: '22:00', seat: 'D4', price: '$20' },

];

export { Movies, Orders };