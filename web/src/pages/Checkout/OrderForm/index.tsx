import { 

   OrderFormContainer,
   Form,
   InputSet,
   CepUFContainer,
   CityNeighborhoodContainer,
   HomeNumberRoadContainer,
   AdressInformation,
   PaymentType,
   AdressTitle,
   PaymentTitle,
   RadiosSet,
   ErrorBoxStatus,

 } from "./styles";

 import {

  PiBank, 
  PiCreditCard, 
  PiCurrencyDollarLight, 
  PiMapPinLine, 
  PiMoney 

} from "react-icons/pi";
 
import { Input } from "../../../components/Input";
import { InputRadio } from "../../../components/InputRadio";


import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export const formOrderSchema = z.object({

  CEP: z.number({errorMap: () => ({message: "Por favor, diite seu CEP."})})
    .refine((cep) => cep.toString().length === 8, {
        message: "O CEP deve conter exatamente 8 dígitos.",
      }
    ),
    

  UF: z.string()
  .regex(/^[A-Z]{2}$/, "UF deve conter exatamente 2 letras maiúsculas."),


  city: z.string()
    .min(1, "Por favor, digite sua cidade.")
    .max(50, "Por favor, forneça uma cidade válida.")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s\-']+$/, "Por favor, forneça uma cidade válida."),

  neighborhood: string()
    .min(1, "Por favor, digite seu bairro.")
    .max(100, "Por favor, forneça um bairro válido")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s\-']+$/, "Por favor, forneça um bairro válido."),

  numberHome: z.string()  
    .min(1, "Por favor, digite seu número.")
    .max(15, "Por favor, digite um número válido."),

  road: z.string()
  .min(1, "Por favor, digite sua rua.")
  .max(100, "Por favor, forneça uma rua válida")
  .regex(/^[0-9A-Za-zÀ-ÖØ-öø-ÿ\s\-']+$/, "Por favor, forneça uma rua válida."),

  complement: z.string()
    .min(1, "Por favor, digite um complemento.")
    .max(200, "Por favor, digite um complemento válido"),

  
  formOfPayment: z.enum(["Cartão de débito", "Cartão de crédito", "Dinheiro"], {
    errorMap: () => ({message: "Por favor, escolha uma das formas de pagamento abaixo."})
  })

})

type FormOrderSchemaProps = z.infer<typeof formOrderSchema>


export function OrderForm() {

  const { 

    register, 
    handleSubmit, 
    formState: { errors }
  
  } = useForm<FormOrderSchemaProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(formOrderSchema),
  })

  const navigate = useNavigate();

  function onHandleSubmit(data: FormOrderSchemaProps): void {
    console.log(data);
    navigate("/sucess");
    return;
  };


  return (
    <OrderFormContainer>
      
      <h1>Complete seu pedido</h1>

      <Form 
        id="order_form"
        onSubmit={handleSubmit(onHandleSubmit)}
      >

        <AdressInformation>
          <AdressTitle>
            <PiMapPinLine />

            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AdressTitle>

          <InputSet>
          
            <CepUFContainer>
              <Input
                id="label_cep"
                placeholder="CEP"
                label="caixa_de_entrada_cep"
                error={errors.CEP?.message}
                type="number"
                {...register("CEP", {
                  valueAsNumber: true
                })}
              />

              <Input
                id="label_UF"
                placeholder="UF"
                label="caixa_de_entrada_UF"
                error={errors.UF?.message}
                {...register("UF")}
              />
            </CepUFContainer>  

            <CityNeighborhoodContainer>
              <Input
                id="label_cidade"
                placeholder="Cidade"
                label="caixa_de_entrada_cidade"
                error={errors.city?.message}

                {...register("city")}
              />

              <Input
                id="label_bairro"
                placeholder="Bairro"
                label="caixa_de_entrada_bairro"
                error={errors.neighborhood?.message}
                
                {...register("neighborhood")}
              />
              
            </CityNeighborhoodContainer>

            <HomeNumberRoadContainer>
              <Input
                id="label_numero_casa"
                placeholder="Número"
                label="caixa_de_entrada_numero_da_casa"
                error={errors.numberHome?.message}

                {...register("numberHome")}
              />

              <Input
                id="label_rua"
                placeholder="Rua"
                label="caixa_de_entrada_rua"
                error={errors.road?.message}

                {...register("road")}
              />
            </HomeNumberRoadContainer>

            <Input
              id="label_complemento"
              placeholder="Complemento"
              label="caixa_de_entrada_complemento"
              error={errors.complement?.message}

              {...register("complement")}
            />
          </InputSet>

          <ErrorBoxStatus>
            {
              (<span>{Object.values(errors)[0]?.message}</span>)
            }
          </ErrorBoxStatus>
        </AdressInformation>


        <PaymentType>
          <PaymentTitle>
              <PiCurrencyDollarLight />

              <div>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>

          </PaymentTitle>

          <RadiosSet>

            <div>
              <InputRadio
                label-icon={PiCreditCard}
                label-input-id="credit-pay"
                radio-group="payment-type"
                radio-value="Cartão de crédito"
                error={!!errors.formOfPayment?.message}
                {...register("formOfPayment")}
              />

              <InputRadio
                label-icon={PiBank}
                label-input-id="debit-pay"
                radio-group="payment-type"
                radio-value="Cartão de débito"
                error={!!errors.formOfPayment?.message}
                {...register("formOfPayment")}
              />

            </div>

            <InputRadio
              label-icon={PiMoney}
              label-input-id="money-pay"
              radio-group="payment-type"
              radio-value="Dinheiro"
              error={!!errors.formOfPayment?.message}
              {...register("formOfPayment")}
            />
          </RadiosSet>

        </PaymentType>
        
      </Form>



    </OrderFormContainer>
  );
};