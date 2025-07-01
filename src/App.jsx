import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return <div className="  flex-center h-[100vh] ">Welcome</div>;
};

export default App;
