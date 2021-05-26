import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../../../assets/loginimage.PNG";  
import googleImage from '../../../assets/google.svg'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Login = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-5">
                <CCardBody>
                  <CForm>
                  <CRow>
                      <CCol xs="12" className="text-left" style={{ padding: 0}}>
                      <Link to="/home">
                      <CButton color="link"  className="SignIn-button">
                      Sign In
                        </CButton>
                    </Link> 
                      </CCol>
                    </CRow>

                    <h1>Next Generation Employee Engagement</h1>
                    <p className="text-muted">
                      Gigarena is a gig marketplace for DevOps work and a
                      platform for companies to access a wide pool of talent
                      that are constantly getting better though contineous
                      upskilling through technical challenges & task.
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password >
                        </CButton>
                      </CCol>
                    </CRow>

                    <CRow>
                      <CCol xs="12">
                      <CButton color="primary" className="Signup-button">Signup</CButton>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs="12" className="text-center">
                      <h5>Or</h5>
                      </CCol>
                    </CRow>
                    <CRow>
                    <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0 text-left">
                        <CButton block variant="outline"  color="primary" size="sm" className="px-0"><CIcon  size="sm" name="cib-linkedin" /><span className="mfs-2">Sign in with Linkedin</span></CButton>
                      </CCol>
                      <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0 text-left">
                        <CButton block variant="outline"  color="primary" size="sm" className="px-0">
                        <span className="mfs-2 btn-inner--icon"><img src={googleImage} alt="googleImage" className="googleImage"/> Signin with Google</span></CButton>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs="3">
                      </CCol>
                      <CCol xs="9" className="text-right">
                        <CButton color="link" className="px-0">
                         Don't have an account? Register >
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="p-4 loginright-panel">
                <img
                  src={loginImage}
                  alt="Loginimage"
                  className="loginright-image"
                />
               
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
