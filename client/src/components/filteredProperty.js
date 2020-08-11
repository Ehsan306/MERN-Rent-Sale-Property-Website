import React, { Component } from 'react'
import axios from 'axios'
import FiltetedCardsLanding from './FiltetedCardsLanding'

export default class filteredProperty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterResults: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/properties/searchLocation/'+ this.props.location)
          .then(res => {
            this.setState({
              filterResults: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
      DataTable() {
        return this.state.filterResults.map((res, i) => {
          return <FiltetedCardsLanding obj={res} key={i} />;
        });
      }

    render() {
        return (
            <div>
                {this.DataTable()}
            </div>
        )
    }
}
