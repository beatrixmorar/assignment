<template>
    <div class="container" style="flex-direction: column">
        <template v-if="stats && stats.length > 0">
            <h1>Your results:</h1>
            <span>{{ message }}</span>
            <ul>
                <li v-for="(item, index) in stats" :key="index" type="none">
                    {{ "Question " +  item.questionId + " - Your answer: " + item.answer}}
                </li>
            </ul>
        </template>
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
            stats: null,
            message: null
        }
    },
    mounted() {
        this.loadStats()
        fetch("/api/questions/validation", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.stats),
        })
        .then((res) => res.json())
        .then((json) => {
           this.message = json.message
        })
    },
    methods: {
        loadStats() {
            let stats = window.sessionStorage.getItem("quizResults")
            if(stats) {
                this.stats = JSON.parse(stats)
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