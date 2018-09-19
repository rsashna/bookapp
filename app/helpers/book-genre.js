import { helper } from '@ember/component/helper';

const genreTypes = [
  'Sci-fi',
  'Classic',
  'Fiction',
  'Autobiography',
  'Biography',
  'Philosophy',
  'Psycology',
  'Post Apocalyptic Society',
  'Solitude',
  'Action',
  'Parenting',
  'Dystopian Society',
  'Adventure',
  'Undeclared',


];

export function genreType(params, hash) {
return params;
}

// export function genreType([genreType]) {
//   if (genreTypes.includes(genreType)) {
//     return 'Fiction';
//   }
//
// }

export default helper(genreType);
