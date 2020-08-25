import React from 'react'
import Jeopardy from '../jeopardy/Jeopardy'

function JeopardyDisplay(props) {
    
        if(props.submitted && props.submittedAnswer === props.answer){
            return (
                <div>
                <div><h4>You answered correct! Answer is: {props.answer}</h4><br /></div>
                <div> <strong>User Score: </strong> {props.score} < br />
                </div>
                <div className="resetForm">
                    <button onClick={props.resetForm}>Next Question</button>
                </div>
                </div>
            )
        }

        if(props.submitted && props.submittedAnswer !== props.answer){
            return (
                <div>
                <div><h4>You answered Incorrect! Answer is: {props.answer}</h4><br /></div>
                <div> <strong>User Score: </strong> {props.score} < br />
                </div>
                <div className="resetForm">
                    <button onClick={props.resetForm}>Next Question</button>
                </div>
                </div>
            )
        }

    return (
        <div>
        <div> <strong>User Score: </strong> {props.score} < br />
            <strong>Category: </strong> {props.category}<br />
            <strong>Question: </strong> {props.question} < br />
            <strong>Value: </strong> {props.value}< br />
        </div>

        <div className="jeopardyAnswer">
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="answer">Your Answer: </label>
                    <input
                        type="text"
                        name="jeopardyAnswer"
                        value={props.submittedAnswer}
                        onChange={props.handleChange}
                    />
                </div>
                <button>Submit Answer</button>
            </form>
            <div>
                {props.submittedAnswer}
            </div>
        </div>
    </div>
)
}

export default JeopardyDisplay