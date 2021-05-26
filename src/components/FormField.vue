<template>
    <div class="form-control" :class="{'invalid' : $v.field.$error }">
        <label for="name">ФИО</label>
        <input type="text" ref="name"
               id="name" v-model="field"
               :class="{'invalid' : $v.field.$error }">
        <small v-if="$v.field.$dirty && !$v.field.required"> Обязательное поле </small>
        <small v-if="$v.field.$dirty && !$v.field.email"> Вы ввели некорректный email </small>
        {{$v.field.$error}}
    </div>
</template>

<script>
  import * as vlidate from 'vuelidate/lib/validators'
  // import {required} from 'vuelidate/lib/validators';

  export default {
    name: "FormField",
    props: {
      // field: String,
      // value: String,
      // validatorList: Array,
  // {
  //  type: email,
  //  description: 'Обязательное поле'
  // }
    },
    data() {
      return {
        field: ''
      }
    },
    methods: {
      inputHandler(val) {
        // console.log(val.target.value)
        // this.$emit('input', val.target.value);
        this.$v.$touch()
      }
    },
    created: function() {
      this.$parent.$on('check', this.inputHandler);
    },
    validations: {
      field: {
        required: vlidate['required'],
        email: vlidate['email'],
      }
    }
  }
</script>

<style scoped>

</style>
