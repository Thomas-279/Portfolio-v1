import todolist from 'src/assets/images/img-projects/todolist.png';
import converter from 'src/assets/images/img-projects/converter.png';
import search from 'src/assets/images/img-projects/search.png';
import yabonprono from 'src/assets/images/img-projects/yabonprono.png';
import immobilier from 'src/assets/images/img-projects/immobilier.png';

export default [
  {
    id: 5,
    title: 'Vitrine agent immobilier',
    content: 'React/Redux - TailwindUi - Strapi - PSQL',
    img: `${immobilier}`,
    slug: 'https://celia-dreux.netlify.app/',
  },
  {
    id: 4,
    title: 'Yabon-prono',
    content: 'React - Redux - Node/Express - PSQL',
    img: `${yabonprono}`,
    slug: 'http://yabon-prono.surge.sh/',
  },
  {
    id: 3,
    title: 'Todolist',
    content: 'React - Sass',
    img: `${todolist}`,
    slug: 'https://github.com/Thomas-279/Todolist-React',
  },
  {
    id: 2,
    title: 'Converter',
    content: 'React - Sass',
    img: `${converter}`,
    slug: 'https://github.com/Thomas-279/Converter-React',
  },
  {
    id: 1,
    title: 'Github search',
    content: 'React - Sass - Semantic-Ui - API',
    img: `${search}`,
    slug: 'https://github.com/Thomas-279/Github-search-api',
  },
];
