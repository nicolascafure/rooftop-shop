import { IQuestion } from "../interfaces/iShopStore";

export interface QuestionProps {
    question : IQuestion
}
 
const Question: React.FunctionComponent<QuestionProps> = ({question}) => {


    return ( 
        <div className = "container-question">
             <p>{question.customer_name}</p>
           <p>{question.question}</p>
           <p>{question.answer}</p>
           <p>{question.sent_at}</p>
         
        </div>



     );
}
 
export default Question;