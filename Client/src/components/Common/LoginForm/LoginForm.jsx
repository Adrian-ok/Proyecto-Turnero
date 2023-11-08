import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
// import { useEffect } from 'react'

export function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signIn, errors: signinErrors } = useAuth()
    // const navigate = useNavigate()

    const onSubmit = handleSubmit(async (val) => {
        signIn(val)
    })

    return (
        <div className='bg-zinc-800 p-10 rounded-md w-full md:w-6/12 lg:w-4/12'>
            <form onSubmit={onSubmit}>
                {signinErrors?.map((error, index) => (
                    <div key={index} className='bg-red-700 p-2 text-white'>
                        {error}
                    </div>
                ))}

                <input
                    type="email"
                    name="email"
                    {...register('email', { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Email'
                />
                {errors.email && <p className='text-red-700'>Is required</p>}
                <input
                    type="password"
                    name="password"
                    {...register('password', { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Password'
                />
                {errors.password && <p className='text-red-700'>Is required</p>}

                <button className='w-full bg-red-400 my-4 h-9 rounded-xl font-bold'>
                    Sign in
                </button>

                <div className='flex gap-2'>
                    <p>New to Barbershop?</p>
                    <Link className='text-blue-500 underline' to={'/register'}>
                        Sign up
                    </Link>
                </div>
            </form>
        </div>
    )
}
