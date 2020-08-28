import React, { Component } from 'react';
import JeopardyService from "../../jeopardyService";
import JeopardyDisplay from '../jeopardy_display/JeopardyDisplay';

class Jeopardy extends Component {
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {
                category: {
                    title: '',
                },
            },
            data1: {
                category: {
                    title: '',
                },
            },
            data2: {
                category: {
                    title: '',
                },
            },
            selectedCategory: {
                "id": null,
                "answer": '',
                "question": '',
                "value": null,
                "airdate": '',
                "created_at": '',
                "updated_at": '',
                "category_id": null,
                "game_id": null,
                "invalid_count": null,
                "category": {
                    "id": null,
                    "title": '',
                    "created_at": '',
                    "updated_at": '',
                    "clues_count": null
                }
            },
            score: 0,
            submitted: false,
            categorySelected: false,
            formData: {
                answer: ''
            },
        }
    }
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0],
                data1: result.data[1],
                data2: result.data[2]
            })
        })
    }
    componentDidMount() {
        this.getNewQuestion();

    }

    handleCategorySelection = (event) => {
        const selectedCategoryData = event.target.name
        // selectedCategoryData[event.target.name] = event.target.name;

        if (selectedCategoryData === '0') {
            this.setState({
                categorySelected: true,
                selectedCategory: this.state.data
            })
        }
        if (selectedCategoryData === '1') {
            this.setState({
                categorySelected: true,
                selectedCategory: this.state.data1
            })
        }
        if (selectedCategoryData === '2') {
            this.setState({
                categorySelected: true,
                selectedCategory: this.state.data2
            })
        }
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
            categorySelected: true,
            submitted: true
        })

        if (this.state.formData.answer === this.state.data.answer) {
            const scoreData = { ...this.state };
            scoreData[event.target.score] = this.state.data.value;
            this.setState({
                score: this.state.score + this.state.data.value
            })
        }

        else {
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
            categorySelected: false,
            submitted: false,
            selectedCategory: {
                category: {
                    title: '',
                }
            },
            formData: {
                answer: '',
            },
        })

    }

    render() {

        let category = "loading..."
        
        if (this.state.selectedCategory.category) {
            category = this.state.selectedCategory.category.title
        }

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
                category0={this.state.data.category.title}
                category1={this.state.data1.category.title}
                category2={this.state.data2.category.title}
                categorySelected={this.state.categorySelected}
                categorySelectedCategory={category}
                score={this.state.score}
                question={this.state.selectedCategory.question}
                value={this.state.selectedCategory.value}
                submitted={this.state.submitted}
                submittedAnswer={this.state.formData.answer}
                answer={this.state.selectedCategory.answer}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                resetForm={this.resetForm}
                handleCategorySelection={this.handleCategorySelection}
            />
        );
    }
}
export default Jeopardy;