<template>
 <div class="container question-panel">
     <div style="color: white">
         <span>{{ question.id + ". " + question.text }}</span>

         <div v-for="answer in question.answers" :key="answer.id">
             <template v-if="showFeedback">
                 <i v-if="isCorrect(answer)" class="fas fa-check" style="color: green; margin-right: 3px"></i>
                 <i v-else class="fas fa-times" style="color: red; margin-right: 8px"></i>
             </template>
             <input type="radio" :id="answer.id" :value="answer.id" v-model="picked">
             <label :for="answer.id">{{ answer.text }}</label>
         </div>
     </div>
 </div>
</template>

<script>

export default {
    name: "QuestionPanel",
    data() {
        return {
            picked: null,
            showFeedback: false,
            readOnly: false
        }
    },
    props: {
        question: {
            type: Object,
            required: true
        }
    },
    methods: {
        /**
         * Show feedback to the user and emit custom event to parent
         */
        showResult() {
            this.showFeedback = true
            this.readOnly = true
            let payload = {questionId: this.question.id, answer: this.picked}
            this.$emit('answerPicked', payload)
        },
        isCorrect(answer) {
            return this.question.correctAnswer === answer.id
        }
    },
    watch: {
        /**
         * When an answer is selected, show result
         */
        picked() {
            if(this.picked) {
                this.showResult()
            }
        },
        /**
         * When question changes, reset props
         */
        question: function () {
            this.picked = null;
            this.showFeedback = false
        }
    }
};
</script>

<style scoped>
.question-panel {
    background-image: url("../assets/lh-1.jpg");
}

.next-btn {
    background-color: darkblue;
    color: white;
}
</style>