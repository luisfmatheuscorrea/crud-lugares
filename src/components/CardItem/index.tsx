import { CardActions, Divider, IconButton, makeStyles, Typography } from '@material-ui/core';
import { Card, Flag, CardDescription, RowCard } from '../../styles';

import './styles.css';

import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

interface Places {
    id: number;
    flag: string;
    country: string;
    goal: string;
    local: string;
}

interface PlacesProps {
    places: Places;
    setOpen: any;
    setOpenDelete: any;
    setActiveCard: any;
}

const CardItem: React.FC<PlacesProps> = ({ places, setOpen, setOpenDelete, setActiveCard }) => {
    const useStyles = makeStyles({
        icon: {
            width: '1.2rem',
            height: '1.2rem',
            color: '#868686',
        },
        cardtitle: {
            marginTop: '0.5rem',
            marginBottom: '0.188rem',
            color: '#4F9419',
            fontWeight: 700,
            fontSize: '1.1rem',
            fontFamily: 'Roboto',
            textTransform: 'uppercase',
        },
        divider: {
            color: '#ABABAB',
        },
        p: {
            color: '#000000',
            font: '400 0.9rem Roboto',
            marginTop: '0.5rem',
        },
        action: {
            padding: 0,
            alignItems: 'start',
            justifyContent: 'center',
        },
        iconbutton: {
            flex: '0 0 auto',
            color: 'rgba(0, 0, 0, 0.54)',
            padding: '0.188rem',
            overflow: 'visible',
            fontSize: '1.5rem',
            textAlign: 'center',
            transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            borderRadius: '50%',
        }
    });

    const handleDelete = () => {
        setActiveCard(places);
        setOpenDelete(true);
    }

    const handleEdit = () => {
        setActiveCard(places);
        setOpen(true);
    }
    
    const classes = useStyles();

    return (
        <Card>
            <RowCard>
                <Flag src={places.flag} alt={`Bandeira do ${places.country}`} />
                <CardActions className={classes.action}> 
                    <IconButton aria-label="edit" className={classes.iconbutton} onClick={handleEdit} edge="start">
                        <EditIcon className={classes.icon} />
                    </IconButton>
                    <IconButton aria-label="close" className={classes.iconbutton} onClick={handleDelete} edge="start">
                        <CloseIcon className={classes.icon} />
                    </IconButton>
                </CardActions>
            </RowCard>
            <Typography className={classes.cardtitle}>
                {places.country}
            </Typography>
            <Divider />
            <CardDescription>
                <Typography className={classes.p}>Local: {places.local}</Typography>
                <Typography className={classes.p}>Meta: {places.goal}</Typography>
            </CardDescription>
        </Card>
    );
}

export default CardItem;