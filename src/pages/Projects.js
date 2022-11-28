import React from 'react';
import CustomCard from '../components/Card/CustomCard';
import Portfolio from '../assets/portfolio.png';
import Crcscreen from '../assets/crcscreen.png';
import Alfinity from '../assets/alfinity.png';
import { cardDesc1, cardDesc2, cardDesc3 } from '../Const/text';



export const Projects = () => {
    return (
        <div className="relative max-w-[1080px] m-auto" >
            <div className='bg-black text-white w-fit px-3 py-2 text-2xl font-bold rounded-xl mb-8' > {"<projects>"} </div>
            <div className='flex justify-center items-center flex-wrap gap-8' >
                <CustomCard image={Portfolio}
                    title='Portfolio'
                    description={cardDesc1}
                    gitref='https://github.com/Rituraj0406'
                    liveref='' />
                < CustomCard image={Crcscreen}
                    title='Credit Repair Cloud'
                    description={cardDesc2}
                    gitref='https://github.com/Rituraj0406'
                    liveref='https://qa.creditrepaircloud.com/' />
                <CustomCard image={Alfinity}
                    title='Alfinity'
                    description={cardDesc3}
                    gitref='https://github.com/Rituraj0406'
                    liveref='https://web.altorumleren.com/' />
            </div>
            <div className='bg-black text-white w-fit px-3 py-2 text-2xl font-bold rounded-xl mb-8' > {"</projects>"} </div>
        </div>
    )
}