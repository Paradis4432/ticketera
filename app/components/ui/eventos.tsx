import React from 'react';
import Buttons from './buttons';
import Image from 'next/image';
import Eventimg  from '../../../assets/eventimg.svg';
import iconimg from '../../../assets/rightarrow.svg';
import dateicon from '../../../assets/dateicon.svg';
import locicon from '../../../assets/locicon.svg';
import priceicon from '../../../assets/priceicon.svg';

type EventosProps = {
  events: Events[];
};

const Eventos: React.FC<EventosProps> = ({ events }) => {
  return (
    <div className='flex flex-col '>
    <div className="max-w-[1440px] mx-auto p-4 flex justify-center">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map(event => (
          <li key={event.event_id} className="bg-white rounded-xl shadow-[0_0px_13.42px_0px_#0000008C;] p-4 max-w-[330px] max-h-[500px] min-h-[500px] mt-[30px]">
            <Image src={Eventimg} alt='event image'/>
            <p className='p-[6px] rounded-xl text-sm mt-[20px] text-white bg-[#41B569]'>Preventa</p>
            <h2 className="text-xl mt-[30px] font-semibold">{event.name}</h2>
            <p className="text-sm mt-[10px] text-[#797979] font-normal flex">
              <Image className='flex mr-2' width={20} height={20} src={dateicon} alt={"date icon"}/>
              {new Date(event.event_start_date).toLocaleString()}</p>
            <p className="text-sm mt-[10px] text-[#797979] flex">
              <Image className='flex mr-2' width={20} height={20} src={locicon} alt={"location icon"}/>
              {event.location}</p>
            <p className="text-sm mt-[10px] text-[#797979] flex">
              <Image className='flex mr-2' width={20} height={20} src={priceicon} alt={"price icon"}/>
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
    <Buttons 
                 text="Ver Todos los Eventos"
                 containerStyle="bg-[#292828] text-white rounded-lg my-[40px] py-[20px] px-[28px] text-sm font-normal tracking-wide gap-[10px] place-self-center"
                 navigateTo="/"
                 icon={iconimg}
                />
    </div>
  );
};

export default Eventos;
