import { Button} from "./styles";
<<<<<<< HEAD
import PropTypes from "prop-types";

function DefaultButton({children, theme,...props}){
 
    return(
  <Button {...props}theme={theme}>{children}</Button>
 )
}

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};
=======

function DefaultButton({children, ...props}){
 
    return(
  <Button {...props}>{children}</Button>
 )
}

>>>>>>> ceec55307ed5bbbc402a9505ffb51bd7f36ebd2d
export default DefaultButton;