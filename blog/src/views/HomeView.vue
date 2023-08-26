<template>
  <div>
    <h1>Home</h1>
    <p v-if="error">{{ error }}</p>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import getPosts from "../composables/getPosts";

export default {
  components: { PostList },
  name: "HomeView",
  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>

<style></style>
