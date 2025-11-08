import astralCodeLogo from "../image/logo/astralCodeSynamics.png";
export interface IExperience{
  id: number;
  name: string;
  img: string;
  desc:string;
  role:string
}


export const experienceObject:IExperience[]=[
  {id:1,
    name:"AstralCode Dynamice",
    img:astralCodeLogo,
desc: "Developed and maintained E-commerce features using React Native, Tamagui, and tRPC, enhancing order visibility and reducing support queries by 20%. Built order tracking and management systems with Supabase and tRPC, improving update speed by 30%. Led full-stack development for Queue, Hospital, ERP, and Delivery systems, delivering modules 15% early. Directed planning, database design, and frontend architecture with React, TypeScript, Redux Toolkit, and Tailwind, reducing rework by 10%. Streamlined workflows across multiple modules, cutting manual effort by 25% and ensuring 99% app stability.",
role:"Jr. Frontend Developer"

  },
]