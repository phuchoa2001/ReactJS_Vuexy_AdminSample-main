import Rating from 'react-rating'
import { Star } from 'react-feather'
import { Card, CardBody } from 'reactstrap'

const RatingBasic = ({ filledColor, dir, size, ...props }) => {
  return (
    <Card>
      <CardBody>
        <Rating
          emptySymbol={<Star size={size} fill='#babfc7' stroke='#babfc7' />}
          fullSymbol={<Star size={size} fill={filledColor} stroke={filledColor} />}
          direction={dir}
          placeholderRating={0}
          {...props}
        />
      </CardBody>
    </Card>
  )
}

export default RatingBasic;
