<template>
    <div class="container" style="flex-direction: column">
        <h1>Your results:</h1>
        <ul v-if="stats">
            <li v-for="(item, index) in stats" :key="index" type="none">
                 {{ "Question " +  item.questionId + " - Your answer: " + item.answer}}
            </li>
        </ul>
        <span v-else>{{ "Something went wrong while processing your results" }}</span>
        <br>
        <button class="start-btn" @click="restartQuiz()">Restart Quiz</button>
    </div>
</template>

<script>

export default {
    name: "Results",
    data() {
        return {
            stats: null
        }
    },
    mounted() {
        this.loadStats()
    },
    methods: {
        loadStats() {
            let stats = window.sessionStorage.getItem("quizResults")
            if(stats) {
                this.stats = JSON.parse(stats)
                console.log(this.stats)
            }
        },
        restartQuiz() {
            this.$router.push({name: "Quiz"})
        }
    }
};
</script>

<style scoped>

</style>