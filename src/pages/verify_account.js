import React, { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { UserServiceIml } from "../actions/user-actions";
import { Alert } from 'react-bootstrap';
import { Button } from '@chakra-ui/react';
import { useLocation } from "@reach/router";
import { parse } from "query-string";
import { useToasts } from 'react-toast-notifications';

const VerifyEmail = () => {
    const { addToast } = useToasts();
    const location = useLocation();
    const searchParams = parse(location.search);
    const token = searchParams.token;
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        UserServiceIml.verifyEmail(token).then((response) => {
            if (response.data.errCode == "200" || response.data.errCode == null) {
                setLoading(false);
            } else {
                setLoading(true);
                addToast("some error occurred. Please try again", {
                    appearance: 'info',
                    autoDismiss: true,
                })
            }
        });
    })
    return (
        <>
            <PageWrapper>
                <div className="header pt-11 pos-abs-tl w-100">
                    <div className="container">
                        <div className="row">
                        </div>
                    </div>
                </div>
                <div className="404-page bg-default min-h-100vh flex-all-center pt-lg-15 pt-xxl-17 pt-27 pb-lg-0 pb-18">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 px-lg-9">
                            {loading ? (
                        <span className="spinner-border spinner-border-sm ml-1" role="status" aria-hidden="true"></span>
                      ) : <div class="card">
                      <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
                        <i class="checkmark">✓</i>
                      </div>
                        <h1>Success</h1> 
                        <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
                      </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
};
export default VerifyEmail;
