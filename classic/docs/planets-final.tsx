const App = () => {
  return (
    <Bluefish padding={40}>
      <Background padding={30}>
        <Row spacing={20}>
          <Circle id="mercury" r={15} fill="#EBE3CF" stroke-width={3} stroke="black" />
          <Circle r={36} fill="#DC933C" stroke-width={3} stroke="black" />
          <Circle r={38} fill="#179DD7" stroke-width={3} stroke="black" />
          <Circle r={21} fill="#F1CF8E" stroke-width={3} stroke="black" />
        </Row>
      </Background>
      <Col spacing={50}>
        <Text id="label">Mercury</Text>
        <Ref refId="mercury" />
      </Col>
      <Arrow>
        <Ref refId="label" />
        <Ref refId="mercury" />
      </Arrow>
    </Bluefish>
  );
};
