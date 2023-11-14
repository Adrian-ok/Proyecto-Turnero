import React from 'react'
import { Table } from 'flowbite-react';
import { map } from 'lodash'

export function TableSucursales(props) {

    const { sucursales, updateShop, deleteShop } = props

    return (
        <Table>
            <Table.Head className='text-center'>
                <Table.HeadCell>Sucursal</Table.HeadCell>
                <Table.HeadCell>Departamento</Table.HeadCell>
                <Table.HeadCell>Dirección</Table.HeadCell>
                <Table.HeadCell>Acciones</Table.HeadCell>
            </Table.Head>
            <Table.Body>
                {map(sucursales, (item, index) => (
                    <Table.Row key={index} className='bg-white text-center dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell className='flex justify-center'>{item.nombre}</Table.Cell>
                        <Table.Cell>{item.departamento}</Table.Cell>
                        <Table.Cell>{item.direccion}</Table.Cell>
                        <Actions sucursal={item} updateShop={updateShop} deleteShop={deleteShop} />
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}

function Actions(props) {
    const { sucursal, updateShop, deleteShop } = props

    return (
        <Table.Cell className='text-lg'>
            <button className='mr-6' onClick={() => updateShop(sucursal)}>✏️</button>
            <button onClick={() => deleteShop(sucursal)}>🗑️</button>
        </Table.Cell>
    )
}
