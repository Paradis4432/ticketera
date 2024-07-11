"use server"

async function fetchEventByID(id: number) {
    try {
        //return await qquery<Events>(events.selByID, [id])
    } catch (err) {
        console.error(err)
        return null;
    }
}

async function get() { // TODO next convierte metodos a api automaticamente y nose  que mas, estoy casi seguro que esto es un problema
    return process.env.MERCADO_PAGO_PUBLIC_KEY
}


export {
    fetchEventByID,
    get
}
