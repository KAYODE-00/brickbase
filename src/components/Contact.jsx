import Back from "./Back";

function Contact() {
  return (
    <>
      <section className="contact mb">
        <Back
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={"pricing.jpg"}
        />
        <div className="container">
          <form action="" className="bg shadow">
            <h4>Fillup The Form </h4>
            <div>
              <input type="text" placeholder="Name" />{" "}
              <input type="Email" placeholder="Email" />
            </div>
             <input type="text"  placeholder='Subject' />
             <textarea name="" id=""></textarea>
             <button>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
