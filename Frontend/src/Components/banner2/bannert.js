import './bannert.css'

const imgs = [
	'https://yeehaw.s3.amazonaws.com/space/pexels-photo-1274260.jpeg',
	'https://yeehaw.s3.amazonaws.com/space/pexels-photo-1624438.jpeg',
	'https://yeehaw.s3.amazonaws.com/space/pexels-photo-220201.jpeg',
	'https://yeehaw.s3.amazonaws.com/space/pexels-photo-796206.jpeg',
	'https://yeehaw.s3.amazonaws.com/space/pexels-photo-924824.jpeg'
];

export class App extends React.Component {
	componentDidMount() {
		imgs.forEach((src) => new Image().src = src);
	}
	render() {
		return (
			<div className="App">
				<SlideShow/>
			</div>
		);
	}
}

class SlideShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			primaryIndex: 0,
			secondaryIndex: 0,
			primaryStyle: {
				opacity: 1
			},
			secondaryStyle: {
				opacity: 0
			},
			autoSlide: true,
			slideTimeout: setTimeout(() => this.autoSlide(), 10000)
		}
	}
	slidePrevious = () => {
		if(!this.state.transit) {
			const nextIndex = this.state.primaryIndex - 1 < 0 ? imgs.length - 1 : this.state.primaryIndex - 1;
			this.transitSlides(nextIndex, false);
		}
	}
	slideNext = () => {
		if(!this.state.transit) {
			const nextIndex = this.state.primaryIndex + 1 === imgs.length ? 0 : this.state.primaryIndex + 1;
			this.transitSlides(nextIndex, true);
		}
	}
	autoSlide = () => {
		this.slideNext();
	}
	transitSlides = (nextIndex, left) => {
		this.setState({
			primaryStyle: {
				animation: left ? 'slideOutLeft 1s ease-in-out' : 'slideOutRight 1s ease-in-out',
				transition: 'all 1s',
				opacity: 0
			},
			secondaryStyle: {
				animation: left ? 'slideInLeft 1s ease-in-out' : 'slideInRight 1s ease-in-out',
				transition: 'all 1s',
				opacity: 1
			},
			transit: true,
			secondaryIndex: nextIndex
		});
		setTimeout(() => this.updatePrimary(), 1000);
		
		if(this.state.autoSlide) {
			clearTimeout(this.state.slideTimeout);
			this.setState({ slideTimeout: setTimeout(() => this.autoSlide(), 10000) });
		}
	}
	updatePrimary = () => {
		this.setState({
			transit: false,
			primaryIndex: this.state.secondaryIndex,
			primaryStyle: {
				opacity: 1
			},
			secondaryStyle: {
				opacity: 0
			}
		});
	}
	positionHandler = (position) => {
		if(!this.state.transit) {
			const diff = this.state.primaryIndex - position;
			if(diff !== 0) {
				this.transitSlides(position, diff < 0 ? true : false);
			}
		}
	}
	checkHandler = (event) => {
		const { autoSlide } = this.state;
		this.setState({ autoSlide: !autoSlide });
		// if we're disabling auto slide (previously was true)
		if(autoSlide) {
			clearTimeout(this.state.slideTimeout);
		} else {
			this.setState({ slideTimeout: setTimeout(() => this.autoSlide(), 10000) });
		}
	}
	render() {
		const indicators = imgs.map((img, i) => {
			const selectStyle = this.state.primaryIndex === i ? { background: 'white' } : {};
			return (
				<div
					key={i} 
					style={selectStyle}
					onClick={() => this.positionHandler(i)}
					className="positionIndicator">
				</div>
			);
		});
		return (
			<div className="slideShow">
				<div
					className="slideArrow arrowLeft"
					onClick={() => this.slidePrevious()}>&lt;</div>
				<div
					className="slideArrow arrowRight"
					onClick={() => this.slideNext()}>&gt;</div>
				<div className="slidePositionWrapper">
					{indicators}
				</div>
				<div className="autoSlide">
					<div className="slideLabel">auto-slide</div>
					<input type="checkbox" checked={this.state.autoSlide} onChange={(event) => this.checkHandler(event)}/>
				</div>
				<div className="slide" style={this.state.primaryStyle}>
					<img src={imgs[this.state.primaryIndex]} alt="" className="slideImg"/>
				</div>
				<div className="slide" style={this.state.secondaryStyle}>
					<img src={imgs[this.state.secondaryIndex]} alt="" className="slideImg"/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));
