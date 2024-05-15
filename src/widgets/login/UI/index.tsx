'use client'

import React, { useEffect, useState } from 'react'

import Link from 'next/link'

import * as Yup from 'yup'

import { useRouter } from 'next/navigation'

import useAuthStore from '@/shared/store/auth'

import logIn from '@/widgets/login/utils/log-in'

import AuthForm from '@/widgets/auth-form/UI'

import IInput from '@/shared/interfaces/input'

const Schema = Yup.object().shape({
    login: Yup.string()
        .min(5, 'Логин слишком короткий')
        .max(20, 'Логин слишком длинный')
        .required('Логин обязателен'),
    password: Yup.string()
        .min(5, 'Пароль слишком короткий')
        .max(20, 'Пароль слишком длинный')
        .required('Пароль обязателен')
})

const Login = () => {
    const router = useRouter()

    const { setIsAuth } = useAuthStore()

    const [login, setLogin] = useState('')
    const [isLoginValid, setIsLoginValid] = useState(true)

    const [password, setPassword] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState(true)

    const heading = 'Войти'

    useEffect(() => {
        setIsLoginValid(true)
        setIsPasswordValid(true)
    }, [login, password])

    const fields: IInput[] = [
        {
            label: 'Логин',
            type: 'text',
            value: login,
            isValid: isLoginValid,
            onChange: (event) => setLogin(event.target.value)
        },
        {
            label: 'Пароль',
            type: 'password',
            value: password,
            isValid: isPasswordValid,
            onChange: (event) => setPassword(event.target.value)
        }
    ]

    const validate = async () => {
        let valid = true
        try {
            await Schema.validateAt('login', { login })
            setIsLoginValid(true)
        } catch (error) {
            setIsLoginValid(false)
            valid = false
        }

        try {
            await Schema.validateAt('password', { password })
            setIsPasswordValid(true)
        } catch (error) {
            setIsPasswordValid(false)
            valid = false
        }

        return valid
    }

    const handleClick = async () => {
        const isValid = await validate()

        if (!isValid) return

        const data = await logIn({ login, password })

        if (!data) return

        console.log(data)

        localStorage.setItem('token', data.result)

        setIsAuth(true)

        router.push('/')
    }

    const button = {
        children: 'Продолжить',
        onClick: () => handleClick()
    }

    const Hint = () => {
        return (
            <div className='hint'>
                Ещё нет учётной записи? <Link href='/auth/registration'>Создать сейчас</Link>
            </div>
        )
    }

    const props = {
        Hint,
        fields,
        button,
        heading
    }

    return <AuthForm {...props} />
}

export default Login
