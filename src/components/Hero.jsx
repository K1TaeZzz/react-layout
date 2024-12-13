import hunter from '../img/hunter.jpg';
import PRO from '../img/PRO.png';
import hunter2 from '../img/hunter2.png';

const Hero = () => {
  return (
    <div className="relative bg-gray-900  text-black ">
      <div
        className=" md:w-full w-[765px]  h-[800px] md:h-screen   mb-32 bg-right md:bg-center bg-cover   "
        style={{ backgroundImage: `url(${hunter})` }}
      >
        <container className="w-[1050px] mx-auto px-4 ">
          <div className=" text-left md:text-right relative">
            <button className="bg-white  px-10 py-3 rounded-3xl text-2xl font-bold  ">For Coaches</button>
          </div>

          <div className="   flex justify-between -mt-10 ">
            <div className=" flex flex-col items-center mt-[140px] ml-12    ">
              <div className="  ">
                <h1 className="text-7xl  font-bold   ">
                  Преодолевайте <br /> собственные границы <br /> с
                  <span
                    className="w-[350px] h-36  bg-cover absolute -mt-5 opacity-90"
                    style={{ backgroundImage: `url(${PRO})` }}
                  ></span>
                </h1>
                <img src={hunter2} alt="" className="absolute pl-5 -mt-16 " />

                <div className="flex  gap-6 mt-[250px] items-center ">
                  <div className="bg-black bg-opacity-50 text-white text-center px-7 py-10 rounded-2xl font-bold  ">
                    <p className="text-3xl  -rotate-2 pb-7 ">В месяц</p>
                    <p className="text-6xl  bg-[#68CC45]  rounded-3xl  px-6 py-1 -rotate-2 mt-5   text-white ">990 ₽</p>
                  </div>

                  <div className="bg-black bg-opacity-50 text-white text-center px-8 p-10  rounded-2xl font-bold">
                    <p className="text-3xl -rotate-2 pr-10 ">В год</p>
                    <div className=" pt-7 -rotate-2 ">
                      <div className="text-right  relative">
                        <span className="text-sm bg-yellow-400 text-white p-2 text-right rounded-lg   ">-50%</span>
                      </div>
                      <span className="text-6xl font-bold bg-[#68CC45]  rounded-3xl  px-5 ">5 820 ₽</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent  "></div>
        </container>
      </div>
    </div>
  );
};
export default Hero;
