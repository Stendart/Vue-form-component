<template>
    <div class="form-control">
        <label>{{title}}
            <input type="text" class="form-control__input"
                   @input="inputHandler($event.target.value)"
                   :value="value"
                   @blur="v.$touch()"
                   :class="{'invalid' : (v.$dirty && v.$error) }">
        </label>
        <small v-for="val in spliceValidators"
               v-if="v.$dirty && getValidatorValue(val)"> {{errorMessage(val)}}</small>
    </div>
</template>

<script>
import {ERROR_MAP} from './errorMap'
    // const ERROR_MAP = {
    //   required : 'Обязательное поле',
    //   minLength : 'Слишком короткая запись',
    //   email : 'Не корректно введён email',
    // }

  export default {
    name: "FormField",
    props: {
      v: {
        type: Object,
      },
      title: {
        type: String,
      },
      value:{}
    },
    data() {
      return {
      }
    },
    methods: {
      checkValidation() {
        this.v.$touch()
      },
      inputHandler(val) {
        this.$emit('input', val)
      },
      getValidatorValue(validator) {
        return !this.v[validator]
      },
      errorMessage(err) {
        return ERROR_MAP[err]
      }
    },
    computed: {
      spliceValidators() {
        const validatorArray = Object.keys(this.v?.$params)
        return validatorArray
      },
    },
    created() {
      this.$parent.$on('check', this.checkValidation);
    },
  }
</script>

<style scoped>

    .form-control {
        width: 100%;
    }

    .form-control__input {
        margin: 0;
        outline: none;
        display: block;
        width: 100%;
        color: #2c3e50;
        padding: 5px 10px;
        border-radius: 25px;
        font-size: 1rem;
        resize: none;

        box-sizing: border-box;
    }

    .form-control small {
        color: #e53935;
        display: block;
    }

    .invalid {
        border-color: #e53935;
    }
</style>
