import { TagColors } from "../components/Tag/styles"

import { assetsImports } from "./assetsImports";
const { coffees } = assetsImports;

export interface CoffeeDatabaseProps {
  id: number;
  section: "coffees";
  imageSrc: string;
  imageAlt: string;
  price: number;
  tagsTitle: [string, string?, string?];
  tagsColor: TagColors;
  title: string;
  description: string;
}

export interface DatabaseProps {
  coffees: CoffeeDatabaseProps[];
};

export const database: DatabaseProps = {

  coffees : [

    {
      id: 1,
      section: "coffees",
      imageSrc: coffees.express.traditional,
      imageAlt: "imagem de um café-expresso-tradicional",
      price: 9.90,
      tagsTitle: ["TRADICIONAL"],
      tagsColor: "yellow",
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
    },
    
    {
      id: 2,
      section: "coffees",
      imageSrc: coffees.express.american,
      imageAlt: "imagem de um café-expresso-americano",
      price: 15.40,
      tagsTitle: ["TRADICIONAL"],
      tagsColor: "yellow",
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
    
    },
  
    {
      id: 3,
      section: "coffees",
      imageSrc: coffees.express.creamy,
      imageAlt: "imagem de um café-expresso-cremoso",
      price: 7.50,
      tagsTitle: ["TRADICIONAL"],
      tagsColor: "yellow",
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
    },
  
    {
      id: 4,
      section: "coffees",
      imageSrc: coffees.express.cold,
      imageAlt: "imagem de um café-expresso-gelado",
      price: 11.20,
      tagsTitle: ["TRADICIONAL", "GELADO"],
      tagsColor: "yellow",
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
    },
  
    {
      id: 5,
      section: "coffees",
      imageSrc: coffees.express.milk,
      imageAlt: "imagem de um café-com-leite",
      price: 6.60,
      tagsTitle: ["TRADICIONAL", "COM LEITE"],
      tagsColor: "yellow",
      title: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
    },
  
    {
      id: 6,
      section: "coffees",
      imageSrc: coffees.latte,
      imageAlt: "imagem de um café-latte",
      price: 13.16,
      tagsTitle: ["TRADICIONAL", "COM LEITE"],
      tagsColor: "yellow",
      title: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    },
  
    {
      id: 7,
      section: "coffees",
      imageSrc: coffees.capuccino,
      imageAlt: "imagem de um café-capuccino",
      price: 16.40,
      tagsTitle: ["TRADICIONAL", "COM LEITE"],
      tagsColor: "yellow",
      title: "Capuccino",
      description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    },
  
    {
      id: 8,
      section: "coffees",
      imageSrc: coffees.macchiato,
      imageAlt: "imagem de um café-macchiato",
      price: 13.90,
      tagsTitle: ["TRADICIONAL", "COM LEITE"],
      tagsColor: "yellow",
      title: "Macchiato",
      description: "Café expresso misturado com um pouco de leite quente e espuma",
    },
  
    {
      id: 9,
      section: "coffees",
      imageSrc: coffees.mocaccino,
      imageAlt: "imagem de um café-mochaccino",
      price: 12.30,
      tagsTitle: ["TRADICIONAL", "COM LEITE"],
      tagsColor: "yellow",
      title: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
    },
  
    {
      id: 10,
      section: "coffees",
      imageSrc: coffees.especials.hotChocolate,
      imageAlt: "imagem de um chocolate-quente",
      price: 11.50,
      tagsTitle: ["ESPECIAL", "COM LEITE"],
      tagsColor: "yellow",
      title: "Chocolate Quente",
      description: "Bebida feita com chocolate dissolvido no leite quente e café",
    },
  
    {
      id: 11,
      section: "coffees",
      imageSrc: coffees.especials.cuban,
      imageAlt: "imagem de um café-cubano",
      price: 19.10,
      tagsTitle: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
      tagsColor: "yellow",
      title: "Cubano",
      description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    },
  
    {
      id: 12,
      section: "coffees",
      imageSrc: coffees.especials.havaian,
      imageAlt: "imagem de um café-havaiano",
      price: 16.90,
      tagsTitle: ["ESPECIAL"],
      tagsColor: "yellow",
      title: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
    },
  
    {
  
      id: 13,
      section: "coffees",
      imageSrc: coffees.especials.arabian,
      imageAlt: "imagem de um café-arábico",
      price: 22.50,
      tagsTitle: ["ESPECIAL"],
      tagsColor: "yellow",
      title: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
    },
    
    {
      id: 14,
      section: "coffees",
      imageSrc: coffees.especials.irlan,
      imageAlt: "imagem de um café-irlandês",
      price: 15.80,
      tagsTitle: ["ESPACIAL", "ALCOÓLICO"],
      tagsColor: "yellow",
      title: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    },
  ],
};