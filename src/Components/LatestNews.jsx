import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';


const LatestNews = () => {
    return (
        <div className='flex bg-base-200 items-center gap-2 p-2'>
            <p className='bg-[#D72050] text-base-100 p-3 font-bold'>Latest</p>
            <Marquee ariaLabel="Breaking News" className='space-x-10'speed={80} pauseOnHover={true}>
                <Link className='text-green-500' to='/'> Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet. </Link>
                <Link className='text-blue-500' to='/'> US to name military mission in Ukraine and appoint commander – WSJ. </Link>
                <Link className='text-orange-500' to='/'> Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine. </Link>
                <Link className='text-fuchsia-500' to='/'> U.S, concerned about India's participation in Russia military exercises. </Link>
                <Link className='text-purple-500' to='/'> U.S, announces largest weapons package for Ukraine. </Link>
            </Marquee>
                   </div>
    );
};

export default LatestNews;