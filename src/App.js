import NavbarComponents from './components/oganisms/NavbarComponents';
import ContentComponent from './components/ContentComponents';
import FooterComponent from './components/FooterComponents';
// import FormLogin from './components/molecules/FormLogin';
// import ChatAiComponent from './components/molecules/AIComponents';

function App() {
  return (
    <div className="App">
      <NavbarComponents/>
      {/* <FormLogin status="true"/> */}
      {/* <ChatAiComponent/> */}
      <ContentComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
