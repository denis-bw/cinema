import image_1 from 'assets/avatar.jpg';
import image_2 from 'assets/avatar-the-last-airbender.jpg';
import image_3 from 'assets/avengers.jpg';
import image_4 from 'assets/blade-runner.jpg';
import image_5 from 'assets/spider-man.jpg';
import image_6 from 'assets/werewolf.jpg';

const Movies = [
  { id: 1, title: 'Фільм 1', imageUrl: image_1, genre: 'Drama', year: '2019' },
  { id: 2, title: 'Фільм 2', imageUrl: image_2, genre: 'Drama', year: '2019' },
  { id: 3, title: 'Фільм 3', imageUrl: image_3, genre: 'Drama', year: '2019' },
  { id: 4, title: 'Фільм 4', imageUrl: image_4, genre: 'Drama', year: '2019' },
  { id: 5, title: 'Фільм 5', imageUrl: image_5, genre: 'Drama', year: '2019' },
  { id: 6, title: 'Фільм 6', imageUrl: image_6, genre: 'Drama', year: '2019' },
  { id: 7, title: 'Фільм 6', imageUrl: image_6, genre: 'Drama', year: '2019' },
  { id: 8, title: 'Фільм 6', imageUrl: image_6, genre: 'Drama', year: '2019' },
  { id: 9, title: 'Фільм 7', imageUrl: image_6, genre: 'Drama', year: '2019' },
];

const Orders = [
  { film: 'Avatar', date: '2024-05-30', time: '14:00', seat: 'A1', price: '$10' },
  { film: 'Inception', date: '2024-06-01', time: '18:00', seat: 'B2', price: '$12' },
  { film: 'Titanic', date: '2024-06-03', time: '20:00', seat: 'C3', price: '$15' },
  { film: 'The Matrix', date: '2024-06-05', time: '22:00', seat: 'D4', price: '$20' },

];

export { Movies, Orders };