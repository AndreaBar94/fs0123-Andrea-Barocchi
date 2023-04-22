import { Container } from "react-bootstrap";

const SidebarFriends= () => {
    return(
        <Container className="col-0 col-lg-2 px-0  m-0 d-none d-lg-block bg-dark" id="friendsActivity">
			<div>
				<Container fluid className=" bg-dark py-4 px-3">
					<p className="text-light">Friends activity</p>
				</Container>
				<Container fluid className=" bg-dark py-3 px-3 d-flex align-items-start" id="friendsProfile">
					<img src="assets/imgs/icons8-user-64.png" alt="profile_pic" className="img-fluid" id="friendsPicture" />
					<div className="text-light px-2 m-0 friendsInfo">
						<p className="fs-11 fw-bold">Andrea</p>
						<p className="fs-11 fw-light">Highway to Hell </p>
						<p className="fs-11 fw-light">AC/DC</p>
					</div>
				</Container>
				<Container fluid className="bg-dark py-3 px-3 d-flex align-items-start" id="friendsProfile">
					<img src="assets/imgs/icons8-user-64.png" alt="profile_pic" className="img-fluid" id="friendsPicture" />
					<div className="text-light px-2 m-0 friendsInfo">
						<p className="fs-11 fw-bold">Marianna </p>
						<p className="fs-11 fw-light">Zen</p>
						<p className="fs-11 fw-light">Fake News</p>
					</div>
				</Container>
				<Container fluid className="bg-dark py-3 px-3 d-flex align-items-start" id="friendsProfile">
					<img src="assets/imgs/icons8-user-64.png" alt="profile_pic" className="img-fluid" id="friendsPicture" />
					<div className="text-light px-2 m-0 friendsInfo">
						<p className="fs-11 fw-bold">Luqman Mohammed</p>
						<p className="fs-11 fw-light">We are the Champions</p>
						<p className="fs-11 fw-light">Queen</p>
					</div>
				</Container>
			</div>
		</Container>
    )
};

export default SidebarFriends;