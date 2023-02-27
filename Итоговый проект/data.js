function getProductsList() {
  return JSON.parse(json).goods;
}
function getProductsObject() {
  return JSON.parse(json).goods.reduce((acc, product) => {
    return { ...acc, [product.id]: product };
  }, {});
}
const json = `{
  "goods": [
    {
      "id": "04a57766-c599-4366-8dc4-89ff1ccd3b14",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": 3000,
      "img": "images/featured/feature1.jpg"
    },
    {
      "id": "61977551-efb2-4f6a-a6ea-da9c3b24798c",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": 3500,
      "img": "images/featured/feature2.svg"
    },
    {
      "id": "5bf21210-6463-49ae-a8c4-4a9ff10002bf",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": 4000,
      "img": "images/featured/feature3.png"
    },
    {
      "id": "4886ba5c-97d2-4ae4-bcff-b18a86e5cf37",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": 2500,
      "img": "images/featured/feature4.png"
    },
    {
      "id": "27bca31f-aac1-4f91-a309-c262046a3d23",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": 4500,
      "img": "images/featured/feature5.png"
    },
    {
      "id": "f92016c2-5b27-441d-b2e7-b716e2ad63ea",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": 5000,
      "img": "images/featured/feature6.png"
    }
  ]
}`;