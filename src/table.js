import React from "react";



function Tablehead(){

    return(

       

        <thead>

            <tr>
                <th>name</th>
                <th> roll no. </th>
            </tr>
        </thead>
     
    )
}

function Tablebody(){
    return(
        <tbody>

            <tr>
                <td>
                    ram
                </td>
                <td>
                    20
                </td>
            </tr>
        </tbody>
    )
}

export default class Table extends React.Component{

    render(){

        return(

            <table>
                <Tablehead>

                </Tablehead>
                <Tablebody></Tablebody>
            </table>

        )
    }
}