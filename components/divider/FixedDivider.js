import styled from "@emotion/styled";
import {Divider} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";

export default function FixedDivider({className, width, backgroundColor}) {
    const FDivider = styled(Divider)`
      width: ${width}%;
      margin-bottom: 30px;
    
      background-color: ${backgroundColor ? backgroundColor : siteColors.text.dark};
    `;

    return (
      <>
          <FDivider className={className}/>
      </>
    );
}