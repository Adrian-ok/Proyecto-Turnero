import React, { useEffect, useState } from 'react'
import { Loading, ModalBasic, HeaderPage } from '../../components/Common'
import { TableSucursales, AddEditShop } from '../../components/Admin'
import { useShops } from '../../context/ShopsContext'

export function Sucursales() {
    const [loading, setLoading] = useState(false)
    const [component, setComponent] = useState()
    const [title, setTitle] = useState()
    const [show, setShow] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const { getShops, shop, deleteShop } = useShops()

    useEffect(() => getShops, [refresh])
    const showOrHide = () => setShow((prev) => !prev)
    const onRefresh = () => setRefresh((prevState) => !prevState)

    const addSucursal = () => {
        setTitle('Añadir Sucursal')
        setComponent(<AddEditShop onRefresh={onRefresh} onHide={showOrHide} />)
        showOrHide()
    }

    const updateShop = (data) => {
        setTitle('Editar Sucursal')
        setComponent(<AddEditShop onRefresh={onRefresh} onHide={showOrHide} shop={data} />)
        showOrHide()
    }

    const deleteShopp = (data) => {
        const option = window.confirm(`Delete ${data.nombre}?`)
        if (option) {
            deleteShop(data.id_sucursal)
            onRefresh()
        }
    }


    return (
        <div>

            <HeaderPage title='Sucursales' btnTitle='Añadir' btnClick={addSucursal} />

            {loading ? (
                <loading />
            ) : (
                <div className='flex justify-center w-full'>
                    <TableSucursales sucursales={shop} updateShop={updateShop} deleteShop={deleteShopp} />
                </div>
            )}

            <ModalBasic show={show} showOrHide={showOrHide} title={title} children={component} />
        </div>
    )
}
