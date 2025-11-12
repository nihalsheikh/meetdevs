export type EventItem = {
	image: string;
	title: string;
	slug: string;
	location: string;
	date: string;
	time: string;
};

export const events: EventItem[] = [
	{
		image: "/images/event1.png",
		title: "JSConf US 2026",
		slug: "jsconf-us-2026",
		location: "Seattle, WA, USA",
		date: "2026-03-10",
		time: "09:00 AM",
	},
	{
		image: "/images/event2.png",
		title: "React Summit 2025",
		slug: "react-summit-2025",
		location: "Amsterdam, Netherlands",
		date: "2025-11-18",
		time: "10:00 AM",
	},
	{
		image: "/images/event3.png",
		title: "DevOpsDays London 2025",
		slug: "devopsdays-london-2025",
		location: "London, United Kingdom",
		date: "2025-12-03",
		time: "09:30 AM",
	},
	{
		image: "/images/event4.png",
		title: "HackMIT 2026",
		slug: "hackmit-2026",
		location: "Cambridge, MA, USA",
		date: "2026-01-24",
		time: "02:30 PM",
	},
	{
		image: "/images/event5.png",
		title: "Google I/O 2026",
		slug: "google-io-2026",
		location: "Mountain View, CA, USA",
		date: "2026-05-12",
		time: "06:00 PM",
	},
	{
		image: "/images/event6.png",
		title: "ng-conf 2026",
		slug: "ng-conf-2026",
		location: "Salt Lake City, UT, USA",
		date: "2026-04-07",
		time: "11:30 AM",
	},
	{
		image: "/images/event-full.png",
		title: "KubeCon + CloudNativeCon Europe 2026",
		slug: "kubecon-cloudnative-europe-2026",
		location: "Barcelona, Catalonia, Spain",
		date: "2026-05-05",
		time: "04:00 PM",
	},
];
