import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, DialogActions, Button, CircularProgress, Box } from '@mui/material';

const getColorBasedOnAccuracy = (accuracy) => {
    if (accuracy < 0) return 'error.main'; // Red for less than 0
    if (accuracy >= 0 && accuracy < 55) return 'warning.main'; // Yellow for 0 to 54
    if (accuracy >= 55 && accuracy < 100) return 'success.main'; // Green for 55 to 99
    return 'cyan'; // Fluorescent cyan for 100
};

const AccuracyDialog = ({ open, accuracy, onClose }) => {
    const progressColor = getColorBasedOnAccuracy(accuracy);

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Result</DialogTitle>
            <DialogContent>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ p: 4 }}
                >
                    <Box position="relative" display="inline-flex">
                        <CircularProgress
                            variant="determinate"
                            value={accuracy}
                            size={100}
                            thickness={4}
                            sx={{ color: progressColor }} // Apply the dynamic color based on accuracy
                        />
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography variant="h6" component="div" color="textSecondary">
                                {`${Math.round(accuracy)}%`}
                            </Typography>
                        </Box>
                    </Box>
                    <Typography sx={{ mt: 2, fontSize: '1.2rem', textAlign: 'center' }}>
                        Your accuracy is {accuracy.toFixed(2)}%
                    </Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary" variant="contained" size="large">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AccuracyDialog;
