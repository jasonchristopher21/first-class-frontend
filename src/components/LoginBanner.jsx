import { useState } from 'react';
import styles from '../style';

import { store } from '../redux/store';
import { getUser } from '../redux/features/auth/authSlice';

export const LoginBanner = () => {
  const [passengerMode, setPassengerMode] = useState(true);
  const [surname, setSurname] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [staffId, setStaffId] = useState('');

  const arrow = <span>&#x1F806;</span>;

  const passengerModeInputInstructions = [
    'Enter your surname, flight number',
    'and seat number to proceed.',
  ];
  const attendantModeInputInstructions = [
    'Enter your Staff ID and flight',
    'number to proceed.',
  ];

  const toggleModes = () => {
    if (passengerMode) {
      setPassengerMode(false);
      setSurname('');
      setFlightNumber('');
      setSeatNumber('');
    } else {
      setPassengerMode(true);
      setStaffId('');
      ('');
      setFlightNumber('');
    }
  };

  const handlePassengerButtonClick = () => {
    console.log(surname);
    console.log(flightNumber);
    console.log(seatNumber);
    // fetch('/auth/user/login', {
    //   method: 'POST',
    //   headers: JSON.stringify({
    //     Accept: 'application.json',
    //     'Content-Type': 'application/json',
    //   }),
    //   body: {
    //     surname: surname,
    //     flightNumber: flightNumber,
    //     seatNumber: seatNumber,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  };

  const LoginButton = (props) => {
    return (
      <div className="w-[100%] text-center pb-4 pt-4">
        <button
          className={`${styles.heading4} rounded-full bg-yellow w-[100%] focus:outline-0 focus:bg-yellow-accent text-black`} onClick={props.func}>
          Log in
        </button>
      </div>
    );
  };

  const Instructions = ({ instructionsArray }) => {
    return (
      <div className="w-[100%] text-center pb-8">
        {instructionsArray.map((instruction, index) => (
          <p key={index} className={`${styles.paragraph6} text-black`}>
            {instruction}
          </p>
        ))}
      </div>
    );
  };

  const LoginAsText = ({ role }) => {
    return (
      <div className="w-[100%] text-center">
        <p
          className={`${styles.paragraph10} text-[#00000050] cursor-pointer hover:underline`}
          onClick={toggleModes}>
          LOGIN AS A {role} {arrow}
        </p>
      </div>
    );
  };

  const handlePassengerLogin = () => {
    store.dispatch(getUser({ surname: "Yuwono", flightNumber: 'TR2542', seatNumber: '16K' }));
  }

  return (
    <div className="h-[75%] bg-white rounded-t-3xl shadow-[0px 0px 20px 0px rgba(0, 0, 0, 0.25)] flex content-center items-center flex-col">
      <div className="w-[80%]">
        <div className="w-[100%] text-center pt-8 pb-2">
          <p className={`${styles.heading2} text-black`}>Welcome to Scoot.</p>
        </div>

        {passengerMode ? (
          <>
            <Instructions instructionsArray={passengerModeInputInstructions} />
            <div className="w-[100%] text-left pb-4">
              <p className={`${styles.paragraph6} text-black pb-1`}>Surname</p>
              <input
                className={` ${styles.paragraph6} w-[100%] bg-[#00000010] rounded-xl text-black focus:outline-0 p-3`}
                onChange={(e) => setSurname(e.currentTarget.value)}
                value={surname}></input>
            </div>
            <div className="w-[100%] text-left pb-4">
              <p className={`${styles.paragraph6} text-black pb-1`}>
                Flight Number
              </p>
              <input
                className={` ${styles.paragraph6} w-[100%] bg-[#00000010] rounded-xl text-black focus:outline-0 p-3`}
                onChange={(e) => setFlightNumber(e.currentTarget.value)}
                value={flightNumber}></input>
            </div>
            <div className="w-[100%] text-left pb-4">
              <p className={`${styles.paragraph6} text-black pb-1`}>
                Seat Number
              </p>
              <input
                className={` ${styles.paragraph6} w-[100%] bg-[#00000010] rounded-xl text-black focus:outline-0 p-3`}
                onChange={(e) => setSeatNumber(e.currentTarget.value)}
                value={seatNumber}></input>
            </div>
            <LoginButton onClick={handlePassengerButtonClick} />
            <LoginAsText role="STAFF MEMBER" />
          </>
        ) : (
          <>
            <Instructions instructionsArray={attendantModeInputInstructions} />
            <div className="w-[100%] text-left pb-4">
              <p className={`${styles.paragraph6} text-black pb-1`}>Staff ID</p>
              <input
                className={` ${styles.paragraph6} w-[100%] bg-[#00000010] rounded-xl text-black focus:outline-0 p-3`}
                onChange={(e) => setStaffId(e.currentTarget.value)}
                value={staffId}></input>
            </div>
            <div className="w-[100%] text-left pb-4">
              <p className={`${styles.paragraph6} text-black pb-1`}>
                Flight Number
              </p>
              <input
                className={` ${styles.paragraph6} w-[100%] bg-[#00000010] rounded-xl text-black focus:outline-0 p-3`}
                onChange={(e) => setFlightNumber(e.currentTarget.value)}
                value={seatNumber}></input>
            </div>
            <LoginButton
              onClick={passengerMode ? handlePassengerButtonClick : null}
            />
            <LoginAsText role="PASSENGER" />
          </>
        )}
      </div>
    </div>
  );
};
