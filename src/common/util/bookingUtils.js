import status from "../constants/booking/status";

const getBookingStatus = values => {
    switch (values) {
        case status.PENDING:
            return 'Đang xử lý'
            // eslint-disable-next-line no-unreachable
            break
        case status.CONFIRM:
            return 'Đã xác nhận'
            break
    }
}

export default {
    getBookingStatus
}