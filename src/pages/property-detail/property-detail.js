import { history } from '../../core/router';
import {
    getPropertyDetail,
    getEquipmentsList,
    contactInformation,
} from './property-detail.api';
import {
    onUpdateField,
    onSubmitForm,
    onSetError,
    onSetFormErrors,
} from '../../common/helpers';
import { mapPropertyDetailFromApiToViewModel } from './property-detail.mappers';
import { setPropertyValues } from './property-detail.helpers';
import { formValidation } from './property-detail.validations';

const params = history.getParams();

Promise.all([
    getPropertyDetail(params.id),
    getEquipmentsList(),
]).then(([property, equipments]) => {
    const viewModelPropertyDetail = mapPropertyDetailFromApiToViewModel(property, equipments);
    setPropertyValues(viewModelPropertyDetail);
});

let contact = {
    email: '',
    message: '',
};


onUpdateField('email', event => {
    const value = event.target.value;
    contact = {
        ...contact,
        email: value,
    };

    formValidation.validateField('email', contact.email).then(result => {
        onSetError('email', result);
    });
});

onUpdateField('message', event => {
    const value = event.target.value;
    contact = {
        ...contact,
        message: value,
    };

    formValidation.validateField('message', contact.message).then(result => {
        onSetError('message', result);
    });
});


onSubmitForm('contact-button', () => {
    formValidation.validateForm(contact).then((result) => {
        onSetFormErrors(result);
        if (result.succeeded) {
            contactInformation(contact).then((response) => {
            });
        }
    });
});
