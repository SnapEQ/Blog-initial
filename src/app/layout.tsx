import { AuthProvider } from "@/context/loginContext";
import Header from "./_components/header";
import "./page.css";
import { Bruno_Ace } from "next/font/google";

const brunoAce = Bruno_Ace({
	subsets: ["latin"],
	weight: "400",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={brunoAce.className}>
			<body>
				<AuthProvider>
					<Header />
					{children}
				</AuthProvider>
			</body>
		</html>
	);
}
