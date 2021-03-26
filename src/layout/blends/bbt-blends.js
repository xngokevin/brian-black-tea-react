import { Container, Row } from "react-bootstrap";
import { Blend } from "../../components";

function BbtBlends(props) {
  const blends = props.blends;

  return (
    <div className={"l-bbt-blends"}>
      <Container>
        <Row>
          {blends.map(function (blend) {
            return (
              <div className={"col-sm-12 col-md-4"}>
                <Blend blend={blend} />
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default BbtBlends;
