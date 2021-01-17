import './styles.css';

import { Button, makeStyles, Modal, Paper, Typography } from '@material-ui/core'
import api from '../../services/api';
import { RowCard } from '../../styles';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '1.563rem',
    },
    icon: {
        width: '2.5rem',
        height: '2.5rem',
        marginLeft: '0.625rem',
    },
    paper: {
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9f9',
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
        backgroundColor: '#FFFFFF',
        color: '#000000',
        font: '700 1.125rem Roboto',
        padding: '1rem 5rem',
        borderRadius: '0.438rem',
        margin: '1.875rem 0 0.625rem 0',
        boxShadow: '0 0.25rem 0.25rem #00000040',
        border: 'solid 0.063rem #000000',

        '&:hover': {
            backgroundColor: '#005e1480',
        },
    },
    buttondelete: {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        font: '700 1.125rem Roboto',
        padding: '1rem 5rem',
        borderRadius: '0.438rem',
        margin: '1.875rem 0 0.625rem 0',
        boxShadow: '0 0.25rem 0.25rem #00000040',
        border: 'solid 0.063rem #000000',
        marginRight: '1.875rem',

        '&:hover': {
            backgroundColor: '#97000080',
        },
    },
    title: {
        font: '700 1.563rem Roboto',
        color: '#000000',
    },
  }));

interface ModalDeleteProps {
    openDelete: boolean;
    setOpenDelete: any;
    loadPlaces: any;
    deleteAlert: any;
    errorAlert: any;
    activeCard: ActiveCard;
}

export interface ActiveCard {
    id: number;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({ openDelete, setOpenDelete, deleteAlert, errorAlert, activeCard, loadPlaces }) => {
    const classes = useStyles();

    function handleDeletePlace() {
        api.delete(`places/${activeCard.id}`)
          .then(() => {
            deleteAlert();
            handleCloseDelete();
            loadPlaces();
        }).catch(() => {
            errorAlert();
        });
    }

    const handleCloseDelete = () => {
        setOpenDelete(false);
    }

    return (
        <div className="all">
            <Modal
                open={openDelete}
                onClose={handleCloseDelete}
                className={classes.modal}
                disableAutoFocus
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Paper className={classes.paper}>
                    <Typography className={classes.title}>DESEJA DELETAR?</Typography>
                    <RowCard>
                        <Button className={classes.buttondelete} onClick={handleDeletePlace}>
                            SIM
                        </Button>
                        <Button onClick={() => { setOpenDelete(false) }} className={classes.button}>
                            NÃO
                        </Button>
                    </RowCard>
                </Paper>
            </Modal>
        </div>
)}

export default ModalDelete;