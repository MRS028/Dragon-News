import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';


const LatestNews = () => {
    return (
        <div className='flex bg-base-200 items-center gap-2 p-2'>
            <p className='bg-[#D72050] text-base-100 p-3 font-bold'>Latest</p>
            <Marquee className='space-x-10  '>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sequi. </Link>
                <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque cupiditate aliquid aperiam possimus optio porro aut exercitationem omnis eum illo.</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sequi. </Link>
            </Marquee>
                   </div>
    );
};

export default LatestNews;