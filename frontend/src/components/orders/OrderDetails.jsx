import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>jsbfckjwbeckjndkjqaxnkmsn k,mscxjqwncs jcbn
          </p>
        </div>


        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>Vada pav gurl
          </p>
          <p>
            <b>Phone</b>{2847823791-20}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>Preparing
          </p>
          <p>
            <b>Placed At</b>hdwnkjwbcefkjbd
          </p>
          <p>
            <b>Delivered At</b>efhkhefnjwdh
          </p>
        </div>


        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>COD
          </p>
          <p>
            <b>Payment Reference</b>#hqwfiu32qhfwjknd
          </p>
          <p>
            <b>Paid At</b>{"22:32:33"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹349
          </p>
          <p>
            <b>Shipping Charges</b>₹200
          </p>
          <p>
            <b>Tax</b>{"₹23"}
          </p>
          <p>
            <b>Total Amount</b>{"₹23"}
          </p>
        </div>

        <article>
            <h1>Ordered Items</h1>
            <div>
                <h4>Cheese Vada Pav</h4>
                <div>
                    <span>{2}</span> x <span>{2}</span> 
                </div>
            </div>
            <div>
                <h4>Veggie Vada Pav</h4>
                <div>
                    <span>{2}</span> x <span>{2}</span> 
                </div>
            </div>            <div>
                <h4>Deep Fried Vada Pav</h4>
                <div>
                    <span>{2}</span> x <span>{2}</span> 
                </div>
            </div>            <div>
                <h4>Cheese Tandoori Vada pav</h4>
                <div>
                    <span>{2}</span> x <span>{2}</span> 
                </div>
            </div>

            <div>
                <h4 style={{fontWeight:800}}>Sub Total</h4>
                <div style={{fontWeight:800}}>₹{384}</div>
            </div>
        </article>

      </main>
    </section>
  );
};

export default OrderDetails;
