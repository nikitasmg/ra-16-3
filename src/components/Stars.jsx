import React, {useMemo} from 'react';
import Star from "./Star.jsx";

const Stars = ({count}) => {
    const isStarsVisible = useMemo(() => {
        return typeof count === 'number' && count <= 5 && count >= 1;
    }, [count])

    return (
        <>
            {
                isStarsVisible &&
                <ul className="card-body-stars u-clearfix">
                    {[...Array(count)].map(() => <Star/>)}
                </ul>
            }
        </>
    );
};

Stars.defaultProps = {
    count: 0
}

export default Stars;