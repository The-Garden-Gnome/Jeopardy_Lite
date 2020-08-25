import React, { Component } from 'react';
import JeopardyService from "../../jeopardyService";
import JeopardyDisplay from '../jeopardy_display/JeopardyDisplay';

class Jeopardy extends Component {
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {
                category:{
                    title:'',
                },
            },
            score: 0,
            submitted: false,
            formData: {
                answer: ''
            },
        }
    }
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
        })
    }
    componentDidMount() {
        this.getNewQuestion();
       
    }

    


    handleChange = (event) => {
        const formData = { ...this.state.formData };
        formData[event.target.answer] = event.target.value;
        

        this.setState({
            formData: {
                answer: event.target.value
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            submitted: true
        })

        if (this.state.formData.answer === this.state.data.answer) {
            const scoreData = { ...this.state };
        scoreData[event.target.score] = this.state.data.value;
            this.setState({
                score: this.state.score + this.state.data.value
            })
    }

    else{
        const scoreData = { ...this.state };
        scoreData[event.target.score] = this.state.data.value;
            this.setState({
                score: this.state.score - this.state.data.value
            })
    }
}

    resetForm = (event) => {
        this.getNewQuestion()
        this.setState({
            submitted: false,
            formData: {
                answer: '',
            },
        })

    }

    render() {

        // let category = "loading..."
        // if (this.state.data.category) {
        //     category = this.state.data.category.title
        // }
    
        // if(this.state.submitted && this.state.formData.answer === this.state.data.answer){
        //     return (
        //         <div>
        //         <div><h4>You answered correct! Answer is: {this.state.data.answer}</h4><br /></div>
        //         <div> <strong>User Score: </strong> {this.state.score} < br />
        //         </div>
        //         <div className="resetForm">
        //             <button onClick={this.resetForm}>Next Question</button>
        //         </div>
        //         </div>
        //     )
        // }

        // if(this.state.submitted && this.state.formData.answer !== this.state.data.answer){
        //     return (
        //         <div>
        //         <div><h4>You answered Incorrect! Answer is: {this.state.data.answer}</h4><br /></div>
        //         <div> <strong>User Score: </strong> {this.state.score} < br />
        //         </div>
        //         <div className="resetForm">
        //             <button onClick={this.resetForm}>Next Question</button>
        //         </div>
        //         </div>
        //     )
        // }

        return (
            // <div>
            //     <div> <strong>User Score: </strong> {this.state.score} < br />
            //         <strong>Category: </strong> {category}<br />
            //         <strong>Question: </strong> {this.state.data.question} < br />
            //         <strong>Value: </strong> {this.state.data.value}< br />
            //     </div>

            //     <div className="jeopardyAnswer">
            //         <form onSubmit={this.handleSubmit}>
            //             <div>
            //                 <label htmlFor="answer">Your Answer: </label>
            //                 <input
            //                     type="text"
            //                     name="jeopardyAnswer"
            //                     value={this.state.formData.answer}
            //                     onChange={this.handleChange}
            //                 />
            //             </div>
            //             <button>Submit Answer</button>
            //         </form>
            //         <div>
            //             {this.state.formData.answer}
            //         </div>
            //     </div>
            // </div>
            < JeopardyDisplay 
            category={this.state.data.category.title} 
            score= {this.state.score} 
            question={this.state.data.question} 
            value={this.state.data.value}
            submitted={this.state.submitted}
            submittedAnswer={this.state.formData.answer}
            answer={this.state.data.answer}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            resetForm={this.resetForm}
            />
        );
    }
}
export default Jeopardy;