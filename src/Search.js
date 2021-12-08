import React from "react";


class Search extends React.Component{
    state ={rover: 'curiosity',
            sol: '100',
            camera: 'fhaz'}

            handleFilter = (e) => {
                this.setState(() => ({[e.target.name]: e.target.dataset.type}), () => {
                    this.props.searchPhoto( this.state.rover, this.state.sol, this.state.camera)
                })
            }


    render() {
        const {searchPhoto} = this.props;

        return(
            <div className="filter">
                 <div className="rover  teal lighten-5">
                     <h5>Select Rover:</h5>
                        <label>
                            <input name="rover" type="radio" data-type="curiosity" onChange={this.handleFilter} checked={this.state.rover === 'curiosity'} />
                            <span className="colortext">Curiosity</span>
                        </label>
                        
                        <label>
                            <input name="rover" type="radio" data-type="opportunity" onChange={this.handleFilter} checked={this.state.rover === 'opportunity'} />
                            <span className="colortext">Opportunity</span>
                        </label>
                        
                        <label>
                            <input name="rover" type="radio" data-type="spirit" onChange={this.handleFilter} checked={this.state.rover === 'spirit'} />
                            <span className="colortext">Spirit</span>
                        </label>
                    </div>

                    <div className="sol  teal lighten-4">
                        <h5>Select Sol:</h5>
                        <label >
                            <input name="sol" type="radio" data-type="100" onChange={this.handleFilter} checked={this.state.sol === '100'} />
                            <span className="colortext">Sol 100</span>
                        </label>

                        <label >
                            <input name="sol" type="radio" data-type="200" onChange={this.handleFilter} checked={this.state.sol === '200'} />
                            <span className="colortext">Sol 200</span>
                        </label>

                        <label >
                            <input name="sol" type="radio" data-type="300" onChange={this.handleFilter} checked={this.state.sol === '300'} />
                            <span className="colortext">Sol 300</span>
                        </label>

                        <label >
                            <input name="sol" type="radio" data-type="400" onChange={this.handleFilter} checked={this.state.sol === '400'} />
                            <span className="colortext">Sol 400</span>
                        </label>

                        <label >
                            <input name="sol" type="radio" data-type="500" onChange={this.handleFilter} checked={this.state.sol === '500'} />
                            <span className="colortext">Sol 500</span>
                        </label>
                        
                        <label>
                            <input name="sol" type="radio" data-type="600" onChange={this.handleFilter} checked={this.state.sol === '600'} />
                            <span className="colortext">Sol 600</span>
                        </label>
                        
                        <label>
                            <input name="sol" type="radio" data-type="700" onChange={this.handleFilter} checked={this.state.sol === '700'} />
                            <span className="colortext">Sol 700</span>
                        </label>

                        <label >
                            <input name="sol" type="radio" data-type="800" onChange={this.handleFilter} checked={this.state.sol === '800'} />
                            <span className="colortext">Sol 800</span>
                        </label>

                        <label >
                            <input name="sol" type="radio" data-type="900" onChange={this.handleFilter} checked={this.state.sol === '900'} />
                            <span className="colortext">Sol 900</span>
                        </label>

                        <label >
                            <input name="sol" type="radio" data-type="1000" onChange={this.handleFilter} checked={this.state.sol === '1000'} />
                            <span className="colortext">Sol 1000</span>
                        </label>
                    </div>

                    <div className="camera  teal lighten-3">
                    <h5>Select Camera:</h5>
                        <label>
                            <input name="camera" type="radio" data-type="fhaz" onChange={this.handleFilter} checked={this.state.camera === 'fhaz'} />
                            <span className="colortext">Front Camera - (Curiosity, Opportunity, Spirit)</span>
                        </label>
                        
                        <label>
                            <input name="camera" type="radio" data-type="rhaz" onChange={this.handleFilter} checked={this.state.camera === 'rhaz'} />
                            <span className="colortext"> Rear Camera - (Curiosity, Opportunity, Spirit)</span>
                        </label>
                        
                        <label>
                            <input name="camera" type="radio" data-type="mast" onChange={this.handleFilter} checked={this.state.camera === 'mast'} />
                            <span className="colortext">Mast Camera - (Curiosity)</span>
                        </label>

                        <label>
                            <input name="camera" type="radio" data-type="chemcam" onChange={this.handleFilter} checked={this.state.camera === 'chemcam'} />
                            <span className="colortext">Chemistry and Camera Complex - (Curiosity)</span>
                        </label>

                        <label>
                            <input name="camera" type="radio" data-type="mahli" onChange={this.handleFilter} checked={this.state.camera === 'mahli'} />
                            <span className="colortext">Mars Hand Lens Imager - (Curiosity)</span>
                        </label>

                        <label>
                            <input name="camera" type="radio" data-type="mardi" onChange={this.handleFilter} checked={this.state.camera === 'mardi'} />
                            <span className="colortext">Mars Descent Imager - (Curiosity)</span>
                        </label>

                        <label>
                            <input name="camera" type="radio" data-type="navcam" onChange={this.handleFilter} checked={this.state.camera === 'navcam'} />
                            <span className="colortext">Navigation Camera - (Curiosity, Opportunity, Spirit)</span>
                        </label>

                        <label>
                            <input name="camera" type="radio" data-type="pancam" onChange={this.handleFilter} checked={this.state.camera === 'pancam'} />
                            <span className="colortext">Panoramic Camera - (Opportunity, Spirit)</span>
                        </label>

                        <label>
                            <input name="camera" type="radio" data-type="minites" onChange={this.handleFilter} checked={this.state.camera === 'minites'} />
                            <span className="colortext">Miniature Thermal Emission Spectrometer (Mini-TES) - (Opportunity, Spirit)</span>
                        </label>
                    </div>

                    
            </div>
        )
    }
}


export default Search;