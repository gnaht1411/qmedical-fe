import Breadcrumb from "./breadcrumb/breadcrumb";
import Content from "./content/content";
import {useLocation} from "react-router-dom";

const BookingSuccessPage = () => {
    const {state} = useLocation()
    const {bookingSuccessResponse} = state
    console.log(state)
    return (
        <>
            <Breadcrumb/>
            <Content
                res={bookingSuccessResponse}
            />
        </>
    )
}

export default BookingSuccessPage