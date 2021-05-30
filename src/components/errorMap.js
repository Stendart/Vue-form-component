import {alpha, alphaNum, numeric} from 'vuelidate/lib/validators';

export const ERROR_MAP = {
  required : 'Обязательное поле',
  minLength : 'Слишком короткая запись',
  maxLength: 'Слишком длинная запись',
  email : 'Не корректно введён email',
  maxValue: 'Значение поля превышает максимально допустимый предел',
  alpha: 'Поле может содержать только буквы',
  numeric: 'Поле может содержать только цифры',
  alphaNum: 'Поле может содержать только буквы и цифры',
  checkFirstPhoneNum: 'Первая цифра должна быть "7"',
}
