<template>
  <h1>Post List</h1>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost";

export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {},
};
</script>

<style></style>
