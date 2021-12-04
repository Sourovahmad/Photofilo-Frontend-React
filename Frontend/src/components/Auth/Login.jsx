import React, { useState } from "react";
import axios from "axios";
import "./Authentication.css";

const Login = () => {

  const ApiLink = process.env.REACT_APP_API_TO;

    const [loginToggle, setLoginToggle] = useState(true);
    const [loginError, setloginError] = useState(false);
    

    //login Post Section

    const [login_email, setlogin_email] = useState("");
    const [login_password, setlogin_password] = useState("");

    const handleLogin = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        if(inputName === 'email'){
            setlogin_email(inputValue);
        } else {
            setlogin_password(inputValue);
        }
    }
    
    const loginData = {
        email: login_email,
        password: login_password
    }

    const loginHandle = async (e) => {
        e.preventDefault();
        await axios
      .post( ApiLink + "apiLogin", loginData)
      .then((response)=>{

        console.log(response);
        if(response.status === 200){
            window.sessionStorage.setItem("token", response.data.token);
            setsuccessMessage(true);

            setlogin_email('');
            setlogin_password('')
        } else if(response.status === 401){

        }
      })
      .catch((error)=>{
        setloginError(true)
            console.log(error);
      });
    }



  // Register post section

  const [name, setname] = useState("");
  const [surname, setsurname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [day, setday] = useState("");
  const [month, setmonth] = useState("");
  const [year, setyear] = useState("");
  const [country, setcountry] = useState("");

  const formData = {
    name: name,
    surname: surname,
    email: email,
    password: password,
    day: day,
    month: month,
    year: year,
    country: country,
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "name") {
      setname(value);
    } else if (name === "surname") {
      setsurname(value);
    } else if (name === "email") {
      setemail(value);
    } else if (name === "password") {
      setpassword(value);
    } else if (name === "day") {
      setday(value);
    } else if (name === "month") {
      setmonth(value);
    } else if (name === "year") {
      setyear(value);
    } else if (name === "country") {
      setcountry(value);
    }
  };


  const [errorMessage, seterrorMessage] = useState(false);
  const [successMessage, setsuccessMessage] = useState(false);

  const savePost = async (e) => {
    e.preventDefault();
    await axios
      .post( ApiLink + "apiRegister", formData)
      .then((response) => {
        if(response.status === 201){
            window.sessionStorage.setItem("token", response.data.token);
            setsuccessMessage(true);

            setname('');
            setsurname('')
            setemail('')
            setpassword('')
            setday('')
            setmonth('')
            setyear('')
            setyear('')
            setcountry('')
            
        }
      })
      .catch((error) => {
        seterrorMessage(true);
        const errors = error.response.data.message;
        console.log(errors);
       document.getElementById('alertText').innerText = errors;
 
      });
  };

  return (
    <div>
      <section className="register_area">
        <div className="overflow-hidden">
          <div className="row">
            <div className="col-md-7">
              <div className="share_area">
                <h2>scopes</h2>
                <h6>Get Hired, Create,</h6>
                <h6>Shoot, Share.</h6>
              </div>
            </div>

            <div className="col-md-5">
              <div className="submit_area pb-5 mb-5">
                <div>
                  <h4>{loginToggle === true ? "Log In" : "Register"}</h4>
                  <p className="sub_title">
                    {loginToggle === false
                      ? "You allready have an Account? "
                      : "You are new here? "}
                    <span
                      onClick={() =>
                        loginToggle === false
                          ? setLoginToggle(true)
                          : setLoginToggle(false)
                      }
                    >
                      {loginToggle === false ? "Log In" : "Register"}
                    </span>
                  </p>
                </div>

                {loginToggle === false ? (
                  <form onSubmit={(e) => savePost(e)}>
                    {/* <form id="myForm">  */}
                    <div className="pb-5">

                        {
                            errorMessage === true ?
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <span id="alertText"></span>

                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div>
                            : ""
                
                        }
                        {
                            successMessage === true ?
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                                Registatrion Success Please Login
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div>
                            : ""
                        }


                      <label className="label" for="email">
                        E-Mail Address <span className="text-danger"> * </span>
                      </label>
                      <br />
                      <input
                        className="input form-control"
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => handleInput(e)}
                        required
                      />
                    </div>

                    <div className="d-flex w-100">
                      <div className="pb-5 w-100">
                        <label className="label" for="name">
                          Name <span className="text-danger"> * </span>{" "}
                        </label>
                        <br />
                        <input
                          className="input form-control"
                          type="text"
                          name="name"
                          required
                          id="name"
                          value={name}
                          onChange={(e) => handleInput(e)}
                        />
                      </div>

                      <div className="pb-5 w-100">
                        <label className="label" for="surname">
                          Surname
                        </label>
                        <br />
                        <input
                          className="input form-control"
                          type="text"
                          name="surname"
                          id="surname"
                          value={surname}
                          onChange={(e) => handleInput(e)}
                        />
                      </div>
                    </div>

                    <div className="d-flex gap-5 pb-5 justify-content-between">
                      <div className="day w-25">
                        <label className="label" for="day">
                          Day <span className="text-danger"> * </span>
                        </label>
                        <br />
                        <input
                          className="input form-control"
                          type="number"
                          name="day"
                          required
                          id="day"
                          value={day}
                          onChange={(e) => handleInput(e)}
                        />
                      </div>

                      <div className="month w-50">
                        <label className="label" for="month">
                          Month <span className="text-danger"> * </span>
                        </label>
                        <br />
                        <input
                          className="input form-control"
                          type="number"
                          name="month"
                          required
                          id="month"
                          value={month}
                          onChange={(e) => handleInput(e)}
                        />
                      </div>

                      <div className="year w-25">
                        <label className="label" for="year">
                          Year <span className="text-danger"> * </span>
                        </label>
                        <br />
                        <input
                          className="input form-control"
                          type="number"
                          name="year"
                          max="2022"
                          required
                          id="year"
                          value={year}
                          onChange={(e) => handleInput(e)}
                        />
                      </div>
                    </div>

                    <div className="py-5">
                      <label className="label" for="">
                        Country/Region
                      </label>
                      <br />
                      <select
                        id="country"
                        name="country"
                        className="form-control"
                        required
                        value={country}
                        onChange={(e) => handleInput(e)}
                      >
                        <option value="default"></option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Åland Islands">Åland Islands</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">
                          Antigua and Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </option>
                        <option value="Brunei Darussalam">
                          Brunei Darussalam
                        </option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos (Keeling) Islands">
                          Cocos (Keeling) Islands
                        </option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo, The Democratic Republic of The">
                          Congo, The Democratic Republic of The
                        </option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">
                          Falkland Islands (Malvinas)
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Territories">
                          French Southern Territories
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-bissau">Guinea-bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and Mcdonald Islands">
                          Heard Island and Mcdonald Islands
                        </option>
                        <option value="Holy See (Vatican City State)">
                          Holy See (Vatican City State)
                        </option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran, Islamic Republic of">
                          Iran, Islamic Republic of
                        </option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, Democratic People's Republic of">
                          Korea, Democratic People's Republic of
                        </option>
                        <option value="Korea, Republic of">
                          Korea, Republic of
                        </option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">
                          Lao People's Democratic Republic
                        </option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">
                          Libyan Arab Jamahiriya
                        </option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia, The Former Yugoslav Republic of">
                          Macedonia, The Former Yugoslav Republic of
                        </option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">
                          Micronesia, Federated States of
                        </option>
                        <option value="Moldova, Republic of">
                          Moldova, Republic of
                        </option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">
                          Netherlands Antilles
                        </option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestinian Territory, Occupied">
                          Palestinian Territory, Occupied
                        </option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">
                          Russian Federation
                        </option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Helena">Saint Helena</option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Pierre and Miquelon">
                          Saint Pierre and Miquelon
                        </option>
                        <option value="Saint Vincent and The Grenadines">
                          Saint Vincent and The Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and The South Sandwich Islands">
                          South Georgia and The South Sandwich Islands
                        </option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">
                          Svalbard and Jan Mayen
                        </option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syrian Arab Republic">
                          Syrian Arab Republic
                        </option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, United Republic of">
                          Tanzania, United Republic of
                        </option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-leste">Timor-leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">
                          Turks and Caicos Islands
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="United States Minor Outlying Islands">
                          United States Minor Outlying Islands
                        </option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">
                          Virgin Islands, British
                        </option>
                        <option value="Virgin Islands, U.S.">
                          Virgin Islands, U.S.
                        </option>
                        <option value="Wallis and Futuna">
                          Wallis and Futuna
                        </option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </div>

                    <div className="pb-5">
                      <label className="label" for="password">
                        {" "}
                        Passrword{" "}
                        <span className="text-danger">
                          {" "}
                          * (min: 6 character){" "}
                        </span>{" "}
                      </label>
                      <br />
                      <input
                        className="input form-control"
                        minLength="6"
                        type="password"
                        name="password"
                        required
                        placeholder="password"
                        id="password"
                        value={password}
                        onChange={(e) => handleInput(e)}
                      />
                    </div>

                    <div className="check_area">
                      <p>
                        Scopes sirketler grub beni kisisellestirilmis urunleri
                        ve hizmetleri hakkinda e-posta yoluyla
                        bilgilendirebilir. Daha fazla bilgi veya istediginiz
                        zaman devre dis birakmak icin{" "}
                        <a href="#">Gizlilink Politikasi</a> icerigine bakin.
                      </p>

                      <div className="">
                        <input
                          className=" rounded"
                          type="checkbox"
                          name=""
                          value=""
                        />
                        <label for="">
                          Bemimle e-posta yoluyla iletisim kurun
                        </label>
                        <br />
                      </div>

                      <p>
                        Hesap olustur secenegini tiklatarak{" "}
                        <a href="#">Kullanm Kosullan</a> ve{" "}
                        <a href="#">Gizlilik Politikasi</a> icerigini okuyup
                        kabul ettigimi onaylarim.
                      </p>
                    </div>

                    <div className="text-end">
                      <button
                        type="submit"
                        className="registerBtn mt-5"
                        id="registerButton"
                      >
                        Register Me
                      </button>
                    </div>
                  </form>
                ) : (
                  <div classNameName="login_inner pb-5 mb-5">
                    <form onSubmit={(e) => loginHandle(e)}>


                    {
                        loginError === true ?

                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <p> Credentials Does Not Match </p>

                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div>
                            : ""
                            
                    }


                      <div className="pb-2">
                        <label className="label" for="">
                          E-Mail Address
                        </label>
                        <br />
                        <input
                          className="input form-control"
                          type="email"
                          name="email"
                          value={login_email}
                          onChange={(e) => handleLogin(e)}
                          required
                        />
                      </div>

                      <div className="pb-2">
                        <label className="label" for="password">
                          Password
                        </label>
                        <br />
                        <input
                          className="input form-control"
                          type="password"
                          name="password"
                          id="password"
                          value={login_password}
                          onChange={(e) => handleLogin(e)}
                          required

                        />
                      </div>

                      <div className="text-end">
                        <button type="submit" className="loginBtn mt-5">Log In</button>
                      </div>
                    </form>

                    <div className="social_login mt-5 pt-3">
                      <div className="pb-3">
                        <button className="btn one">Log In With Google</button>
                      </div>

                      <div className="pb-3">
                        <button className="btn two">Log In With Google</button>
                      </div>

                      <div>
                        <button className="btn three">Log In With Apple</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
