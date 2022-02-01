// Minecraft Furnace Images
import MinecraftFurnace from '../../public/images/portfolio/minecraft/product.png'
import MinecraftStateMachine from '../../public/images/portfolio/minecraft/statemachine.png'
// Tends
import ParkerPoints from '../../public/images/portfolio/tends/parkerpoints.webp'
import ParkerTrend from '../../public/images/portfolio/tends/trend.png'
// State Management
import RPGPortfolio from '../../public/images/portfolio/state/rpgportfolio.jpg'
import PortfolioShop from '../../public/images/portfolio/state/portfolioshop.png'
// Huffman
import HuffmanCLI from '../../public/images/portfolio/huffman/cli.png'
import HuffmanDecoded from '../../public/images/portfolio/huffman/decoded.png'
// Participation
import ParticipationRating from '../../public/images/portfolio/participation/rating.png'
import ParticipationDiagram from '../../public/images/portfolio/participation/diagram.png'

export type PortfolioItem = {
  title: string
  description: string
  emoji: string
  images?: StaticImageData[]
  links: { text: string; url: string }[]
}

export const portfolio: PortfolioItem[] = [
  {
    title: 'tends',
    description:
      'My SaaS project, "tends," is an application that helps users manage "quantities" in their lives (i.e., daily calories, screen time, exercise time, etc.). "tends" was the project that I worked on in an iteration of egghead.io\'s Portfolio Project Club. The goal of the club was to design, build, and document a SaaS application that would serve as an impressive addition to our business-oriented developer portfolios. I built this project using React, TypeScript, and Next.js on the frontend, and I integrated with Stripe and Firebase on the backend. This project was my first stab at developing a fullstack application, and I\'m really proud of how it turned out. Users could log into the service using with either their Google or Github account, and their "quantities" would be tracked and stored in the Firestore database. I also implemented a feature called "trends" which allowed users to visualize their habit data. Throughout the club, we learned about the importance of documenting the design and development processes. At the end of the club, I produced a technical case study for my project that is now published on egghead.io.',
    emoji: '📈',
    images: [ParkerPoints, ParkerTrend],
    links: [
      {
        text: 'Technical Case Study published on egghead.io!',
        url:
          'https://egghead.io/blog/saas-application-with-next-js-stripe-and-firebase',
      },
      {
        text: 'Related article - sharing state in Next.js with useContext',
        url:
          'https://parkerlandon.com/posts/programming/share-state-in-your-next-js-application-with-usecontext',
      },
    ],
  },
  {
    title: 'State Management Project Club',
    description:
      'Over a 6 week period, from July to August of 2021, I led a Portfolio Project Club in the egghead.io community. According to a survey of egghead.io users, State Management is one of the most widely recognized challengies in application development. Moreover, state management is vital to any web application. Thus, the objective of the project club was to design, build, and document a business-oriented portfolio project that demonstrates a mastery of State Management in React. At the end of the 6 weeks, club members presented functional projects that would make for impressive additions to their resumes. The project that I worked on was an RPG Cutscene built with React. The animations, events, and dialogue are all controlled by state machines created with the XState library. Through the experience of leading this club, I was introduced by the club members to a variety of state management solutions.',
    emoji: '🌵',
    images: [RPGPortfolio, PortfolioShop],
    links: [
      {
        text: 'Check out the deployed project!',
        url: 'https://rpg-portfolio.vercel.app/',
      },
      {
        text: 'RPG Portfolio GitHub Repository',
        url: 'https://github.com/ParkerGits/RPG-Portfolio',
      },
      {
        text: 'Related article - TypeScript with XState and React Context',
        url:
          'https://parkerlandon.com/posts/programming/using-typescript-with-xstate-and-react-context',
      },
    ],
  },
  {
    title: 'Participation App',
    description:
      "With guidance from a Seattle Pacific University professor, I am producing an application for professors who track student participation in their courses. This app randomly selects a student who is enrolled in the course, and allows the professor to score that student's participation. Student scores are then stored in a PostgreSQL database and accessed via backend queries. This way, the professor may manage class participation via the app. Eventually, I would like to implement integration with Canvas LMS; this will provide authentication as well as data about the professor's classes and students. Currently, the application consists of a frontend built with React and Next.js, and a backend built with tRPC and Prisma ORM. The goal is to also create a mobile frontend with Expo and React Native, and to have the entire application live in a monorepo.",
    emoji: '🎒',
    images: [ParticipationRating],
    links: [
      {
        text: '12/5/2021 Participation App Functionality Demo',
        url: 'https://www.youtube.com/watch?v=gN-dsE9fbho',
      },
    ],
  },
  {
    title: 'Huffman Coding Tree',
    description:
      'Serving as my final lab submission for the Data Structures 2 course at Seattle Pacific University, my Huffman Coding Tree program written in C++ can encode, compress, and decode messages. The encoding process works by first creating a frequency table that stores the frequency of each character in the message, then by creating a Huffman Tree from the frequency table, then by creating an encoding table from the Huffman tree. I use bitwise operations to convert the binary encoding of each character into an ASCII character before writing it to a file. To decode the message, the Huffman Tree, which is embedded in the top of the encoded message during the encoding process, is read during the decoding process. While I cannot share my code for this lab as it is still being used to assess students at Seattle Pacific University, I have provided pictures above and my final grade report below. This project represents the culmination of my C++ coursework and demonstrates my understanding of data structures and object-oriented programming.',
    emoji: '🌲',
    images: [HuffmanCLI, HuffmanDecoded],
    links: [
      {
        text: 'Huffman Coding Tree Lab Grade Report',
        url: 'https://i.gyazo.com/ee76bfd6046307a229a7903196d002c6.png',
      },
    ],
  },
  {
    title: 'Minecraft Furnace State Machine',
    description:
      'To demonstrate my knowledge of state machines and state management in React, I created a functional Minecraft furnace in the browser. The animation and furnace functionality is all powered by XState state machines.',
    emoji: '🏭',
    images: [MinecraftFurnace, MinecraftStateMachine],
    links: [
      {
        text: 'Minecraft Furnace State Machine Deployment',
        url: 'https://parkergits.github.io/minecraft-furnace-xstate-react/',
      },
      {
        text: 'ParkerGits/minecraft-furnace-xstate-react Repository',
        url: 'https://github.com/ParkerGits/minecraft-furnace-xstate-react',
      },
    ],
  },
]
