<template>
  <div class="block" v-if="showBlock" @click="stopTimer">click me</div>
  <h3 v-if="completed">Your reaction time is {{ reactionTime }} ms</h3>
</template>

<script>
export default {
    props: ['delay'],
    data() {
      return {
        showBlock: false,
        timer: null,
        reactionTime: 0,
        completed: false
      }
    },
    emits: ["end"],
    mounted() {
      setTimeout(
        () => {
          this.showBlock = true;
          console.log(this.delay);
          this.startTimer()
        },
        this.delay)
    },
    methods: {
      startTimer() {
        this.timer = setInterval(() => {
          this.reactionTime += 10
        }, 10);
      },
      stopTimer() {
        clearInterval(this.timer)
        console.log(this.reactionTime)
        this.showBlock = false
        this.completed = true
        this.$emit('end', this.reactionTime)
      }
    }
}
</script>
    
<style>
.block {
    width: 400px;
    background: #0faf87;
    color: white;
    padding: 100px 0;
    margin: 40px auto;
    text-align: center;
    border-radius: 20px;
}
</style>