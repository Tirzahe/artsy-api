import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArt, getNextPage } from '../redux/artwork';


class Slider extends Component {
    constructor() {
        super();
        this.state = {
            curr: 0
        }
    }
    componentDidMount() {
        this.props.getArt();
    }
    selectNextImg = (e) => {
        e.preventDefault();
        const { artData } = this.props.state;
        if (this.props.state.nextPage) {
            console.log("What is this URI", this.props.state.nextPage);
            this.props.getNextPage(this.props.state.nextPage);
            this.setState(prevState => ({ curr: prevState.curr + 1 > artData.length - 1 ? 0 : prevState.curr + 1 }));
        } else {
            this.setState((prevState) => { return { curr: prevState.curr + 1 > artData.length - 1 ? 0 : prevState.curr + 1 } });
        }
    }

    selectPrevImg = (e) => {
        e.preventDefault();
        const { artData } = this.props.state;
        this.setState(prevState => ({ curr: prevState.curr - 1 < 0 ? artData.length - 1 : prevState.curr - 1 }));
    }

    render() {
        // console.log(this.props);
        const { loading } = this.props.state;
        if (loading) {
            return <div>
                <h2 className="loading-head">...loading</h2>
                <p className="loading">If "loading..." continues for more than a few seconds, It's likely the API Token has expired.</p>
                <p className="loading">Please accept our sincere apologies, here's a piece of written art to ease the misadventure: </p>
                <h4 className="loading-quote"> "All the art of living lies in a fine mingling of letting go and holding on." -Havelock Ellis</h4>
                </div>
        }
        console.log('art state', this.state);
        const { curr } = this.state;
        const { artData } = this.props.state;
        const image = artData[curr];
        return (
            <div className="slider">
                <button onClick={this.selectPrevImg} className="left"></button>
                <div className="image">
                    <div className="tooltip">
                        <img src={image._links.thumbnail.href} alt={image.slug} className="tooltip" /><span className="tooltiptext">{image.slug}</span>
                    </div>
                    <p className="image-text">Title: {image.title}</p>
                    <p className="image-text">Year: {image.date}</p>
                </div>
                <button onClick={this.selectNextImg} className="right"></button>
            </div>
        )
        // } //errmessage closing bracket
    }
}

const mapToStateToProps = (state) => {
    return {
        state: state.artwork
    }
}

export default connect(mapToStateToProps, { getArt, getNextPage })(Slider);