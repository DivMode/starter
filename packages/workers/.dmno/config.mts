import { DmnoBaseTypes, defineDmnoService, pick } from "dmno";

export default defineDmnoService({
	// no `name` specified - will inherit from package.json
	schema: {
		CLOUDFLARE_ACCOUNT_ID: {
			extends: pick(),
		},
	},
});
