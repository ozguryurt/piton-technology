import Image from 'next/image'

const TeamCard = ({image, name, position}) => {
    return (
        <>
            <div className="flex flex-col shadow p-5">
                <Image
                    src={image}
                    width="788"
                    height="752"
                    alt="Hero Background Shape"
                    className='w-auto h-auto'
                />
                <p className="text-black lg:text-3xl text-lg font-extrabold lg:text-start text-center mt-5">
                    {name}
                </p>
                <p className="text-lightgray lg:text-xl text-sm font-semibold lg:text-start text-center mt-1">
                    {position}
                </p>
            </div>
        </>
    )
}

export default TeamCard