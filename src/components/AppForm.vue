<template>
    <form @submit.prevent="onSubmit" class="form">
        <div v-if="formPart === 1" :key="1">
            <div class="form__group">
                <FormField class="mt" :v="$v.surName" v-model="surName" :title="'Фамилия*'"></FormField>
                <FormField class="mt" :v="$v.name" v-model="name" :title="'Имя*'"></FormField>
                <FormField class="mt" :v="$v.patronymic" v-model="patronymic" :title="'Отчество'"></FormField>
            </div>
            <div class="gender">
                <label>Пол
                    <div class="gender__radio">
                        <p><input type="radio" name="gender" value="Мужской" v-model="gender">Мужской</p>
                        <p><input type="radio" name="gender" value="Женский" v-model="gender">Женский</p>
                    </div>
                </label>
            </div>
        </div>

        <div v-if="formPart === 2" :key="2">
            <div class="form__group">
                <div>
                    <label>Дата рождения*
                        <input class="form__date" type="date" v-model="birthDate">
                    </label>
                </div>
                <FormField class="mt" :v="$v.phone" v-model="phone" :title="'Номер телефона*'"></FormField>
                <label >
                    <input type="checkbox">Не отправлять СМС
                </label>
            </div>
            <div class="mt">
                <label>Группа клиентов*
                    <div>
                        <select class="client__group" v-model="clientGroup" multiple size="3">
                            <option value="vip">VIP</option>
                            <option value="problem">Проблемные</option>
                            <option value="omc">ОМС</option>
                        </select>
                    </div>
                </label>
            </div>
            <div class="mt">
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
        </div>

        <div v-if="formPart === 3" :key="3">
            <fieldset>
                <legend>Адрес:</legend>
                <FormField :v="$v.index" v-model="index" :title="'Индекс'"></FormField>
                <FormField class="mt" :v="$v.country" v-model="country" :title="'Страна'"></FormField>
                <FormField class="mt" :v="$v.region" v-model="region" :title="'Область'"></FormField>
                <FormField class="mt" :v="$v.city" v-model="city" :title="'Город'"></FormField>
                <FormField class="mt" :v="$v.street" v-model="street" :title="'Улица'"></FormField>
                <FormField class="mt" :v="$v.house" v-model="house" :title="'Дом'"></FormField>
            </fieldset>
        </div>

        <div v-if="formPart === 4" :key="4">
            <fieldset>
                <legend>Паспорт:</legend>
                <label>Тип документа*
                    <div>
                        <select class="select__group" v-model="documentType">
                            <option value="done">Паспорт</option>
                            <option value="cancelled">Свидетельство о рождении</option>
                            <option value="active">Вод. удостоверение</option>
                        </select>
                    </div>
                </label>
                <FormField class="mt" :v="$v.documentSeries" v-model="documentSeries" :title="'Серия'"></FormField>
                <FormField class="mt" :v="$v.documentNumber" v-model="documentNumber" :title="'Номер'"></FormField>
                <FormField class="mt" :v="$v.documentIssued" v-model="documentIssued" :title="'Кем выдан'"></FormField>
                <FormField class="mt" :v="$v.documentDate" v-model="documentDate" :title="'Дата выдачи*'"></FormField>
            </fieldset>
        </div>

        <div class="mt">
            <button v-if="formPart > 1" @click="formPart--" type="button" class="btn primary">Назад</button>
            <button v-if="formPart < 4" @click="formPart++" type="button" class="btn primary">Далее</button>
            <button v-if="formPart === 4" type="submit" class="btn primary">Отправить</button>
        </div>

    </form>
</template>

<script>
  import { required,  minLength, maxLength, numeric, email, helpers } from 'vuelidate/lib/validators'
  import FormField from './FormField';

  const checkFirstPhoneNum = (number) =>  !helpers.req(number) || number.toString()[0] === '7'

  const alpha = helpers.regex('alpha', /^[а-яА-Яa-zA-Z]*$/)
  const alphaNum = helpers.regex('alphaNum', /^[а-яА-Яa-zA-Z0-9]*$/)

  export default {
    name: "AppForm",
    data() {
      return {
        formPart: 1,

        name: '',
        surName: '',
        patronymic: '',
        gender: '',

        birthDate: '',
        phone: null,
        isSendMessage: false,
        clientGroup: [],
        doctor: '',

        index: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: '',

        documentType: '',
        documentSeries: '',
        documentNumber: '',
        documentIssued: '',
        documentDate: ''
      }
    },
    validations: {
      name: {
        required,
        alpha
      },
      surName: {
        required,
        alpha
      },
      patronymic: {
        alpha
      },
      gender: {},

      birthDate: {
        required,
        maxValue: new Date().toLocaleDateString()
      },
      phone: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
        numeric,
        checkFirstPhoneNum
      },
      isSendMessage: {},
      clientGroup: {
        required,
      },
      doctor: {},

      index: {
        numeric
      },
      country: {
        alpha
      },
      region: {
        alphaNum
      },
      city: {
        required,
        alphaNum
      },
      street: {
        alphaNum
      },
      house: {},

      documentType: {
        required,
      },
      documentSeries: {
        alpha
      },
      documentNumber: {
        numeric
      },
      documentIssued: {
        alphaNum
      },
      documentDate: {
        required,
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
        border-radius: 25px;
        outline: none;
    }

    .form__date {
        box-sizing: border-box;

        display: block;
        width: 100%;
        height: 30px;

        border-radius: 25px;
        padding: 0 10px;
        outline: none;
    }
</style>
