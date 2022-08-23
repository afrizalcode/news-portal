import React from 'react';
import { Head } from '@inertiajs/inertia-react';

export default function Testing(props) {

    console.log(props);

    return (
        <div>
            <Head title={props.title} />
            <h1>{props.content}</h1>
            <h1>{props.ziggy.url}</h1>
        </div>
    )
}
