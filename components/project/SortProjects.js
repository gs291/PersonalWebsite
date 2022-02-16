import {useSelector} from 'react-redux';
import {styled} from '@mui/material/styles';
import {Chip, Typography} from '@mui/material';

import {getMobile} from '../../lib/redux/selectors';
import {CHIP_PREFIX, SELECT_CONTENT_CHIP, ga4SendSelectContent} from '../../lib/utils/ga4';


const SortContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px 0;
  
  margin-top: 20px;
  margin-bottom: 50px;
  
  z-index: 5;
`;

const ChipContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
`;

const sortLanguages = [
    {
        "label": "JavaScript",
        "sortBy": "JS"
    },
    {
        "label": "Python",
        "sortBy": "Python"
    },
    {
        "label": "Java",
        "sortBy": "Java"
    },
    {
        "label": "SystemVerilog",
        "sortBy": "SystemVerilog"
    }
]

const GA4_SORT_PROJECTS_CHIP_ID = "SORT_PROJECTS";

export default function SortProjects({sortBy, setSortBy}) {
    const mobile = useSelector(getMobile);

    const handleClick = (language) => {
        setSortBy(prevSortBy => {
            if (prevSortBy === language) {
                return "";
            }
            return language;
        });
        ga4SendSelectContent(SELECT_CONTENT_CHIP, {
            item_id: `${CHIP_PREFIX}${GA4_SORT_PROJECTS_CHIP_ID}`,
            name: language,
        });
    }

    return (
        <>
            <SortContainer>
                <Typography variant={mobile ? 'h5' : 'h4'}>
                    Sort projects by a language
                </Typography>
                <ChipContainer>
                    {sortLanguages.map(language => (
                        <Chip
                            key={language.sortBy}
                            label={language.label}
                            onClick={() => handleClick(language.sortBy)}
                            variant={sortBy === language.sortBy ? 'filled' : 'outlined'}
                            color="primary"
                        />
                    ))}
                </ChipContainer>
            </SortContainer>
        </>
    );
}