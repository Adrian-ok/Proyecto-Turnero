import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { Mapa } from '../../components/Common'

export function SelectSucursal() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex w-full justify-around my-4'>
                <h2 className='text-2xl font-semibold'>Seleccione sucursal</h2>

                <div className='flex'>
                    <Link to={'/selectService'}>
                        <Button className='mr-4' color="success">
                            Continuar
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="bg-zinc-700 w-9/12 p-12 rounded-lg flex justify-around items-center">
                <Mapa />
                <div className="bg-zinc-400 w-52 h-80 p-4 rounded-sm flex items-center justify-center">
                    <p>INFO DE SUCURSAL</p>
                </div>
            </div>
            {/* <Mapa /> */}



        </div>
    )
}
