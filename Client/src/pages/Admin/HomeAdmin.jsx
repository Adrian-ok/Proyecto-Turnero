import React from 'react';
import { Sucursales, Empleados, Servicios, Turnos } from '../../icons';
import { Link } from 'react-router-dom'

export function HomeAdmin() {
  return (
    <div className="flex flex-row justify-center mt-32">
      <div className="flex justify-center gap-28">
        <Link
          className="flex flex-col gap-4 items-center hover:text-red-600"
          to={'/sucursales'}
        >
          <Sucursales className="w-full" />
          <p>SUCURSALES</p>
        </Link>

        <Link
          className="flex flex-col gap-4 items-center hover:text-red-600"
          to={'/empleados'}
        >
          <Empleados className="w-full" />
          <p>EMPLEADOS</p>
        </Link>

        <Link
          className="flex flex-col gap-4 items-center hover:text-red-600"
          to={'/servicios'}
        >
          <Servicios className="w-full" />
          <p>SERVICIOS</p>
        </Link>

        <Link
          className="flex flex-col gap-4 items-center hover:text-red-600"
          to={'/turnos'}
        >
          <Turnos className="w-full" />
          <p>TURNOS</p>
        </Link>
      </div>
    </div>
  );
}


