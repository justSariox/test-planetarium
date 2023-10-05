'use client'

import s from './page.module.scss'
import {IFactory} from "@/models/types";
import {useState, useEffect, ChangeEvent, FormEvent} from "react";
import {Input} from "@/ui/input/input";
import {FactoriesList} from "@/components/factories-list/factories-list";
import {getFactories} from "@/utils/getFactories";

const Factories = () => {
    const [factories, setFactories] = useState<IFactory[]>([])
    const [name, setName] = useState<string>('')
    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const AddNewFactoriesHandler = async (name: string) => {
        try {
            await fetch('api/factories/', {
                method: 'POST',
                body: JSON.stringify({name}),
                headers: {'Content-Type': 'application/json'}
            })
            const data = await getFactories()
            setFactories(data)
            setName('')
        } catch (e) {
            throw new Error('something went wrong')
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await AddNewFactoriesHandler(name);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await getFactories();
            setFactories(data);
        }
        fetchData().then(() => console.log('success'));
    }, [])

    return (
        <main>
            <div className={s.container}>
                <h1 className={s.pageTitle}>Заводы</h1>
                <form onSubmit={handleSubmit}>
                    <Input className={s.input} value={name} onChange={handleChangeTitle} >+</Input>
                </form>
                <FactoriesList factories={factories} setFactories={setFactories}/>
            </div>
        </main>
    )
};

export default Factories;