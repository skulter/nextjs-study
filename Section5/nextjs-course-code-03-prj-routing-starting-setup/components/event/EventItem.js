import Image from "next/image";
import classes from "./EventItem.module.css";
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = (props) => {
    const { title, image, date, location, id } = props;
    return (
        <li className={classes.item}>
            <div
                style={{
                    position: "relative",
                    width: "300px",
                    height: "300px",
                }}
            >
                <Image fill src={`/${image}`} alt={title} />
            </div>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2> {title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{date}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{location.replace(", ", "\n")}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={`/events/${id}`}>
                        <span>Explore Event</span>{" "}
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;
