import { history } from '../../core/router';
import { mapPropertyDetailFromFormToApi } from './upload-property.mappers';
import {
    getSaleTypeList,
    getEquipmentsList,
    getProvinceList,
    addProperty,
} from './upload-property.api';
import {
    onUpdateField,
    onSubmitForm,
    onSetError,
    onSetFormErrors,
    onAddFile,
} from '../../common/helpers';
import {
    formatCheckboxId,
    setCheckboxList,
    setOptionList,
    formatDeleteFeatureButtonId,
    onAddFeature,
    onRemoveFeature,
    onAddImage
} from './upload-property.helpers';
import { formValidation } from './upload-property.validations';

Promise.all([
    getSaleTypeList(),
    getEquipmentsList(),
    getProvinceList(),
]).then(([saleTypeList, equipmentsList, provinceList]) => {
    setCheckboxList(saleTypeList, 'saleTypes');
    setCheckboxList(equipmentsList, 'equipments');
    setEvents(saleTypeList, equipmentsList);
    setOptionList(provinceList, 'province');
});



let uploadProperty = {
    title: '',
    notes: '',
    email: '',
    phone: '',
    price: '',
    saleTypes: '',
    address: '',
    city: '',
    province: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    newFeature: '',
    equipment: '',
    images: '',
};


onUpdateField('title', event => {
    const value = event.target.value;
    uploadProperty = {
        ...uploadProperty,
        title: value,
    };

    formValidation.validateField('title', uploadProperty.title).then(result => {
        onSetError('title', result);
    });
});
onUpdateField('notes', event => {
    const value = event.target.value;
    uploadProperty = {
        ...uploadProperty,
        notes: value,
    };

    formValidation.validateField('title', uploadProperty.notes).then(result => {
        onSetError('notes', result);
    });
});
onUpdateField('email', event => {
    const value = event.target.value;
    uploadProperty = {
        ...uploadProperty,
        email: value,
    };

    formValidation.validateField('email', uploadProperty.email).then(result => {
        onSetError('email', result);
    });
});
onUpdateField('phone', event => {
    const value = event.target.value;
    uploadProperty = {
        ...uploadProperty,
        phone: value,
    };

    formValidation.validateField('phone', uploadProperty.phone).then(result => {
        onSetError('phone', result);
    });
});
onUpdateField('price', event => {
    const value = event.target.value;
    uploadProperty = {
        ...uploadProperty,
        price: value,
    };

    formValidation.validateField('price', uploadProperty.price).then(result => {
        onSetError('price', result);
    });
});
onUpdateField('address', event => {
    const value = event.target.value;
    uploadProperty = {
        ...uploadProperty,
        address: value,
    };

    formValidation.validateField('address', uploadProperty.address).then(result => {
        onSetError('address', result);
    });
});
onUpdateField('city', event => {
    const value = event.target.value;
    uploadProperty = {
        ...uploadProperty,
        city: value,
    };

    formValidation.validateField('city', uploadProperty.city).then(result => {
        onSetError('city', result);
    });
});
onUpdateField('province', event => {
    const value = event.target.value;
    uploadProperty = {
        ...uploadProperty,
        province: value,
    };

    formValidation.validateField('province', uploadProperty.province).then(result => {
        onSetError('province', result);
    });
});
onUpdateField('squareMeter', event => {
    const value = event.target.value;
    uploadProperty = {
        ...uploadProperty,
        squareMeter: value,
    };

    formValidation.validateField('squareMeter', uploadProperty.squareMeter).then(result => {
        onSetError('squareMeter', result);
    });
});
onUpdateField('rooms', event => {
    const value = event.target.value;
    uploadProperty = {
        ...uploadProperty,
        rooms: value,
    };

    formValidation.validateField('rooms', uploadProperty.rooms).then(result => {
        onSetError('rooms', result);
    });
});
onUpdateField('bathrooms', event => {
    const value = event.target.value;
    uploadProperty = {
        ...uploadProperty,
        bathrooms: value,
    };

    formValidation.validateField('bathrooms', uploadProperty.bathrooms).then(result => {
        onSetError('bathrooms', result);
    });
});
onUpdateField('locationUrl', event => {
    const value = event.target.value;
    uploadProperty = {
        ...uploadProperty,
        locationUrl: value,
    };

    formValidation.validateField('locationUrl', uploadProperty.locationUrl).then(result => {
        onSetError('locationUrl', result);
    });
});



const setEvents = (saleTypeList, equipmentsList) => {
    saleTypeList.forEach(element => {
        const id = formatCheckboxId(element);
        onUpdateField(id, event => {
            const value = event.target.value;
            if (event.target.checked) {
                uploadProperty = {
                    ...uploadProperty,
                    saleTypes: [...uploadProperty.saleTypes, value],
                };
            }
            if (!event.target.checked) {
                uploadProperty = {
                    ...uploadProperty,
                    saleTypes: [...uploadProperty.saleTypes.filter(function (f) {
                        return f !== value
                    })]
                };
            }
            formValidation.validateField('saleTypes', uploadProperty.saleTypes).then(result => {
                onSetError('saleTypes', result);
            });
        });
    });
    equipmentsList.forEach(element => {
        const id = formatCheckboxId(element);
        onUpdateField(id, event => {
            const value = event.target.value;
            if (event.target.checked) {
                uploadProperty = {
                    ...uploadProperty,
                    equipment: [...uploadProperty.equipment, value],
                };
            }
            if (!event.target.checked) {
                uploadProperty = {
                    ...uploadProperty,
                    equipment: [...uploadProperty.equipment.filter(function (f) {
                        return f !== value
                    })]
                };
            }
        });
    });
}


onSubmitForm('insert-feature-button', () => {
    let inputValue = document.getElementById('newFeature').value;

    if (inputValue || inputValue !== null) {
        onAddFeature(inputValue);
        uploadProperty = {
            ...uploadProperty,
            newFeature: [...uploadProperty.newFeature, inputValue],
        };

        formValidation.validateField('newFeature', uploadProperty.newFeature).then(result => {
            onSetError('newFeature', result);
        });

    }
    onSubmitForm(formatDeleteFeatureButtonId(inputValue), () => {
        onRemoveFeature(inputValue);
        uploadProperty = {
            ...uploadProperty,
            newFeature: [...uploadProperty.newFeature.filter(function (f) {
                return f !== inputValue
            })]
        };
    });
});

onAddFile('add-image', event => {

    if (event || event !== null) {
        onAddImage(event);
        uploadProperty = {
            ...uploadProperty,
            images: [...uploadProperty.images, event],
        };
    }
});

onSubmitForm('save-button', () => {
    formValidation.validateForm(uploadProperty).then((result) => {
        onSetFormErrors(result);
        if (result.succeeded) {
            const uploadPropertyMapped = mapPropertyDetailFromFormToApi(uploadProperty);
            addProperty(uploadPropertyMapped).then((response) => {
                history.back();
            });
        }
    });
});