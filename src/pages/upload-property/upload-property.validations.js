import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { isUrl } from '@lemoncode/fonk-is-url-validator';

const validationSchema = {
    field: {
        title: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        notes: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        email: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.email,
                message: 'Email no válido',
            },
        ],
        phone: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                message: 'El campo debe ser un numéro de teléfono válido',
                customArgs: { pattern: '^(9|7|6)\\d{8}$' },
            },
        ],
        price: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: positiveNumber.validator,
                message: 'El campo debe ser un valor numérico',
            },
        ],
        saleTypes: [
            {
                validator: Validators.required,
                message: 'Seleccione al menos una opción',
            },
        ],
        address: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        city: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        province: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        squareMeter: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: positiveNumber.validator,
                message: 'El campo debe ser un valor numérico',
            },
        ],
        rooms: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        bathrooms: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        locationUrl: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: isUrl.validator,
                message: 'Url no válida',
            },
        ],
        newFeature: [
            {
                validator: Validators.required,
                message: 'Añada al menos una característica',
            },
        ],
    },
};

export const formValidation = createFormValidation(validationSchema);

