export const mapPropertyDetailFromApiToViewModel = (property, equipmentsList) => {

    return {
        id: property.id,
        title: property.title,
        rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
        squareMeter: `${property.squareMeter}m2`,
        notes: property.notes,
        price: `${property.price.toLocaleString()} €`,
        mainImage: Array.isArray(property.images) ? property.images[0] : '',
        email: property.email,
        phone: property.email,
        saleTypeIds: property.saleTypeIds,
        address: property.address,
        city: property.city,
        provinceId: property.provinceId,
        bathrooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
        locationUrl: property.locationUrl,
        mainFeatures: property.mainFeatures,
        equipments: formatEquipment(property, equipmentsList),
        images: property.images,
    };
};

const formatEquipment = (property, equipmentsList) => {
    let equipmentForViewModel = '';
    property.equipmentIds.map(equipmentId => {
        equipmentsList.find(equipment => {
            if (equipmentId === equipment.id) equipmentForViewModel = [...equipmentForViewModel, equipment.name];
        });
    });
    return equipmentForViewModel;
};

const getRoomWord = rooms => {
    return rooms > 1 ? 'habitaciones' : 'habitación';
};

const getBathroomWord = bathrooms => {
    return bathrooms > 1 ? 'baños' : 'baño';
};