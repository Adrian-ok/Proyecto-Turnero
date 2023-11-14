import { Map, Marker } from "pigeon-maps"

export function Mapa() {
    return (
        <div className="w-96">
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