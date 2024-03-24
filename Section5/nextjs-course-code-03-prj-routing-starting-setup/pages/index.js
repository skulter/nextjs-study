import EventList from "../components/event/EventList";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
    const featureEvents = getFeaturedEvents();
    return <EventList items={featureEvents}></EventList>;
};

export default HomePage;
