import {
  DownloadIcon,
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
} from "~/components/ui/dropdown-menu";
import { Magnetic } from "~/components/ui/magnetic";
import ThemeSwitcher from "./themeSwitcher";
import { useState, useEffect } from "react";
import { cn } from "~/lib/utils";
import { NavLink } from "react-router";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-8 lg:px-12 py-4 md:py-6 flex flex-row items-center transition-all duration-300",
        isScrolled ? "bg-background" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "flex flex-1 transition-opacity duration-300 ease-in-out",
          isScrolled ? "opacity-0" : "opacity-100",
        )}
      >
        <NavLink to={"/"}>
          <h1 className="font-bold text-xl md:text-2xl tracking-wide">
            {"<"}
            <span className="text-primary">/</span>
            {">"} MYB
          </h1>
        </NavLink>
      </div>
      <div className="flex gap-4 items-center">
        <div
          className={cn(
            "flex flex-1 transition-opacity duration-300 ease-in-out",
            isScrolled ? "opacity-100" : "opacity-0",
          )}
        >
          <Button variant={"outline"} className="cursor-pointer">
            <DownloadIcon /> Download resume
          </Button>
        </div>
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <Magnetic actionArea="self">
            <DropdownMenuTrigger asChild>
              <Button size="icon" className="cursor-pointer">
                {isOpen ? <XIcon /> : <MenuIcon />}
              </Button>
            </DropdownMenuTrigger>
          </Magnetic>
          <DropdownMenuContent className="w-48 md:w-56" sideOffset={8}>
            <DropdownMenuLabel className="text-center text-xl md:text-2xl font-semibold pb-1">
              Menu
            </DropdownMenuLabel>
            <NavLink to={"/"}>
              {({ isActive }) => (
                <DropdownMenuItem className="text-sm md:text-md">
                  <MailPlusIcon className="size-4" />
                  <h1 className="w-[80%] text-center">Home</h1>
                  {isActive && (
                    <div className="size-2 rounded-full bg-primary" />
                  )}
                </DropdownMenuItem>
              )}
            </NavLink>
            <NavLink to={"/projects"}>
              {({ isActive }) => (
                <DropdownMenuItem className="text-sm md:text-md">
                  <MailPlusIcon className="size-4" />
                  <h1 className="w-[80%] text-center">Projects</h1>
                  {isActive && (
                    <div className="size-2 rounded-full bg-primary" />
                  )}
                </DropdownMenuItem>
              )}
            </NavLink>
            <NavLink to={"/contact"}>
              {({ isActive }) => (
                <DropdownMenuItem className="text-sm md:text-md">
                  <MailPlusIcon className="size-4" />
                  <h1 className="w-[80%] text-center">Contact</h1>
                  {isActive && (
                    <div className="size-2 rounded-full bg-primary" />
                  )}
                </DropdownMenuItem>
              )}
            </NavLink>
            <DropdownMenuSeparator />
            <div className="flex flex-col w-full items-center p-2 gap-1">
              <DropdownMenuLabel className="text-center text-sm md:text-base font-semibold">
                Theme
              </DropdownMenuLabel>
              <ThemeSwitcher />
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="text-center text-sm md:text-base font-semibold">
              Socials
            </DropdownMenuLabel>
            <div className="flex flex-row gap-1 items-center justify-center p-2">
              <DropdownMenuItem className="p-2">
                <GithubIcon className="size-4" />
              </DropdownMenuItem>
              <DropdownMenuItem className="p-2">
                <InstagramIcon className="size-4" />
              </DropdownMenuItem>
              <DropdownMenuItem className="p-2">
                <LinkedinIcon className="size-4" />
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};

export default NavBar;
