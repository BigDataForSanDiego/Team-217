export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="min-h-screen bg-primaryLight">{children}</main>;
}
