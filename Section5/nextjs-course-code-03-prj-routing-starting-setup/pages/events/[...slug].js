import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/event/EventList";
import ResultsTitle from "../../components/event/ResultsTitle";
const FilteredEventsPage = () => {
    const router = useRouter();

    const filterData = router.query.slug;

    if (!filterData) {
        return <p className="center">Loading...</p>;
    }

    const [filteredYear, filteredMonth] = filterData;
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;
    if (Number.isNaN(numYear) || Number.isNaN(numMonth)) {
        return <p>Invalid filter. Please adjust your values!</p>;
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return <p>필터에 해당하는 이벤트가 없습니다.</p>;
    }
    const date = new Date(numYear, numMonth - 1);
    return (
        <>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />;
        </>
    );
};

export default FilteredEventsPage;
