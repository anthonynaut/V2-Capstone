import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface ReviewsFormProps {
    id?:string;
    data?:{}
}

interface ReviewsState {
    name: string;
    rating: string;
}

export const ReviewsForm = (props:ReviewsFormProps) => {

    const dispatch = useDispatch();
    let { reviewData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<ReviewsState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name"> Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="start">Star Rating</label>
                    <Input {...register('star')} name="start" placeholder="Star"/>
                </div>
                <div>
                    <label htmlFor="feedback">Feedback</label>
                    <Input {...register('feedback')} name="feedback" placeholder="Feedback"/>
                </div>
               
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}