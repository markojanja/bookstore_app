import CountCard from '../components/CountCard';
import LoadingScreen from '../components/LoadingScreen';
import useFetch from '../hooks/useFetch';
import banner from '../assets/banner.svg';

const Home = () => {
  const { data, isLoading } = useFetch('http://localhost:3000/');

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      {data.data && (
        <section className="flex flex-col justify-between">
          <div className="flex items-center justify-center p-5 w-5/6 md:w-4/5 mx-auto">
            <div className="flex items-center justify-start w-1/2 flex-1">
              <h1 className="text-4xl lg:text-8xl font-extrabold">
                Bookstore<span className="text-emerald-500">App</span>
              </h1>
            </div>
            <div className="w-1/2">
              <img className="w-full" src={banner} alt="" />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 flex-1 items-center w-full md:w-4/5 mx-auto px-5 gap-2 py-5 md:pt-10">
            <CountCard data={data.data.booksCount} label={'Books'} />
            <CountCard data={data.data.authorsCount} label={'Authors'} />
            <CountCard data={data.data.genreCount} label={'Genres'} />
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
