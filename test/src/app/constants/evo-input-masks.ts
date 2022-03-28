export const EVO_INPUT_MASKS = {
    phone: {
        mask: '+{7} (000) 000-00-00',
    },
    partnerCode: {
        mask: '00000',
    },
    bankTariff: {
        mask: '0.00',
    },
    date: {
        mask: '00.00.0000',
    },
    turnover: {
        mask: '000000000000000000',
    },
    inn: {
        mask: [
            {mask: '0000000000'},
            {mask: '000000000000'},
        ],
    },
    okved: {
        mask: [
            {mask: '00'},
            {mask: '00.00'},
            {mask: '00.00.00'},
        ],
    },
    okato: {
        mask: '0000000000000000',
    },
    okpo: {
        mask: '00000000000',
    },
    passportSerial: {
        mask: '00 00',
    },
    passportNumber: {
        mask: '000000',
    },
    passportDepCode: {
        mask: '000-000',
    },
    time: {
        mask: '00:00',
    },
    timePart: {
        mask: '00',
    },
    digitsOnly: {
        mask: /^\d+$/,
    },
    alphabeticRu: {
        mask: /^[А-Яа-яёЁ\s-]+$/,
    },
    bankAccount: {
        mask: '00000000000000000000',
    },
    zipCode: {
        mask: '000000',
    },
    bik: {
        mask: '000000000',
    },
    snils: {
        mask: '000-000-000-00',
    },
};
