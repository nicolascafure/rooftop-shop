import { IQuestion } from "../../interfaces/iShopStore";
import { dateQuestion } from "../../utils/Time";

export interface QuestionProps {
    question : IQuestion
}
 
const Question: React.FunctionComponent<QuestionProps> = ({question}) => {


    return ( 
        <div className = "container-question">
             <p><span className="question-data-span">Name: </span>{question.customer_name}</p>
           <p><span   className="question-data-span">Question: </span>{question.question}</p>
           <p><span className="question-data-span">Answer: </span>{question.answer}</p>
           <p><span className="question-data-span">Send At: </span>{dateQuestion(question)}</p>
        </div>



     );
}
 
export default Question;