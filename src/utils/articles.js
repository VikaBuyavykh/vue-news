const articles = [
  {
    id: 1,
    theme: 'Destinations',
    themeColor: '#3BBDC4',
    title: 'In Southeast England, White Cliffs and Fish',
    hasVideo: true,
    img: '/recommendations/cliffs.jpg',
    isSelected: true,
    author: {
      avatar: '/authors/traveler.png',
      name: 'Benjamin Turner',
      profession: 'Traveler'
    },
    section: 'recommendations'
  },
  {
    id: 2,
    theme: 'Cars',
    themeColor: '#6E99AE',
    title: 'Storm Has Car Dealers Doing Swift Business',
    hasVideo: false,
    img: '/recommendations/cars.jpg',
    isSelected: false,
    author: {
      avatar: '/authors/singer.jpg',
      name: 'Sir Elton John',
      profession: 'Singer'
    },
    section: 'recommendations'
  },
  {
    id: 3,
    theme: 'Movies',
    themeColor: '#AC8EE3',
    title: 'War Is Hell? In New Military Dramas, It’s One-Dimensional',
    hasVideo: false,
    img: '/recommendations/movie.jpg',
    isSelected: false,
    author: {
      avatar: '/authors/supermodel.jpg',
      name: 'Bella Hadid',
      profession: 'Supermodel'
    },
    section: 'recommendations'
  },
  {
    id: 4,
    theme: 'NFL',
    themeColor: '#FFA34D',
    title: '11 surprising stat rankings for active NFL players',
    hasVideo: true,
    img: '/recommendations/sport.jpg',
    isSelected: false,
    author: {
      avatar: '/authors/actor.jpg',
      name: 'Metthew McConaughey',
      profession: 'Actor'
    },
    section: 'recommendations'
  },
  {
    id: 5,
    theme: 'Tech Reviews',
    themeColor: '#3DC47E',
    title: 'The bookcases you can buy online and assemble yourself',
    hasVideo: false,
    img: '/recommendations/book.jpg',
    isSelected: false,
    author: {
      avatar: '/authors/journalist.jpg',
      name: 'Vladimir Pozner',
      profession: 'Journalist'
    },
    section: 'recommendations'
  },
  {
    id: 6,
    theme: 'Cars',
    themeColor: '#6E99AE',
    title: 'The joy of replicas: A $ 5 million car for $ 50,000',
    description:
      'The 31-year-old self-taught engineer and former amateur racer spends his days building artful recreations of one of most iconic sports cars',
    img: '/columns/car.png',
    author: {
      avatar: '/authors/engineer.png',
      name: 'Jessica Miller',
      quote:
        'Even as the ride-hailing service’s future remember it is that with ride-sharing people share a single ride'
    },
    section: 'columns',
    comments: 342,
    tag: 'main'
  },
  {
    id: 7,
    theme: 'Art & Design',
    themeColor: '#AC8EE3',
    title: 'Invisible ink: the weird world of tattoo removal – in pictures',
    img: '/columns/design.png',
    author: {
      avatar: '/authors/engineer.png',
      name: 'Sarah Jenkins'
    },
    section: 'columns',
    comments: 16,
    likes: 832,
    date: 'Sept 26',
    tag: 'popular'
  },
  {
    id: 8,
    title: 'Architecture is the thoughtful making of space',
    author: {
      avatar: '/authors/architect.png',
      name: 'David Williams',
      profession: 'Architect'
    },
    section: 'columns',
    tag: 'aside'
  },
  {
    id: 9,
    title: 'The details are not the details. They make the design.',
    author: {
      avatar: '/authors/designer.png',
      name: 'Alexandra Green',
      profession: 'Interior designer'
    },
    section: 'columns',
    tag: 'aside'
  },
  {
    id: 10,
    title: 'Live life to the fullest, and focus on the positive',
    author: {
      avatar: '/authors/coacher.png',
      name: 'Olivia Thompson',
      profession: 'Coacher'
    },
    section: 'columns',
    tag: 'aside'
  },
  {
    id: 11,
    title: '200+ Doomed Cats Saved From Euthanization',
    img: {
      link: '/columns/pet.png',
      alt: 'The picture of a cat'
    },
    section: 'columns',
    tag: 'additional'
  },
  {
    id: 12,
    title: 'Is Coffee Bad for Bones?',
    description: 'Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones',
    section: 'columns',
    date: 'Oct 15'
  },
  {
    id: 13,
    title: 'What We Manufacture',
    description: 'A global history of the factory and the modern world that all should read',
    section: 'columns',
    date: 'Oct 14'
  },
  {
    id: 14,
    title: 'It’s a Stressful World',
    description:
      'Can a cruise skeptic enjoy four days on the seas with his family and a bunch of princesses?',
    section: 'columns',
    date: 'Oct 14'
  },
  {
    id: 15,
    title: 'A Treat for Lemon Lovers',
    description: 'This tangerine, ginger and chocolate tart has verve, depth and a hint of spice',
    section: 'columns',
    date: 'Oct 13'
  },
  {
    id: 16,
    title: 'The Big Bloom or «How Flowering Plants Changed the World»',
    img: '/separator/flower.png',
    section: 'separator'
  },
  {
    id: 17,
    theme: 'Flights',
    themeColor: '#4592FF',
    title: 'Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines',
    description:
      'Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.',
    img: '/news/hands.png',
    date: 'Aug 6',
    comments: '342',
    likes: '830',
    section: 'news',
    tag: 'main'
  },
  {
    id: 18,
    theme: 'Food',
    themeColor: '#3BBDC4',
    title: 'Three Courses, 20 Euros: The Affordable Dining Renaissance in Paris',
    description:
      'The Los Angeles area, for all of its culinary diversity, has not historically been thought of as a haven for bread lovers. The area has a reputation as a place where gluten fears to tread.',
    img: '/news/food.png',
    date: 'Oct 7',
    comments: '27',
    likes: '129',
    isFavorite: true,
    section: 'news',
    tag: 'main'
  },
  {
    id: 19,
    theme: 'Science',
    themeColor: '#FF4F52',
    title: 'Watch the High-Flying Physics of a Plant’s Exploding Fruits',
    description:
      'Three undergradute physics majors and their professor worked out how the hairyflower wild petunia shoots tiny seeds more than 20 feet through the air',
    img: '/news/flower.png',
    date: 'Oct 11',
    comments: '30',
    likes: '284',
    section: 'news',
    tag: 'main'
  },
  {
    id: 20,
    theme: 'Health',
    themeColor: '#3BBDC4',
    title: 'How the Shape of Your Ears Affects What You Hear',
    description:
      'We’re able to locate sound because our brains grasp the shape of our ears. When that shape changes, we need time and practice to adapt. Ears are a peculiarly individual piece of anatomy.',
    img: '/news/sea.png',
    date: 'Oct 19',
    comments: '102',
    likes: '1,293',
    section: 'news',
    tag: 'main'
  },
  {
    id: 21,
    theme: 'Science',
    themeColor: '#FF4F52',
    title: 'Forests Protect the Climate. A Future With More Storms Would Mean Trouble.',
    description:
      'With an increase in extreme weather expected in the years to come, forests could be changed permanently as the world continues to warm',
    img: '/news/forest.png',
    date: 'Oct 22',
    comments: '5',
    likes: '82',
    section: 'news',
    tag: 'main'
  },
  {
    id: 22,
    theme: 'Art & Design',
    themeColor: '#AC8EE3',
    title: 'New Contemporary Institute Reverberates in Richmond’s Historic Landscape',
    description:
      'The center, which will open in April, takes a bold look at race and other social issues that still resonate in the region as well as the nation. A new Institute for Contemporary Art is set to open.',
    img: '/news/building.png',
    date: 'Oct 26',
    comments: '101',
    likes: '432',
    section: 'news',
    tag: 'main'
  },
  {
    id: 23,
    title: 'Office Meetings Leave the Office',
    img: '/news/girl.png',
    date: '15 minuts ago',
    section: 'news',
    tag: 'aside'
  },
  {
    id: 24,
    title: 'Experimental Vocal Music in Brooklyn',
    img: '/news/bird.png',
    date: '32 minuts ago',
    section: 'news',
    tag: 'aside'
  },
  {
    id: 25,
    title: 'Google’s Influence Over Think Tanks',
    img: '/news/hand.png',
    date: '38 minuts ago',
    section: 'news',
    tag: 'aside'
  },
  {
    id: 26,
    title: 'Homes for Sale in NYC and Connecticut',
    img: '/news/cloud.png',
    date: '53 minuts ago',
    section: 'news',
    tag: 'aside'
  },
  {
    id: 27,
    title: 'Are You There, Dad? It’s Me, Alice',
    img: '/news/book.png',
    date: '1 hour ago',
    section: 'news',
    tag: 'aside'
  },
  {
    id: 28,
    title: 'The New Punk Look: Lacy and Colorful',
    img: '/news/cage.png',
    date: '1 hour ago',
    section: 'news',
    tag: 'aside'
  },
  {
    id: 29,
    title: 'Sunday Best in Harlem and Brooklyn',
    img: '/news/bottles.png',
    date: '2 hours ago',
    section: 'news',
    tag: 'aside'
  },
  {
    id: 30,
    title: "Readers' Choice winners: Your wine country favorites",
    img: '/gallery/boat.png',
    author: {
      name: 'Sarah Jenkins',
      profession: 'Photographer',
      avatar: '/authors/photographer.jpg'
    },
    photos: '26',
    section: 'gallery',
    tag: 'slider'
  },
  {
    id: 31,
    title: "Readers' Choice winners: Your wine country favorites",
    img: '/gallery/boat.png',
    author: {
      name: 'Sarah Jenkins',
      profession: 'Photographer',
      avatar: '/authors/photographer.jpg'
    },
    photos: '26',
    section: 'gallery',
    tag: 'slider'
  },
  {
    id: 32,
    title: "Readers' Choice winners: Your wine country favorites",
    img: '/gallery/boat.png',
    author: {
      name: 'Sarah Jenkins',
      profession: 'Photographer',
      avatar: '/authors/photographer.jpg'
    },
    photos: '26',
    section: 'gallery',
    tag: 'slider'
  },
  {
    id: 33,
    title: "Readers' Choice winners: Your wine country favorites",
    img: '/gallery/boat.png',
    author: {
      name: 'Sarah Jenkins',
      profession: 'Photographer',
      avatar: '/authors/photographer.jpg'
    },
    photos: '26',
    section: 'gallery',
    tag: 'slider'
  },
  {
    id: 34,
    title: "Readers' Choice winners: Your wine country favorites",
    img: '/gallery/boat.png',
    author: {
      name: 'Sarah Jenkins',
      profession: 'Photographer',
      avatar: '/authors/photographer.jpg'
    },
    photos: '26',
    section: 'gallery',
    tag: 'slider'
  },
  {
    id: 35,
    title: 'Is Coffee Bad for Bones?',
    description: 'Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones',
    date: 'Oct 15',
    section: 'gallery'
  },
  {
    id: 36,
    title: 'What We Manufacture',
    description: 'A global history of the factory and the modern world that all should read',
    date: 'Oct 14',
    section: 'gallery'
  },
  {
    id: 37,
    theme: 'Careers',
    themeColor: '#6E99AE',
    title: 'Had a Job Interview but No Callback? Here’s What to Do',
    description:
      'Try to understand the culture of the company where you want to work and be authentic in your interview, experts emphasize',
    img: '/authors/photographer.jpg',
    section: 'gallery',
    tag: 'main'
  }
]

export default articles
