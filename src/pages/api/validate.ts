import { validate } from "spwmini/middleware";
import { SPWORLDS_CONFIG } from "../../config/spworlds";

export default validate(SPWORLDS_CONFIG.APP_TOKEN);
