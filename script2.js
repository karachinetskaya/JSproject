const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let i = 0;

// while (i < 2) {
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените фильм?", "");
//   console.log(a);
//   console.log(b);

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("ok!");
//     i++;
//   } else {
//     console.log("Error");
//     i--;
//   }
// }

do {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените фильм?", "");
  console.log(a);
  console.log(b);

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("ok!");
    i++;
  } else {
    console.log("Error");
    i--;
  }
} while (i < 2);

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените фильм?", "");
//   console.log(a);
//   console.log(b);

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("ok!");
//   } else {
//     console.log("Error");
//     i--;
//   }
// }

if (personalMovieDB.count < 10) {
  console.log("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман!");
} else console.log("Произошла ошибка!");

console.log(personalMovieDB);
