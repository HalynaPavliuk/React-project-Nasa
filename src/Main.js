import React from "react";
import PhotoList from "./PhotoList";
import Preloader from "./Preloader";
import Search from "./Search";


class Main extends React.Component {
    state = {photos: [], loading: true}


    componentDidMount() {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=a03MMO4panPvwlwupK7rXNBjl74nCHbF6ZQJ5a7d`)
      .then(res => res.json())
      .then(data => this.setState({photos: data.photos, loading: false}))
      .catch((err) => {this.setState({loading: false})})
      console.log(this.state.photos)
    }

    onSearch = (rover, sol, camera) => {
        this.setState({loading: true})
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover !== 'curiosity' ? `${rover}` : 'curiosity'}/photos?${sol !== '100' ? `sol=${sol}` : '100'}${camera !== 'fhaz' ? `&camera=${camera}` : 'fhaz'}&api_key=a03MMO4panPvwlwupK7rXNBjl74nCHbF6ZQJ5a7d`)
        .then(res => res.json())
        .then(data => this.setState({photos: data.photos, loading: false}))
        .catch((err) => {this.setState({loading: false})})
        console.log(this.state.photos)
    }



    render() {
        const {photos, loading} = this.state;

        return(
            <div className="main">
                <Search searchPhoto={this.onSearch}/> 

               {loading ? (<Preloader />) : (<PhotoList photos={photos} />) } 
            </div>
        )
    }
    
}

export default Main;