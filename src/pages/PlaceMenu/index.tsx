import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { CardItem } from "../../components/CardItem/CardItem";
import { useStoreState } from "../../store";
import { Content } from "../../components/Content/Content";
export const PlaceMenu = (props: any) => {
  const data = useStoreState((x) => x.restaurant.data);
  return (
    <Content>
      {data.length > 0 ? (
        <ListGroup>
          {data.map((item) => {
            return (
              <div key={item.place_id}>
                <CardItem
                  title={item.name}
                  description={item.formatted_address}
                />
              </div>
            );
          })}
        </ListGroup>
      ) : (
        <div>ไม่พบข้อมูลร้านค้า</div>
      )}
    </Content>
  );
};
