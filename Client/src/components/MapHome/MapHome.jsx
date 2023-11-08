import { Map, Marker } from "pigeon-maps"

export function MapHome() {
    return (
        <div className='max-w-[1240px] mx-auto px-4 text-center'>
            <h3 className='md:text-4xl sm:text-3xl text-xl font-bold py-6 mt-6'>Nuestra Ubicación</h3>
            < div >
                <Map
                    height={300}
                    defaultCenter={[-27.48381943797446, -55.114488410896755]}
                    defaultZoom={16}
                >
                    <Marker width={50} anchor={[-27.48381943797446, -55.114488410896755]} />
                </Map>
            </div >
        </div >
    )
}
