<template>
  <div id="app">
    <button class="btn" @click="isShowForm = true">Регистрация</button>
    <appModal title="Форма создания клиента" v-if="isShowForm" @close="isShowForm = false">
      <AppForm></AppForm>
    </appModal>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import AppModal from './components/AppModal';
import AppForm from './components/AppForm';

export default {
  name: 'App',
  data() {
    return {
      isShowForm: false
    }
  },
  components: {
    AppModal,
    AppForm
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
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
</style>
