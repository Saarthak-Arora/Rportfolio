import { useEffect } from "react";
import { useNavigate } from 'react-router';

export const withRouter = (Component) =>{
    const Wrapper = (props) =>{
        const history = useNavigate();
        return <Component history={history} {...props}/>
    } 
    return Wrapper;
}

const ScrollToTop = ({children}) => {
      useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, []);

      return children || null;
    };

    export default withRouter(ScrollToTop);