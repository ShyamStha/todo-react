
import React, { useEffect, useState } from 'react';
import { ITodo } from './Todo'

export const MyTimer = ({ todo }: { todo: ITodo }) => {

    const [time, setTime] = useState<string>("")

    useEffect(() => {

        const interval = setInterval(() => {
            const seconds = todo.deadline.getSeconds()
            const inutes = todo.deadline.setMinutes()

            const currentTIme = new Date()

            currentTIme.

                if(time 0) {
                clearInterval(interval)
            }

            setTime(`${} `)
        }, 1000)

    }, [todo]);


    return (
        <div>

        </div>
    )
});