import {shuffle} from "lodash"
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

function EightBall({answers}){

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