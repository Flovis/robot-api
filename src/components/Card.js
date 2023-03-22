import { memo, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import "../style/app.css";

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
                <div className="modal">
                    <div className="content">
                        <div className="content-img">
                            <DialogContent className="cardo">
                                <Box>
                                    <img
                                        src={ROBOT.url}
                                        alt="robot"
                                        className="robot-img"
                                    />
                                </Box>
                            </DialogContent>
                        </div>
                        <div className="content-info">
                            <h3>{ROBOT.name}</h3>
                            <p>{ROBOT.email}</p>
                            <p>{ROBOT.phone}</p>
                            <p>{ROBOT.address}</p>
                        </div>
                    </div>

                    <DialogActions>
                        <Button onClick={handleClose} className="close-btn">
                            Close
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </>
    );
};

export default memo(Card);
