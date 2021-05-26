<template>
    <div>
        <question-panel v-if="questions" :question="question" @answerPicked="storeAnswer"></question-panel>
        <button class="next-btn" @click="nextQuestion"><img src="../assets/b_next.svg" style="height: 25px"></button>
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
            questions: null,
            results: new Map(),
            showResults: false,
            allowNext: false
        }
    },
    created() {
        fetch("/api/questions")
        .then((res) => res.json())
        .then((json) => {
            this.questions = json.questions
            // Reset the results in session storage and load first question
            window.sessionStorage.setItem("quizResults", "")
            if(this.questions && this.questions.length > 0) {
                this.question = this.questions[0]
            }
        })
    },
    methods: {
        nextQuestion() {
            if(this.allowNext) {
                this.allowNext = false

                let index = this.questions.indexOf(this.question)
                if(index + 1 < this.questions.length) {
                    this.question = this.questions[index + 1]
                } else {
                    // Convert map to array, then write to session storage
                    let array = Array.from(this.results, ([questionId, answer]) => ({ questionId, answer }));
                    window.sessionStorage.setItem("quizResults", JSON.stringify(array))
                    this.$router.push({name: "Results"})
                }
            }
        },
        storeAnswer(value) {
            if(value) {
                this.results.set(value.questionId, value.answer)
                this.allowNext = true
            }
        }
    }

};
</script>

<style scoped>
.next-btn {
    background-color: darkblue;
    color: white;
    position: fixed;
    right: 15px
}
</style>