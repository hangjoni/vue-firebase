<template>
  <h1>my first Vue app</h1>
  <div v-if="showModal">
    <ModalComponent theme="sale" @close="toggleModal">
      <h1>Ninja Givaway</h1>
      <p>Grab your ninja swag for half price</p>
      <template v-slot:links>
        <a href="#">signup</a>
        <a href="#">More info</a>
      </template>
    </ModalComponent>
  </div>
  <button @click="toggleModal">Show modal</button>
  
  <div v-if="showModal2">
    <ModalComponent theme="sale" @close="toggleModal2">
      <h1>Hello time for tea</h1>
      <p>Grab your teapot</p>
      <template v-slot:links>
        <a href="#">Get tea</a>
        <a href="#">More biscuit</a>
      </template>
    </ModalComponent>
  </div>
  <button @click="toggleModal2">Show tea modal</button>
</template>

<script>
import ModalComponent from './components/ModalComponent.vue'
export default {
  name: 'App',
  components: {
    ModalComponent
  },
  data() {
    return {
      showModal: false, 
      showModal2: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
