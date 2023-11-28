// import { Card } from "ui";

import Card from "@/componentsV2/Card";

export default function Home() {
  return (
    <>
      <Card.Paper as="section">
        <Card.Container as="article">
          <div>About</div>
          <div>Series (navigation)</div>
        </Card.Container>
      </Card.Paper>
    </>
  );
}
