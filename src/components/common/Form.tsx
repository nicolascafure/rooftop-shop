
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios"

type Inputs = {
  email: string;
  message: string;
};


export interface FormProps {
    id :string
    
}
 
const Form: React.FunctionComponent<FormProps> = ({id}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>();
    
      const onSubmit: SubmitHandler<Inputs> = (data) => {
        axios
          .post(
            `https://rooftop-api-rest-frontend.herokuapp.com/questions?item_id=${id}`,
            { data }
          )
          .then((res) => {
            console.log(res);
            console.log(res.data.message);
          });
      };


    return (  

<form onSubmit={handleSubmit(onSubmit)}>
            <label>Ingresa tu email</label>
            <input
              type="text"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email?.type === "required" &&
              "El campo de email es requerido."}
            {errors.email?.type === "patterm" && "Ingrese un email valido."}

            <textarea
              placeholder="Escribi tu pregunta..."
              {...register("message", {
                required: true,
                maxLength: 500,
                minLength: 10,
              })}
            />
            {errors.message?.type === "required" &&
              "El campo de mensaje es requerido."}
            {errors.message?.type === "maxLength" &&
              "El mensaje no puede superar los 500 caracteres."}
            {errors.message?.type === "minLength" &&
              "El mensaje debe tener un minimo de 10 caracteres."}

            <input type="submit" />
          </form>


    );
}
 
export default Form;