import { Card } from "react-bootstrap"

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
  </Card>
}