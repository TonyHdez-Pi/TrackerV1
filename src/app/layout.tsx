import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Tracker V1",
	description: "Created by Antonio Hernandez",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>{children}</body>
		</html>
	);
}
