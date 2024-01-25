import PropTypes from 'prop-types';
import { useState } from 'react';
function Square(props) {
    const [value1,setValue1] = useState(null);
    const [value2,setValue2] = useState(null);
   
    function handleClick() {
        console.log('clicked!');
        setValue1('X');
        console.log("Square");
        setValue2('O');
    }

    return (
        <button
            className="square"
            onClick={handleClick}
        >
           {props.value}
        </button>
    );
}

Square.propTypes = {
    value: PropTypes.string.isRequired,
};

export default Square;
