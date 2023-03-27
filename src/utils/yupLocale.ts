const mixed = {
  default: 'no es válido.',
  required: 'es un campo obligatorio',
  oneOf: 'debe ser uno de los siguientes valores: ${values}',
  notOneOf: 'no debe ser uno de los siguientes valores: ${values}',
}

const string = {
  length: 'debe ser exactamente ${length} caracteres',
  min: 'debe ser de al menos ${min} caracteres',
  max: 'debe ser como máximo ${max} caracteres',
  matches: 'debe coincidir con el siguiente: "${regex}"',
  email: 'debe ser un correo electrónico válido',
  url: 'debe ser una URL válida',
  trim: 'debe ser una cadena recortada',
  lowercase: 'debe ser una cadena en minúsculas',
  uppercase: 'debe ser una cadena en mayúsculas',
}

const number = {
  min: 'debe ser mayor que o igual a ${min}',
  max: 'debe ser menor que o igual a ${max}',
  lessThan: 'debe ser inferior a ${less}',
  moreThan: 'debe ser mayor que ${more}',
  positive: 'debe ser un número positivo',
  negative: 'debe ser un número negativo',
  integer: 'debe ser un entero',
}

const date = {
  min: 'el campo debe ser posterior a ${min}',
  max: 'el campo debe ser anterior a ${max}',
}

const boolean = {}

const object = {
  noUnknown:
    'campo no puede tener llaves no especificados en la forma del objeto',
}

const array = {
  min: 'campo debe tener al menos ${min} elementos',
  max: 'campo debe tener menos de o igual a ${max} elementos',
}

const locale = {
  mixed,
  string,
  number,
  date,
  boolean,
  object,
  array,
}

export default locale
