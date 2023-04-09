import "./Description.css";

function Description() {
	return (
		<div className="Description-page">
			<h1>Release</h1>
			<a href={`${process.env.PUBLIC_URL}/homey1.0.1.apk`} download>
				Homey version 1.0.1
			</a>
			<br />

			<a href={`${process.env.PUBLIC_URL}/homey1.0.0.apk`} download>
				Homey version 1.0.0
			</a>
			<h1>Description</h1>
			<p>Introduce Homey.</p>
		</div>
	);
}

export default Description;
