import React, { Component } from 'react';
import axios from 'axios';
import App from "./App"
import "./style.css";

class MySesh extends Component {
	state = {
		selectedFile: null,
		selectedFiles: null,
		images: [],
		imageNames: []
	}

	componentDidMount() {
		axios.get("/api/fileAWS")
			.then(res => this.setState({
				images: res.data.Contents
					.map(x => 'https://art-angels-sessions.s3.amazonaws.com/' + x.Key),
					imageNames: res.data.Contents.map(x => x.Key)
			}, () => console.log(this.state.images))
			)
			.catch(err => console.warn(err.message))
	}

	deleteButton = (image, i) => {
		console.log("not empty");
		const tempArray = this.state.images;
		tempArray.splice(i, 1)
		axios.post('/api/fileAWS/fileAWS-delete', {image}).then(
			(data) => {
				console.log(data)
			}
		).catch((err) => console.log(err))
		this.setState({
			images: tempArray
		})
	}

	render() {
		const imgstyle = {
			maxHeight: '150px'
		}
		console.log(this.state);
		return (
			<div className="container-all">

				<p className="title title-new"> My Sessions</p>
				<h5 className="little-title">View your gallery</h5>
				<App></App>
				<div id="image-grid">
					{this.state.images.map((x, i) =>
						<div class="img-wrap">
							<span class="close">
							<button onClick={() => this.deleteButton(this.state.imageNames[i], i)}>
								x
						</button></span>
							<img style={imgstyle} src={x} key={i + '-img'} alt={x} />
						</div>
					)}
				</div>
			</div>

		);
	}
}

export default MySesh;