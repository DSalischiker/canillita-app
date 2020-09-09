import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function ControlledAccordions() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='Footer'>
            <div className={classes.root}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>TP4</Typography>
                        <Typography className={classes.secondaryHeading}>Descripción</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Este es el trabajo práctico 4 para la asignatura Programación Multimedial III, de la Lic. en Tecnología Multimedial de la Universidad Maimónides, 2020.
          </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className={classes.heading}>APIs</Typography>
                        <Typography className={classes.secondaryHeading}>
                            Canillitapp y OpenWeatherMap
          </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Para obtener las noticias se hace uso de la <a href="https://github.com/Canillitapp/headlines-api" target="_blank"><u>API canillitapp</u></a> y para obtener la temperatura actual en Buenos Aires de <a href="https://openweathermap.org/" target="_blank"><u>OpenWeatherMap</u></a>.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className={classes.heading}>Autoría</Typography>
                        <Typography className={classes.secondaryHeading}>
                            Diego Salischiker
          </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Este trabajo práctico fue realizado por Diego Salischiker. Sin derechos reservados. Viva la cultura libre(?).
          </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>
    );
}