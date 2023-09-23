const articulos = [
    {
        id: 1,
        tipo: 'imagen',
        titulo: 'Maceta redonda:',
        ubicacion: '../../assets/images/maceta.redonda/maceta.redonda1.jpg',
        alt: 'Imágen de maceta redonda con suculentas. ',
        descripcion: 'Maceta redonda, ideal para suculentas y decorar cualquier rincón del hogar.',
        tema: '#maceta #suculenta',
        megusta: 125,
        precio: 900,
        clase: 'hogar'
    },

    {
        id: 2,
        tipo: 'imagen',
        titulo: 'Pie de cama:',
        ubicacion: '../../assets/images/pie.cama/pie.cama1.jpg',
        alt: 'Imágen de pie de cama.',
        descripcion:
            'Pie de cama,  es un elemento de decoración que aporta carácter, belleza y personalidad a tu dormitorio. Medidas 65 x 200 cm. ',
        tema: '#pie de cama #dormitorio',
        megusta: 198,
        precio: 9000,
        clase: 'dormitorio'
    },

    {
        id: 3,
        tipo: 'imagen',
        titulo: 'Plato playo: ',
        ubicacion: '../../assets/images/plato.playo/plato.playo1.jpg',
        alt: 'Imágen de plato playo. ',
        descripcion: 'Plato Playo 30 cm, es plato plano que sirve como base para darle estilo y textura a tu mesa',
        tema: '#plato #mesa ',
        megusta: 230,
        precio: 1000,
        clase: 'cocina'
    },

    {
        id: 4,
        tipo: 'imagen',
        titulo: 'Set de Baño: ',
        ubicacion: '../../assets/images/set.banio/set.banio1.jpg',
        alt: 'Imágen set de baño.',
        descripcion: 'Set de baño de cemento con relieve. Color: Piedra natural. El set contiene: surtidor jabón líquido, jabonera, porta cepillo de diente y vaso. ',
        tema: '#set #baño',
        megusta: 361,
        precio: 4000,
        clase: 'baño'
    }
];



// getProduct
export const getArticulo = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = articulos.find((p) => p.id === parseInt(id));
            if (product) {
                resolve(product);

            } else {

                reject("No existe producto con esa identificación");
            }
        }, 1000);
    });
};

export const getArticulos = (clase) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsFiltered = clase
                ? articulos.filter((product) => product.clase === clase)
                : articulos;

            resolve(productsFiltered);
        }, 1000);
    });
};

