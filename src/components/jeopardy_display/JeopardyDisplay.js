import React from 'react'

function JeopardyDisplay(props) {
    
    if (props.categorySelected === false){
        return(
            <div>
            <div><h2>Choose a Category:</h2></div>
        <div> 
            <button name='0' onClick={props.handleCategorySelection}><strong>1:</strong> {props.category0}</button> 
            <button name='1' onClick={props.handleCategorySelection}><strong>2:</strong> {props.category1}</button> 
            <button name='2' onClick={props.handleCategorySelection}><strong>3:</strong> {props.category2}</button>
            </div>< br/>
        
        </div>
        )
    }

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
            <strong>Category: </strong> {props.categorySelectedCategory}<br />
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

export default JeopardyDisplay;