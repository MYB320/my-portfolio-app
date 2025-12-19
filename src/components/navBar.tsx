import {
  GithubIcon,
  HomeIcon,
  InstagramIcon,
  LayoutGridIcon,
  LinkedinIcon,
  MailPlusIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Magnetic } from "./motion-primitives/magnetic";
import ThemeSwitcher from "./themeSwitcher";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full px-16 py-8 flex flex-row items-center ">
      <div className="flex flex-1">
        <h1 className="font-bold text-2xl tracking-wide">
          {"<"}
          <span className="text-primary">/</span>
          {">"} MYB
        </h1>
      </div>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <Magnetic actionArea="self">
          <DropdownMenuTrigger asChild>
            <Button>{isOpen ? <XIcon /> : <MenuIcon />}</Button>
          </DropdownMenuTrigger>
        </Magnetic>
        <DropdownMenuContent className="w-56" side="right" sideOffset={8}>
          <DropdownMenuLabel className="text-center text-2xl font-semibold pb-1">
            Menu
          </DropdownMenuLabel>
          <DropdownMenuItem className="text-md">
            <HomeIcon /> <h1 className="w-[80%] text-center">Home</h1>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-md">
            <LayoutGridIcon />
            <h1 className="w-[80%] text-center">Projects</h1>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-md">
            <MailPlusIcon />
            <h1 className="w-[80%] text-center">Contact</h1>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <div className="flex flex-col w-full items-center p-2 gap-1">
            <DropdownMenuLabel className="text-center font-semibold">
              Theme
            </DropdownMenuLabel>
            <ThemeSwitcher />
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="text-center font-semibold">
            Socials
          </DropdownMenuLabel>
          <div className="flex flex-row gap-1 items-center justify-center p-2">
            <DropdownMenuItem>
              <GithubIcon />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <InstagramIcon />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LinkedinIcon />
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

export default NavBar;
