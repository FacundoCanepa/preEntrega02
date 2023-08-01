
const Productos = document.getElementById ("Productos")
const carritoIndex = document.getElementById ("carritoIndex")
const contenedor = document.getElementById ("contenedor")
const totalIndex = document.getElementById ("totalIndex")
const ravioles = [
    {
        id: 1,
        nombre:"Ravioles de verdura",
        precio: 720,
    } ,
    {
        id: 2,
        nombre:"Ravioles de verdura y pollo",
        precio: 750,
    } ,
    {
        id: 3,
        nombre:"Ravioles de verdura y carne " , 
        precio: 750 , 
    },
    {
        id: 4,
        nombre: "Ravioles de verdura y ricota",
        precio: 750,
    },
    {
        id: 4, 
        nombre: "fideos de huevo",
        precio: 1800 ,
    },
];

let carrito = []
let select = document.getElementById("selectIndex");

ravioles.forEach((i) => {
    let option = document.createElement("div");
    option.className = "productos";
    option.innerHTML = `
    <h2>${i.nombre}</h2> 
    <h2>${i.precio} $</h2>
    `
    ;
    Productos.append(option);
    let compras = document.createElement("button")
    compras.innerText = "comprar" ;
    option.append(compras)
    
    compras.addEventListener("click", () => {
        carrito.push({
            id : i.id,
            nombre : i.nombre,
            precio : i.precio,
        });
        const total = carrito
    });
    
});

carritoIndex.addEventListener("click" , () => {
    const contenedor2 = document.createElement("div");
    contenedor2.className ="contenedor2" ;
    contenedor.append(contenedor2)
    
    carrito.forEach ((i) => {
        let contenidoCarrito = document.createElement ("ul");
        contenidoCarrito.className = "contenidoCarrito" ;
        contenidoCarrito.innerHTML = `
        <li>${i.nombre}</li>
        <li>${i.precio} $</li>
        `
        contenedor2.append(contenidoCarrito)
    })
    totalApagar = carrito.reduce ((acc , el) => acc + el.precio, 0  )
    const totalMercadopago = totalApagar * 1.24 ; 
    const totalCuentaDNI = totalApagar * 1.21 ; 
    const metodoDePago = document.getElementById ("opciones").value
    if( metodoDePago == "mercadoPago"){
        let totalImp = document.createElement ("div");
        totalImp.className = "mercadoPago1" ;
        totalImp.innerHTML = `
        <h3>Precio subtotal : ${totalApagar } <br> Precio total : ${totalMercadopago } </h3>
        `
        totalIndex.append(totalImp)
        console.log(carrito)
    }
    else if  (metodoDePago == "cuentaDNI"){
        let totalImp = document.createElement ("div");
        totalImp.className = "mercadoPago1" ;
        totalImp.innerHTML = `
        <h3>Precio subtotal : ${totalApagar } <br> Precio total : ${totalCuentaDNI }  </h3>
        `
        totalIndex.append(totalImp)
    }
    else{
        let totalImp = document.createElement ("div");
        totalImp.className = "mercadoPago1" ;
        totalImp.innerHTML = `
        <h3>Precio total : ${totalApagar}</h3>
        `
        totalIndex.append(totalImp)
    }

})











