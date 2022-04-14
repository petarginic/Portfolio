

import { Audio } from "react-loader-spinner";
import { Navbar, Carousel, MainContent, About, Courses,Contact,Footer } from "./components";
import { CarouselData } from "./components/Carousel/CarouselData";
import { useLoader } from "./hooks/useLoader";





function App() {

  const { loading } = useLoader();
  if (loading ) return <div className="loader d-flex justify-content-center align-items-center" style={ { height: "100vh" }}> <Audio color="gray" height={100} width={80} timeout={2000} /> </div>

  return (
    <div className="App">
      
  
    <Navbar />
    <Carousel slides={CarouselData} />
    <MainContent />
    <About />
    <Courses />
    <Contact />
    <Footer />

    


    </div>

   
  );
}

export default App;
