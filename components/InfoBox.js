import { css, jsx } from '@emotion/react'

const InfoBox = ({ children }) => (
  <div css={css`
      margin-top: 20px;
      margin-bottom: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
      border-top: 1px solid #ececec;
      border-bottom: 1px solid #ececec;
    `}>
    {children}
  </div>
)

export default InfoBox
