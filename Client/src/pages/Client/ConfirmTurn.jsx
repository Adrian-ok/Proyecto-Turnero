import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'

export function ConfirmTurn() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex w-full justify-around my-4'>
                <h2 className='text-2xl font-semibold'>Confirmar Turno</h2>
            </div>
            <div className="bg-zinc-700 w-4/12 p-12 rounded-lg gap-4 flex flex-col justify-center items-center">
                <p className="text-lg font-semibold" >Día - 14/11/23</p>
                <p className="text-lg font-semibold">Hora - 10:00 hs</p>
                <p className="text-lg font-semibold">Servicio - Corte clásico</p>
                <p className="text-lg font-semibold">Barbero - Barbero 1</p>

                <Button color='warning' size={'sm'} >Editar</Button>
                <Link to={'/client'}>
                    <Button gradientMonochrome='failure' size={'xl'} >Confirmar</Button>
                </Link>
            </div>
        </div>
    )
}
