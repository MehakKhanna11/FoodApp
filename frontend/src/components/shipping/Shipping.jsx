import React, { useState } from "react";
import { Country, State } from "country-state-city";
import { useDispatch,useSelector } from "react-redux";
import { addShippingInfo } from "../../redux/reducers/cartReducer";
import {useNavigate} from "react-router-dom"
const Shipping = () => {
  const {shippingInfo} = useSelector(state=>state.cart)
  const [hNo, setHNo] = useState(shippingInfo.hNo);
  const [city, setCity] = useState(shippingInfo.city);
  const [country, setCountry] = useState(shippingInfo.country);
  const [state, setState] = useState(shippingInfo.state);
  const [pincode, setPincode] = useState(shippingInfo.pincode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  
  const dispatch=useDispatch();
  const navigate=useNavigate();


  const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(addShippingInfo({hNo,state,city,country,phoneNo,pincode}));
    navigate("/confirmorder");
    localStorage.setItem("shippingInfo",JSON.stringify({hNo,state,city,country,phoneNo,pincode}))
  }

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form onSubmit={(e)=>{submitHandler(e)}}>
          <div>
            <label>H.No.</label>
            <input
              type="text"
              placeholder="Enter house number"
              required

              value={hNo}
              onChange={(e) => {
                setHNo(e.target.value);
              }}
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="Enter your city"
              value={city}
              required

              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Country</label>
            <select
              value={country}
              required

              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => {
                  return (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  );
                })}
            </select>
          </div>
          {
            country &&           <div>
            <label>State</label>
              <select
                value={state}
              required

                onChange={(e) => {
                  setState(e.target.value);
                }}
              >
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((i) => {
                    return (
                      <option value={i.isoCode} key={i.isoCode}>
                        {i.name}
                      </option>
                    );
                  })}
              </select>

          </div>
          }

          <div>
            <label>Pincode</label>
            <input
              type="text"
              placeholder="Enter pincode of your area"
              value={pincode}
              required

              onChange={(e) => {
                setPincode(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Phone number</label>
            <input
              type="number"
              placeholder="Enter phone number"
              value={phoneNo}
              required
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
            />
          </div>
          <button type="submit">Confirm</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
