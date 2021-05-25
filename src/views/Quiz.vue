<template>
    <div>
        <question-panel :question="question" @answerPicked="storeAnswer"></question-panel>
        <button class="next-btn" @click="nextQuestion">Next <img src="../assets/b_next.svg" style="max-height: 25px"></button>
    </div>
</template>

<script>

import QuestionPanel from "../components/QuestionPanel";

export default {
    name: "Quiz",
    components: {
        QuestionPanel
    },
    data() {
        return {
            question: null,
            input: [
                {
                    "id": "1",
                    "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore, sed diam voluptua.",
                    "answers": [
                        {
                            "id": "1",
                            "text": "At vero eos et accusam et justo duo dolores et ea rebum"
                        },
                        {
                            "id": "2",
                            "text": "Stet clita kasd gubergren"
                        },
                        {
                            "id": "3",
                            "text": "Lorem ipsum dolor sit amet"
                        }
                    ],
                    "correctAnswer": "3"
                },
                {
                    "id": "2",
                    "text": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.",
                    "answers": [
                        {
                            "id": "1",
                            "text": "At vero eos et accusam et justo duo dolores et ea rebum"
                        },
                        {
                            "id": "2",
                            "text": "Stet clita kasd gubergren"
                        },
                        {
                            "id": "3",
                            "text": "Lorem ipsum dolor sit amet"
                        }
                    ],
                    "correctAnswer": "2"
                },
                {
                    "id": "3",
                    "text": "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.",
                    "answers": [
                        {
                            "id": "1",
                            "text": "Consetetur sadipscing elitr"
                        },
                        {
                            "id": "2",
                            "text": "Vel illum dolore eu feugiat nulla facilisis"
                        },
                        {
                            "id": "3",
                            "text": "Stet clita kasd gubergren, no sea takimata sanctus"
                        }
                    ],
                    "correctAnswer": "1"
                }
            ], //TODO mock AJAX call
            results: new Map(),
            showResults: false
        }
    },
    created() {
        // Reset the results in session storage and load first question
        window.sessionStorage.setItem("quizResults", "")
        if(this.input && this.input.length > 0) {
            this.question = this.input[0]
        }
    },
    methods: {
        nextQuestion() {
            let index = this.input.indexOf(this.question)
            if(index + 1 < this.input.length) {
                this.question = this.input[index + 1]
            } else {
                // Convert map to array, then write to session storage
                let array = Array.from(this.results, ([questionId, answer]) => ({ questionId, answer }));
                window.sessionStorage.setItem("quizResults", JSON.stringify(array))
                this.$router.push({name: "Results"})
            }
        },
        storeAnswer(value) {
            if(value) {
                this.results.set(value.questionId, value.answer)
            }
        }
    }

};
</script>

<style scoped>
.next-btn {
    background-color: darkblue;
    color: white;
}
</style>