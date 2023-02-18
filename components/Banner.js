import Image from "next/image";

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image
        src='https://news.airbnb.com/wp-content/uploads/sites/4/2020/04/Airbnb_Ireland_Lakeside_House_Featured.jpg?w=3000'
        alt='banner'
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute top-1/3 w-full text-center'>
        <h5 className='text-2xl font-semibold sm:text-lg'>
          Not sure where to go? Perfect..
        </h5>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
