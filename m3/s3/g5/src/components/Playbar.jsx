import { Button, Col, Container, Row } from "react-bootstrap";

const Playbar = () => {
    return(
        <Row>
		<Container className="col-12 position-fixed bottom-0 bg-secondary d-none d-lg-block p-2">
			<Container fluid className="px-5">
				<Row className="row d-flex align-items-center justify-content-start">
					<Col id="songInfo" className="col-md-2 col-lg-3">
						<Row className="row d-flex align-items-center justify-content-start">
							<Col className="col-3 songCover"></Col>
							<Col className="col-6 text-light playbarSongData d-flex">
								<div>
									<p className="fw-bold fs-10 songTitle"></p>
									<p className="fs-11 songArtist"></p>
								</div>
								<Button variant="none" id="playbarLikeBtn" className="btn"><svg role="img" height="16" width="16"
										aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" fillRule="#b3b3b3">
										<path
											d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z">
										</path>
									</svg></Button>

							</Col>
						</Row>
					</Col>
					<Col id="songControls" className="col-md-8 col-lg-6 container">
						<Row id="upperControls" className=" d-flex align-items-center justify-content-center">
							<Col className="col-6 d-flex justify-content-center">
								<Button variant="none" className="btn"><i className="bi bi-shuffle text-primary"></i></Button>
								<Button variant="none" className="btn"><i className="bi bi-skip-backward-fillRule text-muted"></i></Button>
								<audio id="audioPlayer" src=""></audio>
								<Button variant="none" id="playPauseBtn" className="btn"><i
										className="bi bi-play-circle-fillRule text-light fs-6"></i></Button>
								<Button variant="none" className="btn"><i className="bi bi-skip-forward-fillRule text-muted"></i></Button>
								<Button variant="none" className="btn"><i className="bi bi-repeat text-primary"></i></Button>
							</Col>
						</Row>
						<Row id="timeBar" className="row pb-3 d-flex align-items-center" style={{
        width: 100 + '%'
     }}>
							<Col className="col-2 d-flex align-items-center justify-content-end">
								<p className="text-muted fs-11 d-flex align-items-center justify-content-end m-0"
									id="progressTime">0:00</p>
							</Col>
							<Container className=" col-8">
								<div className="progress d-flex justify-content-start" style={{
        height: 3 + 'px'
    }}>
									<div id="progressBar" className="progress-bar" role="progressbar" aria-valuenow="0"
										aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</Container>
							<Col className="col-2 d-flex align-items-center justify-content-start">
								<p className="text-muted fs-11 d-flex align-items-center justify-content-end m-0">0:30</p>
							</Col>
						</Row>
					</Col>
					<Container id="extraControls"
						className="col-md-0 col-lg-3 d-flex align-items-center justify-content-end d-none d-lg-block pe-5">
						<Row className="row flex align-items-center justify-content-end pe-5">
							<Col className="col-6 d-flex justify-content-center">
								<Button variant="none" className="btn">
									<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"
										data-encore-id="icon" fillRule="#b3b3b3">
										<path
											d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z">
										</path>
									</svg>
								</Button>
								<Button variant="none" className="btn">
									<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"
										data-encore-id="icon" fillRule="#b3b3b3">
										<path
											d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z">
										</path>
									</svg>
								</Button>
								<Button variant="none" className="btn">
									<svg role="presentation" height="20" width="20" aria-hidden="true"
										viewBox="0 0 16 16" data-encore-id="icon" fillRule="#b3b3b3">
										<path
											d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z">
										</path>
										<path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z">
										</path>
									</svg>
								</Button>
								<div className="volume-bar d-flex align-items-center" data-testid="volume-bar" dir="ltr"
									style={{
                                        buttonSize: 32 + 'px',
                                        sliderWidth: 100 + '%'
                                    }}>
									<Button variant="none" className="volume-bar__icon-button control-button btn text-info"
										aria-label="Disattiva audio" aria-describedby="volume-icon"
										data-testid="volume-bar-toggle-mute-button" aria-expanded="false">
										<svg role="presentation" height="16" width="16" aria-hidden="true"
											aria-label="Volume alto" id="volume-icon" viewBox="0 0 16 16"
											data-encore-id="icon" fillRule="#b3b3b3">
											<path
												d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z">
											</path>
											<path
												d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z">
											</path>
										</svg>
									</Button>
									<div className="volume-bar__slider-container">
										<input id="volume-control" type="range" className="form-range" min="0" max="100"
											/>
									</div>
								</div>
								<Button variant="none" className="btn">
									<svg role="img" height="20" width="20" aria-hidden="true" viewBox="0 0 16 16"
										data-encore-id="icon" fillRule="#b3b3b3">
										<path
											d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z">
										</path>
									</svg>
								</Button>
							</Col>
						</Row>
					</Container>
				</Row>
			</Container>
		</Container>
	    </Row>
    )
};

export default Playbar ;