<template>
    <div class="container">
        <h1 class="title">World Travel Quiz</h1>
        <button class="start-btn" @click="startQuiz">Start quiz</button>
    </div>
</template>

<script>

export default {
    name: "Home",
    methods: {
        startQuiz() {
            this.$router.push({name: "Quiz"})
        }
    }
};
</script>

<style scoped>

.title {
    color: white;
    font-size: 85px;
}
</style>