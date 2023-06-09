import React from 'react';
import useSelectClass from '../../../hooks/useSelectClass';

const SelectClass = () => {

    const [selectedclass] = useSelectClass()



    return (
        <div>
            <h1>This is selected class page</h1>
        </div>
    );
};

export default SelectClass;