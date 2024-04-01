import { CoffeeCard } from "../../../components/CoffeeCard";
import { ProductsContainer } from "./stylers";

import imageCoffeeExpressTraditional from "../../../assets/coffees/expresso.svg"
import imageCoffeeExpressAmerican from "../../../assets/coffees/americano.svg"
import imageCoffeeExpressCreamy from "../../../assets/coffees/expresso-cremoso.svg"
import imageCoffeeExpressCold from "../../../assets/coffees/cafe-gelado.svg"
import imageCoffeeMilk from "../../../assets/coffees/cofe-com-leite.svg"
import imageCoffeeLatte from "../../../assets/coffees/latte.svg"
import imageCoffeeCapuccino from "../../../assets/coffees/capuccino.svg"
import imageCoffeeMacchiato from "../../../assets/coffees/macchiato.svg"
import imageCoffeeExpressMochaccino from "../../../assets/coffees/mochaccino.svg"
import imageCoffeeExpressHotChocolate from "../../../assets/coffees/chocolate-quente.svg"
import imageCoffeeExpressCuban from "../../../assets/coffees/cubano.svg"
import imageCoffeeExpressHavaian from "../../../assets/coffees/havaiano.svg"
import imageCoffeeExpressIrlan from "../../../assets/coffees/irlandês.svg"
import imageCoffeeExpressArabian from "../../../assets/coffees/arabe.svg"


export function Products() {
  return(
    <ProductsContainer>
      <h1>Nossos cafés</h1>

      <section>
        <CoffeeCard
          card-image-src={imageCoffeeExpressTraditional}
          card-image-alt="imagem de um café-expresso-tradicional"
          card-price="9,90"
          card-tags-title={["TRADICIONAL"]}
          card-tags-color="yellow"
          card-title="Expresso Tradicional"
          card-description="O tradicional café feito com água quente e grãos moídos"
        />
        
        <CoffeeCard
          card-image-src={imageCoffeeExpressAmerican}
          card-image-alt="imagem de um café-expresso-americano"
          card-price="15,40"
          card-tags-title={["TRADICIONAL"]}
          card-tags-color="yellow"
          card-title="Expresso Americano"
          card-description="Expresso diluído, menos intenso que o tradicional"
        />

        <CoffeeCard
          card-image-src={imageCoffeeExpressCreamy}
          card-image-alt="imagem de um café-expresso-cremoso"
          card-price="7,50"
          card-tags-title={["TRADICIONAL"]}
          card-tags-color="yellow"
          card-title="Expresso Cremoso"
          card-description="Café expresso tradicional com espuma cremosa"
        />

        <CoffeeCard
          card-image-src={imageCoffeeExpressCold}
          card-image-alt="imagem de um café-expresso-gelado"
          card-price="11,20"
          card-tags-title={["TRADICIONAL", "GELADO"]}
          card-tags-color="yellow"
          card-title="Expresso Gelado"
          card-description="Bebida preparada com café expresso e cubos de gelo"
        />

        <CoffeeCard
          card-image-src={imageCoffeeMilk}
          card-image-alt="imagem de um café-com-leite"
          card-price="6,60"
          card-tags-title={["TRADICIONAL", "COM LEITE"]}
          card-tags-color="yellow"
          card-title="Café com Leite"
          card-description="Meio a meio de expresso tradicional com leite vaporizado"
        />

        <CoffeeCard
          card-image-src={imageCoffeeLatte}
          card-image-alt="imagem de um café-latte"
          card-price="13,16"
          card-tags-title={["TRADICIONAL", "COM LEITE"]}
          card-tags-color="yellow"
          card-title="Latte"
          card-description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
        />

        <CoffeeCard
          card-image-src={imageCoffeeCapuccino}
          card-image-alt="imagem de um café-capuccino"
          card-price="16,40"
          card-tags-title={["TRADICIONAL", "COM LEITE"]}
          card-tags-color="yellow"
          card-title="Capuccino"
          card-description="Bebida com canela feita de doses iguais de café, leite e espuma"
        />

        <CoffeeCard
          card-image-src={imageCoffeeMacchiato}
          card-image-alt="imagem de um café-macchiato"
          card-price="13,90"
          card-tags-title={["TRADICIONAL", "COM LEITE"]}
          card-tags-color="yellow"
          card-title="Macchiato"
          card-description="Café expresso misturado com um pouco de leite quente e espuma"
        />

        <CoffeeCard
          card-image-src={imageCoffeeExpressMochaccino}
          card-image-alt="imagem de um café-mocaccino"
          card-price="12,30"
          card-tags-title={["TRADICIONAL", "COM LEITE"]}
          card-tags-color="yellow"
          card-title="Mocaccino"
          card-description="Café expresso com calda de chocolate, pouco leite e espuma"
        />

        <CoffeeCard
          card-image-src={imageCoffeeExpressHotChocolate}
          card-image-alt="imagem de um chocolate-quente"
          card-price="11,50"
          card-tags-title={["ESPECIAL", "COM LEITE"]}
          card-tags-color="yellow"
          card-title="Chocolate Quente"
          card-description="Bebida feita com chocolate dissolvido no leite quente e café"
        />

        <CoffeeCard
          card-image-src={imageCoffeeExpressCuban}
          card-image-alt="imagem de um café-cubano"
          card-price="19,10"
          card-tags-title={["ESPECIAL", "ALCOÓLICO", "GELADO"]}
          card-tags-color="yellow"
          card-title="Cubano"
          card-description="Drink gelado de café expresso com rum, creme de leite e hortelã"
        />

        <CoffeeCard
          card-image-src={imageCoffeeExpressHavaian}
          card-image-alt="imagem de um café-havaiano"
          card-price="16,90"
          card-tags-title={["ESPECIAL"]}
          card-tags-color="yellow"
          card-title="Havaiano"
          card-description="Bebida adocicada preparada com café e leite de coco"
        />

        <CoffeeCard
          card-image-src={imageCoffeeExpressArabian}
          card-image-alt="imagem de um café-arábico"
          card-price="22,50"
          card-tags-title={["ESPECIAL"]}
          card-tags-color="yellow"
          card-title="Árabe"
          card-description="Bebida preparada com grãos de café árabe e especiarias"
        />

        <CoffeeCard
          card-image-src={imageCoffeeExpressIrlan}
          card-image-alt="imagem de um café-irlandês"
          card-price="15,80"
          card-tags-title={["ESPACIAL", "ALCOÓLICO"]}
          card-tags-color="yellow"
          card-title="Irlandês"
          card-description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
        />
      </section>
    </ProductsContainer>
  );
};