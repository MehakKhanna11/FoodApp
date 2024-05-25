import React from 'react'
import {Country,State} from "country-state-city"
const Shipping = () => {
  return (
    <section className='shipping'>
        <main>
            <h1>Shipping Details</h1>
            <form>
                <div>
                    <label>H.No.</label>
                    <input type="text" placeholder='Enter house number'/>
                </div>
                <div>
                    <label>City</label>
                    <input type="text" placeholder='Enter your city'/>
                </div>  
                <div>
                    <label>Country</label>
                    <select>
                        <option value="">Country</option>
                        {
                            Country && Country.getAllCountries().map(i=>{
                                return <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                            })
                        }
                    </select>
                </div>           
                <div>
                    <label>State</label>
                    <select>
                        <option value="">State</option>
                        {
                            State && State.getStatesOfCountry("IN").map(i=>{
                                return <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                            })
                        }
                    </select>
                </div>    
                <div>
                    <label>Pincode</label>
                    <input type="text" placeholder='Enter pincode of your area'/>
                </div>
                <div>
                    <label>Phone number</label>
                    <input type="number" placeholder='Enter phone number'/>
                </div>
                <button type='submit'>Confirm</button>
            </form>
        </main>

    </section>

  )
}

export default Shipping
