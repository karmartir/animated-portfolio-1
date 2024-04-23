import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>GAREN <br/> MARTIROSYAN</h2>
          <h1>Full stack developer  and UI/UX designer</h1>
          <div className="buttons">
            <button>See the latest works</button>
            <button>Contact me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>
      <div className="imageContainer">
        <img className="first-image" src="front-picture.png" alt="" />
      </div>
   
    </div>
  );
};

export default Hero;
