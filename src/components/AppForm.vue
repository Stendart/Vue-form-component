<template>
    <form @submit.prevent="onSubmit" class="form">
        <div v-if="formPart === 1">
            <div class="form__group">
                <FormField class="mt" :v="$v.fio" v-model="fio" :title="'Фамилия*'"></FormField>
                <FormField class="mt" :v="$v.phone" v-model="phone" :title="'Имя*'"></FormField>
                <FormField class="mt" :v="$v.phone" v-model="phone" :title="'Отчество'"></FormField>
            </div>

            <div class="gender">
                <label >Пол
                    <div class="gender__radio">
                        <p><input type="radio" name="gender" >Мужской</p>
                        <p><input type="radio" name="gender" >Женский</p>
                    </div>
                </label>
            </div>
        </div>





        <div v-if="formPart === 2">
            <div class="form__group">
                <div>
                    <label>Дата рождения*
                        <input class="form__date" type="date">
                    </label>
                </div>
                <FormField class="mt" :v="$v.phone" v-model="phone" :title="'Номер телефона'"></FormField>
                <label class="mt">
                    <input type="checkbox">Не отправлять СМС
                </label>
            </div>


            <label>Группа клиентов*
                <div>
                    <select class="client__group" v-model="clientGroup" multiple size="3">
                        <option value="vip">VIP</option>
                        <option value="problem">Проблемные</option>
                        <option value="omc">ОМС</option>
                    </select>
                </div>
            </label>

            <label>Лечащий врач
                <div>
                    <select class="select__group" v-model="doctor">
                        <option value="done">Иванов</option>
                        <option value="cancelled">Захаров</option>
                        <option value="active">Чернышева</option>
                    </select>
                </div>
            </label>
        </div>




        <div v-if="formPart === 3">
            <fieldset>
                <legend>Адрес:</legend>
                <FormField :v="$v.phone" v-model="phone" :title="'Индекс'"></FormField>
                <FormField class="mt" :v="$v.phone" v-model="phone" :title="'Страна'"></FormField>
                <FormField class="mt" :v="$v.phone" v-model="phone" :title="'Город'"></FormField>
                <FormField class="mt" :v="$v.phone" v-model="phone" :title="'Дом'"></FormField>
            </fieldset>
        </div>
        <div v-if="formPart === 4">
            <fieldset>
                <legend>Паспорт:</legend>
                <label>Тип документа*
                    <div>
                        <select class="select__group" v-model="doctor">
                            <option value="done">Паспорт</option>
                            <option value="cancelled">Свидетельство о рождении</option>
                            <option value="active">Вод. удостоверение</option>
                        </select>
                    </div>
                </label>
                <FormField class="mt" :v="$v.phone" v-model="phone" :title="'Серия'"></FormField>
                <FormField class="mt" :v="$v.phone" v-model="phone" :title="'Номер'"></FormField>
                <FormField class="mt" :v="$v.phone" v-model="phone" :title="'Кем выдан'"></FormField>
                <FormField class="mt" :v="$v.phone" v-model="phone" :title="'Дата выдачи*'"></FormField>
            </fieldset>
        </div>


<!--            <label for="status">Статус заявки</label>-->
<!--            <select id="status" v-model="status">-->
<!--                <option value="done">Завершен</option>-->
<!--                <option value="cancelled">Отменён</option>-->
<!--                <option value="active">Активен</option>-->
<!--                <option value="pending">Выполняется</option>-->
<!--            </select>-->

            <button v-if="formPart !== 4" @click="nextPatr" class="btn primary">Далее</button>
            <button v-if="formPart === 4" type="submit" class="btn primary">Отправить</button>
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
        formPart: 1,
        fio: '',
        phone: null,
        clientGroup: [],
        doctor: ''
      }
    },
    validations: {
      fio: {
        required,
        email,
      },
      phone: {
        minLength: minLength(6),
      }
    },
    methods: {
      onSubmit() {
        console.log('Submit')

        this.$emit('check')
        /*if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }*/
      },
      nextPatr() {
        if(this.formPart < 4) {
          this.formPart++
        }
      }
    },
    components: {
      FormField
    }
  }
</script>

<style scoped>
    .mt {
        margin-top: 20px;
    }
    .form__group {
        display: flex;
        justify-content: space-between;
        /*align-items: flex-end;*/
        flex-direction: column;
    }

    .gender {
        width: 100%;
        margin-top: 20px;
    }
    .gender__radio {
        max-width: 300px;
        display: flex;
        justify-content: space-between;
    }
    .client__group {
        width: 100%;
        border-radius: 10px;
    }
    .client__group option {
        border: 1px solid black;
        border-radius: 10px;
        padding: 5px;
    }
    .select__group {
        width: 100%;
        padding: 5px;
    }

    .form__date {
        box-sizing: border-box;

        display: block;
        width: 100%;
        height: 30px;

        border-radius: 25px;
        padding: 0 10px;
    }

    /*.form-control input,*/
    /*.form-control select,*/
    /*.form-control textarea{*/
    /*    font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;*/
    /*    margin: 0;*/
    /*    outline: none;*/
    /*    !*border: 2px solid #ccc;*!*/
    /*    display: block;*/
    /*    width: 90%;*/
    /*    color: #2c3e50;*/
    /*    padding: 0.5rem 1.5rem;*/
    /*    border-radius: 3px;*/
    /*    font-size: 1rem;*/
    /*    resize: none;*/
    /*}*/

    /*.form-control small {*/
    /*    color: #e53935;*/
    /*}*/

    /*.invalid {*/
    /*    border-color: #e53935;*/
    /*}*/
</style>
