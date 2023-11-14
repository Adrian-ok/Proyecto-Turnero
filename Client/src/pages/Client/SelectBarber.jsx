import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { Service } from '../../icons'
import { map } from 'lodash'

export function SelectBarber() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex w-full justify-around my-4'>
                <h2 className='text-2xl font-semibold'>Seleccione barbero</h2>

                <div className='flex'>
                    <Link to={'/selectDatetime'}>
                        <Button className='mr-4' color="success">
                            Continuar
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="bg-zinc-700 w-6/12 p-12 rounded-lg gap-6 flex flex-col justify-center">
                {map(empleados, (item, index) => (
                    <div key={index} className='flex justify-around text-md bg-zinc-500 p-2 rounded-md items-center'>
                        <p className='text-3xl'> 💇‍♂️ </p>
                        <p>{item.nombre}</p>
                        <p > ➕ </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const empleados = [
    {
        nombre: 'Empleado 1'
    },
    {
        nombre: 'Empleado 2'
    },
    {
        nombre: 'Empleado 3'
    },
    {
        nombre: 'Empleado 4'
    },
]