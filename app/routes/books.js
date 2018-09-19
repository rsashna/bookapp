import Route from '@ember/routing/route';


export default Route.extend({
// model() {
//
// return this.store.findAll('book');

    // return [
    //   //TODO ADD A QUOTE FROM EACH BOOK
    //   {
    //   id: 'armor',
    //
    //   title: 'Armor',
    //   author: 'John Steakly',
    //   city: 'San Francisco',
    //   genre: 'Sci-fi, Action, Solitude',
    //   audience:'Young Adult',
    //   rating: 4.12,
    //   image: '/assets/images/armorimg.jpg',
    //   description: 'First person narrative of a soldier dropped on a planet called Banshee alone in his powered exoskeleton suit.'
    // },{
    //
    //   id: 'androids',
    //
    //     title: 'Do Androids Dream of Electric Sheep',
    //     author: 'Philip K. Dick',
    //     city: 'Seattle',
    //     genre: 'Sci-fi, Philosophy, Post Apocaliptic Society',
    //     audience:'Teen',
    //     rating: 4.08,
    //     image: '/assets/images/androidsimg.jpg',
    //     description: 'Androids are manufactured for hosehold work for residents on Mars, but some are escaping to Earth. The story is from a bounty hunter\'s point of view whose job is to hunt them down.'
    //   },
    //   {
    //   id: 'battleh',
    //   title: 'Battle Hymn of the Tiger Mother',
    //   author: 'Amy Chua',
    //   city: 'San Francisco',
    //   genre: 'Autobiography, Psycology, Parenting',
    //   audience:'Young Adult',
    //   rating: 3.63,
    //   image: '/assets/images/battlehimg.jpg',
    //   description: 'Amy Chua explains her story of raising her two daughters through the traditional Chinese parenting method.'
    // },
    // {
    //
    //   id: 'enders',
    //
    //     title: 'Ender\'s Game',
    //     author: 'Orson Scott Card',
    //     city: 'Seattle',
    //     genre: 'Classic, Sci-fi, Action, Solitude',
    //     audience:'Teen',
    //     rating: 4.3,
    //     image: '/assets/images/endersgameimg.jpg',
    //     description: 'Ender is a gifted intelligent young boy who is chosen to train for the space military. He faces being isolated from his family and other students and learns to think of new strategies to win \'games\''
    //   },
    //   {
    //   id: 'fahr',
    //   title: 'Fahrenheit 451',
    //   author: 'Ray Bradbury',
    //   city: 'San Francisco',
    //   genre: 'Classic, Fiction, Philosophy, Distopian Society',
    //   audience:'Teen',
    //   rating: 3.98,
    //   image: '/assets/images/fahimg.jpg',
    //   description: 'Futuristic society where books are banned and firemen carry flamethrowers, Montag has been a proud fireman until he discovers the books he is supposed to burn.'
    //   },
    //   {
    //
    //   id: 'fifth',
    //
    //     title: 'Fifth Business',
    //     author: 'Robertson Davies',
    //     city: 'Seattle',
    //     genre: 'Classic, Philosophy',
    //     audience:'Young Adult',
    //     rating: 4.04,
    //     image: '/assets/images/fifthimg.jpg',
    //     description: 'Ramsay refers to his life as fifth business: he does not get the glory of being the hero. He learns that each person plays the role that they are given, and being fifth business is not so bad.'
    //   },
    //   {
    //
    //     id: 'handmaid',
    //
    //       title: 'Handmaid\'s Tale',
    //       author: 'Margaret Atwood',
    //       city: 'Seattle',
    //       genre: 'Classic, Futuristic Fiction, Post Apocaliptic Society, Distopian Society',
    //       audience:'Young Adult',
    //       rating: 4.09,
    //       image: '/assets/images/handmaidimg.jpg',
    //       description: 'After a nuclear disaster causes infertility rates to rise, the society changes to a totalitarian governing system causing the loss of free will. Offred is a handmaid whose job in this new society is to bear children for the wealthy after losing her own family.'
    //     },
    //     {
    //     id: 'hobbit',
    //     title: 'The Hobbit',
    //     author: 'J.R.R. Tolkien',
    //     city: 'San Francisco',
    //     genre: 'Adventure, Fantasy, Action',
    //     audience:'Teen',
    //     rating: 4.26,
    //     image: '/assets/images/hobbitimg.jpg',
    //     description: 'Bilbo Baggins is a comfort seeking hobbit who gets mixed with a bunch of dwarves and a wizard to go on a journey to retieve gold from a dragon.'
    //     },
    //     {
    //
    //     id: 'hp',
    //
    //       title: 'Harry Potter',
    //       author: 'J.K. Rowling',
    //       city: 'Seattle',
    //       genre: 'Classic, Fantasy, Adventure',
    //       audience:'Children, Teen',
    //       rating: 4.46,
    //       image: '/assets/images/hp2img.jpg',
    //       description: 'Harry is a neglected orphan boy who learns about the wizarding world after he gets his letter to Hoggwarts. His school journey involves learning to use magic and fighting evil with his best friends'
    //     },
    //     {
    //     id: 'mbird',
    //     title: 'To Kill a Mocking Bird',
    //     author: 'Harper Lee',
    //     city: 'San Francisco',
    //     genre: 'Classic, Fiction, Philosophy',
    //     audience:'Young Adult',
    //     rating: 4.27,
    //     image: '/assets/images/mbirdimg.jpg',
    //     description: 'Jean-Louise learns that there is more to people than what meets the eye.'
    //     //You never really understand a person until you consider things from his point of view...until you climb into his skin and walk around in it.
    //     },
    //     {
    //
    //     id: 'tgc',
    //
    //       title: 'The Golden Compass',
    //       author: 'Philip Pullman',
    //       city: 'Seattle',
    //       genre: 'Fantasy, Action, Adventure',
    //       audience:'Children, Teen',
    //       rating: 4.04,
    //       image: '/assets/images/tgcimg.jpg',
    //       description: 'In a world where humans have their daemon and dust is a magical phenomenon, Lyra learns that some organisation is abducting children when her friend goes missing. She travels north to find out why.'
    //     },
    //     {
    //
    //       id: 'giver',
    //
    //         title: 'The Giver',
    //         author: 'Lois Lowry',
    //         city: 'Seattle',
    //         genre: 'Classic, Fiction, Distopian Society',
    //         audience:'Children, Teen',
    //         rating: 4.12,
    //         image: '/assets/images/thegiverimg.jpg',
    //         description: 'The world Jonas lives in is well organised. Children are assigned their jobs based on thier volunteering and family units consist of a mother, father, son and daughter. However Jonas learns there are some things that are hidden and that choice should be an option.'
    //       },
    //       {
    //       id: 'tuesday',
    //       title: 'Tuesdays with Morrie',
    //       author: 'Mitch Albom',
    //       city: 'San Francisco',
    //       genre: 'Classic, Biography, Philosophy',
    //       audience:'Young Adult',
    //       rating: 4.08,
    //       image: '/assets/images/tuesdaysimg.jpg',
    //       description: 'After many years, Mitch visits Morrie, his university professor and mentor, after he learns that Morrie is diagnosed with ALS. He again starts learning from his mentor and friend life\'s simple lessons.'
    //       },
    //       {
    //
    //       id: 'monte',
    //
    //         title: 'The Count of Monte Cristo',
    //         author: 'Alexandre Dumas',
    //         city: 'Seattle',
    //         genre: 'Classic, Solitude, Adventure, Philosophy',
    //         audience:'Young Adult',
    //         rating: 4.23,
    //         image: '/assets/images/monteimg.jpg',
    //         description: 'After having all that Edmond ever wanted fall into place, it is all taken away from him due to jealousy and coruption. Edmond vows to seek revenge on those who caused it.'
    //       },
    // ];

  // }
});
