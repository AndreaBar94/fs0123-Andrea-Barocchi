import { useDispatch, useSelector } from "react-redux"
import HeaderProfile from "./HeaderProfile"
import { useEffect } from "react"
import { allProfileFetchAction, singleProfileFetchAction } from "../redux/actions"
import { Link, useParams } from "react-router-dom"
import MyFooter from "./MyFooter"
import DropdownToggle from "react-bootstrap/esm/DropdownToggle"
import { Button, Col, Container, Row } from "react-bootstrap"
import Topbar from "./Topbar"

const SelectedProfilePage = () => {
    const user = useSelector(state => state.singleProfile.content)
    const dispatch = useDispatch()
    const params = useParams()
    const allProfile = useSelector((state) => state.allProfile.content);

    useEffect(()=>{
        dispatch(singleProfileFetchAction(params.id))
        dispatch(allProfileFetchAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <>
        <Topbar />
        <Container fluid className="bg-mainpage">
          <Row className="bg-mainpage px-5 gx-2 justify-content-center">
            <Col md={7} className="mx-2">
              {/* sezione principale con profile header, inserire qui a cascata i vari componenti */}
        <HeaderProfile profileData={user}/>
        </Col>
            <Col
              md={2}
              className="mx-2 d-none d-md-block  border mt-4 pt-3 ps-1 rounded-3 bg-white h-75"
            >
              <h6 className="ps-3">Persone che potresti conoscere</h6>
              {/* sezione secondaria, notizie e suggerimenti su sidebar, inserire qui a cascata i vari componenti */}
              {/* qui sotto il map che pesca tutti i profili */}
              {allProfile &&
                allProfile.slice(0, 5).map((profile) => {
                  return (
                    <div key={profile._id} className="mt-3 py-2 smallP">
                      <Container className="  rounded-3 ">
                        <Row className="">
                          <Col xs={3}>
                            {/* img */}
                            <img
                              src={profile.image}
                              alt="..."
                              className="img-fluid rounded-circle "
                            />{" "}
                          </Col>
                          <Col xs={8} className="px-0">
                            {/* nome */}
                            <h6 className="m-0">
                              <Link to={`/selected-profile/${profile._id}`} className="footer-links">
                                {profile.name} {profile.surname}
                              </Link>
                            </h6>
                            {/* bio */}
                            <p className="text-truncate m-0">{profile.bio}</p>
                            {/* titolo lavorativo */}
                            <p className="text-truncate m-0">{profile.title}</p>
                            <Button
                              className="btn-other-profile rounded-pill border-dark d-flex align-items-center py-1 mt-2 smallP"
                              variant="outlined"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                data-supported-dps="16x16"
                                fill="currentColor"
                                className="mercado-match mx-1"
                                width="16"
                                height="16"
                                focusable="false"
                              >
                                <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                              </svg>
                              Collegati
                            </Button>
                          </Col>

                          {/* altri dati estraibili
                            <p>{profile.email}</p>
                        <p>{profile.username}</p>
                        <p>{profile.area}</p>
                        <p>{profile.createdAt}</p>
                        <p>{profile.updatedAt}</p> */}
                        </Row>
                      </Container>
                    </div>
                  );
                })}
              <div className="border-top mt-5">
                <DropdownToggle className="bg-transparent text-dark border-0 w-100">
                  Visualizza altro
                </DropdownToggle>
              </div>
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </>
    )
}
export default SelectedProfilePage