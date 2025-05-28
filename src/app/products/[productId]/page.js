import React from 'react';

const DynamicPage = async ({params, searchParams}) => {
    console.log( await params);
    console.log(await searchParams);
    return (
        <div>
            <h3>Dynamic Page</h3>
        </div>
    );
};

export default DynamicPage;