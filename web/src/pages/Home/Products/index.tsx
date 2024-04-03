import { CoffeeCard } from "../../../components/CoffeeCard";
import { Cards, ProductsContainer } from "./styles";


import { database } from "../../../test/database";


export function Products() {
  return(
    <ProductsContainer>
      <h2>Nossos cafés</h2>

      <section>

        <Cards>
          {
            database.coffees.length > 0 && 

              database.coffees.map(coffee => (

                <li key={`coffee_key_${coffee.title}`}>
                  <CoffeeCard
                    card-image-src={coffee.imageSrc}
                    card-image-alt={coffee.imageAlt}
                    card-price={coffee.price}
                    card-tags-title={coffee.tagsTitle}
                    card-tags-color={coffee.tagsColor}
                    card-title={coffee.title}
                    card-description={coffee.description}
                  />
                </li>

              ))
          }
        </Cards>
        
      </section>
    </ProductsContainer>
  );
};