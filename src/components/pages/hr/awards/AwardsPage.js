import React, { useState } from 'react';

import AwardsList from './AwardsList';

const awardsData = [
    {
        id: 1,
        employee: 'umer',
        award_type: 'Trophy',
        gift: 'Medal',
        description: 'ward description'
    },
    {
        id: 2,
        employee: 'umer',
        award_type: 'Trophy',
        gift: 'Medal',
        description: 'ward description'
    },
    {
        id: 3,
        employee: 'umer',
        award_type: 'Trophy',
        gift: 'Medal',
        description: 'ward description'
    },
    {
        id: 4,
        employee: 'umer',
        award_type: 'Trophy',
        gift: 'Medal',
        description: 'ward description'
    }
];



function AwardsPage(props) {

    const [awards, setAwards] = useState(awardsData);


    function handleDelete(id) {
        setAwards( awards.filter( award => award.id != id) )

    }

    return (
     <>
        <h1>Awards Page</h1>
        <AwardsList awards={awards} deleteAward={handleDelete} />
     </>
    );

}


export default AwardsPage;