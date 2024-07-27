import Link from "next/link";
import {initMercadoPago} from "@mercadopago/sdk-react";
import axios from "axios";
import { Events } from "@/app/utils/interfaces";

// evento que aparecen en el home, minimo -> on click render public event detailed on endpoint
function PublicEvent({event}: { event: Events }) {
    return (
        <div>{
            event ? (
                <>
                    <Link href={`/events/${event.event_id}`}>
                        <h3>{event.name}</h3>

                    </Link>
                    <p>{event.description}</p>
                </>

                /*<Link href={/events/id}>detalles del evento -> comprar ticket etc</Link>*/
            ) : (
                <p>not found</p>
            )
        }
        </div>
    )
}

/*interface propsPEV {
    event?: IEvent;
}*/

// TODO no me toma la variable de entorno
const mercadopago_public_key = process.env.MERCADO_PAGO_PUBLIC_KEY;

function PublicEventDetailed({event}: { event: Events }) {
    //const [preferenceId, setPreferenceId] = useState(null)

    //console.log(process.env.MERCADO_PAGO_PUBLIC_KEY)
    // if(mercadopago_public_key === undefined){
    //     throw new Error("Missing Mercado Pago Public Key")
    // }

    initMercadoPago("APP_USR-6bdd950c-253c-4edb-9a31-490c573e14ec")
    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/mercadopago", {
                id: event?.event_id,
                title: event?.name,
                quantity: 1,
                price: 100,

            })
            console.log(response)

            const {id} = response.data
            return id;
        } catch (err) {
            console.log(err)
        }
    }
/*
    useEffect(() => {
        const fetchPreference = async () => {
            const id = await createPreference();
            if (id) {
                //setPreferenceId(id);
            }
        };

        fetchPreference();
    }, [event]);*/

    const handleBuy = async () => {
        console.log("comprando")
        // mail to use session
    }

    return (
        <>
           {/* <h1>{event?.name}</h1>
            <ul>
                <li>
                    <h4> ID: {event?.event_id}</h4>
                </li>
                <li>
                    <h4>{event?.description}</h4>
                </li>
                <li>
                    <h4>{event?.starting_date.toString()}</h4>
                </li>
                <li>
                    <h4>{event?.location.toString()}</h4>
                </li>
                <li>
                    <h4>state: {event?.state}</h4>
                </li>
                <li>
                    <h4>price: $100</h4>
                </li>
                <li>
                    {preferenceId &&
                        <Payment
                            initialization={{preferenceId: preferenceId, amount: 100}}
                            customization={{
                                paymentMethods: {
                                    maxInstallments: 1,
                                    mercadoPago: "all",
                                    creditCard: "all",
                                    debitCard: "all",
                                }
                            }}
                            onSubmit={handleBuy}
                        />
                    }
                </li>
            </ul>*/}
        </>
    )
}



/*
export const UserEventDetailed: React.FC<UserEventsProps> = ({event, setEvents}) => {
    const onDelete = async () => {
        await deleteUserEvent(event.event_id);
        setEvents((prevEvents) => prevEvents.filter((e) => e.event_id !== event.event_id));
    };
    return (
        <div>
            <h2>{event.name}</h2>
            <ul>
                <li>ID: {event.event_id}</li>
                <li>{event.description}</li>
                <li>{event.location}</li>
                <li>{event.starting_date.toString()}</li>
                <li> State: {event.state}</li>
            </ul>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};
*/


/* export default Events */

export {
    PublicEvent,
    PublicEventDetailed,
}