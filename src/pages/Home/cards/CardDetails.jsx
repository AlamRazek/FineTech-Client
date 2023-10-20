import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const CardDetails = () => {
  const products = useLoaderData();

  return (
    <>
      <div className="my-4 lg:my-10">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full h-96">
            <img
              src="https://i.ibb.co/p16zjb6/airbuds-banner.png"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full h-96">
            <img src="https://i.ibb.co/SP7p0kc/addver.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full h-96">
            <img src="https://i.ibb.co/YjpXBTF/sale.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 lg:p-10">
        {products.length > 0 ? (
          products.map((data) => <Product key={data._id} data={data}></Product>)
        ) : (
          <h2 className="text-3xl font-bold text-center items-center h-[100vh] flex justify-center">
            This brand is currently not avialable.
          </h2>
        )}
      </div>
    </>
  );
};

export default CardDetails;
