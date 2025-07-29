import {
	OnePasswordDmnoPlugin,
	OnePasswordTypes,
} from "@dmno/1password-plugin";
import { DmnoBaseTypes, defineDmnoService } from "dmno";

// token will be injected using types by default
const opSecrets = new OnePasswordDmnoPlugin("1pass", {
	fallbackToCliBasedAuth: true,
});

export default defineDmnoService({
	settings: {
		redactSensitiveLogs: true,
		interceptSensitiveLeakRequests: true,
		preventClientLeaks: true,
	},
	schema: {
		CLOUDFLARE_ACCOUNT_ID: {
			value: opSecrets.itemByReference("op://Server/Cloudflare/account id"),
			required: true,
			ui: {
				icon: "devicon:cloudflare",
				color: "F38020", // Cloudflare brand orange
			},
		},
	},
});
