import {ClipLoader} from "react-spinners";
import css from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const Spinner = () => {
    return (
        <div className="sweet-loading">
            <ClipLoader color={'#ffffff'} css={override} size={150}/>
        </div>
    )
}

export default Spinner