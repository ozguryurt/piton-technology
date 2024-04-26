import React from 'react'

const MetricCard = ({ count, text }) => {
    return (
        <>
            <div className="flex flex-col lg:items-start justify-center items-center px-10 py-10 gap-y-5">
                <span className="text-metrics lg:text-6xl text-3xl font-bold lg:text-start text-center">
                    {count}
                </span>
                <span className="text-white lg:text-2xl text-base font-normal lg:text-start text-center">
                    {text}
                </span>
            </div>
        </>
    )
}

export default MetricCard