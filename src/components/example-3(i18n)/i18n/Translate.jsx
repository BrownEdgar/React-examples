import { FormattedMessage } from "react-intl";

const Translate = (id, value = {}) => (
  <FormattedMessage id={id} values={{ ...value }} />
);

export default Translate;
