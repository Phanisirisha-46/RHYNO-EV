import React, { useRef, useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import emailjs from 'emailjs-com'

const Form = () => {
    const form = useRef();

 
  const navigate = useNavigate();

  const categorySelect = [
    { label: "SE03", value: "SE03" },
    { label: "SE03 LITE ", value: "SE03 LITE" },
    { label: "SE03 MAX", value: "SE03 MAX" },
    // { label: "Manufacture ", value: "manufacture" },
  ];

//   const modeSelect = [
//     { label: "Online", value: "online" },
//     { label: "Offline ", value: "offline" },
//   ];

 

  const [loading, setLoading] = useState(false);

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r6tppud', 'template_syhmdrq', form.current, 'dlfvxaLtJUSBW3FmH')
    e.target.reset()
    setLoading(true);

    // Simulate a loading state for 2 seconds
    setTimeout(() => {
      setLoading(false);
      navigate("/SE03");
    }, 2000);
  };

  return (
    <div className="formContainer">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="newForm">
          <div className="newLeft">
            <form className="newWrapper" onSubmit={sendEmail} ref={form} >
              <h1>Get Details</h1>

              
              <div className="f-onerow">
                <input
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  required
                />
                <input
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="f-onerow">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="input2"
                />
              </div>

              <Select
                options={categorySelect}
                placeholder="Choose Model"
                required
                name="model"
                isSearchable
                className="f-select"
              />

              {/* <div className="f-onerow" style={{ marginTop: '1.2rem' }}>
                <input
                  onChange={(e) => setDuration(e.target.value)}
                  value={duration}
                  type="number"
                  placeholder="Duration (in months)"
                  required
                />

                <input
                  onChange={(e) => setStipend(e.target.value)}
                  value={stipend}
                  type="number"
                  placeholder="Stipend "
                  required
                />
              </div> */}
              {/* <div >
                <label>Start Date</label>
                <div className="f-onerow">
                  <input
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    type="date"
                    placeholder="Start Date"
                    required
                    className="input2"
                  />
                </div>
              </div>

              <Select
                options={modeSelect}
                defaultValue={mode}
                placeholder="Mode"
                onChange={modeHandler}
                required
                isSearchable
              />

              <div className="f-onerow" style={{ marginTop: '1.2rem' }}>
                <input
                  onChange={(e) => setLink(e.target.value)}
                  value={com_link}
                  type="text"
                  placeholder="Website Reference (eg. https://drop.com)"
                  required
                  className="input2"
                />
              </div> */}

              <div className="f-testarea">
                <textarea
                  name="message"
                  cols="10"
                  rows="6"
                  placeholder="Enter company description"
                ></textarea>
              </div>

              {/* <div className="f-testarea">
                <textarea
                  onChange={(e) => setPost_dis(e.target.value)}
                  value={post_dis}
                  name="prof-bg"
                  cols="10"
                  rows="10"
                  placeholder="Enter details about the internship and key responsibilities"
                ></textarea>
              </div>

              <div className="f-testarea">
                <textarea
                  onChange={(e) => setReq_elg(e.target.value)}
                  value={req_elg}
                  name="prof-bg"
                  cols="10"
                  rows="10"
                  placeholder="Enter elegibility or people who can apply"
                ></textarea>
              </div> */}

              <button className="submitForm" type="submit">
                Submit
              </button>
            </form>
          </div>

          <div className="newRight">
            {/* <img src="https://www.medianama.com/wp-content/uploads/2022/09/UAVs-help2.jpeg" alt="" /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
