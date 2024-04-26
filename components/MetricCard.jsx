import React from 'react'

const MetricCard = ({ count, text }) => {
    return (
        <>
            <div className="flex flex-col lg:items-start justify-center items-center px-10 py-10">
                <span className="text-yellow-400 text-4xl font-bold lg:text-start text-center">
                    {count}
                </span>
                <span className="text-white text-sm font-normal lg:text-start text-center">
                    {text}
                </span>
            </div>
        </>
    )
}

export default MetricCard