import React from 'react';

import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import Title from './Title';

const Revenue = () => {
    const data = [
        {
            data: 2000
        },
        {
            data: 3000
        },
        {
            data: 5000
        },
        {
            data: 2140
        },
        {
            data: 1300
        },
        {
            data: 9800
        },
        {
            data: 3400
        },
    ]
    return (
        <div className='revenue'>
            <Title title="$8,793" subTitle="Revenue this week"/>
            <div className='graph'>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart width={500} height={400} data={data}>
                        <defs>
                            <linearGradient id='color' x1="0" x2="0" y1="0" y2="1">
                                <stop offset="30%" stopColor="#ff4d6d" stopOpacity={0.4}/>
                                <stop offset="85%" stopColor="#ff4d6d11" stopOpacity={0.2}/>
                            </linearGradient>
                        </defs>
                        <Tooltip cursor={false}/>
                        <Area type='monotone' dataKey="data" stroke='#ee3b3b' fill='url(#color)'/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Revenue