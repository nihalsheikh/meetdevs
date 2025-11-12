const conf = {
	posthogKey: process.env.NEXT_PUBLIC_POSTHOG_KEY,
	posthogHost: process.env.NEXT_PUBLIC_POSTHOG_HOST,
	nodeEnv: process.env.NODE_ENV || "development",
};

export default conf;
