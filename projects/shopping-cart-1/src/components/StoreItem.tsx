import { Card } from "react-bootstrap"
import { formatCurrency } from "../utils/formatCurrency"

type StoreItemProp = {
  id: number,
  name: string,
  price: number,
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProp) {
  return <Card>
    <Card.Img
      variant="top"
      src={imgUrl}
      height="200px"
      style={{ objectFit: 'cover' }}
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <span className="fs-2">{name}</span>
        <span className="ms-2 text-muted">{formatCurrency(price)}</span>
      </Card.Title>
    </Card.Body>
  </Card>
}