import React, { useEffect } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form'
import { useShops } from '../../../../context/ShopsContext'

export function AddEditShop(props) {

    const { createShop, updateShop } = useShops()
    const { onHide, onRefresh, shop } = props
    const { register, setValue, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        if (shop) {
            setValue("nombre", shop.nombre)
            setValue("departamento", shop.departamento)
            setValue("direccion", shop.direccion)
        }
    }, [])

    const onSubmit = handleSubmit(async (val) => {
        try {
            if (shop) {
                await updateShop(shop.id_sucursal, val)
            } else {
                await createShop(val)
            }
            onHide()
            onRefresh()
        } catch (error) {
            console.log(error)
        }
    })

    return (
        <form onSubmit={onSubmit}>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="text" value="Nombre sucursal" />
                </div>
                <TextInput
                    id="nombre"
                    type='text'
                    {...register('nombre', { required: true })}
                // value={formik.values.username}
                // onChange={formik.handleChange}
                // helperText={<span className='text-red-600'>{formik.errors.username}</span>}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Departamento" />
                </div>
                <TextInput
                    id="departamento"
                    type='text'
                    {...register('departamento', { required: true })}
                // value={formik.values.email}
                // onChange={formik.handleChange}
                // helperText={<span className='text-red-600'>{formik.errors.email}</span>}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password" value="Dirección" />
                </div>
                <TextInput
                    id="direccion"
                    type='text'
                    {...register('direccion', { required: true })}
                // value={formik.values.password}
                // onChange={formik.handleChange}
                // helperText={<span className='text-red-600'>{formik.errors.password}</span>}
                />
            </div>

            <div className="w-full flex justify-center">
                <Button type='submit'>{shop ? 'Actualizar' : 'Crear'}</Button>
                {/* <Button type='submit'>Crear</Button> */}
            </div>
        </form>
    )
}
