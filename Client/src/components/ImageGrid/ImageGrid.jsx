import NoImage from '../../assets/NoImage.jpg'

export function ImageGrid() {
    return (
        <div className='max-w-[1240px] mx-auto px-4 text-center'>
            <h3 className='md:text-4xl sm:text-3xl text-xl font-bold'>Inspírate con Nuestros Looks</h3>
            <p className='py-4 md:text-2xl text-xl font-bold text-gray-500'>Echa un vistazo a nuestra variedad de cortes y diseños</p>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={NoImage} alt='/' />
                <img className='w-full h-full object-cover' src={NoImage} alt='/' />
                <img className='w-full h-full object-cover' src={NoImage} alt='/' />
                <img className='w-full h-full object-cover' src={NoImage} alt='/' />
                <img className='w-full h-full object-cover' src={NoImage} alt='/' />
            </div>
        </div>
    )
}
