<template>
    <form @submit.prevent="onSubmit" class="form">
        <div v-if="formPart === 1" :key="1">
            <div class="form__group">
                <FormField class="mt" :v="$v.form.surName" v-model="form.surName" :title="'Фамилия*'"></FormField>
                <FormField class="mt" :v="$v.form.firstName" v-model="form.firstName" :title="'Имя*'"></FormField>
                <FormField class="mt" :v="$v.form.patronymic" v-model="form.patronymic" :title="'Отчество'"></FormField>
            </div>
            <div class="gender">
                <label>Пол
                    <div class="gender__radio">
                        <p><input type="radio" name="gender" value="Мужской" v-model="form.gender">Мужской</p>
                        <p><input type="radio" name="gender" value="Женский" v-model="form.gender">Женский</p>
                    </div>
                </label>
            </div>
        </div>

        <div v-if="formPart === 2" :key="2">
            <div class="form__group">
                <div>
                    <label>Дата рождения*
                        <input class="form__date" type="date" v-model="form.birthDate">
                    </label>
                    <small v-if="isTouch && !$v.form.birthDate.required"> Обязательное поле </small>
                    <small v-else-if="isTouch && !$v.form.birthDate.maxValue"> Дата не может быть выше текущей </small>
                </div>
                <FormField class="mt" :v="$v.form.phone" v-model="form.phone" :title="'Номер телефона*'"></FormField>
                <label >
                    <input type="checkbox">Не отправлять СМС
                </label>
            </div>
            <div class="mt">
                <label>Группа клиентов*
                    <div>
                        <select class="client__group" v-model="form.clientGroup" @blur="$v.form.clientGroup.$touch" multiple size="3">
                            <option value="vip">VIP</option>
                            <option value="problem">Проблемные</option>
                            <option value="omc">ОМС</option>
                        </select>
                    </div>
                </label>
                <small v-if="$v.form.clientGroup.$dirty && !$v.form.clientGroup.required"> {{errorMessage('required')}}</small>
            </div>
            <div class="mt">
                <label>Лечащий врач
                    <div>
                        <select class="select__group" v-model="form.doctor">
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
                <FormField :v="$v.form.index" v-model="form.index" :title="'Индекс'"></FormField>
                <FormField class="mt" :v="$v.form.country" v-model="form.country" :title="'Страна'"></FormField>
                <FormField class="mt" :v="$v.form.region" v-model="form.region" :title="'Область'"></FormField>
                <FormField class="mt" :v="$v.form.city" v-model="form.city" :title="'Город*'"></FormField>
                <FormField class="mt" :v="$v.form.street" v-model="form.street" :title="'Улица'"></FormField>
                <FormField class="mt" :v="$v.form.house" v-model="form.house" :title="'Дом'"></FormField>
            </fieldset>
        </div>

        <div v-if="formPart === 4" :key="4">
            <fieldset>
                <legend>Паспорт:</legend>
                <label>Тип документа*
                    <div>
                        <select class="select__group" v-model="form.documentType">
                            <option value="done">Паспорт</option>
                            <option value="cancelled">Свидетельство о рождении</option>
                            <option value="active">Вод. удостоверение</option>
                        </select>
                        <small v-if="isTouch && !$v.form.documentType.required"> {{errorMessage('required')}}</small>
                    </div>
                </label>
                <FormField class="mt" :v="$v.form.documentSeries" v-model="form.documentSeries" :title="'Серия'"></FormField>
                <FormField class="mt" :v="$v.form.documentNumber" v-model="form.documentNumber" :title="'Номер'"></FormField>
                <FormField class="mt" :v="$v.form.documentIssued" v-model="form.documentIssued" :title="'Кем выдан'"></FormField>
<!--                <FormField class="mt" :v="$v.form.documentDate" v-model="form.documentDate" :title="'Дата выдачи*'"></FormField>-->
                <div class="mt">
                    <label>Дата выдачи*
                        <input class="form__date" type="date" v-model="form.documentDate">
                    </label>
                    <small v-if="isTouch && !$v.form.documentDate.required"> Обязательное поле </small>
                    <small v-else-if="isTouch && !$v.form.documentDate.maxValue"> Дата не может быть выше текущей </small>
                </div>
            </fieldset>
        </div>

        <div class="mt">
            <button :disabled="!(formPart > 1)" @click="formPart--" type="button" class="btn primary">Назад</button>
            <button :disabled="!(formPart < 4)" @click="formPart++" type="button" class="btn primary">Далее</button>
            <button :disabled="formPart !== 4" type="submit" class="btn primary">Отправить</button>
        </div>
    </form>
</template>

<script>
  import { required,  minLength, maxLength, numeric, helpers } from 'vuelidate/lib/validators'
  import FormField from './FormField';
  import {ERROR_MAP} from './errorMap'

  const checkFirstPhoneNum = (number) =>  !helpers.req(number) || number.toString()[0] === '7'

  const alpha = helpers.regex('alpha', /^[а-яА-Яa-zA-Z]*$/)
  const alphaNum = helpers.regex('alphaNum', /^[а-яА-Яa-zA-Z0-9]*$/)

  const customRequired = (val) => {
    if(typeof val === 'string')
      return val.length !== 0
  }

  const customMaxDate = (date) => {
    return new Date(date) < new Date()
  }

  export default {
    name: "AppForm",
    data() {
      return {
        formPart: 1,
        isTouch: false,

        form: {
          firstName: '',
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

      }
    },
    validations: {
      form: {
        firstName: {
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
          required: customRequired,
          maxValue: customMaxDate
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
          required: customRequired,
          maxValue: customMaxDate
        }
      }

    },
    methods: {
      onSubmit() {
        this.$v.form.clientGroup.$touch()
        this.customTouch()
        this.$emit('check')

        if (!this.$v.$invalid) {
          this.$emit('completedForm')
        }
      },
      errorMessage(err) {
        return ERROR_MAP[err]
      },
      customTouch() {
        this.isTouch = true
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
    small {
        color: #e53935;
        display: block;
    }
</style>
