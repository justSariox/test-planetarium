import React from 'react';
import {IFactory} from "@/models/types";
import {Card} from "@/ui/card/card";
import s from './factories-list.module.scss'
import Link from "next/link";
import {Button} from "@/ui/button/button";
import {getFactories} from "@/utils/getFactories";

type FactoriesListProps = {
    factories: IFactory[]
    setFactories: (factories: IFactory[]) => void
}

export const FactoriesList = ({factories, setFactories}: FactoriesListProps) => {
    const handleDeleteFactory = async (id: string) => {
        await fetch(`api/factories/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({ id }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await getFactories()
        setFactories(data)
    }

    return (
        <div className={s.factoriesList}>
            {factories?.map((fact: IFactory) => <Card key={fact.name} className={s.card}>
                <p>{fact?.name}</p>
                <p>{fact?.prefix}</p>
                <p>{fact?.ipAddress}</p>

                    <Link href={`/${fact._id}`}>
                        <Button variant={'primary'} >Изменить</Button>
                    </Link>
                    <Button onClick={() => handleDeleteFactory(fact?._id)} variant={'secondary'}>Удалить</Button>

            </Card>)}
        </div>
    );
};