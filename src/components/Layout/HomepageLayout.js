import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
// import {connect} from "react-redux";
// import {
//     // initAxios,
//     userLogin,
// } from "../../../../redux/auth";
import { SnackbarProvider } from "notistack";
import Footer from "../Footer/Footer";
import Notifier from "../Notifier/Notifier";
// import Notifier from "../../Notifier";

function HomepageLayout({
    // userLogin,
    // initAxios,
    // load,
    children,
    
}) {
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     // props.initAxios();

    //     if (localStorage.getItem("isAuth")) {
    //         console.log("userLogin =>>>>>");
    //         // userLogin();
    //     }
    //     setLoading(false);
    // }, []);
    return (
        <>
            <SnackbarProvider>
                <Notifier/>
                <Header/>
                {/* {load || loading ? <div>در حال بارگذاری</div> : children} */}
                {children}
                <Footer/>
            </SnackbarProvider>
        </>
    );
}

// const mapStateToProps = ({user: {load}}) => ({
//     load,
// });
// export default connect(mapStateToProps, {
//     userLogin,
//     //  initAxios
// })(Layout);


export default HomepageLayout