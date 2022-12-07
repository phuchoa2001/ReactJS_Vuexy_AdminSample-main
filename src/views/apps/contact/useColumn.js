// ** Third Party Components
import { PhoneCall, Send, X } from "react-feather";
import moment from 'moment';

// ** useColumns Component Imports
import RatingBasic from "./view/RatingBasic";

// ** Hook 
import { useRTL } from '@hooks/useRTL';



// ** Table useColumns
const useColumn = () => {
  const [isRtl,] = useRTL()
  const column = [
    {
      name: 'Tên',
      selector: 'name',
      cell: row => (
        <div>
          <div className="columns-header">
            <div className="columns-image">
              {row.avatar}
            </div>
            <div className="columns-text">
              Liên hệ
            </div>
          </div>
          <div className="columns-footer">
            {row.name}
          </div>
        </div>
      ),
      sortable: true
    },
    {
      name: 'Số điện thoại',
      cell: row => row.phone,
      sortable: false,
    },
    {
      name: 'Xếp hạng',
      selector: 'rate',
      cell: row => <RatingBasic
        dir={isRtl ? 'rtl' : 'ltr'}
        filledColor={"rgb(255, 159, 67)"}
        size={15}
        initialRating={row.rate}
        readonly={true}
      />,
      sortable: true,
    },
    {
      name: 'Cập nhật lần cuối',
      cell: row => {
        const check = moment(row.dateCreated);
        const time = check.format('MMMM Do YYYY, h:mm:ss a');
        return (
          <p>{time}</p>
        )
      },
      sortable: false,
    },
    {
      name: 'Hành động',
      width: "200px",
      cell: row => (
        <div className="columns-tags">
          <div
            className="columns-tag columns-tag-success"
          >
            <PhoneCall size={10} />  Gọi
          </div>
          <div
            className="columns-tag columns-tag-warning"
          >
            <Send size={10} />  SMS
          </div>
          <div
            className="columns-tag columns-tag-danger"
          >
            <X size={10} /> Xóa
          </div>
        </div>
      ),
      sortable: false,
    },
  ];
  return column;
}

export default useColumn;