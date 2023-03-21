import { memo, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Card = ({ robot }) => {
    const ROBOT = {
        url: `https://robohash.org/${robot.name}`,
        name: robot.name,
        email: robot.email,
        phone: robot.phone,
        address: robot.address.street,
    };

    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState("sm");

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMaxWidthChange = (event) => {
        setMaxWidth(event.target.value);
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <>
            <div className="card" onClick={handleClick}>
                <div className="card-img">
                    <img src={ROBOT.url} alt="robot" />
                </div>
                <div className="description">
                    <h3>{ROBOT.name}</h3>
                    <p>{ROBOT.email}</p>
                </div>
            </div>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>{ROBOT.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{ROBOT.email}</DialogContentText>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            m: "auto",
                            width: "fit-content",
                        }}
                    >
                        <img src={ROBOT.url} alt="robot" />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default memo(Card);
