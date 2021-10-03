import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MeninaInteira from "../../../assets/MeninaInteira.png"
import swal from 'sweetalert';
import { BrowserRouter as Router, useHistory } from "react-router-dom";

const steps = [
    {
        label: 'Who is Julia?',
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'Where can we find space ship parts?',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Now we need some tools...',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
];

export default function ChanllengeOne() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    let history = useHistory();

    const goodJob = () => {
        swal("Good job!", "You finished the first challenge!", "success")
        .then((value) => {
            history.push("/challenge");
          })
    }

    return (
        <div style={{ height: "100vh", width: "100vw" }}>
        <Container maxWidth="lg" style={{ padding: "20px" }}>
            <div style={{ marginBottom: "10px" }}>
                <Typography style={{ textAlign: "left", color: "gray"}} variant="h3" component="Router" gutterBottom>
                    1. Earth
                </Typography>
            </div>
            <div style={{ marginBottom: "10px" }}>
                <Typography style={{ textAlign: "left", color: "black"}} variant="h4" component="Router" gutterBottom>
                    Hi, welcome
                </Typography>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <Typography style={{ textAlign: "left", color: "black"}} variant="h5" component="Router" gutterBottom>
                    Complete the trail in order to help Julia obtain parts for her space ship.
                </Typography>
            </div>

            <Grid container spacing={2}>
            <Grid item xs={8}>
            <Box sx={{ maxWidth: 900 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                optional={
                                    index === 2 ? (
                                        <Typography variant="h6">Last step</Typography>
                                    ) : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Typography>{step.description}</Typography>
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        <Button
                                            style={{ backgroundColor: "#9214B5" }}
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            style={{ color: "#9214B5" }}
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography variant="h6" style={{ color: "#9214B5" }}>All steps completed - you&apos;re finished</Typography>
                        <Button style={{ color: "#9214B5" }} onClick={goodJob} sx={{ mt: 1, mr: 1 }}>
                            Get your Reward
                        </Button>
                    </Paper>
                )}
            </Box>
            </Grid>
            <Grid item xs={4}>
                    <img src={MeninaInteira} alt="Julia" />
            </Grid>
            </Grid>
        </Container>
        </div>
    );
}