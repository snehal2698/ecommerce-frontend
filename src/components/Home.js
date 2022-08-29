import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../components/Background.module.css";

function Home(){
    return(
        <>
		   <Carousel>
			
			     <div>
					<img src={require("../images/img_bg_1.jpg")}></img>
					<h1 className={styles.header}>Men's</h1>
				</div>
				<div>
				    <img src={require("../images/img_bg_2.jpg")}></img>
				</div>
				<div>
				    <img src={require("../images/img_bg_3.jpg")}></img>
				</div> 
			
		   </Carousel>	
		</>
		
    )
}
export default Home;