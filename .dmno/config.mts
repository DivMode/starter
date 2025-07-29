import { DmnoBaseTypes, defineDmnoService } from "dmno";

export default defineDmnoService({
	settings: {
		redactSensitiveLogs: true,
		interceptSensitiveLeakRequests: true,
		preventClientLeaks: true,
	},
	name: "root",
	schema: {
		CLOUDFLARE_ACCOUNT_ID: {
			value: "test",
		},
	},
});
