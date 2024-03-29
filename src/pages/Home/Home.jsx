import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import Card from "./cards/Card";

import Footer from "../Footer/Footer";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Header></Header>

      <div>
        <div>
          <h2 className="text-center mt-3 md:mt-6 mb-2 text-3xl md:text-4xl font-semibold">
            Company we are connect with
          </h2>
          <p className="text-center mb-3 md:mb-6">
            Our goal is to provide the best
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3 max-w-7xl mx-auto ">
          {data?.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>

      <div>
        <div>
          <div className="card card-side bg-base-100 shadow-xl my-4">
            <figure>
              <img
                src="https://i.ibb.co/48tVtgj/sony-xperia-l4.webp"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Sony</h2>
              <p>
                With the best camera lense.Take some great picture with one of
                the most powerful camera
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-side bg-base-100 shadow-xl my-4">
            <figure className="max-w-20">
              <img
                src="https://i.ibb.co/3kCSGKh/samsung-tab-s9.jpg"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Samsung tab 9</h2>
              <p>
                Watch netflix on the one of the best super amoled display and
                can draw with the stylux pen is given with the tab also can play
                games.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
