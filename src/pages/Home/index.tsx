import React, { useState, FormEvent, useEffect } from 'react';
import { Button, makeStyles, Snackbar } from '@material-ui/core';
import { GridCards, Header, WallpaperForm, Img, InputLocal } from '../../styles';
import { uuid } from 'uuidv4';

import api from '../../services/api';
import restcountries from '../../services/restcountries';

import Logo from '../../assets/images/Logo.svg';

import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';
import ModalC from '../../components/ModalC';
import ModalDelete from '../../components/ModalDelete';
import CardItem from '../../components/CardItem';
import InputMask from 'react-input-mask';
import { Alert } from '@material-ui/lab';

interface ActiveCard {
    id: number;
    country: string;
    local: string;
    goal: string;
    flag: string;
}

const Home: React.FC = () => {
    const [local, setLocal] = useState('');
    const [goal, setGoal] = useState('');
    const [country, setCountry] = useState('');
    const id = uuid();
    const [countryName, setCountryName] = useState('');
    const [flag, setFlag] = useState('');
    const [countries, setCountries] = useState([]);
    const [places, setPlaces] = useState([]);
    const [textAlert, setTextAlert] = useState("");
    const [openAlert, setOpenAlert] = useState(false);
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [activeCard, setActiveCard] = useState<ActiveCard>(
        {} as ActiveCard,
    );

    const useStyles = makeStyles({
        icon: {
            width: '1.313rem',
            height: '1.313rem',
            color: '#868686',
        },
        p: {
            color: '#000000',
            font: '400 1rem Roboto',
            marginTop: '0.5rem',
        },
        button: {
            width: '12.5rem',
            backgroundColor: '#006C18',
            color: '#FFF',
            font: '400 1.125rem Roboto',
            padding: '1rem 4rem',
            borderRadius: '0.438rem',
            marginTop: '1.3rem',
            marginLeft: '2.125rem',

            '&:hover': {
                backgroundColor: '#005e14',
            },
        },
        message: {
            fontSize: '1rem',
        },
        mask: {
            color: '#868686',
            font: '400 1.125rem Roboto',
        },
    });
    
    const classes = useStyles();

    function handleCreatePlace(e: FormEvent) {
        e.preventDefault();

        api.post('places', {
            id,
            local,
            goal,
            country,
            flag,
        }).then(() => {
            addAlert();
            setLocal('');
            setGoal('');
            setCountry('');
            setFlag('');
            loadPlaces();
        }).catch(() => {
            errorAlert();
        });
    }

    async function loadCountries() {
        const response = await restcountries.get('all', {});
    
        setCountries(response.data)
    }

    async function loadPlaces() {
        const response = await api.get('places', {});
    
        setPlaces(response.data);
    }

    const handleAlert = () => {
        setOpenAlert(!openAlert);
    }

    const addAlert = () => {
        setTextAlert("Lugar de viagem adicionado com sucesso!");
        handleAlert();
    }

    const editAlert = () => {
        setTextAlert("Lugar de viagem atualizado com sucesso!");
        handleAlert();
    }

    const deleteAlert = () => {
        setTextAlert("Lugar de viagem deletado com sucesso!");
        handleAlert();
    }

    const errorAlert = () => {
        setTextAlert("Algo deu errado!");
        handleAlert();
    }

    useEffect(() => {
        loadCountries();
        loadPlaces();
    }, [])

    return(
        <div className="container">
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleAlert}>
                <Alert onClose={handleAlert} variant="outlined" className={classes.message} severity={'success'}>
                    {textAlert}
                </Alert>
            </Snackbar>
            <Header>
                <Img src={Logo} alt="Logo" />
            </Header>
            <WallpaperForm onSubmit={handleCreatePlace}>
                <Select
                    name="country" 
                    label="Country"
                    value={countryName} 
                    countries={countries}
                    setFlag={setFlag}
                    setCountry={setCountry}
                    setCountryName={setCountryName}
                />
                <Input 
                    name="local" 
                    label="Local"
                >
                    <InputLocal 
                        type="text" 
                        id="local"
                        value={local}
                        placeholder="Digite o local que deseja conhecer"
                        onChange={(e:any) => { setLocal(e.target.value) }}
                    />
                </Input>
                <Input 
                    name="goal" 
                    label="Meta"
                >
                    <InputMask mask="99/9999" className={classes.mask} id="goal" value={goal} placeholder="mês/ano" onChange={(e:any) => { setGoal(e.target.value) }} />
                </Input>
                <Button type='submit' className={classes.button}>
                    Adicionar
                </Button>
            </WallpaperForm>
                <GridCards>
                    {places.map(places => {
                        return(
                            <CardItem places={places} setOpen={setOpen} setOpenDelete={setOpenDelete} setActiveCard={setActiveCard} />
                        )
                    })}
                </GridCards>
            {open && <ModalC open={open} activeCard={activeCard} editAlert={editAlert} errorAlert={errorAlert} setOpen={setOpen} loadPlaces={loadPlaces} />}
            {openDelete && <ModalDelete activeCard={activeCard} deleteAlert={deleteAlert} errorAlert={errorAlert} openDelete={openDelete} setOpenDelete={setOpenDelete} loadPlaces={loadPlaces} />}
        </div>
    )
};

export default Home;