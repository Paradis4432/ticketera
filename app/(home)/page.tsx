import Eventsec from '@/app/components/ui/eventsec';
import Hero from '@/app/components/ui/hero';
import Navbar from '@/app/components/ui/navbar';
import Productor from '@/app/components/ui/productor';
import Pregsec from '@/app/components/ui/pregsec';
import Banner from '@/app/components/ui/banner';
import {SearchBar} from '../components';
import {fetchAllEvents} from "@/app/(home)/actions";
import Link from "next/link";
import {readEvents} from "@/models/queries/events";
import {LoadingWrapper} from "@/app/components/ui/loader";
import Image from "next/image";
import { fetchActiveEvents } from './actions';
import Eventos from '@/app/components/ui/eventos';

const Home = async () => {
    const events = await fetchActiveEvents();
    /* const [events, setEvents] = useState<Events[]>([]); */

    /* useEffect(() => {
/*        fetchTop10Events()
            .then(events => { // .then solo si es Promise
                setEvents(events)
            })*/
    
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Banner/>
            <Eventsec/>
            <SearchBar/>
            {/* <LoadingWrapper of={events}>
                {
                    events.map(e => (
                        (e.name)
                    ))
                }
            </LoadingWrapper> */}
            <Eventos events={events} />
            <Banner />
            <Productor/>
            <Pregsec/>
        </main>
    )
};

export default Home
