import { useState, useEffect } from 'react';


const DataList = () => {
    const [details, setDetails] = useState();
    useEffect(() => {
        fetch('http://localhost:8000/details')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setDetails(data);
            })
    })
    return (
        <>
            {details &&
                details.map((details) => (
                    <div class="row">
                        <div class="col-sm">
                            <div class="card">
                                <div class="card-body">
                                    <img src={details.img} class="img-fluid" alt="..." /><br /><br />
                                    <h5 class="card-title">Name: {details.name}</h5>
                                    <h6 class="card-text">Gender: {details.gender}</h6>
                                    <h6 class="card-text">Mail: {details.mail}</h6>
                                    <h6 class="card-text">Skills: {details.skills}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <br />
        </>
    );
}

export default DataList;