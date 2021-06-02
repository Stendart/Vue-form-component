<template>
  <div id="app">
    <button class="btn center" @click="openModal">Регистрация</button>
    <appModal title="Форма создания клиента" v-if="isShowModal" @close="closeModal">
      <AppForm @completedForm="completedForm" v-if="isShowForm"></AppForm>
      <AppMessage v-if="!isShowForm"></AppMessage>
    </appModal>
  </div>
</template>

<script>
import AppModal from './components/AppModal';
import AppForm from './components/AppForm';
import AppMessage from './components/AppMessage';

export default {
  name: 'App',
  data() {
    return {
      isShowForm: false,
      isShowModal: false
    }
  },
  methods: {
    completedForm() {
      this.isShowForm = false
    },
    closeModal() {
      this.isShowForm = false
      this.isShowModal = false
    },
    openModal() {
      this.isShowForm = true
      this.isShowModal = true
    }
  },
  components: {
    AppModal,
    AppForm,
    AppMessage
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

}

.btn {
  color: #42b983;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid #42b983;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #fff;
  transition: all 0.22s;
}

.btn:hover {
  cursor: pointer;
  opacity: 0.8;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 1!important;
  background: #eee!important;
  border-color: #ddd!important;
  color: #999!important;
}

.btn:active {
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.center {
    display: block;
    margin: 0 auto;
}
</style>
