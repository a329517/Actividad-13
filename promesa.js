const ComprarCasco = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Comprar casco")
    }, 1000)
})

const ComprarGuantes = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Comprar guantes")
    }, 2000)
})

const irDePaseo = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Ir de paseo")
    }, 8000)
})

const pasearEnBici = () =>{
    ComprarCasco
    .then(infoCasco => {
        console.log(infoCasco)
        return ComprarGuantes;
    })
    .then(infoGuantes => {
        console.log(infoGuantes)
        return irDePaseo;
    })
    .then(infoPaseo => {
        console.log(infoPaseo)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(()=> console.log("Proceso finalizado"))
}

pasearEnBici();