// data.js
const services = [
    {id: 1, name: "تعديل فيديو", price: 100, category: "video"},
    {id: 2, name: "تعديل صور", price: 50, category: "photo"},
    {id: 3, name: "ترجمة", price: 30, category: "translation"}
];

console.log("الخدمات المتاحة:");
services.forEach(service => {
    console.log(`${service.id}. ${service.name} - ${service.price} جنيه`);
});