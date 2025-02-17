// import { Button } from "../../Button/Button";
import { Button } from "../../Button/Button";
import Images from "../../images/cars.jpg";
import Furniture from "../../images/furniture.jpg";
import Vintage from "../../images/vintage.jpg";
import { NavLink } from "react-router-dom";
import "./Home.css"
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="heading d-flex justify-content-center mt-5 mb-5">
          <h1 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
            Online Auction Bidding
          </h1>
        </div>
            {/* Bidding categories   */}
            <div className="card-group" >
                <div className="card" style={{height:"27rem"}}>
                    <img src={Images} style={{height:"250px"}} className="card-img-top" alt="cars"/>
                    <div className="card-body mt-4">
                        <h5 className="card-title">Cars</h5>
                        <p className="card-text">You can buy or sale used cars </p>
                    </div>
                    <div className="cars">
                    <NavLink to="/cars" style={{textDecoration:"none"}}><Button className="p-btn">Cars</Button></NavLink>
                        
                    </div>
                </div>
                {/* card-2 */}
                <div className="card">
                    <img src={Furniture} className="card-img-top" style={{height:"250px"}} alt="furniture"/>
                    <div className="card-body mt-4">
                        <h5 className="card-title">Furniture</h5>
                        <p className="card-text">You can buy or sale used furniture here</p>

                    </div>
                    
                         <div className="furniture">
                            <NavLink to="/furniture" style={{textDecoration:"none"}}><Button className="p-btn">Furniture</Button></NavLink>
                          </div>           
                </div>
                {/* card-3 */}
                <div className="card">
                    <img src={Vintage} style={{height:"250px"}} className="card-img-top" alt="vintage"/>
                    <div className="card-body mt-4">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Here you can buy any vintage things.</p>
                    </div>
                    <div className="vintage">
                    <NavLink to="/vintage" style={{textDecoration:"none"}} ><Button className="p-btn">Vintage</Button></NavLink>
                        
                    </div>
                </div>
            </div>
            {/* end card */}
      </div>
    </>
  );
};

export default Home;
