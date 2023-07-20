"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
  ];
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOverlayOpen]);

  const handleOverlayToggle = () => {
    setOverlayOpen(!isOverlayOpen);
  };
  return (
    <nav className="w-full top-0 p-4 bg-transparent z-50">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-center items-center space-x-2 ml-4 z-50">
          <motion.div
            className="rounded-full p-4 bg-gray-100 cursor-pointer relative hover:scale-105 hover:bg-gray-200 z-50"
            onClick={handleOverlayToggle}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOverlayOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              )}
            </svg>
          </motion.div>
          <Image src={""} className="w-[116px] h-[50px]" alt="logo" />
        </div>
        <div className="w-[50%] justify-center items-center mx-auto">
          <ul className="hidden sm:flex flex-row justify-evenly items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="hover:bg-gray-600 rounded-[10px] hover:bg-opacity-20 text-black">
                  <Link href="/">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Management</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="hover:bg-gray-600 rounded-[10px] hover:bg-opacity-20 text-black">
                  <Link href="/">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hover:bg-gray-600 rounded-[10px] hover:bg-opacity-20 text-black">
                  <Link href="/">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Blogs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hover:bg-gray-600 rounded-[10px] hover:bg-opacity-20 text-black">
                  <Link href="/">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ul>
        </div>
        <Link
          href="/"
          className="px-8 w-[60%] sm:w-auto py-4 bg-black rounded-lg text-white font-semibold hover:bg-emerald-600 hover:text-black text-sm transition duration-200 ease-in-out hover:scale-105 flex flex-row items-center justify-center"
        >
          Apply Now
        </Link>
      </div>

      {/* Black Screen Overlay */}
      <AnimatePresence>
        {isOverlayOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center z-40"
            style={{ maxHeight: "100vh" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col w-full p-16 items-start justify-start h-full text-white">
              <div className="h-[10%] sm:h-[20%] bg-transparent" />
              <div className="flex flex-col justify-start items-start p-4 w-full sm:w-[40%]">
                <ul className="text-xl font-semibold w-full">
                  <li className="p-4 hover:bg-gray-500 hover:bg-opacity-25 rounded-xl w-full flex flex-row items-baseline space-x-3">
                    <span className="text-sm font-semibold ">01. </span>{" "}
                    <span className="font-bold tracking-wide">Home</span>
                  </li>
                  <li className="p-4 hover:bg-gray-500 hover:bg-opacity-25 rounded-xl w-full flex flex-row items-baseline space-x-3">
                    <span className="text-sm font-semibold ">02. </span>{" "}
                    <span className="font-bold tracking-wide">Management</span>
                  </li>
                  <li className="p-4 hover:bg-gray-500 hover:bg-opacity-25 rounded-xl w-full flex flex-row items-baseline space-x-3">
                    <span className="text-sm font-semibold ">03. </span>{" "}
                    <span className="font-bold tracking-wide">About</span>
                  </li>
                  <li className="p-4 hover:bg-gray-500 hover:bg-opacity-25 rounded-xl w-full flex flex-row items-baseline space-x-3">
                    <span className="text-sm font-semibold ">04. </span>{" "}
                    <span className="font-bold tracking-wide">Blogs</span>
                  </li>
                  <li className="p-4 hover:bg-gray-500 hover:bg-opacity-25 rounded-xl w-full flex flex-row items-baseline space-x-3">
                    <span className="text-sm font-semibold ">05. </span>{" "}
                    <span className="font-bold tracking-wide">Contact</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-600 hover:bg-opacity-25",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
