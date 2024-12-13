import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
import icon from '../img/icon.png';
import Ellipse from '../img/Ellipse.png';

const Benefits = () => {
  return (
    <container className="w-[1050px] mx-auto px-4">
      <div className="ml-12 my-24">
        <h2 className="text-[58px] font-bold text-center">А также</h2>

        <ul className="flex gap-8 mt-8 text-xl flex-wrap ">
          <li className="bg-gray-900 w-[300px]  h-[200px] rounded-3xl p-7">
            <img src={icon} alt="" className="w-8" />
            <p className=" pt-14">
              Составление <br /> собственных планов
            </p>
          </li>
          <li className="bg-gray-900 w-[300px]  h-[200px] rounded-3xl p-7">
            <img src={icon2} alt="" className="w-8 " />
            <p className=" pt-10">
              Библиотека <br /> тренировок с базовыми тренировками
            </p>
          </li>
          <li className="bg-gray-900 w-[300px]  h-[200px] rounded-3xl p-7">
            <img src={icon3} alt="" className="w-8" />
            <p className=" pt-10">
              Синхронизация <br /> активностей с Google <br /> Calendar
            </p>
          </li>
          <li className="bg-gray-900 w-[300px]  h-[200px] rounded-3xl p-7">
            <img src={icon4} alt="" className="w-8" />
            <p className=" pt-10">
              Ручная загрузка <br />
              тренировок .fit
            </p>
          </li>
        </ul>

        <div className="relative text-center w-100 h-[300px] mt-52">
          <h2 className="text-6xl">Стоимость</h2>

          <div className="flex justify-center gap-6  mt-12 ">
            <div className="bg-gray-900  z-10 text-white px-6 py-8 rounded-2xl ">
              <p className="text-lg  -rotate-3 mb-7">В месяц</p>

              <div className=" bg-[#68CC45]  rounded-3xl  px-5 -rotate-2 ">
                <p className="text-4xl  font-bold  mt-2 rounded-3xl  p-3">990 ₽</p>
              </div>
            </div>

            <div className="bg-gray-900  z-10 text-white px-6 py-4 rounded-2xl">
              <p className="text-3xl -rotate-2 mb-4 pr-14 pt-3">В год </p>
              <div className=" pb-10 -rotate-2 mr-16 ">
                <div className="text-right  relative ">
                  <span className="text-sm bg-yellow-400 text-white p-2 text-right rounded-lg   ">-50%</span>
                </div>
                <span className="text-4xl font-bold bg-[#68CC45]  rounded-3xl  px-5 py-2  ">5 820 ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </container>
  );
};
export default Benefits;
