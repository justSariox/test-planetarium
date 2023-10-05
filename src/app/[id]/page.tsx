'use client'
import s from './page.module.scss'

import {ChangeEvent, FormEvent, useState} from "react";
import {Card} from "@/ui/card/card";
import {Input} from "@/ui/input/input";
import {IpArea} from "@/components/ip-area/ip-area";
import {Button} from "@/ui/button/button";
import {formatIpAddress} from "@/utils/formatIpAddres";
import {useRouter, usePathname} from "next/navigation";


export default function Settings() {
    const router = useRouter()
    const id = usePathname()


    const [formData, setFormData] = useState({
        prefix: '',
        name: '',
        ipAddress: {
            octet1: '',
            octet2: '',
            octet3: '',
            octet4: '',
        },
    })
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleIpInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            ipAddress: {
                ...prevData.ipAddress,
                [name]: value,
            },
        }));
    };


    const changeFactoryHandler = () => {
        return fetch(`/api/factories/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                ...formData,
                ipAddress: formatIpAddress(formData.ipAddress),
            }),
            headers: { 'Content-Type': 'application/json' },
        });
    };

    const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await changeFactoryHandler();

        } catch (error) {
            console.error(error);
        }
    };


    const onSaveButtonClickHandler = async () => {
        await changeFactoryHandler()
        router.push('/')
    }

    return (
        <main className={s.container}>
            <h1 className={s.pageTitle}>Редактировать завод</h1>
            <Card className={s.card}>
                <form onSubmit={onSubmitHandler} className={s.form}>
                    <Input name={'prefix'} label={'Индекс'} onChange={handleInputChange}/>
                    <Input name={'name'} label={'Наименование'} onChange={handleInputChange}/>
                    <IpArea onChange={handleIpInputChange}/>
                </form>
            </Card>
            <div className={s.buttons}>
                <Button variant='secondary' onClick={() => router.push('/')}>Отмена</Button>
                <Button type={'submit'} variant='primary' onClick={onSaveButtonClickHandler}>Сохранить</Button>
            </div>
        </main>
    )
}