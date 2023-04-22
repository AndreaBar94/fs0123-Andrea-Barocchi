import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbumIndexAction, fetchAlbumsAction } from "../redux/actions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainContent = () => {
	const indexAlbum = useSelector((state) => state.indexAlbum.content)
	const albums = useSelector((state) => state.albums.content)
	const dispatch = useDispatch()
	const[album1, setAlbum1] = useState({})
	const[album2, setAlbum2] = useState({})
	const[album3, setAlbum3] = useState({})
	const[album4, setAlbum4] = useState({})
	const[album5, setAlbum5] = useState({})
	const[album6, setAlbum6] = useState({})
	const[album7, setAlbum7] = useState({})
	const[album8, setAlbum8] = useState({})
	const[album9, setAlbum9] = useState({})

	useEffect(()=>{
		fetchAlbumIndexAction(dispatch)
		fetchAlbumsAction(dispatch)
		fetchAlbum1()
		fetchAlbum2()
		fetchAlbum3()
		fetchAlbum4()
		fetchAlbum5()
		fetchAlbum6()
		fetchAlbum7()
		fetchAlbum8()
		fetchAlbum9()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	const fetchAlbum1 = async () => {
		try {
			const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/395982457");
			if (response.ok) {
				const data = await response.json();
				setAlbum1(data)
				
			}
		} catch (error) {
			console.log(error);
		}
	};
	const fetchAlbum2 = async () => {
		try {
			const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/394982457");
			if (response.ok) {
				const data = await response.json();
				setAlbum2(data)
				
			}
		} catch (error) {
			console.log(error);
		}
	};
	const fetchAlbum3 = async () => {
		try {
			const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/395982557");
			if (response.ok) {
				const data = await response.json();
				setAlbum3(data)
				
			}
		} catch (error) {
			console.log(error);
		}
	};
	const fetchAlbum4 = async () => {
		try {
			const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/395982357");
			if (response.ok) {
				const data = await response.json();
				setAlbum4(data)
				
			}
		} catch (error) {
			console.log(error);
		}
	};
	const fetchAlbum5 = async () => {
		try {
			const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/395983357");
			if (response.ok) {
				const data = await response.json();
				setAlbum5(data)
				
			}
		} catch (error) {
			console.log(error);
		}
	};
	const fetchAlbum6 = async () => {
		try {
			const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/395981357");
			if (response.ok) {
				const data = await response.json();
				setAlbum6(data)
				
			}
		} catch (error) {
			console.log(error);
		}
	};
	const fetchAlbum7 = async () => {
		try {
			const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/395986357");
			if (response.ok) {
				const data = await response.json();
				setAlbum7(data)
				
			}
		} catch (error) {
			console.log(error);
		}
	};
	const fetchAlbum8 = async () => {
		try {
			const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/395985357");
			if (response.ok) {
				const data = await response.json();
				setAlbum8(data)
				
			}
		} catch (error) {
			console.log(error);
		}
	};
	const fetchAlbum9 = async () => {
		try {
			const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/395982347");
			if (response.ok) {
				const data = await response.json();
				setAlbum9(data)
				
			}
		} catch (error) {
			console.log(error);
		}
	};

    return(
		<>
			{indexAlbum.length > 0 && (
				<div id="mainContent" className="col-12 col-lg-8 px-0 overflow-scroll">
                <main className="py-2 pb-5 px-4 m-0 overflow-auto d-none d-lg-block" style={{height: 90 + 'vh'}}>
				<Container className="container-fluid">
					<div className="card mb-3 border border-0" id="homeMainCard">
						<div className="row g-0">
							<div className="col-md-5 col-lg-6 col-xl-5">
								<Link to={"/album/" + indexAlbum[0].id} id="albumCoverLink">
									<img src={indexAlbum[0].cover_big} className="img-fluid rounded-start" alt="album cover" id="albumCoverTop" />
								</Link>
							</div>
							<div id="albumSpotlight" className="col-md-7 col-lg-6 col-xl-7 text-truncate">
								<div className="card-body p-0 px-4 text-truncate">
									<p className="card-text fw-bold text-light fs-11 py-2">ALBUM</p>
									<h5 id="albumNameTop"
										className="card-title fs-2 text-light b-inline-block text-truncate">
											{indexAlbum[0].title}
									</h5>
									<p id="albumArtistTop" className="card-text fs-8 text-light">{indexAlbum[0].artist.name}</p>
									<p className="card-text fw-light text-light">Ascolta il nuovo album!</p>
									<div className="py-3">
										<button className="btn btn-primary rounded-5 px-4 py-2 fs-10"
											id="spotlightPlay">Play</button>
										<button
											className="btn btn-dark border border-1 border-info rounded-5 px-4 py-2 fs-10 ms-3">Salva</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<Container className="container-fluid">
						<p className="text-light fs-8 fw-bold">Buonasera</p>
						<div className="container-fluid">
							<div className="row">
								<div className="col-4">
									<button className="btn" style={{width: 100 + '%'}}>
										<div
											className="card mb-3 bg-secondary text-light mainPlaylistCards border border-0">
											<div className="row g-0 align-items-center">
												<div className="col-md-3 d-flex justify-content-start">
													<img src="assets/imgs/main/image-3.jpg"
														className="img-fluid rounded-start" alt="playlist cover"
														style={{width: 90 + 'px', height: 'auto'}} />
												</div>
												<div className="col-md-9">
													<div className="card-body d-flex justify-content-start">
														<p className="card-text fs-10 fw-bold text-start text-truncate">
															Massima
															Concentrazione</p>
													</div>
												</div>
											</div>
										</div>
									</button>
								</div>
								<div className="col-4">
									<button className="btn" style={{width: 100 + '%'}}>
										<div
											className="card mb-3 bg-secondary text-light mainPlaylistCards border border-0">
											<div className="row g-0 align-items-center">
												<div className="col-md-3 d-flex justify-content-start">
													<img src="assets/imgs/main/image-4.jpg"
														className="img-fluid rounded-start" alt="playlist cover"
														style={{width: 90 + 'px', height: 'auto'}} />
												</div>
												<div className="col-md-9 d-flex justify-content-start">
													<div className="card-body d-flex justify-content-start">
														<p className="card-text fs-10 fw-bold text-start text-truncate">
															Peaceful
															Piano</p>
													</div>
												</div>
											</div>
										</div>
									</button>
								</div>
								<div className="col-4">
									<button className="btn" style={{width: 100 + '%'}}>
										<div
											className="card mb-3 bg-secondary text-light mainPlaylistCards border border-0">
											<div className="row g-0 align-items-center">
												<div className="col-md-3 d-flex justify-content-start">
													<img src="assets/imgs/main/image-5.jpg"
														className="img-fluid rounded-start" alt="playlist cover"
														style={{width: 90 + 'px', height: 'auto'}} />
												</div>
												<div className="col-md-9 d-flex justify-content-start">
													<div className="card-body d-flex justify-content-start">
														<p className="card-text fs-10 fw-bold text-start text-truncate">
															Lo-Fi
															Beats</p>
													</div>
												</div>
											</div>
										</div>
									</button>
								</div>
							</div>
							<div className="row">
								<div className="col-4">
									<button className="btn" style={{width: 100 + '%'}}>
										<div
											className="card mb-3 bg-secondary text-light mainPlaylistCards border border-0">
											<div className="row g-0 align-items-center">
												<div className="col-md-3 d-flex justify-content-start">
													<img src="assets/imgs/main/image-6.jpg"
														className="img-fluid rounded-start" alt="playlist cover"
														style={{width: 90 + 'px', height: 'auto'}} />
												</div>
												<div className="col-md-9 d-flex justify-content-start">
													<div className="card-body d-flex justify-content-start">
														<p className="card-text fs-10 fw-bold text-start text-truncate">Jazz
															Vibes</p>
													</div>
												</div>
											</div>
										</div>
									</button>
								</div>
								<div className="col-4">
									<button className="btn" style={{width: 100 + '%'}}>
										<div
											className="card mb-3 bg-secondary text-light mainPlaylistCards border border-0">
											<div className="row g-0 align-items-center">
												<div className="col-md-3 d-flex justify-content-start">
													<img src="assets/imgs/main/image-7.jpg"
														className="img-fluid rounded-start" alt="playlist cover"
														style={{width: 90 + 'px', height: 'auto'}} />
												</div>
												<div className="col-md-9 d-flexjustify-content-start">
													<div className="card-body d-flex justify-content-start">
														<p className="card-text fs-10 fw-bold text-start text-truncate">
															Caffé
															del Buongiorno</p>
													</div>
												</div>
											</div>
										</div>
									</button>
								</div>
								<div className="col-4">
									<button className="btn" style={{width: 100 + '%'}}>
										<div
											className="card mb-3 bg-secondary text-light mainPlaylistCards border border-0">
											<div className="row g-0 align-items-center">
												<div className="col-md-3 d-flex justify-content-start">
													<img src="assets/imgs/main/image-8.jpg"
														className="rounded-start img-fluid" alt="playlist cover" />
												</div>
												<div className="col-md-9">
													<div className="card-body d-flex justify-content-start">
														<p className="card-text fs-10 fw-bold text-start text-truncate">
															sanguegiovane</p>
													</div>
												</div>
											</div>
										</div>
									</button>
								</div>
							</div>
						</div>
					</Container>

					<Container className="container-fluid py-2 ">
						<div className="container-fluid d-flex justify-content-between align-items-baseline py-2">
							<p className="text-light fs-8 fw-bold">Made for you</p>
							<button className="btn">
								<p className="text-light fs-11 fw-bold">SEE MORE</p>
							</button>
						</div>

						<div className="container-fluid ">
							<div className="row row-cols-md-5 madeForYouRow ">
								<div className="col madeForYouA"><Link to={"/album/" + albums[0].id}><img src={albums[0].cover} alt="album-logo" /></Link></div>
								<div className="col madeForYouB"><Link to={"/album/" + album1.id}><img src={album1.cover} alt="album-logo" /></Link></div>
								<div className="col madeForYouC"><Link to={"/album/" + album2.id}><img src={album2.cover} alt="album-logo" /></Link></div>
								<div className="col madeForYouD"><Link to={"/album/" + album3.id}><img src={album3.cover} alt="album-logo" /></Link></div>
								<div className="col madeForYouE"><Link to={"/album/" + album4.id}><img src={album4.cover} alt="album-logo" /></Link></div>
							</div>
						</div>
					</Container>
					<Container className="container-fluid py-2">
						<Container className="container-fluid d-flex justify-content-between align-items-baseline py-2">
							<p className="text-light fs-8 fw-bold">Your episodes</p>
							<button className="btn">
								<p className="text-light fs-11 fw-bold">SEE MORE</p>
							</button>
						</Container>

						<Container className="container-fluid">
							<div className="row row-cols-md-5 yourEpisodesRow">
								<div className="col yourEpisodesA"><Link to={"/album/" + album5.id}><img src={album5.cover} alt="album-logo" /></Link></div>
								<div className="col yourEpisodesB"><Link to={"/album/" + album6.id}><img src={album6.cover} alt="album-logo" /></Link></div>
								<div className="col yourEpisodesC"><Link to={"/album/" + album7.id}><img src={album7.cover} alt="album-logo" /></Link></div>
								<div className="col yourEpisodesD"><Link to={"/album/" + album8.id}><img src={album8.cover} alt="album-logo" /></Link></div>
								<div className="col yourEpisodesE"><Link to={"/album/" + album9.id}><img src={album9.cover} alt="album-logo" /></Link></div>
							</div>
						</Container>
					</Container>
                </Container>
			</main>
        </div>
			)}
		</>
        
    )
};

export default MainContent ;