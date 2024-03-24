import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./LogisticsItem";
import classes from "./EventLogistics.module.css";

function EventLogistics(props) {
    const { date, image, imageAlt, location } = props;

    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const addressText = location.replace(", ", "\n");

    return (
        <section className={classes.logistics}>
            <div className={classes.image}>
                <img src={`/${image}`} alt={imageAlt} />
            </div>
            <ul className={classes.list}>
                <LogisticsItem icon={DateIcon}>
                    <time>{humanReadableDate}</time>
                </LogisticsItem>
                <LogisticsItem icon={AddressIcon}>
                    <address>{location.toString()}</address>
                </LogisticsItem>
            </ul>
        </section>
    );
}

export default EventLogistics;
