import React from 'react';

import { BsCart2 } from 'react-icons/bs'
import { AiFillPieChart } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { CgArrowsExchangeV } from 'react-icons/cg'

const Milestones = () => {
    const data = [
        {
            icon: BsCart2,
            title: 'Orders Completed',
            value: '1.274K'
        },
        {
            icon: CgArrowsExchangeV,
            title: 'Total Revenue Made',
            value: '168k'
        },
        {
            icon: FaUser,
            title: 'Total Store Visits',
            value: '2.5m'
        },
        {
            icon: AiFillPieChart,
            title: 'Total Sales Made',
            value: '52,172'
        },
    ]

    return (
        <div className='milestones'>
            {data.map((milestones) => {
                return (
                    <div className='milestone'>
                        <div className='icon'>
                            <milestones.icon />
                        </div>
                        <div className='details'>
                            <h4>{milestones.title}</h4>
                            <h2>{milestones.value}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Milestones