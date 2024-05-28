import { useState } from "react";
import {sample} from "lodash";
import './EightBall.css';


const defaultAnswers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]

/**
 * Displays a colored circle with an answer
 *
 * Props: {answers:[{ msg: STRING, color: STRING },...]}
 *
 * State: answer
 *      default to {msg: "Think of a Question.", color: "black" }
 *
 * App -> EightBall
 */

function EightBall({answers=defaultAnswers}){

    const [answer, setAnswer] = useState({
         msg: "Think of a Question.", color: "black" });

    function handleClick(evt){
        const newAnswer = sample(answers);
        setAnswer(newAnswer);
    };

    // NOTE: the div className is always the name of the component, everything else follows the component name
    return(
        <div
                className="EightBall"
                onClick={handleClick}
                style={{backgroundColor:answer.color}} >
            <b className="EightBall-answer">
                {answer.msg}
            </b>
        </div>
    );
}

export default EightBall