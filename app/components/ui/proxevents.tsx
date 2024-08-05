import React from 'react'
import Image from 'next/image';
import isoCol from "@/assets/isoColW.png";
import dateicon from '../../../assets/dateicon.svg';
import locicon from '../../../assets/locicon.svg';
import priceicon from '../../../assets/priceicon.svg';
import Eventimg  from '../../../assets/eventimg.svg';
import iconimg from '../../../assets/rightarrow.svg';
import Buttons from './buttons';


type EventosProps = {
    events: Events[];
  };

const Proxevents: React.FC<EventosProps> = ({ events }) => {
    return (
        <div className="max-w-[1440px] flex flex-col relative mx-auto">
            <div className="flex flex-col justify-center">
                <div
                    className="py-[8px] px-4 bg-[#292929] text-white rounded-3xl text-xl font-normal mt-5 mx-auto flex">
                    <Image className="w-[25px] mr-[10px]" src={isoCol} alt="" />
                    Mucho Mas Que Eventos
                </div>
                <h1 className="text-black text-5xl font-koulen mt-4 mx-auto"><span>&#x1F51C;</span> PROXIMAMENTE EN SELVA TICKETS.</h1>
                <p className="text-gray-400 text-base font-normal mt-3 mx-auto">Descubre donde estaremos en los proximos eventos</p>
                <div className="max-w-4xl mx-auto p-4">
                </div>
            </div>
            <ul className="flex justify-center gap-5 mb-[40px] overflow-hidden">
                {events.map(event => (
                    <li key={event.event_id} className="bg-white rounded-xl shadow-[0_0px_13.42px_0px_#0000008C;] p-4 min-w-[330px] h-[500px]">
                        <Image src={Eventimg} alt='event image' />
                        <p className='p-[6px] rounded-xl text-sm mt-[20px] text-white bg-[#41B569]'>Preventa</p>
                        <h2 className="text-xl mt-[30px] font-semibold">{event.name}</h2>
                        <p className="text-sm mt-[10px] text-[#797979] font-normal flex">
                            <Image className='flex mr-2' width={20} height={20} src={dateicon} alt={"date icon"} />
                            {new Date(event.event_start_date).toLocaleString()}</p>
                        <p className="text-sm mt-[10px] text-[#797979] flex">
                            <Image className='flex mr-2' width={20} height={20} src={locicon} alt={"location icon"} />
                            {event.location}</p>
                        <p className="text-sm mt-[10px] text-[#797979] flex">
                            <Image className='flex mr-2' width={20} height={20} src={priceicon} alt={"price icon"} />
                            {event.description}</p>
                        <Buttons
                            text="Comprar Tickets"
                            containerStyle="bg-[#292828] text-white rounded-lg mt-[20px] py-[10.06px] px-[10.06px] text-sm font-normal tracking-wide gap-[10px]"
                            navigateTo="/"
                            icon={iconimg}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Proxevents