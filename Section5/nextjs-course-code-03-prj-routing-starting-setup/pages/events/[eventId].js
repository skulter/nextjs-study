import { useRouter } from "next/router";
import EventSummary from "../../components/detail/EventSummary";
import EventLogistics from "../../components/detail/EventLogistics";
import EventContent from "../../components/detail/EventContent";
import { getEventById } from "../../dummy-data";

const EventDetailPage = () => {
    const router = useRouter();
    const currentId = router.query.eventId;
    console.log(router);
    const event = getEventById(currentId);
    console.log("event", event);

    if (!event) {
        return <div> No event Found!</div>;
    }

    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics {...event} />
            <EventContent title={event.title}>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
};

export default EventDetailPage;
