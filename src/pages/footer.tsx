import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Copy, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-white dark:bg-black px-10 py-10 md:px-20 gap-5  md:gap-3">
      <div className="flex  justify-center">
        <p className=" py-1 px-3 rounded-full bg-gray-600  dark:bg-gray-400 text-gray-200 w-fit  ">
          Get In Touch
        </p>
      </div>
      <div className="flex justify-center dark:text-white text-gray-600 text-center">
        <p>
          What’s next? Feel free to reach out if you're looking for a developer,
          <br />
          have a question, or simply want to connect.
        </p>
      </div>

      <div className="flex flex-row gap-4 items-center align-middle  justify-center dark:text-white text-gray-600">
        <Mail />
        <p className="font-bold text-sm md:text-2xl text-black dark:text-white">
          saifmuhammed101@gmail.com
        </p>

        <Popover className=" flex border-none">
          <PopoverButton
            className="border-none focus:outline-none focus:ring-0 focus:border-none hover:text-black  dark:hover:text-gray-300"
            onClick={() =>
              navigator.clipboard.writeText("saifmuhammed101@gmail.com")
            }
          >
            <Copy className="cursor-pointer border-none" />
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="right end"
            className="transition duration-500 px-2 mx-3 bg-black text-white dark:bg-white dark:text-black rounded-lg w-fit"
          >
            Copied
          </PopoverPanel>
        </Popover>
      </div>
      <div className="flex flex-row gap-4 items-center align-middle  justify-center dark:text-white text-gray-600">
        <Phone />
        <p className="font-bold text-sm md:text-2xl text-black dark:text-white">
          +91 7506626808
        </p>

        <Popover className=" flex border-none">
          <PopoverButton
            className="border-none focus:outline-none focus:ring-0 focus:border-none hover:text-black  dark:hover:text-gray-300"
            onClick={() => navigator.clipboard.writeText("+91 7506626808")}
          >
            <Copy className="cursor-pointer border-none" />
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="right end"
            className="transition duration-500 px-2 mx-3 bg-black text-white dark:bg-white dark:text-black rounded-lg w-fit"
          >
            Copied
          </PopoverPanel>
        </Popover>
      </div>
      <div className="flex flex-col gap-4 items-center dark:text-white text-gray-600 text-sm md:text-2xl">
        <div>
          <p>You may also find me on these platforms!</p>
        </div>
        <div className="flex flex-row gap-4 ">
          <Github
            onClick={() =>
              window.open("https://github.com/saifmuhammad1", "_blank")
            }
            className="hover:text-black  dark:hover:text-gray-300"
          />
          <Linkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/saif-muhammed-b94941145",
                "_blank"
              )
            }
            className="hover:text-black  dark:hover:text-gray-300"
          />
          <Instagram className="hover:text-black  dark:hover:text-gray-300" />
        </div>
      </div>
    </footer>
  );
};
