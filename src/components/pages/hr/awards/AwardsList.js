import React, { Component }  from 'react';


class AwardsList extends Component {

    render() {
        return (
          <div>
            <h4>Awards List</h4>
            <table>
                <thead>
                    <tr> 
                        <th> ID </th>
                        <th> Employee </th>
                        <th> Award Type </th>
                        <th> Gift </th>
                        <th> Description </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>

                        { this.props.awards.map( (award) => ( 
                           <tr key={award.id}>
                               <td>{award.id}</td>
                               <td>{award.employee}</td>
                               <td>{award.award_type}</td>
                               <td>{award.gift}</td>
                               <td>{award.description}</td>
                               <th>  Edit | <span onClick={() => this.props.deleteAward(award.id)}>Delete</span> </th>
                           </tr>
                        ))
                        }

                </tbody>
            </table>
           </div>
        );
    }
}

export default AwardsList;