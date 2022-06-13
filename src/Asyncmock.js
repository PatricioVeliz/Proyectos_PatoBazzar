const products = [
  {
    id: "1",
    name: "Cuchillo",
    price: 2200,
    category: "utensilios de cocina",
    img: "https://www.tramontina.com.ar/arquivos/ids/162705-undefined-undefined/21138076PDM001G.jpg?v=637133475898100000",
    stock: 20,
    description: "Cuchillo de cocina Tramontina con hja de acero de 20cm",
  },
  {
    id: "2",
    name: "Tablas Picar Bambu Set X 3",
    price: 1900,
    category: "utensilios de cocina",
    img: "https://http2.mlstatic.com/D_NQ_NP_964450-MLA49171319043_022022-O.jpg",
    stock: 15,
    description: "Tablas Picar Bambu Set X 3",
  },
  {
    id: "3",
    name: "Rallador 4 caras",
    price: 700,
    category: "utensilios de cocina",
    img: "https://media.istockphoto.com/photos/metal-grater-with-four-different-sides-on-white-background-picture-id134357273?k=20&m=134357273&s=612x612&w=0&h=gemOFgWbZ_LZ8fUDZK7ou5wJtJ9i5vqzY0dCh3PWx2g=",
    stock: 20,
    description: "Rallador de cocina 4 caras para cocinar",
  },
  {
    id: "4",
    name: "Colador",
    price: 1300,
    category: "utensilios de cocina",
    img: "https://http2.mlstatic.com/D_NQ_NP_711685-MLA48664993140_122021-W.webp",
    stock: 14,
    description: "Un colador para fideo,verduras,etc",
  },
  {
    id: "5",
    name: "Rastrillo",
    price: 700,
    category: "jardin",
    img: "https://assets.tramontina.com.br/upload/tramon/imagens/MUL/77909001PNM001G.png",
    stock: 14,
    description: "Rastrillo de mano, pracitico para uso personal o profesional",
  },
  {
    id: "6",
    name: "Maseta",
    price: 300,
    category: "jardin",
    img: "https://casa-web.com.ar/wp-content/uploads/2011/10/maseta-de-interior-originales.jpg",
    stock: 14,
    description: "Maseta Practica, para plantas pequeñas",
  },
];

export const getProducts = () => {
  const ok = true;
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (ok) {
        resolve(products);
      } else {
        reject("ERROR!");
      }
    }, 300)
  })
}

export const getProductsID = (id) => {
  return new Promise (resolve => {
    setTimeout(() => {
        resolve(products.find(prod => prod.id === id));
    }, 200)
  })
}

export const getProductsByCategory = (categoryId) =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
          resolve(products.filter(prod => prod.category === categoryId))
        })
    }, 250)
}