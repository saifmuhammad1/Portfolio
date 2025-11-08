import htmlLogo from "../image/logo/html.png";
import cssLogo from "../image/logo/css-3.png";
import jsLogo from "../image/logo/js.png";
import tsLogo from "../image/logo/typescript.png";
import reactLogo from "../image/logo/react.png";
import nextLogo from "../image/logo/nextjs.png";
import tailwindLogo from "../image/logo/tailwind.png";
import expressLogo from "../image/logo/expressjs.png";
import figmaLogo from "../image/logo/figma.png";
import gitLogo from "../image/logo/git.png";
import nodeLogo from "../image/logo/node.png";
import pgadminLogo from "../image/logo/pgadmin.png";

export interface ISkill {
  id: number;
  name: string;
  img: string;
}

export const skillsObject: ISkill[] = [
  { id: 1, name: "HTML", img: htmlLogo },
  { id: 2, name: "CSS", img: cssLogo },
  { id: 3, name: "JavaScript", img: jsLogo },
  { id: 4, name: "TypeScript", img: tsLogo },
  { id: 5, name: "React", img: reactLogo },
  { id: 6, name: "Next.js", img: nextLogo },
  { id: 7, name: "Tailwind CSS", img: tailwindLogo },
  { id: 9, name: "Figma", img: figmaLogo },
  { id: 10, name: "Git", img: gitLogo },
  { id: 11, name: "Node.js", img: nodeLogo },
  { id: 12, name: "PgAdmin", img: pgadminLogo },
{ id: 8, name: "Express.js", img: expressLogo },
];
