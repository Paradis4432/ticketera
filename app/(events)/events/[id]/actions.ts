import { readEvents } from "@/models/queries/events";

export const fetchActiveEvents = async (): Promise<Events[]> => {
    try {
      const events = await readEvents.activeEvents();
      return events; // Fetch and limit to 6 events
    } catch (error) {
      console.error("Failed to fetch active events", error);
      return [];
    }
  };

/* async function fetchEventByID(id: number) {
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
 */