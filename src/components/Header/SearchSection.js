
import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import Searchbar from '../Searchbar';
import useStyles from './Style'
const SearchSection = ({ scrollPos , showSearch , setShowSearch , dest , origin }) => {
    const classes = useStyles();
    const Router = useRouter();
    const query = Router.query
    const [transport, setTransport] = useState(query.transport || 'all')

    
    return (
        <div className={classes.searchSectionContainer}>
            <div className={clsx(classes.transportContainer , (scrollPos && showSearch) && classes.transportContainerDark)} style={(scrollPos && !showSearch) ? { display: 'none' } : {}}>
                {/* <div onClick={() => { setTransport('all') }} className={transport === 'all' && classes.transportActive}>
                    <p>همه</p>
                </div>
                <div onClick={() => { setTransport('train') }} className={transport === 'train' && classes.transportActive}>
                    <p>قطار</p>
                </div>
                <div onClick={() => { setTransport('bus') }} className={transport === 'bus' && classes.transportActive}>
                    <p>اتوبوس</p>
                </div> */}
            </div>
            <div className={clsx(classes.searchbarContainer, (scrollPos && !showSearch) && classes.searchbarContainerSm )}>
                <Searchbar dest={dest} origin={origin} query={query} transport={transport} showSearch={showSearch} setShowSearch={(e)=>{setShowSearch(e)}} scrollPos={scrollPos}/>
            </div>

        </div>
    )

}

export default SearchSection