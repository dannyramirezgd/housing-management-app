const Neighborhood = () => {
  return (
    <>
      <div className="text-center bg-secondary my-3">
        <h1 style={{ fontFamily: 'Shadows Into Light' }}>
          Checkout the neighborhood vibes!
        </h1>
      </div>
      <div className="d-flex justify-content-center justify-items-center align-items-center">
        <iframe
          src="https://secure-savannah-19572.herokuapp.com/"
          title="WAG!"
          width="70%"
          height="1000px"
        />
      </div>
    </>
  );
};

export default Neighborhood;
