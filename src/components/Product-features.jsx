import pageData from '../img/page-data.png';

const ProductFeatures = () => {
  return (
    <div>
      <container className="w-[1050px] mx-auto px-4">
        <div>
          <div className=" pt-24 pl-12 font-bold ">
            <p className="text-[24px]  ">
              PRO-подписка расширяет возможности для <br /> глубокого анализа тренировок и фокуса на <br /> ключевых
              показателях для вас и вашего тренера.
            </p>

            <h2 className="text-6xl mt-56 ">
              Расширенные плановые <br />
              <strong className="bg-orange-400 px-2 py-1 -rotate-3 rounded-3xl text-black">показатели</strong>и факты
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-20 ml-8 my-20">
            <div className=" w-[605px] h-[626px] px-8 py-8   bg-gray-100 rounded-3xl bg-opacity-10">
              <div className="flex justify-between text-lg mb-4 ml-3 ">
                <div className="text-center ">
                  Plan
                  <div className="bg-black rounded-3xl py-5 pl-5 mt-5">
                    <ul className="mb-2 bg-white rounded-3xl p-4 mr-24 text-left">
                      <li className="text-sm text-gray-400">Calories</li>
                      <li className="text-lg font-bold text-black">5 678 kcal</li>
                    </ul>
                    <ul className="flex gap-5">
                      <ul className="mb-2  rounded-2xl p-4 bg-white text-left">
                        <li className="text-sm text-gray-400">Carbs</li>
                        <li className="text-lg font-bold text-black">32 G</li>
                      </ul>
                      <ul className="mb-2 bg-white rounded-2xl p-4 text-left">
                        <li className="text-sm text-gray-400">Fats</li>
                        <li className="text-lg font-bold text-black">32 G</li>
                      </ul>
                    </ul>
                    <ul className="mb-2 bg-white rounded-3xl p-4 mr-20 text-left">
                      <li className="text-sm text-gray-400">Water loss</li>
                      <li className="text-lg font-bold text-black">2.1 L</li>
                    </ul>
                  </div>
                </div>

                <div className=" text-center  ">
                  Fact
                  <div className="bg-black rounded-3xl py-5 pl-5 mt-5">
                    <ul className="mb-2 bg-white rounded-3xl p-4 mr-32 text-left">
                      <li className="text-sm text-gray-400">Calories</li>
                      <li className="text-lg font-bold text-[#FF4A4A]">6178 kcal</li>
                    </ul>
                    <div className="flex gap-5">
                      <ul className="mb-2  rounded-2xl p-4 bg-white text-left">
                        <li className="text-sm text-gray-400">Carbs</li>
                        <li className="text-lg font-bold text-black">32 G</li>
                      </ul>
                      <ul className="mb-2 bg-white rounded-2xl p-4 text-left">
                        <li className="text-sm text-gray-400">Fats</li>
                        <li className="text-lg font-bold text-black">26 G</li>
                      </ul>
                    </div>
                    <ul className="mb-2 bg-white rounded-3xl p-4 mr-36 text-left">
                      <li className="text-sm text-gray-400">Water loss</li>
                      <li className="text-lg font-bold text-[#FF4A4A]">2.1 L</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="mt-20 ml-10 text-[28px]   font-bold">
                Прогнозируемый расчет <br /> показателей плановой тренировки <br /> и более детализированный факт
              </p>
            </div>
            <div
              style={{ backgroundImage: `url(${pageData})` }}
              className=" w-[605px] h-[626px] rounded-3xl bg-cover  "
            ></div>
          </div>
        </div>
      </container>
    </div>
  );
};
export default ProductFeatures;
