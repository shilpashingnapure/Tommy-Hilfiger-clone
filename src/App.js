import logo from './logo.svg';
import './App.css';
import Brand from './component/brand'
import Navbar from './component/navbar'
import Header from './component/header'
import Content from './component/content'
import Content2 from './component/content2'
import Img_Div from './component/img_Div'
import About from './component/about'
import Careers from './component/careers'
import Footer from './component/footer'

import img2 from "./imges/img2.jpg"
import img6 from "./imges/img6.jpg"
import img7 from './imges/img7.jpg'
import img8 from './imges/img9.jpg'
function App() {
  return (
    <div>
      <Brand/>
      <Navbar/>
      <Header/>
      <Content 
          images={img2} 
          button="explore" 
          p = {["However you're spending the holidays",<br/>,
            "this year, do it your way.Be the", <br/> ,"epitome of exquisite style in our new", <br/>,
            "color palette , ready to take you into holiday mode."]} 
          h2 = {[<span>NEW IN</span>,<br/>,"EASE INTO THE HOLIDAYS"]}
          />
      <Content2/>

      <Content 
        images = {img6}
        h2 = {"Tommy Jeans"}
        p = {["Channel the carefree spirit of the 90s with the latest \
        from Tommy Jeans. There’s no weather situation this new collection can’t handle."]}
        button="discover" 

        />


        <Img_Div/>

        <About 
          img= {img7}
          button = {"find out more"}
          p = {["One of the world's leading designer lifestyle brands globally \
            recognized for bringing to life",<br/>,
            "the classic American cool spirit. Tommy Hilfiger \
            markets its products under several brands in", <br/> ,"order to fully \
            capitalize on its global appeal, as each brand varies in terms of price point,\
             demographic target and distribution."]} 
        />

        <Careers/>

        <About 
          img= {img8}
          button = {"read more"}
          p = {["Find out about our Corporate Responsibility initiatives."]} 
          class={"h2-none"}
        />


        <Footer/>
    </div>
  );
}

export default App;
