import {useEffect} from 'react';
import {styled} from '@mui/material/styles';
import {useMediaQuery} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';

import Header from './Header';
import Footer from '../footer/Footer';
import Introduction from './Introduction';
import {updateMobile} from '../../lib/redux/actions';
import {getDarkMode} from '../../lib/redux/selectors';

const PageContainer = styled('div')`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Foot = styled(Footer)`
  justify-content: center;
  align-items: center;
  transition: 0.3s;
`;

const Main = styled('main')`
  flex: 1;
  background-color: ${props => props.theme.palette.background.default};
  padding-bottom: 30px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
`;

const Intro = styled(Introduction)`
  transition: 0.3s;
`;

export default function Page(props) {
    const dispatch = useDispatch();
    const darkMode = useSelector(getDarkMode);
    const screen = useMediaQuery('(max-width: 960px)');

    useEffect(() => {
        dispatch(updateMobile(screen));
    }, [screen]);

    return (
        <>
            <Header />
            <PageContainer>
                <Intro />
                <Main data-dm={darkMode}>
                    {props.children}
                </Main>
                <Foot />
            </PageContainer>
        </>
    );
}