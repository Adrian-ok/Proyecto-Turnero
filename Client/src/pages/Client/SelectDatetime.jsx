import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Datepicker } from 'flowbite-react'
import { map } from 'lodash'

export function SelectDatetime() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex w-full justify-around my-4'>
                <h2 className='text-2xl font-semibold'>Seleccione fecha y hora</h2>

                <div className='flex'>
                    <Link to={'/confirm'}>
                        <Button className='mr-4' color="success">
                            Continuar
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="bg-zinc-700 w-6/12 p-12 rounded-lg gap-4 flex flex-col justify-center">
                <Datepicker />
                {map(Horas, (item, index) => (
                    <div key={index} className='flex justify-around text-md bg-zinc-500 p-2 rounded-md items-center'>
                        <p className="border-2 border-zinc-800 p-2 rounded-md">{item.hora1}</p>
                        <p className="border-2 border-zinc-800 p-2 rounded-md">{item.hora2}</p>
                        <p className="border-2 border-zinc-800 p-2 rounded-md">{item.hora3}</p>
                        <p className="border-2 border-zinc-800 p-2 rounded-md">{item.hora4}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Horas = [
    {
        hora1: '09:00',
        hora2: '10:00',
        hora3: '11:00',
        hora4: '12:00',
    },
    {
        hora1: '15:00',
        hora2: '16:00',
        hora3: '17:00',
        hora4: '18:00',
    },
    {
        hora1: '19:00',
        hora2: '20:00',
        hora3: '00:00',
        hora4: '00:00',
    },
    {
        hora1: '00:00',
        hora2: '00:00',
        hora3: '00:00',
        hora4: '00:00',
    },
]