<template>
    <form @submit.prevent="onSubmit">
<!--        <div class="form-control" :class="{'invalid' : $v.fio.$error }">-->
<!--            <label for="name">ФИО</label>-->
<!--            <input type="text" ref="name"-->
<!--                   id="name" v-model="fio"-->
<!--                   :class="{'invalid' : $v.fio.$error }"-->
<!--            <small v-if="$v.fio.$dirty && !$v.fio.required"> Обязательное поле </small>-->
<!--            <small v-if="$v.fio.$dirty && !$v.fio.email"> Вы ввели некорректный email </small>-->
<!--        </div>-->
            <br>

        <FormField  :validator-list="fioValidators" :v="$v.fio" v-model="fio"></FormField>
        <FormField  :validator-list="fioValidators" :v="$v.phone" v-model="phone"></FormField>

            <br>
            <br>
            <hr>
<!--        <div class="form-control" :class="{'invalid' : $v.fio.$error }">-->
<!--            <div class="form-group" :class="{ 'invalid': $v.fio.$error }">-->
<!--                <label>Name</label>-->
<!--                <input v-model.trim="$v.fio.$model"/>-->
<!--            </div>-->
<!--            <div class="error" v-if="!$v.fio.required">Field is required</div>-->
<!--            <div class="error" v-if="!$v.fio.minLength">Name must have at least {{$v.fio.$params.minLength.min}} letters.</div>-->
<!--        </div>-->
            <br>
<!--            <label for="status">Статус заявки</label>-->
<!--            <select id="status" v-model="status">-->
<!--                <option value="done">Завершен</option>-->
<!--                <option value="cancelled">Отменён</option>-->
<!--                <option value="active">Активен</option>-->
<!--                <option value="pending">Выполняется</option>-->
<!--            </select>-->

            <button type="submit" class="btn primary">Отправить</button>
<!--        </div>-->
    </form>
</template>

<script>
  import { required, minLength, between, email } from 'vuelidate/lib/validators'
  import FormField from './FormField';

  export default {
    name: "AppForm",
    data() {
      return {
        fio: '',
        fioValidators: [
          {
            type: required,
            description: 'Обязательное поле'
          },
          {
            type: email,
            description: 'Неверный формат'
          },
        ],
        phone: null,
        status: ''
      }
    },
    validations: {
      fio: {
        required,
        email,
      },
      phone: {
        minLength: minLength(6)
      }
    },
    methods: {
      onSubmit() {
        console.log('Submit')
        console.log(this.$v.fio.$dirty)

        this.$emit('check');
        /*if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }*/
      },
      submit() {
        console.log('submit!')
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          // do your submit logic here
          this.submitStatus = 'PENDING'
          setTimeout(() => {
            this.submitStatus = 'OK'
          }, 500)
        }
      }
    },
    components: {
      FormField
    }
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
