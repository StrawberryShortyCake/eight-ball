import {shuffle} from "lodash"
import './EightBall.css';
/**
 * Displays a colored circle with an answer
 *
 * Props: [{ msg: STRING, color: STRING },...]
 *
 * State: answer
 *      default to {msg: "Think of a Question.", color: "black" }
 *
 * App -> EightBall
 */

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

function EightBall({answers=defaultAnswers}){

    const [answer, setAnswer] = useState({
         msg: "Think of a Question.", color: "black" })

    function handleClick(evt){
        const shuffledArray = shuffle(answers)
        setAnswer(shuffledArray[0])
    }

    return(
        <div className="eight-ball" onClick={handleClick}
            style={`background-color:${answer.color}`} >
            <h3 className="ball-answer">
                {answer.msg}
            </h3>
        </div>
    )
}

export default EightBall