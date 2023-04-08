import "./Release.css";

function Release() {
	return (
		<div className="Release-page">
			<h1>Release</h1>
			<a href={`${process.env.PUBLIC_URL}/homey1.0.0.apk`} download>
				Homey version 1.0.0
			</a>
		</div>
	);
}

export default Release;
