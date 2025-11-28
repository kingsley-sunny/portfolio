export interface Blog {
  id: number;
  title: string;
  description: string;
  content: string;

  minutesRead: number;
  image: string;
  author: string;
  createdAt: Date;
}

export const DUMMY_BLOGS = [
  {
    id: 1,
    title: "Getting Started with TypeScript",
    description:
      "An introductory guide to understanding and using TypeScript in your projects.",
    content:
      "This blog post explains the basics of TypeScript, how to install it, and how it enhances JavaScript development with static types.",
    minutesRead: 5,
    image: "/images/rendlr.png",
    author: "Alice Johnson",
    createdAt: new Date("2025-02-20"),
  },
  {
    id: 2,
    title: "Understanding Async/Await",
    description:
      "A deep dive into asynchronous programming in JavaScript using async/await.",
    content:
      "Learn how async/await simplifies handling asynchronous operations in JavaScript, with practical examples and best practices.",
    minutesRead: 7,
    image: "/images/rendlr.png",
    author: "Bob Smith",
    createdAt: new Date("2025-02-21"),
  },
  {
    id: 3,
    title: "Exploring Modern CSS Techniques",
    description:
      "Discover the latest CSS features and techniques for building responsive designs.",
    content:
      "This post explores modern CSS strategies, including grid, flexbox, and custom properties, to create dynamic and responsive layouts.",
    minutesRead: 6,
    image: "/images/rendlr.png",
    author: "Charlie Brown",
    createdAt: new Date("2025-02-22"),
  },
  {
    id: 4,
    title: "Building RESTful APIs with Node.js",
    description:
      "A guide to creating scalable RESTful APIs using Node.js and modern practices.",
    content:
      "This post covers the essentials of building RESTful APIs in Node.js, including routing, middleware, and best practices for performance and scalability.",
    minutesRead: 8,
    image: "/images/rendlr.png",
    author: "Dana White",
    createdAt: new Date("2025-02-23"),
  },
];
