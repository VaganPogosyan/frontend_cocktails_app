import React from 'react';

class AddDrink extends React.Component {
    render () {
        return (
            <div>
                <form>
                    {/* text input to search API for drink */}
                    <label htmlFor="searchInput">label</label>
                    <input type="search" name="searchInput"/>
                    {/* submit button */}
                    <input type="submit" value="Search"/>
                </form>
                {/*  */}
            </div>
        )
    }
};

export default AddDrink;
