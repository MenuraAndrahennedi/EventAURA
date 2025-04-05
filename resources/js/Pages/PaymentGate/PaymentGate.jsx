import React,{useState, useEffect} from 'react';
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';
import MainHeader from '../../Components/Header/MainHeader'
import MainFooter from '../../Components/Footer/MainFooter';
import { usePage ,router} from "@inertiajs/react"; // Get Laravel props from Inertia.js
import '../../../css/PaymentGate.scss'

const stripePromise = loadStripe("pk_test_51QwdwpPxzbr1WYso8H9OFdQvYi78pwIi5w1qExB1MO4edWNeO22QesA0ClJI7p5Z8tiscBdMXPrzM2KOC9xe3pLk00kg3VIPUz");

const PaymentGate = () => {
  const { event, cart, success, error ,total} = usePage().props; // Get event and cart data from Inertia
  const { auth } = usePage().props; // Get auth status
  const user = auth.user; // Registered user data

  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   if (success) {
  //     setMessage({ type: "success", text: success });
  //   } else if (error) {
  //     setMessage({ type: "error", text: error });
  //   }
  // }, [success, error]);

  useEffect(() => {
    // Get success/error from Laravel
    axios.get("/payment/success")
        .then((response) => {
            if (response.data.success) {
                setMessage({ type: "success", text: response.data.success });
            } else if (response.data.error) {
                setMessage({ type: "error", text: response.data.error });
            }
        })
        .catch((error) => console.error("Failed to fetch status", error));
}, []);
 

  console.log(total); // Should print the total amount


   
  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/payment/stripe", {
        amount: total,
        name,
        phone,
        email,
        cart: cart,
        event_id: event.id,
      });

      const { id } = response.data; // Stripe session ID

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const result= await stripe.redirectToCheckout({ sessionId: id });
    
      if (result.error) {
        console.error(result.error);
    } else {
        // Redirect to success page after payment
        window.location.href = "/payment/success";
    }
    } catch (error) {
      console.error("Payment Error:", error);
      setMessage({ type: "error", text: "Payment failed! Please try again." });
    }

    setLoading(false);
  };



  

  return (
    <>

      <header>
        <MainHeader />
      </header>

      <main className="payment-container">
      {/* Success/Error Message Alert */}
      {message && (
          <div className={`alert-box ${message.type}`}>
            <span>{message.text}</span>
            <button onClick={() => setMessage(null)}>❌</button>
          </div>
        )}

        <form className="payment-form" onSubmit={handlePayment}>
          <h2>Payment Details</h2>
          <hr />
          <p className="required-note">*Required fields</p>

          
          <div className="input-group">
            <label>Name*</label>
            <input type="text" value={name} onChange={(e) => !user && setName(e.target.value)} required readOnly={!!user}/>
          </div>
         
          <div className="input-group">
            <label>Email*</label>
            <input type="email" value={email} onChange={(e) => !user && setEmail(e.target.value)} required  readOnly={!!user} />
          </div>
      
        
          <div className="input-group">
            <label>Phone Number*</label>
            
             <input type="text" value={phone} onChange={(e) => !user && setPhone(e.target.value)} required  readOnly={!!user}/>
          </div>
          
          <div className="button-group">
            <button type="button" className="cancel-btn" onClick={() => router.post(route('payment.cancel.update'),{event_id:event.id,cart})}>Cancel</button>

            <button type="submit" className="pay-btn" disabled={loading}> {loading ? "Processing..." : "Pay with Stripe"}</button>
          </div>

        </form> 
         
        
        <aside className="total-amount-box">
          <h3>Total amount*
          {total} LKR
          </h3>
        </aside>
      </main>

      <footer>
        <MainFooter />
      </footer>
    </>
  )
}

export default PaymentGate
