import React from 'react'
import { Button, Col } from 'react-bootstrap'

export default function AuthBanner() {
    return (
        <Col className="col-md-6 col-12 btn-rainbow-card-ik ">
            <div className="ik-banner-big h-100">
                <img
                    alt=""
                    aria-hidden="true"
                    src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                    width={200}
                    height={120}
                />                
                <span className="greenLine2" />
                <div className="">
                    <span className="text-blue fw-bold">
                        Aradığın <span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"</span>İş
                        <span style={{ color: "rgb(0, 176, 120)" }}>"&nbsp;</span>
                        Burada!
                    </span>
                </div>
                <div className="d-flex w-100 flex-column justify-content-center align-items-center">
                    <Button className='btn d-md-inline-block mt-5 btn-darkblue2'>Başvur</Button>
                </div>
            </div>
        </Col>
    )
}
