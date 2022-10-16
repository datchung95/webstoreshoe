import React from 'react'
import { Card } from 'antd';
import history from '../../utils/libs/history';

const { Meta } = Card;

export default function CardShoe(props) {

    const {item} = props;

    return (
        <div>
            <Card
                hoverable
                style={{
                    width: "100%",
                }}
                onClick={() => {
                    history.push(`/chitietsanpham/${item.id}`)
                    window.location.reload();
                }}
                cover={<img alt="shoe" src={item.image} />}
            >
                <Meta style={{ fontSize: "16px" }} title={item.name} description={`${item.price} $`} />
            </Card>
        </div>
    )
}