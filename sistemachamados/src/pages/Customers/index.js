import React, { useState } from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'

import firebase from '../../services/firebaseconnection'

import './index.css'
import { FiUser } from 'react-icons/fi'
import { toast } from 'react-toastify'

const Customers = () => {
    const [nomeFantasia, setNomeFantasia] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [endereco, setEndereco] = useState('')

    async function handleAdd(e) {
        e.preventDefault()

        if (nomeFantasia !== '' && cnpj !== '' && endereco !== '') {
            await firebase.firestore().collection('customers')
                .add({
                    nomeFantasia: nomeFantasia,
                    cnpj: cnpj,
                    endereco: endereco
                })
                .then(() => {
                    toast.success('Cliente cadastrado com sucesso')
                    setNomeFantasia('')
                    setCnpj('')
                    setEndereco('')
                })
                .catch((err) => {
                    toast.error(`Erro ao cadastrar o usuário: ${err}`)
                    setNomeFantasia('')
                    setCnpj('')
                    setEndereco('')
                })
        }
        else {
            toast.error('Preencha todos os campos')
        }

    }

    return (
        <div>
            <Header />
            <div className='content'>
                <Title name="Clientes">
                    <FiUser size={25} />
                </Title>

                <div className='container'>
                    <form onSubmit={handleAdd} className='form-profile customers'>
                        <label>Nome fantasia</label>
                        <input
                            type='text'
                            placeholder='Digite o nome da sua empresa'
                            value={nomeFantasia}
                            onChange={(e) => setNomeFantasia(e.target.value)}
                        />
                        <label>CNPJ</label>
                        <input
                            type='text'
                            placeholder='Digite o CNPJ'
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='Digite o seu endereço'
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />
                        <button type='submit'>Cadastrar</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Customers