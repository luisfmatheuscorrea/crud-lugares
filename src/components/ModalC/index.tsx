/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, FormEvent, useEffect } from 'react';
import './styles.css';

import { Button, CardActions, createMuiTheme, IconButton, makeStyles, Modal, Paper, Typography } from '@material-ui/core'
import api from '../../services/api';
import Input from '../Input';
import InputMask from 'react-input-mask';
import { InputLocal, RowCard } from '../../styles';

import CloseIcon from '@material-ui/icons/Close';

const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 425,
        sm: 768,
        md: 1025,
        lg: 1440,
        xl: 2560,
      },
    },
  })

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '1.563rem',
    },
    icon: {
        width: '1.875rem',
        height: '1.875rem',
        color: '#FFF',
        position: 'fixed',
        marginRight: '-48rem',
        marginTop: '-4.3rem',
    },
    absolute: {
        position: 'absolute',
    },
    paper: {
        padding: '3.75rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3a3a3aD9',
        borderRadius: '0.438rem',

        '&:focus': {
            border: '0 none',
            outline: '0',
        }
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#006C18',
        color: '#FFF',
        font: '400 1.125rem Roboto',
        padding: '1rem 4rem',
        borderRadius: '0.438rem',
        margin: '1.875rem 0 0 0',

        '&:hover': {
            backgroundColor: '#005e14',
        },
    },
    title: {
        font: '700 1.875rem Roboto',
        color: '#FFF',
        marginBottom: '0.625rem',
    },
    divider: {
        marginTop: '0.313rem',
        backgroundColor: '#00000000',
    },
    mask: {
        color: '#868686',
        font: '400 1.125rem Roboto',
    },
  }));

interface ActiveCard {
    id: number;
    country: string;
    local: string;
    goal: string;
    flag: string;
}

interface ModalProps {
    open: boolean;
    setOpen: any;
    loadPlaces: any;
    editAlert: any;
    errorAlert: any;
    activeCard: ActiveCard;
}

const ModalC: React.FC<ModalProps> = ({ open, setOpen, activeCard, editAlert, errorAlert, loadPlaces }: ModalProps) => {
    const [local, setLocal] = useState('');
    const [goal, setGoal] = useState('');
    const [country, setCountry] = useState('');
    const [flag, setFlag] = useState('');
    const [id, setId] = useState(0);
    const classes = useStyles();

    function handleEditPlace(e: FormEvent) {
        e.preventDefault();

        api.put(`places/${activeCard.id}`, {
            id,
            local,
            goal,
            country,
            flag,
        }).then(() => {
            editAlert();
            loadPlaces();
            setOpen(false);
        }).catch(() => {
            errorAlert();
        });
    }

    const handleClose = () => {
        setOpen(false);
    }

    const loadActiveCard = () => {
        setId(activeCard.id);
        setFlag(activeCard.flag);
        setLocal(activeCard.local);
        setGoal(activeCard.goal);
        setCountry(activeCard.country);
    }

    useEffect(() => {
        loadActiveCard();
    },[]);

    return (
        <div className="all">
            <Modal
                open={open}
                onClose={handleClose}
                className={classes.modal}
                disableAutoFocus
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Paper className={classes.paper}>
                    <CardActions className={classes.icon}>
                        <IconButton className={classes.icon} >
                            <CloseIcon className={classes.icon} onClick={handleClose} />
                        </IconButton>
                    </CardActions>
                    <Typography className={classes.title}>EDITAR</Typography>
                    <form onSubmit={handleEditPlace} className={classes.form}>
                        <RowCard>
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
                                <InputMask mask="99/9999" placeholder="mês/ano" value={goal} className={classes.mask} onChange={(e:any) => { setGoal(e.target.value) }} />
                            </Input>
                        </RowCard>
                        <Button type='submit' className={classes.button}>
                            Adicionar
                        </Button>
                    </form>
                </Paper>
            </Modal>
        </div>
)}

export default ModalC;