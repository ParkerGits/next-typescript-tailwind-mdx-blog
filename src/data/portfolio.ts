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
      'With guidance from a Seattle Pacific University professor, I am producing an app called Knowted that streamlines student participation tracking for course instructors in the classroom. By integrating with the popular Canvas Learning Management System, Knowted can query and mutate student data. The app centralizes student data with a dashboard, facilitates the systematic selection of students for participation, enables quick recording of student interaction quality, simplifies exporting grades to the grade book, and promotes classroom inclusivity and student attentiveness. The application benefits instructors today as it sees growing usage among professors at Seattle Pacific University. The next step of this project is to expand beyond Seattle Pacific University and enable instructors from other institutions to use it.',
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

export const professionalExperiences: PortfolioItem[] = [
  {
    title: 'Smartsheet Software Engineering Intern, Content Solutions Team',
    description:
      'For ten weeks during the summer of 2022, I worked at Smartsheet as a full-time software engineering intern. Smartsheet is a cloud-based spreadsheet application for planning, managing, automating, and collaborating on business tasks. The team I belonged to, Content Solutions, was primarily focused on developing the platform\'s "proofing" feature, which streamlines the iterative process of content creation by facilitating document versioning, feedback requests, and comments. My task over the summer was to design and implement a "due dates" feature for feedback requests to give requestors a better sense of when to expect recipient feedback. My commitment to this project spanned the duration of my internship and entailed me working with managers, designers, user-experience researchers, and other engineers across all of Smartsheet\'s product development teams. The project began with me drafting a systems design document for the feature. After receiving feedback and iterating on my planned approach, I began the development work. I implemented the frontend components with TypeScript, React, Redux, and SASS, used Java Spring and MySQL to build the backend functionality, and used Docker to manage microservices during development. At the end of my internship, I presented the functioning feature in a meeting open to all product development employees. Beyond the t technical skills I developed while working on this feature, I also grew familiar with Agile Scrum by attending daily standup meetings and biweekly sprint planning and retrospective meetings.',
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
