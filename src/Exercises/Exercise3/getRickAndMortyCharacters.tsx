import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api/character/";

const selectedCharacters: string[] = [
  "Rick Sanchez",
  "Morty Smith",
  "Summer Smith",
  "Beth Smith",
  "Jerry Smith",
];

async function getRickAndMortyCharacters(selectedCharacters: string[]) {
  const filteredCharacterData: object[] = [];
    for (const character of selectedCharacters) {
      await axios
        .get(`${baseURL}?name=${character}&status=alive`)
        .then((response) => {
          const characterData = response.data.results[0];
          filteredCharacterData.push({
            nome: characterData.name,
            genero: characterData.gender === "Female" ? "Mulher" : "Homem",
            avatar: characterData.image,
            especie: characterData.species === "Human" ? "Humano" : "",
          });
        });
    }
  return filteredCharacterData;
}

export default getRickAndMortyCharacters;