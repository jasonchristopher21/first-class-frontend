import { useSelector } from 'react-redux';
import { selectCurrentStaff } from '../redux/features/auth/staffAuthSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import flight_path from '../assets/flight_path.png';
import icon_person from '../assets/icon_person.png';
import styles from '../style';
import axios from 'axios';
import { API_URL } from '../constants';

export const StaffHome = () => {
  // const user = useSelector(selectCurrentStaff);
  // const navigate = useNavigate();

  const [flightNumber, setFlightNumber] = useState('TR123');
  const [staffName, setStaffName] = useState('A123');
  const [seat, setSeat] = useState('21F');

  const [fromCity, setFromCity] = useState('Singapore');
  const [fromCityCode, setFromCityCode] = useState('SIN');
  const [fromTime, setFromTime] = useState('10.55');
  const [toCity, setToCity] = useState('Pekanbaru');
  const [toCityCode, setToCityCode] = useState('PKU');
  const [toTime, setToTime] = useState('11.00');

  
  return (
    <div className="bg-light-grey">
      <div className="absolute z-0 top-0 left-0 w-full h-[10rem] bg-yellow rounded-bl-[40px] rounded-br-[40px] drop-shadow-[0_5px_30px_rgba(0,0,0,0.10)]" />
      <div className="absolute z-10 p-10 w-full">
        <div className="heading flex flex-col text-left text-black">
          <span className={styles.paragraph6}>Welcome onboard,</span>
          <span className={styles.heading3}>{staffName}</span>
        </div>

        <div className="order-card flex flex-col gap-0.5 p-5 mt-5 bg-white w-full text-black rounded-2xl">
          <div className="flex flex-row justify-between">
            <span className={styles.heading3}>{fromCityCode}</span>
            <img src={flight_path} />
            <span className={styles.heading3}>{toCityCode}</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className={styles.paragraph7}>{fromCity}</span>
            <span className={styles.paragraph7}>{toCity}</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className={styles.paragraph8}>{toTime}</span>
            <span className={styles.paragraph8}>{toTime}</span>
          </div>
          <div className="pt-1.5 mb-1.5 border-b border-b-black opacity-20"></div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-evenly">
              <span className={styles.paragraph8}>
                Flight No.
                <span className={styles.heading5}> {flightNumber} </span>
              </span>
            </div>
            <div className="flex flex-row justify-between"></div>
          </div>
        </div>

        <div className='py-4'>
            <span className={`${styles.heading4} text-black`}>View Existing Orders</span>
        </div>

        <div>
            <OrderComponent name="Christopher" seat="21A" id={1}/>
            <OrderComponent name="Yuwono" seat="15C" id={2}/>
            <OrderComponent name="Kamili" seat="10B" id={3}/>
            <OrderComponent name="Harijanto" seat="25A" id={4}/>
        </div>
      </div>
    </div>
  );
};

const OrderComponent = ({id, name, seat}) => {
    const navigate = useNavigate();
    return (
        <div className='w-100 bg-white flex flex-row rounded-2xl drop-shadow-[0_5px_30px_rgba(0,0,0,0.10)] mb-4' onClick={() => navigate(`/staff/order/${id}`)}>
            <div className='w-[40%] bg-yellow rounded-l-2xl flex justify-center items-center'>
                <img src={icon_person} className='p-4'/>
            </div>
            <div className='w-[60%] flex flex-col justify-center p-4'>
                <span className={`${styles.heading4} text-black`}>{name}</span>
                <span className={`${styles.paragraph8} text-[#00000050]`}>{seat}</span>
            </div>
        </div>
    )
}