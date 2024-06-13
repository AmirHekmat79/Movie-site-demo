import { BiSolidCameraMovie } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="shadow-md py-9 bg-yellow-600 text-center ">
      <div className="flex justify-center items-center gap-5">
        <BiSolidCameraMovie className="font-semibold text-3xl text-yellow-300  rounded-sm" />
        <h6>این سایت متعلق به فیلم کده می باشد</h6>
        <BiSolidCameraMovie className="font-semibold text-3xl text-yellow-300  rounded-sm" />
      </div>
    </footer>
  );
};
export default Footer;
