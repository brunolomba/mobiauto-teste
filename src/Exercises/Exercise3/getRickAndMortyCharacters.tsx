import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api/character/";

const selectedCharacters: string[] = [
  "rick",
  "morty",
  "summer",
  "beth",
  "jerry",
];

function getRickAndMortyCharacters() {
  const arrayCharactersFiltred: any = [];
  try {
    for (const character of selectedCharacters) {
      axios
        .get(`${baseURL}?name=${character}&status=alive`)
        .then((response) => {
          const characterBase = response.data.results[0];
          arrayCharactersFiltred.push({
            nome: characterBase.name,
            genero: characterBase.gender,
            avatar: characterBase.image,
            especie: characterBase.species,
          });
        });
    }
    console.log("resp", arrayCharactersFiltred);
    return <div>teste</div>;
  } catch (error) {
    console.error(error);
  }
}

getRickAndMortyCharacters();
// module.exports = getRickAndMortyCharacters;
export default getRickAndMortyCharacters;
