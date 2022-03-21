export const mapPropertyDetailFromFormToApi = uploadProperty => {

    return {
        id: uploadProperty.id,
        title: uploadProperty.title,
        notes: uploadProperty.notes,
        email: uploadProperty.email,
        phone: uploadProperty.phone,
        price: parseInt(uploadProperty.price),
        saleTypeIds: uploadProperty.saleTypes,
        address: uploadProperty.address,
        city: uploadProperty.city,
        provinceId: uploadProperty.province,
        squareMeter: parseInt(uploadProperty.squareMeter),
        rooms: parseInt(uploadProperty.rooms),
        bathrooms: parseInt(uploadProperty.bathrooms),
        locationUrl: uploadProperty.locationUrl,
        mainFeatures: uploadProperty.newFeature,
        equipmentIds: uploadProperty.equipment,
        images: uploadProperty.images
    };
};