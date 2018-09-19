export default function() {
  this.namespace = '/api';


  let books = [{
          type: 'books',
          id: 'armor',
          attributes: {
            title: "Armor",
            author: "John Steakly",
            city: "San Francisco",
            genre: "Sci-fi, Action, Solitude",
            audience:"Young Adult",
            rating: 4.12,
            image: "/assets/images/armorimg.jpg",
            description: "First person narrative of a soldier dropped on a planet called Banshee alone in his powered exoskeleton suit."
          }
        }, {
        type: 'books',
        id: 'battleh',
        attributes:{
          title: "Battle Hymn of the Tiger Mother",
          author: "Amy Chua",
          city: "San Francisco",
          genre: "Autobiography, Psycology, Parenting",
          audience:"Young Adult",
          rating: 3.63,
          image: "/assets/images/battlehimg.jpg",
          description: "Amy Chua explains her story of raising her two daughters through the traditional Chinese parenting method."
      }
    }, {
    type: 'books',
      id: 'enders',

        attributes:{
          title: 'Ender\'s Game',
          author: 'Orson Scott Card',
          city: 'Seattle',
          genre: 'Classic, Sci-fi, Action, Solitude',
          audience:'Teen',
          rating: 4.3,
          image: '/assets/images/endersgameimg.jpg',
          description: 'Ender is a gifted intelligent young boy who is chosen to train for the space military. He faces being isolated from his family and other students and learns to think of new strategies to win \'games\''
      }
    },{
      type: 'books',
      id: 'fahr',
      attributes:{
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      city: 'San Francisco',
      genre: 'Classic, Fiction, Philosophy, Dystopian Society',
      audience:'Teen',
      rating: 3.98,
      image: '/assets/images/fahimg.jpg',
      description: 'Futuristic society where books are banned and firemen carry flamethrowers, Montag has been a proud fireman until he discovers the books he is supposed to burn.'
    }
  },{
  type: 'books',
    id: 'fifth',
    attributes:{
      title: 'Fifth Business',
      author: 'Robertson Davies',
      city: 'Seattle',
      genre: 'Classic, Philosophy',
      audience:'Young Adult',
      rating: 4.04,
      image: '/assets/images/fifthimg.jpg',
      description: 'Ramsay refers to his life as fifth business: he does not get the glory of being the hero. He learns that each person plays the role that they are given, and being fifth business is not so bad.'
    }
  },{
      type: 'books',
        id: 'handmaid',
        attributes:{
          title: 'Handmaid\'s Tale',
          author: 'Margaret Atwood',
          city: 'Seattle',
          genre: 'Classic, Futuristic Fiction, Post Apocalyptic Society, Dystopian Society',
          audience:'Young Adult',
          rating: 4.09,
          image: '/assets/images/handmaidimg.jpg',
          description: 'After a nuclear disaster causes infertility rates to rise, the society changes to a totalitarian governing system causing the loss of free will. Offred is a handmaid whose job in this new society is to bear children for the wealthy after losing her own family.'
        }

      },{
          type: 'books',
        id: 'hobbit',
        attributes:{
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        city: 'San Francisco',
        genre: 'Adventure, Fantasy, Action',
        audience:'Teen',
        rating: 4.26,
        image: '/assets/images/hobbitimg.jpg',
        description: 'Bilbo Baggins is a comfort seeking hobbit who gets mixed with a bunch of dwarves and a wizard to go on a journey to retieve gold from a dragon.'
      }},
      {
        type: 'books',
          id: 'hp',
          attributes:{
            title: 'Harry Potter',
            author: 'J.K. Rowling',
            city: 'Seattle',
            genre: 'Classic, Fantasy, Adventure',
            audience:'Children, Teen',
            rating: 4.46,
            image: '/assets/images/hp2img.jpg',
            description: 'Harry is a neglected orphan boy who learns about the wizarding world after he gets his letter to Hoggwarts. His school journey involves learning to use magic and fighting evil with his best friends'
          }
        },{
            type: 'books',
          id: 'mbird',
          attributes:{
          title: 'To Kill a Mocking Bird',
          author: 'Harper Lee',
          city: 'San Francisco',
          genre: 'Classic, Fiction, Philosophy',
          audience:'Young Adult',
          rating: 4.27,
          image: '/assets/images/mbirdimg.jpg',
          description: 'Jean-Louise learns that there is more to people than what meets the eye.'
        }
      },{
          type: 'books',
            id: 'tgc',
            attributes:{
              title: 'The Golden Compass',
              author: 'Philip Pullman',
              city: 'Seattle',
              genre: 'Fantasy, Action, Adventure',
              audience:'Children, Teen',
              rating: 4.04,
              image: '/assets/images/tgcimg.jpg',
              description: 'In a world where humans have their daemon and dust is a magical phenomenon, Lyra learns that some organisation is abducting children when her friend goes missing. She travels north to find out why.'
            }
          },{
            type: 'books',
              id: 'giver',
              attributes:{
                title: 'The Giver',
                author: 'Lois Lowry',
                city: 'Seattle',
                genre: 'Classic, Fiction, Dystopian Society',
                audience:'Children, Teen',
                rating: 4.12,
                image: '/assets/images/thegiverimg.jpg',
                description: 'The world Jonas lives in is well organised. Children are assigned their jobs based on thier volunteering and family units consist of a mother, father, son and daughter. However Jonas learns there are some things that are hidden and that choice should be an option.'
              }
            },{
                type: 'books',
              id: 'tuesday',
              attributes:{
              title: 'Tuesdays with Morrie',
              author: 'Mitch Albom',
              city: 'San Francisco',
              genre: 'Classic, Biography, Philosophy',
              audience:'Young Adult',
              rating: 4.08,
              image: '/assets/images/tuesdaysimg.jpg',
              description: 'After many years, Mitch visits Morrie, his university professor and mentor, after he learns that Morrie is diagnosed with ALS. He again starts learning from his mentor and friend life\'s simple lessons.'
              }
            },{
            type: 'books',
              id: 'monte',
              attributes:{
                title: "The Count of Monte Cristo",
                author: "Alexandre Dumas",
                city: "Seattle",
                genre: "Classic, Solitude, Adventure, Philosophy",
                audience:"Young Adult",
                rating: 4.23,
                image: "/assets/images/monteimg.jpg",
                description: "After having all that Edmond ever wanted fall into place, it is all taken away from him due to jealousy and coruption. Edmond vows to seek revenge on those who caused it."

            }
          }];

    this.get('/books', function(db, request) {
      if(request.queryParams.genre !== undefined) {
        let filteredBooks = books.filter(function(i) {
          return i.attributes.genre.toLowerCase().indexOf(request.queryParams.genre.toLowerCase()) !== -1;
        });
        return { data: filteredBooks };
      } else {
        return { data: books };
      }
    });

    // Find and return the provided book from our list above
     this.get('/books/:id', function (db, request) {
       return { data: books.find((book) => request.params.id === book.id) };
     });


  }
