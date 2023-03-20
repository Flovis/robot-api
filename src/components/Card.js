import { memo } from "react";
const Card = ({ robot }) => {
    const ROBOT = {
        url: `https://robohash.org/${robot.name}`,
        name: robot.name,
        email: robot.email
    };

    return (
        <div className="card">
            <div className="card-img">
                <img src={ROBOT.url} alt="robot" />
            </div>
            <div className="description">
                <h3>{ROBOT.name}</h3>
                <p>{ROBOT.email}</p>
            </div>
        </div>
    );
};
export default memo(Card);
