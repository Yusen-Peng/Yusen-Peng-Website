import React from 'react'
import '../App.css';

const News = (props) =>{
    return (
        <div>
            <header className='Research-heading'>What's new</header>
            <ul className='New-list'>
                <li>05/2024: conference paper abstract submitted: "Assessing the equity implications of flood risk to public housing across the United States” at 2024 The Society for Risk Analysis Annual Meeting</li>
                <li>05/2024: started a part-time website intern position at National STEM Honor Society</li>
                <li>04/2024: presented the poster "A Comparison of CSV, HDF5, Zarr, and netCDF4 in Performing Common I/O Operations" at 2024 OSU Undergraduate Research Forum for Engineering and Architecture</li>
                <li>03/2024: presented the poster "A Comparison of CSV, HDF5, Zarr, and netCDF4 in Performing Common I/O Operations" at 2024 OSU CSE Graduate Student Visit Day</li>
                <li>02/2024: transitioned into the communications director at Competitive Programming Club</li>
                <li>01/2024: started a research assistant position in machine learning at The Datum Lab directed by Dr. John Paparrizos</li>
                <li>12/2023: started a part-time frontend developer position at Resilience, Inc</li>
                <li>11/2023: finished the paper manuscript "A Comparison of CSV, HDF5, Zarr, and netCDF4 in Performing Common I/O Operations"</li>
                <li>09/2023: started a research assistant position in data analytics advised by Dr. Kelsea Best</li>
                <li>08/2023: started working as teaching assistant for CSE 2221</li>
                <li>08/2023: became a peer mentor for CSE survey class</li>
                <li>05/2023: started a research assistant position in computer system advised by Dr. Suren Byna</li>
                <li>05/2023: started working as a lab assistant at the College of Engineering</li>
                <li>02/2023: became the problem engineer at Competitive Programming Club</li>
            </ul>
        </div>
    )
}

export default News;