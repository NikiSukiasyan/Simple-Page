import Statistic from "../images/pexels-pixabay-265087 1.png";

function Home() {
  return (
    <>
      <div className="landing-box">
        <h1>How To Start Your Own Bussiness ! Will You Ready ?</h1>
        <p>
          WE help individuals or Organizations to start their business or
          start-up by giving them indepth theory and practical sessions.
        </p>
        <button>Join Now</button>
        <img src={Statistic} />
      </div>
    </>
  );
}

export default Home;
