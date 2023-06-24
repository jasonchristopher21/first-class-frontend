import { LoginBanner } from '../components/LoginBanner';
import ScootLogo from '../assets/scoot.png';

export const Login = () => {
  return (
    <div className="bg-yellow w-screen h-screen p-0 m-0">
      <div className="h-[25%] flex items-center justify-center">
        <img
          src={ScootLogo}
          className="xs:w-[42.5%] max-w-[42.5%] ss:w-[22.5%] md:w-[12.5%]"
        />
      </div>
      <LoginBanner />
    </div>
  );
};
