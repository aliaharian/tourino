import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { SnackbarProvider } from "notistack";
import Footer from "../Footer/Footer";
import SmallHeader from "../Header/SmallHeader";
import Notifier from "../Notifier/Notifier";
import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import { enqueueSnackbar } from "../../../redux/user";
function Layout({

    children,
    dest,
    origin,
    error
}) {

    const Router = useRouter();
    const Dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            Router.push('/', undefined, { shallow: true })
            Dispatch(enqueueSnackbar(
                {
                    message: 'پارامتر های ارسالی صحیح نیست',
                    options: {
                        variant: 'error'
                    }
                }))
        }
    }, [error])
    return (
        <>
            <SnackbarProvider>
                <Notifier />
                <SmallHeader dest={dest} origin={origin} />
                {children}
                <Footer />
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


export default Layout