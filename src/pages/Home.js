import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarImage from '../assets/profileImage.jpeg';
import { styled } from '@mui/system';
import { devBuild, frontend, name } from '../Const/text';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const BorderedAvatar = styled(Avatar)`
  border: 3px solid gray;
`;

function Home() {
  return (
    <div className=''>
      <section>
        <div className='flex flex-col' style={{ padding: 'calc(4.8rem + 2rem) 2rem 2rem 2rem' }}>
          <div className='flex justify-center flex-col m-auto'>
              <BorderedAvatar
                alt="Ritu Raj"
                src={AvatarImage}
                sx={{ width: 150, height: 150, }}
              />
          </div>
          <p className='text-4xl font-extrabold mt-8 mb-4'>I Am, {name}</p>
          <div className='text-2xl text-[#3f3f3f] font-bold'>
            <h1 className='mb-4'>{devBuild}</h1>
            <h1 className='mb-8'>{frontend}</h1>
          </div>
          <div className='w-full flex flex-wrap justify-center items-center gap-6'>
              <a href='https://www.linkedin.com/in/ritu-raj-500ab114a' className='p-2.5 bg-white shadow rounded-xl transition duration-700 ease-in-out hover:scale-125 hover:rotate-[360deg]'>
                <span className='hover:'><LinkedInIcon/></span>
              </a> 
              <a href='https://twitter.com/RiturajPiku?t=7P63UvFQdjPTx4YPbYirVQ&s=09' className='p-2.5 bg-white shadow rounded-xl transition duration-700 ease-in-out hover:scale-125 hover:rotate-[360deg]'>
                <span className='hover:'><TwitterIcon/></span>
              </a>   
              <a href='https://www.instagram.com/rituraj._/' className='p-2.5 bg-white shadow rounded-xl transition duration-700 ease-in-out hover:scale-125 hover:rotate-[360deg]'>
                <span className='hover:'><InstagramIcon/></span>
              </a> 
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
