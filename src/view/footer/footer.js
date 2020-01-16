import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
    width: 100%;
    height: auto;
    align-items: center;
    background-color: #222;
    margin: -30px 0 0 0;

    & h6 {
    color: #999;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: lighter;
    padding: 30px 0 0 0;
    }
`;

function Footer() {
    return(
            <Container>
                <h6>
                    Copyright © 2018 mOndOra. All Rights Reserved.
                    <br />
                    mOndOra s.r.l. S.B. - Via Uberto Visconti di Modrone 33 - 20122 Milano c.f. e p. iva 03680680968 cap. soc. 105.000 i.v. - Rea n. 1694989
                    <br />
                    soggetta all’attività di direzione e coordinamento di TeamSystem S.p.A.,
                    <br />
                    codice fiscale e iscrizione presso la CCIAA di Pesaro n. 01035310414
                    <br />
                    Privacy 
                </h6>
            </Container>
    )
}
 
export default Footer;