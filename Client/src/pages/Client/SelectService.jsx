import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { Service } from '../../icons'
import { map } from 'lodash'

export function SelectService() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex w-full justify-around my-4'>
                <h2 className='text-2xl font-semibold'>Seleccione servicio</h2>

                <div className='flex'>
                    <Link to={'/selectBarber'}>
                        <Button className='mr-4' color="success">
                            Continuar
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="bg-zinc-700 w-6/12 p-12 rounded-lg gap-6 flex flex-col justify-center">
                {map(servicios, (item, index) => (
                    <div key={index} className='flex justify-between text-md bg-zinc-500 p-2 rounded-md'>
                        <Service />
                        <p>{item.servicio}</p>
                        <p>{item.duracion}</p>
                        <p>{Number(item.precio).toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 })}</p>
                        <p> ➕ </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const servicios = [
    {
        servicio: 'Corte clasico',
        duracion: '30min',
        precio: 2000
    },
    {
        servicio: 'Corte',
        duracion: '30min',
        precio: 2500
    },
    {
        servicio: 'Corte con diseño',
        duracion: '60min',
        precio: 3000
    },
    {
        servicio: 'Arreglo barba',
        duracion: '30min',
        precio: 2000
    },
    {
        servicio: 'Corte + Barba',
        duracion: '60min',
        precio: 3000
    },
]