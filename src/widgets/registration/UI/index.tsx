'use client'

import React, { useEffect, useState } from 'react'

import Link from 'next/link'

import * as Yup from 'yup'

import { useRouter } from 'next/navigation'

import useAuthStore from '@/shared/store/auth'

import register from '../utils/register'

import AuthForm from '@/widgets/auth-form/UI'

import IInput from '@/shared/interfaces/input'

const Schema = Yup.object().shape({
    login: Yup.string()
        .min(5, 'Логин слишком короткий')
        .max(20, 'Логин слишком длинный')
        .required('Логин обязателен'),
    firstName: Yup.string().max(50, 'Имя слишком длинное').required('Имя обязательно'),
    lastName: Yup.string().max(50, 'Фамилия слишком длинная').required('Фамилия обязательна'),
    password: Yup.string()
        .min(5, 'Пароль слишком короткий')
        .max(20, 'Пароль слишком длинный')
        .required('Пароль обязателен')
})

const Registration = () => {
    const router = useRouter()

    const { setIsAuth } = useAuthStore()

    const [login, setLogin] = useState('')
    const [isLoginValid, setIsLoginValid] = useState(true)

    const [firstName, setFirstName] = useState('')
    const [isFirstNameValid, setIsFirstNameValid] = useState(true)

    const [lastName, setLastName] = useState('')
    const [isLastNameValid, setIsLastNameValid] = useState(true)

    const [password, setPassword] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState(true)

    const heading = 'Регистрация'

    useEffect(() => {
        setIsLoginValid(true)
        setIsPasswordValid(true)
        setIsFirstNameValid(true)
        setIsLastNameValid(true)
    }, [login, password, firstName, lastName])

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
        },
        {
            label: 'Имя',
            type: 'text',
            value: firstName,
            isValid: isFirstNameValid,
            onChange: (event) => setFirstName(event.target.value)
        },
        {
            label: 'Фамилия',
            type: 'text',
            value: lastName,
            isValid: isLastNameValid,
            onChange: (event) => setLastName(event.target.value)
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
            await Schema.validateAt('firstName', { firstName })
            setIsFirstNameValid(true)
        } catch (error) {
            setIsFirstNameValid(false)
            valid = false
        }

        try {
            await Schema.validateAt('lastName', { lastName })
            setIsLastNameValid(true)
        } catch (error) {
            setIsLastNameValid(false)
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

        const data = await register({ login, password, firstName, lastName })

        if (!data) return

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
                Уже есть учётная запись? <Link href='/auth/login'>Авторизоваться</Link>
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

export default Registration
