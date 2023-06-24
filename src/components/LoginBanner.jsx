import { useState } from 'react';
import styles from '../style';

export const LoginBanner = () => {
  const [passengerMode, setPassengerMode] = useState(true);

  const arrow = <span>&#x1F806;</span>;

  const passengerModeInputInstructions = [
    'Enter your surname, flight number',
    'and seat number to proceed.',
  ];
  const attendantModeInputInstructions = [
    'Enter your Staff ID and flight',
    'number to proceed.',
  ];
  const passengerFieldNames = ['Surname', 'Flight Number', 'Seat Number'];
  const attendantFieldNames = ['Staff ID', 'Flight Number'];

  const toggleModes = () => {
    return passengerMode ? setPassengerMode(false) : setPassengerMode(true);
  };

  const TextField = ({ fieldName }) => {
    return (
      <div className="w-[100%] text-left pb-4">
        <p className={`${styles.paragraph6} text-black pb-1`}>{fieldName}</p>
        <input
          className={` ${styles.paragraph6} w-[100%] bg-[#00000010] rounded-xl text-black focus:outline-0 p-3`}></input>
      </div>
    );
  };

  const LoginButton = () => {
    return (
      <div className="w-[100%] text-center pb-4 pt-4">
        <button
          className={`${styles.heading4} rounded-full bg-yellow w-[100%] focus:outline-0 focus:bg-yellow-accent text-black`}>
          Log in
        </button>
      </div>
    );
  };

  const Instructions = ({ instructionsArray }) => {
    return (
      <div className="w-[100%] text-center pb-8">
        <p className={`${styles.paragraph6} text-black`}>
          {instructionsArray.map((instruction, index) => (
            <p key={index}>{instruction}</p>
          ))}
        </p>
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

  return (
    <div className="h-[75%] bg-white rounded-t-3xl shadow-[0px 0px 20px 0px rgba(0, 0, 0, 0.25)] flex content-center items-center flex-col">
      <div className="w-[80%]">
        <div className="w-[100%] text-center pt-8 pb-2">
          <p className={`${styles.heading2} text-black`}>Welcome to Scoot.</p>
        </div>

        {passengerMode ? (
          <>
            <Instructions instructionsArray={passengerModeInputInstructions} />
            {passengerFieldNames.map((fieldName) => {
              return <TextField fieldName={fieldName} key={fieldName} />;
            })}
            <LoginButton />
            <LoginAsText role="STAFF MEMBER" />
          </>
        ) : (
          <>
            <Instructions instructionsArray={attendantModeInputInstructions} />
            {attendantFieldNames.map((fieldName) => {
              return <TextField fieldName={fieldName} key={fieldName} />;
            })}
            <LoginButton />
            <LoginAsText role="PASSENGER" />
          </>
        )}
      </div>
    </div>
  );
};
