const Training = () => {
  return (
    <container className="w-[1050px] mx-auto px-4">
      <div className="bg-black text-white px-4 py-8">
        {/* Header Section */}
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">Множество полезных показателей тренировки</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="bg-white text-black px-3 py-1 rounded-full text-sm md:text-base">Расход воды</span>
            <span className="bg-white text-black px-3 py-1 rounded-full text-sm md:text-base">
              Энергетические показатели
            </span>
            <span className="bg-white text-black px-3 py-1 rounded-full text-sm md:text-base">Набор высоты</span>
            <span className="bg-white text-black px-3 py-1 rounded-full text-sm md:text-base">Скорость</span>
            <span className="bg-white text-black px-3 py-1 rounded-full text-sm md:text-base">Мощность</span>
            <span className="bg-white text-black px-3 py-1 rounded-full text-sm md:text-base">Лактат</span>
            <span className="bg-white text-black px-3 py-1 rounded-full text-sm md:text-base">Погода</span>

            <span className="bg-white text-black px-3 py-1 rounded-full text-sm md:text-base">Пульсовые зоны</span>
            <span className="text-sm md:text-base text-gray-400">и ещё более 10 показателей</span>
          </div>
          <div className="text-left">
            <h3 className="text-4xl md:text-5xl font-bold">
              Детальный <span className="bg-red-500 text-white px-2 rounded">анализ</span> тренировки
            </h3>
          </div>
        </div>

        {/* Details Section */}
        <div className="max-w-screen-xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-red-500 text-4xl">💧</div>
            <p className="text-sm md:text-base">План и факт замеров лактата</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-red-500 text-4xl">📊</div>
            <p className="text-sm md:text-base">Детальная статистика отдельного отрезка графика</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-red-500 text-4xl">⚡</div>
            <p className="text-sm md:text-base">Показ на графике расхода жиров, углеводов и калорий</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-red-500 text-4xl">📍</div>
            <p className="text-sm md:text-base">Показ тренировки на карте</p>
          </div>
        </div>
      </div>
    </container>
  );
};
export default Training;
