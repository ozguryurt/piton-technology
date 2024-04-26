import Image from 'next/image'
import TeamCard from '@/components/TeamCard';
import MetricCard from '@/components/MetricCard';

export default function Home() {
  return (
    <>
      <section>
        <div className="relative w-full h-screen overflow-hidden bg-main">
          <div className="relative w-full h-full flex flex-col justify-end items-center lg:gap-5 gap-40 z-[3]">
            <span className="text-lightblack text-3xl lg:text-8xl font-bold text-center">
              Let’s create something<br />great together.
            </span>
            <Image
              src="/hero_image.png"
              width={2936}
              height={776}
              alt="Hero Background Image"
              className='lg:w-10/12 w-full'
            />
          </div>
          <Image
            src="/hero_shape1.svg"
            width={513}
            height={669}
            alt="Hero Background Shape 1"
            className='absolute inset-0 me-auto lg:top-44 lg:left-36 top-34 -left-32 z-[1] w-[auto]'
          />
          <Image
            src="/hero_shape2.svg"
            width={1286}
            height={970}
            alt="Hero Background Shape 2"
            className='absolute inset-0 ms-auto lg:top-5 lg:right-32 top-80 -right-20 z-[2] w-8/12'
          />
        </div>
      </section>
      <section>
        <div className="container">
          <p className="text-lightblack lg:text-5xl text-2xl font-extrabold lg:text-start text-center mb-5">
            Who are we
          </p>
          <p className="text-lightblack lg:text-2xl text-base font-semibold lg:text-start text-center">
            We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success.We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.
          </p>
        </div>
      </section>
      <section>
        <div className="container flex justify-center items-center">
          <Image
            src="/mid_image.png"
            width="3056"
            height="1258"
            alt="Hero Background Shape"
            className='w-auto h-auto'
          />
        </div>
      </section>
      <section>
        <div className="container flex flex-col justify-center items-center">
          <p className="text-lightblack lg:text-5xl text-2xl font-extrabold text-center">
            Meet the heroes behind the magic
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 mt-16 px-10 gap-x-10 gap-y-5">
            <TeamCard
              image="/team_founder.png"
              name="Esther Howard"
              position="Founder"
            />
            <TeamCard
              image="/team_developer.png"
              name="Cody Fisher"
              position="Developer"
            />
            <TeamCard
              image="/team_designer.png"
              name="Brooklyn Simons"
              position="Designer"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full my-32 lg:px-32 px-0 lg:py-10 py-0 bg-lightblack flex lg:justify-between lg:flex-row flex-col">
          <MetricCard
            count="350 +"
            text="Clients Worldwide"
          />
          <MetricCard
            count="30 +"
            text="Team Members"
          />
          <MetricCard
            count="100 +"
            text="Projects Completed"
          />
          <MetricCard
            count="85M +"
            text="Revenue Generated"
          />
        </div>
      </section>
      <section>
        <div className="container grid lg:grid-cols-2 grid-cols-1 gap-x-24 gap-y-5">
          <div className='flex justify-center items-start'>
            <Image
              src="/side_image.png"
              width="1244"
              height="1782"
              alt="Hero Background Shape"
              className='lg:w-[75%] h-auto'
            />
          </div>
          <div className='flex flex-col justify-between items-center gap-y-5'>
            <span className='text-lightblack lg:text-6xl text-3xl font-extrabold lg:text-end text-center w-full'>
              We'd love to hear<br />from you
            </span>
            <input type="text" placeholder='Name*' className='contact-input' />
            <input type="email" placeholder='Email*' className='contact-input' />
            <input type="text" placeholder='Website URL*' className='contact-input' />
            <textarea type="text" placeholder='Project Details*' className='contact-input min-h-[10rem]' />
            <button className='w-full p-5 bg-lightblack text-white lg:text-2xl text-base py-8'>Send Proposal</button>
          </div>
        </div>
      </section>
    </>
  );
}
