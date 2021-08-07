
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


    return (  <div className="container-form">
<h3>Haz tu pregunta</h3>
<form  onSubmit={handleSubmit(onSubmit)}>
         
            <div className="text-area-msg">
            <textarea
              placeholder="Escribi tu pregunta..."
              {...register("message", {
                required: true,
                maxLength: 500,
                minLength: 10,
              })}
            />
            <div className="error">
            {errors.message?.type === "required" &&
              "El campo de mensaje es requerido."}
            {errors.message?.type === "maxLength" &&
              "El mensaje no puede superar los 500 caracteres."}
            {errors.message?.type === "minLength" &&
              "El mensaje debe tener un minimo de 10 caracteres."}</div>
      </div>

<div className="container-bottom-form">
      <div className="input-email">
            <input
              type="text" placeholder="Ingresa tu email"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <div className="error">{errors.email?.type === "required" &&
              "El campo de email es requerido."}
            {errors.email?.type === "pattern" && "Ingrese un email valido."}</div>
            </div>

            <input className="button-submit" type="submit" />
            </div>
          </form>
          </div>

    );
}
 
export default Form;