import CountCard from "../components/CountCard";
import LoadingScreen from "../components/LoadingScreen";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, isLoading } = useFetch("http://localhost:3000/");

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="relative">
      {data.data && (
        <section className="flex flex-col flex-1 ">
          <div className="flex items-center justify-center p-5 w-4/5 mx-auto">
            <h1 className="text-4xl font-bold">Bookstore</h1>
          </div>
          <div className="grid grid-cols-3 flex-1 w-4/5 mx-auto px-5 gap-2 pt-10">
            <CountCard data={data.data.booksCount} label={"Books"} />
            <CountCard data={data.data.authorsCount} label={"Authors"} />
            <CountCard data={data.data.genreCount} label={"Genres"} />
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
