const requiredField = {
  value: true,
  message: "Это поле обязательно к заполнению",
};

const validation = {
  username: {
    required: requiredField,
    pattern: { value: /^[A-Za-z]+$/i, message: "Введите имя на английском" },
  },
  email: {
    required: requiredField,
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Введиту вашу настоящую почту",
    },
  },
  phone: {
    required: requiredField,
    pattern: {
      value: /[+]\d{3}\s\d{2}\s\d{2}\s\d{2}\s\d{3}/,
      message: "Введите ваш настоящий номер телефона",
    },
  },
};

export default validation;
