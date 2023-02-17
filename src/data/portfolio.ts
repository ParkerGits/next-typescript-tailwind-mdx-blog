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
import KnowtedHome from '../../public/images/portfolio/participation/homesm.png'
import KnowtedModal from '../../public/images/portfolio/participation/modal.png'
// Pokecommit
import PokecommitEncounter from '../../public/images/portfolio/pokecommit/encounter.png'
import PokecommitFight from '../../public/images/portfolio/pokecommit/fight.png'

// Smartsheet Internship 2022
import Smartsheet2022Logo from '../../public/images/portfolio/smartsheet2022/logo.png'
import Smartsheet2022Proofing from '../../public/images/portfolio/smartsheet2022/proofing.png'

export type PortfolioItem = {
  title: string
  description: string
  emoji: string
  images?: StaticImageData[]
  links: { text: string; url: string }[]
}

export const projects: PortfolioItem[] = [
  {
    title: 'Knowted Participation Tracking App',
    description:
      'I am producing an app called Knowted that streamlines student participation tracking for course instructors in the classroom. By integrating with the popular Canvas Learning Management System, Knowted centralizes student data with a dashboard and facilitates the quick and systematic selection of students for participation. Knowted enables professors to effortlessly grade student interactions and export those grades to the grade book. The application already benefits instructors as it sees growing usage among professors at Seattle Pacific University. The next step of this project is to expand beyond Seattle Pacific University and support instructors at other institutions.',
    emoji: '🙋‍♂️',
    images: [KnowtedHome, KnowtedModal],
    links: [
      {
        text: 'Watch a demo of the app! (current as of 09/14/2022)',
        url: 'https://www.youtube.com/watch?v=eVq5nL27vsw',
      },
      {
        text: 'Check out the homepage!',
        url: 'https://knowted.app',
      },
    ],
  },
  {
    title: 'tends',
    description:
      'My application "tends" helps users manage "quantities" in their lives (e.g., daily calories, screen time, exercise time, etc.). I created tends during an iteration of egghead.io\'s Portfolio Project Club, the goal of which was for each member to design, develop, and document a SaaS application that would serve as an impressive, business-oriented addition to their developer portfolio. Built using Next.js, React, TypeScript, Firebase, and Stripe, the project was my first stab at developing a full-stack application. Users could log into the service via GitHub or Google, and the application would store their quantities in the Firestore database. After finishing the project, I wrote and published a technical case study about my process.',
    emoji: '📈',
    images: [ParkerPoints, ParkerTrend],
    links: [
      {
        text: 'Technical Case Study published on egghead.io!',
        url:
          'https://egghead.io/blog/saas-applicatiodn-with-next-js-stripe-and-firebase',
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
      'Over six weeks, from July to August 2021, I led a Portfolio Project Club in the egghead.io community. The objective of the project club was for each member to design, demonstrate, and document a portfolio project that demonstrates a mastery of State Management in React. The project I developed was an RPG Cutscene in which the animations, events, and dialogue are all controlled by state machines managed by the XState library.',
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
    title: 'Pokecommit CLI',
    description:
      'Inspired by my love for Pokemon and a desire to learn the Go programming language, I created this simple CLI wrapper for git commit that allows users to catch a Pokemon with each commit!',
    emoji: '🦑',
    images: [PokecommitEncounter, PokecommitFight],
    links: [
      {
        text: 'GitHub repository',
        url: 'https://github.com/ParkerGits/pokecommit',
      },
    ],
  },
  {
    title: 'Huffman Coding Tree',
    description:
      'Serving as my final lab submission for the Data Structures 2 course at Seattle Pacific University, my C++ Huffman Coding Tree can encode, compress, and decode messages. The encoding process works by building a Huffman tree from a frequency table and using that tree to construct an encoding table. I use bitwise operations to convert binary strings to ASCII characters before outputting the encoded message and a string representation of the tree to a file. To decode the message, the embedded Huffman Tree is parsed and reconstructed from the encoded message. While I cannot share my code for this lab (it is still an assessment tool), I have provided pictures and my final grade report. This project represents the culmination of my C++ coursework and demonstrates my understanding of data structures and object-oriented programming.',
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

export const professionalExperiences: PortfolioItem[] = [
  {
    title: 'Smartsheet Software Engineering Intern, Content Solutions Team',
    description:
      'For ten weeks during the summer of 2022, I worked at Smartsheet as a full-time software engineering intern. The team I belonged to, Content Solutions, was primarily focused on developing the platform\'s "proofing" feature, which streamlines the iterative process of content creation by facilitating document versioning, feedback requests, and comments. My task over the summer was to implement a "due dates" feature for feedback requests to give requestors a better sense of when to expect recipient feedback. Before initiating the development work, I drafted a systems design document to receive feedback and continuously iterated on my plan. Once I was confident in my approach, I implemented the frontend components with TypeScript, React, Redux, and SASS, used Java Spring and MySQL to build the backend functionality, and used Docker to manage microservices during development. At the end of my internship, I presented the feature in a meeting open to all product development employees. Throughout this experience, I collaborated with managers, designers, user-experience researchers, and other engineers across all of Smartsheet\'s product development teams.',
    emoji: '📄',
    images: [Smartsheet2022Logo, Smartsheet2022Proofing],
    links: [
      {
        text: 'Check out my feature in this article from the Smartsheet team!',
        url:
          'https://www.smartsheet.com/content-center/executive-center/leadership/internship-inside-look',
      },
      {
        text: "Learn more about Smartsheet's proofing feature",
        url:
          'https://help.smartsheet.com/learning-track/smartsheet-intermediate/proofing',
      },
    ],
  },
]
