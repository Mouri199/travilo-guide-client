import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Search = ({ res }) => {
    const { name, image, detail, price, _id } = res;
    return (
        <div className="shadow-xl p-4 flex flex-col-reverse md:flex-row-reverse gap-2">
            <div className="max-w-xl flex justify-between items-center">
                <div>
                    <p className="text-2xl font-bold">{name}</p>
                    <p className="max-w-lg">{detail.slice(0, 150)}...<Link to={`/service/${_id}`} className="font-medium text-travego2 dark:text-blue-600">See More</Link></p>
                </div>
                <div className="font-bold text-travego2  dark:text-blue-600 text-xl">
                    ${price}
                </div>
            </div>
            <img src={image} alt="" className="max-h-[150px]" />

        </div>
    );
};

Search.propTypes = {
    res: PropTypes.object.isRequired,
}

export default Search;

