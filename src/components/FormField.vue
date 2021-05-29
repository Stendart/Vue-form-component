<template>
    <div class="form-control" :class="{'invalid' : v.$error }">
        <label for="name">ФИО</label>
        <input type="text" ref="name"
               id="name" v-model="field"
               :class="{'invalid' : v.$error }">
        <small v-if="v.$dirty && !v.required"> Обязательное поле </small>
        <small v-for="val in spliceValidators"> {{val.type}} </small>
<!--        <small v-if="$v.field.$dirty && !$v.field.email"> Вы ввели некорректный email </small>-->
    </div>
</template>

<script>
  import * as validate from 'vuelidate/lib/validators'


  export default {
    name: "FormField",
    props: {
      // field: String,
      // value: String,
      validatorList: Array,
      v: {
        type: Object,
        requaired: true
      }
  // {
  //  type: email,
  //  description: 'Обязательное поле'
  // }
    },
    data() {
      return {
        field: '',
      }
    },
    methods: {
      inputHandler(val) {
        // console.log(val.target.value)
        // this.$emit('input', val.target.value);
        this.v.$touch()
      }
    },
    computed: {
      spliceValidators() {
        const a = Object.keys(this.v?.$params);
        a.forEach(e => console.log('val = ', this.v[e]))
        const b = this.v;
        console.log(a)
        console.log(b)
        return this.v?.$params
      },
    },
    created() {
      this.$parent.$on('check', this.inputHandler);
      console.log('Proverka', this.v?.$params)
      // for (var prop in this.v) {
      //   console.log("obj." + prop + " = " + this.v[prop]);
      // }
    },
    // validations: { // передавать объект пропсой и в computed парсить его на 2 поля
    //   field: {
    //     required: validate['required'],
    //   }
    // }
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
