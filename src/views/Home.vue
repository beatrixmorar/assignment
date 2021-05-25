<template>
<div>
    <div class="main container" >
        <div>
            <h1 style="color: white">World Travel Quiz</h1>
            <button class="start-btn" @click="startQuiz">Start quiz</button>
        </div>
    </div>
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
.main {
    background-image: url('../assets/bg_home.jpg');
}

</style>