export interface ITestomonialObj {
  id: number;
  name: string;
  designation: string;
  testomoni: string;
  image: string;
}

export const dummyTestominiObj: ITestomonialObj[] = [
  {
    id: 1,
    name: "Spartacus PP",
    designation: "Junior React Developer",
    testomoni:
      "A highly dependable developer with a strong eye for detail. Always delivers clean, maintainable code and consistently improves the quality of any project they contribute to.",
    image: "https://api.dicebear.com/7.x/avatars/svg?seed=reactdev1",
  },
  {
    id: 2,
    name: "Alan Santosh",
    designation: "Junior .NET Developer",
    testomoni:
      "An exceptional collaborator who communicates clearly and solves problems with remarkable efficiency. Their ability to break down complex tasks makes team development significantly smoother.",
    image: "https://api.dicebear.com/7.x/avatars/svg?seed=dev2",
  },
  {
    id: 3,
    name: "Abhisek Shinoth",
    designation: "Junior .NET Developer",
    testomoni:
      "Brings a strong sense of ownership to every task. Their technical curiosity and willingness to explore new tools consistently elevate the overall product quality.",
    image: "https://api.dicebear.com/7.x/avatars/svg?seed=dev3",
  },
  {
    id: 4,
    name: "Ajay Murli",
    designation: "Junior Test Engineer",
    testomoni:
      "Works extremely well in cross-functional settings and adapts quickly to evolving requirements. Their structured approach to development ensures reliable, predictable outputs.",
    image: "https://api.dicebear.com/7.x/avatars/svg?seed=testengineer1",
  },
  {
    id: 5,
    name: "Rosemary",
    designation: "Junior Test Engineer",
    testomoni:
      "A proactive team player who consistently demonstrates professionalism and strong analytical thinking. Their contributions greatly enhance project workflow and coordination.",
    image: "https://api.dicebear.com/7.x/avatars/svg?seed=testengineer2",
  },
];
