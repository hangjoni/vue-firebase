import { ref } from "vue";

const getPost = (id) => {
  const post = ref([]);
  const error = ref(null);

  // when load is invoked, it will look in its context for posts and error
  const load = async () => {
    try {
      let data = await fetch(`http://localhost:3000/posts/${id}`);
      if (!data.ok) {
        throw Error("that post does not exist");
      }
      post.value = await data.json();
    } catch (err) {
      console.log("error", err.message);
      error.value = err.message;
    }
  };
  return { post, error, load };
};

export default getPost;
