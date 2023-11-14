import React, { useState } from 'react'
import { Button } from 'flowbite-react'
import { map } from 'lodash'
import { HeaderPage } from '../../components/Common'
import { Navigate, redirect, Link } from 'react-router-dom'

export function HomeClient() {

  const [conTurnos, setConTurnos] = useState(true)

  const Redirect = () => {
    <Link to='/register'></Link>
  }

  return (
    <div className='flex flex-col items-center justify-center'>

      {!conTurnos ? (
        <div className="flex flex-col items-center justify-center mt-36 gap-6">
          <div className=''>
            <h1 className='text-red-500 text-4xl font-bold py-2'>
              ¡RESERVA TU TURNO YA!
            </h1>
          </div>
          <Link to={'/selectSucursal'}>
            <Button gradientMonochrome='failure' size={'xl'}>RESERVAR</Button>
          </Link>
        </div>

      ) : (
        <>
          <div className='flex w-full justify-around my-4'>
            <h2 className='text-2xl font-semibold'>Turnos solicitados</h2>

            <div className='flex'>
              <Link to={'/selectSucursal'}>
                <Button className='mr-4' color="success">
                  Nuevo Turno
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-zinc-700 w-9/12 p-12 gap-12 flex flex-col justify-center mt-8 rounded-lg">

            {map(turnosListos, (item, index) => (
              <div key={index} className='flex gap-12 text-md bg-zinc-500 p-2 rounded-md justify-center'>
                <p>{item.fecha}</p>
                <p>{item.hora} hs</p>
                <p>{item.barbero}</p>
                <p>{item.servicio}</p>

                <p>✏️</p>
                <p>🗑️</p>
              </div>
            ))}

          </div>
        </>
      )}

    </div>
  )
}

const turnosListos = [
  {
    fecha: '14-11-2023',
    hora: '09:00',
    barbero: 'Barbero 1',
    servicio: 'Corte clasico'
  },
  {
    fecha: '26-11-2023',
    hora: '16:30',
    barbero: 'Barbero 4',
    servicio: 'Corte clasico'
  },
]
