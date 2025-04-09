"use client"
import { useEffect, useState } from "react";
import Input from "../components/input/Input";
import axios from "axios";


export default function Login() {
    const [data, setData] = useState([]); // Estado para armazenar os dados da API
    const fetchData = async () => {
        const respons = await axios.post('http://127.0.0.1:8000/api/login', {
            email: 'danilo1@gmail.com',
            password: '123'
        })
        .then(function (respons) {
            setData(respons.data);
        })        
        
      };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 min-w-screen bg-gray-100">
            <div className="logo h-40 w-full w-full md:w-2/4 bg-primary flex items-center justify-center">
                logo
            </div>
            <form className="mt-4 space-y-4 w-full md:w-2/4" method="POST" onSubmit={(e) => {
                e.preventDefault();
                fetchData()
            }
            }>
                <h1 className="text-2xl p-2 font-bold text-white bg-primary w-full text-center rounded">Area do Aluno</h1>
                <Input name={'code'} placeholder={'Código do Aluno'} required={true} type={'text'}/>
                <Input name={'bithdate'} placeholder={'Data de Nascimento'} required={true} type={'date'}/>
                <button
                    type="submit"
                    className="w-full p-3 text-white bg-primary rounded cursor-pointer"
                >
                    Entrar
                </button>
            </form>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    )
}