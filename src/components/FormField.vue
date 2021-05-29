<template>
    <div class="form-control" :class="{'invalid' : v.$error }">
        <label for="name">ФИО</label>
        <input type="text" ref="name"
               id="name" @input="setName($event.target.value)"
               :class="{'invalid' : v.$error }">
<!--        <small v-if="v.$dirty && !v.required"> Обязательное поле </small>-->
<!--        <small v-if="!v.required"> Обязательное поле </small> {{v.required}}-->
        <small v-for="val in spliceValidators" v-if="v.$dirty && getValidatorValue(val)"> {{val}} / {{getValidatorValue(val)}}</small>
    </div>
</template>

<script>

  export default {
    name: "FormField",
    props: {
      validatorList: Array,
      v: {
        type: Object,
        required: true
      },
      test: {

      }
    },
    data() {
      return {
        field: '',
      }
    },
    methods: {
      inputHandler() {
        console.log(this.v)
        this.v.$touch()
      },
      setName(val) {
        this.$emit('input', val)
      },
      getValidatorValue(validator) {
        // if(validator === 'required') {
        //   return !this.v[validator]
        // }
        return !this.v[validator]
      }
    },
    computed: {
      spliceValidators() {
        const validatorArray = Object.keys(this.v?.$params);
        return validatorArray
      },
    },
    created() {
      this.$parent.$on('check', this.inputHandler);
      // console.log('Proverka', this.v?.$params)
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
