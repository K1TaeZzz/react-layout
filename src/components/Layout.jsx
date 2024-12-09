import hunter from "../img/hunter.jpg"
import group from "../img/group.jpg"

const Layout = () => {
  return (
    <div>
      <div
        className="w-full bg-center  h-screen bg-cover relative     "
        style={{ backgroundImage: `url(${hunter})` }}
      >
        <div className="relative z-10  text-black flex justify-between ">
          <div className="absolute top-5 right-20">
            <button className="bg-white text-black px-4 py-2 rounded-lg shadow-lg font-semibold">
              For Coaches
            </button>
          </div>
          <div className=" pt-36  ">
            <div className=" w-[690px] text-left ml-20">
              <h1 className="text-6xl font-bold   ">
                Преодолевайте собственные границы с
                <span
                  className="w-[250px] h-24  bg-cover absolute"
                  style={{ backgroundImage: `url(${group})` }}
                ></span>
              </h1>

              <div className="flex justify-center gap-6 mt-[300px]  ">
                <div className="bg-black bg-opacity-50 text-white px-6 py-8 rounded-2xl ">
                  <p className="text-lg  -rotate-3 mb-5">В месяц</p>

                  <div className=" bg-[#68CC45]  rounded-3xl  px-5 -rotate-3 ">
                    <p className="text-4xl  font-bold text-green-400 mt-2 rounded-3xl text-white py-1">
                      990 ₽
                    </p>
                  </div>
                </div>

                <div className="bg-black bg-opacity-50 text-white px-6 py-4 rounded-2xl">
                  <p className="text-lg -rotate-3 mb-5">В год</p>
                  <div className="flex items-center justify-center space-x-2 mt-2 -rotate-3 ">
                    <p className="text-4xl font-bold  bg-[#68CC45]  rounded-3xl  px-5 py-1">
                      5 820 ₽
                    </p>
                    <span className="text-sm bg-yellow-400 text-black px-2 py-1 rounded-lg">
                      -50%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-center  h-screen bg-cover absolute     "></div>
      </div>
    </div>
  )
}
export default Layout
