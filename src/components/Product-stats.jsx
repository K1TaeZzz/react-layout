import imageStat from '../img/imageStat.png';
import imageStat2 from '../img/imageStat2.png';
import Vector from '../img/Vector.png';
import Vector2 from '../img/Vector2.png';
import Vector3 from '../img/Vector3.png';
import Vector4 from '../img/Vector4.png';

const ProductStats = () => {
  return (
    <container className="w-[1050px] mx-auto px-4">
      <div className="ml-12 mt-16">
        <h3 className="text-2xl  font-bold ">Множество полезных показателей тренировки</h3>
        <ul className="flex items-center flex-wrap gap-1 md:gap-1 mt-10">
          <li className="bg-white rounded-full p-2 text-sm  font-medium text-black">Расход воды</li>
          <li className="bg-white rounded-full p-2 text-sm  font-medium text-black">Энергетические показатели </li>
          <li className="bg-white rounded-full p-2 text-sm  font-medium text-black">Набор высоты</li>
          <li className="bg-white rounded-full p-2 text-sm  font-medium text-black">Скорость</li>
          <li className="bg-white rounded-full p-2 text-sm  font-medium text-black">Лактат</li>
          <li className="bg-white rounded-full p-2 text-sm  font-medium text-black">Лактат</li>
          <li className="bg-white rounded-full p-2 text-sm  font-medium text-black">Мощность</li>
          <li className="bg-white rounded-full p-2 text-sm  font-medium text-black">Погода</li>
          <li className="bg-white rounded-full p-2 text-sm  font-medium text-black">Пульсовые зоны</li>
        </ul>
        <ul className="flex  items-center gap-1 my-1 flex-wrap">
          <li className="bg-white w-[160px] rounded-full p-2 text-sm  font-medium text-black">Данные тренировки</li>
          <li className=" p-3 text-sm  font-medium ">и еще более 10 показателей</li>
        </ul>
        <h3 className="mt-56 font-bold text-4xl md:text-[30px] ">
          Детальный <span className="bg-[#FF4A4A] rounded-full pb-2 px-2">анализ</span> тренировки
        </h3>
        <div className=" ">
          <div
            style={{ backgroundImage: `url(${imageStat2})` }}
            className=" w-[700px] md:w-[1370px] h-[700px] md:h-[450px] bg-center bg-cover rounded-3xl relative mt-20  "
          >
            <div
              style={{ backgroundImage: `url(${imageStat})` }}
              className=" w-[650px] md:w-[580px]  h-[400px] md:h-[550px]  bg-cover z-10 absolute bottom-9 right-2"
            ></div>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-wrap my-20 ml-8 gap-32 items-center text-sm ">
          <div className="flex flex-col items-center">
            <img src={Vector} alt="" className="w-10 mb-10" />
            <p className="">
              План и факт замеров <br /> лактата{' '}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Vector2} alt="" className="w-10 mb-10" />
            <p>
              Детальная статистика <br />
              отдельного отрезка <br /> графика{' '}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Vector3} alt="" className="w-10 mb-10" />
            <p>
              Показ на графике <br /> расхода жиров, <br /> углеводов и калорий{' '}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Vector4} alt="" className="w-10 mb-10" />
            <p>
              Показ тренировки <br /> на карте
            </p>
          </div>
        </div>
      </div>
    </container>
  );
};
export default ProductStats;
