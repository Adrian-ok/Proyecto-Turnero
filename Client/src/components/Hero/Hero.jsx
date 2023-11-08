
export function Hero() {
    return (
        <div className='text-white'>
            <div className='max-w-3xl mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-red-500 text-xl font-bold py-2'>
                    RESERVA TU CAMBIO DE LOOK
                </p>
                <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>
                    ¡Hazte con tu nuevo estilo!
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
                        Rápida y flexible atención para ti
                    </p>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>¡Asegura tu lugar para lucir genial y siéntete increíble!</p>
                <button className='bg-red-500 hover:bg-red-600 w-48 rounded-md font-medium my-6 mx-auto py-3 text-black'>Reserva Ahora</button>
            </div>
        </div>

    )
}
