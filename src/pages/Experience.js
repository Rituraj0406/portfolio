import React from 'react';
import './style/experience.css';
import { frontendDev, altorum, uidev, uiDevCard, frontendDevCard } from '../Const/text';

function Experience() {
  return (
    <div>
      <div className="relative max-w-[1080px] m-auto">
      <div className='bg-black text-white w-fit px-3 py-2 text-2xl font-bold rounded-xl mb-8'>{"<experience>"}</div>
        <div class="timeline">
          <div class="container left">
            <div class="content">
              <div className='flex justify-between items-center mb-4'>
                <span className='text-2xl font-bold'>{frontendDev} |<br/> {altorum} </span>
                <span className='text-lg font-bold text-slate-400'>Jul 2021 - Nov 2022</span>
              </div>
              <div className='flex flex-col justify-start text-left text-lg'>
                <p className='mb-2'>
                  ◉ {frontendDevCard[0]}
                </p>
                <p className='mb-2'>
                  ◉ {frontendDevCard[1]}
                </p>
                <p>
                  ◉ {frontendDevCard[2]}
                </p>
              </div>
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <div className='flex justify-between items-center mb-4'>
                <span className='text-2xl font-bold'>{uidev} |<br/> {altorum}</span>
                <span className='text-lg font-bold text-slate-400'>Oct 2020 - Jun 2021</span>
              </div>
              <div className='flex flex-col justify-start text-left text-lg'>
                <p className='mb-2'>
                  ◉ {uiDevCard[0]}
                </p>
                <p className='mb-2'>
                  ◉ {uiDevCard[1]} 
                </p>
                <p>
                  ◉ {uiDevCard[2]} 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-black text-white w-fit px-3 py-2 text-2xl font-bold rounded-xl mb-8'>{"</experience>"}</div>
      </div>
    </div>
  )
}

export default Experience