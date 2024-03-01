import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, DialogActions, Button, CircularProgress, Box } from '@mui/material';

const AccuracyDialog = ({ open, accuracy, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Result</DialogTitle>
            <DialogContent>
                <Box
                    display="flex" // Use Flexbox to center elements
                    flexDirection="column" // Stack elements vertically
                    alignItems="center" // Center elements horizontally
                    justifyContent="center" // Center elements vertically
                    sx={{ p: 4 }} // Add padding for more space around elements
                >
                    <Box position="relative" display="inline-flex">
                        <CircularProgress
                            variant="determinate"
                            color='primary'
                            value={accuracy}
                            size={100} // Size of the CircularProgress
                            thickness={4}
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
