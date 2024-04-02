import { TagColors } from "../components/CoffeeTag/styles"

import { assetsImports } from "./assetsImports";
const { coffees } = assetsImports;

interface CoffeesProps {
  imageSrc: string;
  imageAlt: string;
  price: string;
  tagsTitle: [string, string?, string?];
  tagsColor: TagColors;
  title: string;
  description: string;
}

interface DatabaseProps {
  coffees: CoffeesProps[];
};

export const database: DatabaseProps = {

  coffees : [

    {
      imageSrc: coffees.express.traditional,
      imageAlt: "imagem de um café-expresso-tradicional",
      price: "9,90",
      tagsTitle: ["TRADICIONAL"],
      tagsColor: "yellow",
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
    },
    
    {
      imageSrc: coffees.express.american,
      imageAlt: "imagem de um café-expresso-americano",
      price: "15,40",
      tagsTitle: ["TRADICIONAL"],
      tagsColor: "yellow",
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
    
    },
  
    {
      imageSrc: coffees.express.creamy,
      imageAlt: "imagem de um café-expresso-cremoso",
      price: "7,50",
      tagsTitle: ["TRADICIONAL"],
      tagsColor: "yellow",
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
    },
  
    {
      imageSrc: coffees.express.cold,
      imageAlt: "imagem de um café-expresso-gelado",
      price: "11,20",
      tagsTitle: ["TRADICIONAL", "GELADO"],
      tagsColor: "yellow",
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
    },
  
    {
      imageSrc: coffees.express.milk,
      imageAlt: "imagem de um café-com-leite",
      price: "6,60",
      tagsTitle: ["TRADICIONAL", "COM LEITE"],
      tagsColor: "yellow",
      title: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
    },
  
    {
      imageSrc: coffees.latte,
      imageAlt: "imagem de um café-latte",
      price: "13,16",
      tagsTitle: ["TRADICIONAL", "COM LEITE"],
      tagsColor: "yellow",
      title: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    },
  
    {
      imageSrc: coffees.capuccino,
      imageAlt: "imagem de um café-capuccino",
      price: "16,40",
      tagsTitle: ["TRADICIONAL", "COM LEITE"],
      tagsColor: "yellow",
      title: "Capuccino",
      description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    },
  
    {
      imageSrc: coffees.macchiato,
      imageAlt: "imagem de um café-macchiato",
      price: "13,90",
      tagsTitle: ["TRADICIONAL", "COM LEITE"],
      tagsColor: "yellow",
      title: "Macchiato",
      description: "Café expresso misturado com um pouco de leite quente e espuma",
    },
  
    {
      imageSrc: coffees.mocaccino,
      imageAlt: "imagem de um café-mochaccino",
      price: "12,30",
      tagsTitle: ["TRADICIONAL", "COM LEITE"],
      tagsColor: "yellow",
      title: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
    },
  
    {
      imageSrc: coffees.especials.hotChocolate,
      imageAlt: "imagem de um chocolate-quente",
      price: "11,50",
      tagsTitle: ["ESPECIAL", "COM LEITE"],
      tagsColor: "yellow",
      title: "Chocolate Quente",
      description: "Bebida feita com chocolate dissolvido no leite quente e café",
    },
  
    {
      imageSrc: coffees.especials.cuban,
      imageAlt: "imagem de um café-cubano",
      price: "19,10",
      tagsTitle: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
      tagsColor: "yellow",
      title: "Cubano",
      description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    },
  
    {
      imageSrc: coffees.especials.havaian,
      imageAlt: "imagem de um café-havaiano",
      price: "16,90",
      tagsTitle: ["ESPECIAL"],
      tagsColor: "yellow",
      title: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
    },
  
    {
  
      imageSrc: coffees.especials.arabian,
      imageAlt: "imagem de um café-arábico",
      price: "22,50",
      tagsTitle: ["ESPECIAL"],
      tagsColor: "yellow",
      title: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
    },
    
    {
      imageSrc: coffees.especials.irlan,
      imageAlt: "imagem de um café-irlandês",
      price: "15,80",
      tagsTitle: ["ESPACIAL", "ALCOÓLICO"],
      tagsColor: "yellow",
      title: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    },
  ],
};