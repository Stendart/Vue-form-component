<template>
    <div class="form-control" :class="{'invalid' : v.$error }">
        <label>{{title}}
            <input type="text"
                   @input="inputHandler($event.target.value)"
                   :class="{'invalid' : v.$error }">
        </label>
        <small v-for="val in spliceValidators"
               v-if="v.$dirty && getValidatorValue(val)"> {{errorMessage(val)}} </small>
    </div>
</template>

<script>

    const ERROR_MAP = {
      required : 'Обязательное поле',
      minLength : 'Слишком короткая запись',
      email : 'Не корректно введён email',
    }

  export default {
    name: "FormField",
    props: {
      v: {
        type: Object,
        required: true
      },
      title: {
        type: String,
      }
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
        const validatorArray = Object.keys(this.v?.$params);
        return validatorArray
      },
    },
    created() {
      this.$parent.$on('check', this.checkValidation);
    },
  }
</script>

<style scoped>
    .form-control input,
    .form-control select,
    .form-control textarea{
        font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
        margin: 0;
        outline: none;
        /*border: 2px solid #ccc;*/
        display: block;
        width: 90%;
        color: #2c3e50;
        padding: 0.5rem 1.5rem;
        border-radius: 3px;
        font-size: 1rem;
        resize: none;
    }

    .form-control small {
        color: #e53935;
    }

    .invalid {
        border-color: #e53935;
    }
</style>
