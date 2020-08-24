import React, { Component } from 'react'

class JeopardyAnswer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            formData: {
                answer: '',
            }
        }
    }

    handleChange = (event) => {
        const formData = { ...this.state.formData };
        formData[event.target.answer] = event.target.value;

        this.setState({ formData: {
            answer: event.target.value
        } });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            submitted: true
        })
    }

    resetForm = (event) => {
        this.setState({
            submitted: false,
            formData: {
                answer: '',
            }
        })
        this.getNewQuestion();
        
    }

    render() {

        if (this.state.submitted) {
            return (
                <div className="resetForm">
                    <button onClick={this.resetForm}>Next Question</button>
                </div>
            )
        }

        return (
            <div className="jeopardyAnswer">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="answer">Your Answer: </label>
                        <input
                            type="text"
                            name="jeopardyAnswer"
                            value={this.state.formData.answer}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Submit Answer</button>
                </form>
                <div>
                    {this.state.formData.answer}
                </div>
            </div>
        );
    }
}

export default JeopardyAnswer;