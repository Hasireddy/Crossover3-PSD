import "../App.css";

export function Discounts() {
  return (
    <div className="container-fluid discountsbck">
      <div className="row discountsRow">
        <div className="col">
          <h1 className="discountsText">
            Get Special discount on your first journey
          </h1>
        </div>
        <div className="col">
          <button type="button" className="discountButton">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
