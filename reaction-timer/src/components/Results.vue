<template>
  <p>Reaction time is {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    name: 'Results',
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 250) {
            this.rank = "Ninja Finger"
        } else if (this.score< 400) {
            this.rank = "Rapid Reflexes"
        } else {
            this.rank = "Snail pace ..."
        }
    }
}
</script>

<style>
.rank {
    font-size: 1.4rem;
    color: #0faf87;
    font-weight: 500;;
}
</style>