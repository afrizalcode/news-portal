import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Berita Saya</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white shadow-sm sm:rounded-lg">
                        <input type="text" placeholder="Judul" className="m-2 input input-bordered input-primary w-full" />
                        <input type="text" placeholder="Deskripsi" className="m-2 input input-bordered input-primary w-full" />
                        <input type="text" placeholder="Kategori" className="m-2 input input-bordered input-primary w-full" />
                        <button class="btn btn-accent m-2">Submit</button>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
