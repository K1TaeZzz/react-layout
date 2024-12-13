import promoFrame2 from '../img/promoFrame2.png';
import promoFrame3 from '../img/promoFrame3.png';
import promoFrame4 from '../img/promoFrame4.png';
import promoFrame from '../img/promoFrame.png';

const ProductPromo = () => {
  return (
    <container className="w-[1050px] mx-auto px-4">
      <div className="mx-12 my-20">
        <h2 className="text-6xl font-bold">
          Формирование адаптивного <br /> плана питания под ваши нагрузки
        </h2>
        <div className="mt-24 ">
          <img
            src={promoFrame}
            alt=""
            className="w-[450px] md:w-[1400px] h-[550px] md:h-[600px] bg-cover bg-left rounded-3xl "
          />

          <div className="flex items-center justify-between flex-wrap mt-10  ">
            <div className=" flex flex-col">
              <img src={promoFrame2} alt="" className="w-[410px] h-[550px]" />
              <p className="text-xl font-bold mt-8">
                Используйте готовые планы <br /> или создавайте свои.
              </p>
            </div>
            <div className=" flex flex-col mt-12">
              <img src={promoFrame3} alt="" className=" w-[410px] h-[550px] " />
              <p className="text-xl font-bold mt-8">
                Получайте информацию по <br /> продуктам и суточным нормам <br />
                употребления с учетом <br />
                нагрузки
              </p>
            </div>
            <div className="flex flex-col mt-5">
              <img src={promoFrame4} alt="" className="w-[410px] h-[550px]" />
              <p className="text-xl font-bold mt-8">
                Рацион на день адаптируется <br /> под ваши нагрузки. Учитывает <br />
                что вы уже съели
              </p>
            </div>
          </div>
        </div>
      </div>
    </container>
  );
};
export default ProductPromo;
