"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@components/ui";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { cn } from "@utils";
import { FiChevronDown, FiLayout, FiPackage, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { typedEntries } from "../../utils/typedEntries";
import { env } from "../config/env";
import { docs } from "../docsConfig";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl font-bold text-indigo-600">{env.APP_NAME}</h1>
        </Link>
        <nav className="flex gap-4 lg:gap-6">
          <Drawer direction={isDesktop ? "right" : "left"}>
            <DrawerTrigger asChild>
              <button className="flex items-center gap-2 text-neutral hover:text-indigo-600 cursor-pointer">
                <FiPackage className="size-6 md:hidden lg:block" />
                <div className="hidden lg:block">Componentes</div>
              </button>
            </DrawerTrigger>
            <DrawerContent
              className={cn("w-72 top-0 h-full px-4 pt-2", {
                "right-0": isDesktop,
                "left-0": !isDesktop,
              })}
            >
              <DrawerHeader className="border-0">
                <DrawerClose
                  className={cn("absolute", {
                    "left-4": isDesktop,
                    "right-4": !isDesktop,
                  })}
                >
                  <FiX className="size-8" />
                </DrawerClose>
                <DrawerTitle className="text-xl">Componentes</DrawerTitle>
                <DrawerDescription className="sr-only">
                  Componentes básicos e primitivos do {env.APP_NAME}
                </DrawerDescription>
              </DrawerHeader>

              <div className="h-full overflow-y-auto">
                <Accordion type="multiple" className="w-full">
                  {typedEntries(docs).map(([category, comps]) => (
                    <AccordionItem
                      key={String(category)}
                      value={String(category)}
                    >
                      <AccordionTrigger className="flex justify-between items-center w-full py-2 font-semibold text-gray-800 hover:text-indigo-600 group">
                        {category}
                        <FiChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </AccordionTrigger>
                      <AccordionContent className="pl-4 my-2 flex flex-col gap-1">
                        {comps.map((doc) => (
                          <Link
                            key={doc.name}
                            to={`/${doc.name.toLowerCase()}`}
                            className="text-neutral hover:text-indigo-600 py-1.5"
                          >
                            {doc.name}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </DrawerContent>
          </Drawer>

          <Link
            to="/templates"
            className="flex items-center gap-2 text-neutral hover:text-indigo-600"
          >
            <FiLayout className="size-6 md:hidden lg:block" />
            <div className="hidden lg:block">Templates</div>
          </Link>

          <Link to="/contato" className="text-neutral hover:text-indigo-600">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
