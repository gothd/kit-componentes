import React from "react";

import { Card } from "@components";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui";
import { FiX } from "react-icons/fi";

export type DocEntry = {
  name: string;
  description: string;
  component: React.ReactNode;
};

export const docs: Record<string, DocEntry[]> = {
  Básicos: [
    {
      name: "Card",
      description: "Container com borda e sombra.",
      component: <Card title="Título">Exemplo de Card</Card>,
    },
  ].sort((a, b) => a.name.localeCompare(b.name)),
  "UI Primitives": [
    {
      name: "Accordion",
      description: "Exibe conteúdo colapsável em seções expansíveis.",
      component: (
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger className="py-2 font-medium text-gray-800 hover:text-indigo-600">
              Seção 1
            </AccordionTrigger>
            <AccordionContent className="pl-4 text-gray-600">
              Conteúdo da seção 1
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="py-2 font-medium text-gray-800 hover:text-indigo-600">
              Seção 2
            </AccordionTrigger>
            <AccordionContent className="pl-4 text-gray-600">
              Conteúdo da seção 2
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
    },
    {
      name: "Button",
      description: "Botão estilizado com variantes.",
      component: <Button variant="primary">Clique aqui</Button>,
    },
    {
      name: "Drawer",
      description: "Menu lateral deslizante.",
      component: (
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button variant="secondary">Abrir Drawer</Button>
          </DrawerTrigger>
          <DrawerContent className="h-full top-0 right-0 pt-6">
            <DrawerClose className="absolute top-1 right-4">
              <FiX className="size-5" />
            </DrawerClose>
            <DrawerHeader className="p-4 border-b flex-col border-neutral-light">
              <DrawerTitle>Exemplo de Drawer</DrawerTitle>
              <DrawerDescription>
                Descrição pode ser lida por leitores de tela
              </DrawerDescription>
            </DrawerHeader>

            <div className="p-4 flex-1 overflow-y-auto">
              <p>Conteúdo do Drawer</p>
            </div>
          </DrawerContent>
        </Drawer>
      ),
    },
    {
      name: "DropdownMenu",
      description: "Menu suspenso com ações rápidas.",
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="primary">Abrir Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">
              Configurações
            </DropdownMenuItem>
            <DropdownMenuSeparator className="my-1 h-px bg-gray-200" />
            <DropdownMenuItem className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer text-red-600">
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
    {
      name: "Input",
      description: "Campo de entrada de texto.",
      component: <Input label="Exemplo:" placeholder="Digite algo..." />,
    },
    {
      name: "Popover",
      description:
        "Exibe conteúdo em um popover posicionado relativo ao trigger.",
      component: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="primary">Abrir Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Título do Popover</h4>
              <p className="text-gray-600 text-sm">
                Este é um exemplo de conteúdo dentro do Popover. Você pode
                colocar texto, botões ou qualquer outro componente aqui.
              </p>
              <Button variant="secondary">Ação</Button>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      name: "Tooltip",
      description: "Exibe uma dica ao passar o mouse ou focar em um elemento.",
      component: (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="primary">Passe o mouse</Button>
            </TooltipTrigger>
            <TooltipContent>Este é um tooltip de exemplo.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
    },
    {
      name: "Dialog",
      description: "Janela modal para interações e mensagens importantes.",
      component: (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="primary">Abrir Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle className="text-lg font-bold">
              Título do Dialog
            </DialogTitle>
            <DialogDescription className="text-gray-600 mb-4">
              Este é um exemplo de conteúdo dentro do Dialog.
            </DialogDescription>
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button variant="secondary">Cancelar</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="primary">Confirmar</Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      ),
    },
    {
      name: "Tabs",
      description: "Navegação entre conteúdos em abas.",
      component: (
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList className="flex border-b border-gray-200">
            <TabsTrigger
              value="tab1"
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 data-[state=active]:border-indigo-600"
            >
              Aba 1
            </TabsTrigger>
            <TabsTrigger
              value="tab2"
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 data-[state=active]:border-indigo-600"
            >
              Aba 2
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tab1" className="p-4 text-gray-700">
            Conteúdo da primeira aba.
          </TabsContent>
          <TabsContent value="tab2" className="p-4 text-gray-700">
            Conteúdo da segunda aba.
          </TabsContent>
        </Tabs>
      ),
    },
  ].sort((a, b) => a.name.localeCompare(b.name)),
};
