import astralCodeLogo from "../image/logo/astralCodeSynamics.png";
export interface IExperience{
  id: number;
  name: string;
  img: string;
  desc:string
}


export const experienceObject:IExperience[]=[
  {id:1,
    name:"AstralCode Dynamice",
    img:astralCodeLogo,
desc:''
  },
]