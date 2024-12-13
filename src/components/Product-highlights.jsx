import label2 from '../img/label2.png';
import label3 from '../img/label3.png';
import label4 from '../img/label4.png';
import label5 from '../img/label5.png';
import label from '../img/label.png';
import synchro from '../img/synchro.png';
import ii from '../img/ii.png';
import ii2 from '../img/ii2.png';
import ii3 from '../img/ii3.png';
import ii4 from '../img/ii4.png';
import trainingImage from '../img/trainingImage.png';

const ProductHighlights = () => {
  return (
    <container className="w-[1050px] mx-auto px-4">
      <div className="ml-12 my-24">
        <h2 className="text-[58px] font-bold">
          Создание структурной тренировки <br />
          при помощи ИИ
        </h2>
        <div className="flex flex-wrap justify-center relative bg-black md:bg-gray-200 mt-14 rounded-3xl gap-10  ">
          <div className=" ">
            <img src={ii2} alt="" className="w-[600px]" />
          </div>
          <div className="">
            <img src={ii4} alt="" className="w-[600px]   h-[600px] md:h-[550px] rounded-3xl " />
          </div>
        </div>

        <div className="  flex flex-col  justify-center  items-center md:items-center  md:flex-row  absolute ml-10  md:-mt-48  mt-10 ">
          <img src={ii3} alt="" className="w-[100px]" />
          <p className="text-white md:text-black font-bold text-xl md:text-left  text-center pl-5 pt-10">
            После создания, задания <br /> автоматически синхронизируются <br /> с вашим гаджетом
          </p>
        </div>

        <div className="mt-96 ml-12 md:mt-60">
          <h2 className="text-[56px] font-bold">
            <span className="bg-[#E748EA] rounded-3xl px-5 ">Синхронизация</span> с устройствами
          </h2>

          <div className="flex mt-24 gap-12 flex-wrap items-center -ml-5 ">
            <div className="bg-gray-900 rounded-3xl w-[600px]  h-[570px]">
              <div className="flex gap-6 w-[100px] h-[100px] mt-16 ml-5">
                <img src={label} alt="" className="" />
                <img src={label2} alt="" />
                <img src={label3} alt="" />
              </div>
              <div className="flex gap-5 w-[100px]  h-[100px] mt-5 ml-5">
                <img src={label4} alt="" />
                <img src={label5} alt="" />
              </div>
              <p className="text-3xl mt-40 ml-5">
                Загрузка и выгрузка данных из <br /> гаджетов и сервисов
              </p>
            </div>

            <div className="bg-gray-900 rounded-3xl">
              <img src={synchro} alt="" className="w-[600px] h-[430px]" />
              <p className="text-3xl mt-16 ml-10 md:mb-10 mb-10">Синхронизация с лактометром</p>
            </div>
          </div>
        </div>
      </div>
    </container>
  );
};
export default ProductHighlights;
