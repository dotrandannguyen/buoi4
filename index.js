// // Lấy danh sách các Pokemon từ HTML
// const pokemonElements = document.querySelectorAll('.pokemon-box');

// // Tạo mảng thông tin các Pokemon
// const pokemonArray = [];

// for (let i = 0; i < pokemonElements.length; i++) {
//     const pokemonElement = pokemonElements[i];
    
//     // Lấy thông tin từng Pokemon
//     const id = pokemonElement.querySelector('.pokemon-stt').textContent.trim().replace('#', '');
//     const name = pokemonElement.querySelector('.pokemon-name').textContent.trim();
//     const img = pokemonElement.querySelector('img').getAttribute('src');
//     const typeElements = pokemonElement.querySelectorAll('.pokemon_type');
    
//     // Tạo mảng chứa các type
//     const types = [];
//     for (let j = 0; j < typeElements.length; j++) {
//         types.push(typeElements[j].textContent.trim());
//     }

//     // Thêm vào mảng Pokémon
//     pokemonArray.push({
//         id: parseInt(id),
//         name: name,
//         img: img,
//         types: types
//     });
// }

// // Log mảng Pokémon ra console
// console.log(pokemonArray);
